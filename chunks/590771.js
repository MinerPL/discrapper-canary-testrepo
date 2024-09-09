n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(212093),
    l = n(571457),
    o = n(683301),
    c = n(823379),
    d = n(900849),
    u = n(726115),
    _ = n(962486),
    E = n(62938),
    h = n(149788),
    m = n(128449);
function I(e) {
    let { onScroll: t, onGuildCardSeen: n, onGuildCardClick: l } = e,
        c = (0, s.Wu)([o.ZP], () => {
            var e, t;
            return null !== (t = null === (e = o.ZP.getDiscoverableGuilds().featured) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : m.ry;
        });
    return (
        a.useEffect(() => {
            (0, r.$z)(0, 30);
        }, []),
        (0, i.jsx)(_.Z, {
            tab: m.vf.FEATURED,
            guilds: c,
            onScroll: t,
            onGuildCardSeen: n,
            onGuildCardClick: l
        })
    );
}
function g(e) {
    let { tab: t, onScroll: n, onGuildCardSeen: l, onGuildCardClick: c } = e,
        d = (0, u.lg)(t),
        E = (0, s.Wu)([o.ZP], () => {
            var e, t;
            return null !== (t = null === (e = o.ZP.getDiscoverableGuilds()[d]) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : m.ry;
        });
    return (
        a.useEffect(() => {
            (0, r.K5)(d);
        }, [d]),
        (0, i.jsx)(_.Z, {
            tab: t,
            guilds: E,
            onScroll: n,
            onGuildCardSeen: l,
            onGuildCardClick: c
        })
    );
}
function p(e) {
    let { loadId: t, selectedTab: n, onScroll: r, onGuildCardSeen: _, onGuildCardClick: p } = e,
        T = (0, u.lg)(n),
        S = (0, s.e7)([o.ZP], () => o.ZP.isFetching()),
        C = (0, s.Wu)([o.ZP], () => o.ZP.getDiscoverableGuilds().featured.guilds),
        f = (0, s.Wu)([o.ZP], () => o.ZP.getDiscoverableGuilds().gamesYouPlay.guilds),
        N = a.useRef(S);
    switch (
        (a.useEffect(() => {
            N.current !== S &&
                !S &&
                d.Zt({
                    allGuilds: C,
                    loadId: t,
                    gamesYouPlayGuilds: f,
                    categoryId: T
                }),
                (N.current = S);
        }, [C, T, f, S, t]),
        a.useEffect(() => {
            (0, l.kR)({ selectedCategoryId: T });
        }, [T]),
        n)
    ) {
        case m.vf.FEATURED:
            return (0, i.jsx)(I, {
                tab: n,
                onScroll: r,
                onGuildCardClick: p,
                onGuildCardSeen: _
            });
        case m.vf.GAMING:
        case m.vf.MUSIC:
        case m.vf.ENTERTAINMENT:
        case m.vf.TECH:
        case m.vf.EDUCATION:
            return (0, i.jsx)(
                g,
                {
                    tab: n,
                    onScroll: r,
                    onGuildCardClick: p,
                    onGuildCardSeen: _
                },
                n
            );
        case m.vf.HUBS:
            return (0, i.jsx)(h.X, {
                onScroll: r,
                loadId: t
            });
        case m.vf.GUILDS:
            return (0, i.jsx)(E.U, { onScroll: r });
        default:
            (0, c.vE)(n);
    }
}
