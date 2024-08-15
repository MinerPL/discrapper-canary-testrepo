n.d(t, {
  Z: function() {
return C;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(512722),
  l = n.n(s),
  r = n(442837),
  o = n(911367),
  c = n(699516),
  u = n(594174),
  d = n(453956),
  h = n(380738),
  m = n(184301),
  p = n(87728),
  _ = n(705816),
  f = n(792379),
  E = n(123579),
  g = n(402777);

function C(e) {
  let {
location: t,
channel: n,
...s
  } = e, {
botProfilesEnabled: C
  } = (0, h.J)({
location: t
  }), I = (0, p.Z)();
  (0, o.t)();
  let [x] = n.recipients, T = (0, r.e7)([u.default], () => u.default.getUser(x));
  l()(null != T, 'ProfilePanelExperimentWrapper: user cannot be undefined');
  let N = (0, r.e7)([u.default], () => u.default.getCurrentUser());
  l()(null != N, 'ProfilePanelExperimentWrapper: currentUser cannot be undefined'), a.useEffect(() => {
(0, m.Z)(T, {
  withMutualFriends: !T.bot,
  withMutualGuilds: !0,
  channelId: n.id
});
  }, [
T,
n.id
  ]);
  let v = (0, r.e7)([c.Z], () => c.Z.isBlocked(T.id)),
[S, Z] = a.useState(v),
A = (0, d.sS)({
  location: t
});
  return (a.useEffect(() => {
Z(v);
  }, [v]), I) ? null : S && A ? (0, i.jsx)(_.Z, {
user: T,
channel: n,
onViewBlockedProfileClick: () => Z(!1),
...s
  }) : C && T.isNonUserBot() ? (0, i.jsx)(f.Z, {
user: T,
channel: n,
...s
  }) : C || !T.bot ? (0, i.jsx)(g.Z, {
user: T,
currentUser: N,
channel: n,
...s
  }) : (0, i.jsx)(E.Z, {
user: T,
channel: n,
...s
  });
}