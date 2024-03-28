"use strict";
s.r(t), s.d(t, {
  UserSettingsAppearanceInAppIcon: function() {
    return I
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("570140"),
  o = s("37234"),
  d = s("100527"),
  u = s("906732"),
  c = s("327943"),
  S = s("539873"),
  E = s("197115"),
  T = s("626135"),
  _ = s("981631"),
  f = s("474936"),
  m = s("689938"),
  g = s("430040"),
  h = s("794711");
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
      t && T.default.track(_.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: f.PremiumUpsellTypes.APP_ICON_UPSELL,
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
            subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
            buttonText: m.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
          }) : null]
        })
      }), (0, a.jsx)(i.FormDivider, {
        className: h.marginTop20
      })]
    })
  }