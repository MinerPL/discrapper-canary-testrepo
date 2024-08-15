n.d(t, {
  Z: function() {
return m;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(512722),
  s = n.n(a),
  o = n(442837),
  l = n(699516),
  u = n(594174),
  c = n(453956),
  d = n(380738),
  _ = n(103113),
  E = n(788197),
  f = n(70785),
  h = n(969835),
  p = n(985237);

function m(e) {
  let {
location: t,
userId: n,
user: a,
...m
  } = e, {
botProfilesEnabled: I
  } = (0, d.J)({
location: t
  }), T = (0, o.e7)([u.default], () => u.default.getUser(n), [n]), g = null != a ? a : T;
  s()(null != g, 'UserPopoutExperimentWrapper: user cannot be undefined');
  let S = (0, o.e7)([u.default], () => u.default.getCurrentUser());
  s()(null != S, 'UserPopoutExperimentWrapper: currentUser cannot be undefined');
  let A = (0, o.e7)([l.Z], () => l.Z.isBlocked(g.id)),
[N, v] = i.useState(A),
O = (0, c.sS)({
  location: t
});
  return N && O ? (0, r.jsx)(f.Z, {
...m,
user: g,
currentUser: S,
onViewBlockedProfileClick: () => v(!1)
  }) : I && g.isNonUserBot() ? (0, r.jsx)(_.Z, {
...m,
user: g,
currentUser: S
  }) : I && g.bot ? (0, r.jsx)(p.Z, {
...m,
user: g,
currentUser: S
  }) : g.bot ? (0, r.jsx)(E.Z, {
...m,
user: g,
currentUser: S
  }) : (0, r.jsx)(h.Z, {
...m,
user: g,
currentUser: S
  });
}