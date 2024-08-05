let r;
n.d(t, {
  U: function() {
return Q;
  },
  Z: function() {
return X;
  }
}), n(653041), n(47120);
var i = n(512722),
  a = n.n(i),
  s = n(772848),
  o = n(544891),
  l = n(570140),
  u = n(475179),
  c = n(317770),
  d = n(728345),
  _ = n(812206),
  E = n(358221),
  f = n(42352),
  h = n(233764),
  p = n(131704),
  m = n(314897),
  I = n(592125),
  T = n(19780),
  g = n(944486),
  S = n(594174),
  A = n(626135),
  N = n(585483),
  v = n(358085),
  O = n(24933),
  R = n(115130),
  C = n(566620),
  y = n(317381),
  D = n(969345),
  L = n(148720),
  b = n(146936),
  M = n(782769),
  P = n(964517),
  U = n(761122),
  w = n(983695),
  x = n(917107),
  G = n(701488),
  k = n(981631),
  B = n(689938);

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let V = {},
  H = {};

function Z(e) {
  var t;
  return {
releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, U.Z)((0, v.getOS)())].release_phase
  };
}
async function Y(e) {
  let {
channelId: t,
applicationId: n,
analyticsLocations: r
  } = e, i = I.Z.getChannel(t), a = null == i ? void 0 : i.getGuildId(), s = S.default.getCurrentUser();
  if (null == i || null == s)
return;
  let o = y.ZP.getShelfActivities(a),
l = O.Z.getState().shelfOrder,
u = 0 === y.ZP.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === n).length,
c = (0, D.Z)({
  applicationId: n,
  activityConfigs: o
}),
d = 1 + l.findIndex(e => e === n),
{
  releasePhase: _
} = Z(c),
h = await (0, f.Z)();
  H[n] = e => {
var t, a, o;
V[n] = e, A.default.track(k.rMx.ACTIVITY_SESSION_JOINED, {
  channel_id: i.id,
  guild_id: i.getGuildId(),
  media_session_id: e.mediaSessionIds[0],
  activity_session_id: e.activitySessionId,
  application_id: n,
  location_stack: r,
  user_premium_tier: s.premiumType,
  raw_thermal_state: h,
  n_participants: E.Z.getUserParticipantCount(i.id),
  is_activity_start: u,
  release_phase: _,
  activity_premium_tier_requirement: null == c ? void 0 : null === (t = c.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
  shelf_rank: null == c ? void 0 : null === (a = c.activity) || void 0 === a ? void 0 : a.shelf_rank,
  shelf_sorted_rank: d > 0 ? d : null,
  activity_user_session_id: e.activityUserSessionId,
  channel_type: i.type
}), A.default.track(k.rMx.ACTIVITY_IFRAME_MOUNT, {
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
  shelf_rank: null == c ? void 0 : null === (o = c.activity) || void 0 === o ? void 0 : o.shelf_rank,
  shelf_sorted_rank: d > 0 ? d : null,
  activities_infra_version: null == e ? void 0 : e.activities_infra_version
});
  };
}
async function j(e) {
  var t, n;
  let {
channelId: r,
applicationId: i,
locationId: a,
instanceId: s
  } = e, l = V[i], u = I.Z.getChannel(r), c = y.ZP.getEmbeddedActivityDurationMs(r, i), d = S.default.getCurrentUser(), _ = null == u ? void 0 : u.getGuildId(), E = m.default.getSessionId();
  if (null != a && null != s && null != E && await o.tn.post({
  url: k.ANM.ACTIVITY_LEAVE(i, a, s),
  body: {
    session_id: E
  },
  retries: 2
}), null == l || null == u || null == d)
return;
  let h = y.ZP.getShelfActivities(_),
p = (0, D.Z)({
  applicationId: i,
  activityConfigs: h
}),
{
  releasePhase: T
} = Z(p),
g = await (0, f.Z)();
  A.default.track(k.rMx.ACTIVITY_SESSION_LEFT, {
channel_id: u.id,
guild_id: u.getGuildId(),
media_session_id: l.mediaSessionIds[0],
activity_session_id: l.activitySessionId,
application_id: i,
duration_ms: c,
user_premium_tier: d.premiumType,
raw_thermal_state: g,
release_phase: T,
activity_premium_tier_requirement: null == p ? void 0 : null === (t = p.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
shelf_rank: null == p ? void 0 : null === (n = p.activity) || void 0 === n ? void 0 : n.shelf_rank,
activity_user_session_id: l.activityUserSessionId,
channel_type: u.type,
media_session_ids: l.mediaSessionIds
  }), A.default.track(k.rMx.ACTIVITY_IFRAME_UNMOUNT, {
channel_id: u.id,
guild_id: u.getGuildId(),
application_id: i,
instance_ids: [l.launchId],
media_session_ids: l.mediaSessionIds,
activity_user_session_id: l.activityUserSessionId,
raw_thermal_state: g,
duration_ms: c
  }), delete H[i], delete V[i];
}

function W(e) {
  let {
channelId: t,
embeddedActivity: n,
connections: r,
updateCode: i
  } = e, a = m.default.getId(), s = r.find(e => e.user_id === a);
  z(t, n, n.application_id, n.activity_id, null == s ? void 0 : s.user_id, i === G.m2.ACTIVITY_STARTED);
}

function K(e) {
  let {
location: t,
applicationId: n,
launchId: r,
participants: i
  } = e, a = m.default.getId(), s = y.ZP.getEmbeddedActivitiesForChannel(t.channel_id).find(e => e.launchId === r), o = i.find(e => e.user_id === a);
  null != s && z(t.channel_id, s, n, r, null == o ? void 0 : o.user_id, !1);
}

function z(e, t, n, r, i, a) {
  var o, l;
  let c = y.ZP.getEmbeddedActivitiesForChannel(e),
d = I.Z.getChannel(e);
  if (a && null !== (l = null == d ? void 0 : d.isPrivate()) && void 0 !== l && l && c.length <= 1 && null == i && u.Z.selectParticipant(e, null), null == i)
return;
  let _ = T.Z.getMediaSessionId(),
E = 'activity_id' in t ? (0, P.C)(t) : (0, P.Z)(t),
f = null == _ && (null == d ? void 0 : d.isVocal()) === !0 && (null == d ? void 0 : d.isPrivate()) === !1;
  null != E && !f && (null === (o = H[n]) || void 0 === o || o.call(H, {
activitySessionId: E,
activityUserSessionId: (0, s.Z)(),
launchId: r,
mediaSessionIds: null != _ ? [_] : [],
activities_infra_version: 'location' in t ? 2 : 1
  }), delete H[n]);
}

function q(e) {
  let {
mediaSessionId: t
  } = e;
  if (null == t)
return;
  for (let e in V)
V[e].mediaSessionIds.push(t);
  let n = T.Z.getChannelId();
  if (null != n) {
let e = y.ZP.getSelfEmbeddedActivityForChannel(n),
  r = null == e ? void 0 : e.applicationId,
  i = null == e ? void 0 : e.launchId,
  o = (0, P.Z)(e);
if (null != r && null != t && null != o && null != i) {
  let e = V[r],
    n = H[r];
  a()(null == e || null == n, 'an active session and awaiting session both exist'), null == n || n({
    activitySessionId: o,
    activityUserSessionId: (0, s.Z)(),
    launchId: i,
    mediaSessionIds: [t]
  }), delete H[r];
}
  }
}

function Q(e) {
  return V[e];
}
class X extends c.Z {
  _initialize() {
g.Z.addChangeListener(this.handleSelectedChannelUpdate), N.S.subscribe(k.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), l.Z.subscribe('EMBEDDED_ACTIVITY_OPEN', Y), l.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', j), l.Z.subscribe('EMBEDDED_ACTIVITY_UPDATE', W), l.Z.subscribe('EMBEDDED_ACTIVITY_UPDATE_V2', K), l.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), l.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), l.Z.subscribe('MEDIA_SESSION_JOINED', q), l.Z.subscribe('CALL_DELETE', this.handleCallDelete), l.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), l.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), l.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
  }
  _terminate() {
g.Z.removeChangeListener(this.handleSelectedChannelUpdate), N.S.unsubscribe(k.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), l.Z.unsubscribe('EMBEDDED_ACTIVITY_OPEN', Y), l.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', j), l.Z.unsubscribe('EMBEDDED_ACTIVITY_UPDATE', W), l.Z.unsubscribe('EMBEDDED_ACTIVITY_UPDATE_V2', K), l.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), l.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), l.Z.unsubscribe('MEDIA_SESSION_JOINED', q), l.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), l.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), l.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), l.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
  }
  constructor(...e) {
super(...e), F(this, 'handleSelectedChannelUpdate', () => {
  let e = g.Z.getVoiceChannelId();
  for (let {
      channelId: t,
      applicationId: n
    }
    of y.ZP.getSelfEmbeddedActivities().values())
    (0, x.Z)(t) && t !== e && this.leaveActivity({
      channelId: t,
      applicationId: n
    });
  if (null != e) {
    let t = y.ZP.getEmbeddedActivitiesForChannel(e),
      n = m.default.getId();
    t.forEach(e => {
      if (e.userIds.has(n)) {
        let t = y.ZP.getSelfEmbeddedActivityForChannel(e.channelId);
        null == t ? (0, C.rp)(e.channelId, e.applicationId) : null == r && this.hidePIPEmbed({
          channelId: t.channelId,
          applicationId: t.applicationId
        });
      }
    });
  }
  r = null != e ? e : void 0;
}), F(this, 'handleActivityWebViewRelease', () => {
  this.releaseWebView();
}), F(this, 'handleActivityLaunchFail', e => {
  let {
    error: t,
    applicationId: n
  } = e;
  delete H[n];
  let r = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
  if (t instanceof h.Z)
    t.reason === h.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND && R.Z.inDevModeForApplication(n) && (r = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_MISSING_PRIMARY_APP_COMMAND);
  else
    switch (t.code) {
      case k.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
        r = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
        break;
      case k.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
        r = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
        break;
      case k.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
        r = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
        break;
      case k.evJ.INVALID_PERMISSIONS:
        r = B.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
        break;
      case k.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
        r = B.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
        break;
      case k.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
        r = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
        break;
      case k.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
        r = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE;
    }
  this.showLaunchErrorModal(r);
}), F(this, 'superHandleRPCDisconnect', e => {
  let {
    reason: t,
    application: n
  } = e, r = n.id;
  if (null != r && null != t) {
    for (let {
        applicationId: e,
        channelId: t
      }
      of y.ZP.getSelfEmbeddedActivities().values())
      e === r && this.leaveActivity({
        channelId: t,
        applicationId: r
      });
    t.code !== k.$VG.CLOSE_NORMAL && this.showErrorModal(t, r);
  }
}), F(this, 'handleCallDelete', e => {
  let {
    channelId: t
  } = e, n = g.Z.getVoiceChannelId();
  null != n && n === t && this.handleCallEnded(t);
}), F(this, 'handleRTCConnectionState', e => {
  if (e.state !== k.hes.DISCONNECTED)
    return;
  let t = e.channelId;
  this.handleCallEnded(t);
}), F(this, 'handleCallEnded', e => {
  let t = y.ZP.getSelfEmbeddedActivityForChannel(e);
  null != t && this.leaveActivity({
    channelId: e,
    applicationId: t.applicationId
  });
}), F(this, 'handleDeferredOpen', async e => {
  var t, n, r;
  let i;
  let {
    channelId: a,
    applicationId: s,
    analyticsLocations: o
  } = e, l = I.Z.getChannel(a);
  if (void 0 === l || p.tx.has(null == l ? void 0 : l.type) && g.Z.getVoiceChannelId() !== a)
    return;
  let u = y.ZP.getSelfEmbeddedActivityForChannel(a);
  if ((null == u ? void 0 : u.applicationId) === s)
    return;
  let c = await d.Z.fetchApplication(s);
  if (!(0, M.a)(l)) {
    this.showLaunchErrorModal(B.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
    return;
  }
  if (!(0, w.Z)(null == c ? void 0 : null === (t = c.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
    this.showLaunchErrorModal(B.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
    return;
  }
  let E = null == u ? void 0 : u.applicationId;
  null != E && (await d.Z.fetchApplication(E), i = _.Z.getApplication(E));
  let f = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
    {
      activityConfigs: h,
      applications: m
    } = await (0, C.w1)({
      guildId: f
    }),
    T = (0, D.Z)({
      applicationId: s,
      activityConfigs: h,
      applications: m
    });
  if (null == T) {
    let e = await (0, C.w1)({
      guildId: f,
      force: !0
    });
    T = (0, D.Z)({
      applicationId: s,
      activityConfigs: e.activityConfigs,
      applications: e.applications
    });
  }
  let S = y.ZP.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === s),
    A = null !== (r = null == S ? void 0 : S.userIds.size) && void 0 !== r ? r : 0;
  A > 0 ? (0, L.k)({
    channelId: a,
    applicationId: s,
    launchId: null == S ? void 0 : S.launchId,
    inputApplication: null,
    analyticsLocations: o,
    embeddedActivitiesManager: this
  }) : await (0, b.Z)({
    targetApplicationId: s,
    currentEmbeddedApplication: i,
    channelId: a,
    guildId: f,
    embeddedActivitiesManager: this,
    analyticsLocations: o
  });
}), F(this, 'handleGuildDelete', e => {
  let {
    guild: t
  } = e;
  y.ZP.getSelfEmbeddedActivities().forEach(e => {
    let {
      channelId: n,
      applicationId: r,
      guildId: i
    } = e;
    t.id === i && this.leaveActivity({
      channelId: n,
      applicationId: r
    });
  });
}), F(this, 'handleChannelDelete', e => {
  let {
    channel: t
  } = e, n = y.ZP.getSelfEmbeddedActivityForChannel(t.id);
  null != n && this.leaveActivity({
    channelId: t.id,
    applicationId: n.applicationId
  });
});
  }
}