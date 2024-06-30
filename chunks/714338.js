n(47120), n(757143), n(653041);
var r = n(879443), i = n.n(r), a = n(414861), o = n.n(a), s = n(360038), l = n(710845), u = n(626135), c = n(358085), d = n(981631);
let _ = {}, E = [], f = !1, h = o()(new (i())(window)), p = (0, c.isMac)() ? 'cmd' : 'ctrl', m = (0, c.isMac)() ? 'opt' : 'alt', I = (0, c.isMac)() ? 'return' : 'enter', T = [
        ...s.u.binds,
        'mod+shift+[',
        'mod+shift+]',
        'mod+[',
        'mod+]',
        'alt+[',
        'alt+]',
        'ctrl+shift+tab',
        'ctrl+tab',
        'mod+n',
        'mod+t',
        'mod+shift+t',
        'mod+plus',
        'mod+minus',
        'mod+0'
    ].map(e => e.replace('mod', p)), g = () => [], S = [];
function A(e) {
    let t = [];
    for (let n of Object.values(e))
        null != n && t.push(...n.binds);
    return t.map(e => e.replace('mod', p));
}
function N(e, t) {
    return (n, r) => (u.default.track(d.rMx.KEYBOARD_SHORTCUT_USED, { shortcut_name: e }), t(n, r));
}
function v(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n)
            continue;
        let e = g();
        !c.isPlatformEmbedded && (e = e.concat(T));
        let r = n.binds.filter(t => (t = t.replace('mod', p), 0 > e.indexOf(t)));
        if (0 === r.length)
            continue;
        let i = n.comboKeysBindGlobal ? h.bindGlobal : h.bind;
        if (null != n.action && i.call(h, r, N(t, n.action)), null != n.keyup && i.call(h, r, N(t, n.keyup), 'keyup'), null != n.keydown) {
            let e = r.indexOf('any-character');
            -1 !== e && (!function (e, t) {
                let n = e => t(e, e.key);
                document.addEventListener(e, n), S.push(() => document.removeEventListener(e, n));
            }('keydown', n.keydown), r.splice(e, 1)), r.length > 0 && i.call(h, r, N(t, n.keydown), 'keydown');
        }
        null != n.keypress && i.call(h, r, N(t, n.keypress), 'keypress');
    }
}
(0, c.isDesktop)() && new (i())(document.documentElement).bind('backspace', e => e.preventDefault()), t.Z = {
    combokeys: h,
    modKey: p,
    altKey: m,
    returnKey: I,
    setGetKeybindList(e) {
        g = e;
    },
    checkDupes(e) {
        let t = new Set(), n = [];
        for (let r of A(e))
            t.has(r) && n.push(r), t.add(r);
        n.length > 0 && new l.Z('Keybinds').warn('Duplicate keyboard shortcuts defined:', n);
    },
    setLayout(e) {
        _ = e;
    },
    enable() {
        if (!f)
            f = !0, this.checkDupes(_), v(_);
    },
    enableTemp(e) {
        E.push(_), _ = e, v(e), f = !0;
    },
    disableTemp() {
        let e = E.pop();
        null != e && (_ = e), this.disable(), this.enable();
    },
    disable() {
        if (!!f)
            f = !1, S.forEach(e => e()), S = [], h.reset();
    },
    validateKeybind(e) {
        if (!!f && !!this.hasBind(e))
            h.unbind(e);
    },
    hasBind(e) {
        let t = A(_);
        return e = (e = e.replace('meta', 'cmd')).replace(/right |left /i, '').trim(), t.includes(e);
    }
};
