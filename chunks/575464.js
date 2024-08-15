n.d(t, {
	Z: function () {
		return _;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	l = n(91192),
	r = n(442837),
	o = n(481060),
	c = n(129861),
	u = n(700582),
	d = n(600164),
	h = n(158776),
	m = n(51144),
	p = n(808794);
function _(e) {
	let {
			user: t,
			row: n,
			hideDiscriminator: a,
			comparator: _,
			selected: f,
			checked: E,
			onClick: g,
			onMouseEnter: C,
			'aria-setsize': I,
			'aria-posinset': x
		} = e,
		T = (0, r.e7)([h.Z], () => h.Z.getStatus(t.id)),
		N = (0, l.JA)(String(t.id));
	return (0, i.jsx)(o.Clickable, {
		id: 'user-row-'.concat(n),
		className: p.friendWrapper,
		onClick: () => {
			null != g && g(t.id);
		},
		onMouseEnter: () => {
			null != C && C(n);
		},
		...N,
		role: 'option',
		'aria-selected': E,
		'aria-setsize': I,
		'aria-posinset': x,
		children: (0, i.jsxs)(d.Z, {
			align: d.Z.Align.CENTER,
			className: s()(p.friend, { [p.friendSelected]: f }),
			children: [
				(0, i.jsx)(u.Z, {
					user: t,
					status: T,
					className: p.avatar
				}),
				(0, i.jsxs)(d.Z, {
					className: p.match,
					align: d.Z.Align.BASELINE,
					children: [
						(0, i.jsx)(o.Text, {
							tag: 'strong',
							className: p.nickname,
							'aria-hidden': !0,
							variant: 'text-md/medium',
							children: null != _ && _ === t.tag ? m.ZP.getName(t) : null != _ && '' !== _ ? _ : m.ZP.getName(t)
						}),
						(0, i.jsx)(c.Z, {
							user: t,
							hideDiscriminator: a,
							className: p.discordTag,
							usernameClass: p.__invalid_weightMedium,
							discriminatorClass: p.__invalid_weightMedium,
							forceUsername: !0
						})
					]
				}),
				(0, i.jsx)(o.Checkbox, {
					displayOnly: !0,
					size: 22,
					value: E,
					className: p.checkbox
				})
			]
		})
	});
}
