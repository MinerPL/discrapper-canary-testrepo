t.d(r, {
	Z: function () {
		return d;
	}
}),
	t(47120);
var a = t(735250),
	n = t(470079),
	i = t(120356),
	o = t.n(i),
	l = t(347469),
	c = t(545219);
function s(e) {
	let { resizableNode: r, minHeight: t, onResize: n } = e,
		i = (0, l.Z)({
			minDimension: t,
			resizableDomNodeRef: r,
			onElementResize: n,
			orientation: l.y.VERTICAL_TOP,
			usePointerEvents: !0
		});
	return (0, a.jsx)('div', {
		onPointerDown: i,
		className: c.resizeHandle
	});
}
function d(e) {
	let { children: r, className: t, initialHeight: i, minHeight: l } = e,
		d = n.useRef(null),
		[u, h] = n.useState(i);
	return (0, a.jsxs)('div', {
		ref: d,
		className: c.container,
		style: {
			minHeight: l,
			height: u
		},
		children: [
			(0, a.jsx)(s, {
				resizableNode: d,
				minHeight: l,
				onResize: h
			}),
			(0, a.jsx)('div', {
				className: o()(c.subPanelContent, t),
				children: r
			})
		]
	});
}
