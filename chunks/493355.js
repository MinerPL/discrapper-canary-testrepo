n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(686546),
    l = n(436088),
    u = n(979348);
function c(e) {
    let { width: t = 20, height: n = 20, className: i } = e;
    return (0, r.jsxs)('div', {
        className: a()(u.icon, i),
        children: [
            (0, r.jsx)(o.ZP, {
                mask: o.ZP.Masks.STATUS_SCREENSHARE,
                width: t,
                height: n,
                children: (0, r.jsx)(l.Z, {
                    width: t,
                    height: n
                })
            }),
            (0, r.jsx)(s.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: u.badge
            })
        ]
    });
}
