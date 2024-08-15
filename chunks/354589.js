a.r(n);
var r = a(735250);
a(470079);
var s = a(481060),
	i = a(239091),
	d = a(883385),
	t = a(108843),
	o = a(911969),
	l = a(947440),
	u = a(100527),
	c = a(441061),
	m = a(167675),
	Z = a(737013),
	f = a(145474),
	h = a(299206),
	g = a(819403),
	M = a(777658),
	x = a(858488),
	v = a(185457),
	p = a(570870),
	_ = a(389052),
	j = a(24311),
	I = a(915193),
	C = a(332576),
	E = a(710631),
	N = a(297047),
	R = a(88966),
	O = a(397616),
	U = a(558924),
	T = a(991307),
	S = a(725119),
	G = a(700994),
	P = a(332031),
	w = a(981631),
	A = a(689938);
n.default = (0, t.Z)(
	(0, d.Z)(
		function (e) {
			var n;
			let {
					user: a,
					channel: d,
					context: t,
					showChatItems: u = !0,
					showMediaItems: w = !1,
					showChannelCallItems: b = !1,
					showModalItems: k = !0,
					onSelect: W,
					onHeightUpdate: y
				} = e,
				z = (0, S.Z)({
					userId: a.id,
					guildId: null
				}),
				D = (0, N.Z)(a, null, t),
				L = (0, U.Z)(a.id, d.id),
				F = (0, R.Z)(a.id, t),
				B = (0, j.Z)({
					user: a,
					context: t
				}),
				H = (0, v.Z)({
					user: a,
					channelId: d.id,
					context: t
				}),
				X = (0, x.Z)({ user: a }),
				Y = (0, G.Z)(a.id),
				q = (0, O.Z)(a.id, d.id),
				V = (0, T.Z)(a.id),
				J = (0, f.P)({
					userId: a.id,
					channelId: d.id,
					location: 'GroupDMUserContextMenu'
				}),
				K = (0, C.Z)(a.id, d.id),
				Q = (0, E.Z)({ user: a }),
				$ = (0, l.Z)(null, a),
				ee = (0, M.Z)(a),
				en = (0, _.Z)({ user: a }),
				ea = (0, h.Z)({
					id: a.id,
					label: A.Z.Messages.COPY_ID_USER
				}),
				er = (0, P.Z)(a.id),
				es = (0, m.Z)(a.id),
				ei = (0, c.Z)(d.id),
				ed = (0, g.Z)(a),
				et = (0, Z.Z)(a.id),
				eo = (0, p.Z)({
					commandType: o.yU.USER,
					commandTargetId: a.id,
					channel: d,
					guildId: void 0,
					onHeightUpdate: y
				}),
				el = (0, I.Z)(a, d),
				eu = a.isNonUserBot(),
				ec = d.isManaged(),
				em = null === (n = d.recipients) || void 0 === n ? void 0 : n.includes(a.id);
			return (0, r.jsxs)(s.Menu, {
				navId: 'user-context',
				onClose: i.Zy,
				'aria-label': A.Z.Messages.USER_ACTIONS_MENU_LABEL,
				onSelect: W,
				children: [
					!eu &&
						(0, r.jsxs)(r.Fragment, {
							children: [
								(0, r.jsx)(s.MenuGroup, { children: ed }),
								(0, r.jsxs)(s.MenuGroup, {
									children: [k && z, u && D, F, B, !ec && L, k && H, k && X, er]
								}),
								w && (0, r.jsx)(s.MenuGroup, { children: Y }),
								em &&
									(0, r.jsxs)(s.MenuGroup, {
										children: [!ec && q, el]
									}),
								(0, r.jsx)(s.MenuGroup, { children: k && $ }),
								(0, r.jsxs)(s.MenuGroup, {
									children: [w && V, w && J, w && K, eo, k && Q, ee, k && en, w && et]
								}),
								b &&
									(0, r.jsxs)(s.MenuGroup, {
										children: [ei, es]
									})
							]
						}),
					(0, r.jsx)(s.MenuGroup, { children: ea })
				]
			});
		},
		{ object: w.qAy.CONTEXT_MENU }
	),
	[u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
