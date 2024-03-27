"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  r = l("77078"),
  i = l("688771"),
  u = l("635956"),
  o = l("791106"),
  d = l("216422"),
  c = l("49111"),
  f = l("646718"),
  m = l("782340"),
  S = l("863782");

function C(e) {
  let {
    message: t,
    onClose: l,
    openStreamUpsellModal: a,
    glow: C = !1
  } = e, {
    enabled: E,
    variant: h
  } = i.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: !0
  }), N = E && i.GradientVariants.includes(h), g = E && [i.EnhancedHDStreamingRoadblockVariants.VARIANT_1A, i.EnhancedHDStreamingRoadblockVariants.VARIANT_1B].includes(h), _ = {
    section: c.AnalyticsSections.STREAM_SETTINGS,
    object: c.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
    objectType: c.AnalyticsObjectTypes.BUY
  }, p = () => (0, n.jsx)(u.default, {
    className: s(S.enhancedCTA, {
      [S.ctaGradientBackground]: N
    }),
    iconClassName: S.premiumIcon,
    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
    buttonText: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
    size: r.Button.Sizes.TINY,
    premiumModalAnalyticsLocation: _
  });
  return E ? (0, n.jsxs)("div", {
    className: s(S.upsellBanner, S.enhancedBanner, {
      [S.gradientGlow]: C
    }),
    children: [(0, n.jsxs)("div", {
      className: S.iconTextContainer,
      children: [(0, n.jsx)(d.default, {
        color: o.GradientCssUrls.PREMIUM_TIER_2
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: s(S.upsellText, S.enhancedUpsellText),
        children: null != t ? t : g ? m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_V2 : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V2.format({
          onClick: () => a({
            analyticsLocation: _,
            onClose: l
          })
        })
      })]
    }), (0, n.jsx)("div", {
      className: S.enhancedCTAs,
      children: g ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.Button, {
          className: s(S.enhancedCTA, S.learnMoreCTA),
          color: N ? r.Button.Colors.CUSTOM : r.Button.Colors.TRANSPARENT,
          onClick: () => a({
            analyticsLocation: _,
            onClose: l
          }),
          look: r.Button.Looks.OUTLINED,
          size: r.Button.Sizes.TINY,
          children: m.default.Messages.LEARN_MORE
        }), p()]
      }) : p()
    })]
  }) : (0, n.jsxs)(r.Clickable, {
    onClick: () => a({
      analyticsLocation: _,
      onClose: l
    }),
    className: s(S.upsellBanner, S.gradientBackground),
    children: [(0, n.jsxs)("div", {
      className: S.iconTextContainer,
      children: [(0, n.jsx)(d.default, {
        className: S.iconColor
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: S.upsellText,
        children: null != t ? t : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
      })]
    }), (0, n.jsx)(r.Text, {
      variant: "text-sm/medium",
      className: S.textLink,
      children: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
    })]
  })
}