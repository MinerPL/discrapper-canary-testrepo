n.d(t, {
	Go: function () {
		return D;
	},
	LZ: function () {
		return b;
	},
	Pq: function () {
		return A;
	},
	RJ: function () {
		return L;
	},
	Sd: function () {
		return U;
	},
	XW: function () {
		return P;
	},
	el: function () {
		return v;
	},
	fP: function () {
		return R;
	},
	fQ: function () {
		return O;
	},
	t$: function () {
		return N;
	}
}),
	n(653041),
	n(47120),
	n(733860);
var r = n(470079),
	i = n(442837),
	a = n(889161),
	s = n(695346),
	o = n(516373),
	l = n(430824),
	u = n(914010),
	c = n(771845),
	d = n(594174),
	_ = n(267642),
	E = n(700785),
	f = n(285651),
	h = n(268350),
	p = n(822179),
	m = n(926491),
	I = n(373228),
	T = n(378233),
	g = n(981631),
	S = n(689938);
let A = (e) => {
		R();
		let t = (0, i.e7)([m.Z], () => m.Z.hasLoadedStickerPacks);
		r.useEffect(() => {
			t && null == m.Z.getStickerPack(e) && (0, h.FQ)(e);
		}, [e, t]);
	},
	N = (e) => {
		let t = s.Wp.useSetting();
		return (0, T.WD)(t, e);
	},
	v = (e) => {
		let { collapsedStickersCategories: t, filteredStickers: n, listPaddingRight: i = 0, listWidth: s = 0, stickerNodeMargin: o = 0, stickerNodeWidth: c, stickersCategories: d } = e;
		return r.useMemo(() => {
			let e = Math.floor((s - i + o) / (c + o)),
				r = Math.floor(Math.max(o, (s - i - c * e) / (e - 1))),
				E = [],
				f = [],
				h = [],
				p = 0,
				m = 0,
				g = 0;
			if (0 !== s) {
				let r = function (t, n) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						i = (0, T.J8)(t[0]) ? l.Z.getGuild(t[0].guild_id) : void 0,
						{ canCreateExpressions: s } = (0, a.Gw)(i),
						o = u.Z.getGuildId(),
						c = d.findIndex((e) => e.type === I.Ih.FAVORITE),
						A = d.findIndex((e) => e.type === I.Ih.RECENT),
						N = t.length;
					null != i && o === i.id && s && t.length < (0, _.A3)(i.premiumTier) && N++;
					let v = Math.ceil(N / e);
					f[m] = r ? 0 : v;
					for (let a = 0; a < v; a++) {
						let s = a * e,
							o = s + e,
							l = t.slice(s, o).map((e, t) => ({
								type: I.al.STICKER,
								sticker: e,
								packId: (0, T.jl)(e) ? e.pack_id : 'TODO - fix',
								gridSectionIndex: m,
								rowIndex: p,
								columnIndex: t,
								visibleRowIndex: g,
								category: n
							}));
						m > A &&
							m > c &&
							null != i &&
							N > t.length &&
							l.push({
								type: I.al.CREATE_STICKER,
								guild_id: i.id,
								name: S.Z.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
								gridSectionIndex: m,
								rowIndex: p,
								columnIndex: l.length,
								visibleRowIndex: g
							}),
							!r && (g++, h.push(l), E.push(l.length)),
							p++;
					}
					m++;
				};
				if (null == n) for (let e of d) e.stickers.length > 0 ? (p++, r(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === I.Ih.EMPTY_GUILD_UPSELL && ((f[m] = 0), m++);
				else n.sendable.length > 0 && r(n.sendable, I.Ih.SEARCH_RESULTS), n.sendableWithPremium.length > 0 && r(n.sendableWithPremium, I.Ih.SEARCH_RESULTS);
			}
			return {
				rowCount: p,
				rowCountBySection: f,
				stickersGrid: h,
				gutterWidth: r,
				columnCounts: E
			};
		}, [t, n, i, s, o, c, d]);
	},
	O = (e) => {
		let t = (0, i.e7)([d.default], () => d.default.getCurrentUser());
		return (0, i.e7)(
			[m.Z],
			() => {
				for (let n of m.Z.getAllStickersIterator()) if ((0, f.kl)(n, t, e)) return !0;
				return !1;
			},
			[t, e]
		);
	},
	R = () => {
		r.useEffect(() => {
			(0, h.$p)();
		}, []);
	},
	C = (e) => {
		let t = (0, i.e7)([m.Z], () => m.Z.getAllGuildStickers()),
			n = (0, i.Wu)(
				[c.ZP, l.Z],
				() => {
					let e = c.ZP.getFlattenedGuildIds(),
						t = [];
					return (
						e.forEach((e) => {
							let n = l.Z.getGuild(e);
							null != n && t.push(n);
						}),
						t
					);
				},
				[]
			),
			s = (0, i.e7)([d.default], () => d.default.getCurrentUser());
		return r.useMemo(() => {
			let r = [];
			for (let { name: e, id: i } of n) {
				let n = t.get(i);
				if (null != n && 0 !== n.length)
					r.push({
						type: I.Ih.GUILD,
						id: i,
						name: e,
						stickers: n
					});
			}
			if ((null == e ? void 0 : e.getGuildId()) != null) {
				let t = l.Z.getGuild(e.getGuildId()),
					{ canManageAllExpressions: n } = (0, a.Gw)(t),
					i = r.findIndex((t) => t.id === e.getGuildId());
				i >= 1
					? r.unshift(r.splice(i, 1)[0])
					: -1 === i &&
						null != t &&
						n &&
						r.unshift({
							type: I.Ih.EMPTY_GUILD_UPSELL,
							id: t.id,
							name: t.name,
							stickers: []
						}),
					null != s &&
						!E.BT({
							permission: g.Plq.USE_EXTERNAL_EMOJIS,
							user: s,
							context: e
						}) &&
						(r = r.filter((t) => t.id === e.getGuildId()));
			}
			return r;
		}, [t, n, s, e]);
	},
	y = [];
function D() {
	var e, t;
	return null !== (t = null === (e = (0, o.D)().favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : y;
}
function L() {
	let e = D();
	return (0, i.Wu)([m.Z], () => e.map((e) => m.Z.getStickerById(e)).filter((e) => null != e && (!(0, T.J8)(e) || (0, T.V9)(e))), [e]);
}
function b() {
	let e = (function () {
		var e, t;
		let n = (0, o.D)(),
			r = y;
		return (null == n ? void 0 : null === (e = n.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (r = Object.keys(null == n ? void 0 : null === (t = n.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), r;
	})();
	return (0, i.Wu)([m.Z], () => e.map((e) => m.Z.getStickerById(e)).filter((e) => void 0 !== e), [e]);
}
let M = (e) => {
		let t = L(),
			{ packs: n, frequentlyUsedStickers: a } = (0, i.cj)(
				[m.Z, p.Z],
				() => ({
					packs: m.Z.getPremiumPacks(),
					frequentlyUsedStickers: p.Z.stickerFrecencyWithoutFetchingLatest.frequently
				}),
				[]
			),
			s = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
			o = C(e);
		return r.useMemo(() => {
			var r;
			let i = n.map(T.z),
				l = {
					type: I.Ih.FAVORITE,
					id: I.Ih.FAVORITE,
					name: S.Z.Messages.CATEGORY_FAVORITE,
					stickers: t
				};
			return [
				l,
				{
					type: I.Ih.RECENT,
					id: I.Ih.RECENT,
					name: S.Z.Messages.STICKER_CATEGORY_RECENT,
					stickers:
						null !==
							(r =
								null == a
									? void 0
									: a.filter((t) => {
											if ((0, T.J8)(t)) {
												var r, i;
												return null !== (i = null === (r = m.Z.getStickersByGuildId(t.guild_id)) || void 0 === r ? void 0 : r.some((e) => e.id === t.id)) && void 0 !== i && i && (0, f.cO)(t, s, e) !== f.eb.NONSENDABLE;
											}
											if ((0, T.jl)(t)) return n.some((e) => e.id === t.pack_id);
										})) && void 0 !== r
							? r
							: []
				},
				...o,
				...i
			];
		}, [n, t, a, o, s, e]);
	},
	P = function (e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = (0, i.e7)([m.Z], () => m.Z.getStickerById(e.id)),
			[a, s] = r.useState(!0),
			[o, l] = r.useState(!1),
			u = (0, T.J8)(e) || (0, T.jl)(e);
		return (r.useEffect(() => {
			(async () => {
				if (t && !u && null == n && a && !o) {
					s(!1);
					try {
						await (0, h.Il)(e.id);
					} catch {}
					l(!0);
				}
			})();
		}, [t]),
		u)
			? [e, o]
			: [null != n ? n : null, o];
	},
	U = (e) => {
		let t = M(e);
		return r.useMemo(() => t.filter((e) => e.type === I.Ih.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t]);
	};
