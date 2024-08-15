n.d(t, {
	Z: function () {
		return v;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(442837),
	l = n(481060),
	u = n(239091),
	c = n(607070),
	d = n(339085),
	_ = n(906411),
	E = n(633302),
	f = n(691251),
	h = n(536442),
	p = n(912893),
	I = n(430824),
	m = n(358085),
	T = n(288406),
	g = n(689938),
	S = n(269003);
let A = (e, t) => ''.concat(e, ':').concat(t),
	N = i.forwardRef(function (e, t) {
		let n,
			{
				emoji: i,
				isFavorite: a,
				isLargeSize: u,
				isMediumSize: c,
				isInspected: d,
				isDisabled: E,
				showPulse: h,
				columnIndex: p,
				rowIndex: m,
				size: A,
				surrogateCodePoint: N,
				allowAnimatedEmoji: v,
				selectedItemClassName: O,
				inNitroLockedSection: R,
				...C
			} = e,
			y = (0, o.e7)([I.Z], () => (i.type === _.B.GUILD ? I.Z.getGuild(i.guildId) : void 0), [i]);
		return (0, r.jsx)(l.FocusRing, {
			children: (0, r.jsx)('button', {
				...C,
				className: s()(S.emojiItem, {
					[S.emojiItemLarge]: u,
					[S.emojiItemMedium]: c,
					[S.emojiItemSelected]: d,
					[null != O ? O : '']: d,
					[S.showPulse]: h
				}),
				'data-type': f.S.EMOJI,
				'data-id': i.id,
				'data-name': i.name,
				'data-surrogates': 'surrogates' in i ? i.surrogates : null,
				'data-animated': i.animated ? 'true' : null,
				ref: t,
				children: (0, r.jsx)(T.Z, {
					'aria-label':
						((n = i.allNamesString),
						((null == y ? void 0 : y.name) != null &&
							(n = g.Z.Messages.EMOJI_FROM_GUILD_LABEL.format({
								names: n,
								guildName: y.name
							})),
						a)
							? g.Z.Messages.EMOJI_NAMES_WITH_FAVORITED.format({ names: n })
							: n),
					columnIndex: p,
					rowIndex: m,
					emoji: i,
					size: A,
					surrogateCodePoint: N,
					allowAnimatedEmoji: v,
					isLocked: E && !R
				})
			})
		});
	});
function v(e) {
	let {
			descriptor: t,
			emojiItemKey: a,
			isInspected: s,
			rowIndex: _,
			channelGuildId: f,
			onInspect: I,
			onSelect: T,
			isScrolling: S,
			isUsingKeyboardNavigation: v,
			showEmojiFavoriteTooltip: O,
			surrogateCodePoint: R,
			selectedItemClassName: C,
			getEmojiItemProps: y,
			isMediumSize: D,
			isLargeSize: L,
			pulseItemKey: b,
			allowAnimatedEmoji: M,
			setPulseItemKey: P,
			messageId: U,
			isBurstReaction: w,
			rowPosition: x,
			inNitroLockedSection: G
		} = e,
		[k, B] = i.useState(''),
		F = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
		V = (0, o.e7)([d.ZP], () => d.ZP.getDisambiguatedEmojiContext(f), [f]),
		H = i.useRef(null),
		{ emoji: Z, size: Y, isDisabled: j, columnIndex: W } = t,
		K = (e) => {
			if ((e.stopPropagation(), S.current || v.current)) return;
			let n = e.altKey;
			n && !d.ZP.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(Z) && P(a),
				(0, h.Kw)(h.v6.FAVORITE_EMOJI_TOOLTIP),
				T(t, {
					isFinalSelection: !e.shiftKey,
					toggleFavorite: n
				});
		},
		z = () => {
			!S.current && !v.current && I(t);
		},
		q = (e) => {
			(0, u.jW)(e, async () => {
				let { default: e } = await n.e('39010').then(n.bind(n, 269254));
				return (t) => (0, r.jsx)(e, { ...t });
			});
		},
		Q = function () {
			var e;
			let { onMouseEnter: t, onMouseLeave: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				{ ref: o, tabIndex: l, onFocus: u, ...c } = null !== (e = y(W, _)) && void 0 !== e ? e : {};
			return (0, i.createElement)(
				'li',
				{
					...c,
					key: a,
					ref: H
				},
				k !== A(W, _) &&
					(0, r.jsx)(N, {
						ref: o,
						emoji: Z,
						isFavorite: V.isFavoriteEmojiWithoutFetchingLatest(Z),
						isLargeSize: L,
						isMediumSize: D,
						isInspected: s,
						isDisabled: j,
						showPulse: b === a,
						allowAnimatedEmoji: M,
						onFocus: null != u ? u : z,
						onMouseMove: z,
						onMouseEnter: t,
						onMouseLeave: n,
						onClick: (e) => {
							if (null != H.current && null != x && null != U && !e.shiftKey && null != Z.name && w && !F && M) {
								let e = null == Z.id ? E.ZP.convertNameToSurrogate(Z.name) : Z.name,
									t = H.current.getBoundingClientRect();
								(t.x = x.x + (W + 1) * Y), B(A(W, _)), (0, p.U)(U, e, Z.id, t);
							}
							K(e);
						},
						onContextMenu: q,
						tabIndex: l,
						columnIndex: W,
						rowIndex: _,
						size: Y,
						surrogateCodePoint: R,
						selectedItemClassName: C,
						inNitroLockedSection: G
					})
			);
		};
	return O
		? (0, r.jsx)(
				l.Tooltip,
				{
					text: g.Z.Messages.EMOJI_FAVORITE_TOOLTIP.format({ key: (0, m.isMac)() ? 'Opt' : 'Alt' }),
					position: 'top',
					delay: 200,
					children: (e) => Q(e)
				},
				a
			)
		: Q();
}
