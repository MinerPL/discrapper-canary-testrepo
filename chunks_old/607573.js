"use strict";
i.r(t), i.d(t, {
  ActivityAction: function() {
    return l
  },
  default: function() {
    return y
  }
}), i("781738");
var l, n, a = i("798609"),
  d = i("685665"),
  u = i("773336"),
  r = i("191225"),
  o = i("706508"),
  c = i("986214"),
  s = i("575136"),
  f = i("334368"),
  p = i("525167"),
  v = i("577261"),
  m = i("698372"),
  A = i("969380"),
  E = i("954016");
(n = l || (l = {})).START = "START", n.JOIN = "JOIN", n.LEAVE = "LEAVE";

function y(e) {
  let {
    activityItem: t,
    channel: i,
    guildId: l,
    locationObject: n,
    onActivityItemSelected: y,
    embeddedActivitiesManager: S,
    assetNames: b = ["embedded_cover"],
    backgroundResolution: _ = 250
  } = e, {
    analyticsLocations: h
  } = (0, d.default)(), {
    application: I,
    activity: g
  } = t, T = g.client_platform_config[(0, f.default)((0, u.getOS)())], N = null != T.label_until && Date.now() < Date.parse(T.label_until), C = (0, A.default)({
    applicationId: I.id,
    size: _,
    names: b
  }), L = null != g.activity_preview_video_asset_id ? (0, p.default)(I.id, g.activity_preview_video_asset_id) : null, w = (0, v.default)(), D = (0, m.default)(), O = (0, s.default)(i), M = O.find(e => {
    let {
      embeddedActivity: t
    } = e;
    return I.id === t.applicationId
  }), F = "START", U = () => {
    (0, c.default)({
      activityItem: t,
      currentEmbeddedApplication: D,
      locationObject: n,
      guildId: l,
      channelId: null == i ? void 0 : i.id,
      embeddedActivitiesManager: S,
      analyticsLocations: h
    }).then(e => e && (null == y ? void 0 : y({
      applicationId: I.id
    })))
  };
  null != i && (null == w ? void 0 : w.channelId) === i.id && (null == D ? void 0 : D.id) === I.id ? (F = "LEAVE", U = () => {
    !r.default.isLaunchingActivity() && (S.leaveActivity({
      channelId: i.id,
      applicationId: I.id
    }), null == y || y({
      applicationId: I.id
    }))
  }) : null != M && (F = "JOIN", U = () => {
    !r.default.isLaunchingActivity() && (0, o.default)({
      applicationId: M.embeddedActivity.applicationId,
      currentEmbeddedApplication: D,
      activityChannelId: null == i ? void 0 : i.id,
      locationObject: n,
      embeddedActivitiesManager: S,
      analyticsLocations: h
    }).then(e => e && (null == y ? void 0 : y({
      applicationId: I.id
    })))
  });
  let W = t.activity.client_platform_config[(0, f.default)((0, u.getOS)())].release_phase,
    x = E.STAFF_RELEASE_PHASES.includes(W),
    P = x ? W.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
    imageBackground: C,
    videoUrl: L,
    joinableEmbeddedApp: M,
    activityAction: F,
    onActivityItemSelected: U,
    labelType: N ? T.label_type : a.EmbeddedActivityLabelTypes.NONE,
    staffReleasePhase: P
  }
}