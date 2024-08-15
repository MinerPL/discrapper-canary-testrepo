n.d(t, {
	i: function () {
		return o;
	}
});
var r = n(735250);
n(470079);
var i = n(692547),
	a = n(331595),
	s = n(267843);
let o = (e) => {
	var t, n;
	let { size: o = 'md', width: l, height: u, secondaryColor: c = 'transparent', secondaryColorClass: d = '', color: _ = i.Z.colors.INTERACTIVE_NORMAL, colorClass: E = '', ...f } = e,
		h = (0, s.m)(o),
		p = null !== (t = null == h ? void 0 : h.width) && void 0 !== t ? t : l,
		m = null !== (n = null == h ? void 0 : h.height) && void 0 !== n ? n : u;
	return (0, r.jsxs)('svg', {
		...(0, a.Z)(f),
		xmlns: 'http://www.w3.org/2000/svg',
		width: p,
		height: m,
		fill: 'none',
		viewBox: '0 0 24 24',
		children: [
			(0, r.jsx)('circle', {
				cx: '12',
				cy: '12',
				r: '10',
				fill: 'string' == typeof c ? c : c.css,
				className: d
			}),
			(0, r.jsx)('path', {
				fill: 'string' == typeof _ ? _ : _.css,
				fillRule: 'evenodd',
				d: 'M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z',
				clipRule: 'evenodd',
				className: E
			})
		]
	});
};
