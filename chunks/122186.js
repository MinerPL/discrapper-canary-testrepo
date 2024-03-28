"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var a = l("735250");
l("470079");
var s = l("803997"),
  n = l.n(s),
  i = l("481060"),
  r = l("193878"),
  u = l("197115"),
  o = l("672752"),
  d = l("466111"),
  c = l("981631"),
  f = l("474936"),
  m = l("689938"),
  S = l("937250");

function E(e) {
  let {
    message: t,
    onClose: l,
    openStreamUpsellModal: s,
    glow: E = !1
  } = e, {
    enabled: C,
    variant: _
  } = r.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: !0
  }), g = C && r.GradientVariants.includes(_), N = C && [r.EnhancedHDStreamingRoadblockVariants.VARIANT_1A, r.EnhancedHDStreamingRoadblockVariants.VARIANT_1B].includes(_), h = {
    section: c.AnalyticsSections.STREAM_SETTINGS,
    object: c.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
    objectType: c.AnalyticsObjectTypes.BUY
  }, x = () => (0, a.jsx)(u.default, {
    className: n()(S.enhancedCTA, {
      [S.ctaGradientBackground]: g
    }),
    iconClassName: S.premiumIcon,
    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
    buttonText: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
    size: i.Button.Sizes.TINY,
    premiumModalAnalyticsLocation: h
  });
  return C ? (0, a.jsxs)("div", {
    className: n()(S.upsellBanner, S.enhancedBanner, {
      [S.gradientGlow]: E
    }),
    children: [(0, a.jsxs)("div", {
      className: S.iconTextContainer,
      children: [(0, a.jsx)(d.default, {
        color: o.GradientCssUrls.PREMIUM_TIER_2
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: n()(S.upsellText, S.enhancedUpsellText),
        children: null != t ? t : N ? m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_V2 : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V2.format({
          onClick: () => s({
            analyticsLocation: h,
            onClose: l
          })
        })
      })]
    }), (0, a.jsx)("div", {
      className: S.enhancedCTAs,
      children: N ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Button, {
          className: n()(S.enhancedCTA, S.learnMoreCTA),
          color: g ? i.Button.Colors.CUSTOM : i.Button.Colors.TRANSPARENT,
          onClick: () => s({
            analyticsLocation: h,
            onClose: l
          }),
          look: i.Button.Looks.OUTLINED,
          size: i.Button.Sizes.TINY,
          children: m.default.Messages.LEARN_MORE
        }), x()]
      }) : x()
    })]
  }) : (0, a.jsxs)(i.Clickable, {
    onClick: () => s({
      analyticsLocation: h,
      onClose: l
    }),
    className: n()(S.upsellBanner, S.gradientBackground),
    children: [(0, a.jsxs)("div", {
      className: S.iconTextContainer,
      children: [(0, a.jsx)(d.default, {
        className: S.iconColor
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: S.upsellText,
        children: null != t ? t : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
      })]
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      className: S.textLink,
      children: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
    })]
  })
}