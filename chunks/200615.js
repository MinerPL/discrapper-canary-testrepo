n.d(t, {
    F: function () {
        return d;
    }
});
var s = n(735250), r = n(470079), a = n(481060), o = n(906732), i = n(963249), l = n(474936), c = n(799381);
let d = e => {
    let {text: t} = e, {analyticsLocations: n} = (0, o.ZP)(), d = r.useRef(null);
    return (0, s.jsx)(a.Clickable, {
        className: c.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, i.Z)({
                subscriptionTier: l.Si.TIER_2,
                analyticsLocations: n,
                returnRef: d
            });
        },
        children: t
    });
};
