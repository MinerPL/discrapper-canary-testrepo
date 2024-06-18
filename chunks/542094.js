"use strict";
n.d(t, {
  JS: function() {
    return i
  },
  Qv: function() {
    return O
  },
  ZP: function() {
    return m
  },
  w1: function() {
    return R
  }
}), n(757143);
var i, r, s = n(442837),
  o = n(911969),
  a = n(906732),
  l = n(835473),
  u = n(592125),
  _ = n(358085),
  d = n(317381),
  c = n(638880),
  E = n(146936),
  I = n(619915),
  T = n(761122),
  h = n(361213),
  S = n(716600),
  f = n(952561),
  N = n(778569),
  A = n(701488);
(r = i || (i = {}))[r.START = 0] = "START", r[r.JOIN = 1] = "JOIN", r[r.LEAVE = 2] = "LEAVE";

function m(e) {
  let {
    activityItem: t,
    channel: n,
    guildId: i,
    locationObject: r,
    onActivityItemSelected: s,
    embeddedActivitiesManager: a,
    assetNames: l = ["embedded_cover"],
    backgroundResolution: u = 250
  } = e, {
    application: d,
    activity: c
  } = t, E = c.client_platform_config[(0, T.Z)((0, _.getOS)())], S = null != E.label_until && Date.now() < Date.parse(E.label_until), f = (0, N.Z)({
    applicationId: d.id,
    size: u,
    names: l
  }), m = null != c.activity_preview_video_asset_id ? (0, h.Z)(d.id, c.activity_preview_video_asset_id) : null, C = (0, I.ZP)(n).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return d.id === t.applicationId
  }), p = O({
    channelId: null == n ? void 0 : n.id,
    applicationId: d.id
  }), g = R({
    applicationId: t.application.id,
    channelId: null == n ? void 0 : n.id,
    guildId: i,
    locationObject: r,
    embeddedActivitiesManager: a,
    onActivityItemSelectedProp: s
  }), L = t.activity.client_platform_config[(0, T.Z)((0, _.getOS)())].release_phase, v = A.eB.includes(L) ? L.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
    imageBackground: f,
    videoUrl: m,
    joinableEmbeddedApp: C,
    activityAction: p,
    onActivityItemSelected: g,
    labelType: S ? E.label_type : o.ww.NONE,
    staffReleasePhase: v
  }
}

function O(e) {
  let {
    channelId: t,
    applicationId: n
  } = e, i = 0, r = (0, s.e7)([u.Z], () => u.Z.getChannel(t)), o = (0, S.Z)(), a = (0, f.Z)(), _ = (0, l.q)(n), d = (0, I.ZP)(r).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return null != _ && _.id === t.applicationId
  });
  return null == _ ? i : (null != r && (null == o ? void 0 : o.channelId) === r.id && (null == a ? void 0 : a.id) === _.id ? i = 2 : null != d && (i = 1), i)
}

function R(e) {
  let {
    applicationId: t,
    channelId: n,
    guildId: i,
    locationObject: r,
    embeddedActivitiesManager: s,
    onActivityItemSelectedProp: o
  } = e, l = O({
    channelId: n,
    applicationId: t
  }), u = (0, f.Z)(), {
    analyticsLocations: _
  } = (0, a.ZP)();
  switch (l) {
    case 0:
      return () => {
        (0, E.Z)({
          targetApplicationId: t,
          currentEmbeddedApplication: u,
          locationObject: r,
          guildId: i,
          channelId: n,
          embeddedActivitiesManager: s,
          analyticsLocations: _
        }).then(e => e && (null == o ? void 0 : o({
          applicationId: t
        })))
      };
    case 1:
      return () => {
        !d.ZP.isLaunchingActivity() && (0, c.Z)({
          applicationId: t,
          currentEmbeddedApplication: u,
          activityChannelId: n,
          locationObject: r,
          embeddedActivitiesManager: s,
          analyticsLocations: _
        }).then(e => e && (null == o ? void 0 : o({
          applicationId: t
        })))
      };
    case 2:
      return () => {
        !d.ZP.isLaunchingActivity() && (null != n && s.leaveActivity({
          channelId: n,
          applicationId: t
        }), null == o || o({
          applicationId: t
        }))
      }
  }
}