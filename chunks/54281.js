n.d(t, {
	V: function () {
		return a;
	}
});
var r = n(735250),
	i = n(470079);
let a = i.forwardRef(function (e, t) {
	let { className: n, children: a } = e,
		s = i.useRef(null),
		o = i.useRef(null);
	return (
		i.useImperativeHandle(
			t,
			() => ({
				focus: () => {
					var e;
					let t = s.current;
					null != t &&
						(null == o.current && (o.current = t.querySelector('[tabindex="0"]')),
						null === (e = o.current) || void 0 === e || e.focus());
				},
				blur: () => {
					var e;
					return null === (e = o.current) || void 0 === e ? void 0 : e.blur();
				},
				activate: () => !1
			}),
			[]
		),
		i.useLayoutEffect(() => {
			let e = s.current;
			if (null != e)
				return (
					e.addEventListener('focusin', t),
					() => {
						e.removeEventListener('focusin', t);
					}
				);
			function t(e) {
				o.current = e.target;
			}
		}, []),
		(0, r.jsx)('div', {
			ref: s,
			className: n,
			style: { position: 'relative' },
			children: a
		})
	);
});
