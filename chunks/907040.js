n.d(t, {
	v: function () {
		return r;
	}
}),
	n(47120),
	n(653041);
var r,
	i,
	a = n(735250),
	s = n(470079),
	o = n(120356),
	l = n.n(o),
	u = n(954955),
	c = n.n(u),
	d = n(611144),
	_ = n(442837),
	E = n(704215),
	f = n(477690),
	h = n(481060),
	p = n(80932),
	m = n(410575),
	I = n(2052),
	T = n(100527),
	g = n(906732),
	S = n(243778),
	A = n(339085),
	N = n(438332),
	v = n(664437),
	O = n(806966),
	R = n(28546),
	C = n(691251),
	y = n(98528),
	D = n(770812),
	L = n(434404),
	b = n(536442),
	M = n(609218),
	P = n(695346),
	U = n(984933),
	w = n(594174),
	x = n(626135),
	G = n(111361),
	k = n(624138),
	B = n(543241),
	F = n(253696),
	V = n(199257),
	H = n(636411),
	Z = n(380331),
	Y = n(170762),
	j = n(22363),
	W = n(784222),
	K = n(141507),
	z = n(669040),
	q = n(901963),
	Q = n(212263),
	X = n(149203),
	$ = n(981631),
	J = n(921944),
	ee = n(185923),
	et = n(23022);
let en = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
	er = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
	ei = (e) => e.stopPropagation();
((i = r || (r = {}))[(i.NONE = 0)] = 'NONE'), (i[(i.TABS_EXPRESSION_PICKER = 1)] = 'TABS_EXPRESSION_PICKER'), (i[(i.NO_TABS_EXPRESSION_PICKER = 2)] = 'NO_TABS_EXPRESSION_PICKER');
let ea = (e, t) => {
		O.kJ.setInspectedExpressionPosition(e, t, C.u.GRID_NAVIGATOR_EVENT);
	},
	es = (e) => {
		let { analyticsLocation: t, pickerIntention: n, columnCounts: r, onSelectEmoji: i, emojiGrid: a, emojiList: o, channelGuildId: l, isBurstReaction: u } = e,
			c = (0, _.e7)([A.ZP], () => A.ZP.getDisambiguatedEmojiContext(l), [l]),
			E = s.useCallback(
				(e, r) => {
					switch (e.type) {
						case W.ld.CREATE_EMOJI:
							i(void 0, !0), L.Z.open(e.guildId, $.pNK.EMOJI);
							return;
						case W.ld.EMOJI: {
							if (null != e.emoji && r.altKey) {
								c.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
									? (0, p.Xe)(e.emoji)
									: ((0, B.J1)({
											emoji: e.emoji,
											location: {
												...t,
												object: $.qAy.EMOJI
											}
										}),
										(0, p.$K)(e.emoji));
								return;
							}
							let a = {
								page: null != l ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
								section: $.jXE.EMOJI_PICKER_POPOUT,
								object: $.qAy.EMOJI
							};
							u &&
								(a = {
									page: null != l ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
									section: $.jXE.EMOJI_PICKER_POPOUT,
									object: $.qAy.EMOJI
								}),
								(0, B.fe)({
									emoji: e.emoji,
									location: a,
									pickerIntention: n,
									category: e.category,
									subCategory: e.subCategory,
									newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && N.Z.isNewerThanLastSeen(l, e.emoji.id)
								}),
								i(e.emoji, !r.shiftKey, u);
						}
					}
				},
				[i, l, n, c, t, u]
			),
			{
				gridDispatch: f,
				getItemProps: h,
				getRowProps: m,
				gridContainerProps: I,
				handleGridContainerKeyDown: T,
				isUsingKeyboardNavigation: g
			} = (0, y.VO)({
				columnCounts: r,
				gridNavigatorId: X.Vr,
				itemGrid: a,
				itemList: o,
				onGridNavigatorItemSelect: E,
				onGridNavigatorPositionChange: ea
			});
		return (
			s.useEffect(
				() =>
					O.kJ.useStore.subscribe(
						(e) => {
							if (null == e) return;
							let { columnIndex: t, rowIndex: n, source: r } = e;
							r !== C.u.GRID_NAVIGATOR_EVENT &&
								f({
									type: d.s.SET_FOCUSED_POSITION,
									x: t,
									y: n
								});
						},
						(e) => e.inspectedExpressionPosition
					),
				[f]
			),
			{
				getItemProps: h,
				getRowProps: m,
				gridContainerProps: I,
				handleGridContainerKeyDown: T,
				isUsingKeyboardNavigation: g
			}
		);
	},
	eo = (e, t) => {
		let [n, r] = s.useState(null);
		s.useEffect(() => {
			if (null != n) {
				var e;
				null === (e = t.current) || void 0 === e || e.scrollToSectionTop(n), r(null);
			}
		}, [t, n]),
			s.useEffect(() => {
				r(O.kJ.getState().activeCategoryIndex);
			}, [e]);
	},
	el = (e, t, n, r) => {
		s.useLayoutEffect(() => {
			if (r) {
				var e;
				null === (e = n.current) || void 0 === e || e.focus();
			}
		}, [e, t, n, r]);
	},
	eu = c()(B.to, 200),
	ec = c()(B.jA, 200),
	ed = {
		section: void 0,
		openPopoutType: void 0
	};
t.Z = s.memo(
	s.forwardRef(function (e, t) {
		var n, r;
		let i,
			{ pickerIntention: o, channel: u, guildId: c, closePopout: d, emojiSize: f = X.Su.MEDIUM, hasTabWrapper: p = !1, containerContext: C = 0, includeCreateEmojiButton: L, onSelectEmoji: k, containerWidth: ea, onNavigateAway: e_, persistSearch: eE, className: ef, headerClassName: eh, analyticsOverride: ep = ed, searchProps: em = {}, wrapper: eI, shouldHidePickerActions: eT = !1, messageId: eg, renderHeader: eS, listHeaderClassName: eA } = e,
			{ onFocus: eN, onKeyDown: ev, autoFocus: eO = !0, accessory: eR } = em,
			eC = (0, _.e7)([U.ZP], () => (null != c ? U.ZP.getDefaultChannel(c) : null), [c]),
			[ey, eD] = s.useState(null),
			eL = s.useRef(''),
			eb = (0, R.Iu)((e) => e.searchQuery),
			eM = s.useRef(null),
			eP = s.useRef(null),
			eU = s.useRef(null);
		null == u && null != eC && (u = eC);
		let ew = null !== (r = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : c) && void 0 !== r ? r : null,
			[ex, eG] = s.useState(!1),
			ek = w.default.getCurrentUser(),
			eB = (0, G.I5)(ek);
		s.useImperativeHandle(t, () => ({ onPickerOpen: e5 }));
		let { location: eF } = (0, I.O)(),
			{ page: eV, section: eH, object: eZ, openPopoutType: eY } = ep,
			ej = s.useMemo(
				() => ({
					...eF,
					section: null != eH ? eH : $.jXE.EMOJI_PICKER_POPOUT
				}),
				[eF, eH]
			),
			{ analyticsLocations: eW } = (0, g.ZP)(T.Z.EMOJI_PICKER),
			{ diversitySurrogate: eK } = (0, _.cj)([A.ZP], () => ({ diversitySurrogate: A.ZP.diversitySurrogate })),
			ez = (0, B.DV)(eb, u, o),
			eq = null == ez ? 0 : ez.locked.length + ez.unlocked.length,
			eQ = P.d4.useSetting(),
			eX = s.useMemo(() => new Set(eQ), [eQ]),
			e$ = s.useCallback((e) => {
				P.d4.updateSetting(Array.from(e));
			}, []),
			eJ = (0, y.ep)({
				gridWrapperRef: eM,
				containerWidth: ea,
				listPaddingLeft: er,
				listScrollbarWidth: 8
			}),
			{
				rowCountBySection: e0,
				sectionDescriptors: e1,
				emojiGrid: e2,
				columnCounts: e3
			} = (0, W.YH)({
				gridWidth: eJ,
				channel: u,
				includeCreateEmojiButton: L,
				pickerIntention: o,
				emojiSearchResults: ez,
				collapsedSections: eX,
				emojiPaddingHorizontal: en,
				emojiSpriteSize: f
			}),
			{ newlyAddedEmojis: e4 } = (0, V.Z)(ew, o);
		(0, F.b)({
			intention: o,
			isBurstReaction: ex,
			analyticsObject: eZ
		});
		let e5 = s.useCallback(() => {
				let e = e4.length > 0 ? e4[0].id : null;
				(0, v.pr)(ew, e),
					(0, F.Z)({
						intention: o,
						isBurstReaction: ex,
						analyticsObject: eZ
					});
			}, [e4, ew, o, ex, eZ]),
			e6 = (0, W.rf)({
				pickerIntention: o,
				selectedChannel: u,
				closePopout: d,
				onSelectEmoji: k,
				setUpsellConfigs: eD,
				emojiSelectAnalytics: (e) => {
					'' !== eb
						? (0, B.y$)({
								emoji: e.emoji,
								location: {
									...ej,
									object: $.qAy.EMOJI
								},
								searchQuery: eb,
								intention: o
							})
						: (0, B.fe)({
								emoji: e.emoji,
								location: {
									...ej,
									object: null != eZ ? eZ : $.qAy.EMOJI,
									...(null != eV && { page: eV })
								},
								pickerIntention: o,
								category: e.category,
								subCategory: e.subCategory,
								position: e.columnIndex + 1,
								newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && N.Z.isNewerThanLastSeen(ew, e.emoji.id),
								isBurstReaction: ex
							});
				},
				trackEmojiFavorited: (e) => {
					(0, B.J1)({
						emoji: e.emoji,
						location: {
							...ej,
							object: $.qAy.EMOJI
						}
					});
				}
			}),
			e7 = s.useCallback(() => {
				d(), null == e_ || e_();
			}, [d, e_]),
			{
				getItemProps: e8,
				getRowProps: e9,
				gridContainerProps: te,
				handleGridContainerKeyDown: tt,
				isUsingKeyboardNavigation: tn
			} = es({
				pickerIntention: o,
				analyticsLocation: ej,
				columnCounts: e3,
				onSelectEmoji: k,
				emojiGrid: e2,
				emojiList: eP,
				channelGuildId: ew,
				isBurstReaction: ex
			});
		eo(ea, eP),
			el(ea, eK, eU, eO),
			s.useEffect(() => {
				!eE && (0, R.ql)('');
			}, [eE]),
			s.useEffect(
				() => (
					x.default.track($.rMx.OPEN_POPOUT, {
						type: null != eY ? eY : 'Emoji Picker',
						guild_id: ew
					}),
					O.kJ.resetStoreState
				),
				[eY, ew]
			),
			s.useEffect(() => () => (0, b.Kw)(b.v6.FAVORITE_EMOJI_TOOLTIP), []),
			s.useLayoutEffect(() => {
				var e;
				let { columnIndex: t, rowIndex: n } = O.kJ.getState().inspectedExpressionPosition;
				(null === (e = e2[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && O.kJ.setInspectedExpressionPosition(0, 0);
			}, [e2]),
			s.useEffect(() => {
				if (('' === eL.current && '' !== eb && (0, B.PC)(ej, o), 0 === eq && '' !== eb)) eu(ej, eb);
				else if ('' !== eb && eL.current !== eb) {
					var e;
					ec(eq, null !== (e = null == ez ? void 0 : ez.locked.length) && void 0 !== e ? e : 0, ej, eb, o);
				}
				eL.current = eb;
			}, [eb, ej, eq, ez, o]);
		let tr = null != eI ? eI : p ? 'div' : h.Dialog,
			ti = null != eJ;
		if ((null == ey ? void 0 : ey.type) === W.Bg.PREMIUM) {
			let e = M.p.NONE;
			2 === C ? (e = M.p.PARENT_CONTAINER) : 1 === C && (e = M.p.TAB_PARENT_CONTAINER),
				(i = (0, a.jsx)(Q.Z, {
					onLearnMore: e7,
					emojiDescriptor: ey.emojiDescriptor,
					pickerIntention: o,
					analyticsLocation: ej,
					onClose: () => eD(null),
					channel: u,
					containerContext: e
				}));
		} else
			(null == ey ? void 0 : ey.type) === W.Bg.ROLE_SUBSCRIPTION
				? (i = (0, a.jsx)(D.Z, {
						onClose: () => eD(null),
						guildId: ey.guildId,
						emojiId: ey.emojiId
					}))
				: ex && !eB && (i = (0, a.jsx)(H.Z, { onDismiss: () => eG(!1) }));
		let ta = (0, a.jsx)(j.Z, {
				pickerIntention: o,
				emojiListRef: eP,
				onKeyDown: (e) => {
					null == tt || tt(e), null == ev || ev(e);
				},
				searchBarRef: eU,
				onFocus: eN,
				autoFocus: eO,
				accessory: eR,
				headerClassName: eh,
				hasTabWrapper: p,
				diversitySurrogate: eK,
				isBurstReaction: ex,
				onBurstReactionToggle: () => {
					var e;
					eG(!ex), null === (e = eU.current) || void 0 === e || e.focus();
				},
				renderHeader: eS
			}),
			ts = [];
		o === ee.Hz.REACTION && ts.push(E.z.SUPER_REACTIONS_NITRO_MARKETING), !A.ZP.hasFavoriteEmojis(ew) && ts.push(E.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
		let to = (0, a.jsx)(m.Z, {
			...ej,
			children: (0, a.jsxs)(tr, {
				id: X.cZ,
				'aria-labelledby': p ? X.td : void 0,
				role: p ? 'tabpanel' : void 0,
				className: l()(et.wrapper, {
					[et.emojiPickerHasTabWrapper]: p,
					[et.isBurstReactionPicker]: ex && eB
				}),
				children: [
					p ? null : ta,
					(0, a.jsxs)('div', {
						className: l()(et.emojiPicker, ef),
						onScroll: ei,
						children: [
							p ? ta : null,
							(0, a.jsxs)('div', {
								className: et.bodyWrapper,
								ref: eM,
								children: [
									(0, a.jsx)(q.Z, {
										channel: u,
										closePopout: d
									}),
									(0, a.jsx)(S.ZP, {
										contentTypes: ts,
										children: (e) => {
											let { visibleContent: t, markAsDismissed: n } = e;
											if (t === E.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, a.jsx)(Y.Z, { markAsDismissed: () => n(J.L.UNKNOWN) });
										}
									}),
									eT
										? null
										: (0, a.jsx)('div', {
												className: et.emojiPickerListWrapper,
												id: X.Vr,
												...te,
												children: ti
													? (0, a.jsx)(z.Z, {
															collapsedSections: eX,
															diversitySurrogate: eK,
															emojiGrid: e2,
															emojiListRef: eP,
															emojiSize: f,
															getEmojiItemProps: e8,
															getEmojiRowProps: e9,
															gridWidth: eJ,
															isUsingKeyboardNavigation: tn,
															onEmojiSelect: (e, t) => {
																e6(e, {
																	...t,
																	isBurst: ex
																});
															},
															setUpsellConfigs: eD,
															rowCount: e2.length,
															rowCountBySection: e0,
															sectionDescriptors: e1,
															setCollapsedSections: e$,
															channelGuildId: ew,
															messageId: eg,
															isBurstReaction: ex,
															listHeaderClassName: eA
														})
													: null
											})
								]
							}),
							(0, a.jsx)(K.k, {
								emojiGrid: e2,
								className: et.inspector,
								guildId: ew,
								pickerIntention: o,
								channel: u
							}),
							i
						]
					}),
					eT
						? null
						: (0, a.jsx)(Z.Z, {
								className: et.categoryList,
								emojiListRef: eP,
								sectionDescriptors: e1,
								intention: o,
								channel: u
							})
				]
			})
		});
		return (0, a.jsx)(g.Gt, {
			value: eW,
			children: to
		});
	})
);
