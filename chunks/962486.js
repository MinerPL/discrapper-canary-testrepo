n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(229765),
    l = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(726115),
    _ = n(294330),
    E = n(417712);
function h(e) {
    let { tab: t, guildIds: n, loading: h, onScroll: m, onGuildCardClick: I, onGuildCardSeen: p } = e,
        g = (0, u.Mf)(t),
        T = (0, u.a$)(t),
        f = (0, u.QW)(t),
        S = (0, u.lg)(t),
        C = a.useMemo(() => {
            let e = h ? 30 : n.length,
                t = [];
            for (let s = 0; s < e; s++) {
                var a;
                t.push(
                    (0, i.jsx)(_.Eo, {
                        guildId: null !== (a = n[s]) && void 0 !== a ? a : null,
                        index: s,
                        onClick: (e) => I(e, s, S),
                        onView: (e) => p(e, S)
                    })
                );
            }
            return t;
        }, [S, n, h, I, p]);
    return (0, i.jsxs)(d.Z, {
        onScroll: m,
        children: [
            (0, i.jsx)(o.Z, {
                title: g,
                description: T,
                children: (0, i.jsx)(l.Z, {})
            }),
            (0, i.jsxs)(c.Z, {
                children: [
                    (0, i.jsx)(r.KY, {
                        location: 'global_discovery',
                        query: t
                    }),
                    (0, i.jsx)(s.Heading, {
                        className: E.sectionTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: f
                    }),
                    (0, i.jsx)('div', {
                        className: E.content,
                        children: C
                    })
                ]
            })
        ]
    });
}
