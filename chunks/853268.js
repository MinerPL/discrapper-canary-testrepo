n.d(t, {
	Z: function () {
		return d;
	}
});
var s = n(735250);
n(470079);
var r = n(120356),
	i = n.n(r),
	a = n(481060),
	l = n(600164),
	o = n(388905),
	c = n(119794),
	u = n(224499);
function d(e) {
	let { value: t, onChange: n, subText: r, muted: d, marginTopStyle: _ } = e;
	return (0, s.jsx)(l.Z, {
		className: null != _ ? _ : u.marginTop20,
		align: l.Z.Align.CENTER,
		children: (0, s.jsx)(a.Checkbox, {
			value: t,
			type: a.Checkbox.Types.INVERTED,
			onChange: (e, t) => n(t),
			className: c.checkbox,
			children: (0, s.jsx)(o.i_, {
				className: i()({ [c.subText]: !d }),
				children: r
			})
		})
	});
}
