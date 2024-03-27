"use strict";
s.r(t), s.d(t, {
  UserSettingsAppearanceInAppIcon: function() {
    return I
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("913144"),
  o = s("54239"),
  d = s("812204"),
  u = s("685665"),
  c = s("805199"),
  S = s("433724"),
  E = s("635956"),
  T = s("599110"),
  f = s("49111"),
  _ = s("646718"),
  m = s("782340"),
  g = s("307046"),
  h = s("890957");
let N = () => {
    r.default.dispatch({
      type: "APP_ICON_EDITOR_OPEN"
    }), (0, o.popLayer)()
  },
  I = () => {
    let {
      analyticsLocations: e
    } = (0, u.default)(d.default.USER_SETTINGS), t = (0, l.useStateFromStores)([c.default], () => c.default.isUpsellPreview);
    return n.useEffect(() => {
      t && T.default.track(f.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: _.PremiumUpsellTypes.APP_ICON_UPSELL,
        location_stack: e
      })
    }, []), (0, a.jsxs)("div", {
      className: g.selectionGroup,
      children: [(0, a.jsx)(S.default, {
        disabled: t,
        renderCTAButtons: () => (0, a.jsxs)("div", {
          className: g.tryItOutButtons,
          children: [(0, a.jsx)(i.Button, {
            color: t ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
            onClick: () => N(),
            children: m.default.Messages.APP_ICON_PREVIEW_TITLE
          }), t ? (0, a.jsx)(E.default, {
            subscriptionTier: _.PremiumSubscriptionSKUs.TIER_2,
            buttonText: m.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
          }) : null]
        })
      }), (0, a.jsx)(i.FormDivider, {
        className: h.marginTop20
      })]
    })
  }