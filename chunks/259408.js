r.d(s, {
	Z: function () {
		return u;
	}
});
var a = r(544891),
	t = r(933557),
	n = r(430824),
	c = r(131951),
	d = r(699516),
	o = r(594174),
	i = r(927923),
	l = r(981631),
	f = r(689938);
function u(e, s) {
	var r;
	let { nonce: u, forQRCode: m } = s,
		x = e.getGuildId(),
		_ = n.Z.getGuild(x),
		N = (0, i.Lc)({
			guildId: null != x ? x : l.aIL,
			channelId: e.id,
			channelName: (0, t.F6)(e, o.default, d.Z),
			guildName: null !== (r = null == _ ? void 0 : _.name) && void 0 !== r ? r : f.Z.Messages.UNNAMED,
			muted: c.Z.isSelfMute(),
			deafened: c.Z.isSelfDeaf(),
			nonce: u
		});
	return m
		? ''
				.concat((0, a.K0)())
				.concat(l.ANM.XBOX_HANDOFF, '?')
				.concat(N.toString())
		: ''.concat(i.bJ, '?').concat(N.toString());
}
