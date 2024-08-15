n.d(t, {
	Y: function () {
		return s;
	},
	Z: function () {
		return o;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(937995);
function s(e) {
	let { onPreventIdle: t, onAllowIdle: n, onActive: r } = i.useContext(a.nM),
		s = i.useCallback(() => {
			t(e);
		}, [e, t]);
	return {
		preventIdle: s,
		allowIdle: i.useCallback(() => {
			n(e);
		}, [e, n]),
		onActive: r
	};
}
function o(e) {
	let { children: t, className: n } = e,
		{ onForceIdle: o, onActive: l } = i.useContext(a.nM),
		{ preventIdle: u, allowIdle: c } = s('interact');
	i.useEffect(() => () => c(), [c]);
	let d = i.useCallback(
		(e) => {
			var t;
			let n = null !== (t = e.target.ownerDocument) && void 0 !== t ? t : document;
			if (!e.currentTarget.contains(n.activeElement)) o();
		},
		[o]
	);
	return (0, r.jsx)('div', {
		className: n,
		onMouseEnter: u,
		onMouseLeave: c,
		onFocus: l,
		onBlur: d,
		children: t
	});
}
