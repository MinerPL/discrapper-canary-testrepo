n.d(s, {
  Z: function() {
return v;
  }
});
var i = n(735250),
  l = n(470079),
  t = n(120356),
  o = n.n(t),
  a = n(442837),
  r = n(481060),
  d = n(717881),
  c = n(387903),
  u = n(906732),
  _ = n(199902),
  I = n(158776),
  f = n(785717),
  E = n(221292),
  m = n(981631),
  x = n(501649),
  S = n(735393);

function v(e) {
  let {
user: s,
type: n,
showActions: t,
onClose: v
  } = e, Z = (0, a.e7)([_.Z], () => null != _.Z.getAnyStreamForUser(s.id)), h = (0, a.e7)([I.Z], () => I.Z.getActivities(s.id)), p = l.useMemo(() => h.filter(e => e.type !== m.IIU.CUSTOM_STATUS), [h]), T = l.useMemo(() => Z ? p.find(e => e.type === m.IIU.PLAYING) : null, [
p,
Z
  ]), g = l.useMemo(() => p.filter(e => e !== T), [
T,
p
  ]), {
analyticsLocations: N,
newestAnalyticsLocation: j
  } = (0, u.ZP)(), {
context: C,
trackUserProfileAction: A
  } = (0, f.KZ)(), R = {
location: {
  page: m.ZY5.USER_PROFILE,
  section: m.jXE.PROFILE_MODAL
}
  };
  return (0, i.jsxs)(r.ScrollerThin, {
className: S.listScroller,
fade: !0,
children: [
  Z ? (0, i.jsx)(d.Z, {
    type: n,
    user: s,
    source: j,
    className: x.userProfileActivity,
    showChannelDetails: n === c.Y.SIMPLIFIED_PROFILE,
    activity: T,
    actionColor: x.actionColor,
    analyticsParams: R,
    showActions: t,
    onClose: v,
    onAction: () => {
      A({
        action: 'JOIN_ACTIVITY'
      }), (0, E.Ac)({
        activityType: m.IIU.STREAMING,
        activityName: null == T ? void 0 : T.name,
        activityPlatform: null == T ? void 0 : T.platform,
        activitySessionId: null == T ? void 0 : T.session_id,
        applicationId: null == T ? void 0 : T.application_id,
        analyticsLocations: N,
        ...C
      });
    }
  }) : null,
  g.map(e => (0, i.jsx)(d.Z, {
    type: n,
    activity: e,
    user: s,
    useStoreStream: !1,
    source: j,
    className: o()(x.userProfileActivity, n === c.Y.SIMPLIFIED_PROFILE && x.simplifiedProfileActivity),
    showChannelDetails: n === c.Y.SIMPLIFIED_PROFILE,
    actionColor: x.actionColor,
    analyticsParams: R,
    showActions: t,
    onClose: v,
    onAction: () => {
      A({
        action: 'JOIN_ACTIVITY'
      }), (0, E.Ac)({
        activityType: e.type,
        activityName: e.name,
        activityPlatform: e.platform,
        activitySessionId: e.session_id,
        applicationId: e.application_id,
        analyticsLocations: N,
        ...C
      });
    }
  }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
]
  });
}