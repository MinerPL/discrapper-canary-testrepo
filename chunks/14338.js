n.d(t, {
	Z: function () {
		return E;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(481060),
	o = n(239091),
	c = n(586902),
	u = n(40851),
	d = n(184301),
	h = n(103575),
	m = n(237583),
	p = n(768581),
	_ = n(363422);
function f(e) {
	let { channel: t, speaker: s, className: m } = e,
		f = (0, u.bp)(),
		{ reducedMotion: E } = a.useContext(r.AccessibilityPreferencesContext),
		C = (0, c.Z)({ userId: s.id }),
		g = null != s.member ? (0, p.CA)(s.member) : null,
		I = (e) => {
			(0, o.jW)(
				e,
				async () => {
					let { default: e } = await Promise.all([n.e('79695'), n.e('70474'), n.e('12435'), n.e('46563')]).then(n.bind(n, 757387));
					return (n) =>
						(0, i.jsx)(e, {
							...n,
							user: s.user,
							guildId: t.guild_id,
							channel: t,
							showMediaItems: !0,
							showStageChannelItems: !0,
							showChatItems: !1
						});
				},
				{ context: f }
			);
		};
	return (0, i.jsx)(r.Popout, {
		preload: () =>
			(0, d.Z)(s.user, {
				guildId: t.guild_id,
				channelId: t.id
			}),
		renderPopout: (e) =>
			(0, i.jsx)(h.Z, {
				...e,
				location: 'StageSpeakerSummary',
				guildId: t.guild_id,
				channelId: t.id,
				userId: s.id
			}),
		position: 'right',
		spacing: 8,
		children: (e) =>
			(0, i.jsx)(r.Tooltip, {
				text: s.userNick,
				position: 'bottom',
				children: (n) =>
					(0, i.jsx)(r.Clickable, {
						...n,
						...e,
						onClick: (t) => {
							t.stopPropagation(), e.onClick(t);
						},
						onContextMenu: I,
						children: (0, i.jsx)(r.Avatar, {
							src: null != g ? g : s.user.getAvatarURL(t.guild_id, 24),
							size: r.AvatarSizes.SIZE_24,
							className: l()(_.avatar, m),
							'aria-label': s.userNick,
							isSpeaking: C && !E.enabled
						})
					})
			})
	});
}
function E(e) {
	let { speakers: t, channel: n } = e;
	return (0, i.jsx)(m.Z, {
		className: _.summary,
		guildId: n.guild_id,
		users: t,
		max: 10,
		renderUser: (e, t, a) =>
			(0, i.jsx)(
				f,
				{
					channel: n,
					speaker: e,
					className: t
				},
				a
			),
		renderMoreUsers: (e, t, n) =>
			(0, i.jsx)(
				'div',
				{
					className: l()(_.speakers, t),
					children: e
				},
				n
			)
	});
}
