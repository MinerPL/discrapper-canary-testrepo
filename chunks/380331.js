n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(392711),
	l = n.n(o),
	u = n(91192),
	c = n(442837),
	d = n(477690),
	_ = n(481060),
	E = n(2052),
	f = n(607070),
	h = n(806966),
	p = n(254494),
	I = n(593618),
	m = n(451478),
	T = n(626135),
	g = n(624138),
	S = n(543241),
	A = n(883661),
	N = n(880949),
	v = n(784222),
	O = n(149203),
	R = n(981631),
	C = n(957825),
	y = n(689938),
	D = n(746974);
let L = (0, g.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
	b = (0, g.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
	M = (0, g.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
	P = (0, g.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
	U = (0, g.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
	w = (0, g.Mg)(D.__invalid_unicodeCategoryShortcutHeight),
	x = (0, g.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
	G = (0, g.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
	k = M + b + 2 * U,
	B = L + b,
	F = B + (x + 2 * G),
	V = M + P + 2 * U;
function H(e) {
	let {
			activeIndex: t,
			categoryIndex: n,
			analyticsContext: a,
			categories: o,
			category: l,
			handleCategorySelect: c,
			isWindowFocused: d,
			useReducedMotion: E
		} = e,
		f = (0, u.JA)('expression-guild-'.concat(n)),
		h = l.type === O.En.GUILD ? null : l.id,
		p = t === n,
		m = l.type === O.En.GUILD ? l.guild : null,
		g = (0, r.jsxs)(_.Clickable, {
			...f,
			'aria-label': (0, S.Nf)(l, m),
			className: s()({
				[D.categoryItemGuildCategory]: null != m,
				[D.categoryItemDefaultCategory]: null == m,
				[D.categoryItemDefaultCategorySelected]: null == m && p,
				[D.categoryItemRecentEmoji]: l.type === O.En.RECENT
			}),
			onClick: () => {
				null != m &&
					T.default.track(R.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
						location: null == a ? void 0 : a.location,
						tab: C.X1.EMOJI,
						guild_id: m.id
					}),
					c(n);
			},
			children: [
				null != m
					? (0, r.jsx)(N.Z, {
							guild: m,
							isSelected: p,
							shouldAnimate: !E && d,
							isLocked: l.isNitroLocked
						})
					: null,
				null == m && null != h
					? (0, r.jsx)(A.Z, {
							categoryId: h,
							className: D.categoryIcon,
							height: M,
							width: M,
							size: 'custom'
						})
					: null
			]
		}),
		v = o[n + 1],
		y = null != v && l.type === O.En.GUILD && v.type !== O.En.GUILD;
	return null != m
		? (0, r.jsxs)(i.Fragment, {
				children: [
					(0, r.jsx)(I.Z, {
						guild: m,
						includeActivity: !1,
						children: (0, r.jsx)('div', { children: g })
					}),
					y ? (0, r.jsx)('hr', { className: D.guildCategorySeparator }, 'separator') : null
				]
			})
		: g;
}
t.Z = (e) => {
	let { className: t, emojiListRef: n, sectionDescriptors: a, intention: o, channel: u } = e,
		d = h.kJ.useStore((e) => e.activeCategoryIndex),
		I = (0, v.Ni)({
			sectionDescriptors: a,
			emojiListRef: n
		}),
		T = (0, E.O)(),
		g = (0, S.kI)(o, u),
		A = i.useRef(null),
		N = (0, c.e7)([m.Z], () => m.Z.isFocused()),
		R = (0, c.e7)([f.Z], () => f.Z.useReducedMotion, []),
		C = i.useMemo(
			() =>
				l().memoize((e, t) => {
					let n = g[t];
					if (null != n)
						return (0, r.jsx)(
							H,
							{
								activeIndex: d,
								analyticsContext: T,
								categories: g,
								category: n,
								categoryIndex: t,
								handleCategorySelect: I,
								isWindowFocused: N,
								useReducedMotion: R
							},
							t
						);
				}),
			[d, T, g, I, N, R]
		),
		L = i.useMemo(() => [8, 8, 0, 8], []),
		U = i.useCallback(
			(e, t) => {
				let n = g[t];
				if (n.type === O.En.RECENT) return k;
				if (n.type === O.En.GUILD) {
					let e = g[t + 1];
					return null != e && e.type !== O.En.GUILD ? F : B;
				}
				return V;
			},
			[g]
		),
		{
			nonUnicodeCategoryCount: Z,
			firstUnicodeCategoryIndex: Y,
			firstUnicodeCategoryOffsetTop: j,
			rowCountBySection: W
		} = i.useMemo(() => {
			let e = 0,
				t = 0,
				n = 0,
				r = 0;
			g.forEach((i) => {
				i.type === O.En.GUILD ? ((t += 1), (n += 1)) : i.type === O.En.UNICODE ? (r += 1) : ((e += 1), (t += 1));
			});
			let i = k + t * B + F;
			return {
				nonUnicodeCategoryCount: t,
				firstUnicodeCategoryIndex: t,
				firstUnicodeCategoryOffsetTop: i,
				rowCountBySection: [e, n, r]
			};
		}, [g]),
		[K, z] = i.useState(!0);
	i.useLayoutEffect(() => {
		z(Z >= 7);
	}, [Z]);
	let q = i.useCallback(
			(e) => {
				var t;
				let n = null === (t = A.current) || void 0 === t ? void 0 : t.getListDimensions();
				if (null != n) e + n.height - x >= j ? z(!1) : z(!0);
			},
			[j]
		),
		Q = i.useCallback(
			(e) => {
				var t;
				e(Y), null === (t = A.current) || void 0 === t || t.scrollTo(j);
			},
			[j, Y]
		),
		X = i.useCallback(
			(e, t) => {
				let n = g[e];
				if (null == n) return 0;
				let r = K ? w : 0;
				if (n.type === O.En.RECENT) return t ? 0 : P;
				if (n.type === O.En.GUILD) {
					let n = g[e + 1];
					return null != n && n.type !== O.En.GUILD ? (t ? x + -2 * G + b + r : b) : t ? r : b;
				}
				return t ? b + r : 2 * b;
			},
			[g, K]
		),
		$ = i.useMemo(
			() =>
				function (e, t) {
					return (0, r.jsx)(i.Fragment, { children: t }, e);
				},
			[]
		),
		J = K ? 'shortcut' : 'hiddenshortcut';
	return (0, r.jsx)(p.Z, {
		categoryListRef: A,
		expressionsListRef: n,
		className: t,
		store: h.kJ,
		categories: g,
		listPadding: L,
		onScroll: q,
		renderCategoryListItem: C,
		renderSection: $,
		rowCount: g.length,
		categoryHeight: U,
		getScrollOffsetForIndex: X,
		rowCountBySection: W,
		children: (e) =>
			Z >= 7 &&
			(0, r.jsx)(
				_.Clickable,
				{
					'aria-hidden': !K,
					'aria-label': y.Z.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
					className: s()(D.unicodeShortcut, { [D.unicodeShortcutInvisible]: !K }),
					tabIndex: K ? 0 : -1,
					onClick: () => Q(e),
					children: (0, r.jsx)(_.ReactionIcon, {
						size: 'custom',
						color: 'currentColor',
						height: M,
						width: M
					})
				},
				J
			)
	});
};
