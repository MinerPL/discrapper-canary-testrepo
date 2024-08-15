n.d(t, {
	ZH: function () {
		return m;
	},
	b6: function () {
		return p;
	},
	j3: function () {
		return I;
	},
	xC: function () {
		return T;
	}
}),
	n(47120);
var r = n(866442),
	i = n(726542),
	a = n(394821),
	s = n(503438),
	o = n(802856),
	l = n(420660),
	u = n(168631),
	c = n(621853),
	d = n(981631),
	_ = n(689938);
let E = (e) => (''.concat(e).length < 13 ? 1000 * e : e),
	f = (e) => {
		let t = Date.now() / 1000;
		return null != e.end
			? h(t, E(e.end) / 1000)
			: null != e.start
				? h(E(e.start) / 1000, t)
				: {
						hours: 0,
						minutes: 0,
						seconds: 0
					};
	},
	h = (e, t) => {
		let n = Math.max(t - e, 0),
			r = Math.floor(n) % 60,
			i = Math.floor(n / 60) % 60;
		return {
			hours: Math.floor(n / 3600) % 24,
			minutes: i,
			seconds: r
		};
	},
	p = (e) => {
		let t = f(e);
		return t.hours > 0 ? ''.concat(t.hours, ' hours') : t.minutes > 0 ? ''.concat(t.minutes, ' minutes') : ''.concat(t.seconds, ' seconds');
	},
	m = (e) => ((0, s.Z)(e) ? i.Z.get(d.ABu.SPOTIFY) : (0, a.Z)(e) ? i.Z.get(d.ABu.CRUNCHYROLL) : (0, o.Z)(e) ? i.Z.get(d.ABu.XBOX) : null != e.platform && [d.M7m.PS4, d.M7m.PS5].includes(e.platform) ? i.Z.get(d.ABu.PLAYSTATION) : e.name === i.Z.get(d.ABu.LEAGUE_OF_LEGENDS).name ? i.Z.get(d.ABu.LEAGUE_OF_LEGENDS) : void (e.type === d.IIU.PLAYING)),
	I = (e, t) => {
		var n;
		let i = c.Z.getUserProfile(e.id),
			[a, s] = null !== (n = null == i ? void 0 : i.themeColors) && void 0 !== n ? n : [],
			o = (0, u.V3)(a),
			l = null != s ? (0, r.Rf)(s) : t;
		return {
			color: l,
			theme: l === t ? 'dark' : o
		};
	},
	T = (e, t) =>
		(0, s.Z)(t)
			? _.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_SPOTIFY.format({
					username: e.username,
					song: t.details,
					artist: t.state
				})
			: t.type === d.IIU.PLAYING
				? _.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
						username: e.username,
						activity: t.name
					})
				: t.type === d.IIU.WATCHING
					? _.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
							username: e.username,
							activity: t.name
						})
					: t.type === d.IIU.LISTENING
						? _.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
								username: e.username,
								activity: t.name
							})
						: (0, l.Z)(t) || t.type === d.IIU.STREAMING
							? _.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_STREAMING.format({
									username: e.username,
									activity: t.name
								})
							: _.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_BASE.format({
									username: e.username,
									activity: t.name
								});
