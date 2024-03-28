"use strict";
n.r(t);
var i = n("735250");
n("470079");
var s = n("393586"),
  a = n("481060"),
  l = n("37234"),
  r = n("100527"),
  u = n("906732"),
  o = n("703656"),
  c = n("335131"),
  d = n("981631"),
  m = n("689938"),
  f = n("832371");
t.default = e => {
  let {
    onClose: t
  } = e, {
    analyticsLocations: n
  } = (0, u.default)(), p = () => {
    t(), (0, o.transitionTo)(d.Routes.COLLECTIBLES_SHOP), (0, c.openCollectiblesShop)({
      openInLayer: !1,
      analyticsSource: r.default.PREMIUM_PAYMENT_MODAL,
      analyticsLocations: n
    }), (0, l.popLayer)()
  };
  return (0, i.jsxs)("div", {
    className: f.container,
    children: [(0, i.jsx)("div", {
      className: f.iconBackground,
      children: (0, i.jsx)(s.ShopIcon, {
        width: 20,
        height: 20,
        color: a.tokens.colors.WHITE
      })
    }), (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-primary",
      children: m.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
        checkItOut: e => (0, i.jsx)(a.Clickable, {
          className: f.link,
          onClick: p,
          children: e
        })
      })
    })]
  })
}