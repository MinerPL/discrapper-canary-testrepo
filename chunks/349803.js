var s = n(735250);
n(470079);
var a = n(120356), r = n.n(a), i = n(920906), l = n(399606), o = n(607070), c = n(104494), d = n(639119), _ = n(318747), u = n(409100), E = n(474936), T = n(981631), I = n(528973);
t.Z = function (e) {
    var t, n;
    let {
            isVisible: a,
            isFullscreen: R,
            subscriptionTier: C
        } = e, p = null === (t = (0, d.N)()) || void 0 === t ? void 0 : t.subscription_trial, g = (0, c.Ng)(), A = (0, c.Wp)(g, E.Si.TIER_2) ? E.Si.TIER_2 : void 0, m = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), N = (0, i.useSpring)({
            transform: a ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: a ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            },
            immediate: m
        }), f = { section: T.jXE.MARKETING_FLOATING_CTA };
    return (0, s.jsx)(i.animated.div, {
        className: r()(I.wrapper, {
            [I.fullscreenWrapper]: R,
            [I.invisible]: !a
        }),
        style: N,
        children: (0, s.jsxs)('div', {
            className: I.innerWrapper,
            children: [
                (0, s.jsx)(u.Z, {
                    className: I.button,
                    subscriptionTier: null !== (n = null != C ? C : null == p ? void 0 : p.sku_id) && void 0 !== n ? n : A,
                    premiumModalAnalyticsLocation: f,
                    isPersistentCTA: !0
                }),
                (0, s.jsx)(_.Z, {
                    className: I.button,
                    premiumModalAnalyticsLocation: f
                })
            ]
        })
    });
};
