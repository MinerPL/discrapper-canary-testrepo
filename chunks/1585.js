"use strict";
n.d(t, {
  ps: function() {
    return u
  },
  y9: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(703656);
n(956664);
var o = n(419061),
  a = n(981631);

function l(e) {
  return "number" != typeof e ? (0, r.getAvatarSize)(e) * o.hs : e * o.hs
}
let u = e => {
  let {
    analyticsLocations: t,
    initialSelectedDecoration: o,
    initialSelectedDecorationId: l,
    isTryItOutFlow: u,
    guild: _,
    onClose: d
  } = e;
  (0, r.openModalLazy)(async () => {
    (0, s.s1)().location.pathname === a.Z5c.COLLECTIBLES_SHOP_FULLSCREEN && (0, s.uL)(a.Z5c.APP);
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 235400));
    return n => (0, i.jsx)(e, {
      ...n,
      onCloseModal: n.onClose,
      onClose: d,
      analyticsLocations: t,
      initialSelectedDecoration: o,
      initialSelectedDecorationId: l,
      isTryItOutFlow: u,
      guild: _
    })
  }, {})
}