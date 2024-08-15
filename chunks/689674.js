n.d(t, {
	Z: function () {
		return d;
	}
});
var i = n(470079),
	a = n(106351),
	s = n(442837),
	r = n(434650),
	l = n(430824),
	o = n(63205),
	c = n(529726),
	u = n(981631);
function d(e) {
	var t, n;
	let { message: d, channel: _, enabled: E = !0 } = e,
		I = (0, s.e7)(
			[l.Z],
			() => {
				var e;
				let t = l.Z.getGuild(_.guild_id);
				return null !== (e = null == t ? void 0 : t.hasFeature(u.oNc.COMMUNITY)) && void 0 !== e && e;
			},
			[_.guild_id]
		),
		m = (null === (t = d.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != d.webhookId && d.hasFlag(u.iLy.IS_CROSSPOST) && null != _.guild_id,
		T = _.type === a.d.GUILD_ANNOUNCEMENT && I,
		h = !d.hasFlag(u.iLy.EPHEMERAL) && (m || T),
		N = m && null != d.messageReference ? d.messageReference.message_id : d.id,
		f = m && null != d.messageReference ? d.messageReference.channel_id : _.id,
		C = m && (null === (n = d.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? d.messageReference.guild_id : _.guild_id,
		p = i.useCallback(
			(e) => {
				e
					? c.Z.handleMessageBecameVisible({
							messageId: N,
							channelId: _.id,
							guildId: _.guild_id,
							sourceChannelId: f,
							sourceGuildId: C
						})
					: c.Z.handleMessageLostVisibility(N);
			},
			[N, _.id, _.guild_id, f, C]
		),
		g = o.Z.useExperiment(
			{ location: '836a4b_1' },
			{
				disable: !h || !E,
				autoTrackExposure: !0
			}
		).enabled,
		S = (0, r.O)(p, 0, g);
	return (
		i.useEffect(
			() => () => {
				c.Z.handleMessageLostVisibility(N);
			},
			[N]
		),
		S
	);
}
