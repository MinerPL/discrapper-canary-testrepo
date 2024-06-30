n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(143927), o = n(622535), c = n(970606), d = n(945124), u = n(231467), _ = n(931515), E = n(207796), h = n(777734), I = n(976757), m = n(981631), p = n(920040);
t.Z = s.memo(function (e) {
    let {
            title: t,
            subtitle: n,
            className: a
        } = e, {
            loaded: g,
            clans: T,
            searchResult: S,
            searchCriteria: C
        } = (0, _.Qc)(20), N = (0, E.GN)(e => e.selectedTraits, l.Z), f = s.useMemo(() => new Set(C.games), [C.games]), A = s.useCallback(e => {
            var t;
            return (0, i.jsx)(u.ZP, {
                clan: e,
                className: p.card,
                affinity: null !== (t = e.affininty) && void 0 !== t ? t : (0, d.y)(e, C),
                traitsToHighlight: N,
                source: m.jXE.DISCOVER_SEARCH,
                prioritizedGameIds: f,
                onlyAnimateIconOnHover: !0
            }, e.id);
        }, [
            C,
            N,
            f
        ]), Z = s.useMemo(() => null != S && (0, I.Pw)(S) ? T : [], [
            T,
            S
        ]), L = s.useCallback(e => {
            e && Z.length > 0 && (0, c.Oe)(Z.map(e => e.id), 'top_picks', C);
        }, [
            Z,
            C
        ]);
    return 0 !== T.length && g ? (0, i.jsx)(o.$, {
        onChange: L,
        threshold: 0.25,
        children: (0, i.jsxs)('div', {
            className: r()(p.previewListContainer, a),
            children: [
                (0, i.jsx)('div', {
                    className: p.previewListSection,
                    children: (0, i.jsx)(h.Z, {
                        title: t,
                        subtitle: n
                    })
                }),
                (0, i.jsx)('div', {
                    className: p.previewList,
                    children: Z.map(e => A(e))
                })
            ]
        })
    }) : null;
});
