n.d(t, {
    W4: function () {
        return s;
    }
}),
    n(47120);
var r = n(688619),
    i = n.n(r);
function a(e) {
    let { primaryColor: t, secondaryColor: n, isDarkTheme: r } = e,
        a = i()(t),
        s = i()(n),
        [o, l] = a.luminance() > s.luminance() ? [a, s] : [s, a],
        u = l.get('hsl.h');
    (0 === u || Number.isNaN(u)) && (l = o);
    let c = r ? o.set('hsl.s', 1) : l.set('hsl.s', 1),
        d = c.get('hsl.h');
    return (
        (c = c.set('hsl.l', d >= 200 && d <= 300 ? (r ? 0.8 : 0.25) : r ? 0.95 : 0.15)),
        {
            base: r ? l.set('hsl.s', 1).set('hsl.l', 0.05) : o.set('hsl.s', 1).set('hsl.l', 0.9),
            text: c
        }
    );
}
function s(e) {
    let { enabled: t, primaryColor: n, secondaryColor: r, baseMixAmount: i = 50, textMixAmount: s = 38 } = e,
        { base: l, text: u } = a({
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: !0
        }),
        { base: c, text: d } = a({
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: !1
        });
    return {
        '--theme-base-color-light-hsl': o(c),
        '--theme-base-color-light': c.css(),
        '--theme-text-color-light': d.css(),
        '--theme-base-color-dark-hsl': o(l),
        '--theme-base-color-dark': l.css(),
        '--theme-text-color-dark': u.css(),
        '--theme-base-color-amount': ''.concat(t ? i : 0, '%'),
        '--theme-text-color-amount': ''.concat(t ? s : 0, '%'),
        '--bg-overlay-selected': 'unset',
        '--bg-overlay-hover': 'unset',
        '--bg-overlay-active': 'unset'
    };
}
function o(e) {
    let [t, n, r] = e.hsl();
    return ''
        .concat(Number.isNaN(t) ? 0 : t, ' ')
        .concat(100 * n, '% ')
        .concat(100 * r, '%');
}
