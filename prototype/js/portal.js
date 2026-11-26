$(function () {
    var STORAGE_BRANCH_KEY = 'odrsSelectedBranch';
    var STORAGE_SUBTEXT_KEY = 'odrsSelectedSubtext';
    var isHomePage = $('#branch').length > 0;
    var step1FooterVisible = true;
    var homeManualFooterOverride = null;

    function applyFooterVisibility(show) {
        $('#div_footer').toggleClass('footer-hidden', !show);
        $('body').toggleClass('footer-is-hidden', !show);
    }

    function updateHomeFooterByScroll() {
        if (!isHomePage) {
            return;
        }

        if (homeManualFooterOverride !== null) {
            applyFooterVisibility(homeManualFooterOverride);
            return;
        }

        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        var hasScrollableContent = docHeight > windowHeight + 40;
        var nearBottom = (scrollTop + windowHeight) >= (docHeight - 120);

        applyFooterVisibility(hasScrollableContent && nearBottom);
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

    function setPanelCollapsed($card, collapsed, instant, onComplete) {
        $card.toggleClass('is-collapsed', collapsed);
        $card.find('.panel-header-btn').attr('aria-expanded', !collapsed);

        var $body = $card.find('.panel-card-body');
        if (instant) {
            $body.stop(true, true).toggle(!collapsed);
            if (typeof onComplete === 'function') {
                onComplete();
            }
            return;
        }

        if (collapsed) {
            $body.stop(true, true).slideUp(180, onComplete);
        } else {
            $body.stop(true, true).slideDown(180, onComplete);
        }
    }

    function resetBranchPanelsToHidden() {
        $('.advisory-row details').prop('open', false);
        $('.advisory-row .warning-panel-card, .advisory-row .payment-panel-card').each(function () {
            setPanelCollapsed($(this), true, true);
        });
    }

    function toggleSampleVideoPreview(showInfo) {
        var $player = $('#sample-linkbiz-player');
        if (!$player.length) {
            return;
        }
        $player.find('.sample-video-overlay').toggle(!showInfo);
        $player.find('.sample-video-info').toggle(!!showInfo);
    }

    function bindEvents() {
        $('#registrar-toggle-btn').on('click', function () {
            var $btn = $(this);
            var nextExpanded = $btn.attr('aria-expanded') !== 'true';
            $btn.attr('aria-expanded', nextExpanded);
            $('#registrar-list').stop(true, true).slideToggle(180, updateHomeFooterByScroll);
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

        $('.document-filter-item').on('click', function () {
            var $item = $(this);
            $item.siblings('.document-filter-item').removeClass('is-selected').attr('aria-pressed', 'false');
            $item.addClass('is-selected').attr('aria-pressed', 'true');
        });

        $('.panel-header-btn').on('click', function () {
            var $card = $(this).closest('.warning-panel-card, .payment-panel-card');
            setPanelCollapsed($card, !$card.hasClass('is-collapsed'), false, updateHomeFooterByScroll);
        });

        $('.advisory-row').on('toggle', 'details', updateHomeFooterByScroll);

        $('#sample-linkbiz-player').on('click keydown', function (e) {
            if ($(e.target).closest('.close-sample-preview, .watch-video-link').length) {
                return;
            }
            if (e.type === 'keydown') {
                if (e.key !== 'Enter' && e.key !== ' ') {
                    return;
                }
                e.preventDefault();
            }
            var $player = $(this);
            var videoUrl = $player.find('.watch-video-link').attr('href');
            if ($player.find('.sample-video-info').is(':hidden')) {
                if (videoUrl) {
                    window.open(videoUrl, '_blank', 'noopener,noreferrer');
                }
                toggleSampleVideoPreview(true);
            }
        });

        $('.close-sample-preview').on('click', function (e) {
            e.stopPropagation();
            toggleSampleVideoPreview(false);
        });

        $(window).on('scroll resize', function () {
            if (isHomePage) {
                updateHomeFooterByScroll();
            } else {
                applyFooterVisibility(step1FooterVisible);
            }
        });
    }

    function init() {
        $('#header-actions').toggle(isHomePage);

        if (isHomePage) {
            hydrateSelectedBranch();
            resetBranchPanelsToHidden();
            toggleSampleVideoPreview(false);
            updateHomeFooterByScroll();
        } else {
            applyFooterVisibility(step1FooterVisible);
        }

        bindEvents();
    }

    init();
});