const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
function fill(id, arr, fmt) { const s = $(id); arr.forEach(v => { const o = document.createElement('option'); o.value = v; o.textContent = fmt ? fmt(v) : v; s.appendChild(o) }) }
const Y = []; for (let y = 2026; y >= 1990; y--)Y.push(y);
['#yg', '#ya', '#hy', '#ey'].forEach(i => fill(i, Y));
fill('#yr', Array.from({ length: 50 }, (_, i) => 2012 - i));
fill('#dy', Array.from({ length: 31 }, (_, i) => i + 1));
fill('#mo', ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
const P = ['BS Computer Science', 'BS Information Technology', 'BS Accountancy', 'BS Business Administration', 'BS Education', 'BS Engineering', 'BA Communication'];
['#pg', '#pa'].forEach(i => fill(i, P));
function route() {
    const open = location.hash === '#login';
    $('#modal').classList.toggle('open', open);
    if (open) setTimeout(() => $('#lu').focus(), 50);
}
function initModal() {
    addEventListener('hashchange', route); route();
    $('#close').onclick = () => { location.hash = 'register' };
    $('#modal').onclick = e => { if (e.target.id === 'modal') location.hash = 'register' };
    addEventListener('keydown', e => { if (e.key === 'Escape' && location.hash === '#login') location.hash = 'register' });
    $('#dologin').onclick = doLogin;
}
function bindShow() {
    $$('[data-show]').forEach(b => {
        b.setAttribute('aria-label', 'Show password');
        b.onclick = () => {
            const i = $('#' + b.dataset.show);
            const show = i.type === 'password';
            i.type = show ? 'text' : 'password';
            b.classList.toggle('on', show);
            b.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
        };
    });
}

function toast(t) {
    const e = $('#toast');
    e.textContent = t;
    e.style.display = 'block';
    setTimeout(() => e.style.display = 'none', 2600)
}
bindShow();

function doLogin() {
    let ok = true;['#lu', '#lp'].forEach(i => {
        const bad = !$(i).value.trim();
        $(i).classList.toggle('bad', bad); if (bad) ok = false
    });
    if (ok) {
        toast('Login successful (prototype)');
        setTimeout(() => location.hash = 'home', 900)
    }
}
$('#nomid').onchange = e => { const m = $('#mn'); m.disabled = e.target.checked; m.toggleAttribute('data-req', !e.target.checked); if (e.target.checked) { m.value = ''; m.classList.remove('bad') } };
$$('input[name=ps]').forEach(r => r.onchange = () => { const g = $('input[name=ps]:checked').value === 'g'; $('#gradbox').hidden = !g;['#pg', '#yg'].forEach(i => $(i).toggleAttribute('data-req', g)) });
$('#submit').onclick = () => {
    let ok = true;
    $$('#v-register [data-req]').forEach(f => { const bad = !f.value.trim(); f.classList.toggle('bad', bad); if (bad) ok = false });
    const em = $('#email'), e2 = $('#email2'), pw = $('#pw'), p2 = $('#pw2');
    if (em.value && !/^\S+@\S+\.\S+$/.test(em.value)) { em.classList.add('bad'); ok = false }
    if (e2.value !== em.value) { e2.classList.add('bad'); ok = false }
    if (pw.value && pw.value.length < 8) { pw.classList.add('bad'); ok = false }
    if (p2.value !== pw.value) { p2.classList.add('bad'); ok = false }
    if (!$('#c1').checked || !$('#c2').checked || !$('#c3').checked) { ok = false; toast('Please tick all three confirmation boxes.'); $('.toast').style.background = 'var(--red)' }
    if (ok) { $('.toast').style.background = 'var(--green-d)'; toast('Account created (prototype)') }
};
$$('#v-register input,#v-register select,#v-register textarea').forEach(f => f.addEventListener('input', () => f.classList.remove('bad')));
// Load login modal from external HTML file
fetch('components/login-modal.html').then(r => r.text()).then(html => {
    $('#modal-slot').innerHTML = html;
    bindShow();
    initModal();
}).catch(() => toast('Login modal could not load. Open this page with Go Live.'));