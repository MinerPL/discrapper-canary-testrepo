"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("685665"),
  d = n("649844"),
  c = n("393414"),
  f = n("697218"),
  h = n("471671"),
  m = n("181114"),
  p = n("978679"),
  E = n("49111"),
  g = n("782340"),
  S = n("455701"),
  C = function(e) {
    let {
      subscriptionTier: t,
      onClick: n,
      size: s,
      className: C,
      buttonText: _,
      buttonTextClassName: I,
      onSubscribeModalClose: T,
      premiumModalAnalyticsLocation: v,
      disableShine: x,
      giftMessage: N,
      giftRecipient: A,
      ...M
    } = e, R = (0, r.useStateFromStores)([f.default], () => f.default.getCurrentUser()), j = (0, r.useStateFromStores)([h.default], () => h.default.isFocused()), [L, y] = l.useState(!1), {
      analyticsLocations: O
    } = (0, o.default)();
    return (0, a.jsxs)(m.default, {
      pauseAnimation: !j || x,
      size: s,
      className: i(S.giftButton, C),
      onlyShineOnHover: !0,
      innerClassName: S.innerGiftButton,
      color: u.Button.Colors.PRIMARY,
      onClick: e => {
        if (e.preventDefault(), null == R) {
          (0, c.transitionTo)(E.Routes.LOGIN);
          return
        }
        null == n || n(e), (0, d.default)({
          isGift: !0,
          subscriptionTier: t,
          analyticsLocations: O,
          analyticsObject: {
            object: E.AnalyticsObjects.BUTTON_CTA,
            objectType: E.AnalyticsObjectTypes.GIFT,
            ...v
          },
          onClose: T,
          giftMessage: N,
          giftRecipient: A
        })
      },
      onMouseEnter: () => y(!0),
      onMouseLeave: () => y(!1),
      ...M,
      children: [(0, a.jsx)("div", {
        className: i(S.gradientBackground, {
          [S.gradientBackgroundHover]: L
        })
      }), (0, a.jsx)(p.default, {
        className: S.giftIcon
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "none",
        className: i(S.buttonText, I),
        children: null != _ ? _ : g.default.Messages.PREMIUM_GIFTING_BUTTON
      })]
    })
  }