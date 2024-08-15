var i = n(735250),
	s = n(470079),
	a = n(120356),
	o = n.n(a),
	r = n(911954);
let l = (e) => {
	let { keybind: t, separator: n, className: a } = e;
	return (0, i.jsx)(i.Fragment, {
		children: t.map((e, l) =>
			(0, i.jsxs)(
				s.Fragment,
				{
					children: [
						(0, i.jsx)('span', {
							className: o()(r.key, a),
							children: e
						}),
						l === t.length - 1 ? void 0 : n
					]
				},
				l
			)
		)
	});
};
(l.defaultProps = { separator: '+' }), (t.Z = l);
