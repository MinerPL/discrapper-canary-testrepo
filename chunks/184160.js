t.d(n, {
    x: function () {
        return h;
    }
});
var i = t(735250);
t(470079);
var r = t(512722), o = t.n(r), a = t(780384), s = t(481060), l = t(410030), d = t(973159), c = t(74538), C = t(987209), u = t(598), _ = t(409813), p = t(614223), f = t(689938), x = t(784169);
function h(e) {
    let {
            handleStepChange: n,
            handleClose: t
        } = e, r = (0, l.ZP)(), {
            activeSubscription: h,
            selectedSkuId: b,
            setSelectedPlanId: g,
            startedPaymentFlowWithPaymentSourcesRef: m
        } = (0, u.usePaymentContext)(), {isGift: I} = (0, C.wD)(), L = null != h ? (0, c.Af)(h) : null, E = null != L ? (0, c.gq)(L.planId) : null, M = null != L ? (0, c.Rd)(L.planId) : null, T = (0, p.Kp)({
            isTrial: !1,
            isGift: I,
            selectedSkuId: b,
            startedPaymentFlowWithPaymentSources: m.current
        });
    return o()(null != M, 'Expected premium type'), (0, i.jsx)(d.Z, {
        premiumType: M,
        titleText: f.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
        subtitleText: f.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({ subscriptionName: E }),
        footer: (0, i.jsxs)('div', {
            className: x.whatYouLoseButtonContainer,
            children: [
                (0, i.jsx)(s.Button, {
                    onClick: () => {
                        T ? (g((0, p.nA)(b, h)), n(_.h8.REVIEW)) : n(_.h8.PLAN_SELECT);
                    },
                    children: f.Z.Messages.CONTINUE
                }),
                (0, i.jsx)(s.Button, {
                    look: s.Button.Looks.LINK,
                    color: (0, a.wj)(r) ? s.Button.Colors.WHITE : s.Button.Colors.PRIMARY,
                    onClick: t,
                    children: f.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                })
            ]
        }),
        onClose: t,
        isDowngrade: !0
    });
}
