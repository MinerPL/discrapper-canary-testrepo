t.d(n, {
	Z: function () {
		return m;
	}
}),
	t(757143);
var r = t(735250);
t(470079);
var i = t(120356),
	o = t.n(i),
	l = t(481060),
	a = t(403182),
	d = t(587446),
	c = t(504983),
	s = t(837547);
function u(e) {
	let { errors: n } = e;
	return (0, r.jsx)(r.Fragment, {
		children: n.map((e, n) =>
			(0, r.jsx)(
				l.Text,
				{
					variant: 'text-xs/normal',
					color: 'text-danger',
					className: s.errorMessage,
					children: e.replace(/[0-9.,]+ ?kb/g, (e) => {
						let n = 1024 * parseInt(e, 10);
						return isNaN(n) ? e : (0, a.Ng)(n);
					})
				},
				n
			)
		)
	});
}
function m(e) {
	let { title: n, titleIcon: t, titleId: i, description: a, children: m, className: h, errors: f, disabled: g = !1, hideDivider: v = !1, showBorder: x = !1, borderType: _, hasBackground: p = !1, forcedDivider: C = !1, showPremiumIcon: B = !1 } = e;
	return (0, r.jsx)('div', {
		className: o()(s.customizationSection, h, {
			[s.disabled]: g,
			[s.hideDivider]: v,
			[s.showBorder]: x,
			[s.withDivider]: C
		}),
		children: (0, r.jsxs)(c.Z, {
			className: s.customizationSectionBorder,
			backgroundClassName: s.customizationSectionBackground,
			isShown: x,
			type: _,
			hasBackground: p,
			children: [
				(0, r.jsxs)(l.FormTitle, {
					className: s.title,
					id: i,
					children: [n, B && (0, r.jsx)(d.Z, {}), t]
				}),
				null != a
					? (0, r.jsx)(l.FormText, {
							type: l.FormText.Types.DESCRIPTION,
							className: s.sectionDescription,
							children: a
						})
					: null,
				m,
				null != f && (0, r.jsx)(u, { errors: f })
			]
		})
	});
}
