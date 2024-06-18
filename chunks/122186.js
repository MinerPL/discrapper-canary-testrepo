"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var l = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  i = n(481060),
  r = n(197115),
  o = n(672752),
  u = n(466111),
  c = n(981631),
  d = n(474936),
  m = n(689938),
  E = n(441157);

function _(e) {
  let {
    message: t,
    onClose: n,
    openStreamUpsellModal: s,
    glow: _ = !1
  } = e, S = {
    section: c.jXE.STREAM_SETTINGS,
    object: c.qAy.PREMIUM_UPSELL_BANNER,
    objectType: c.Qqv.BUY
  };
  return (0, l.jsxs)("div", {
    className: a()(E.upsellBanner, E.enhancedBanner, {
      [E.gradientGlow]: _
    }),
    children: [(0, l.jsxs)("div", {
      className: E.iconTextContainer,
      children: [(0, l.jsx)(u.Z, {
        color: o.JX.PREMIUM_TIER_2
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: a()(E.upsellText, E.enhancedUpsellText),
        children: null != t ? t : m.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
          onClick: () => s({
            analyticsLocation: S,
            onClose: n
          })
        })
      })]
    }), (0, l.jsx)("div", {
      className: E.enhancedCTAs,
      children: (0, l.jsx)(r.Z, {
        className: a()(E.enhancedCTA, E.ctaGradientBackground),
        iconClassName: E.premiumIcon,
        subscriptionTier: d.Si.TIER_2,
        buttonText: m.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
        size: i.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: S
      })
    })]
  })
}