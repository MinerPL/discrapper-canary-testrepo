n.d(t, {
	Z: function () {
		return N;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(338545),
	o = n(186325),
	c = n(780384),
	d = n(481060),
	u = n(393238),
	_ = n(410030),
	E = n(70097),
	h = n(113434),
	m = n(497505),
	I = n(918701),
	g = n(78826),
	p = n(670638),
	T = n(642145),
	S = n(981631),
	f = n(689938),
	C = n(222307);
function N(e) {
	var t, n;
	let { quest: s, isHovering: N, errorHints: A, onCtxMenuClose: v, onCtxMenuOpen: Z, onCtxMenuSelect: L } = e,
		O = (0, I.j8)(s),
		R = (0, _.ZP)(),
		x = (0, c.wj)(R) ? S.BRd.DARK : S.BRd.LIGHT,
		b = x === S.BRd.DARK,
		P = a.useMemo(() => (0, I.nP)(s.config.assets.hero), [s]),
		M = a.useContext(o.S).reducedMotion.enabled,
		D = (0, I.Mi)(s, m.jn.GIFT_INVENTORY_FOR_YOU),
		y = (0, h.tP)(s),
		j = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
		U = (null === (n = s.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
		G = a.useRef(N),
		k = a.useRef(null),
		w = (0, h.B6)(s.config.expiresAt, {
			month: 'numeric',
			day: 'numeric'
		}),
		B = (0, h.z)(s),
		{ ref: H, height: V = 0 } = (0, u.Z)([A]),
		F = !U && !B && A.length > 0,
		Y = (0, d.useSpring)({
			opacity: F ? 1 : 0,
			height: F ? V : 0,
			config: T.Y
		});
	return (
		a.useEffect(() => {
			if (P && null != k.current)
				return (
					G.current !== N && (N ? k.current.play() : (k.current.pause(), (k.current.currentTime = 0))),
					(G.current = N),
					() => {
						var e;
						null === (e = k.current) || void 0 === e || e.pause();
					}
				);
		}, [N, P]),
		(0, i.jsxs)('div', {
			className: C.container,
			children: [
				(0, i.jsx)('div', {
					className: C.heroAssetWrapper,
					children:
						P && !M
							? (0, i.jsx)(g.Fl, {
									id: 'QuestTileBanner_heroAnimated',
									children: (e) => (
										null != e.current && (k.current = e.current),
										(0, i.jsx)(E.Z, {
											ref: e,
											autoPlay: !M && N,
											loop: !0,
											playsInline: !0,
											className: C.heroAsset,
											controls: !1,
											children: (0, i.jsx)('source', {
												src: O,
												type: (0, I.mN)(O)
											})
										})
									)
								})
							: (0, i.jsx)(g.Fl, {
									id: 'QuestTileBanner',
									children: (e) =>
										(0, i.jsx)('img', {
											ref: e,
											alt: ''.concat(s.config.messages.questName),
											className: C.heroAsset,
											src: O
										})
								})
				}),
				(0, i.jsx)('div', {
					className: r()(C.overlay, {
						[C.darkThemeGradient]: b,
						[C.lightThemeGradient]: !b
					})
				}),
				(0, i.jsxs)('div', {
					className: C.positionContentOverBackground,
					children: [
						(0, i.jsxs)('div', {
							className: C.contents,
							children: [
								(0, i.jsxs)('div', {
									className: C.topRow,
									children: [
										D &&
											!y &&
											!j &&
											(0, i.jsx)('div', {
												className: C.pill,
												children: (0, i.jsx)(d.Text, {
													variant: 'eyebrow',
													color: 'always-white',
													className: C.eyebrowText,
													children: f.Z.Messages.RECOMMENDED
												})
											}),
										(0, i.jsx)(p.r, {
											onOpen: Z,
											onClose: v,
											onSelect: L,
											questContent: m.jn.QUEST_HOME_DESKTOP,
											quest: s,
											hideLearnMore: !0,
											shouldShowDisclosure: !0,
											showShareLink: !0,
											children: (e) =>
												(0, i.jsx)(d.Clickable, {
													...e,
													className: C.submenuWrapper,
													'aria-label': f.Z.Messages.ACTIONS,
													children: (0, i.jsx)(d.MoreHorizontalIcon, {
														size: 'md',
														color: 'currentColor',
														className: r()(C.submenuIcon)
													})
												})
										})
									]
								}),
								(0, i.jsx)(g.Fl, {
									id: 'QuestPartnerBranding_gameLogotype',
									children: (e) =>
										(0, i.jsx)('img', {
											ref: e,
											className: C.partnerBranding,
											alt: s.config.messages.gameTitle,
											src: (0, I.Gs)(s, x)
										})
								}),
								(0, i.jsxs)('div', {
									className: C.bottomRow,
									children: [
										(0, i.jsx)(d.Text, {
											variant: 'text-sm/medium',
											color: 'text-muted',
											children: f.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: s.config.messages.gamePublisher })
										}),
										y || j
											? null
											: (0, i.jsx)(d.Text, {
													variant: 'text-sm/medium',
													color: 'text-muted',
													children: f.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({ expiryDate: w })
												})
									]
								})
							]
						}),
						(0, i.jsx)(l.animated.div, {
							style: Y,
							children: (0, i.jsxs)('div', {
								ref: H,
								className: C.defibrillatorHints,
								children: [
									(0, i.jsx)(d.CircleWarningIcon, {
										size: 'xs',
										color: d.tokens.colors.TEXT_DANGER
									}),
									(0, i.jsx)('div', {
										className: C.hintsContainer,
										children: (0, i.jsx)(d.Text, {
											variant: 'text-xs/medium',
											color: 'text-muted',
											children: A.map((e) => e.message).join(' ')
										})
									})
								]
							})
						})
					]
				})
			]
		})
	);
}
