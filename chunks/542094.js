"use strict";
i.r(t), i.d(t, {
  ActivityAction: function() {
    return l
  },
  default: function() {
    return y
  }
}), i("757143");
var l, n, a = i("911969"),
  d = i("906732"),
  u = i("358085"),
  o = i("317381"),
  r = i("638880"),
  c = i("266820"),
  s = i("619915"),
  f = i("761122"),
  p = i("361213"),
  v = i("716600"),
  E = i("952561"),
  A = i("778569"),
  m = i("701488");
(n = l || (l = {})).START = "START", n.JOIN = "JOIN", n.LEAVE = "LEAVE";

function y(e) {
  let {
    activityItem: t,
    channel: i,
    guildId: l,
    locationObject: n,
    onActivityItemSelected: y,
    embeddedActivitiesManager: S,
    assetNames: I = ["embedded_cover"],
    backgroundResolution: _ = 250
  } = e, {
    analyticsLocations: b
  } = (0, d.default)(), {
    application: g,
    activity: h
  } = t, T = h.client_platform_config[(0, f.default)((0, u.getOS)())], N = null != T.label_until && Date.now() < Date.parse(T.label_until), C = (0, A.default)({
    applicationId: g.id,
    size: _,
    names: I
  }), D = null != h.activity_preview_video_asset_id ? (0, p.default)(g.id, h.activity_preview_video_asset_id) : null, L = (0, v.default)(), w = (0, E.default)(), O = (0, s.default)(i).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return g.id === t.applicationId
  }), F = "START", M = () => {
    (0, c.default)({
      targetApplicationId: t.application.id,
      currentEmbeddedApplication: w,
      locationObject: n,
      guildId: l,
      channelId: null == i ? void 0 : i.id,
      embeddedActivitiesManager: S,
      analyticsLocations: b
    }).then(e => e && (null == y ? void 0 : y({
      applicationId: g.id
    })))
  };
  null != i && (null == L ? void 0 : L.channelId) === i.id && (null == w ? void 0 : w.id) === g.id ? (F = "LEAVE", M = () => {
    !o.default.isLaunchingActivity() && (S.leaveActivity({
      channelId: i.id,
      applicationId: g.id
    }), null == y || y({
      applicationId: g.id
    }))
  }) : null != O && (F = "JOIN", M = () => {
    !o.default.isLaunchingActivity() && (0, r.default)({
      applicationId: O.embeddedActivity.applicationId,
      currentEmbeddedApplication: w,
      activityChannelId: null == i ? void 0 : i.id,
      locationObject: n,
      embeddedActivitiesManager: S,
      analyticsLocations: b
    }).then(e => e && (null == y ? void 0 : y({
      applicationId: g.id
    })))
  });
  let U = t.activity.client_platform_config[(0, f.default)((0, u.getOS)())].release_phase,
    x = m.STAFF_RELEASE_PHASES.includes(U) ? U.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0;
  return {
    imageBackground: C,
    videoUrl: D,
    joinableEmbeddedApp: O,
    activityAction: F,
    onActivityItemSelected: M,
    labelType: N ? T.label_type : a.EmbeddedActivityLabelTypes.NONE,
    staffReleasePhase: x
  }
}