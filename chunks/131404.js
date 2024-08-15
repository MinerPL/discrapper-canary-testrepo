t.r(n);
var i = t(735250);
t(470079);
var a = t(481060),
	l = t(239091),
	r = t(883385),
	u = t(108843),
	s = t(911969),
	o = t(947440),
	d = t(100527),
	c = t(441061),
	_ = t(167675),
	M = t(737013),
	I = t(145474),
	f = t(702321),
	E = t(461535),
	N = t(776568),
	T = t(299206),
	A = t(895563),
	Z = t(212205),
	C = t(62420),
	h = t(455395),
	x = t(581052),
	g = t(875252),
	O = t(122074),
	S = t(819403),
	m = t(777658),
	R = t(858488),
	p = t(185457),
	U = t(570870),
	v = t(389052),
	j = t(24311),
	G = t(794973),
	P = t(332576),
	y = t(710631),
	D = t(558924),
	b = t(991307),
	L = t(725119),
	F = t(700994),
	V = t(332031),
	k = t(981631),
	Y = t(689938);
n.default = (0, u.Z)(
	(0, r.Z)(
		function (e) {
			let {
					user: n,
					channel: t,
					channelSelected: r = !1,
					showMute: u = !0,
					showMediaItems: d = !1,
					showChannelCallItems: z = !1,
					showModalItems: w = !0,
					targetIsUser: B = !1,
					context: K,
					onSelect: W,
					onHeightUpdate: H
				} = e,
				X = (0, L.Z)({
					userId: n.id,
					guildId: null
				}),
				q = (0, j.Z)({
					user: n,
					context: K
				}),
				Q = (0, p.Z)({
					user: n,
					channelId: t.id,
					context: K
				}),
				J = (0, R.Z)({ user: n }),
				$ = (0, V.Z)(n.id),
				ee = (0, G.Z)(t.id, r),
				en = (0, y.Z)({ user: n }),
				et = (0, o.Z)(null, n),
				ei = (0, F.Z)(n.id),
				ea = (0, D.Z)(n.id, t.id),
				el = (0, m.Z)(n),
				er = (0, b.Z)(n.id),
				eu = (0, I.P)({
					userId: n.id,
					channelId: t.id,
					location: 'DMUserContextMenu'
				}),
				es = (0, P.Z)(n.id, t.id),
				eo = (0, v.Z)({ user: n }),
				ed = (0, N.ZP)(t),
				ec = (0, O.Uf)(k.aIL, t.id, 'trailing'),
				e_ = (0, T.Z)({
					id: n.id,
					label: Y.Z.Messages.COPY_ID_USER
				}),
				eM = (0, T.Z)({
					id: t.id,
					label: Y.Z.Messages.COPY_ID_CHANNEL
				}),
				eI = (0, E.Z)(t),
				ef = (0, _.Z)(n.id),
				eE = (0, c.Z)(t.id),
				eN = (0, S.Z)(n),
				eT = (0, M.Z)(n.id),
				eA = (0, U.Z)({
					commandType: s.yU.USER,
					commandTargetId: n.id,
					channel: t,
					guildId: void 0,
					onHeightUpdate: H
				}),
				eZ = (0, A.l)(t),
				eC = (0, A.P)(t),
				eh = (0, Z.Z)(t),
				ex = (0, C.Z)(t),
				eg = (0, x.V)(t),
				eO = (0, h.i)(t),
				eS = (0, g.H)(t),
				em = t.isManaged(),
				eR = n.isNonUserBot();
			return (0, i.jsxs)(a.Menu, {
				navId: 'user-context',
				onClose: l.Zy,
				'aria-label': Y.Z.Messages.USER_ACTIONS_MENU_LABEL,
				onSelect: W,
				children: [
					(0, i.jsx)(a.MenuGroup, { children: !(eR && !(0, f.Z)(t.id)) && eI }),
					(0, i.jsx)(a.MenuGroup, { children: eg }),
					(0, i.jsx)(a.MenuGroup, { children: eS }),
					(0, i.jsx)(a.MenuGroup, { children: eO }),
					(0, i.jsxs)(a.MenuGroup, {
						children: [eZ, eh, ex]
					}),
					(0, i.jsx)(a.MenuGroup, { children: !eR && eN }),
					(0, i.jsxs)(a.MenuGroup, {
						children: [
							!eR &&
								(0, i.jsxs)(i.Fragment, {
									children: [w && X, q, !em && ea, w && Q, w && J, $]
								}),
							(0, f.Z)(t.id) && X,
							ee
						]
					}),
					!eR &&
						(0, i.jsxs)(i.Fragment, {
							children: [
								(0, i.jsx)(a.MenuGroup, { children: d && ei }),
								(0, i.jsx)(a.MenuGroup, { children: w && et }),
								(0, i.jsxs)(a.MenuGroup, {
									children: [d && er, w && eu, d && es, eA, w && en, el, w && eo, d && eT]
								}),
								(0, i.jsxs)(a.MenuGroup, {
									children: [u && ed, ec]
								}),
								z &&
									(0, i.jsxs)(a.MenuGroup, {
										children: [eE, ef]
									})
							]
						}),
					(0, f.Z)(t.id) &&
						(0, i.jsxs)(a.MenuGroup, {
							children: [u && ed, ec]
						}),
					(0, i.jsx)(a.MenuGroup, { children: eC }),
					(0, i.jsxs)(a.MenuGroup, {
						children: [e_, !B && eM]
					})
				]
			});
		},
		{ object: k.qAy.CONTEXT_MENU }
	),
	[d.Z.CONTEXT_MENU, d.Z.DM_USER_MENU]
);
