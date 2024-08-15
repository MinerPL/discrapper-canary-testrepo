n.d(t, {
	g: function () {
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
				d: 'M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z',
				clipRule: 'evenodd',
				className: E
			})
		]
	});
};
