i.r(s), i.d(s, {
  default: function() {
return _;
  }
});
var n = i(735250);
i(470079);
var l = i(512722),
  t = i.n(l),
  o = i(442837),
  a = i(594174),
  r = i(380738),
  d = i(910364),
  c = i(853825),
  u = i(41527),
  I = i(107889);

function _(e) {
  let {
location: s,
user: i,
...l
  } = e, {
botProfilesEnabled: _
  } = (0, r.J)({
location: s
  }), f = (0, o.e7)([a.default], () => a.default.getCurrentUser());
  return (t()(null != f, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), _ && i.isNonUserBot()) ? (0, n.jsx)(c.Z, {
...l,
user: i,
currentUser: f
  }) : _ && i.bot ? (0, n.jsx)(u.Z, {
...l,
user: i,
currentUser: f
  }) : i.bot ? (0, n.jsx)(d.Z, {
...l,
user: i,
currentUser: f
  }) : (0, n.jsx)(I.Z, {
...l,
user: i,
currentUser: f
  });
}