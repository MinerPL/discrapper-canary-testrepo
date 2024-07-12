i.d(n, {
  Z: function() {
return x;
  }
});
var s = i(735250),
  l = i(470079),
  o = i(120356),
  t = i.n(o),
  r = i(442837),
  a = i(481060),
  d = i(717881),
  c = i(387903),
  u = i(906732),
  I = i(199902),
  _ = i(158776),
  f = i(785717),
  E = i(221292),
  m = i(981631),
  S = i(501649),
  Z = i(735393);

function x(e) {
  let {
user: n,
type: i,
showActions: o,
onClose: x
  } = e, v = (0, r.e7)([I.Z], () => null != I.Z.getAnyStreamForUser(n.id)), h = (0, r.e7)([_.Z], () => _.Z.getActivities(n.id)), p = l.useMemo(() => h.filter(e => e.type !== m.IIU.CUSTOM_STATUS), [h]), T = l.useMemo(() => v ? p.find(e => e.type === m.IIU.PLAYING) : null, [
p,
v
  ]), g = l.useMemo(() => p.filter(e => e !== T), [
T,
p
  ]), {
analyticsLocations: N,
newestAnalyticsLocation: C
  } = (0, u.ZP)(), {
trackUserProfileAction: j,
...A
  } = (0, f.KZ)(), R = {
location: {
  page: m.ZY5.USER_PROFILE,
  section: m.jXE.PROFILE_MODAL
}
  };
  return (0, s.jsxs)(a.ScrollerThin, {
className: Z.listScroller,
fade: !0,
children: [
  v ? (0, s.jsx)(d.Z, {
    type: i,
    user: n,
    source: C,
    className: S.userProfileActivity,
    showChannelDetails: i === c.Y.SIMPLIFIED_PROFILE,
    activity: T,
    actionColor: S.actionColor,
    analyticsParams: R,
    showActions: o,
    onGameProfileOpened: x,
    onAction: () => {
      j({
        action: 'JOIN_ACTIVITY'
      }), (0, E.Ac)({
        activityType: m.IIU.STREAMING,
        activityName: null == T ? void 0 : T.name,
        activityPlatform: null == T ? void 0 : T.platform,
        activitySessionId: null == T ? void 0 : T.session_id,
        applicationId: null == T ? void 0 : T.application_id,
        analyticsLocations: N,
        ...A
      });
    }
  }) : null,
  g.map(e => (0, s.jsx)(d.Z, {
    type: i,
    activity: e,
    user: n,
    useStoreStream: !1,
    source: C,
    className: t()(S.userProfileActivity, i === c.Y.SIMPLIFIED_PROFILE && S.simplifiedProfileActivity),
    showChannelDetails: i === c.Y.SIMPLIFIED_PROFILE,
    actionColor: S.actionColor,
    analyticsParams: R,
    showActions: o,
    onGameProfileOpened: x,
    onAction: () => {
      j({
        action: 'JOIN_ACTIVITY'
      }), (0, E.Ac)({
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