"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var r = n("422244"),
  a = n("77078"),
  i = n("54239"),
  l = n("812204"),
  u = n("685665"),
  c = n("393414"),
  o = n("21526"),
  d = n("49111"),
  m = n("782340"),
  f = n("24171"),
  p = e => {
    let {
      onClose: t
    } = e, {
      analyticsLocations: n
    } = (0, u.default)(), p = () => {
      t(), (0, c.transitionTo)(d.Routes.COLLECTIBLES_SHOP), (0, o.openCollectiblesShop)({
        openInLayer: !1,
        analyticsSource: l.default.PREMIUM_PAYMENT_MODAL,
        analyticsLocations: n
      }), (0, i.popLayer)()
    };
    return (0, s.jsxs)("div", {
      className: f.container,
      children: [(0, s.jsx)("div", {
        className: f.iconBackground,
        children: (0, s.jsx)(r.ShopIcon, {
          width: 20,
          height: 20,
          color: a.tokens.colors.WHITE
        })
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: m.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
          checkItOut: e => (0, s.jsx)(a.Clickable, {
            className: f.link,
            onClick: p,
            children: e
          })
        })
      })]
    })
  }