n.d(t, {
	h: function () {
		return p;
	}
});
var r = n(952265),
	i = n(570140),
	a = n(281956),
	s = n(200498),
	o = n(71275),
	l = n(672339),
	u = n(653175),
	c = n(592125),
	d = n(430824),
	_ = n(607744),
	E = n(944486),
	f = n(979651),
	h = n(934415);
let p = function (e, t) {
	let p = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		I = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		m = c.Z.getChannel(e),
		T = f.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
		g = null != m ? _.Z.getCheck(m.guild_id) : null;
	if (!(null != t && (0, a.n)(t)) && (null == g || !!g.canChat || !!(0, s.jU)(m))) {
		if (null != m && !T) {
			let e = (0, h.rY)(m, f.Z, d.Z);
			if (e && m.isGuildStageVoice() && (0, o.xJ)(m.id)) {
				(0, r.ZD)(async () => {
					let { default: e } = await n.e('46398').then(n.bind(n, 523794));
					return (t) =>
						e({
							channel: m,
							...t
						});
				});
				return;
			}
			if (e) {
				(0, r.ZD)(async () => {
					let { default: e } = await n.e('86465').then(n.bind(n, 997308));
					return (t) => e(t);
				});
				return;
			}
		}
		p && (0, l.eH)();
		(0, u.Z)(
			function () {
				i.Z.dispatch({
					type: 'VOICE_CHANNEL_SELECT',
					guildId: t,
					channelId: e,
					currentVoiceChannelId: E.Z.getVoiceChannelId(),
					video: p,
					stream: I
				});
			},
			e,
			I,
			p
		);
	}
};
