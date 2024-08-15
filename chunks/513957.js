n.d(t, {
	s: function () {
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
	return (0, r.jsx)('svg', {
		...(0, a.Z)(_),
		xmlns: 'http://www.w3.org/2000/svg',
		width: f,
		height: h,
		fill: 'none',
		viewBox: '0 0 24 24',
		children: (0, r.jsx)('path', {
			fill: 'string' == typeof c ? c : c.css,
			d: 'M18.31 6.2A5.04 5.04 0 0 1 16.06 2h-3.55v14.47a3 3 0 0 1-2.98 2.92 3.04 3.04 0 0 1 0-6.07c.3 0 .6.05.88.14V9.77A6.6 6.6 0 0 0 3 16.35c0 2.25 1.1 4.24 2.79 5.45A6.42 6.42 0 0 0 9.53 23a6.6 6.6 0 0 0 6.53-6.65V9.02A8.34 8.34 0 0 0 21 10.63v-3.6c-1 0-1.91-.3-2.69-.82Z',
			className: d
		})
	});
};
