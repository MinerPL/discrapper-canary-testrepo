n.d(t, {
	Z: function () {
		return c;
	}
}),
	n(47120);
var r = n(470079),
	i = n(611144),
	a = n(536895),
	s = n(260866);
let o = [a.R8.TAB];
function l(e, t, n) {
	return null != t && null != n ? '#'.concat((0, s.NE)(e, t, n)) : '[data-ref-id='.concat(e, ']');
}
function u(e) {
	return document.querySelector(e);
}
function c(e) {
	let {
			navId: t,
			columnCounts: n,
			focusedX: c = 0,
			focusedY: d = 0,
			onSelect: _,
			prepareFocus: E,
			getNewFocusPosition: f,
			maintainFocusPosition: h = !0,
			enabled: p = !0,
			onDispatch: I,
			autoFocusElement: m = !0,
			useVirtualFocus: T = !1
		} = e,
		g = r.useCallback(
			(e, t) => {
				let n = (0, i.Z)(e, t);
				return null != I && I(e, n, t), n;
			},
			[I]
		),
		[S, A] = r.useReducer(g, {
			focusedX: c,
			focusedY: d,
			columnCounts: n
		}),
		{ columnCounts: N, focusedX: v, focusedY: O } = S,
		[R] = r.useState(() => (0, s.P2)(A, 16));
	return (
		r.useEffect(() => {
			A({
				type: i.s.UPDATE_COLUMN_COUNTS,
				columnCounts: n
			});
		}, [n]),
		(function (e) {
			let {
					navId: t,
					columnCounts: n,
					focusedX: c,
					focusedY: d,
					onSelect: _,
					prepareFocus: E,
					getNewFocusPosition: f,
					dispatch: h,
					maintainFocusPosition: p,
					enabled: I,
					autoFocusElement: m,
					useVirtualFocus: T
				} = e,
				g = r.useRef();
			g.current = I;
			let S = u(l(t, c, d)),
				[A, N] = r.useState(!1),
				[v, O] = r.useState(!1),
				[R, C] = r.useState(!1),
				[y] = r.useState(
					() =>
						new s.$o((e) => {
							let [t, n] = e.split(',').map(Number);
							return () => {
								N(!0),
									h({
										type: i.s.SET_FOCUSED_POSITION,
										x: t,
										y: n
									});
							};
						})
				);
			r.useEffect(() => () => y.clean(), [y]);
			let D = r.useCallback(
					(e) => {
						if (!g.current || !m) return !1;
						e.focus();
					},
					[m]
				),
				L = r.useCallback(
					(e, n) => {
						let r = l(t, e, n);
						(null != E ? E(e, n, r) : Promise.resolve()).then(() => {
							let e = u(r);
							null != e ? (D(e), O(!1)) : requestAnimationFrame(() => O(!0));
						});
					},
					[t, E, D]
				),
				b = r.useCallback(
					function () {
						let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
							[n, r] = null != f ? f(c, d) : [c, d];
						if (
							(n !== c || r !== d) &&
							(h({
								type: i.s.SET_FOCUSED_POSITION,
								x: n,
								y: r
							}),
							!e)
						) {
							C(!0);
							return;
						}
						let a = u(l(t, n, r));
						null != a && (C(!0), D(a));
					},
					[h, c, d, f, t, D]
				),
				[M, P] = r.useState(!1);
			r.useEffect(() => {
				if (!M || !A) return;
				P(!1);
				let e = u(l(t, c, d));
				if (null != e) {
					D(e);
					return;
				}
				N(!1);
				let n = u(l(t));
				null != n && D(n);
			}, [t, M, A, D, c, d]);
			let U = r.useCallback((e) => {
				g.current && null == e && P(!0);
			}, []);
			r.useEffect(() => {
				A && v && null != S && (D(S), O(!1));
			}, [v, S]),
				r.useEffect(() => {
					A && (!R && L(c, d), C(!1));
				}, [c, d]);
			let w = r.useCallback(
					(e) => {
						if (!g.current) return;
						if (
							!T &&
							o.includes(e.key) &&
							!(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
							e.currentTarget === e.target
						) {
							e.preventDefault(), e.stopPropagation(), b();
							return;
						}
						let t = (function (e) {
							switch (e.key) {
								case a.R8.ENTER:
									return a.Us.SELECT_FOCUSED_ITEM;
								case a.R8.UP:
									return a.Us.NAVIGATE_UP;
								case a.R8.DOWN:
									return a.Us.NAVIGATE_DOWN;
								case a.R8.RIGHT:
									return a.Us.NAVIGATE_RIGHT;
								case a.R8.LEFT:
									return a.Us.NAVIGATE_LEFT;
								case a.R8.HOME:
									if (e.ctrlKey) return a.Us.NAVIGATE_START;
									return a.Us.NAVIGATE_INLINE_START;
								case a.R8.END:
									if (e.ctrlKey) return a.Us.NAVIGATE_END;
									return a.Us.NAVIGATE_INLINE_END;
							}
						})(e);
						switch (t) {
							case a.Us.NAVIGATE_UP:
							case a.Us.NAVIGATE_DOWN:
							case a.Us.NAVIGATE_RIGHT:
							case a.Us.NAVIGATE_LEFT:
							case a.Us.NAVIGATE_INLINE_START:
							case a.Us.NAVIGATE_INLINE_END:
							case a.Us.NAVIGATE_START:
							case a.Us.NAVIGATE_END:
								!(0 === n.length || (0 === c && 0 === d && t === a.Us.NAVIGATE_LEFT)) &&
									(e.preventDefault(), e.stopPropagation()),
									h({ type: t });
								return;
							case a.Us.SELECT_FOCUSED_ITEM:
								var r;
								if ((m && (null == (r = S) ? void 0 : r.ownerDocument.activeElement) !== r) || e.repeat) return;
								e.preventDefault(),
									e.stopPropagation(),
									h({ type: t }),
									null != _ ? _(c, d, e) : null != S && S.click();
						}
					},
					[b, h, m, S, _, c, d]
				),
				x = r.useCallback(
					(e) =>
						e.currentTarget !== e.target
							? (!A && (N(!0), C(!0)), !1)
							: A
								? (b(!1), !1)
								: void (p && null != S ? L(c, d) : b(!0)),
					[A, p, S, b, L, c, d]
				),
				G = r.useCallback((e) => {
					if (e.target !== e.currentTarget) {
						if (e.currentTarget.contains(e.relatedTarget)) return !1;
						N(!1);
					}
				}, []),
				k = r.useMemo(() => Math.max(...n), [n]),
				B = r.useCallback(
					() => ({
						role: 'grid',
						'aria-rowcount': n.length,
						'aria-colcount': k,
						tabIndex: A && p ? -1 : 0,
						'data-ref-id': t,
						onKeyDown: w,
						onFocus: x,
						onBlur: G
					}),
					[n.length, k, A, p, t, w, x, G]
				),
				F = r.useCallback(
					(e, n) => {
						let r = {
							role: 'gridcell',
							'aria-rowindex': n + 1,
							'aria-colindex': e + 1,
							id: (0, s.NE)(t, e, n),
							tabIndex: p && e === c && n === d ? 0 : -1,
							onFocus: y.get(''.concat(e, ',').concat(n))
						};
						return e === c && n === d && (r.ref = U), r;
					},
					[t, p, c, d, y, U]
				),
				V = r.useCallback(
					(e) => ({
						role: 'row',
						'aria-rowindex': e + 1
					}),
					[]
				);
			return r.useMemo(
				() => ({
					dispatch: h,
					getContainerProps: B,
					getItemProps: F,
					getRowProps: V
				}),
				[h, B, F, V]
			);
		})({
			navId: t,
			columnCounts: N,
			focusedX: v,
			focusedY: O,
			dispatch: R,
			onSelect: _,
			prepareFocus: E,
			getNewFocusPosition: f,
			maintainFocusPosition: h,
			enabled: p,
			autoFocusElement: m,
			useVirtualFocus: T
		})
	);
}
