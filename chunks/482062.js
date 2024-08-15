n.d(t, {
	KT: function () {
		return C;
	},
	ZP: function () {
		return h;
	},
	nX: function () {
		return f;
	}
}),
	n(47120);
var a = n(735250),
	s = n(470079),
	r = n(25441),
	l = n(536895),
	i = n(260866);
let o = 'data-grid-item-id',
	c = 'data-grid-section',
	d = 'data-grid-prev-section-boundary',
	u = new Set([l.R8.UP, l.R8.DOWN, l.R8.LEFT, l.R8.RIGHT]);
function m(e) {
	let { section: t, column: n, row: a } = e,
		s = '['.concat(c, '="').concat(t, '"]'),
		r = '['.concat('aria-colindex', '="').concat(n, '"]'),
		l = '['.concat('aria-rowindex', '="').concat(a, '"]');
	return ''.concat(s).concat(r).concat(l);
}
function h(e) {
	let { id: t, isEnabled: n, setFocus: a } = e,
		c = s.useRef(null),
		h = s.useRef(!1),
		_ = s.useRef(null),
		g = s.useRef(n);
	s.useLayoutEffect(() => {
		g.current = n;
	}, [n]);
	let x = s.useCallback((e) => {
			var t;
			return (null !== (t = _.current) && void 0 !== t ? t : document).querySelector(e);
		}, []),
		f = s.useCallback(
			(e, t) => {
				g.current && a(e, t);
			},
			[a]
		),
		C = s.useCallback((e) => {
			if (g.current) {
				var t;
				null === (t = document.querySelector(e)) || void 0 === t || t.focus();
			}
		}, []),
		p = s.useCallback(
			(e) => {
				c.current = e;
				let n = (0, i.P1)(e, o),
					a = (0, i.x3)(e);
				f(n, a), (0, r.h)(t, a, !0);
			},
			[t, f]
		),
		[T, I] = s.useState(!1),
		E = s.useRef(T);
	s.useLayoutEffect(() => {
		E.current = T;
	}, [T]),
		s.useLayoutEffect(() => {
			let e = _.current;
			if (null != e)
				return (
					e.addEventListener('focusin', n),
					e.addEventListener('focusout', a),
					e.addEventListener('focus', s),
					e.addEventListener('scroll', r, { passive: !0 }),
					() => {
						e.removeEventListener('focusin', n), e.removeEventListener('focusout', a), e.removeEventListener('focus', s), e.removeEventListener('scroll', r);
					}
				);
			function n() {
				I(!0);
			}
			function a(e) {
				if (!e.currentTarget.contains(e.relatedTarget))
					I(!1),
						requestAnimationFrame(() => {
							let e = c.current;
							null !== e && null == x((0, i.P1)(e, o)) && C((0, i.P1)(t, 'data-grid-id'));
						});
			}
			function s() {
				let e = _.current;
				if (E.current || null == e) return;
			}
			function r() {
				h.current = !0;
			}
		}, [t, f, C, p, x]);
	let N = s.useCallback(
			(e) => {
				var t, n;
				if (!g.current) return;
				let a = c.current,
					s = _.current;
				if (null == a) return;
				let r = (0, i.P1)(a, o),
					h = null == s ? void 0 : s.querySelector(r);
				if (null == h) return;
				let f = parseInt(null !== (t = h.getAttribute('data-grid-section')) && void 0 !== t ? t : ''),
					C = parseInt(h.getAttribute('aria-rowindex')),
					T = parseInt(h.getAttribute('aria-colindex'));
				switch ((u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
					case l.R8.RIGHT: {
						let e = x(
							m({
								section: f,
								row: C,
								column: T + 1
							})
						);
						if (null != e) {
							let t = e.getAttribute(o);
							null != t && p(t);
						}
						return;
					}
					case l.R8.LEFT: {
						let e = x(
							m({
								section: f,
								row: C,
								column: T - 1
							})
						);
						if (null != e) {
							let t = e.getAttribute(o);
							null != t && p(t);
						}
						return;
					}
					case l.R8.DOWN: {
						let e = x(
							m({
								section: f,
								row: C + 1,
								column: T
							})
						);
						if (
							(null == e &&
								(e = x(
									m({
										section: f + 1,
										row: 0,
										column: T
									})
								)),
							null != e)
						) {
							let t = e.getAttribute(o);
							null != t && p(t);
						}
						return;
					}
					case l.R8.UP: {
						let e;
						if (0 === C) {
							let t = parseInt(h.getAttribute(d));
							null ==
								(e = x(
									m({
										section: f - 1,
										row: t,
										column: T
									})
								)) &&
								(e = x(
									m({
										section: f - 1,
										row: t - 1,
										column: T
									})
								));
						} else
							e = x(
								m({
									section: f,
									row: C - 1,
									column: T
								})
							);
						if (null != e) {
							let t = e.getAttribute(o);
							null != t && p(t);
						}
						return;
					}
					case l.R8.SPACE:
					case l.R8.ENTER: {
						if (e.repeat) return;
						let t = c.current;
						if (null != t) {
							let a = x((0, i.P1)(t, o)),
								s = null !== (n = null == a ? void 0 : a.ownerDocument) && void 0 !== n ? n : document,
								r = a === s.activeElement;
							null != a && r && (e.preventDefault(), e.stopPropagation(), null == a || a.click());
						}
					}
				}
			},
			[x, p]
		),
		b = s.useCallback(
			(e) => {
				let n = null != e ? (0, i.jb)(t, e) : null;
				c.current = n;
			},
			[t]
		);
	return s.useMemo(
		() => ({
			id: t,
			containerProps: {
				onKeyDown: N,
				ref: _
			},
			setFocus: b
		}),
		[t, N, b]
	);
}
let _ = {
		id: 'NO_LIST',
		onKeyDown() {},
		ref: s.createRef()
	},
	g = s.createContext({
		id: 'NO_LIST',
		setFocus() {}
	}),
	x = s.createContext(_);
function f(e) {
	let { id: t, section: n, row: a, column: l, boundaries: u } = e,
		[m, h] = s.useState(0 === a && 0 === l ? 0 : -1),
		{ id: _, setFocus: x } = s.useContext(g),
		f = s.useCallback(() => x(t), [t, x]);
	return (
		s.useLayoutEffect(
			() =>
				(0, r.N)(_, (e) => {
					h(e === t ? 0 : -1);
				}),
			[t, _]
		),
		{
			[o]: (0, i.jb)(_, t),
			[c]: n,
			[d]: u[n],
			role: 'gridcell',
			'aria-rowindex': a,
			'aria-colindex': l,
			tabIndex: m,
			onFocus: f
		}
	);
}
function C(e) {
	let { children: t, navigator: n } = e,
		{
			id: r,
			setFocus: l,
			containerProps: { onKeyDown: i, ref: o }
		} = n,
		c = s.useMemo(
			() => ({
				id: r,
				setFocus: l
			}),
			[r, l]
		),
		d = s.useMemo(
			() => ({
				onKeyDown: i,
				ref: o,
				id: r
			}),
			[i, o, r]
		);
	return (0, a.jsx)(x.Provider, {
		value: d,
		children: (0, a.jsx)(g.Provider, {
			value: c,
			children: t
		})
	});
}
