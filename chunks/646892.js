n.d(t, {
    Z: function () {
        return u;
    }
});
var s = n(735250);
n(470079);
var a = n(120356), i = n.n(a), r = n(442837), l = n(481060), o = n(607070), c = n(307537), d = n(585586);
function u(e) {
    let {
            className: t,
            shouldShine: n = !0,
            size: a = 14
        } = e, u = (0, r.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, s.jsxs)('div', {
        className: i()([
            d.guildProductRoleIcon,
            t
        ]),
        children: [
            (0, s.jsx)(c.Z, {
                height: a,
                width: a
            }),
            (0, s.jsx)(l.Shine, {
                className: d.shine,
                shinePaused: u || !n,
                shineSize: l.ShinyButton.ShineSizes.SMALL
            })
        ]
    });
}
