n.d(t, {
	Z: function () {
		return S;
	}
});
var i = n(735250),
	l = n(470079),
	r = n(442837),
	a = n(481060),
	s = n(239091),
	o = n(906732),
	c = n(560067),
	u = n(451603),
	d = n(885714),
	h = n(155409),
	p = n(430824),
	_ = n(594174),
	f = n(40153),
	g = n(603592),
	m = n(981631),
	C = n(675999),
	I = n(689938),
	E = n(874043);
let N = {
	origin: {
		x: -16,
		y: 0
	},
	targetWidth: 48,
	targetHeight: 48,
	offset: {
		x: 0,
		y: 0
	}
};
function x(e) {
	(0, s.jW)(e, async () => {
		let { default: e } = await n.e('9606').then(n.bind(n, 987578));
		return (t) => (0, i.jsx)(e, { ...t });
	});
}
function S(e) {
	let { disableTooltip: t, lastTargetNode: n } = e,
		s = (0, r.e7)([p.Z], () => p.Z.getGuilds()),
		S = l.useMemo(() => Object.values(s), [s]),
		v = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
		Z = l.useMemo(() => S.some((e) => e.isOwner(v)), [S, v]),
		T = (0, a.useModalsStore)((e) => (0, a.hasModalOpenSelector)(e, C.PU)),
		{ analyticsLocations: L } = (0, o.ZP)(),
		A = (0, a.useRedesignIconContext)().enabled,
		b = (0, i.jsx)(g.Z, {
			showPill: !1,
			id: 'create-join-button',
			onClick: () => {
				(0, u.yU)()
					? (0, d.Z)({
							analyticsSource: { page: m.Sbl.CREATE_JOIN_GUILD_MODAL },
							analyticsLocation: {
								page: m.Sbl.CREATE_JOIN_GUILD_MODAL,
								section: m.jXE.GUILD_CAP_UPSELL_MODAL
							},
							analyticsLocations: L
						})
					: c.Z.openCreateGuildModal({ location: 'Guild List' });
			},
			selected: T,
			onContextMenu: x,
			tooltip: I.Z.Messages.ADD_A_SERVER,
			icon: A ? a.PlusMediumIcon : a.PlusSmallIcon
		});
	return t
		? b
		: (0, i.jsx)('div', {
				className: E.tutorialContainer,
				children: (0, i.jsxs)(h.Z, {
					tutorialId: Z ? 'create-more-servers' : 'create-first-server',
					inlineSpecs: N,
					position: 'right',
					children: [
						b,
						null != n &&
							(0, i.jsx)(f.ZP, {
								name: I.Z.Messages.DND_END_OF_LIST,
								targetNode: n,
								below: !0,
								noCombine: !0
							})
					]
				})
			});
}
