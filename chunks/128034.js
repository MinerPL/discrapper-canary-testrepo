n.d(t, {
	d: function () {
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
	let {
			size: o = 'md',
			width: l,
			height: u,
			secondaryColor: c = 'transparent',
			secondaryColorClass: d = '',
			color: _ = i.Z.colors.INTERACTIVE_NORMAL,
			colorClass: E = '',
			...f
		} = e,
		h = (0, s.m)(o),
		p = null !== (t = null == h ? void 0 : h.width) && void 0 !== t ? t : l,
		I = null !== (n = null == h ? void 0 : h.height) && void 0 !== n ? n : u;
	return (0, r.jsxs)('svg', {
		...(0, a.Z)(f),
		xmlns: 'http://www.w3.org/2000/svg',
		width: p,
		height: I,
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
				d: 'M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z',
				clipRule: 'evenodd',
				className: E
			})
		]
	});
};
