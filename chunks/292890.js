"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var s = l("37983"),
  n = l("884691"),
  a = l("446674"),
  i = l("77078"),
  u = l("812204"),
  o = l("685665"),
  r = l("635956"),
  c = l("697218"),
  d = l("599110"),
  T = l("719923"),
  _ = l("38766"),
  E = l("49111"),
  f = l("646718"),
  p = l("397336"),
  S = l("782340"),
  I = l("361753");

function m(e) {
  let {
    analyticsLocations: t,
    transitionState: m,
    onClose: P,
    title: M,
    description: C
  } = e, R = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser()), {
    analyticsLocations: N
  } = (0, o.default)(t, u.default.PROFILE_THEME_UPSELL_MODAL);
  n.useEffect(() => {
    d.default.track(E.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: f.PremiumUpsellTypes.PROFILE_THEME_UPSELL_MODAL,
      location_stack: t
    })
  }, [t]);
  let A = (0, _.default)({
    scrollPosition: p.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: N
  });
  return (0, s.jsx)(o.AnalyticsLocationProvider, {
    value: N,
    children: (0, s.jsxs)(i.ModalRoot, {
      className: I.profileThemesUpsellModal,
      "aria-label": null != M ? M : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
      transitionState: m,
      children: [(0, s.jsxs)(i.ModalHeader, {
        className: I.profileThemesUpsellModalHeader,
        separator: !1,
        children: [(0, s.jsx)(i.Heading, {
          variant: "heading-xl/extrabold",
          className: I.profileThemesUpsellModalTitle,
          children: null != M ? M : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE
        }), (0, s.jsx)(i.ModalCloseButton, {
          className: I.profileThemesUpsellModalCloseButton,
          onClick: P
        })]
      }), (0, s.jsxs)(i.ModalContent, {
        className: I.profileThemesUpsellModalContent,
        children: [(0, s.jsx)(i.Text, {
          className: I.profileThemesUpsellModalDescription,
          variant: "text-md/normal",
          children: null != C ? C : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_DESCRIPTION
        }), (0, s.jsx)("img", {
          className: I.profileThemesUpsellModalExampleImage,
          src: l("244333"),
          alt: S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_MODAL_IMAGE_ALT
        })]
      }), (0, s.jsxs)(i.ModalFooter, {
        className: I.profileThemesUpsellModalFooter,
        children: [(0, s.jsx)(r.default, {
          subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
          size: i.Button.Sizes.SMALL,
          buttonText: T.default.isPremium(R) ? S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : S.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        }), (0, s.jsx)(i.Button, {
          onClick: () => {
            P(), A()
          },
          color: i.Button.Colors.PRIMARY,
          look: i.Button.Looks.LINK,
          size: i.Button.Sizes.SMALL,
          children: S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_TRY_IT_OUT
        })]
      })]
    })
  })
}