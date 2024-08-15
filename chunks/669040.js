n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(392711),
	l = n.n(o),
	u = n(873546),
	c = n(442837),
	d = n(946188),
	_ = n(477690),
	E = n(788911),
	f = n(2052),
	h = n(906732),
	p = n(218867),
	I = n(806966),
	m = n(28546),
	T = n(691251),
	g = n(98528),
	S = n(551058),
	A = n(536442),
	N = n(104494),
	v = n(639119),
	O = n(53691),
	R = n(75145),
	C = n(631771),
	y = n(695346),
	D = n(594174),
	L = n(626135),
	b = n(111361),
	M = n(74538),
	P = n(624138),
	U = n(543241),
	w = n(883661),
	x = n(880949),
	G = n(784222),
	k = n(172800),
	B = n(149203),
	F = n(981631),
	V = n(957825),
	H = n(474936),
	Z = n(689938),
	Y = n(365887);
let j = (0, P.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
	W = (0, P.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
	K = (0, P.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
	z = (0, P.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
	q = (0, P.Mg)(_.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
	Q = (0, P.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
	X = (0, P.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
	$ = (e) => e + 2 * X,
	J = (e) => {
		let {
				collapsedSections: t,
				diversitySurrogate: n,
				emojiGrid: a,
				emojiSize: o,
				onEmojiSelect: u,
				searchQuery: _,
				sectionDescriptors: E,
				setCollapsedSections: h,
				getEmojiItemProps: p,
				getEmojiRowProps: m,
				isScrolling: g,
				isUsingKeyboardNavigation: N,
				allowAnimatedEmoji: v,
				channelGuildId: O,
				messageId: C,
				isBurstReaction: y,
				listHeaderClassName: D,
				activeSectionIndex: b,
				upsellGlowOpacity: M
			} = e,
			P = (0, f.O)(),
			H = i.useRef(F.xAR),
			Z = i.useMemo(() => ('' !== n ? d.Z.convert.toCodePoint(n) : ''), [n]),
			X = i.useCallback(
				(e) => {
					let t = E[e],
						n = E[e + 1];
					return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
				},
				[E]
			),
			$ = i.useCallback(
				(e) => {
					if (e >= E.length - 1) return !1;
					let t = E[e],
						n = E[e + 1];
					return !t.isNitroLocked && n.isNitroLocked;
				},
				[E]
			),
			J = i.useCallback(
				function (e) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
						r = new Set(t),
						i = t.has(e);
					i ? r.delete(e) : r.add(e),
						null != n &&
							L.default.track(F.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
								location: P.location,
								tab: V.X1.EMOJI,
								collapsed: !i,
								guild_id: n.id
							}),
						h(r);
				},
				[P, t, h]
			),
			ee = i.useCallback((e) => {
				let { columnIndex: t, visibleRowIndex: n } = e,
					r = e.type === G.ld.EMOJI ? e.emoji.allNamesString : e.name;
				H.current !== F.xAR && window.cancelAnimationFrame(H.current),
					(H.current = window.requestAnimationFrame(() => {
						I.kJ.setInspectedExpressionPosition(t, n, T.u.MOUSE_EVENT),
							I.kJ.setSearchPlaceholder(r),
							(H.current = F.xAR);
					}));
			}, []),
			et = (0, c.e7)([A.qc], () => A.qc.hasHotspot(A.v6.FAVORITE_EMOJI_TOOLTIP), []),
			en = i.useMemo(
				() =>
					l().memoize((e, t) => {
						let n = a[e],
							i = E[t.sectionIndex];
						return (0, r.jsx)(
							k.Z,
							{
								emojiDescriptors: n,
								emojiSize: o,
								surrogateCodePoint: Z,
								onInspect: ee,
								onSelect: u,
								getEmojiItemProps: p,
								getEmojiRowProps: m,
								isScrolling: g,
								isUsingKeyboardNavigation: N,
								rowIndex: e,
								allowAnimatedEmoji: v,
								showEmojiFavoriteTooltip: et,
								channelGuildId: O,
								category: i.sectionId,
								selectedItemClassName: Y.__invalid_selectedItem,
								messageId: C,
								isBurstReaction: y,
								inNitroLockedSection: i.isNitroLocked
							},
							e
						);
					}),
				[a, E, o, Z, ee, u, p, m, g, N, v, et, O, C, y]
			);
		i.useEffect(
			() => () => {
				var e, t;
				return null === (t = en.cache) || void 0 === t
					? void 0
					: null === (e = t.clear) || void 0 === e
						? void 0
						: e.call(t);
			},
			[en]
		);
		let er = i.useMemo(
				() =>
					l().memoize((e) => {
						let n = E[e];
						if (null == n) return;
						let { guild: i, categoryId: a, type: o, sectionId: l } = n;
						if (o === B.En.SEARCH_RESULTS) return;
						let u =
								o === B.En.GUILD
									? null != i
										? (0, r.jsx)(x.Z, {
												guild: i,
												height: 16,
												width: 16
											})
										: null
									: null != a
										? (0, r.jsx)(w.Z, {
												categoryId: a,
												height: 16,
												width: 16,
												size: 'custom'
											})
										: null,
							c = null == i ? void 0 : i.toString();
						null != a && (c = (0, U.Y1)(a, null == i ? void 0 : i.toString()));
						let d = b === e,
							_ = n.isNitroLocked,
							f = _ && !d,
							h = _ && d;
						return (0, r.jsx)(
							S.Z,
							{
								className: s()(Y.header, D, {
									[Y.inactiveNitroHeader]: f,
									[Y.activeNitroHeader]: h
								}),
								icon: u,
								isCollapsed: t.has(l),
								onClick: () => J(l, i),
								children: c
							},
							l
						);
					}),
				[E, t, J, D, b]
			),
			ei = i.useCallback(
				(e, n) => {
					let i = E[e],
						a = $(e),
						o = X(e);
					return (0, r.jsx)(
						'div',
						{
							className: s()(Y.categorySection, {
								[Y.categorySectionLast]: e === E.length - 1,
								[Y.categorySectionCollapsed]: t.has(i.sectionId),
								[Y.categorySectionNitroLocked]: i.isNitroLocked,
								[Y.categorySectionNitroDivider]: a || o
							}),
							children: n
						},
						e
					);
				},
				[t, E, $, X]
			),
			ea = i.useCallback(
				(e) =>
					$(e)
						? (0, r.jsx)(R.Z, { glowOpacity: M })
						: X(e)
							? (0, r.jsx)('div', { className: Y.nitroBottomDivider })
							: null,
				[M, $, X]
			),
			es = i.useCallback((e) => ($(e) ? 41 : X(e) ? 33 : 0), [$, X]),
			eo = i.useCallback(
				(e) => {
					var n;
					return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || $(e) || X(e)
						? 0
						: Q;
				},
				[t, E, $, X]
			),
			el = i.useMemo(() => ['' !== _ ? z : j, W, K, 0], [_]);
		return {
			listPadding: el,
			renderRow: en,
			renderSection: ei,
			renderSectionHeader: er,
			renderSectionFooter: ea,
			sectionMarginBottom: eo,
			sectionHeaderHeight: i.useCallback((e) => (E[e].type === B.En.SEARCH_RESULTS ? 0 : q), [E]),
			sectionFooterHeight: es
		};
	},
	ee = i.memo(function (e) {
		let {
				diversitySurrogate: t,
				emojiGrid: n,
				emojiListRef: a,
				emojiSize: s,
				onEmojiSelect: o,
				setUpsellConfigs: l,
				sectionDescriptors: d,
				rowCountBySection: _,
				collapsedSections: T,
				setCollapsedSections: S,
				getEmojiItemProps: A,
				getEmojiRowProps: R,
				rowCount: P,
				isUsingKeyboardNavigation: U,
				channelGuildId: w,
				messageId: x,
				isBurstReaction: k,
				listHeaderClassName: B
			} = e,
			V = i.useRef(!1),
			j = I.kJ.useStore((e) => e.activeCategoryIndex),
			W = (0, m.Iu)((e) => e.searchQuery),
			K = y.Yk.useSetting(),
			z = (0, c.e7)([D.default], () => D.default.getCurrentUser()),
			q = (0, b.I5)(z),
			{ location: Q } = (0, f.O)(),
			{ analyticsLocations: X } = (0, h.ZP)(),
			[ee, et] = i.useState(0),
			[en, er] = i.useState(!1),
			[ei, ea] = i.useState(0),
			es = (0, v.N)(),
			eo = (0, N.Ng)(),
			el = en && !q && !u.tq && !(null != es || null != eo),
			{ enabled: eu } = C.Gi.useExperiment(
				{ location: 'Premium Emoji Roadblock' },
				{
					autoTrackExposure: el,
					disable: !el
				}
			),
			{
				listPadding: ec,
				renderRow: ed,
				renderSection: e_,
				renderSectionHeader: eE,
				renderSectionFooter: ef,
				sectionMarginBottom: eh,
				sectionHeaderHeight: ep,
				sectionFooterHeight: eI
			} = J({
				collapsedSections: T,
				diversitySurrogate: t,
				emojiGrid: n,
				emojiSize: s,
				onEmojiSelect: o,
				searchQuery: W,
				sectionDescriptors: d,
				setCollapsedSections: S,
				getEmojiItemProps: A,
				getEmojiRowProps: R,
				isScrolling: V,
				isUsingKeyboardNavigation: U,
				allowAnimatedEmoji: K,
				channelGuildId: w,
				messageId: x,
				isBurstReaction: k,
				listHeaderClassName: B,
				activeSectionIndex: ee,
				upsellGlowOpacity: ei
			}),
			em = (0, g.Uf)({
				listRef: a,
				searchQuery: W,
				nitroLockedSectionStates: d,
				setShowUpsell: er,
				setUpsellGlowOpacity: ea
			}),
			eT = (0, g.Qs)({
				activeCategoryIndex: j,
				isScrolling: V,
				listRef: a,
				onActiveCategoryIndexChange: (e) => {
					et(e), '' === W && I.kJ.setActiveCategoryIndex(e);
				},
				scrollOffset: 0,
				searchQuery: W,
				disableForSearch: !1
			});
		(0, g.Xs)({
			searchQuery: W,
			activeCategoryIndex: j,
			listRef: a
		});
		let eg = i.useCallback(
				(e) => {
					em(e), eT(e);
				},
				[em, eT]
			),
			eS = d.length > 0;
		return (
			i.useEffect(() => {
				en &&
					L.default.track(F.rMx.PREMIUM_UPSELL_VIEWED, {
						type: H.cd.EMOJI_PICKER_FLOATING_UPSELL,
						location: Q,
						location_stack: X
					});
			}, [Q, X, en]),
			i.useEffect(() => {
				'' !== W && (ea(0), er(!1));
			}, [W]),
			(0, r.jsxs)('div', {
				className: Y.listWrapper,
				children: [
					eS
						? (0, r.jsx)(p.Z, {
								role: 'none presentation',
								className: Y.list,
								listPadding: ec,
								onScroll: eg,
								renderRow: ed,
								renderSection: e_,
								renderSectionHeader: eE,
								renderSectionFooter: ef,
								rowCount: P,
								rowCountBySection: _,
								rowHeight: $(s),
								sectionHeaderHeight: ep,
								sectionMarginBottom: eh,
								sectionFooterHeight: eI,
								stickyHeaders: !0,
								ref: a
							})
						: (0, r.jsx)(E.Z, {
								message: Z.Z.Messages.NO_EMOJI_SEARCH_RESULTS,
								className: Y.noSearchResultsContainer
							}),
					q || u.tq
						? null
						: (0, r.jsx)(O.p, {
								showUpsell: en,
								upsellText: (function () {
									if (!eu) return Z.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE;
									{
										let e = (0, M.Px)(H.p9.TIER_2);
										return Z.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_EMOJI_POPUP_LABEL_V2.format({
											nitroTierName: e,
											onClick: () => {
												l({
													type: G.Bg.PREMIUM,
													emojiDescriptor: void 0
												});
											}
										});
									}
								})(),
								ctaText: Z.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
								ctaAnalyticsObject: { section: F.jXE.EMOJI_PICKER_FLOATING_UPSELL }
							})
				]
			})
		);
	});
t.Z = ee;
