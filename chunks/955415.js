l(653041), l(47120);
var s = l(735250),
	t = l(470079),
	a = l(120356),
	i = l.n(a),
	o = l(481060),
	r = l(43267),
	u = l(933557),
	c = l(471445),
	d = l(600164),
	m = l(925329),
	N = l(565138),
	v = l(134432),
	C = l(695346),
	p = l(768581),
	h = l(153066),
	E = l(689938),
	g = l(755894);
let I = (e) => {
		let { text: n, extra: l } = e;
		return (0, s.jsxs)(o.FormTitle, {
			className: g.header,
			children: [n, l]
		});
	},
	x = (e) => {
		let { resolving: n, children: l } = e;
		return (0, s.jsx)('div', {
			className: g.content,
			children: n
				? (0, s.jsxs)('div', {
						className: g.resolvingWrapper,
						children: [
							(0, s.jsx)('div', {
								className: g.resolving,
								children: (0, s.jsx)('div', { className: g.resolvingBackground })
							}),
							(0, s.jsx)('div', {
								className: g.resolvingFakeButton,
								children: (0, s.jsx)('div', { className: g.resolvingBackground })
							})
						]
					})
				: l
		});
	},
	j = (e) => {
		var n;
		let { application: l, guild: t, channel: a, onClick: c, expired: d = !1, user: v, className: p } = e,
			E = null !== (n = (0, u.ZP)(a)) && void 0 !== n ? n : '',
			I = C.QK.useSetting();
		if (d) return (0, s.jsx)('div', { className: g.guildIconExpired });
		let x = null == t || null != t.icon,
			j = i()((0, h.l)(g, 'guildIcon', x ? 'Image' : '', null != c ? 'Joined' : ''), p);
		if (null != l)
			return (0, s.jsx)(m.Z, {
				game: l,
				onClick: c,
				size: g.applicationIcon,
				className: j
			});
		if (null != t)
			return (0, s.jsx)(N.Z, {
				onClick: c,
				active: !0,
				guild: t,
				className: j,
				animate: I
			});
		if (null != a)
			return (0, s.jsx)(o.Avatar, {
				onClick: c,
				src: (0, r.x)(a),
				size: o.AvatarSizes.SIZE_56,
				className: j,
				'aria-label': E
			});
		else if (null != v)
			return (0, s.jsx)(o.Avatar, {
				onClick: c,
				src: v.getAvatarURL(null, 56),
				size: o.AvatarSizes.SIZE_56,
				className: j,
				'aria-label': E
			});
		return null;
	},
	L = (e) => {
		let { title: n, onClick: l, expired: t, children: a } = e,
			i = (0, s.jsx)(o.Heading, {
				variant: 'heading-md/semibold',
				className: (0, h.l)(g, 'inviteDestination', t ? 'Expired' : null != l ? 'Joined' : ''),
				children: n
			});
		return (0, s.jsxs)(d.Z, {
			className: g.guildInfo,
			direction: d.Z.Direction.VERTICAL,
			justify: d.Z.Justify.CENTER,
			children: [
				null == l
					? i
					: (0, s.jsx)(o.Clickable, {
							onClick: l,
							children: i
						}),
				(0, s.jsx)(o.Text, {
					tag: 'strong',
					className: g.guildDetail,
					variant: 'text-sm/normal',
					children: a
				})
			]
		});
	},
	f = (e) => {
		let { membersOnline: n, members: l } = e,
			t = [];
		return (
			null != n &&
				n > 0 &&
				t.push(
					(0, s.jsxs)(
						'div',
						{
							className: g.statusWrapper,
							children: [
								(0, s.jsx)('i', { className: g.statusOnline }),
								(0, s.jsx)('span', {
									className: g.count,
									children: E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: n })
								})
							]
						},
						'onlineCount'
					)
				),
			null != l &&
				t.push(
					(0, s.jsxs)(
						'div',
						{
							className: g.statusWrapper,
							children: [
								(0, s.jsx)('i', { className: g.statusOffline }),
								(0, s.jsx)('span', {
									className: g.count,
									children: E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: l })
								})
							]
						},
						'memberCount'
					)
				),
			(0, s.jsx)('div', {
				className: g.statusCounts,
				children: t
			})
		);
	},
	S = (e) => {
		let { channel: n, guild: l } = e,
			t = (0, c.KS)(n, l);
		return null == n || null == t
			? null
			: (0, s.jsxs)('div', {
					className: g.channel,
					children: [
						(0, s.jsx)(t, {
							className: g.channelIcon,
							color: 'currentColor',
							size: 'custom',
							width: 20,
							height: 20
						}),
						(0, s.jsx)('span', {
							className: g.channelName,
							children: n.name
						})
					]
				});
	},
	T = (e) => {
		let { children: n, onClick: l, className: t, isDisabled: a, ...r } = e;
		return (0, s.jsx)(o.Button, {
			...r,
			disabled: a,
			onClick: l,
			size: g.buttonSize,
			className: i()(g.button, t),
			children: n
		});
	};
(T.Colors = o.Button.Colors),
	(T.Looks = o.Button.Looks),
	(T.defaultProps = {
		className: null,
		isDisabled: !1
	});
let _ = (e) => {
		let { children: n, className: l, containerRef: t } = e;
		return (0, s.jsx)('div', {
			ref: t,
			className: i()(g.wrapper, l),
			children: n
		});
	},
	B = (e) => {
		let { guild: n } = e,
			[l, a] = t.useState(!1),
			o = p.ZP.getGuildSplashURL({
				id: n.id,
				splash: n.splash,
				size: 400 * (0, v.x_)()
			});
		return null == o
			? null
			: (0, s.jsx)('div', {
					className: g.inviteSplash,
					children: (0, s.jsx)('img', {
						src: o,
						alt: '',
						className: i()(g.inviteSplashImage, { [g.inviteSplashImageLoaded]: l }),
						onLoad: () => a(!0)
					})
				});
	},
	Z = (e) => {
		let { guild: n } = e;
		return (0, s.jsx)('div', {
			className: g.guildNameWrapper,
			children: (0, s.jsx)('span', {
				className: g.guildName,
				children: n.name
			})
		});
	},
	k = (e) => {
		let { guildTemplate: n } = e;
		return (0, s.jsx)('div', {
			className: g.guildNameWrapper,
			children: (0, s.jsx)('span', {
				className: g.guildName,
				children: n.serializedSourceGuild.name
			})
		});
	};
(_.Header = I), (_.Body = x), (_.Icon = j), (_.Info = L), (_.Data = f), (_.Channel = S), (_.Button = T), (_.GuildSplash = B), (_.GuildName = Z), (_.GuildTemplateName = k), (I.displayName = 'InviteButton.Header'), (x.displayName = 'InviteButton.Body'), (j.displayName = 'InviteButton.Icon'), (L.displayName = 'InviteButton.Info'), (f.displayName = 'InviteButton.Data'), (S.displayName = 'InviteButton.Channel'), (T.displayName = 'InviteButton.Button'), (B.displayName = 'InviteButton.GuildSplash'), (Z.displayName = 'InviteButton.GuildName'), (k.displayName = 'InviteButton.GuildTemplateName'), (n.Z = _);
