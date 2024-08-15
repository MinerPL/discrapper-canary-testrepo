n.d(t, {
	Z: function () {
		return c;
	}
});
var s = n(735250);
n(470079);
var a = n(120356),
	i = n.n(a),
	r = n(481060),
	l = n(2150),
	o = n(270068);
function c(e) {
	let {
		title: t,
		description: n,
		action: a,
		highlightColor: c = l.q.NONE,
		selected: d = !1,
		subsection: u = null,
		onClick: _,
		className: I,
		disabled: E
	} = e;
	return (0, s.jsxs)('div', {
		className: i()(o.container, I),
		children: [
			(0, s.jsx)(r.Clickable, {
				className: i()(
					o.clickableContainer,
					{
						[o.noAction]: null == _,
						[o.disabled]: E
					},
					I
				),
				onClick: E ? void 0 : _,
				children: (0, s.jsxs)('div', {
					className: i()(o.backgroundModifierContainer, o[c], {
						[o.selected]: d,
						[o.disabled]: E,
						[o.noAction]: null == _
					}),
					children: [
						(0, s.jsxs)('div', {
							className: o.settingsDescriptionContainer,
							children: [
								(0, s.jsx)(r.Text, {
									variant: 'text-sm/medium',
									color: 'interactive-active',
									children: t
								}),
								(0, s.jsx)(r.Text, {
									variant: 'text-sm/normal',
									color: 'interactive-normal',
									className: o.description,
									children: n
								})
							]
						}),
						(0, s.jsx)('div', {
							className: o.__invalid_action,
							children: a
						})
					]
				})
			}),
			null != u &&
				(0, s.jsx)('div', {
					className: o.subsectionContainer,
					children: u
				})
		]
	});
}
