n.d(t, {
	y: function () {
		return r;
	}
}),
	n(47120);
var r,
	i,
	a,
	s,
	o = n(470079),
	l = n(392711);
function u(e) {
	return 2 === e || 3 === e ? 1 : 0;
}
((a = r || (r = {}))[(a.VERTICAL_TOP = 0)] = 'VERTICAL_TOP'),
	(a[(a.VERTICAL_BOTTOM = 1)] = 'VERTICAL_BOTTOM'),
	(a[(a.HORIZONTAL_LEFT = 2)] = 'HORIZONTAL_LEFT'),
	(a[(a.HORIZONTAL_RIGHT = 3)] = 'HORIZONTAL_RIGHT'),
	((s = i || (i = {}))[(s.VERTICAL = 0)] = 'VERTICAL'),
	(s[(s.HORIZONTAL = 1)] = 'HORIZONTAL');
t.Z = (e) => {
	let {
			initialElementDimension: t,
			resizableDomNodeRef: n,
			maxDimension: r,
			minDimension: i,
			onElementResize: a,
			onElementResizeEnd: s,
			throttleDuration: c = 300,
			orientation: d,
			usePointerEvents: _ = !1
		} = e,
		[E, f] = o.useState(!1),
		h = o.useRef(0),
		p = o.useRef(null == t ? 0 : t);
	return (
		o.useLayoutEffect(() => {
			if (!E || null == n.current) return;
			function e(e) {
				let t = 1 === u(d) ? e.screenX : e.screenY,
					n = 0 === d || 2 === d,
					a = (t - h.current) * (n ? -1 : 1),
					s = p.current + a;
				return (0, l.clamp)(s, null != i ? i : 0, null != r ? r : s);
			}
			let t = (0, l.throttle)(a, c),
				o = (r) => {
					if (null == n.current) return null;
					let i = e(r),
						a = 1 === u(d) ? 'width' : 'height';
					(n.current.style[a] = ''.concat(i, 'px')), t(i);
				},
				I = (t) => {
					f(!1);
					let n = e(t);
					a(n), null == s || s(n);
				},
				m = _ ? 'pointerup' : 'mouseup',
				T = _ ? 'pointermove' : 'mousemove',
				g = n.current.ownerDocument;
			return (
				g.addEventListener(m, I),
				g.addEventListener(T, o),
				() => {
					g.removeEventListener(m, I), g.removeEventListener(T, o), t.cancel();
				}
			);
		}, [E, a, i, r, d, n, c, s, _]),
		o.useCallback(
			(e) => {
				let t = 1 === u(d);
				null != n.current && (p.current = t ? n.current.offsetWidth : n.current.offsetHeight),
					(h.current = t ? e.screenX : e.screenY),
					f(!0);
			},
			[d, n]
		)
	);
};
