n.d(t, {
	Z: function () {
		return I;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	l = n(399606),
	r = n(481060),
	o = n(271383),
	c = n(594174),
	u = n(777288),
	d = n(753042),
	h = n(787469),
	m = n(477718),
	p = n(791176),
	_ = n(908474),
	f = n(467014),
	E = n(689938),
	C = n(446926);
function g() {
	return (0, i.jsxs)('div', {
		className: C.header,
		children: [
			(0, i.jsxs)('div', {
				className: C.headerTitle,
				children: [
					(0, i.jsx)(u.Z, {
						width: 16,
						height: 16
					}),
					(0, i.jsx)(r.Heading, {
						variant: 'heading-md/semibold',
						children: E.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE
					})
				]
			}),
			(0, i.jsx)('div', {
				children: (0, i.jsx)(r.KeyCombo, {
					shortcut: 'esc',
					keyClassName: C.keyComboInner,
					className: C.keyComboContainer
				})
			})
		]
	});
}
function I(e) {
	let { userId: t, guildId: n, location: a, className: u, onNavigate: E } = e,
		I = (0, l.e7)([c.default], () => c.default.getUser(t), [t]),
		x = (0, l.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
	return null == I || null == x
		? null
		: (0, i.jsxs)('div', {
				className: s()(C.container, u),
				children: [
					(0, i.jsx)(g, {}),
					(0, i.jsxs)(r.Scroller, {
						className: C.innerContainer,
						children: [
							(0, i.jsx)(_.Z, { member: x }),
							(0, i.jsx)(f.Z, {
								userId: t,
								guildId: n
							}),
							(0, i.jsx)(p.Z, {
								member: x,
								onNavigate: E
							}),
							(0, i.jsx)(h.Z, { member: x }),
							(0, i.jsx)(d.Z, { member: x }),
							(0, i.jsx)(m.Z, { member: x })
						]
					})
				]
			});
}
