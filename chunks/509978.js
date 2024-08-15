n.d(t, {
	k: function () {
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
	let { size: o = 'md', width: l, height: u, color: c = i.Z.colors.INTERACTIVE_NORMAL, colorClass: d = '', ..._ } = e,
		E = (0, s.m)(o),
		f = null !== (t = null == E ? void 0 : E.width) && void 0 !== t ? t : l,
		h = null !== (n = null == E ? void 0 : E.height) && void 0 !== n ? n : u;
	return (0, r.jsxs)('svg', {
		...(0, a.Z)(_),
		xmlns: 'http://www.w3.org/2000/svg',
		width: f,
		height: h,
		fill: 'none',
		viewBox: '0 0 24 24',
		children: [
			(0, r.jsx)('path', {
				d: 'M12.2 22c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h5.84c.2 0 .38-.12.46-.3a10 10 0 1 0-17.74 1.66c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10Z',
				fill: 'string' == typeof c ? c : c.css,
				className: d
			}),
			(0, r.jsx)('path', {
				d: 'M15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z',
				fill: 'string' == typeof c ? c : c.css,
				className: d
			})
		]
	});
};
