n.d(t, {
	Z: function () {
		return s;
	}
});
var r = n(131704),
	i = n(592125),
	a = n(979651);
function s(e) {
	var t;
	let { channelId: n, userId: s, activity: o } = e,
		l = i.Z.getChannel(n),
		u = (null == o ? void 0 : o.session_id) == null || (null != l && (0, r.Qm)(l.type)) ? n : null === (t = a.Z.getVoiceStateForSession(s, null == o ? void 0 : o.session_id)) || void 0 === t ? void 0 : t.channelId;
	return null != u ? u : void 0;
}
