i.d(n, {
	Z: function () {
		return _;
	}
}),
	i(653041);
var l = i(735250),
	t = i(470079),
	s = i(442837),
	a = i(481060),
	o = i(139387),
	u = i(230711),
	d = i(213459),
	r = i(434404),
	c = i(430824),
	Z = i(496675),
	M = i(981631),
	E = i(689938);
function _(e) {
	let { user: n, guildId: i, channel: _, context: f } = e,
		N = c.Z.getGuild(i),
		A = (0, s.e7)([Z.Z], () => (null != N ? Z.Z.can(M.Plq.MANAGE_GUILD, N) : null)),
		I = (0, d.em)(_, !0, !0),
		g = (0, d.PL)(!0, !0),
		{ isUserApp: v, isGuildApp: b } = t.useMemo(() => {
			var e, i, l, t;
			if ((null == n ? void 0 : n.id) == null)
				return {
					isGuildApp: !1,
					isUserApp: !1
				};
			let s = Object.values(null !== (l = null === (e = I.result) || void 0 === e ? void 0 : e.sections) && void 0 !== l ? l : {}),
				a = Object.values(null !== (t = null === (i = g.result) || void 0 === i ? void 0 : i.sections) && void 0 !== t ? t : {});
			return {
				isGuildApp: s.some((e) => {
					var i;
					return (null === (i = e.descriptor.application) || void 0 === i ? void 0 : i.id) === (null == n ? void 0 : n.id);
				}),
				isUserApp: a.some((e) => {
					var i;
					return (null === (i = e.descriptor.application) || void 0 === i ? void 0 : i.id) === (null == n ? void 0 : n.id);
				})
			};
		}, [I, g, null == n ? void 0 : n.id]),
		m = t.useCallback(() => {
			if ((null == N ? void 0 : N.id) != null) r.Z.open(N.id, M.pNK.INTEGRATIONS), o.Z.setSection(M.b4C.APPLICATION, null == n ? void 0 : n.id);
		}, [null == n ? void 0 : n.id, null == N ? void 0 : N.id]),
		p = t.useCallback(() => {
			u.Z.open(M.oAB.AUTHORIZED_APPS);
		}, []),
		D = f === M.IlC.POPOUT;
	if (!(null == n ? void 0 : n.bot) || !A || D || (!b && !v)) return null;
	let T = [];
	return (
		b &&
			T.push(
				(0, l.jsx)(
					a.MenuItem,
					{
						id: 'manage-integration',
						label: E.Z.Messages.MANAGE_INTEGRATION,
						action: m
					},
					'manage-integration'
				)
			),
		v &&
			T.push(
				(0, l.jsx)(
					a.MenuItem,
					{
						id: 'manage-authorized-app',
						label: E.Z.Messages.MANAGE_AUTHORIZED_APP,
						action: p
					},
					'manage-authorized-app'
				)
			),
		T
	);
}
