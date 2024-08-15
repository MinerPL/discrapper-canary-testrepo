n.d(t, {
	l: function () {
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
				fill: 'string' == typeof c ? c : c.css,
				fillRule: 'evenodd',
				d: 'M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
				clipRule: 'evenodd',
				className: d
			}),
			(0, r.jsx)('path', {
				fill: 'string' == typeof c ? c : c.css,
				d: 'M1 12a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v4h-.5a.5.5 0 0 1-.5-.5V15a3 3 0 0 0-6 0v.5a.5.5 0 0 1-.5.5H15a3 3 0 0 0-2.81 4.05c.15.4-.11.95-.54.95H4a3 3 0 0 1-3-3v-6Z',
				className: d
			}),
			(0, r.jsx)('path', {
				fill: 'string' == typeof c ? c : c.css,
				d: 'M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z',
				className: d
			})
		]
	});
};
