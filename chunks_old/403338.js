"use strict";
s.r(t), s.d(t, {
  UserSettingsAppearanceClientThemes: function() {
    return M
  },
  ClientThemesSidebarButton: function() {
    return D
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("151426"),
  r = s("77078"),
  o = s("54239"),
  d = s("812204"),
  u = s("685665"),
  c = s("32531"),
  S = s("714657"),
  E = s("648114"),
  T = s("10641"),
  f = s("154889"),
  _ = s("917247"),
  m = s("956597"),
  g = s("635956"),
  h = s("632892"),
  N = s("599110"),
  I = s("49111"),
  p = s("994428"),
  C = s("646718"),
  A = s("782340"),
  O = s("654261"),
  x = s("890957");
let R = () => {
    (0, T.markDismissibleContentAsDismissed)(i.DismissibleContent.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: p.ContentDismissActionType.PRIMARY,
      forceTrack: !0
    }), (0, c.openEditor)(), (0, o.popLayer)()
  },
  M = () => {
    var e, t;
    let {
      analyticsLocations: s
    } = (0, u.default)(d.default.USER_SETTINGS), i = (0, l.useStateFromStores)([S.default], () => S.default.isPreview), o = (null === (t = (0, _.usePremiumTrialOffer)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === C.PremiumSubscriptionSKUs.TIER_2, c = (0, f.usePremiumDiscountOffer)(), T = (0, f.discountOfferHasTier)(c, C.PremiumSubscriptionSKUs.TIER_2);
    return n.useEffect(() => {
      i && N.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: C.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: s
      })
    }, [i, s]), (0, a.jsxs)("div", {
      children: [(0, a.jsxs)(E.default, {
        type: E.ThemeSelectionGroupType.SETTINGS,
        children: [(0, a.jsx)(E.default.Basic, {
          className: O.basicThemeSelectors
        }), (0, a.jsxs)(h.default, {
          className: O.featureBorder,
          isShown: i,
          type: h.FeatureBorderTypes.PREMIUM,
          children: [(0, a.jsx)(E.default.Gradient, {
            disabled: i,
            renderCTAButtons: () => !i || o ? null : (0, a.jsxs)("div", {
              className: O.tryItOutButtons,
              children: [(0, a.jsx)(r.Button, {
                color: r.Button.Colors.PRIMARY,
                onClick: () => R(),
                children: A.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
              }), (0, a.jsx)(g.default, {
                subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2,
                buttonText: T ? A.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                  percent: null == c ? void 0 : c.discount.amount
                }) : A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: O.premiumCta
              })]
            })
          }), o && i && (0, a.jsxs)("div", {
            children: [(0, a.jsx)(r.Button, {
              className: O.previewThemeButtonWide,
              color: r.Button.Colors.PRIMARY,
              onClick: () => R(),
              children: A.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
            }), (0, a.jsx)("div", {
              className: O.premiumTier2Divider
            }), (0, a.jsx)(m.default, {
              type: C.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
              subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2
            })]
          })]
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.marginTop20
      })]
    })
  },
  D = () => {
    let e = (0, l.useStateFromStores)([S.default], () => S.default.isPreview);
    return e ? null : (0, a.jsx)(r.Button, {
      size: r.ButtonSizes.SMALL,
      onClick: () => R(),
      children: A.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEMES_TITLE
    })
  }