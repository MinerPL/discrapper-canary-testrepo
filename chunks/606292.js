"use strict";
n.r(t), n.d(t, {
  getDecorationSizeForAvatarSize: function() {
    return a
  },
  openAvatarDecorationModal: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  u = n("393414");
n("103603");
var o = n("573135"),
  l = n("49111");

function a(e) {
  return "number" != typeof e ? (0, r.getAvatarSize)(e) * o.DECORATION_TO_AVATAR_RATIO : e * o.DECORATION_TO_AVATAR_RATIO
}
let s = e => {
  let {
    analyticsLocations: t,
    initialSelectedDecoration: o,
    isTryItOutFlow: a
  } = e;
  (0, r.openModalLazy)(async () => {
    (0, u.getHistory)().location.pathname === l.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, u.transitionTo)(l.Routes.APP);
    let {
      default: e
    } = await n.el("791050").then(n.bind(n, "791050"));
    return n => (0, i.jsx)(e, {
      ...n,
      analyticsLocations: t,
      initialSelectedDecoration: o,
      isTryItOutFlow: a
    })
  }, {})
}