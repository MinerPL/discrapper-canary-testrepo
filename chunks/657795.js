n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(100527), c = n(906732), d = n(104494), _ = n(639119), E = n(165583), f = n(626135), h = n(453070), p = n(926491), m = n(419922), I = n(27733), T = n(611480), g = n(981631), S = n(474936), A = n(689938), N = n(317510);
function v(e) {
    var t, n, a;
    let {
        className: v,
        onClose: O
    } = e;
    (0, h.fP)();
    let {analyticsLocations: R} = (0, c.ZP)(u.Z.EMPTY_STATE), C = (0, s.Wu)([p.Z], () => T.Wt.map(e => p.Z.getStickerById(e)));
    i.useEffect(() => {
        f.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
            type: S.cd.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: g.jXE.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: R
        });
    }, [R]);
    let y = (0, _.N)(), D = (0, d.Ng)(), L = null != y || null != D, b = (null == y ? void 0 : null === (t = y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.Si.TIER_0;
    return (0, r.jsxs)('div', {
        className: o()(N.emptyState, v, { [N.unifyTrialUpsell]: L }),
        children: [
            L ? (0, r.jsx)(E.ZP, {
                discountOffer: D,
                trialOffer: y,
                onClose: O,
                type: S.cd.EMPTY_STICKER_PICKER_UPSELL,
                subscriptionTier: null !== (a = null == y ? void 0 : null === (n = y.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : S.Si.TIER_2,
                children: A.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
            }) : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Heading, {
                        className: N.header,
                        variant: 'heading-xl/semibold',
                        children: A.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                    }),
                    (0, r.jsx)(l.Text, {
                        className: N.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: A.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                    }),
                    (0, r.jsx)('div', {
                        className: N.stickersRow,
                        children: C.filter(e => null != e).map(e => (0, r.jsx)(m.ZP, {
                            sticker: e,
                            className: N.sticker,
                            size: 80
                        }, null == e ? void 0 : e.id))
                    })
                ]
            }),
            !L && (0, r.jsx)(I.Z, {
                analyticsSection: g.jXE.EXPRESSION_PICKER,
                buttonText: L ? b ? A.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : A.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
            })
        ]
    });
}
