n.d(t, {
	ZP: function () {
		return l;
	},
	h9: function () {
		return o;
	},
	nM: function () {
		return s;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(846519);
let s = i.createContext({
		onPreventIdle: () => null,
		onAllowIdle: () => null,
		onForceIdle: () => null,
		onActive: () => null
	}),
	o = i.createContext(!1);
function l(e) {
	let { children: t, timeout: n } = e,
		[l, u] = i.useState(!1),
		c = i.useRef(new Set()),
		d = i.useRef(null);
	i.useEffect(
		() => (
			(d.current = new a.sW(n, () => u(!0))),
			d.current.delay(),
			() => {
				var e;
				null === (e = d.current) || void 0 === e || e.cancel(), (d.current = null);
			}
		),
		[n]
	);
	let _ = i.useCallback(
			(e) => {
				var t;
				u(!1), c.current.add(e), null === (t = d.current) || void 0 === t || t.cancel();
			},
			[c, d, u]
		),
		E = i.useCallback(
			(e) => {
				if ((c.current.delete(e), 0 === c.current.size)) {
					var t;
					null === (t = d.current) || void 0 === t || t.delay();
				}
			},
			[c, d]
		),
		f = i.useCallback(() => {
			if ((u(!1), 0 === c.current.size)) {
				var e;
				null === (e = d.current) || void 0 === e || e.delay();
			}
		}, [c, d, u]),
		h = i.useCallback(() => {
			var e;
			if (!(c.current.size > 0)) null === (e = d.current) || void 0 === e || e.cancel(), u(!0);
		}, [d, u]),
		p = i.useMemo(
			() => ({
				onAllowIdle: E,
				onPreventIdle: _,
				onActive: f,
				onForceIdle: h
			}),
			[E, _, f, h]
		);
	return (0, r.jsx)(o.Provider, {
		value: l,
		children: (0, r.jsx)(s.Provider, {
			value: p,
			children: t({
				idle: l,
				...p
			})
		})
	});
}
