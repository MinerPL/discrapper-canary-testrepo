"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("47120");
var i = s("735250"),
  a = s("470079"),
  n = s("481060"),
  l = s("230711"),
  r = s("2052"),
  o = s("434650"),
  d = s("906732"),
  u = s("672752"),
  c = s("499150"),
  h = s("466111"),
  S = s("626135"),
  N = s("197115"),
  g = s("474936"),
  f = s("981631"),
  m = s("689938"),
  E = s("203690");

function T(e) {
  let {
    onClose: t
  } = e, s = (0, r.useAnalyticsContext)(), {
    analyticsLocations: T
  } = (0, d.default)(), [_, I] = a.useState(!1), x = a.useCallback(e => {
    !_ && e && (S.default.track(f.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: g.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
      location: s.location,
      location_stack: T
    }), I(!0))
  }, [s.location, T, _]), C = (0, o.useIsVisible)(x, .8, !0);
  return (0, i.jsxs)("div", {
    ref: C,
    className: E.container,
    children: [(0, i.jsx)(h.default, {
      color: u.GradientCssUrls.PREMIUM_TIER_2,
      className: E.nitroWheel
    }), (0, i.jsxs)(n.Text, {
      className: E.text,
      variant: "text-sm/normal",
      children: [m.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_UPSELL, " ", (0, i.jsx)(c.default, {
        onClick: () => {
          t(), l.default.open(f.UserSettingsSections.PREMIUM)
        },
        children: m.default.Messages.LEARN_MORE
      })]
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)(N.default, {
        className: E.nitroButton,
        buttonText: m.default.Messages.PREMIUM_UPSELL_GET_NITRO,
        size: n.Button.Sizes.SMALL,
        shinyButtonClassName: E.nitroButton,
        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
        premiumModalAnalyticsLocation: {
          section: f.AnalyticsSections.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL
        }
      })
    })]
  })
}