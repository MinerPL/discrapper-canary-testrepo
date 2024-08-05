n.d(t, {
  Z: function() {
return p;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(906732),
  s = n(70956),
  o = n(709054),
  l = n(785717),
  u = n(221292),
  c = n(27144),
  d = n(929498),
  _ = n(151545),
  E = n(527790),
  f = n(304042),
  h = n(981631);

function p(e) {
  let {
user: t,
currentUser: n,
className: p,
onClose: m
  } = e, {
analyticsLocations: I
  } = (0, a.ZP)(), {
trackUserProfileAction: T,
...g
  } = (0, l.KZ)(), {
live: S,
recent: A,
stream: N
  } = (0, d.Z)(t.id), [v] = S, {
mostRecentActivityEnabled: O
  } = (0, c.z)({
location: 'UserProfileFeaturedActivity'
  }), R = i.useMemo(() => A.find(e => o.default.age(e.id) / s.Z.Millis.HOUR < 24), [A]);
  return null != N ? (0, r.jsx)(f.Z, {
user: t,
currentUser: n,
stream: N,
className: p,
onClose: m,
onAction: () => {
  T({
    action: 'JOIN_ACTIVITY'
  }), (0, u.Ac)({
    activityType: h.IIU.STREAMING,
    analyticsLocations: I,
    ...g
  }), null == m || m();
}
  }) : null != v ? (0, r.jsx)(_.Z, {
user: t,
currentUser: n,
activity: v,
className: p,
onClose: m,
onAction: () => {
  T({
    action: 'JOIN_ACTIVITY'
  }), (0, u.Ac)({
    activityType: v.type,
    activityName: v.name,
    activityPlatform: v.platform,
    activitySessionId: v.session_id,
    applicationId: v.application_id,
    analyticsLocations: I,
    ...g
  }), null == m || m();
}
  }) : O && null != R ? (0, r.jsx)(E.Z, {
user: t,
entry: R,
className: p,
onClose: m
  }) : null;
}