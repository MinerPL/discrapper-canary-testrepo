n(47120);
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(338545),
	o = n(873546),
	c = n(481060),
	u = n(540059),
	d = n(666188),
	h = n(695346),
	p = n(768581),
	_ = n(792125),
	f = n(358555),
	g = n(981631),
	m = n(647086),
	C = n(689938),
	I = n(673140);
function E(e) {
	var t;
	let { guild: n, controller: l, guildBanner: r, animate: c } = e,
		{ value: u } = l.springs,
		d = h.QK.getSetting();
	return (0, i.jsx)(s.animated.div, {
		className: I.animatedContainer,
		style: {
			opacity: u,
			transform: u.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
		},
		children: (0, i.jsx)(s.animated.div, {
			className: a()(I.bannerImage, { [I.bannerImgFullWidth]: o.tq }),
			style: {
				transform: u.to((e) =>
					d
						? 'translateY('.concat((1 - e) * 60, 'px) scale(').concat(1 + (1 - e) * 0.2, ')')
						: 'translateY('.concat((1 - e) * 90, 'px)')
				)
			},
			children: (0, i.jsx)('img', {
				className: a()(I.bannerImg, { [I.bannerImgFullWidth]: o.tq }),
				src:
					null !==
						(t = p.ZP.getGuildBannerURL(
							{
								id: n.id,
								banner: r
							},
							c
						)) && void 0 !== t
						? t
						: '',
				alt: '',
				'aria-hidden': !0
			})
		})
	});
}
function N(e) {
	let { guild: t, controller: n, hasBanner: l, hasSubheader: r } = e,
		{ value: o } = n.springs,
		u = t.hasFeature(g.oNc.DISCOVERABLE),
		d = (0, i.jsx)('div', {
			className: I.communityInfo,
			children:
				u &&
				(0, i.jsx)(c.Tooltip, {
					text: C.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
					position: 'right',
					children: (e) =>
						(0, i.jsxs)('div', {
							className: I.communityInfoPill,
							...e,
							children: [
								(0, i.jsx)(c.GlobeEarthIcon, {
									size: 'custom',
									color: 'currentColor',
									width: 12,
									height: 12,
									className: I.communityIcon
								}),
								(0, i.jsx)(c.Text, {
									variant: 'text-xs/normal',
									color: 'none',
									children: C.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
								})
							]
						})
				})
		});
	return r
		? (0, i.jsx)('div', {
				className: a()(I.communityInfoContainer, I.hasSubheader),
				children: d
			})
		: (0, i.jsx)(s.animated.div, {
				className: I.communityInfoContainer,
				style: l ? { opacity: o } : { height: o.to((e) => ''.concat(20 * e, 'px')) },
				children: d
			});
}
function x() {
	return (0, i.jsx)(c.StarIcon, {
		size: 'custom',
		color: 'currentColor',
		className: I.favoritesIcon,
		height: 20,
		width: 20
	});
}
t.ZP = l.memo(function (e) {
	var t;
	let {
			bannerVisible: n,
			controller: r,
			className: s,
			onClick: S,
			onContextMenu: v,
			onMouseDown: Z,
			disableBannerAnimation: T,
			'aria-expanded': L,
			'aria-controls': A,
			guild: b,
			guildBanner: M,
			animationOverlayHeight: R,
			children: O,
			headerClassName: P,
			communityInfoVisible: y,
			hasSubheader: j
		} = e,
		D = b.hasFeature(g.oNc.ANIMATED_BANNER),
		w = (0, d.Z)(b),
		U = !w && b.hasCommunityInfoSubheader(),
		G = (0, p.xR)(M) && D && !T,
		[k, B] = l.useState(!1),
		H = l.useRef(),
		V = l.useRef(null),
		F = l.useRef(),
		W = h.QK.getSetting();
	l.useEffect(() => {
		if (G && n && !H.current && W)
			return (
				B(!0),
				(F.current = setTimeout(() => {
					B(!1);
				}, 5000)),
				() => {
					clearTimeout(F.current);
				}
			);
	}, [G, n, W]),
		l.useEffect(() => {
			H.current = n;
		}, [n]);
	let z = () => {
			let { renderBanner: t, guildBanner: n } = e;
			return null != n && !t;
		},
		Y = (0, u.Q)('GuildHeader');
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsxs)('div', {
				ref: V,
				className: a()(s, {
					[I.container]: !0,
					[I.clickable]: null != S,
					[I.selected]: null != S && L,
					[I.hasBanner]: z(),
					[I.bannerVisible]: n,
					[(0, _.Q)(g.BRd.DARK)]: n,
					[I.communityInfoVisible]: (!w && y) || (j && U)
				}),
				onMouseDown: Z,
				onContextMenu: v,
				onClick: S,
				children: [
					Y
						? null
						: (0, i.jsxs)('header', {
								className: a()(I.header, P, { [I.themedHeaderMobile]: o.tq }),
								children: [
									(0, i.jsxs)('div', {
										className: a()(I.headerContent, I.primaryInfo),
										children: [
											(0, i.jsx)(f.Z, {
												guild: b,
												isBannerVisible: n
											}),
											b.id === m._ && (0, i.jsx)(x, {}),
											(0, i.jsx)(c.Heading, {
												variant: 'text-md/semibold',
												lineClamp: 1,
												className: I.name,
												children: b.toString()
											}),
											null != S &&
												(0, i.jsx)(c.Clickable, {
													className: I.headerButton,
													'aria-controls': A,
													'aria-expanded': L,
													focusProps: {
														ringTarget: V,
														offset: 4
													},
													onClick: S,
													onContextMenu: v,
													'aria-label': C.Z.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format({
														guildName: null !== (t = null == b ? void 0 : b.toString()) && void 0 !== t ? t : ''
													})
												}),
											(0, i.jsx)('div', {
												className: I.headerChildren,
												children: O
											})
										]
									}),
									U &&
										(0, i.jsx)(N, {
											guild: b,
											controller: r,
											hasBanner: null != M,
											hasSubheader: null != j && j
										})
								]
							}),
					null != M
						? (0, i.jsx)(E, {
								guild: b,
								controller: r,
								guildBanner: M,
								animate: k
							})
						: null
				]
			}),
			G && z()
				? (0, i.jsx)('div', {
						className: I.animatedBannerHoverLayer,
						onMouseEnter: () => {
							B(!0), clearTimeout(F.current);
						},
						onMouseLeave: () => B(!1),
						style: { height: R }
					})
				: null
		]
	});
});
