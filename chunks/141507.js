n.d(t, {
	k: function () {
		return U;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(780384),
	o = n(481060),
	l = n(607070),
	u = n(339085),
	c = n(906411),
	d = n(438332),
	_ = n(664437),
	E = n(806966),
	f = n(65029),
	h = n(210887),
	p = n(695346),
	I = n(430824),
	m = n(451478),
	T = n(768581),
	g = n(392552),
	S = n(543241),
	A = n(199257),
	N = n(880949),
	v = n(784222),
	O = n(149203),
	R = n(689938),
	C = n(611540);
let y = n(137321),
	D = n(233892),
	L = n(942315),
	b = n(636626);
function M(e) {
	return 'animated' in e;
}
let P = (e) => {
		let { inspectedEmoji: t, guild: n } = e,
			r = M(t);
		return null != n && r ? R.Z.Messages.EMOJI_FROM_GUILD.format({ guildName: n.name }) : null;
	},
	U = i.memo(function (e) {
		let t,
			n,
			U,
			{ className: w, emojiGrid: x, guildId: G, pickerIntention: k, channel: B } = e,
			{ enabled: F } = g.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
			V = E.kJ.useStore((e) => e.inspectedExpressionPosition),
			H = i.useMemo(() => {
				var e;
				let { rowIndex: t, columnIndex: n } = V;
				return null === (e = x[t]) || void 0 === e ? void 0 : e[n];
			}, [x, V]);
		switch (null == H ? void 0 : H.type) {
			case v.ld.EMOJI:
				t = null == H ? void 0 : H.emoji;
				break;
			case v.ld.EXPAND_OR_COLLAPSE_EMOJIS:
				t = {
					type: 'EXPAND_OR_COLLAPSE_EMOJI',
					guildId: null == H ? void 0 : H.guildId,
					allNamesString: null == H ? void 0 : H.name
				};
				break;
			case v.ld.CREATE_EMOJI:
			default:
				t = {
					type: 'CREATE_EMOJI',
					guildId: null == H ? void 0 : H.guildId,
					allNamesString: null == H ? void 0 : H.name
				};
		}
		let Z = (0, a.e7)([I.Z], () => (null !== t && t.type === c.B.GUILD ? I.Z.getGuild(t.guildId) : null), [t]),
			Y = (0, a.e7)([m.Z], () => m.Z.isFocused()),
			j = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
			W = p.Yk.useSetting(),
			K = (0, S.C1)(G, M(t) ? t : null),
			z = (0, a.e7)([u.ZP], () => u.ZP.expandedSectionsByGuildIds),
			{ newlyAddedEmojis: q } = (0, A.Z)(G, k),
			Q = t.id,
			X = (null == H ? void 0 : H.type) === v.ld.EMOJI ? H.subCategory : O.t0.NONE;
		if (
			(i.useEffect(() => {
				let e = Date.now();
				return () => {
					Date.now() - e >= 250 &&
						M(t) &&
						X !== O.t0.NONE &&
						(X === O.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === c.B.GUILD && (0, _.Zg)(t.guildId, q[0].id),
						null != V.source &&
							(0, S.Gn)({
								emoji: t,
								subCategory: X,
								position: H.columnIndex + 1,
								newlyAddedHighlight: X === O.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(G, Q)
							}));
				};
			}),
			null == t)
		)
			return null;
		let $ = h.Z.theme;
		if (M(t)) {
			var J;
			let e =
				null != t.id
					? T.ZP.getEmojiURL({
							id: t.id,
							animated: W && t.animated,
							size: 28
						})
					: t.url;
			n =
				'' === e
					? (0, r.jsx)(o.Text, {
							variant: 'text-md/normal',
							className: C.glyphEmoji,
							children: 'surrogates' in t ? t.surrogates : null
						})
					: (0, r.jsx)('img', {
							alt: null !== (J = t.allNamesString) && void 0 !== J ? J : '',
							src: e,
							className: C.emoji
						});
		} else
			'CREATE_EMOJI' === t.type
				? (n = (0, r.jsx)(o.CirclePlusIcon, {
						size: 'md',
						color: 'currentColor',
						className: C.icon,
						colorClass: C.icon
					}))
				: 'EXPAND_OR_COLLAPSE_EMOJI' === t.type &&
					(n = z.has(t.guildId)
						? (0, r.jsx)('img', {
								className: C.icon,
								src: (0, s.wj)($) ? L : b,
								alt: ''
							})
						: (0, r.jsx)('img', {
								className: C.icon,
								src: (0, s.wj)($) ? y : D,
								alt: ''
							}));
		let ee =
			null != Z
				? (0, r.jsx)(N.Z, {
						className: C.__invalid_guildIcon,
						guild: Z,
						shouldAnimate: !j && Y
					})
				: null;
		U =
			F && 'CREATE_EMOJI' === t.type
				? R.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE_DESCRIPTION
				: 'EXPAND_OR_COLLAPSE_EMOJI' === t.type
					? z.has(t.guildId)
						? R.Z.Messages.EMOJI_PICKER_COLLAPSE_EMOJI_SECTION
						: R.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION
					: t.allNamesString;
		let et =
			F && 'CREATE_EMOJI' === t.type
				? R.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE
				: P({
						inspectedEmoji: t,
						channel: B,
						guildId: G,
						intention: k,
						guild: Z
					});
		return (0, r.jsx)(f.Z, {
			className: w,
			graphicPrimary: n,
			graphicSecondary: ee,
			titlePrimary: U,
			titleSecondary: et,
			isFavorite: K,
			emojiSubCategory: X
		});
	});
