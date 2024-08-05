n.d(t, {
  k: function() {
return I;
  }
});
var r = n(668781),
  i = n(728345),
  a = n(812206),
  s = n(835873),
  o = n(973616),
  l = n(592125),
  u = n(430824),
  c = n(496675),
  d = n(594174),
  _ = n(979651),
  E = n(317381),
  f = n(638880),
  h = n(782769),
  p = n(527805),
  m = n(689938);
async function I(e) {
  var t;
  let {
channelId: n,
applicationId: I,
launchId: T,
inputApplication: g,
analyticsLocations: S,
embeddedActivitiesManager: A
  } = e, N = E.ZP.getEmbeddedActivitiesForChannel(n).find(e => e.applicationId === I && (null == T || e.launchId === T)), v = g;
  if (null == v) {
let e = await i.Z.fetchApplication(I);
v = o.Z.createFromServer(e);
  }
  if (null == N || null == v)
return;
  let O = d.default.getCurrentUser(),
R = l.Z.getChannel(n),
C = (0, p.ZP)({
  userId: null == O ? void 0 : O.id,
  application: v,
  channelId: n,
  currentUser: O,
  isActivitiesEnabledForCurrentPlatform: (0, h.a)(R),
  ChannelStore: l.Z,
  VoiceStateStore: _.Z,
  PermissionStore: c.Z,
  GuildStore: u.Z
}),
y = E.ZP.getSelfEmbeddedActivityForChannel(n),
D = null == y ? void 0 : y.applicationId,
L = null != D && null !== (t = a.Z.getApplication(D)) && void 0 !== t ? t : void 0;
  ! function(e) {
let {
  embeddedActivityJoinability: t,
  handleCanJoin: n
} = e;
switch (t) {
  case p.Fw.CAN_JOIN:
    null == n || n();
    break;
  case p.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
    (0, s.w)();
    break;
  case p.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
    r.Z.show({
      title: m.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
      body: m.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
      hideActionSheet: !1
    });
    break;
  case p.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
    r.Z.show({
      title: m.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
      body: m.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
      hideActionSheet: !1
    });
    break;
  case p.Fw.ACTIVITY_AGE_GATED:
    r.Z.show({
      title: m.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
      body: m.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
      hideActionSheet: !1
    });
    break;
  case p.Fw.NO_CHANNEL_CONNECT_PERMISSION:
  case p.Fw.CHANNEL_FULL:
  case p.Fw.NO_CHANNEL:
  case p.Fw.NO_USER:
    r.Z.show({
      title: m.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
      body: m.Z.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
      hideActionSheet: !1
    });
}
  }({
embeddedActivityJoinability: C,
handleCanJoin: async function e() {
  if (null != N)
    await (0, f.Z)({
      applicationId: N.applicationId,
      currentEmbeddedApplication: L,
      activityChannelId: n,
      locationObject: {},
      embeddedActivitiesManager: A,
      analyticsLocations: S
    });
}
  });
}