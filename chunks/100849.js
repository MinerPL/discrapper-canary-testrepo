i.d(s, {
  Z: function() {
return x;
  }
});
var n = i(735250),
  l = i(470079),
  t = i(120356),
  o = i.n(t),
  a = i(442837),
  r = i(481060),
  d = i(717881),
  c = i(387903),
  u = i(906732),
  I = i(199902),
  _ = i(158776),
  f = i(785717),
  m = i(221292),
  E = i(981631),
  v = i(501649),
  S = i(735393);

function x(e) {
  let {
user: s,
type: i,
showActions: t,
onClose: x
  } = e, Z = (0, a.e7)([I.Z], () => null != I.Z.getAnyStreamForUser(s.id)), h = (0, a.e7)([_.Z], () => _.Z.getActivities(s.id)), p = l.useMemo(() => h.filter(e => e.type !== E.IIU.CUSTOM_STATUS), [h]), T = l.useMemo(() => Z ? p.find(e => e.type === E.IIU.PLAYING) : null, [
p,
Z
  ]), g = l.useMemo(() => p.filter(e => e !== T), [
T,
p
  ]), {
analyticsLocations: N,
newestAnalyticsLocation: j
  } = (0, u.ZP)(), {
trackUserProfileAction: C,
...A
  } = (0, f.KZ)(), R = {
location: {
  page: E.ZY5.USER_PROFILE,
  section: E.jXE.PROFILE_MODAL
}
  };
  return (0, n.jsxs)(r.ScrollerThin, {
className: S.listScroller,
fade: !0,
children: [
  Z ? (0, n.jsx)(d.Z, {
    type: i,
    user: s,
    source: j,
    className: v.userProfileActivity,
    showChannelDetails: i === c.Y.SIMPLIFIED_PROFILE,
    activity: T,
    actionColor: v.actionColor,
    analyticsParams: R,
    showActions: t,
    onClose: x,
    onAction: () => {
      C({
        action: 'JOIN_ACTIVITY'
      }), (0, m.Ac)({
        activityType: E.IIU.STREAMING,
        activityName: null == T ? void 0 : T.name,
        activityPlatform: null == T ? void 0 : T.platform,
        activitySessionId: null == T ? void 0 : T.session_id,
        applicationId: null == T ? void 0 : T.application_id,
        analyticsLocations: N,
        ...A
      });
    }
  }) : null,
  g.map(e => (0, n.jsx)(d.Z, {
    type: i,
    activity: e,
    user: s,
    useStoreStream: !1,
    source: j,
    className: o()(v.userProfileActivity, i === c.Y.SIMPLIFIED_PROFILE && v.simplifiedProfileActivity),
    showChannelDetails: i === c.Y.SIMPLIFIED_PROFILE,
    actionColor: v.actionColor,
    analyticsParams: R,
    showActions: t,
    onClose: x,
    onAction: () => {
      C({
        action: 'JOIN_ACTIVITY'
      }), (0, m.Ac)({
        activityType: e.type,
        activityName: e.name,
        activityPlatform: e.platform,
        activitySessionId: e.session_id,
        applicationId: e.application_id,
        analyticsLocations: N,
        ...A
      });
    }
  }, ''.concat(e.application_id, '-').concat(e.session_id, '-').concat(e.name)))
]
  });
}