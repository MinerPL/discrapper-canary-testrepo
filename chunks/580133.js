n.d(t, {
	f: function () {
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
			d: 'M12 1.4a1 1 0 0 0 0 1.41l.35.35-1 1.01a1 1 0 0 0 .08 1.58l9.54 6.72a1 1 0 0 0 1.3-.13l.7-.7a1 1 0 0 0 0-1.4l-9.2-9.2a1 1 0 0 0-1.41 0L12 1.4ZM12 22.61a1 1 0 0 0 0-1.41l-.35-.36.37-.37a.56.56 0 0 0 .12-.56 3 3 0 0 1-.06-1.57.56.56 0 0 0-.21-.58l-8.84-6.22a1 1 0 0 0-1.3.13l-.69.69a1 1 0 0 0 0 1.41l9.2 9.2a1 1 0 0 0 1.4 0l.36-.36ZM15 16h.16c.33 0 .56-.32.3-.53a.98.98 0 0 0-.07-.06L6.9 9.76a1 1 0 1 0-1.1 1.66l7.3 4.88c.17.1.39.1.56.02.4-.2.86-.32 1.34-.32ZM18.5 13.97a1 1 0 0 1-1.4.28L8.63 8.59a1 1 0 0 1 1.1-1.66l8.5 5.66a1 1 0 0 1 .27 1.38ZM15 18a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z',
			fill: 'string' == typeof c ? c : c.css,
			className: d
		})
	});
};
