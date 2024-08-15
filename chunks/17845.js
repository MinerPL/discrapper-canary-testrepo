n.d(t, {
	Z: function () {
		return u;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(780384),
	l = n(481060),
	o = n(410030),
	c = n(831565),
	d = n(577798);
function u(e) {
	let { title: t, description: n, button: a, className: u, background: _ } = e,
		E = (0, o.ZP)(),
		h = (0, r.wj)(E),
		m = (0, c.v)({ location: 'QuestHomePage' });
	return (0, i.jsxs)('div', {
		className: s()(d.container, u),
		children: [
			(0, i.jsx)('div', {
				className: d.content,
				children: (0, i.jsxs)('div', {
					className: d.textContainer,
					children: [
						(0, i.jsx)(l.Text, {
							className: s()(d.title, { [d.uppercase]: m }),
							variant: m ? 'display-lg' : 'heading-lg/bold',
							color: 'header-primary',
							children: t
						}),
						(0, i.jsx)(l.Text, {
							className: d.description,
							variant: 'text-md/medium',
							color: h ? 'text-muted' : 'header-primary',
							children: n
						}),
						a
					]
				})
			}),
			_
		]
	});
}
