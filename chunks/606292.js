"use strict";
n.r(t), n.d(t, {
  getDecorationSizeForAvatarSize: function() {
    return o
  },
  openAvatarDecorationModal: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var l = n("77078"),
  s = n("393414");
n("103603");
var a = n("573135"),
  i = n("49111");

function o(e) {
  return "number" != typeof e ? (0, l.getAvatarSize)(e) * a.DECORATION_TO_AVATAR_RATIO : e * a.DECORATION_TO_AVATAR_RATIO
}
let u = e => {
  let {
    analyticsLocations: t,
    initialSelectedDecoration: a,
    isTryItOutFlow: o,
    guild: u
  } = e;
  (0, l.openModalLazy)(async () => {
    (0, s.getHistory)().location.pathname === i.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, s.transitionTo)(i.Routes.APP);
    let {
      default: e
    } = await n.el("791050").then(n.bind(n, "791050"));
    return n => (0, r.jsx)(e, {
      ...n,
      analyticsLocations: t,
      initialSelectedDecoration: a,
      isTryItOutFlow: o,
      guild: u
    })
  }, {})
}