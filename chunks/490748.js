n.d(t, {
	W: function () {
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
			d: 'M4 8.5C4 4.36 7.58 1 12 1s8 3.36 8 7.5c0 2.64-.98 4.02-1.9 5.33-.49.7-.96 1.38-1.27 2.2C16.45 17.09 15.6 18 14.5 18h-1a.5.5 0 0 1-.5-.5v-5.77c0-.32.3-.56.6-.44.29.12.53.27.72.44a1 1 0 0 0 1.36-1.46A5.46 5.46 0 0 0 12 9c-1.3 0-2.72.37-3.68 1.27a1 1 0 1 0 1.36 1.46c.19-.17.43-.32.73-.44s.59.12.59.44v5.77a.5.5 0 0 1-.5.5h-1c-1.1 0-1.95-.92-2.33-1.96-.3-.83-.78-1.5-1.27-2.2C4.98 12.51 4 11.13 4 8.5ZM15.1 19c.5 0 .9.4.9.9 0 .7-.28 1.38-.78 1.88l-.34.34a3 3 0 0 1-2.12.88h-1.52a3 3 0 0 1-2.12-.88l-.34-.34c-.5-.5-.78-1.18-.78-1.89 0-.5.4-.89.9-.89h6.2Z',
			className: d
		})
	});
};
