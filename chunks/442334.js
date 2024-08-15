t.d(s, {
	O: function () {
		return c;
	},
	Q: function () {
		return d;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(481060),
	l = t(677787);
function c(e) {
	let { title: s, note: t, children: a, className: i, id: c } = e;
	return (0, n.jsxs)('div', {
		className: r()(l.inputItem, i),
		children: [
			(0, n.jsxs)('div', {
				className: l.inputItemText,
				children: [
					(0, n.jsx)(o.Text, {
						tag: 'label',
						variant: 'text-md/medium',
						className: l.inputItemTitle,
						id: c,
						children: s
					}),
					null != t &&
						(0, n.jsx)(o.FormText, {
							className: l.__invalid_note,
							type: o.FormText.Types.DESCRIPTION,
							children: t
						})
				]
			}),
			a
		]
	});
}
function d(e) {
	let { options: s, value: t, select: i, selectClassName: d, ..._ } = e,
		E = a.useId();
	return (0, n.jsx)(c, {
		..._,
		id: E,
		children: (0, n.jsx)(o.Select, {
			'aria-labelledby': E,
			className: r()(l.selectControl, d),
			options: s,
			isSelected: (e) => e === t,
			select: i,
			serialize: (e) => String(e)
		})
	});
}
