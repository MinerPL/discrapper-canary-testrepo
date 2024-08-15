n.d(t, {
	Z: function () {
		return f;
	}
});
var r = n(442837),
	i = n(661869),
	a = n(387343),
	s = n(543882),
	o = n(199902),
	l = n(592125),
	u = n(496675),
	c = n(158776),
	d = n(979651),
	_ = n(561308),
	E = n(231338);
function f(e) {
	let t = (0, r.e7)(
			[d.Z, l.Z, u.Z],
			() => {
				if (!(0, _.kr)(e) || e.author_type !== i.i.USER) return null;
				let t = d.Z.getVoiceStateForUser(e.author_id),
					n = l.Z.getChannel(null == t ? void 0 : t.channelId);
				return null == n || (0, a.Z)(n, u.Z) ? n : null;
			},
			[e]
		),
		n = (0, r.e7)([c.Z], () => c.Z.getPrimaryActivity(e.author_id, null == t ? void 0 : t.guild_id), [t, e]),
		{ streamPreviewUrl: f, stream: h } = (0, r.cj)(
			[o.Z, u.Z, s.Z],
			() => {
				let n;
				if (null == t) return {};
				let r = o.Z.getAnyStreamForUser(e.author_id);
				return null == r
					? {}
					: (u.Z.canBasicChannel(E.S7.CONNECT, t) &&
							(null == r ? void 0 : r.channelId) === t.id &&
							(n = s.Z.getPreviewURL(r.guildId, r.channelId, r.ownerId)),
						{
							stream: r,
							streamPreviewUrl: n
						});
			},
			[t, e]
		);
	return {
		channel: t,
		activity: n,
		streamPreviewUrl: f,
		stream: h
	};
}
