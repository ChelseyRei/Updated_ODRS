$(function () {
    var STORAGE_BRANCH_KEY = 'odrsSelectedBranch';
    var STORAGE_SUBTEXT_KEY = 'odrsSelectedSubtext';
    var isHomePage = $('#branch').length > 0;
    var isInstructionsPage = $('#instructions-page').length > 0;
    var step1FooterVisible = true;

    function applyFooterVisibility(show) {
        $('#div_footer').toggleClass('footer-hidden', !show);
        $('body').toggleClass('footer-is-hidden', !show);
    }

    function updateHomeFooterByScroll() {
        if (!isHomePage) {
            return;
        }

        if ($('#instructions-page').is(':visible')) {
            applyFooterVisibility(true);
            return;
        }

        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        var hasScrollableContent = docHeight > windowHeight + 40;
        var nearBottom = (scrollTop + windowHeight) >= (docHeight - 120);

        applyFooterVisibility(hasScrollableContent && nearBottom);
    }

    function showInstructionsView(show) {
        if (!isHomePage || !isInstructionsPage) {
            return;
        }

        $('#branch').toggle(!show);
        $('#instructions-page').toggle(show);
        $(window).scrollTop(0);
        updateHomeFooterByScroll();
    }

    function syncAccordionCarets($target, isExpanded) {
        var selector = $target && $target.length
            ? '[href="#' + $target.attr('id') + '"], [data-target="#' + $target.attr('id') + '"]'
            : '.odrs-accordion-toggle';

        $('.odrs-accordion-toggle')
            .filter(selector)
            .toggleClass('collapsed', !isExpanded)
            .attr('aria-expanded', isExpanded);
    }

    function hydrateSelectedBranch() {
        if (!isHomePage) {
            return;
        }

        var savedBranch = sessionStorage.getItem(STORAGE_BRANCH_KEY);
        var savedSubtext = sessionStorage.getItem(STORAGE_SUBTEXT_KEY);

        if (savedBranch !== null) {
            $('#selected-branch-name').text(savedBranch);
        }

        var $subtext = $('#selected-branch-subtext');
        if (savedSubtext) {
            $subtext.text(savedSubtext).show();
        } else {
            $subtext.text('').hide();
        }
    }

    function resetBranchPanelsToHidden() {
        $('.advisory-row details').prop('open', false);
    }

    function bindEvents() {
        $('#read-instructions-btn').on('click', function (e) {
            if ($('#instructions-page').length) {
                e.preventDefault();
                showInstructionsView(true);
            }
        });

        $('#back-to-home-btn').on('click', function () {
            showInstructionsView(false);
        });

        $('.odrs-accordion').on('shown.bs.collapse', '.panel-collapse', function () {
            syncAccordionCarets($(this), true);
            updateHomeFooterByScroll();
        });

        $('.odrs-accordion').on('hidden.bs.collapse', '.panel-collapse', function () {
            syncAccordionCarets($(this), false);
            updateHomeFooterByScroll();
        });

        $('#registrar-toggle-btn').on('click', function () {
            var $btn = $(this);
            var nextExpanded = $btn.attr('aria-expanded') !== 'true';
            $btn.attr('aria-expanded', nextExpanded);
            $('#registrar-list').stop(true, true).slideToggle(180);
        });

        $('.registrar-link').on('click', function () {
            var $link = $(this);
            var branch = $link.data('branch');
            var subtext = $link.data('subtext');

            $('.registrar-link').removeClass('is-selected').attr('aria-pressed', 'false');
            $link.addClass('is-selected').attr('aria-pressed', 'true');

            if (branch !== undefined) {
                sessionStorage.setItem(STORAGE_BRANCH_KEY, String(branch));
            }
            if (subtext !== undefined) {
                sessionStorage.setItem(STORAGE_SUBTEXT_KEY, String(subtext));
            } else {
                sessionStorage.removeItem(STORAGE_SUBTEXT_KEY);
            }
        });

        $('.branch-details-btn').on('click', function () {
            var $btn = $(this);
            var isSelected = !$btn.hasClass('is-selected');
            $btn.toggleClass('is-selected', isSelected).attr('aria-pressed', isSelected);
        });

        $('.advisory-row').on('toggle', 'details', updateHomeFooterByScroll);

        $(window).on('scroll resize', function () {
            if (isHomePage) {
                updateHomeFooterByScroll();
            } else {
                applyFooterVisibility(step1FooterVisible);
            }
        });
    }

    function init() {
        $('#header-actions').toggle(isHomePage || isInstructionsPage);

        if (isHomePage) {
            hydrateSelectedBranch();
            resetBranchPanelsToHidden();
            updateHomeFooterByScroll();
        } else {
            applyFooterVisibility(step1FooterVisible);
        }

        bindEvents();
    }

    init();
});