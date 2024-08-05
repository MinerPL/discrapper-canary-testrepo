n.d(t, {
  F: function() {
return u;
  },
  Z: function() {
return c;
  }
}), n(47120);
var r = n(442837),
  i = n(430824),
  a = n(496675),
  s = n(594174),
  o = n(700785),
  l = n(981631);

function u(e, t) {
  let [n, r, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [
s.default,
i.Z,
a.Z
  ], c = r.getGuild(e), d = n.getUser(t);
  return !(null == c || null == d || d.isNonUserBot() || c.isOwner(d) || o.BT({
permission: l.Plq.ADMINISTRATOR,
user: d,
context: c
  })) && u.canManageUser(l.Plq.MODERATE_MEMBERS, d, c);
}

function c(e, t) {
  return (0, r.e7)([
s.default,
i.Z,
a.Z
  ], () => u(e, t, [
s.default,
i.Z,
a.Z
  ]), [
e,
t
  ]);
}