"use strict";
n.d(t, {
  k: function() {
    return f
  }
});
var i = n(668781),
  r = n(728345),
  s = n(812206),
  o = n(835873),
  a = n(973616),
  l = n(592125),
  u = n(430824),
  _ = n(496675),
  d = n(594174),
  c = n(979651),
  E = n(317381),
  I = n(638880),
  T = n(782769),
  h = n(527805),
  S = n(689938);
async function f(e) {
  var t;
  let {
    channelId: n,
    applicationId: f,
    launchId: N,
    inputApplication: A,
    analyticsLocations: m,
    embeddedActivitiesManager: O
  } = e, R = E.ZP.getEmbeddedActivitiesForChannel(n).find(e => e.applicationId === f && (null == N || e.launchId === N)), C = A;
  if (null == C) {
    let e = await r.Z.fetchApplication(f);
    C = a.Z.createFromServer(e)
  }
  if (null == R || null == C) return;
  let p = d.default.getCurrentUser(),
    g = l.Z.getChannel(n),
    L = (0, h.ZP)({
      userId: null == p ? void 0 : p.id,
      application: C,
      channelId: n,
      currentUser: p,
      isActivitiesEnabledForCurrentPlatform: (0, T.a)(g),
      ChannelStore: l.Z,
      VoiceStateStore: c.Z,
      PermissionStore: _.Z,
      GuildStore: u.Z
    }),
    v = E.ZP.getSelfEmbeddedActivityForChannel(n),
    D = null == v ? void 0 : v.applicationId,
    M = null != D && null !== (t = s.Z.getApplication(D)) && void 0 !== t ? t : void 0;
  ! function(e) {
    let {
      embeddedActivityJoinability: t,
      handleCanJoin: n
    } = e;
    switch (t) {
      case h.Fw.CAN_JOIN:
        null == n || n();
        break;
      case h.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
        (0, o.w)();
        break;
      case h.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
        i.Z.show({
          title: S.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: S.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
          hideActionSheet: !1
        });
        break;
      case h.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
        i.Z.show({
          title: S.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: S.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
          hideActionSheet: !1
        });
        break;
      case h.Fw.ACTIVITY_AGE_GATED:
        i.Z.show({
          title: S.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: S.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
          hideActionSheet: !1
        });
        break;
      case h.Fw.NO_CHANNEL_CONNECT_PERMISSION:
      case h.Fw.CHANNEL_FULL:
      case h.Fw.NO_CHANNEL:
      case h.Fw.NO_USER:
        i.Z.show({
          title: S.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
          body: S.Z.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
          hideActionSheet: !1
        })
    }
  }({
    embeddedActivityJoinability: L,
    handleCanJoin: async function e() {
      if (null != R) await (0, I.Z)({
        applicationId: R.applicationId,
        currentEmbeddedApplication: M,
        activityChannelId: n,
        locationObject: {},
        embeddedActivitiesManager: O,
        analyticsLocations: m
      })
    }
  })
}