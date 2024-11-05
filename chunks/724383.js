var i = n(200651),
    r = n(192379),
    a = n(512969),
    l = n(252618),
    s = n(352057),
    o = n(319443),
    c = n(106075),
    d = n(121711),
    u = n(823379),
    h = n(571457),
    m = n(836768),
    p = n(766219),
    g = n(49898),
    f = n(909482);
t.Z = function () {
    let e = (0, s.h)({ location: 'DiscoveryUISelectedTab' }),
        t = m.Z.useField('selectedTab'),
        n = (function (e) {
            switch (e) {
                case g.F$.SERVERS:
                    return (0, i.jsx)(c.Z, {});
                case g.F$.APPS:
                    return (0, i.jsx)(o.Z, {});
                case g.F$.QUESTS:
                    return (0, i.jsx)(d.Z, {});
                default:
                    (0, u.vE)(e);
            }
        })(t),
        _ = (0, a.TH)();
    return (
        r.useEffect(() => {
            let t = _.pathname,
                n = (0, p.IE)(t, e);
            n !== m.Z.getField('selectedTab') && m.Z.setState({ selectedTab: n });
        }, [e, _.pathname]),
        r.useEffect(() => {
            (0, h.RI)({ selectedTab: t });
        }, [t]),
        (0, i.jsxs)('section', {
            className: f.container,
            children: [(0, i.jsx)(l.yY, { location: (0, p.sm)(t) }), (0, i.jsx)('div', { className: f.dragRegion }), n]
        })
    );
};
