n.d(t, {
	j: function () {
		return E;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(84735),
	l = n(437337),
	u = n(981729),
	c = n(770102),
	d = n(534542),
	_ = n(57292);
function E(e) {
	let {
			value: t,
			disabled: n = !1,
			hideBorder: a = !1,
			tooltipNote: E,
			onChange: f,
			className: h,
			style: p,
			note: I,
			children: m
		} = e,
		T = i.useRef(null),
		g = i.useRef(null),
		S = i.useId(),
		A = (0, r.jsx)(l.r, {
			id: S,
			checked: t,
			onChange: f,
			disabled: n,
			focusProps: { enabled: !1 },
			innerRef: T
		});
	return (0, r.jsxs)('div', {
		style: p,
		className: s()(_.container, h, { [_.disabled]: n }),
		children: [
			(0, r.jsx)(o.t, {
				within: !0,
				offset: -4,
				focusTarget: T,
				ringTarget: g,
				children: (0, r.jsxs)('div', {
					className: _.labelRow,
					ref: g,
					children: [
						(0, r.jsx)('label', {
							htmlFor: S,
							className: _.title,
							children: m
						}),
						(0, r.jsx)('div', {
							className: _.control,
							children:
								null != E
									? (0, r.jsx)(u.DY, {
											text: E,
											children: A
										})
									: A
						})
					]
				})
			}),
			null != I &&
				(0, r.jsx)('div', {
					className: _.note,
					children: (0, r.jsx)(d.R, {
						disabled: n,
						type: d.g.DESCRIPTION,
						children: I
					})
				}),
			!a && (0, r.jsx)(c.$, { className: _.dividerDefault })
		]
	});
}
