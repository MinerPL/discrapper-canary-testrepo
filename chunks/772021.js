"use strict";
n.d(t, {
  U: function() {
    return l
  },
  Z: function() {
    return u
  }
}), n(47120);
var i = n(442837),
  r = n(314897),
  s = n(271383),
  o = n(430824),
  a = n(981631);

function l(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == e ? null : s.ZP.getMember(e, r.default.getId()),
    [i] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [o.Z],
    l = i.getGuild(e);
  if (null == l || null == n || !l.hasFeature(a.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
  for (let e of n.roles) {
    var u;
    let n = null == t ? void 0 : t[e];
    if ((null == n ? void 0 : null === (u = n.tags) || void 0 === u ? void 0 : u.subscription_listing_id) != null) return !0
  }
  return !1
}

function u(e) {
  let t = (0, i.e7)([r.default, s.ZP], () => null == e ? null : s.ZP.getMember(e, r.default.getId()));
  return (0, i.e7)([o.Z], () => l(e, null != e ? o.Z.getRoles(e) : void 0, t, [o.Z]), [e, t])
}