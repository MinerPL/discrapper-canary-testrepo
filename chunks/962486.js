n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(229765),
    s = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(726115),
    h = n(294330),
    m = n(981631),
    p = n(417712);
let g = {
    page: m.ZY5.GUILD_DISCOVERY,
    object: m.qAy.CARD,
    section: m.jXE.DISCOVER_POPULAR
};
function f(e) {
    let { tab: t, guildIds: n, loading: m, onScroll: f, onGuildCardClick: _, onGuildCardSeen: E } = e,
        I = (0, u.Mf)(t),
        C = (0, u.a$)(t),
        v = (0, u.QW)(t),
        S = (0, u.lg)(t),
        N = r.useMemo(() => {
            let e = m ? 30 : n.length,
                t = [];
            for (let a = 0; a < e; a++) {
                var r;
                t.push(
                    (0, i.jsx)(
                        h.Eo,
                        {
                            guildId: null !== (r = n[a]) && void 0 !== r ? r : null,
                            index: a,
                            onClick: (e) => _(e, a, S, g),
                            onView: (e) => E(e, S)
                        },
                        n[a]
                    )
                );
            }
            return t;
        }, [S, n, m, _, E]);
    return (0, i.jsxs)(d.Z, {
        onScroll: f,
        children: [
            (0, i.jsx)(o.Z, {
                title: I,
                description: C,
                children: (0, i.jsx)(s.Z, {})
            }),
            (0, i.jsxs)(c.Z, {
                children: [
                    (0, i.jsx)(l.KY, {
                        location: 'global_discovery',
                        query: t
                    }),
                    (0, i.jsx)(a.Heading, {
                        className: p.sectionTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: v
                    }),
                    (0, i.jsx)('div', {
                        className: p.content,
                        children: N
                    })
                ]
            })
        ]
    });
}
