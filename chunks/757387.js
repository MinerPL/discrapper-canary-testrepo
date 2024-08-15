t.r(n);
var i = t(735250);
t(470079);
var r = t(442837),
	u = t(481060),
	l = t(239091),
	a = t(883385),
	o = t(108843),
	d = t(911969),
	s = t(947440),
	c = t(100527),
	_ = t(441061),
	E = t(167675),
	I = t(737013),
	T = t(145474),
	N = t(299206),
	S = t(976192),
	A = t(819403),
	p = t(286694),
	O = t(592125),
	f = t(777658),
	M = t(858488),
	h = t(185457),
	Z = t(933409),
	R = t(570870),
	C = t(389052),
	g = t(24311),
	G = t(332576),
	m = t(710631),
	y = t(297047),
	D = t(88966),
	v = t(712301),
	U = t(991307),
	b = t(725119),
	P = t(931617),
	H = t(700994),
	L = t(332031),
	x = t(981631),
	B = t(689938);
n.default = (0, o.Z)(
	(0, a.Z)(
		function (e) {
			let { user: n, guildId: t, channel: a, showMediaItems: o = !1, showChatItems: c = !0, showChannelCallItems: F = !1, showModalItems: V = !0, showStageChannelItems: k = !1, context: w, onSelect: j, onHeightUpdate: K, viewingChannelId: W } = e,
				Y = {
					page: x.ZY5.GUILD_CHANNEL,
					section: x.jXE.CHAT_USERNAME,
					object: x.qAy.CONTEXT_MENU_ITEM
				},
				q = (0, b.Z)({
					userId: n.id,
					guildId: t,
					channelId: a.id
				}),
				z = (0, y.Z)(n, t, w),
				Q = (0, D.Z)(n.id, w),
				X = (0, L.Z)(n.id),
				$ = (0, g.Z)({
					user: n,
					context: w
				}),
				J = (0, h.Z)({
					user: n,
					guildId: t,
					channelId: a.id,
					context: w
				}),
				ee = (0, M.Z)({ user: n }),
				en = (0, H.Z)(n.id),
				et = (0, U.Z)(n.id),
				ei = (0, T.P)({
					userId: n.id,
					channelId: a.id,
					location: 'GuildChannelUserContextMenu'
				}),
				er = (0, S.Z)({
					guildId: t,
					userId: n.id,
					analyticsLocation: Y,
					context: w
				}),
				eu = (0, m.Z)({
					user: n,
					guildId: t
				}),
				el = (0, s.Z)(null, n),
				ea = (0, f.Z)(n),
				eo = (0, C.Z)({ user: n }),
				ed = (0, Z.Z)(n, t, a.id),
				es = (0, P.Z)(n.id, t),
				ec = (0, v.Z)(n, t),
				e_ = (0, N.Z)({
					id: n.id,
					label: B.Z.Messages.COPY_ID_USER
				}),
				eE = (0, G.Z)(n.id, a.id),
				eI = (0, E.Z)(n.id),
				eT = (0, _.Z)(a.id),
				eN = (0, A.Z)(n),
				eS = (0, p.Z)(n, t, a.id),
				eA = (0, r.e7)([O.Z], () => (null != W ? O.Z.getChannel(W) : null)),
				ep = (0, R.Z)({
					commandType: d.yU.USER,
					commandTargetId: n.id,
					channel: null != eA ? eA : a,
					guildId: t,
					onHeightUpdate: K,
					context: w
				}),
				eO = (0, I.Z)(n.id),
				ef = n.isNonUserBot();
			return (0, i.jsxs)(u.Menu, {
				navId: 'user-context',
				onClose: l.Zy,
				'aria-label': B.Z.Messages.USER_ACTIONS_MENU_LABEL,
				onSelect: j,
				children: [
					!ef &&
						(0, i.jsxs)(i.Fragment, {
							children: [
								(0, i.jsxs)(u.MenuGroup, {
									children: [eN, k && eS]
								}),
								(0, i.jsxs)(u.MenuGroup, {
									children: [V && q, c && z, Q, $, V && J, V && ee, X]
								}),
								o && (0, i.jsx)(u.MenuGroup, { children: en }),
								(0, i.jsx)(u.MenuGroup, { children: V && el }),
								(0, i.jsxs)(u.MenuGroup, {
									children: [o && et, o && ei, o && eE, V && er, ep, V && eu, ea, V && eo, F && eO]
								}),
								(0, i.jsx)(u.MenuGroup, { children: ed }),
								(0, i.jsxs)(u.MenuGroup, {
									children: [es, ec]
								}),
								F &&
									(0, i.jsxs)(u.MenuGroup, {
										children: [eT, eI]
									})
							]
						}),
					(0, i.jsx)(u.MenuGroup, { children: e_ })
				]
			});
		},
		{ object: x.qAy.CONTEXT_MENU }
	),
	[c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU]
);
