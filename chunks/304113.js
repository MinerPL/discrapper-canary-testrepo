n.r(s), n.d(s, {
  default: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  t = n(512722),
  o = n.n(t),
  a = n(442837),
  r = n(100527),
  d = n(699516),
  c = n(594174),
  u = n(453956),
  _ = n(380738),
  I = n(787018),
  f = n(910364),
  E = n(853825),
  m = n(41527),
  x = n(107889);
let S = [
  r.Z.BITE_SIZE_PROFILE_POPOUT,
  r.Z.PROFILE_POPOUT,
  r.Z.PROFILE_PANEL
];

function v(e) {
  let {
location: s,
user: n,
...t
  } = e, {
botProfilesEnabled: r
  } = (0, _.J)({
location: s
  }), v = (0, a.e7)([c.default], () => c.default.getCurrentUser());
  o()(null != v, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined');
  let Z = (0, a.e7)([d.Z], () => d.Z.isBlocked(n.id)),
[h, p] = l.useState(Z),
T = (0, u.sS)({
  location: s
});
  l.useEffect(() => {
p(Z);
  }, [Z]);
  let g = !S.some(e => {
var s;
return (null !== (s = t.sourceAnalyticsLocations) && void 0 !== s ? s : []).includes(e);
  });
  return h && T && g ? (0, i.jsx)(I.Z, {
user: n,
currentUser: v,
onViewBlockedProfileClick: () => p(!1),
...t
  }) : r && n.isNonUserBot() ? (0, i.jsx)(E.Z, {
...t,
user: n,
currentUser: v
  }) : r && n.bot ? (0, i.jsx)(m.Z, {
...t,
user: n,
currentUser: v
  }) : n.bot ? (0, i.jsx)(f.Z, {
...t,
user: n,
currentUser: v
  }) : (0, i.jsx)(x.Z, {
...t,
user: n,
currentUser: v
  });
}