"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("37983");
n("884691");
var a = n("907002"),
  l = n("65597"),
  r = n("77078"),
  i = n("206230"),
  u = n("812204"),
  o = n("685665"),
  d = n("21526"),
  c = n("393414"),
  _ = n("49111"),
  f = n("782340"),
  I = n("526380"),
  E = n("34125"),
  S = e => {
    let {
      onClose: t
    } = e, {
      analyticsLocations: n
    } = (0, o.default)(), S = (0, l.default)([i.default], () => i.default.useReducedMotion), m = (0, a.useSpring)({
      immediate: S,
      delay: 800,
      from: {
        transform: "translate(0, -100%)"
      },
      to: {
        transform: "translate(0, 0)"
      }
    }), P = () => {
      t(), (0, c.transitionTo)(_.Routes.COLLECTIBLES_SHOP), (0, d.openCollectiblesShop)({
        openInLayer: !1,
        analyticsSource: u.default.PREMIUM_PAYMENT_MODAL,
        analyticsLocations: n
      })
    };
    return (0, s.jsxs)(a.animated.div, {
      style: m,
      className: I.container,
      children: [(0, s.jsx)("img", {
        className: I.image,
        src: E,
        alt: ""
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: f.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
          checkItOut: e => (0, s.jsx)(r.Clickable, {
            className: I.link,
            onClick: P,
            children: e
          }, "COLLECTIBLES_GIFT_CODE_MODAL_UPSELL")
        })
      })]
    })
  }