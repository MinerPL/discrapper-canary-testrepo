"use strict";
s.r(_), s.d(_, {
  default: function() {
    return i
  }
});
var t = s("735250");
s("470079");
var E = s("230711"),
  a = s("174609"),
  n = s("790527"),
  L = s("474936"),
  o = s("981631"),
  c = s("689938");

function i(e) {
  let {
    onClose: _,
    ...i
  } = e;
  return (0, t.jsx)(n.default, {
    type: L.PremiumUpsellTypes.STREAM_QUALITY_UPSELL,
    artURL: s("279360"),
    title: c.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_TITLE,
    glowUp: c.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_TITLE,
    showEnhancedUpsell: !0,
    body: c.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_BODY,
    analyticsLocation: {
      section: o.AnalyticsSections.PREMIUM_PERKS_DEMO_UPSELL_MODAL
    },
    onSubscribeClick: a.default,
    secondaryCTA: c.default.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
    onSecondaryClick: () => {
      _(), E.default.open(o.UserSettingsSections.PREMIUM)
    },
    enableArtBoxShadow: !1,
    onClose: _,
    ...i
  })
}