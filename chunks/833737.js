t.r(e);
var r = t(735250),
	u = t(470079),
	i = t(442837),
	a = t(481060),
	o = t(239091),
	l = t(883385),
	c = t(108843),
	d = t(2052),
	_ = t(100527),
	s = t(906732),
	E = t(299206),
	M = t(976192),
	f = t(910693),
	A = t(271383),
	O = t(979651),
	I = t(933409),
	T = t(389052),
	L = t(88966),
	N = t(712301),
	U = t(567711),
	D = t(358386),
	S = t(725119),
	p = t(931617),
	C = t(981631),
	g = t(689938);
e.default = (0, c.Z)(
	(0, l.Z)(
		function (n) {
			var e;
			let { user: t, guildId: l, channelId: c, context: C, onSelect: y, moderationAlertId: R, analyticsLocation: m, analyticsLocations: b, onCloseContextMenu: x, showTransferOwnershipItem: j } = n,
				{ analyticsLocations: v } = (0, s.ZP)(_.Z.CONTEXT_MENU),
				Z = (0, d.O)(),
				h = null !== (e = null == b ? void 0 : b[0]) && void 0 !== e ? e : v[0],
				G = (0, f.sE)(l, {
					location: h,
					targetUserId: t.id
				}),
				P = (0, i.e7)(
					[O.Z],
					() => {
						var n;
						return null !== (n = O.Z.getUserVoiceChannelId(l, t.id)) && void 0 !== n ? n : void 0;
					},
					[l, t.id]
				),
				w = u.useCallback(() => {
					G(f.jQ.COPY_ID);
				}, [G]),
				k = (0, i.e7)([A.ZP], () => A.ZP.isMember(l, t.id), [l, t.id]),
				F = (0, S.Z)({
					userId: t.id,
					guildId: l,
					sourceAnalyticsLocations: b
				}),
				Y = (0, L.Z)(t.id, C),
				B = (0, M.Z)({
					guildId: l,
					userId: t.id,
					analyticsLocation: null != m ? m : Z.location,
					analyticsLocations: [h],
					context: C
				}),
				K = (0, T.Z)({
					user: t,
					location: h
				}),
				V = (0, I.Z)(t, l, null != c ? c : P, h),
				W = (0, U.Z)(c, R),
				H = (0, D.Z)(t, l),
				q = (0, p.Z)(t.id, l, !1, h),
				X = (0, E.Z)({
					id: t.id,
					label: g.Z.Messages.COPY_ID_USER,
					onSuccess: w
				}),
				z = (0, N.Z)(t, l),
				Q = !!(null == t ? void 0 : t.isNonUserBot());
			return (0, r.jsxs)(a.Menu, {
				navId: 'user-context',
				onClose: () => {
					(0, o.Zy)(), null == x || x();
				},
				'aria-label': g.Z.Messages.USER_ACTIONS_MENU_LABEL,
				onSelect: y,
				children: [
					!Q &&
						(0, r.jsxs)(r.Fragment, {
							children: [
								(0, r.jsxs)(a.MenuGroup, {
									children: [F, Y]
								}),
								(0, r.jsxs)(a.MenuGroup, {
									children: [B, K]
								}),
								k &&
									(0, r.jsxs)(r.Fragment, {
										children: [
											(0, r.jsx)(a.MenuGroup, { children: V }),
											(0, r.jsxs)(a.MenuGroup, {
												children: [q, z]
											})
										]
									}),
								null != R ? W : null,
								j && null != H ? (0, r.jsx)(a.MenuGroup, { children: H }) : null
							]
						}),
					(0, r.jsx)(a.MenuGroup, { children: X })
				]
			});
		},
		{ object: C.qAy.CONTEXT_MENU }
	),
	[_.Z.CONTEXT_MENU, _.Z.GUILD_MODERATION_USER_MENU]
);
