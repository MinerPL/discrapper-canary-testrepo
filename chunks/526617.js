n.d(t, {
	O: function () {
		return q;
	},
	Z: function () {
		return J;
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
	c = n(788911),
	d = n(2052),
	_ = n(100527),
	E = n(906732),
	f = n(313201),
	h = n(880949),
	p = n(806966),
	I = n(28546),
	m = n(468954),
	T = n(53691),
	g = n(75145),
	S = n(631771),
	A = n(609218),
	N = n(695346),
	v = n(594174),
	O = n(979651),
	R = n(259580),
	C = n(626135),
	y = n(74538),
	D = n(135869),
	L = n(763296),
	b = n(697426),
	M = n(242291),
	P = n(22382),
	U = n(747071),
	w = n(421673),
	x = n(663215),
	G = n(409673),
	k = n(347072),
	B = n(835648),
	F = n(650743),
	V = n(394740),
	H = n(343747),
	Z = n(981631),
	Y = n(474936),
	j = n(689938),
	W = n(477611);
let K = [8, 0, 8, 0],
	z = 32 + g.K;
function q(e, t, n) {
	return (null == n && e.type === b.bg.GUILD && !t) || (e.type === b.bg.GUILD && e.guild.id !== n && !t);
}
function Q(e) {
	let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: a, isSectionNitroLocked: o, showNitroDivider: u } = e;
	return (0, r.jsxs)(r.Fragment, {
		children: [
			u &&
				(0, r.jsx)(g.Z, {
					colorOpacity: 0.35,
					glowOpacity: 0.35
				}),
			(0, r.jsx)('div', {
				className: s()(W.sectionContainer, { [W.sectionContainerNitroLocked]: o }),
				children: (0, r.jsx)(l.Clickable, {
					className: s()(W.sectionHeader, { [W.notFirstSectionHeader]: 0 !== a }),
					onClick: i,
					'aria-expanded': !n,
					children: (0, r.jsxs)('div', {
						className: W.sectionHeaderContent,
						children: [
							(function () {
								switch (t.type) {
									case b.bg.FAVORITES:
										return (0, r.jsx)(l.StarIcon, {
											size: 'xs',
											color: 'currentColor',
											className: W.headerIcon
										});
									case b.bg.RECENTLY_HEARD:
										return (0, r.jsx)(l.ClockIcon, {
											size: 'custom',
											width: 20,
											height: 20,
											color: 'currentColor',
											className: W.headerIcon
										});
									case b.bg.FREQUENTLY_USED:
										return (0, r.jsx)(l.AnalyticsIcon, { className: W.headerIcon });
									case b.bg.GUILD:
										return (0, r.jsx)(h.Z, {
											guild: t.guild,
											height: 16,
											width: 16
										});
									case b.bg.DEFAULTS:
										return (0, r.jsx)(l.ClydeIcon, {
											size: 'custom',
											width: 28,
											height: 28,
											color: 'currentColor',
											className: W.headerIcon
										});
									case b.bg.SEARCH:
										return (0, r.jsx)(l.MagnifyingGlassIcon, {
											size: 'md',
											color: 'currentColor',
											className: W.headerIcon
										});
								}
							})(),
							(0, r.jsx)(l.Heading, {
								variant: 'eyebrow',
								color: 'none',
								className: W.sectionTitle,
								children: (function () {
									switch (t.type) {
										case b.bg.FAVORITES:
											return j.Z.Messages.FAVORITES;
										case b.bg.RECENTLY_HEARD:
											return j.Z.Messages.RECENTLY_HEARD;
										case b.bg.FREQUENTLY_USED:
											return j.Z.Messages.FREQUENTLY_USED;
										case b.bg.GUILD:
											return t.guild.name;
										case b.bg.DEFAULTS:
											return j.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
										case b.bg.SEARCH:
											return j.Z.Messages.SEARCH_RESULTS_SECTION_LABEL;
									}
								})()
							}),
							(0, r.jsx)(R.Z, {
								className: W.headerIcon,
								direction: n ? R.Z.Directions.RIGHT : R.Z.Directions.DOWN
							})
						]
					})
				})
			})
		]
	});
}
function X() {
	return (0, r.jsx)(c.Z, { message: j.Z.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY });
}
function $(e) {
	let {
			descriptors: t,
			soundButtonProps: n,
			rowIndex: a,
			isLastRow: o,
			isUsingKeyboardNavigation: l,
			suppressPlaySound: u,
			gridRowProps: c,
			getItemProps: d,
			onSelectItem: _,
			onItemMouseEnter: E,
			buttonOverlay: f,
			isNitroLocked: h,
			shouldShowUpsell: I
		} = e,
		m = p.Wq.useStore((e) => e.inspectedExpressionPosition);
	return (0, r.jsx)('ul', {
		...c,
		className: s()(W.soundRow, {
			[W.soundRowNitroLocked]: h,
			[W.lastSoundRow]: o
		}),
		children: t.map((e, t) => {
			let r = 'item-'.concat(t),
				s = l && m.rowIndex === a && m.columnIndex === t;
			switch (e.item.type) {
				case b.vB.SOUND:
					return (0, i.createElement)(G.ZP, {
						...d(t),
						...n,
						key: ''.concat(r, '-').concat(e.item.sound.soundId),
						sound: e.item.sound,
						suppressPlaySound: u,
						focused: s,
						onMouseEnter: () => E(t),
						onSelectItem: () => _(e),
						enableSecondaryActions: !0,
						buttonOverlay: f,
						inNitroLockedSection: h,
						showLockForDisabledSound: I
					});
				case b.vB.ADD_SOUND:
					return (0, i.createElement)(k.Z, {
						...d(t),
						key: r,
						guild: e.item.guild,
						focused: s
					});
			}
		})
	});
}
function J(e) {
	let {
			guildId: t,
			channel: a,
			containerWidth: s,
			onClose: c,
			onSelect: h,
			suppressPlaySound: g = !1,
			shouldShowUpsell: R = !0,
			gridNotice: G,
			soundButtonOverlay: k,
			listPadding: J,
			renderHeader: ee,
			defaultSoundsOnly: et = !1
		} = e,
		{ currentPreviewRef: en } = i.useContext(D.Z),
		{ analyticsLocations: er } = (0, E.ZP)(),
		{ analyticsLocations: ei } = (0, E.ZP)(_.Z.PREMIUM_UPSELL),
		{ location: ea } = (0, d.O)(),
		es = i.useMemo(
			() => ({
				...ea,
				section: Z.jXE.SOUNDBOARD_SOUND_PICKER
			}),
			[ea]
		),
		[eo, el] = i.useState(null),
		eu = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
		ec = (0, y.I5)(eu, Y.p9.TIER_2),
		ed = (0, o.e7)([O.Z], () => {
			var e;
			return O.Z.getVoiceState(t, null !== (e = null == eu ? void 0 : eu.id) && void 0 !== e ? e : Z.lds);
		}),
		e_ = (null == ed ? void 0 : ed.selfDeaf) || (null == ed ? void 0 : ed.mute) || (null == ed ? void 0 : ed.suppress),
		eE = (0, I.Iu)((e) => e.searchQuery),
		ef = null != eE && '' !== eE,
		eh = (0, f.Dt)(),
		{ categories: ep } = (0, x.ZP)(a, void 0, et),
		[eI, em] = i.useState([]),
		[eT, eg] = i.useState(!1),
		eS = (0, x.FS)(ep, eI, eE).filter((e) => e.items.length > 0),
		eA = eS.some((e) => !!(0, y._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
		eN = !ec && R && eA,
		{
			enableInlineUpsell: ev,
			enableRoadblock: eO,
			enableRoadblockWithSocialProof: eR
		} = S.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: eN }),
		eC = eN && ev,
		ey = N.T4.useSetting(),
		eD = i.useMemo(() => new Set(ey), [ey]),
		eL = null == a,
		eb = y.ZP.canUseCustomCallSounds(eu),
		eM = i.useCallback(
			(e) => {
				eD.has(e) ? eD.delete(e) : eD.add(e), N.T4.updateSetting(Array.from(eD));
			},
			[eD]
		),
		eP = i.useCallback(
			(e, t) => {
				if (!g && (0, M.Nq)(eu, e, a, !1)) {
					var n;
					(0, M.GN)(e, null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : Z.lds, t),
						ef &&
							C.default.track(Z.rMx.SEARCH_RESULT_SELECTED, {
								search_type: Z.aib.SOUNDBOARD,
								channel_id: null == a ? void 0 : a.id,
								query: eE,
								location_stack: t
							});
				} else {
					if ((0, M.Nq)(eu, e, a)) return;
					R && el(e);
				}
			},
			[g, eu, a, R, ef, eE]
		),
		eU = i.useCallback(
			(e) => {
				switch (e.item.type) {
					case b.vB.SOUND:
						return null == h || h(e.item.sound), eP(e.item.sound, er);
					case b.vB.ADD_SOUND:
						return (0, H.Z)(e.item.guild.id);
				}
			},
			[er, eP, h]
		),
		ew = i.useCallback(
			(e, n, i, s, o) => {
				let l = eS[i.sectionIndex],
					u = R && q(l.categoryInfo, ec, t),
					c = i.sectionIndex === eS.length - 1 && i.rowIndex === i.totalRowCount - 1;
				return (0, r.jsx)(
					$,
					{
						descriptors: e,
						rowIndex: i.rowIndex,
						isLastRow: c,
						isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
						gridRowProps: n,
						getItemProps: s,
						onItemMouseEnter: o,
						suppressPlaySound: g,
						onSelectItem: eU,
						soundButtonProps: {
							channel: a,
							interactive: eL ? eb : !e_,
							forceSecondaryActions: eL || ev,
							analyticsLocations: er
						},
						buttonOverlay: k,
						isNitroLocked: u && eC,
						shouldShowUpsell: R
					},
					'row-'.concat(n['aria-rowindex'])
				);
			},
			[eU, a, e_, g, er, eL, eb, k, t, eS, R, ec, eC, ev]
		),
		ex = i.useCallback(
			(e, t) => {
				if (e <= 0 || !R) return !1;
				let n = eS[e],
					r = eS[e - 1],
					i = q(n.categoryInfo, ec, t),
					a = q(r.categoryInfo, ec, t);
				return i && !a;
			},
			[eS, R, ec]
		),
		eG = i.useCallback((e) => (0 === e ? 16 : ex(e, t) ? z : 32), [t, ex]),
		ek = i.useCallback(
			(e) => {
				let t = e === eS.length - 1;
				return eC && t ? 60 : 0;
			},
			[eS, eC]
		),
		eB = i.useCallback(
			(e, n) => {
				let i = ''.concat(e.key),
					a = R && q(e.categoryInfo, ec, t),
					s = ex(n, t);
				return (0, r.jsx)(
					Q,
					{
						categoryInfo: e.categoryInfo,
						toggleCollapsed: () => eM(i),
						collapsed: eD.has(i),
						index: n,
						isSectionNitroLocked: a && eC,
						showNitroDivider: s && eC
					},
					'header-'.concat(i)
				);
			},
			[eD, eM, t, ex, R, ec, eC]
		),
		eF = i.useCallback(
			(e, t) => {
				let n = t === eS.length - 1;
				return eC && n ? (0, r.jsx)('div', { className: W.sectionFooter }) : null;
			},
			[eS, eC]
		),
		eV = i.useCallback((e) => em((0, w.ZP)(e, ep, eu, a, er)), [a, eu, ep, er]),
		eH = i.useCallback((e) => {
			(0, u.jW)(e, async () => {
				let { default: e } = await n.e('56049').then(n.bind(n, 338991));
				return (t) => (0, r.jsx)(e, { ...t });
			});
		}, []),
		eZ = i.useCallback(
			() =>
				(0, r.jsx)(l.Clickable, {
					tabIndex: 0,
					className: W.settingsClickArea,
					onClick: eH,
					'aria-label': j.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
					children: (0, r.jsx)(l.VoiceNormalIcon, {
						size: 'md',
						color: 'currentColor',
						className: W.settingsIcon
					})
				}),
			[eH]
		),
		eY = i.useCallback(
			(e) =>
				(0, r.jsx)(B.Z, {
					soundboardListRef: e,
					categories: ep,
					shouldUpsellLockedCategories: eC,
					listPadding: J,
					guildId: t
				}),
			[ep, J, t, eC]
		),
		ej = () => {
			let e = L.Z.getSoundById('3');
			null != e && el(e);
		},
		eW = i.useCallback(() => {
			let e = (0, y.Px)(Y.p9.TIER_2);
			return j.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_POPUP_LABEL_V2.format({
				nitroTierName: e,
				onClick: ej
			});
		}, []),
		eK = i.useCallback(
			() =>
				eC
					? (0, r.jsx)(T.p, {
							showUpsell: eT,
							upsellText: eW(),
							ctaText: j.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
							ctaAnalyticsObject: { section: Z.jXE.SOUND_PICKER_FLOATING_UPSELL }
						})
					: null,
			[eW, eT, eC]
		),
		ez = i.useCallback(
			(e) => {
				if ((null == e ? void 0 : e.item.type) === b.vB.SOUND) {
					var t;
					return (0, r.jsx)(F.Z, {
						closePicker: c,
						soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
					});
				}
				return null;
			},
			[c]
		),
		eq = i.useCallback(() => {
			var e;
			let t = L.Z.getSoundById('3'),
				n = new Audio((0, P.Z)('3'));
			null != en.current && en.current.pause(),
				(en.current = n),
				(n.currentTime = 0),
				(n.volume = (0, U.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1)),
				n.play();
		}, [en]);
	return (0, r.jsxs)(r.Fragment, {
		children: [
			null != eo
				? eO
					? (0, r.jsx)(A.Z, {
							containerContext: A.p.NONE,
							image: {
								url: 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
								width: 220,
								height: 132
							},
							title: j.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_TITLE,
							description: j.Z.Messages.PREMIUM_UPSELL_DESKTOP_FEATURE_SOUNDBOARD_DESCRIPTION,
							enableSocialProof: eR,
							analyticsLocationSection: Z.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
							upsellViewedTrackingData: {
								type: Y.cd.SOUND_PICKER_SOUND_CLICKED,
								is_external: !0,
								location: {
									...es,
									object: Z.qAy.SOUNDBOARD_SOUND
								},
								location_stack: ei,
								sku_id: y.ZP.getSkuIdForPremiumType(Y.p9.TIER_2)
							},
							onClose: () => el(null),
							onDisplay: eq
						})
					: (0, r.jsx)(V.Z, {
							onClose: () => el(null),
							closePopout: c,
							sound: eo,
							channel: a
						})
				: void 0,
			(0, r.jsx)(m.Z, {
				categories: eS,
				collapsedCategories: eD,
				containerWidth: s,
				store: p.Wq,
				onSelectItem: eU,
				onSearchExpressions: eV,
				hasSearchResults: eI.length > 0,
				defaultSearchPlaceholder: j.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
				renderRow: ew,
				renderSectionHeader: eB,
				renderSectionFooter: eF,
				renderCategoryList: eY,
				renderHeaderAccessories: eZ,
				rowHeight: 48,
				sectionHeaderHeight: eG,
				sectionFooterHeight: ek,
				listPadding: K,
				itemNodeWidth: 150,
				gridNavigatorId: eh,
				renderEmptySearchState: X,
				renderInspector: ez,
				gridNotice: G,
				renderHeader: ee,
				renderUpsell: eK,
				setShowUpsell: eg
			})
		]
	});
}
