n(47120);
var r = n(570140),
	i = n(287734),
	a = n(147913),
	s = n(703656),
	o = n(769654),
	l = n(131951),
	u = n(944486),
	c = n(914010),
	d = n(981631);
class _ extends a.Z {
	handleGuildCreate(e) {
		let { guild: t } = e,
			n = u.Z.getChannelId(d.ME),
			r = u.Z.getVoiceChannelId();
		t.id === n && (0, o.X)(t.id), t.id === r && !1 !== t.unavailable && null == r && i.default.selectVoiceChannel((0, u.C)(t.id));
	}
	handleChannelCreate(e) {
		let { channel: t } = e;
		if (t.type !== d.d4z.GROUP_DM) return;
		let n = t.originChannelId,
			r = u.Z.getChannelId(d.kod);
		null == c.Z.getGuildId() && null != n && n === r && (0, s.uL)(d.Z5c.CHANNEL(d.ME, t.id)), null != n && n === u.Z.getVoiceChannelId() && i.default.selectVoiceChannel(t.id, l.Z.isVideoEnabled());
	}
	handleLogout() {
		r.Z.dispatch({
			type: 'VOICE_CHANNEL_SELECT',
			channelId: null,
			guildId: null,
			video: !1,
			currentVoiceChannelId: null
		});
	}
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = {
				GUILD_CREATE: this.handleGuildCreate,
				CHANNEL_CREATE: this.handleChannelCreate,
				LOGOUT: this.handleLogout
			}),
			n in t
				? Object.defineProperty(t, n, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = r);
	}
}
t.Z = new _();
