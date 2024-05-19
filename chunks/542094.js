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
  c = i("146936"),
  s = i("619915"),
  f = i("761122"),
  p = i("361213"),
  v = i("716600"),
  E = i("952561"),
  A = i("778569"),
  m = i("701488");
(n = l || (l = {}))[n.START = 0] = "START", n[n.JOIN = 1] = "JOIN", n[n.LEAVE = 2] = "LEAVE";

function y(e) {
  let {
    activityItem: t,
    channel: i,
    guildId: l,
    locationObject: n,
    onActivityItemSelected: y,
    embeddedActivitiesManager: S,
    assetNames: _ = ["embedded_cover"],
    backgroundResolution: b = 250
  } = e, {
    analyticsLocations: g
  } = (0, d.default)(), {
    application: h,
    activity: I
  } = t, T = I.client_platform_config[(0, f.default)((0, u.getOS)())], N = null != T.label_until && Date.now() < Date.parse(T.label_until), C = (0, A.default)({
    applicationId: h.id,
    size: b,
    names: _
  }), D = null != I.activity_preview_video_asset_id ? (0, p.default)(h.id, I.activity_preview_video_asset_id) : null, L = (0, v.default)(), w = (0, E.default)(), O = (0, s.default)(i).find(e => {
    let {
      embeddedActivity: t
    } = e;
    return h.id === t.applicationId
  }), F = 0, M = () => {
    (0, c.default)({
      targetApplicationId: t.application.id,
      currentEmbeddedApplication: w,
      locationObject: n,
      guildId: l,
      channelId: null == i ? void 0 : i.id,
      embeddedActivitiesManager: S,
      analyticsLocations: g
    }).then(e => e && (null == y ? void 0 : y({
      applicationId: h.id
    })))
  };
  null != i && (null == L ? void 0 : L.channelId) === i.id && (null == w ? void 0 : w.id) === h.id ? (F = 2, M = () => {
    !o.default.isLaunchingActivity() && (S.leaveActivity({
      channelId: i.id,
      applicationId: h.id
    }), null == y || y({
      applicationId: h.id
    }))
  }) : null != O && (F = 1, M = () => {
    !o.default.isLaunchingActivity() && (0, r.default)({
      applicationId: O.embeddedActivity.applicationId,
      currentEmbeddedApplication: w,
      activityChannelId: null == i ? void 0 : i.id,
      locationObject: n,
      embeddedActivitiesManager: S,
      analyticsLocations: g
    }).then(e => e && (null == y ? void 0 : y({
      applicationId: h.id
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