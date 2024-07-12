i.r(n), i.d(n, {
  default: function() {
return f;
  }
});
var s = i(735250);
i(470079);
var l = i(512722),
  o = i.n(l),
  t = i(442837),
  r = i(594174),
  a = i(380738),
  d = i(642113),
  c = i(910364),
  u = i(853825),
  I = i(41527),
  _ = i(107889);

function f(e) {
  let {
location: n,
user: i,
...l
  } = e;
  (0, d.V)({
location: n
  });
  let {
botProfilesEnabled: f
  } = (0, a.J)({
location: n
  }), E = (0, t.e7)([r.default], () => r.default.getCurrentUser());
  return (o()(null != E, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), f && i.isNonUserBot()) ? (0, s.jsx)(u.Z, {
...l,
user: i,
currentUser: E
  }) : f && i.bot ? (0, s.jsx)(I.Z, {
...l,
user: i,
currentUser: E
  }) : i.bot ? (0, s.jsx)(c.Z, {
...l,
user: i,
currentUser: E
  }) : (0, s.jsx)(_.Z, {
...l,
user: i,
currentUser: E
  });
}