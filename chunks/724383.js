var i = n(735250),
    a = n(470079),
    s = n(266067),
    r = n(143927),
    l = n(731965),
    o = n(252618),
    c = n(352057),
    d = n(319443),
    u = n(106075),
    _ = n(121711),
    E = n(823379),
    h = n(571457),
    m = n(836768),
    I = n(766219),
    p = n(49898),
    g = n(909482);
t.Z = function () {
    let e = (0, c.h)({ location: 'DiscoveryUISelectedTab' }),
        t = (0, m.d)((e) => e.selectedTab, r.Z),
        n = (function (e) {
            switch (e) {
                case p.F$.SERVERS:
                    return (0, i.jsx)(u.Z, {});
                case p.F$.APPS:
                    return (0, i.jsx)(d.Z, {});
                case p.F$.QUESTS:
                    return (0, i.jsx)(_.Z, {});
                default:
                    (0, E.vE)(e);
            }
        })(t),
        T = (0, s.TH)();
    return (
        a.useEffect(() => {
            let t = T.pathname,
                n = (0, I.IE)(t, e);
            n !== m.d.getState().selectedTab && (0, l.j)(() => m.d.setState({ selectedTab: n }));
        }, [e, T.pathname]),
        a.useEffect(() => {
            (0, h.RI)({ selectedTab: t });
        }, [t]),
        (0, i.jsxs)('section', {
            className: g.container,
            children: [(0, i.jsx)(o.yY, { location: (0, I.sm)(t) }), (0, i.jsx)('div', { className: g.dragRegion }), n]
        })
    );
};
