var t = n(735250);
n(470079);
var r = n(442837),
    i = n(481060),
    l = n(906732),
    a = n(963249),
    o = n(703656),
    C = n(594174),
    d = n(451478),
    u = n(981631),
    c = n(689938),
    _ = n(830716);
s.Z = function (e) {
    let { subscriptionTier: s, initialPlanId: n, giftStyle: p, onClick: x, buttonText: L, analyticsLocation: h, analyticsLocationsOverride: f, repeatPurchase: I, ...E } = e,
        M = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
        N = (0, r.e7)([d.Z], () => d.Z.isFocused()),
        { analyticsLocations: j } = (0, l.ZP)();
    return (0, t.jsx)(i.ShinyButton, {
        pauseAnimation: !N,
        className: _.tier2Gradient,
        color: i.Button.Colors.CUSTOM,
        onClick: (e) => {
            if ((e.preventDefault(), null == M)) {
                (0, o.uL)(u.Z5c.LOGIN);
                return;
            }
            null == x || x(e),
                (0, a.Z)({
                    subscriptionTier: s,
                    initialPlanId: n,
                    isGift: !0,
                    giftStyle: p,
                    analyticsLocation: h,
                    analyticsLocations: null != f ? f : j,
                    analyticsObject: {
                        object: u.qAy.BUTTON_CTA,
                        objectType: u.Qqv.GIFT
                    },
                    repeatPurchase: I
                });
        },
        ...E,
        children: (0, t.jsx)(i.Text, {
            variant: 'text-sm/medium',
            color: 'none',
            className: _.buttonText,
            children: null != L ? L : c.Z.Messages.PREMIUM_GIFTING_BUTTON
        })
    });
};
