n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(689079), l = n(524737);
let u = e => {
    switch (e.id) {
    case s.bi.BUILT_IN:
        return o.SlashBoxIcon;
    case s.bi.FRECENCY:
        return o.ClockIcon;
    default:
        return;
    }
};
function c(e) {
    let {
            section: t,
            className: n,
            width: i,
            height: o,
            padding: s,
            isSelected: c,
            selectable: d = !1,
            ..._
        } = e, E = u(t);
    return (0, r.jsx)('div', {
        className: a()(l.wrapper, n, {
            [l.selectable]: d,
            [l.selected]: d && c
        }),
        style: {
            width: i,
            height: o,
            padding: null != s ? s : 0
        },
        children: null != E ? (0, r.jsx)(E, {
            className: l.icon,
            color: 'currentColor',
            size: 'custom',
            width: i,
            height: o,
            ..._
        }) : null
    });
}
