n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(571457),
    l = n(823379),
    o = n(762692),
    c = n(356164),
    d = n(726115),
    u = n(962486),
    _ = n(62938),
    E = n(149788),
    h = n(128449),
    m = n(731455);
function I(e) {
    let { onScroll: t, onGuildCardSeen: n, onGuildCardClick: r } = e,
        l = (0, s.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds({ categoryId: m.Hk })) && void 0 !== e ? e : h.q5;
        }),
        d = (0, s.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsFetching({ categoryId: m.Hk })) || void 0 === e || e;
        });
    return (
        a.useEffect(() => {
            o.Z.fetchFeaturedGuilds();
        }, []),
        (0, i.jsx)(u.Z, {
            tab: h.vf.FEATURED,
            guildIds: l,
            loading: d,
            onScroll: t,
            onGuildCardSeen: n,
            onGuildCardClick: r
        })
    );
}
function p(e) {
    let { tab: t, onScroll: n, onGuildCardSeen: r, onGuildCardClick: l } = e,
        _ = (0, d.lg)(t),
        E = (0, s.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds({ categoryId: _ })) && void 0 !== e ? e : h.q5;
        }),
        m = (0, s.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsFetching({ categoryId: _ })) || void 0 === e || e;
        });
    return (
        a.useEffect(() => {
            o.Z.fetchCategoryFeaturedGuilds({ categoryId: _ });
        }, [_]),
        (0, i.jsx)(u.Z, {
            tab: t,
            guildIds: E,
            loading: m,
            onScroll: n,
            onGuildCardSeen: r,
            onGuildCardClick: l
        })
    );
}
function g(e) {
    let { loadId: t, selectedTab: n, onScroll: s, onGuildCardSeen: o, onGuildCardClick: c } = e;
    switch (
        (a.useEffect(() => {
            let e = (0, d.lg)(n);
            (0, r.kR)({ selectedCategoryId: e });
        }, [n]),
        n)
    ) {
        case h.vf.FEATURED:
            return (0, i.jsx)(I, {
                tab: n,
                onScroll: s,
                onGuildCardClick: c,
                onGuildCardSeen: o
            });
        case h.vf.GAMING:
        case h.vf.MUSIC:
        case h.vf.ENTERTAINMENT:
        case h.vf.TECH:
        case h.vf.EDUCATION:
            return (0, i.jsx)(
                p,
                {
                    tab: n,
                    onScroll: s,
                    onGuildCardClick: c,
                    onGuildCardSeen: o
                },
                n
            );
        case h.vf.HUBS:
            return (0, i.jsx)(E.X, {
                onScroll: s,
                loadId: t
            });
        case h.vf.GUILDS:
            return (0, i.jsx)(_.U, { onScroll: s });
        default:
            (0, l.vE)(n);
    }
}
