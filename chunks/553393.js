n(47120);
var r = n(735250),
	i = n(470079),
	a = n(338545),
	s = n(91192),
	o = n(442837),
	l = n(780384),
	u = n(481060),
	c = n(287734),
	d = n(872810),
	_ = n(393238),
	E = n(40851),
	f = n(607070),
	h = n(258609),
	p = n(382182),
	m = n(210887),
	I = n(592125),
	T = n(430824),
	g = n(496675),
	S = n(979651),
	A = n(617136),
	N = n(113434),
	v = n(497505),
	O = n(918701),
	R = n(602667),
	C = n(644646),
	y = n(667105),
	D = n(341907),
	L = n(46140),
	b = n(981631),
	M = n(231338),
	P = n(689938),
	U = n(637524);
let w = '11px';
function x(e, t) {
	return null != e && null != t && (0, p.p9)(t, S.Z, T.Z, g.Z, h.Z)[0];
}
t.Z = function (e) {
	var t, h, p;
	let { quest: T, memberListItemRef: g, applicationStream: S, position: G, closePopout: k, updatePosition: B } = e,
		F = (0, o.e7)([I.Z], () => {
			var e;
			return null !== (e = I.Z.getChannel(null == S ? void 0 : S.channelId)) && void 0 !== e ? e : null;
		}),
		V = (0, y.hf)({
			quest: T,
			location: v.jn.MEMBERS_LIST
		}),
		H = (0, N.tP)(T),
		Z = (null == T ? void 0 : null === (t = T.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
		Y = (null == T ? void 0 : null === (h = T.userStatus) || void 0 === h ? void 0 : h.enrolledAt) != null,
		j = (null == T ? void 0 : null === (p = T.userStatus) || void 0 === p ? void 0 : p.completedAt) != null,
		W = (0, o.e7)([m.Z], () => m.Z.getState().theme),
		K = (0, l.wj)(W) ? M.BR.DARK : M.BR.LIGHT,
		z = (0, o.e7)([f.Z], () => f.Z.useReducedMotion),
		{ ref: q, height: Q } = (0, _.Z)(),
		[X, $] = i.useState(z),
		J = (0, E.Aq)(),
		ee = (0, s.eg)();
	i.useEffect(() => {
		let e = ee.current;
		return (
			null == e || e.addEventListener('scroll', k),
			() => {
				null == e || e.removeEventListener('scroll', k);
			}
		);
	}, [k, ee]),
		i.useEffect(() => {
			let e = ee.current,
				t = g.current;
			if (null == e || null == t) return;
			let n = new MutationObserver(() => B());
			return (
				n.observe(e, {
					childList: !0,
					subtree: !0
				}),
				() => {
					n.disconnect();
				}
			);
		}, [g, ee, B]);
	let et = (0, u.useSpring)({
			from: { height: 0 },
			height: null != Q ? Q : 0,
			config: {
				tension: 450,
				friction: 45
			},
			onRest: () => $(!0)
		}),
		en = (0, u.useTransition)(X, {
			from: {
				opacity: 0,
				scale: 0
			},
			enter: {
				opacity: 1,
				scale: 1
			}
		}),
		er = () => {
			J.dispatch(b.CkL.POPOUT_CLOSE);
		},
		ei = 'top' === G ? ''.concat('4px', ' ').concat('4px', ' 0 0') : '0 0 '.concat('4px', ' ').concat('4px');
	if (null == T || H || (Z && !x(S, F))) return null;
	let ea = () => {
			(0, A._3)({
				questId: T.id,
				questContent: v.jn.MEMBERS_LIST,
				questContentCTA: A.jZ.OPEN_DISCLOSURE,
				trackGuildAndChannelMetadata: !0
			}),
				(0, u.openModalLazy)(async () => {
					let { default: e } = await n.e('4266').then(n.bind(n, 316210));
					return (t) =>
						(0, r.jsx)(e, {
							...t,
							questContent: v.jn.MEMBERS_LIST,
							quest: T
						});
				});
		},
		es = () => {
			(0, A._3)({
				questId: T.id,
				questContent: v.jn.MEMBERS_LIST,
				questContentCTA: A.jZ.LEARN_MORE,
				trackGuildAndChannelMetadata: !0
			}),
				(0, D.navigateToQuestHome)(L.dr.MEMBERS_LIST, T.id);
		},
		eo = (e) => {
			e.stopPropagation(), ea();
		},
		el = () => {
			if (x(S, F) && null != F)
				return (
					(0, A._3)({
						questId: T.id,
						questContent: v.jn.MEMBERS_LIST,
						questContentCTA: A.jZ.WATCH_STREAM,
						trackGuildAndChannelMetadata: !0
					}),
					c.default.selectVoiceChannel(F.id),
					(0, d.iV)(S)
				);
			es();
		},
		eu =
			j && !Z
				? {
						headerText: P.Z.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
						ctaText: P.Z.Messages.QUESTS_CLAIM_REWARD,
						handleClickCta: V,
						tileAssetType: 'reward'
					}
				: Y && !Z
					? {
							headerText: P.Z.Messages.QUESTS_MEMBERS_LIST_FINISH,
							ctaText: P.Z.Messages.QUESTS_CHECK_PROGRESS,
							handleClickCta: es,
							tileAssetType: 'reward'
						}
					: x(S, F)
						? {
								headerText: P.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
								ctaText: P.Z.Messages.QUESTS_JOIN_ME,
								handleClickCta: el,
								tileAssetType: 'game'
							}
						: {
								headerText: P.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
								ctaText: P.Z.Messages.QUESTS_UNLOCK_REWARDS,
								handleClickCta: es,
								tileAssetType: 'game'
							};
	return (0, r.jsx)(R.A, {
		questOrQuests: T,
		questContent: v.jn.MEMBERS_LIST,
		trackGuildAndChannelMetadata: !0,
		children: (e) => {
			var t, n;
			return (0, r.jsx)(a.animated.div, {
				ref: (t) => {
					e.current = t;
				},
				'aria-expanded': X,
				className: U.wrapper,
				style: {
					width: null !== (n = null === (t = g.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== n ? n : 222,
					height: et.height,
					overflow: X ? 'visible' : 'hidden',
					borderRadius: ei
				},
				children: (0, r.jsxs)('div', {
					ref: (e) => {
						q.current = e;
					},
					className: U.container,
					style: { borderRadius: ei },
					children: [
						(0, r.jsxs)('div', {
							className: U.top,
							children: [
								(0, r.jsxs)('div', {
									className: U.left,
									children: [
										(0, r.jsx)(u.Heading, {
											variant: 'heading-sm/semibold',
											children: eu.headerText
										}),
										(0, r.jsxs)(u.Clickable, {
											className: U.help,
											onClick: (e) => {
												er(), eo(e);
											},
											children: [
												(0, r.jsx)(u.Text, {
													variant: 'text-xs/medium',
													color: 'text-muted',
													className: U.helpText,
													children: P.Z.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({ gamePublisher: T.config.messages.gamePublisher })
												}),
												(0, r.jsx)(u.CircleQuestionIcon, {
													size: 'custom',
													className: U.helpIcon,
													width: w,
													height: w,
													color: u.tokens.colors.INTERACTIVE_NORMAL
												})
											]
										})
									]
								}),
								(0, r.jsx)('div', {
									className: U.right,
									children: (0, r.jsxs)('div', {
										className: U.imgWrapper,
										children: [
											en(
												(e, t) =>
													t &&
													(0, r.jsx)(a.animated.div, {
														style: e,
														className: U.imgUnderlay
													})
											),
											'game' === eu.tileAssetType &&
												(0, r.jsx)('img', {
													alt: P.Z.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
														gameTitle: T.config.messages.gameTitle,
														gamePublisher: T.config.messages.gamePublisher
													}),
													className: U.assetTile,
													src: (0, O.uo)(T, K)
												}),
											'reward' === eu.tileAssetType &&
												(0, r.jsx)(C.Z, {
													className: U.assetTile,
													quest: T,
													questContent: v.jn.MEMBERS_LIST,
													learnMoreStyle: 'icon',
													location: L.dr.MEMBERS_LIST,
													onClick: er
												})
										]
									})
								})
							]
						}),
						(0, r.jsx)(u.Button, {
							onClick: () => {
								er(), eu.handleClickCta();
							},
							color: u.Button.Colors.CUSTOM,
							className: U.ctaButton,
							children: eu.ctaText
						})
					]
				})
			});
		}
	});
};
