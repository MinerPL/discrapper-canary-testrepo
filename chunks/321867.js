n.d(i, {
    Z: function () {
        return p;
    }
});
var o = n(735250), t = n(470079), r = n(442837), a = n(481060), l = n(100527), s = n(906732), c = n(411477), d = n(197115), u = n(594174), _ = n(154921), g = n(626135), E = n(74538), f = n(981631), T = n(486324), N = n(474936), I = n(689938), h = n(5018);
function p(e) {
    let {
            analyticsSection: i,
            type: n
        } = e, p = (0, r.e7)([u.default], () => u.default.getCurrentUser()), R = E.ZP.canUseAnimatedAvatar(p), m = E.ZP.canUsePremiumProfileCustomization(p), x = n === T.pC.BANNER && m || n === T.pC.AVATAR && R, {sourceAnalyticsLocations: B} = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (t.useEffect(() => {
            !x && g.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                type: i,
                location_stack: B
            });
        }, [
            x,
            i,
            B
        ]), x)
        return null;
    let b = (0, o.jsx)(d.Z, {
        className: h.__invalid_getNitroLink,
        size: a.Button.Sizes.SMALL,
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.LINK,
        subscriptionTier: N.Si.TIER_2,
        buttonText: I.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: i,
            object: f.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, o.jsx)(c.Z, {
        reducedRightPadding: !0,
        className: h.nitroPreviewUpsell,
        text: I.Z.Messages.PREMIUM_PREVIEW.format(),
        textSize: _.Z.Sizes.SIZE_14,
        textColor: _.Z.Colors.HEADER_PRIMARY,
        button: b
    });
}
