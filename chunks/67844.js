n.d(t, {
	X: function () {
		return a;
	}
});
var r = n(981631),
	i = n(689938);
function a(e) {
	let { enabled: t, join: n, channel: a, cameraUnavailable: s, hasPermission: o, channelLimit: l = -1, channelLimitReached: u = !1 } = e,
		c = t ? i.Z.Messages.CAMERA_OFF : i.Z.Messages.CAMERA_ON;
	return n && (c = (null == a ? void 0 : a.isManaged()) || !(null == a ? void 0 : a.isPrivate()) ? i.Z.Messages.CONNECT_TO_VIDEO : i.Z.Messages.JOIN_VIDEO_CALL), s && (c = i.Z.Messages.CAMERA_UNAVAILABLE), !o && (c = i.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), u && !t && (c = (null == a ? void 0 : a.isGuildStageVoice()) ? (l >= r.RcX ? i.Z.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : i.Z.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED) : i.Z.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({ limit: l })), c;
}
