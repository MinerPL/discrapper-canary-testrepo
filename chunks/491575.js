var i = n(735250),
	a = n(470079),
	s = n(512722),
	r = n.n(s),
	l = n(481060),
	o = n(176299),
	c = n(512847),
	d = n(612226),
	u = n(714338),
	_ = n(607070),
	E = n(317858),
	h = n(635395),
	m = n(5560),
	I = n(451478),
	g = n(585483),
	p = n(145604),
	T = n(718813),
	S = n(981631),
	f = n(396386);
t.Z = a.memo(function () {
	let e = a.useRef(null),
		t = a.useCallback((t) => {
			let { duration: n, intensity: i } = t;
			if (_.Z.useReducedMotion || !I.Z.isFocused()) return;
			let { current: a } = e;
			r()(null != a, 'Shakeable is shaken when not mounted'), a.shake(n, i);
		}, []);
	return (
		a.useEffect(() => (u.Z.setLayout(d.ZP), u.Z.enable(), () => u.Z.disable()), []),
		a.useEffect(
			() => (
				g.S.subscribe(S.CkL.SHAKE_APP, t),
				() => {
					g.S.unsubscribe(S.CkL.SHAKE_APP, t);
				}
			),
			[t]
		),
		(0, E.Z)(),
		(0, i.jsxs)(l.Shakeable, {
			ref: e,
			className: f.app,
			children: [
				(0, i.jsx)(T.Z, {
					className: f.layers,
					children: (0, i.jsx)(o.Z, {})
				}),
				(0, i.jsx)(h.Z, {}),
				(0, i.jsx)(c.Z, {}),
				(0, i.jsx)(p.Z, {}),
				(0, i.jsx)(m.Z, {}),
				(0, i.jsx)(l.DnDKeyboardHelpBar, {})
			]
		})
	);
});
