t.d(s, {
    Z: function () {
        return I;
    }
});
var n = t(735250);
t(470079);
var a = t(442837),
    i = t(570140),
    r = t(230711),
    o = t(100527),
    l = t(963249),
    c = t(514851),
    d = t(922518),
    _ = t(643939),
    u = t(45595),
    E = t(474936),
    T = t(981631),
    S = t(689938);
function I() {
    let e = (0, a.e7)([d.Z], () => d.Z.shouldDisplayUpsell(), []),
        s = c.Z.getForCampaign(T.$Dd.CASH_APP_PAY_AWARENESS),
        t = null != s && !0 === s.is_eligible;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(u.H, {}),
            (0, n.jsx)(u.Z, {
                show: t && e,
                children: (0, n.jsx)(_.L, {
                    message: S.Z.Messages.CASH_APP_PAY_AWARENESS_NON_SUBSCRIBER_UPSELL_CONTENT,
                    handleClick: () => {
                        i.Z.dispatch({ type: 'CASH_APP_PAY_AWARENESS_UPSELL_CTA_CLICKED' }),
                            (0, l.Z)({
                                subscriptionTier: E.Si.TIER_2,
                                analyticsLocations: [o.Z.USER_SETTINGS, o.Z.CASH_APP_PAY_AWARENESS_NON_NITRO_FLOW_UPSELL],
                                analyticsLocation: T.Sbl.CASH_APP_PAY_AWARENESS_NON_NITRO_FLOW_UPSELL
                            });
                    },
                    handleClose: () => {
                        i.Z.dispatch({ type: 'CASH_APP_PAY_AWARENESS_UPSELL_DISMISSED' });
                    },
                    handleImageClick: () => {
                        r.Z.open(T.oAB.PREMIUM), i.Z.dispatch({ type: 'CASH_APP_PAY_AWARENESS_UPSELL_DISMISSED' });
                    },
                    buttonText: S.Z.Messages.CASH_APP_PAY_AWARENESS_NON_SUBSCRIBER_UPSELL_CTA,
                    useInitialGlow: !0,
                    useGlowOnHover: !0,
                    analyticsLocations: T.Sbl.USER_SETTINGS,
                    upsellType: 'CASH_APP_PAY_AWARENESS_NITRO_UPSELL'
                })
            })
        ]
    });
}
