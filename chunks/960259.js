n.d(t, {
	bW: function () {
		return u;
	},
	hN: function () {
		return c;
	},
	vW: function () {
		return l;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(679136),
	s = n(580747);
let o = i.createContext({
	enabled: !1,
	highlight: !1
});
function l(e) {
	let { children: t, overwriteValue: n } = e,
		{ enabled: l } = a.Z.useExperiment({ location: 'web redesign icon context' }),
		u = (0, s.Z)('highlight_redesigned_icons'),
		c = i.useMemo(
			() => ({
				enabled: l,
				highlight: u
			}),
			[l, u]
		);
	return (0, r.jsx)(o.Provider, {
		value: null != n ? n : c,
		children: t
	});
}
function u() {
	return i.useContext(o);
}
function c(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
		i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { size: 24 };
	return function (a) {
		let { enabled: s, highlight: o } = u();
		if (!s) return (0, r.jsx)(e, { ...a });
		{
			var l, c;
			let e = { ...a };
			for (let [t, r] of Object.entries(
				(n = {
					foreground: 'colorClass',
					color: 'color',
					...(null != n ? n : {})
				})
			)) {
				let n = a[t];
				if ((null == n && 'color' === t && (n = o ? 'yellow' : 'currentColor'), 'remove' === r)) {
					delete e[t];
					continue;
				}
				e[r] = n;
			}
			return (null !== (l = e.width) && void 0 !== l) || (e.width = i.size), (null !== (c = e.height) && void 0 !== c) || (e.height = i.size), (0, r.jsx)(t, { ...e });
		}
	};
}
