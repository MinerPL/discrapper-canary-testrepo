var i = n(735250), s = n(470079), a = n(512722), r = n.n(a), l = n(481060), o = n(176299), c = n(512847), d = n(612226), u = n(714338), _ = n(607070), E = n(317858), h = n(635395), I = n(5560), m = n(451478), p = n(585483), g = n(145604), T = n(718813), S = n(981631), C = n(352867);
t.Z = s.memo(function () {
    let e = s.useRef(null), t = s.useCallback(t => {
            let {
                duration: n,
                intensity: i
            } = t;
            if (_.Z.useReducedMotion || !m.Z.isFocused())
                return;
            let {current: s} = e;
            r()(null != s, 'Shakeable is shaken when not mounted'), s.shake(n, i);
        }, []);
    return s.useEffect(() => (u.Z.setLayout(d.ZP), u.Z.enable(), () => u.Z.disable()), []), s.useEffect(() => (p.S.subscribe(S.CkL.SHAKE_APP, t), () => {
        p.S.unsubscribe(S.CkL.SHAKE_APP, t);
    }), [t]), (0, E.Z)(), (0, i.jsxs)(l.Shakeable, {
        ref: e,
        className: C.app,
        children: [
            (0, i.jsx)(T.Z, {
                className: C.layers,
                children: (0, i.jsx)(o.Z, {})
            }),
            (0, i.jsx)(h.Z, {}),
            (0, i.jsx)(c.Z, {}),
            (0, i.jsx)(g.Z, {}),
            (0, i.jsx)(I.Z, {}),
            (0, i.jsx)(l.DnDKeyboardHelpBar, {})
        ]
    });
});
