n.d(t, {
	O: function () {
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
			d: 'M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-2.06-3.65a1 1 0 0 1-1.88-.7l1.9-5.08a.5.5 0 0 0 .04-.18v-2.22a.5.5 0 0 0-.38-.48l-2.86-.72a1 1 0 0 1 .48-1.94l3.55.89a5 5 0 0 0 2.42 0l3.55-.89a1 1 0 1 1 .48 1.94l-2.86.72a.5.5 0 0 0-.38.48v2.22l.03.18 1.9 5.08a1 1 0 0 1-1.87.7l-1.6-4.25a.5.5 0 0 0-.93 0l-1.6 4.25ZM14 6a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2Z',
			clipRule: 'evenodd',
			className: d
		})
	});
};
