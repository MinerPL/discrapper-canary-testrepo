t.d(n, {
	Z: function () {
		return u;
	}
});
var i = t(735250);
t(470079);
var a = t(481060),
	s = t(600164),
	l = t(313201),
	r = t(63063),
	o = t(453628),
	d = t(689938),
	c = t(224499);
function u(e) {
	let { value: n, onChange: t, children: u, note: I, helpdeskArticleId: m, style: _, disabled: N = !1, hideBorder: E = !1, className: T = c.marginBottom20 } = e,
		h = (0, l.Dt)();
	return (0, i.jsxs)(s.Z, {
		style: _,
		className: T,
		direction: s.Z.Direction.VERTICAL,
		children: [
			(0, i.jsxs)(s.Z, {
				children: [
					(0, i.jsx)(s.Z.Child, {
						children: (0, i.jsx)(a.FormTitle, {
							id: h,
							className: c.marginReset,
							tag: a.FormTitleTags.H3,
							disabled: N,
							children: u
						})
					}),
					(0, i.jsx)(s.Z.Child, {
						grow: 0,
						shrink: 0,
						children: (0, i.jsx)(o.Z, {
							value: n,
							onChange: t,
							disabled: N,
							labelledBy: h
						})
					})
				]
			}),
			null != I &&
				(0, i.jsx)(s.Z.Child, {
					className: c.marginTop4,
					children: (0, i.jsx)(a.FormText, {
						type: a.FormTextTypes.DESCRIPTION,
						children: I
					})
				}),
			null != m &&
				(0, i.jsx)(s.Z.Child, {
					className: c.marginTop4,
					children: (0, i.jsx)(a.FormText, {
						disabled: N,
						type: a.FormTextTypes.DESCRIPTION,
						children: (0, i.jsx)(a.Anchor, {
							href: r.Z.getArticleURL(m),
							children: d.Z.Messages.LEARN_MORE
						})
					})
				}),
			!E &&
				(0, i.jsx)(s.Z.Child, {
					className: c.marginTop20,
					children: (0, i.jsx)(a.FormDivider, {})
				})
		]
	});
}
o.Z.Types, (u.Types = o.Z.Types);
