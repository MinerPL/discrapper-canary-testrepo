i.d(n, {
	Z: function () {
		return c;
	}
});
var t = i(735250);
i(470079);
var a = i(120356),
	r = i.n(a),
	o = i(481060),
	l = i(665692),
	s = i(856773);
function c(e) {
	let { commands: n, className: i } = e;
	return (0, t.jsx)('div', {
		className: r()(s.list, i),
		children: n.map((e) =>
			(0, t.jsxs)(
				'div',
				{
					className: s.row,
					children: [
						(0, t.jsxs)(o.Text, {
							className: s.commandName,
							variant: 'text-md/semibold',
							color: 'header-primary',
							children: [l.GI, e.displayName]
						}),
						(0, t.jsx)(o.Text, {
							variant: 'text-md/normal',
							children: e.displayDescription
						})
					]
				},
				e.id
			)
		)
	});
}
