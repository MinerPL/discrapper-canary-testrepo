n.d(t, {
	Z: function () {
		return d;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(481060),
	o = n(741914),
	c = n(40509),
	u = n(910212);
function d(e) {
	let { color: t, className: n, variant: s, text: d, lineClamp: _ } = e,
		E = (0, l.usePrivateHeadingLevel)(),
		I = a.useMemo(
			() =>
				null == d
					? null
					: (0, o.Z)(d, !0, {
							allowHeading: null == _,
							allowList: null == _,
							initialHeaderLevel: E
						}),
			[d, _, E]
		);
	return (0, i.jsx)(l.Text, {
		className: r()(n, u.markup, {
			[c.lineClamp2Plus]: null != _ && _ > 1,
			[c.lineClamp1]: 1 === _
		}),
		color: t,
		variant: s,
		lineClamp: _,
		children: I
	});
}
