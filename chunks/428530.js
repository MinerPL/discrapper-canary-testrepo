r.d(t, {
    Z: function () {
        return p;
    }
}), r(47120);
var a = r(735250);
r(470079);
var n = r(346652), i = r(692547), o = r(410030), l = r(68588), c = r(981631), s = r(719556);
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
    let t = {};
    for (let [r, a] of Object.entries(e))
        t[r] = a;
    return t;
}
let h = u(d), m = u(d);
function g(e) {
    return c.Jn9.test(e) ? (0, a.jsx)(l.Z, {
        type: l.Z.Types.TEXT,
        children: () => (0, a.jsx)(a.Fragment, { children: e })
    }) : e;
}
function p(e) {
    let {data: t} = e, r = (0, o.ZP)();
    return (0, a.jsx)('div', {
        className: s.inspectorWrapper,
        children: (0, a.jsx)(n.L, {
            data: t,
            theme: 'light' === r ? m : h,
            invertTheme: !1,
            valueRenderer: g
        })
    });
}
