n.d(t, {
	Z: function () {
		return H;
	}
}),
	n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(278074),
	o = n(481060),
	l = n(726542),
	u = n(394821),
	c = n(841784),
	d = n(833664),
	_ = n(834353),
	E = n(802856),
	f = n(420660),
	h = n(100527),
	p = n(906732),
	m = n(314091),
	I = n(180335),
	T = n(810568),
	g = n(168524),
	S = n(833858),
	A = n(223135),
	N = n(769654),
	v = n(502762),
	O = n(652853),
	R = n(979038),
	C = n(448980),
	y = n(194811),
	D = n(60241),
	L = n(373826),
	b = n(315324),
	M = n(582123),
	P = n(290274),
	U = n(553375),
	w = n(318134),
	x = n(228168),
	G = n(981631),
	k = n(701488),
	B = n(689938),
	F = n(139665);
let { getAssetImage: V } = n(81063);
function H(e) {
	let { user: t, currentUser: n, activity: i, application: H, guild: Z, channel: Y, className: j, onClose: W } = e,
		{ analyticsLocations: K } = (0, p.ZP)(h.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
		{ profileType: z } = (0, O.z)(),
		q = { [F.fullSize]: z === x.y0.FULL_SIZE },
		Q = (0, I.Bq)({
			activity: i,
			user: t
		}),
		X = (0, g.Z)({
			location: 'UserProfileActivityCard',
			source: T.m1.UserProfile,
			trackEntryPointImpression: !0,
			...(0, U.n)({
				user: t,
				activity: i,
				entry: Q
			})
		}),
		{ onAction: $, trackViewRef: J } = (0, w.Z)({
			display: 'live',
			user: t,
			activity: i,
			entry: Q,
			analyticsLocations: K
		}),
		ee = (0, s.EQ)(i.type)
			.with(G.IIU.PLAYING, () => B.Z.Messages.USER_ACTIVITY_PLAYING)
			.with(G.IIU.STREAMING, () => B.Z.Messages.USER_ACTIVITY_STREAMING)
			.with(G.IIU.LISTENING, () => B.Z.Messages.USER_ACTIVITY_LISTENING_TO)
			.with(G.IIU.WATCHING, () => B.Z.Messages.USER_ACTIVITY_WATCHING)
			.with(G.IIU.HANG_STATUS, () => B.Z.Messages.USER_ACTIVITY_CURRENTLY)
			.with(G.IIU.COMPETING, () => B.Z.Messages.USER_ACTIVITY_PLAYING)
			.otherwise(() => null),
		et = () => {
			var e, t, n, a;
			let s = (0, u.Z)(i) ? 'crunchyroll' : 'default';
			if (i.type === G.IIU.HANG_STATUS)
				return (0, r.jsx)('div', {
					className: F.hangStatusIconBackground,
					children: (0, r.jsx)(A.Z, {
						hangStatusActivity: i,
						className: F.hangStatusIcon
					})
				});
			if ((0, c.Z)(i) && null != H)
				return (0, r.jsx)(D.ZP, {
					image: {
						src: H.getIconURL(D.WQ),
						alt: B.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({ applicationName: H.name })
					}
				});
			let o = null === (e = i.assets) || void 0 === e ? void 0 : e.large_image,
				f = null === (t = i.assets) || void 0 === t ? void 0 : t.small_image,
				h = null === (n = i.assets) || void 0 === n ? void 0 : n.large_text,
				p = null === (a = i.assets) || void 0 === a ? void 0 : a.small_text,
				m =
					null == X
						? void 0
						: () => {
								$({ action: 'PRESS_GAME_IMAGE' }), X();
							};
			if (null == o && null == f && (0, E.Z)(i)) {
				let e = l.Z.get(G.ABu.XBOX).icon.customPNG;
				return (0, r.jsx)(D.ZP, {
					image: {
						src: e,
						alt: B.Z.Messages.XBOX
					},
					onClick: m
				});
			}
			if (null == o && null == f && (0, _.Z)(i)) {
				let e = l.Z.get(G.ABu.PLAYSTATION).icon.customPNG;
				return (0, r.jsx)(D.ZP, {
					image: {
						src: e,
						alt: B.Z.Messages.PLAYSTATION
					},
					onClick: m
				});
			}
			return null == o && null != H
				? (0, r.jsx)(D.ZP, {
						image: {
							src: H.getIconURL(D.WQ),
							alt: B.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({ applicationName: H.name })
						},
						onClick: m,
						aspectRatio: s
					})
				: null == o && null != f
					? (0, r.jsx)(D.ZP, {
							image: {
								src: V(i.application_id, f, D.WQ),
								text: p
							},
							onClick: m,
							aspectRatio: s
						})
					: null != f && (0, d.Z)(i)
						? (0, r.jsx)(D.ZP, {
								image: {
									src: V(i.application_id, o, D.WQ),
									text: h
								},
								richImage: {
									src: V(i.application_id, f, D.Bp),
									text: p
								},
								onClick: m
							})
						: (0, r.jsx)(D.ZP, {
								image: {
									src: V(i.application_id, o, D.WQ),
									text: h
								},
								onClick: m,
								aspectRatio: s
							});
		},
		en = () => {
			var e;
			return i.type === G.IIU.HANG_STATUS
				? (0, r.jsx)(L.Z, {
						variant: 'heading-sm/semibold',
						text: (0, S.O8)(i)
					})
				: (0, f.Z)(i) && null != Y
					? (0, r.jsxs)('div', {
							className: F.voiceChannelText,
							children: [
								(0, r.jsx)(o.VoiceNormalIcon, {
									size: 'xxs',
									color: o.tokens.colors.TEXT_NORMAL,
									className: F.voiceIcon
								}),
								(0, r.jsx)(L.Z, {
									variant: 'heading-sm/semibold',
									text: Y.name
								})
							]
						})
					: (0, d.Z)(i)
						? (0, r.jsx)(L.Z, {
								variant: 'heading-sm/semibold',
								text: i.name
							})
						: (0, r.jsx)(L.Z, {
								variant: 'heading-sm/semibold',
								text: null !== (e = i.details) && void 0 !== e ? e : i.name
							});
		},
		er = () =>
			i.type === G.IIU.HANG_STATUS
				? null
				: (0, f.Z)(i) && null != Z
					? (0, r.jsx)(L.Z, {
							variant: 'text-xs/normal',
							text: B.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: Z.name }),
							onClick: () => {
								(0, N.X)(Z.id), $({ action: 'OPEN_VOICE_GUILD' }), null == W || W();
							}
						})
					: (0, d.Z)(i)
						? (0, r.jsx)(L.Z, {
								variant: 'text-xs/normal',
								text: i.details
							})
						: (0, r.jsx)(L.Z, {
								text: i.state,
								variant: 'text-xs/normal'
							}),
		ei = () => {
			var e;
			return i.type === G.IIU.WATCHING
				? null
				: (0, d.Z)(i)
					? ea()
					: (0, r.jsx)(L.Z, {
							text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
							variant: 'text-xs/normal'
						});
		},
		ea = () => {
			var e, t, n, a;
			return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === k.Zc
				? (0, r.jsxs)('div', {
						className: F.gameState,
						children: [
							(0, r.jsx)(L.Z, {
								variant: 'text-xs/normal',
								text: i.state
							}),
							(0, r.jsx)(L.Z, {
								variant: 'text-xs/normal',
								text: B.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
									count: '0',
									max: null !== (a = null == H ? void 0 : H.getMaxParticipants()) && void 0 !== a ? a : 0
								})
							})
						]
					})
				: (0, c.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
					? (0, r.jsxs)('div', {
							className: F.gameState,
							children: [
								(0, r.jsx)(L.Z, {
									variant: 'text-xs/normal',
									text: i.state
								}),
								(0, r.jsx)(L.Z, {
									variant: 'text-xs/normal',
									text: B.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
										count: i.party.size[0],
										max: i.party.size[1]
									})
								})
							]
						})
					: null == i.party
						? (0, r.jsx)(L.Z, {
								variant: 'text-xs/normal',
								text: i.state
							})
						: null;
		},
		es = () =>
			null == X
				? (0, r.jsxs)('div', {
						className: F.details,
						children: [
							(0, r.jsxs)('div', {
								children: [en(), er(), ei()]
							}),
							(0, r.jsx)(C.Z, {
								user: t,
								activity: i,
								className: F.badges
							})
						]
					})
				: (0, r.jsxs)('div', {
						className: F.details,
						children: [
							(0, r.jsxs)(o.Clickable, {
								className: F.clickable,
								onClick: () => {
									$({ action: 'OPEN_GAME_PROFILE' }), X(), null == W || W();
								},
								children: [en(), er(), ei()]
							}),
							(0, r.jsx)(C.Z, {
								user: t,
								activity: i,
								className: F.badges
							})
						]
					}),
		eo = () =>
			null == Z || null == Y
				? null
				: (0, r.jsxs)(r.Fragment, {
						children: [
							(0, r.jsx)('div', { className: F.voiceChannelDivider }),
							(0, r.jsx)(b.Z, {
								user: t,
								guild: Z,
								channel: Y,
								onAction: $,
								onClose: W
							})
						]
					}),
		el = () =>
			t.id === n.id
				? null
				: (0, r.jsx)('div', {
						className: a()(F.actions, q),
						children: (0, r.jsx)(R.Z, {
							activity: i,
							user: t,
							currentUser: n,
							onAction: $,
							onClose: W
						})
					});
	return (0, r.jsx)(p.Gt, {
		value: K,
		children: (0, r.jsx)(M.Z, {
			user: t,
			onClose: W,
			children: (e) => {
				let { onAutoDismiss: n } = e;
				return (0, r.jsxs)(v.Z.Overlay, {
					className: a()(F.card, j),
					ref: J,
					children: [
						(0, r.jsx)(y.Z, {
							text: ee,
							platform: (0, m.ZH)(i),
							tags: (0, r.jsx)(P.Z, {
								display: 'live',
								user: t,
								activity: i,
								entry: Q,
								onClose: W,
								onRequestOpen: n
							})
						}),
						(0, r.jsxs)('div', {
							className: F.body,
							children: [
								(0, r.jsxs)('div', {
									className: a()(F.content, q),
									children: [et(), es(), z === x.y0.FULL_SIZE && el()]
								}),
								eo()
							]
						}),
						z !== x.y0.FULL_SIZE && el()
					]
				});
			}
		})
	});
}
