n.d(t, {
	E: function () {
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
			fillRule: 'evenodd',
			d: 'M17.38 21c.61 0 1.23-.18 1.7-.58a11 11 0 1 0-14.16 0c.47.4 1.09.58 1.7.58h10.76Zm.83-13.8a1 1 0 0 0-1.42-1.4l-4.27 4.27A2 2 0 0 0 10 12a2 2 0 1 0 3.93-.52l4.28-4.27ZM4 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.05 3.95a1 1 0 1 1-1.41 1.41 1 1 0 0 1 1.41-1.41Zm9.9 1.41a1 1 0 1 1 1.41-1.41 1 1 0 0 1-1.41 1.41ZM6.13 7.32a1 1 0 1 1 .42-1.96 1 1 0 0 1-.42 1.96ZM12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
			clipRule: 'evenodd',
			className: d
		})
	});
};
