n.d(t, {
	Z: function () {
		return h;
	}
});
var i = n(470079),
	a = n(392711),
	s = n.n(a),
	l = n(772848),
	r = n(846519),
	o = n(125268),
	c = n(292793),
	u = n(813900);
let d = s().debounce(o.BR, u.Fq, { maxWait: u.Fq });
function h(e, t, n) {
	let a = i.useRef((0, l.Z)()),
		s = i.useRef(new r.Xp()),
		h = i.useCallback(
			(i) => {
				(i.lastUpdatedAt = Date.now()), (0, o.gr)(i, e, n), (0, o.BR)(t, n, i);
			},
			[t, n, e]
		),
		m = i.useCallback(
			(i, r, d) => {
				a.current = (0, l.Z)();
				let m = {
					...i,
					id: a.current,
					x: r,
					y: d,
					userId: e,
					state: c.f.START,
					lastUpdatedAt: Date.now()
				};
				(0, o.BR)(t, n, m), (0, o.gr)(m, e, n), s.current.start(u.FO, () => h(m));
			},
			[e, t, n, h]
		),
		p = i.useCallback(
			(i, l, r) => {
				let m = {
					...i,
					id: a.current,
					x: l,
					y: r,
					userId: e,
					state: c.f.START,
					lastUpdatedAt: Date.now()
				};
				d(t, n, m), (0, o.gr)(m, e, n), s.current.start(u.FO, () => h(m));
			},
			[e, t, n, h]
		),
		_ = i.useCallback(
			(i, l, r) => {
				d.cancel(),
					(0, o.Df)(t, n, a.current),
					(0, o.gr)(
						{
							...i,
							id: a.current,
							x: l,
							y: r,
							userId: e,
							state: c.f.STOP,
							lastUpdatedAt: Date.now()
						},
						e,
						n
					),
					s.current.stop();
			},
			[t, n, e]
		),
		f = i.useCallback((e, t, n) => p(e, t, n), [p]);
	return i.useMemo(
		() => ({
			handleMouseDown: m,
			handleMouseMove: p,
			handleMouseUp: _,
			handleMouseEnter: f
		}),
		[m, f, p, _]
	);
}
