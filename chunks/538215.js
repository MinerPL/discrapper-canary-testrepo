n(47120);
var r = n(147913),
	i = n(358221),
	a = n(729052),
	s = n(592125),
	o = n(979651),
	l = n(556076);
class u extends r.Z {
	handleVoiceChannelSelect(e) {
		let { channelId: t, guildId: n } = e;
		if (null == t || null == n) return;
		let r = s.Z.getChannel(t);
		if (null != r && (0, a.vS)(r) && r.isGuildVoice()) {
			let e = i.Z.getParticipants(t).length,
				n = o.Z.isInChannel(t),
				r = e === (n ? 1 : 0);
			r ? l.y(t, r) : e === (n ? 2 : 1) && l.y(t, r);
		}
	}
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = { VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect }),
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
t.Z = new u();
