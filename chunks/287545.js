let r;
n.d(t, {
  U: function() {
return z;
  },
  Z: function() {
return q;
  }
}), n(653041), n(47120);
var i = n(512722),
  a = n.n(i),
  o = n(772848),
  s = n(544891),
  l = n(570140),
  u = n(475179),
  c = n(317770),
  d = n(728345),
  _ = n(812206),
  E = n(358221),
  f = n(42352),
  h = n(131704),
  p = n(314897),
  m = n(592125),
  I = n(19780),
  T = n(944486),
  g = n(594174),
  S = n(626135),
  A = n(585483),
  N = n(358085),
  v = n(24933),
  O = n(566620),
  R = n(317381),
  C = n(969345),
  y = n(148720),
  D = n(146936),
  L = n(782769),
  b = n(964517),
  M = n(761122),
  P = n(983695),
  U = n(917107),
  w = n(701488),
  x = n(981631),
  G = n(689938);

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let B = {},
  F = {};

function V(e) {
  var t;
  return {
releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, M.Z)((0, N.getOS)())].release_phase
  };
}
async function H(e) {
  let {
channelId: t,
applicationId: n,
analyticsLocations: r
  } = e, i = m.Z.getChannel(t), a = null == i ? void 0 : i.getGuildId(), o = g.default.getCurrentUser();
  if (null == i || null == o)
return;
  let s = R.ZP.getShelfActivities(a),
l = v.Z.getState().shelfOrder,
u = 0 === R.ZP.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === n).length,
c = (0, C.Z)({
  applicationId: n,
  activityConfigs: s
}),
d = 1 + l.findIndex(e => e === n),
{
  releasePhase: _
} = V(c),
h = await (0, f.Z)();
  F[n] = e => {
var t, a, s;
B[n] = e, S.default.track(x.rMx.ACTIVITY_SESSION_JOINED, {
  channel_id: i.id,
  guild_id: i.getGuildId(),
  media_session_id: e.mediaSessionIds[0],
  activity_session_id: e.activitySessionId,
  application_id: n,
  location_stack: r,
  user_premium_tier: o.premiumType,
  raw_thermal_state: h,
  n_participants: E.Z.getUserParticipantCount(i.id),
  is_activity_start: u,
  release_phase: _,
  activity_premium_tier_requirement: null == c ? void 0 : null === (t = c.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
  shelf_rank: null == c ? void 0 : null === (a = c.activity) || void 0 === a ? void 0 : a.shelf_rank,
  shelf_sorted_rank: d > 0 ? d : null,
  activity_user_session_id: e.activityUserSessionId,
  channel_type: i.type
}), S.default.track(x.rMx.ACTIVITY_IFRAME_MOUNT, {
  location_stack: r,
  channel_id: i.id,
  channel_type: i.type,
  guild_id: i.getGuildId(),
  application_id: n,
  instance_id: e.launchId,
  initial_media_session_id: e.mediaSessionIds[0],
  activity_user_session_id: e.activityUserSessionId,
  raw_thermal_state: h,
  is_activity_start: u,
  shelf_rank: null == c ? void 0 : null === (s = c.activity) || void 0 === s ? void 0 : s.shelf_rank,
  shelf_sorted_rank: d > 0 ? d : null,
  activities_infra_version: null == e ? void 0 : e.activities_infra_version
});
  };
}
async function Z(e) {
  var t, n;
  let {
channelId: r,
applicationId: i,
locationId: a,
instanceId: o
  } = e, l = B[i], u = m.Z.getChannel(r), c = R.ZP.getEmbeddedActivityDurationMs(r, i), d = g.default.getCurrentUser(), _ = null == u ? void 0 : u.getGuildId(), E = p.default.getSessionId();
  if (null != a && null != o && null != E && await s.tn.post({
  url: x.ANM.ACTIVITY_LEAVE(i, a, o),
  body: {
    session_id: E
  }
}), null == l || null == u || null == d)
return;
  let h = R.ZP.getShelfActivities(_),
I = (0, C.Z)({
  applicationId: i,
  activityConfigs: h
}),
{
  releasePhase: T
} = V(I),
A = await (0, f.Z)();
  S.default.track(x.rMx.ACTIVITY_SESSION_LEFT, {
channel_id: u.id,
guild_id: u.getGuildId(),
media_session_id: l.mediaSessionIds[0],
activity_session_id: l.activitySessionId,
application_id: i,
duration_ms: c,
user_premium_tier: d.premiumType,
raw_thermal_state: A,
release_phase: T,
activity_premium_tier_requirement: null == I ? void 0 : null === (t = I.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
shelf_rank: null == I ? void 0 : null === (n = I.activity) || void 0 === n ? void 0 : n.shelf_rank,
activity_user_session_id: l.activityUserSessionId,
channel_type: u.type,
media_session_ids: l.mediaSessionIds
  }), S.default.track(x.rMx.ACTIVITY_IFRAME_UNMOUNT, {
channel_id: u.id,
guild_id: u.getGuildId(),
application_id: i,
instance_ids: [l.launchId],
media_session_ids: l.mediaSessionIds,
activity_user_session_id: l.activityUserSessionId,
raw_thermal_state: A,
duration_ms: c
  }), delete F[i], delete B[i];
}

function Y(e) {
  let {
channelId: t,
embeddedActivity: n,
connections: r,
updateCode: i
  } = e, a = p.default.getId(), o = r.find(e => e.user_id === a);
  W(t, n, n.application_id, n.activity_id, null == o ? void 0 : o.user_id, i === w.m2.ACTIVITY_STARTED);
}

function j(e) {
  let {
location: t,
applicationId: n,
launchId: r,
participants: i
  } = e, a = p.default.getId(), o = R.ZP.getEmbeddedActivitiesForChannel(t.channel_id).find(e => e.launchId === r), s = i.find(e => e.user_id === a);
  null != o && W(t.channel_id, o, n, r, null == s ? void 0 : s.user_id, !1);
}

function W(e, t, n, r, i, a) {
  var s, l;
  let c = R.ZP.getEmbeddedActivitiesForChannel(e),
d = m.Z.getChannel(e);
  if (a && null !== (l = null == d ? void 0 : d.isPrivate()) && void 0 !== l && l && c.length <= 1 && null == i && u.Z.selectParticipant(e, null), null == i)
return;
  let _ = I.Z.getMediaSessionId(),
E = 'activity_id' in t ? (0, b.C)(t) : (0, b.Z)(t),
f = null == _ && (null == d ? void 0 : d.isVocal()) === !0 && (null == d ? void 0 : d.isPrivate()) === !1;
  null != E && !f && (null === (s = F[n]) || void 0 === s || s.call(F, {
activitySessionId: E,
activityUserSessionId: (0, o.Z)(),
launchId: r,
mediaSessionIds: null != _ ? [_] : [],
activities_infra_version: 'location' in t ? 2 : 1
  }), delete F[n]);
}

function K(e) {
  let {
mediaSessionId: t
  } = e;
  if (null == t)
return;
  for (let e in B)
B[e].mediaSessionIds.push(t);
  let n = I.Z.getChannelId();
  if (null != n) {
let e = R.ZP.getSelfEmbeddedActivityForChannel(n),
  r = null == e ? void 0 : e.applicationId,
  i = null == e ? void 0 : e.launchId,
  s = (0, b.Z)(e);
if (null != r && null != t && null != s && null != i) {
  let e = B[r],
    n = F[r];
  a()(null == e || null == n, 'an active session and awaiting session both exist'), null == n || n({
    activitySessionId: s,
    activityUserSessionId: (0, o.Z)(),
    launchId: i,
    mediaSessionIds: [t]
  }), delete F[r];
}
  }
}

function z(e) {
  return B[e];
}
class q extends c.Z {
  _initialize() {
T.Z.addChangeListener(this.handleSelectedChannelUpdate), A.S.subscribe(x.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), l.Z.subscribe('EMBEDDED_ACTIVITY_OPEN', H), l.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', Z), l.Z.subscribe('EMBEDDED_ACTIVITY_UPDATE', Y), l.Z.subscribe('EMBEDDED_ACTIVITY_UPDATE_V2', j), l.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), l.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), l.Z.subscribe('MEDIA_SESSION_JOINED', K), l.Z.subscribe('CALL_DELETE', this.handleCallDelete), l.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState);
  }
  _terminate() {
T.Z.removeChangeListener(this.handleSelectedChannelUpdate), A.S.unsubscribe(x.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), l.Z.unsubscribe('EMBEDDED_ACTIVITY_OPEN', H), l.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', Z), l.Z.unsubscribe('EMBEDDED_ACTIVITY_UPDATE', Y), l.Z.unsubscribe('EMBEDDED_ACTIVITY_UPDATE_V2', j), l.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), l.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), l.Z.unsubscribe('MEDIA_SESSION_JOINED', K), l.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), l.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState);
  }
  constructor(...e) {
super(...e), k(this, 'handleSelectedChannelUpdate', () => {
  let e = T.Z.getVoiceChannelId();
  for (let {
      channelId: t,
      applicationId: n
    }
    of R.ZP.getSelfEmbeddedActivities().values())
    (0, U.Z)(t) && t !== e && this.leaveActivity({
      channelId: t,
      applicationId: n
    });
  if (null != e) {
    let t = R.ZP.getEmbeddedActivitiesForChannel(e),
      n = p.default.getId();
    t.forEach(e => {
      if (e.userIds.has(n)) {
        let t = R.ZP.getSelfEmbeddedActivityForChannel(e.channelId);
        null == t ? (0, O.rp)(e.channelId, e.applicationId) : null == r && this.hidePIPEmbed({
          channelId: t.channelId,
          applicationId: t.applicationId
        });
      }
    });
  }
  r = null != e ? e : void 0;
}), k(this, 'handleActivityWebViewRelease', () => {
  this.releaseWebView();
}), k(this, 'handleActivityLaunchFail', e => {
  let {
    error: t,
    applicationId: n
  } = e;
  delete F[n];
  let r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
  switch (t.code) {
    case x.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
      r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
      break;
    case x.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
      r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
      break;
    case x.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
      r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
      break;
    case x.evJ.INVALID_PERMISSIONS:
      r = G.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
      break;
    case x.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
      r = G.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
      break;
    case x.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
      r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
      break;
    case x.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
      r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE;
  }
  this.showLaunchErrorModal(r);
}), k(this, 'superHandleRPCDisconnect', e => {
  let {
    reason: t,
    application: n
  } = e, r = n.id;
  if (null != r && null != t) {
    for (let {
        applicationId: e,
        channelId: t
      }
      of R.ZP.getSelfEmbeddedActivities().values())
      e === r && this.leaveActivity({
        channelId: t,
        applicationId: r
      });
    t.code !== x.$VG.CLOSE_NORMAL && this.showErrorModal(t, r);
  }
}), k(this, 'handleCallDelete', e => {
  let {
    channelId: t
  } = e, n = T.Z.getVoiceChannelId();
  null != n && n === t && this.handleCallEnded(t);
}), k(this, 'handleRTCConnectionState', e => {
  if (e.state !== x.hes.DISCONNECTED)
    return;
  let t = e.channelId;
  this.handleCallEnded(t);
}), k(this, 'handleCallEnded', e => {
  let t = R.ZP.getSelfEmbeddedActivityForChannel(e);
  null != t && this.leaveActivity({
    channelId: e,
    applicationId: t.applicationId
  });
}), k(this, 'handleDeferredOpen', async e => {
  var t, n, r;
  let i;
  let {
    channelId: a,
    applicationId: o,
    analyticsLocations: s
  } = e, l = m.Z.getChannel(a);
  if (void 0 === l || h.tx.has(null == l ? void 0 : l.type) && T.Z.getVoiceChannelId() !== a)
    return;
  let u = R.ZP.getSelfEmbeddedActivityForChannel(a);
  if ((null == u ? void 0 : u.applicationId) === o)
    return;
  let c = await d.Z.fetchApplication(o);
  if (!(0, L.a)(l)) {
    this.showLaunchErrorModal(G.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
    return;
  }
  if (!(0, P.Z)(null == c ? void 0 : null === (t = c.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
    this.showLaunchErrorModal(G.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
    return;
  }
  let E = null == u ? void 0 : u.applicationId;
  null != E && (await d.Z.fetchApplication(E), i = _.Z.getApplication(E));
  let f = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
    {
      activityConfigs: p,
      applications: I
    } = await (0, O.w1)({
      guildId: f
    }),
    g = (0, C.Z)({
      applicationId: o,
      activityConfigs: p,
      applications: I
    });
  if (null == g) {
    let e = await (0, O.w1)({
      guildId: f,
      force: !0
    });
    g = (0, C.Z)({
      applicationId: o,
      activityConfigs: e.activityConfigs,
      applications: e.applications
    });
  }
  let S = R.ZP.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === o),
    A = null !== (r = null == S ? void 0 : S.userIds.size) && void 0 !== r ? r : 0;
  A > 0 ? (0, y.k)({
    channelId: a,
    applicationId: o,
    launchId: null == S ? void 0 : S.launchId,
    inputApplication: null,
    analyticsLocations: s,
    embeddedActivitiesManager: this
  }) : await (0, D.Z)({
    targetApplicationId: o,
    currentEmbeddedApplication: i,
    channelId: a,
    guildId: f,
    embeddedActivitiesManager: this,
    analyticsLocations: s
  });
});
  }
}