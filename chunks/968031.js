"use strict";
l.r(s), l.d(s, {
  default: function() {
    return U
  }
});
var a = l("735250"),
  t = l("470079"),
  o = l("442837"),
  i = l("481060"),
  E = l("100527"),
  _ = l("906732"),
  n = l("197115"),
  r = l("594174"),
  d = l("626135"),
  T = l("74538"),
  S = l("300284"),
  u = l("981631"),
  c = l("474936"),
  L = l("526761"),
  M = l("689938"),
  p = l("849860");

function U(e) {
  let {
    analyticsLocations: s,
    transitionState: U,
    onClose: f,
    title: I,
    description: R
  } = e, m = (0, o.useStateFromStores)([r.default], () => r.default.getCurrentUser()), {
    analyticsLocations: P
  } = (0, _.default)(s, E.default.PROFILE_THEME_UPSELL_MODAL);
  t.useEffect(() => {
    d.default.track(u.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: c.PremiumUpsellTypes.PROFILE_THEME_UPSELL_MODAL,
      location_stack: s
    })
  }, [s]);
  let N = (0, S.default)({
    scrollPosition: L.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: P
  });
  return (0, a.jsx)(_.AnalyticsLocationProvider, {
    value: P,
    children: (0, a.jsxs)(i.ModalRoot, {
      className: p.profileThemesUpsellModal,
      "aria-label": null != I ? I : M.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
      transitionState: U,
      children: [(0, a.jsxs)(i.ModalHeader, {
        className: p.profileThemesUpsellModalHeader,
        separator: !1,
        children: [(0, a.jsx)(i.Heading, {
          variant: "heading-xl/extrabold",
          className: p.profileThemesUpsellModalTitle,
          children: null != I ? I : M.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE
        }), (0, a.jsx)(i.ModalCloseButton, {
          className: p.profileThemesUpsellModalCloseButton,
          onClick: f
        })]
      }), (0, a.jsxs)(i.ModalContent, {
        className: p.profileThemesUpsellModalContent,
        children: [(0, a.jsx)(i.Text, {
          className: p.profileThemesUpsellModalDescription,
          variant: "text-md/normal",
          children: null != R ? R : M.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_DESCRIPTION
        }), (0, a.jsx)("img", {
          className: p.profileThemesUpsellModalExampleImage,
          src: l("299840"),
          alt: M.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_MODAL_IMAGE_ALT
        })]
      }), (0, a.jsxs)(i.ModalFooter, {
        className: p.__invalid_profileThemesUpsellModalFooter,
        children: [(0, a.jsx)(n.default, {
          subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
          size: i.Button.Sizes.SMALL,
          buttonText: T.default.isPremium(m) ? M.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : M.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        }), (0, a.jsx)(i.Button, {
          onClick: () => {
            f(), N()
          },
          color: i.Button.Colors.PRIMARY,
          look: i.Button.Looks.LINK,
          size: i.Button.Sizes.SMALL,
          children: M.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_TRY_IT_OUT
        })]
      })]
    })
  })
}