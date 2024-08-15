n.d(s, {
	Z: function () {
		return B;
	}
}),
	n(47120);
var t = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(866442),
	o = n(442837),
	c = n(692547),
	u = n(481060),
	_ = n(230711),
	d = n(100527),
	I = n(906732),
	E = n(220082),
	m = n(583405),
	C = n(279745),
	T = n(300284),
	N = n(695346),
	S = n(314897),
	p = n(430824),
	L = n(594174),
	A = n(451478),
	O = n(626135),
	P = n(768581),
	R = n(74538),
	M = n(785717),
	x = n(888778),
	f = n(943217),
	g = n(793397),
	h = n(841040),
	Z = n(228168),
	j = n(981631),
	U = n(474936),
	v = n(689938),
	b = n(439779);
let F = {
		[Z.y0.POPOUT]: 18,
		[Z.y0.MODAL]: 24,
		[Z.y0.SETTINGS]: 0,
		[Z.y0.PANEL]: 18,
		[Z.y0.POMELO_POPOUT]: 18,
		[Z.y0.CANCEL_MODAL]: 0
	},
	y = {
		[Z.y0.MODAL]: j.ZY5.USER_PROFILE,
		[Z.y0.POPOUT]: j.ZY5.USER_POPOUT,
		[Z.y0.SETTINGS]: j.ZY5.USER_POPOUT,
		[Z.y0.PANEL]: j.ZY5.DM_CHANNEL,
		[Z.y0.POMELO_POPOUT]: j.ZY5.POMELO_POPOUT,
		[Z.y0.CANCEL_MODAL]: j.ZY5.USER_POPOUT
	};
function G(e) {
	let { type: s, shown: i, onClick: l } = e,
		c = (0, o.e7)([L.default], () => {
			let e = L.default.getCurrentUser();
			return R.ZP.canUsePremiumProfileCustomization(e);
		}),
		E = a.useRef(!1),
		{ analyticsLocations: m } = (0, I.ZP)(d.Z.BADGE);
	return (
		a.useEffect(() => {
			i &&
				!E.current &&
				((E.current = !0),
				O.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
					type: U.cd.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
					location: {
						page: y[s],
						section: j.jXE.NITRO_BANNER,
						object: j.qAy.NITRO_BADGE
					},
					location_stack: m
				}));
		}, [m, i, s]),
		(0, t.jsx)(u.Tooltip, {
			tooltipContentClassName: b.premiumIconTooltipContent,
			text: c ? v.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : v.Z.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
			children: (e) =>
				(0, t.jsx)(u.Clickable, {
					...e,
					onClick: c
						? void 0
						: () => {
								var e;
								(e = m),
									(0, u.openModalLazy)(async () => {
										let { default: s } = await n.e('30364').then(n.bind(n, 968031));
										return (n) => {
											let { onClose: a, ...i } = n;
											return (0, t.jsx)(s, {
												analyticsLocations: e,
												title: v.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
												description: v.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
													onAndMoreWithPremiumClick: () => {
														a(), _.Z.open(j.oAB.PREMIUM, null, { analyticsLocations: e });
													}
												}),
												onClose: a,
												...i
											});
										};
									}),
									null == l || l();
							},
					className: r()(b.premiumIconWrapper, {
						[b.visible]: i,
						[b.clickable]: !c
					}),
					children: (0, t.jsx)(u.TextBadge, {
						color: 'rgba(32, 34, 37, 0.8)',
						text: (0, t.jsx)(u.NitroWheelIcon, {
							size: 'xs',
							color: 'currentColor',
							className: b.premiumIcon
						})
					})
				})
		})
	);
}
function D(e) {
	let { darkenOnHover: s, profileType: n, profileLabel: a, icon: i, ...r } = e,
		l = F[n],
		o = 'pencil' === i ? u.PencilIcon : u.SettingsIcon;
	return (0, t.jsx)(u.Clickable, {
		...r,
		'aria-label': a,
		className: s ? b.pencilContainerDark : b.pencilContainer,
		children: (0, t.jsx)(u.Tooltip, {
			text: a,
			children: (e) =>
				(0, t.jsx)(o, {
					...e,
					color: 'currentColor',
					size: 'custom',
					width: l,
					height: l,
					className: b.editIcon
				})
		})
	});
}
function B(e) {
	var s, n;
	let { user: i, displayProfile: _, onClose: d, guildId: I, profileType: L, isHovering: O, animateOnHover: F, allowEdit: y = !0, showPremiumBadgeUpsell: B = !0, hasProfileEffect: k = !1 } = e,
		H = (0, o.e7)([p.Z], () => p.Z.getGuild(I)),
		Y = (0, o.e7)([S.default], () => S.default.getId()) === i.id && y,
		z = R.ZP.isPremiumAtLeast(null == _ ? void 0 : _.premiumType, U.p9.TIER_2),
		{ trackUserProfileAction: w } = (0, M.KZ)(),
		[W, V] = a.useState(!1),
		K = (0, o.e7)([A.Z], () => A.Z.isFocused()),
		X = N.QK.getSetting(),
		{ bannerSrc: q, status: J } = (0, x.Z)({
			displayProfile: _,
			size: (0, g.e7)(L),
			canAnimate: F || !X ? W : K
		}),
		Q = (0, u.useToken)(c.Z.unsafe_rawColors.PRIMARY_800).hex(),
		$ = (0, u.getAvatarSize)(u.AvatarSizes.SIZE_80),
		ee = (0, l._i)((0, E.ZP)(i.getAvatarURL(I, $), Q, !1)),
		es = (0, m.Z)(null !== (s = null == _ ? void 0 : _.primaryColor) && void 0 !== s ? s : ee).hsl,
		en = (0, T.Z)({
			analyticsLocation: {
				page: j.ZY5.USER_POPOUT,
				section: j.jXE.PROFILE_POPOUT
			}
		});
	return (0, t.jsx)(f.Z, {
		isPremium: z,
		hasThemeColors: null !== (n = null == _ ? void 0 : _.canEditThemes) && void 0 !== n && n,
		profileType: L,
		hasBanner: null != q,
		hasProfileEffect: k,
		children: (0, t.jsxs)('div', {
			className: r()(
				b.banner,
				(0, g.Ae)({
					profileType: L,
					user: {
						hasBanner: null != q,
						isPremium: z,
						hasProfileEffect: k
					}
				}),
				{ [b.reducedMotion]: !X }
			),
			onMouseMove: () => V(!0),
			onMouseLeave: () => V(!1),
			style: {
				backgroundImage: null != q ? 'url('.concat(q, ')') : void 0,
				backgroundColor: J !== x.s.COMPLETE ? c.Z.unsafe_rawColors.PRIMARY_800.css : es
			},
			children: [
				Y
					? null == H
						? (0, t.jsx)(D, {
								darkenOnHover: k && O,
								profileType: L,
								profileLabel: v.Z.Messages.EDIT_PROFILE,
								icon: 'pencil',
								onClick: () => {
									w({ action: 'EDIT_PROFILE' }), null == d || d(), en();
								}
							})
						: (0, t.jsx)(u.Popout, {
								spacing: 6,
								position: 'bottom',
								renderPopout: (e) => {
									let { closePopout: s } = e;
									return (0, t.jsx)(h.Z, {
										onClose: s,
										onSelect: d,
										guild: H
									});
								},
								children: (e) =>
									(0, t.jsx)(D, {
										darkenOnHover: k && O,
										profileLabel: v.Z.Messages.EDIT_PROFILE,
										icon: 'pencil',
										...e,
										profileType: L
									})
							})
					: B && null != q && L !== Z.y0.SETTINGS
						? (0, t.jsx)(G, {
								type: L,
								shown: void 0 === O ? W : O,
								onClick: () => {
									w({ action: 'PRESS_PREMIUM_UPSELL' }), null == d || d();
								}
							})
						: null,
				!X && (0, P.F8)(q) && (0, t.jsx)(C.Z, { className: b.gifTag })
			]
		})
	});
}
