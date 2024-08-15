n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(338545),
	o = n(143927),
	c = n(442837),
	d = n(481060),
	u = n(749210),
	_ = n(607070),
	E = n(100527),
	h = n(931240),
	m = n(970606),
	I = n(650461),
	g = n(353093),
	p = n(603839),
	T = n(84615),
	S = n(430824),
	f = n(231467),
	C = n(207796),
	N = n(273254),
	A = n(559469),
	v = n(308083),
	Z = n(689938),
	L = n(647756),
	O = n(345480),
	R = n(236613);
let x = {
	mass: 1,
	tension: 600,
	friction: 60
};
function b(e) {
	let { children: t } = e;
	return (0, i.jsxs)(l.animated.div, {
		className: L.clanEnvelope,
		children: [
			(0, i.jsx)('div', {
				className: L.clanEnvelopeTop,
				children: (0, i.jsx)('img', {
					src: R,
					alt: ''
				})
			}),
			t,
			(0, i.jsx)('div', {
				className: L.clanEnvelopeBottom,
				children: (0, i.jsx)('img', {
					src: O,
					alt: ''
				})
			})
		]
	});
}
function P(e) {
	let { text: t, icon: n } = e;
	return (0, i.jsxs)('div', {
		className: L.upsellDetail,
		children: [
			(0, i.jsx)(n, {
				size: 'md',
				color: 'currentColor',
				className: L.upsellIcon
			}),
			(0, i.jsx)(d.Text, {
				className: L.upsellDetailText,
				variant: 'text-md/medium',
				children: t
			})
		]
	});
}
function M(e) {
	let { selectedGuildId: t, setSelectedGuildId: n, eligibleGuilds: s, onButtonClick: l, buttonText: c, hasCompletedUpsell: u, preventBack: _ } = e,
		E = (0, C.GN)((e) => e.started, o.Z),
		h = a.useMemo(
			() =>
				s.map((e) => ({
					value: e.id,
					label: e.name
				})),
			[s]
		),
		m = a.useCallback(() => {
			(0, C.fH)(C.v0.DISCOVERY);
		}, []),
		I = s.length > 1;
	return (0, i.jsxs)(i.Fragment, {
		children: [
			u
				? (0, i.jsxs)(i.Fragment, {
						children: [
							(0, i.jsx)(d.Heading, {
								className: L.upsellTitle,
								variant: 'heading-xxl/semibold',
								children: Z.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
							}),
							(0, i.jsx)(d.Heading, {
								className: L.upsellSubtitle,
								variant: 'heading-md/medium',
								color: 'header-secondary',
								children: Z.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
							})
						]
					})
				: (0, i.jsxs)(i.Fragment, {
						children: [
							(0, i.jsxs)(d.Heading, {
								className: L.upsellTitle,
								variant: 'heading-xxl/semibold',
								children: [Z.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, i.jsx)('br', {}), Z.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT]
							}),
							(0, i.jsxs)('div', {
								className: L.upsellDetails,
								children: [
									(0, i.jsx)(P, {
										icon: d.CompassIcon,
										text: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
									}),
									(0, i.jsx)(P, {
										icon: d.CircleCheckIcon,
										text: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
									}),
									(0, i.jsx)(P, {
										icon: d.GroupIcon,
										text: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
									})
								]
							})
						]
					}),
			(0, i.jsxs)('div', {
				className: L.upsellButton,
				children: [
					I &&
						(0, i.jsx)(d.SearchableSelect, {
							className: L.upsellSelect,
							value: t,
							options: h,
							onChange: n
						}),
					!u &&
						(0, i.jsx)(d.Button, {
							look: d.ButtonLooks.FILLED,
							size: d.ButtonSizes.LARGE,
							color: d.ButtonColors.BRAND,
							className: r()(L.reserveButton, { [L.buttonWithSelect]: I }),
							onClick: l,
							children: (0, i.jsx)(d.Text, {
								variant: 'text-sm/medium',
								color: 'always-white',
								children: c
							})
						})
				]
			}),
			E &&
				!_ &&
				(0, i.jsx)('div', {
					className: L.upsellStaticHeader,
					children: (0, i.jsx)('div', {
						className: L.upsellBackButton,
						children: (0, i.jsx)(d.Clickable, {
							onClick: m,
							'aria-label': Z.Z.Messages.BACK,
							children: (0, i.jsx)(d.ArrowLargeLeftIcon, {})
						})
					})
				})
		]
	});
}
t.Z = a.memo(function (e) {
	let { eligibleGuilds: t, eligibleGuildsIncludingConverted: n, preventBack: s } = e,
		r = 0 === t.length,
		[o, C] = a.useState(() => {
			var e, i;
			let a = new Set(I.ZP.getGuildIds());
			for (let e of t) if (a.has(e.id)) return e.id;
			return r ? (null === (e = n[0]) || void 0 === e ? void 0 : e.id) : null === (i = t[0]) || void 0 === i ? void 0 : i.id;
		});
	a.useEffect(() => {
		!r &&
			(0, m.TE)({
				guildId: o,
				location: E.Z.CLAN_DISCOVERY
			});
	}, [r, o]);
	let O = (0, c.e7)([S.Z], () => S.Z.getGuild(o)),
		R = (0, c.e7)([I.ZP], () => (null != o ? I.ZP.getStateForGuild(o).progress : null)),
		P = a.useCallback(() => {
			!r &&
				((0, m._9)({
					guildId: o,
					location: E.Z.CLAN_DISCOVERY
				}),
				(0, T.q4)(
					(e) => {
						let { closeLayer: t } = e;
						return (0, i.jsx)(p.Z, {
							onClose: t,
							guildId: o
						});
					},
					{ layerKey: v.Pv }
				));
		}, [r, o]),
		D = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
		y = (0, N.L)({ guild: O }),
		j = (0, A.n)(),
		[U, G] = a.useState(!0),
		k = (0, d.useSpring)(
			{
				from: { opacity: 0 },
				to: { opacity: 1 },
				delay: 400,
				config: { duration: 0 }
			},
			'animate-always'
		),
		w = (0, d.useSpring)(
			{
				from: D ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(324px, -56px) rotate(8deg) scale(1.25)' },
				to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
				config: x,
				delay: 400
			},
			'animate-always'
		),
		B = (0, d.useSpring)(
			{
				from: D ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(176px, -24px) rotate(4deg) scale(1.1111)' },
				to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
				config: x,
				delay: 350
			},
			'animate-always'
		),
		H = (0, d.useSpring)(
			{
				from: D ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-176px, -24px) rotate(-4deg) scale(1.1111)' },
				to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
				config: x,
				delay: 350
			},
			'animate-always'
		),
		V = (0, d.useSpring)(
			{
				from: D ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-324px, -56px) rotate(-8deg) scale(1.25)' },
				to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
				config: x,
				delay: 400
			},
			'animate-always'
		),
		F = (0, d.useSpring)(
			{
				from: D
					? {
							transform: 'scale(1)',
							opacity: 0
						}
					: {
							transform: 'scale(0.9)',
							opacity: 0
						},
				to: {
					transform: 'scale(1)',
					opacity: 1
				},
				config: x,
				delay: 200
			},
			'animate-always'
		),
		Y = (0, d.useSpring)(
			{
				from: D ? { transform: 'translateY(0px)' } : { transform: 'translateY(240px)' },
				to: { transform: 'translateY(0px)' },
				config: x,
				delay: 250,
				onRest: () => G(!1)
			},
			'animate-always'
		),
		W = a.useMemo(() => (null == R ? Z.Z.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : Z.Z.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP), [R]),
		z = a.useCallback(async () => {
			await (0, h.Zx)(o), u.Z.transitionToGuildSync('936317138904440892');
		}, [o]),
		K = a.useCallback(
			(e) =>
				(0, i.jsx)(d.Clickable, {
					tag: 'span',
					className: L.joinWFSLink,
					onClick: z,
					'aria-label': Z.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
					children: (0, i.jsx)(d.Text, {
						tag: 'span',
						variant: 'text-xs/medium',
						color: 'text-brand',
						children: e
					})
				}),
			[z]
		);
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsxs)('div', {
				className: L.cardsContainer,
				children: [
					(0, i.jsx)(l.animated.div, {
						className: L.clanCardOuterContainer,
						style: {
							...w,
							...k
						},
						children: (0, i.jsx)(f.xV, {
							clan: j[0],
							className: L.clanCardOuterLeft
						})
					}),
					(0, i.jsx)(l.animated.div, {
						className: L.clanCardInnerContainer,
						style: {
							...B,
							...k
						},
						children: (0, i.jsx)(f.xV, {
							clan: j[1],
							className: L.clanCardInnerLeft
						})
					}),
					null != y &&
						(0, i.jsx)(l.animated.div, {
							className: L.clanEnvelope,
							style: F,
							children: (0, i.jsx)(b, {
								children: (0, i.jsx)('div', {
									className: L.clanCardCenterContainer,
									style: { overflow: U ? 'hidden' : 'visible' },
									children: (0, i.jsx)(l.animated.div, {
										style: Y,
										children: (0, i.jsx)(f.xV, {
											clan: y,
											className: L.clanCardCenter,
											bannerUrl: (0, g.pY)(j[4].id, j[4].bannerHash)
										})
									})
								})
							})
						}),
					(0, i.jsx)(l.animated.div, {
						className: L.clanCardInnerContainer,
						style: {
							...H,
							...k
						},
						children: (0, i.jsx)(f.xV, {
							clan: j[2],
							className: L.clanCardInnerRight
						})
					}),
					(0, i.jsx)(l.animated.div, {
						className: L.clanCardOuterContainer,
						style: {
							...V,
							...k
						},
						children: (0, i.jsx)(f.xV, {
							clan: j[3],
							className: L.clanCardOuterRight
						})
					})
				]
			}),
			(0, i.jsx)('div', {
				className: L.upsellCtaContainer,
				children: (0, i.jsx)(M, {
					selectedGuildId: o,
					setSelectedGuildId: C,
					eligibleGuilds: t,
					onButtonClick: P,
					buttonText: W,
					hasCompletedUpsell: r,
					preventBack: s
				})
			}),
			r
				? (0, i.jsx)('div', {
						className: L.joinWFSContainer,
						children: (0, i.jsx)('div', {
							className: L.joinWFS,
							children: (0, i.jsx)(d.Text, {
								variant: 'text-xs/normal',
								color: 'text-muted',
								children: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({ wfsHook: K })
							})
						})
					})
				: (0, i.jsx)('div', { className: L.wfsSpacer })
		]
	});
});
