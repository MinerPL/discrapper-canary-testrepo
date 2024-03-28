"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("410030"),
  r = s("100527"),
  o = s("906732"),
  d = s("197115"),
  u = s("626135"),
  c = s("74538"),
  S = s("981631"),
  E = s("474936"),
  T = s("689938"),
  _ = s("929327"),
  f = s("699623"),
  m = s("820350");

function g(e) {
  let {
    user: t,
    showOverlay: s,
    children: g
  } = e, h = (0, i.default)(), {
    analyticsLocations: N
  } = (0, o.default)(r.default.PREMIUM_UPSELL_OVERLAY);
  return (n.useEffect(() => {
    s && u.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      location_stack: N,
      type: E.PremiumUpsellTypes.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
    })
  }, [s, N]), s) ? (0, a.jsxs)("div", {
    className: _.upsellOverlayContainer,
    children: [(0, a.jsx)("div", {
      children: g
    }), (0, a.jsxs)("div", {
      className: _.upsellOverlay,
      children: [(0, a.jsx)("img", {
        className: _.upsellImage,
        alt: T.default.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_IMAGE_ALT,
        src: function(e) {
          switch (e) {
            case S.ThemeTypes.DARK:
              return f;
            case S.ThemeTypes.LIGHT:
              return m
          }
        }(h)
      }), (0, a.jsxs)("div", {
        className: _.upsellTextContainer,
        children: [(0, a.jsx)(l.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          children: T.default.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_TITLE
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: T.default.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_DESCRIPTION_THEMES
        })]
      }), (0, a.jsx)(d.default, {
        size: l.Button.Sizes.LARGE,
        color: l.Button.Colors.GREEN,
        buttonText: c.default.isPremium(t) ? T.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : T.default.Messages.CHANGE_IDENTITY_UPSELL,
        subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2
      })]
    })]
  }) : (0, a.jsx)(a.Fragment, {
    children: g
  })
}