n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(571457),
    s = n(823379),
    o = n(762692),
    c = n(356164),
    d = n(726115),
    u = n(962486),
    h = n(62938),
    m = n(149788),
    p = n(128449),
    g = n(731455);
function f(e) {
    let { onScroll: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        s = (0, a.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds({ categoryId: g.Hk })) && void 0 !== e ? e : p.q5;
        }),
        d = (0, a.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsFetching({ categoryId: g.Hk })) || void 0 === e || e;
        });
    return (
        r.useEffect(() => {
            o.Z.fetchFeaturedGuilds();
        }, []),
        (0, i.jsx)(u.Z, {
            tab: p.vf.FEATURED,
            guildIds: s,
            loading: d,
            onScroll: t,
            onGuildCardSeen: n,
            onGuildCardClick: l
        })
    );
}
function _(e) {
    let { tab: t, onScroll: n, onGuildCardSeen: l, onGuildCardClick: s } = e,
        h = (0, d.lg)(t),
        m = (0, a.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds({ categoryId: h })) && void 0 !== e ? e : p.q5;
        }),
        g = (0, a.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsFetching({ categoryId: h })) || void 0 === e || e;
        });
    return (
        r.useEffect(() => {
            o.Z.fetchCategoryFeaturedGuilds({ categoryId: h });
        }, [h]),
        (0, i.jsx)(u.Z, {
            tab: t,
            guildIds: m,
            loading: g,
            onScroll: n,
            onGuildCardSeen: l,
            onGuildCardClick: s
        })
    );
}
function E(e) {
    let { selectedTab: t, onScroll: n, onGuildCardSeen: a, onGuildCardClick: o } = e;
    switch (
        (r.useEffect(() => {
            let e = (0, d.lg)(t);
            (0, l.kR)({ selectedCategoryId: e });
        }, [t]),
        t)
    ) {
        case p.vf.FEATURED:
            return (0, i.jsx)(f, {
                tab: t,
                onScroll: n,
                onGuildCardClick: o,
                onGuildCardSeen: a
            });
        case p.vf.GAMING:
        case p.vf.MUSIC:
        case p.vf.ENTERTAINMENT:
        case p.vf.TECH:
        case p.vf.EDUCATION:
            return (0, i.jsx)(
                _,
                {
                    tab: t,
                    onScroll: n,
                    onGuildCardClick: o,
                    onGuildCardSeen: a
                },
                t
            );
        case p.vf.HUBS:
            return (0, i.jsx)(m.Z, { onScroll: n });
        case p.vf.GUILDS:
            return (0, i.jsx)(h.Z, { onScroll: n });
        default:
            (0, s.vE)(t);
    }
}
