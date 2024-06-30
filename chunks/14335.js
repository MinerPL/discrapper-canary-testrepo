n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250), a = n(470079), s = n(793030), l = n(442837), r = n(481060), o = n(230711), c = n(2052), d = n(906732), u = n(963249), _ = n(594174), E = n(626135), m = n(74538), I = n(163684), T = n(748770), h = n(474936), N = n(981631), f = n(689938), p = n(921186);
function C() {
    let e = (0, l.e7)([_.default], () => m.ZP.isPremium(_.default.getCurrentUser())), {
            enabled: t,
            getNitroCTA: n
        } = I.g.useExperiment({ location: 'OutboundPromotionNotice' }, {
            autoTrackExposure: !e,
            disable: e
        }), {location: C} = (0, c.O)(), {analyticsLocations: g} = (0, d.ZP)(), S = a.useCallback(() => {
            (0, u.Z)({
                subscriptionTier: m.ZP.getSkuIdForPremiumType(h.p9.TIER_2),
                analyticsLocations: g,
                analyticsObject: {
                    ...C,
                    object: N.qAy.BUTTON_CTA,
                    objectType: N.Qqv.TIER_2
                }
            });
        }, [
            g,
            C
        ]), A = a.useCallback(() => {
            o.Z.open(N.oAB.INVENTORY), T.ZP.dismissOutboundPromotionNotice();
        }, []), x = a.useCallback(() => {
            E.default.track(N.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? S() : A();
        }, [
            n,
            S,
            A
        ]);
    return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.PREMIUM_TIER_2,
        children: [
            (0, i.jsx)(r.NoticeCloseButton, {
                noticeType: N.kVF.OUTBOUND_PROMOTION,
                onClick: () => {
                    T.ZP.dismissOutboundPromotionNotice();
                }
            }),
            (0, i.jsx)(r.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: p.premiumIcon
            }),
            t ? n ? (0, i.jsxs)(s.x, {
                variant: 'text-sm/normal',
                className: p.text,
                children: [
                    f.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE_V2,
                    ' ',
                    f.Z.Messages.LEARN_MORE_CLICK.format({ onClick: A })
                ]
            }) : f.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE : f.Z.Messages.OUTBOUND_PROMOTION_NOTICE,
            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                noticeType: N.kVF.OUTBOUND_PROMOTION,
                onClick: x,
                children: n ? f.Z.Messages.PREMIUM_UPSELL_GET_NITRO : f.Z.Messages.TAKE_ME_THERE
            })
        ]
    });
}
