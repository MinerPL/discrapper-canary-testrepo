"use strict";
n.d(t, {
  X: function() {
    return s
  }
});
var i = n(981631),
  r = n(689938);

function s(e) {
  let {
    enabled: t,
    join: n,
    channel: s,
    cameraUnavailable: o,
    hasPermission: a,
    channelLimit: l = -1,
    channelLimitReached: u = !1
  } = e, _ = t ? r.Z.Messages.CAMERA_OFF : r.Z.Messages.CAMERA_ON;
  return n && (_ = (null == s ? void 0 : s.isManaged()) || !(null == s ? void 0 : s.isPrivate()) ? r.Z.Messages.CONNECT_TO_VIDEO : r.Z.Messages.JOIN_VIDEO_CALL), o && (_ = r.Z.Messages.CAMERA_UNAVAILABLE), !a && (_ = r.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), u && !t && (_ = (null == s ? void 0 : s.isGuildStageVoice()) ? l >= i.RcX ? r.Z.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : r.Z.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : r.Z.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
    limit: l
  })), _
}