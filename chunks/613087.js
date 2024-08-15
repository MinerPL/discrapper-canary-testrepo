n.d(t, {
	B$: function () {
		return c;
	},
	l7: function () {
		return d;
	},
	p: function () {
		return u;
	}
}),
	n(47120),
	n(653041);
var s = n(735250),
	o = n(470079),
	a = n(699581),
	r = n(338545),
	l = n(393238),
	i = n(743294);
let c = o.createContext({
		registerComponent: () => {},
		unregisterComponent: () => {},
		animatedComponents: {},
		expandedContentRef: o.createRef(),
		collapsedContentRef: o.createRef(),
		recalculateAnimationPositions: () => {},
		animatedComponentProps: [],
		expansionSpring: null,
		mountPoints: new Map()
	}),
	d = o.forwardRef(function (e, t) {
		var n;
		let { children: i, id: d, inState: u, isTextTransition: p = !1 } = e,
			{
				recalculateAnimationPositions: x,
				registerComponent: m,
				unregisterComponent: g,
				expansionSpring: _,
				mountPoints: C
			} = o.useContext(c),
			f = o.useRef(null),
			h = o.useRef(null),
			E = o.useRef();
		o.useEffect(() => {
			x();
		}, [x]),
			o.useLayoutEffect(() => {
				let e = f.current;
				return (
					null != e && m(e, d, u),
					() => {
						null != e && g(d, u);
					}
				);
			}, [d, u, m, g]);
		let T = o.useCallback(
			(e) => {
				let { height: t } = e;
				E.current !== t && (x(), (E.current = t));
			},
			[x]
		);
		(0, l.P)(f, T);
		let S = null === (n = C.get(d)) || void 0 === n ? void 0 : n.current,
			v = null;
		return (
			null == S
				? (v = null)
				: p && null != _
					? (v = (0, s.jsxs)(s.Fragment, {
							children: [
								'collapsed' === u &&
									(0, a.createPortal)(
										(0, s.jsx)(r.animated.div, {
											style: {
												position: 'absolute',
												opacity: _.to({
													range: [0, 1],
													output: [1, 0]
												})
											},
											children: i(h)
										}),
										S
									),
								'expanded' === u &&
									(0, a.createPortal)(
										(0, s.jsx)(r.animated.div, {
											style: {
												position: 'absolute',
												opacity: _.to({
													range: [0, 1],
													output: [0, 1]
												})
											},
											children: i(h)
										}),
										S
									)
							]
						}))
					: 'collapsed' === u && (v = (0, a.createPortal)(i(h), S)),
			(0, s.jsxs)('div', {
				style: { opacity: (null == v && 'collapsed' === u) || null == S ? 1 : 0 },
				ref: t,
				children: [i(f), v]
			})
		);
	}),
	u = (e) => {
		let { children: t, expandedContentRef: n, collapsedContentRef: a, expansionSpring: r } = e,
			[l, d] = o.useState({}),
			[u, p] = o.useState([]),
			[x, m] = o.useState(() => new Map()),
			g = o.useCallback((e, t, n) => {
				d((s) => {
					var o;
					let a =
						null !== (o = s[t]) && void 0 !== o
							? o
							: {
									expanded: null,
									collapsed: null
								};
					return {
						...s,
						[t]: {
							...a,
							[n]: e
						}
					};
				}),
					m((e) => {
						let n = new Map(e);
						return n.set(t, o.createRef()), n;
					});
			}, []),
			_ = o.useCallback((e, t) => {
				let n = !1;
				d((s) => {
					var o;
					let a =
						null !== (o = s[e]) && void 0 !== o
							? o
							: {
									expanded: null,
									collapsed: null
								};
					return (
						(a[t] = null),
						(n = null == a.expanded && null == a.collapsed),
						{
							...s,
							[e]: a
						}
					);
				}),
					n &&
						m((t) => {
							let n = new Map(t);
							return n.delete(e), n;
						});
			}, []),
			C = o.useCallback(() => {
				let e = [];
				for (let t in l) {
					if (null == l[t] || null == n.current || null == a.current) continue;
					let s = l[t].collapsed,
						o = l[t].expanded;
					if (null == s || null == o) continue;
					let r = o.getBoundingClientRect(),
						c = n.current.getBoundingClientRect(),
						d = s.getBoundingClientRect(),
						u = a.current.getBoundingClientRect(),
						p = r.top - c.top + i.Li,
						x = d.top - u.top,
						m = r.left - c.left + i.Li,
						g = d.left - u.left,
						_ = -r.right + c.right + i.Li,
						C = -d.right + u.right;
					e.push({
						id: t,
						collapsedLeft: g,
						expandedLeft: m,
						collapsedRight: C,
						expandedRight: _,
						collapsedTop: x,
						expandedTop: p,
						width: r.width
					});
				}
				p(e);
			}, [l, n, a, p]);
		return (0, s.jsx)(c.Provider, {
			value: {
				registerComponent: g,
				unregisterComponent: _,
				animatedComponents: l,
				expandedContentRef: n,
				collapsedContentRef: a,
				recalculateAnimationPositions: C,
				animatedComponentProps: u,
				expansionSpring: r,
				mountPoints: x
			},
			children: t
		});
	};
