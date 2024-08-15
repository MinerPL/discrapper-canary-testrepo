t.d(n, {
	F: function () {
		return d;
	}
});
var l = t(512722),
	i = t.n(l),
	u = t(846027),
	r = t(287734),
	a = t(131951),
	o = t(254238),
	s = t(893387);
function d(e, n) {
	var t;
	let l = null !== (t = e.sessionId) && void 0 !== t ? t : '';
	(0, o._)(l), (0, o.s6)();
	let d = null != n ? n : e.channelId;
	i()(null != d, 'attempted to transfer to unknown channel'), e.selfMute !== a.Z.isSelfMute() && u.Z.toggleSelfMute(), e.selfDeaf !== a.Z.isSelfDeaf() && u.Z.toggleSelfDeaf(), (0, s.Z)(d, 'discord_client', l), r.default.selectVoiceChannel(d, !1);
}
