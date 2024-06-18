"use strict";
n.d(t, {
  g: function() {
    return _
  }
});
var i = n(399606),
  r = n(704215),
  s = n(605236),
  o = n(352981),
  a = n(496675),
  l = n(652515),
  u = n(981631);

function _(e, t) {
  var n;
  let _ = (0, l.yV)(t),
    d = (0, s.wE)(r.z.SERVER_SHOP_PHANTOM_PREVIEW),
    c = (0, i.e7)([a.Z], () => null != e && a.Z.can(u.Plq.ADMINISTRATOR, e)),
    E = null !== (n = null == e ? void 0 : e.hasFeature(u.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== n && n,
    I = (0, o.y)(null == e ? void 0 : e.id, "useGuildShopPreviewVisible"),
    T = [u.oNc.CREATOR_MONETIZABLE, u.oNc.CREATOR_MONETIZABLE_PROVISIONAL, u.oNc.ROLE_SUBSCRIPTIONS_ENABLED].some(t => (null == e ? void 0 : e.hasFeature(t)) === !0);
  return null != e && c && !E && T && _ && I && !d
}