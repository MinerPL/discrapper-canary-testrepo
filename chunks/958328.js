t.d(r, {
	Z: function () {
		return k;
	}
});
var a = t(735250);
t(470079);
var n = t(120356),
	i = t.n(n),
	o = t(149765),
	l = t(442837),
	c = t(481060),
	s = t(933557),
	d = t(592125),
	u = t(430824),
	h = t(496675),
	m = t(944486),
	g = t(914010),
	p = t(233608),
	b = t(71080),
	f = t(761749),
	y = t(535271);
function x(e) {
	let { title: r, can: t } = e,
		n = t ? c.CheckmarkLargeIcon : c.XSmallIcon,
		o = (0, a.jsx)('div', {
			className: i()(f.iconOuter, t ? f.iconCheck : f.iconCross),
			children: (0, a.jsx)(n, { className: f.icon })
		});
	return (0, a.jsxs)('div', {
		className: f.scope,
		children: [
			o,
			(0, a.jsx)('div', {
				className: f.scopeInner,
				children: (0, a.jsx)(c.Text, {
					variant: 'text-md/normal',
					children: r
				})
			})
		]
	});
}
function k() {
	let e = (0, l.e7)([m.Z], () => m.Z.getChannelId()),
		r = (0, l.e7)([g.Z], () => g.Z.getGuildId()),
		t = (0, l.e7)([d.Z], () => d.Z.getChannel(e)),
		n = (0, l.e7)([u.Z], () => u.Z.getGuild(r)),
		k = (0, l.e7)([h.Z], () => h.Z.computePermissions(t)),
		v = (0, l.e7)([h.Z], () => h.Z.computePermissions(n)),
		_ = (0, s.ZP)(t, !0),
		w = null != t ? (0, b.IG)(t, !1, !0) : null,
		C = null != n ? p.Z.getGuildPermissionSpecMap(n) : null,
		j = Object.values(null != w ? w : {}).map((e) => {
			let { title: r, flag: t } = e,
				n = o.e$(k, t);
			return (0, a.jsx)(
				x,
				{
					title: r,
					can: n
				},
				r
			);
		}),
		N = Object.values(null != C ? C : {}).map((e) => {
			let { title: r, flag: t } = e,
				n = o.e$(v, t);
			return (0, a.jsx)(
				x,
				{
					title: r,
					can: n
				},
				r
			);
		});
	return (0, a.jsx)('div', {
		className: i()(y.panel, f.panel),
		children: (0, a.jsxs)('div', {
			className: f.panelInner,
			children: [
				(0, a.jsxs)('section', {
					className: f.section,
					children: [
						(0, a.jsx)(c.Heading, {
							variant: 'heading-md/semibold',
							children: null != _ ? 'Permissions in '.concat(_) : 'No channel selected'
						}),
						j
					]
				}),
				(0, a.jsxs)('section', {
					className: f.section,
					children: [
						(0, a.jsx)(c.Heading, {
							variant: 'heading-md/semibold',
							children: null != n ? 'Permissions in '.concat(n.name) : 'No guild selected'
						}),
						N
					]
				})
			]
		})
	});
}
