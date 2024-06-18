"use strict";
n.d(t, {
  j0: function() {
    return I
  },
  mY: function() {
    return E
  },
  on: function() {
    return c
  }
}), n(47120);
var i = n(442837),
  r = n(652515),
  s = n(200876),
  o = n(674180),
  a = n(160404),
  l = n(430824),
  u = n(772021),
  _ = n(981631);

function d(e) {
  let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z, a.Z], i = t.getGuild(e);
  if (null == i) return !1;
  let r = (0, s.l)(i),
    o = i.hasFeature(_.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
  return !!(r && o || n.isViewingServerShop(e)) || !1
}

function c(e, t) {
  return !!d(e) || (0, u.U)(e, t)
}

function E(e) {
  let t = (0, u.Z)(e),
    n = (0, i.e7)([l.Z, a.Z], () => d(e, [l.Z, a.Z]), [e]),
    {
      shouldHideGuildPurchaseEntryPoints: r
    } = (0, o.uP)(e);
  return !r && (n || t)
}

function I(e) {
  let t = E(e),
    n = (0, r.RF)(e, "useShowRoleSubscriptionsInChannelList");
  return t && !n
}