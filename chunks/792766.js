n.d(t, {
	y: function () {
		return S;
	}
});
var i = n(735250),
	r = n(470079),
	s = n(120356),
	l = n.n(s),
	a = n(481060),
	o = n(528144),
	u = n(112831),
	d = n(686546),
	c = n(565138),
	_ = n(601964),
	E = n(598077),
	h = n(689938),
	p = n(609107);
let f = (e) => {
		var t;
		let { speaker: n, guildId: r, isEmbed: s } = e,
			l = new E.Z(n.user);
		return (0, i.jsxs)('div', {
			className: p.speaker,
			children: [
				(0, i.jsx)(a.Avatar, {
					src: l.getAvatarURL(r, s ? 16 : 24),
					size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
					'aria-label': ''.concat(n.nick, '-avatar'),
					className: s ? null : p.avatar
				}),
				(0, i.jsx)(u.Z, {
					size: s ? u.Z.Sizes.SIZE_12 : u.Z.Sizes.SIZE_14,
					color: u.Z.Colors.HEADER_SECONDARY,
					className: p.username,
					children: null !== (t = n.nick) && void 0 !== t ? t : l.username
				})
			]
		});
	},
	S = (e) => {
		let { guild: t, onlineCount: n } = e;
		if (null == t) return null;
		let r = new _.ZP(t),
			{ name: s, description: l } = r;
		return (0, i.jsxs)('div', {
			children: [
				(0, i.jsx)(o.Z, {
					muted: !0,
					uppercase: !0,
					className: p.alignStart,
					children: h.Z.Messages.STAGE_INVITE_GUILD_HEADER
				}),
				(0, i.jsxs)('div', {
					className: p.guild,
					children: [
						(0, i.jsx)(d.ZP, {
							mask: d.ZP.Masks.SQUIRCLE,
							width: 40,
							height: 40,
							children: (0, i.jsx)(c.Z, {
								guild: r,
								size: c.Z.Sizes.MEDIUM,
								active: !0
							})
						}),
						(0, i.jsxs)('div', {
							className: p.guildInfo,
							children: [
								(0, i.jsx)(a.Heading, {
									variant: 'heading-sm/semibold',
									children: s
								}),
								(0, i.jsxs)('div', {
									className: p.speaker,
									children: [
										(0, i.jsx)('div', { className: p.dot }),
										null != n && n > 0
											? (0, i.jsx)(a.Text, {
													variant: 'text-sm/normal',
													children: h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: n })
												})
											: null
									]
								})
							]
						})
					]
				}),
				null != l &&
					'' !== l &&
					(0, i.jsx)(a.Text, {
						color: 'header-secondary',
						className: p.alignStart,
						variant: 'text-sm/normal',
						children: l
					})
			]
		});
	};
t.Z = (e) => {
	var t;
	let { stageInstance: n, guild: s, isCard: E = !1, isEmbed: S = !1, onClick: m } = e,
		I = r.useMemo(() => (null == s ? null : s instanceof _.ZP ? s : new _.ZP(s)), [s]);
	if (null == n || null == I) return null;
	let { topic: b, speaker_count: g, participant_count: C } = n,
		O = null !== (t = n.members) && void 0 !== t ? t : [],
		A = S ? O.slice(0, 3) : O,
		v = g - A.length;
	return (
		S && (v += O.length - A.length),
		(0, i.jsxs)('div', {
			children: [
				(0, i.jsxs)('div', {
					className: p.flex,
					children: [
						(0, i.jsxs)('div', {
							className: p.flex,
							children: [
								(0, i.jsx)(a.StageIcon, {
									size: 'custom',
									color: 'currentColor',
									height: 24,
									width: 24,
									className: p.live
								}),
								(0, i.jsx)(a.Heading, {
									variant: 'eyebrow',
									className: l()(p.__invalid_label, p.live),
									children: h.Z.Messages.STAGE_CHANNEL_LIVE_NOW
								})
							]
						}),
						(0, i.jsxs)('div', {
							className: p.background,
							children: [
								(0, i.jsx)(a.HeadphonesIcon, {
									size: 'custom',
									color: 'currentColor',
									height: 16,
									width: 16,
									className: p.listeners
								}),
								(0, i.jsx)(a.Heading, {
									className: l()(p.__invalid_label, p.listeners),
									variant: 'heading-sm/semibold',
									children: C
								})
							]
						})
					]
				}),
				S &&
					(0, i.jsxs)('div', {
						className: l()(p.guild, { [p.embed]: S }),
						children: [
							(0, i.jsx)(d.ZP, {
								mask: d.ZP.Masks.SQUIRCLE,
								width: 20,
								height: 20,
								children: (0, i.jsx)(c.Z, {
									guild: I,
									size: c.Z.Sizes.MINI,
									active: !0
								})
							}),
							(0, i.jsx)(a.Text, {
								color: 'header-secondary',
								className: p.__invalid_label,
								variant: 'text-sm/normal',
								children: I.name
							})
						]
					}),
				(0, i.jsx)(o.Z, {
					size: E || S ? o.Z.Sizes.SIZE_16 : o.Z.Sizes.SIZE_20,
					className: l()(p.header, { [p.embed]: S }),
					children: b
				}),
				(0, i.jsxs)('div', {
					className: l()(p.members, { [p.embed]: S }),
					children: [
						A.length > 0 &&
							(0, i.jsxs)('div', {
								className: p.speakers,
								children: [
									A.map((e) =>
										(0, i.jsx)(
											f,
											{
												speaker: e,
												guildId: I.id,
												isEmbed: S
											},
											e.user.id
										)
									),
									v > 0
										? (0, i.jsxs)('div', {
												className: p.speaker,
												children: [
													(0, i.jsx)('div', {
														className: l()(p.icon, { [p.embed]: S }),
														children: (0, i.jsx)(a.MicrophoneIcon, {
															size: 'custom',
															color: 'currentColor',
															height: S ? 12 : 14,
															className: p.listeners
														})
													}),
													(0, i.jsxs)(u.Z, {
														size: S ? u.Z.Sizes.SIZE_12 : u.Z.Sizes.SIZE_14,
														color: u.Z.Colors.HEADER_SECONDARY,
														children: ['+', h.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format({ count: v })]
													})
												]
											})
										: null
								]
							}),
						S &&
							(0, i.jsx)(a.Button, {
								color: a.Button.Colors.GREEN,
								onClick: m,
								className: p.joinButton,
								children: h.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
							})
					]
				})
			]
		})
	);
};
