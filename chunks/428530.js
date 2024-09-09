t.d(r, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var a = t(735250);
t(470079);
var n = t(346652),
    i = t(692547),
    o = t(410030),
    l = t(95398),
    c = t(981631),
    s = t(535271);
let d = {
    base00: i.Z.colors.BACKGROUND_SECONDARY.css,
    base03: i.Z.colors.TEXT_WARNING.css,
    base07: i.Z.colors.TEXT_NORMAL.css,
    base08: i.Z.colors.TEXT_MUTED.css,
    base09: i.Z.colors.TEXT_POSITIVE.css,
    base0B: i.Z.colors.TEXT_WARNING.css,
    base0D: i.Z.colors.TEXT_BRAND.css
};
function u(e) {
    let r = {};
    for (let [t, a] of Object.entries(e)) r[t] = a;
    return r;
}
let h = u(d),
    m = u(d);
function g(e) {
    return c.Jn9.test(e)
        ? (0, a.jsx)(l.Z, {
              type: l.Z.Types.TEXT,
              children: () => (0, a.jsx)(a.Fragment, { children: e })
          })
        : e;
}
function p(e) {
    let { data: r } = e,
        t = (0, o.ZP)();
    return (0, a.jsx)('div', {
        className: s.inspectorWrapper,
        children: (0, a.jsx)(n.L, {
            data: r,
            theme: 'light' === t ? m : h,
            invertTheme: !1,
            valueRenderer: g
        })
    });
}
