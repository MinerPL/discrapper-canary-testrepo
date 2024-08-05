n.d(t, {
  U: function() {
return l;
  },
  Z: function() {
return u;
  }
}), n(47120);
var r = n(442837),
  i = n(314897),
  a = n(271383),
  s = n(430824),
  o = n(981631);

function l(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == e ? null : a.ZP.getMember(e, i.default.getId()),
[r] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [s.Z],
l = r.getGuild(e);
  if (null == l || null == n || !l.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_ENABLED))
return !1;
  for (let e of n.roles) {
var u;
let n = null == t ? void 0 : t[e];
if ((null == n ? void 0 : null === (u = n.tags) || void 0 === u ? void 0 : u.subscription_listing_id) != null)
  return !0;
  }
  return !1;
}

function u(e) {
  let t = (0, r.e7)([
i.default,
a.ZP
  ], () => null == e ? null : a.ZP.getMember(e, i.default.getId()));
  return (0, r.e7)([s.Z], () => l(e, null != e ? s.Z.getRoles(e) : void 0, t, [s.Z]), [
e,
t
  ]);
}