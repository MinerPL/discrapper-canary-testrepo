"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
});
var a = l("735250");
l("470079");
var n = l("120356"),
  s = l.n(n),
  i = l("481060"),
  r = l("193878"),
  u = l("223468"),
  o = l("197115"),
  d = l("672752"),
  c = l("466111"),
  f = l("981631"),
  m = l("474936"),
  S = l("689938"),
  E = l("441157");

function _(e) {
  let {
    message: t,
    onClose: l,
    openStreamUpsellModal: n,
    glow: _ = !1
  } = e, {
    enabled: N,
    variant: h
  } = r.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: !0
  }), C = N && r.GradientVariants.includes(h), g = N && [r.EnhancedHDStreamingRoadblockVariants.VARIANT_1A, r.EnhancedHDStreamingRoadblockVariants.VARIANT_1B].includes(h), p = {
    section: f.AnalyticsSections.STREAM_SETTINGS,
    object: f.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
    objectType: f.AnalyticsObjectTypes.BUY
  }, A = u.PremiumHDStreamingUpsellCopyExperiment.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: !0
  }).showNewUpsellCopy, x = () => (0, a.jsx)(o.default, {
    className: s()(E.enhancedCTA, {
      [E.ctaGradientBackground]: C
    }),
    iconClassName: E.premiumIcon,
    subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
    buttonText: S.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
    size: i.Button.Sizes.TINY,
    premiumModalAnalyticsLocation: p
  });
  return N ? (0, a.jsxs)("div", {
    className: s()(E.upsellBanner, E.enhancedBanner, {
      [E.gradientGlow]: _
    }),
    children: [(0, a.jsxs)("div", {
      className: E.iconTextContainer,
      children: [(0, a.jsx)(c.default, {
        color: d.GradientCssUrls.PREMIUM_TIER_2
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: s()(E.upsellText, E.enhancedUpsellText),
        children: null != t ? t : g ? S.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_V2 : A ? S.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
          onClick: () => n({
            analyticsLocation: p,
            onClose: l
          })
        }) : S.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V2.format({
          onClick: () => n({
            analyticsLocation: p,
            onClose: l
          })
        })
      })]
    }), (0, a.jsx)("div", {
      className: E.enhancedCTAs,
      children: g ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Button, {
          className: s()(E.enhancedCTA, E.learnMoreCTA),
          color: C ? i.Button.Colors.CUSTOM : i.Button.Colors.TRANSPARENT,
          onClick: () => n({
            analyticsLocation: p,
            onClose: l
          }),
          look: i.Button.Looks.OUTLINED,
          size: i.Button.Sizes.TINY,
          children: S.default.Messages.LEARN_MORE
        }), x()]
      }) : x()
    })]
  }) : (0, a.jsxs)(i.Clickable, {
    onClick: () => n({
      analyticsLocation: p,
      onClose: l
    }),
    className: s()(E.upsellBanner, E.gradientBackground),
    children: [(0, a.jsxs)("div", {
      className: E.iconTextContainer,
      children: [(0, a.jsx)(c.default, {
        className: E.iconColor
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: E.upsellText,
        children: null != t ? t : S.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
      })]
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      className: E.textLink,
      children: S.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
    })]
  })
}