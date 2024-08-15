n.d(t, {
	Z: function () {
		return _;
	}
});
var i = n(735250);
n(470079);
var a = n(512722),
	s = n.n(a),
	r = n(83474),
	l = n(245315),
	o = n(556041),
	c = n(103575),
	u = n(592125),
	d = n(368859);
function _(e, t) {
	if ((0, l.cp)(t)) return (0, i.jsx)(o.Z, {});
	if ((0, d.Z)(t)) {
		let { guild_id: e, channel_id: n, message_id: a } = t.messageReference;
		if (null != e)
			return (0, i.jsx)(r.ZP, {
				guildId: e,
				channelId: n,
				messageId: a
			});
	}
	if (null != t.interaction && 'SENDING' === t.state) return (0, i.jsx)(i.Fragment, {});
	let n = u.Z.getChannel(t.channel_id);
	return (
		s()(null != n, 'renderUserGuildPopout: channel should never be null'),
		(0, i.jsx)(c.Z, {
			...e,
			location: 'renderUserGuildPopout',
			channelId: t.channel_id,
			messageId: t.id,
			guildId: n.guild_id,
			userId: t.author.id,
			user: null != t.webhookId ? t.author : void 0
		})
	);
}
