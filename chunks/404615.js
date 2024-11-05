n.d(t, {
    _: function () {
        return c;
    }
});
var i = n(442837),
    r = n(607070),
    a = n(314684),
    s = n(391110),
    l = n(180129);
let o = {
        subtitle: { onlyShowOnHover: !1 },
        description: {
            onlyShowOnHover: !0,
            className: l.cardDescription
        },
        descriptionCta: { onlyShowOnHover: !0 }
    },
    c = (e) => {
        let t = (0, i.e7)([r.Z], () => r.Z.useReducedMotion),
            n = (0, a.IB)() && !t,
            c = {
                [s.zW.DEFAULT]: o,
                [s.zW.REWARD]: {
                    subtitle: {
                        onlyShowOnHover: !0,
                        textVariant: 'text-sm/semibold'
                    },
                    description: {
                        onlyShowOnHover: !0,
                        className: l.cardDescriptionTenureReward
                    },
                    descriptionCta: {
                        onlyShowOnHover: !1,
                        hideOnHoverComponent: !0,
                        className: l.descriptionCTATenureReward
                    },
                    cardContainer: { className: n ? l.glowingCardContainer : void 0 }
                },
                [s.zW.NITRO_GRADIENT_HOVER_BORDER]: { cardContainer: { className: l.nitroGradientBorderHover } }
            };
        return null != e ? c[e] : c[s.zW.DEFAULT];
    };
