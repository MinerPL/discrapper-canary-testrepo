e.r(E), e.d(E, {
    default: function () {
        return D;
    }
});
var s = e(735250);
e(470079);
var n = e(230711), L = e(174609), o = e(790527), M = e(474936), t = e(981631), a = e(689938);
function D(_) {
    let {
        onClose: E,
        ...D
    } = _;
    return (0, s.jsx)(o.Z, {
        type: M.cd.STREAM_QUALITY_UPSELL,
        artURL: e(279360),
        title: a.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_TITLE,
        glowUp: a.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_TITLE,
        showEnhancedUpsell: !0,
        body: a.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_BODY,
        analyticsLocation: { section: t.jXE.PREMIUM_PERKS_DEMO_UPSELL_MODAL },
        onSubscribeClick: L.Z,
        secondaryCTA: a.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
        onSecondaryClick: () => {
            E(), n.Z.open(t.oAB.PREMIUM);
        },
        enableArtBoxShadow: !1,
        onClose: E,
        ...D
    });
}
