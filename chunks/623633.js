n.d(t, {
	Z: function () {
		return r;
	}
});
var i = n(442837),
	a = n(592125),
	s = n(944486);
function r() {
	return (0, i.e7)([s.Z, a.Z], () => {
		let e = s.Z.getVoiceChannelId();
		if (null != e) {
			let t = a.Z.getChannel(e);
			if (null == t ? void 0 : t.isGuildStageVoice()) return t;
		}
		return null;
	});
}
