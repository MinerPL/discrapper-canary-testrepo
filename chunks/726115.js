n.d(t, {
    CD: function () {
        return v;
    },
    Ew: function () {
        return S;
    },
    Mf: function () {
        return p;
    },
    NL: function () {
        return R;
    },
    QW: function () {
        return T;
    },
    U0: function () {
        return C;
    },
    Xp: function () {
        return N;
    },
    a$: function () {
        return g;
    },
    lg: function () {
        return f;
    },
    oT: function () {
        return Z;
    },
    vb: function () {
        return I;
    }
}),
    n(411104),
    n(47120);
var i = n(544891),
    a = n(878727),
    s = n(706454),
    r = n(823379),
    l = n(900849),
    o = n(762692),
    c = n(331114),
    d = n(356164),
    u = n(164991),
    _ = n(128449),
    E = n(981631),
    h = n(731455),
    m = n(689938);
function I(e) {
    switch (e) {
        case _.vf.FEATURED:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_FEATURED_CATEGORY;
        case _.vf.GUILDS:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_CATEGORY;
        case _.vf.GAMING:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY;
        case _.vf.MUSIC:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY;
        case _.vf.ENTERTAINMENT:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY;
        case _.vf.TECH:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY;
        case _.vf.EDUCATION:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY;
        case _.vf.HUBS:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUBS_CATEGORY;
    }
}
function p(e) {
    switch (e) {
        case _.vf.FEATURED:
            return m.Z.Messages.GUILD_DISCOVERY_HOME_TITLE;
        case _.vf.GAMING:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY;
        case _.vf.MUSIC:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY;
        case _.vf.ENTERTAINMENT:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY;
        case _.vf.TECH:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY;
        case _.vf.EDUCATION:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY;
        case _.vf.HUBS:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE;
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function g(e) {
    switch (e) {
        case _.vf.FEATURED:
            return m.Z.Messages.GUILD_DISCOVERY_HOME_SUBTITLE;
        case _.vf.GAMING:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_DESCRIPTION;
        case _.vf.MUSIC:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_DESCRIPTION;
        case _.vf.ENTERTAINMENT:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_DESCRIPTION;
        case _.vf.TECH:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_DESCRIPTION;
        case _.vf.EDUCATION:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_DESCRIPTION;
        case _.vf.HUBS:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION;
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function T(e) {
    switch (e) {
        case _.vf.FEATURED:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_FEATURED;
        case _.vf.GAMING:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_GAMING;
        case _.vf.MUSIC:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_MUSIC;
        case _.vf.ENTERTAINMENT:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_ENTERTAINMENT;
        case _.vf.TECH:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_TECH;
        case _.vf.EDUCATION:
            return m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_EDUCATION;
        default:
            return null;
    }
}
function f(e) {
    if (null == e) return h.Hk;
    switch (e) {
        case _.vf.FEATURED:
        case _.vf.GUILDS:
        case _.vf.HUBS:
            return h.Hk;
        case _.vf.GAMING:
            return h.Gj.Activity;
        case _.vf.MUSIC:
            return h.Gj.Music;
        case _.vf.ENTERTAINMENT:
            return h.Gj.Television;
        case _.vf.TECH:
            return h.Gj.Science;
        case _.vf.EDUCATION:
            return h.Gj.Education;
        default:
            (0, r.vE)(e);
    }
}
function S(e) {
    return null == e || Date.now() - e > _.AF;
}
function C(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        splash: e.splash,
        banner: e.banner,
        icon: e.icon,
        features: new Set(e.features),
        presenceCount: e.approximate_presence_count,
        memberCount: e.approximate_member_count,
        premiumSubscriptionCount: e.premium_subscription_count,
        preferredLocale: e.preferred_locale,
        discoverySplash: e.discovery_splash,
        emojis: e.emojis,
        emojiCount: e.emoji_count
    };
}
function N() {
    var e;
    let [t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [s.default],
        n = h.dU,
        i = t.locale;
    return (null !== (e = n.find((e) => e.code === i)) && void 0 !== e ? e : n[0]).code;
}
function A(e) {
    let { loadId: t, categoryId: n, offset: i, query: a, languageCode: s } = e;
    '' !== a.trim() &&
        (l.tI(t, n),
        o.Z.fetchAlgoliaSearchResults(a, {
            categoryId: n,
            languageCode: s,
            offset: i,
            length: 12,
            filters: { approximate_member_count: l.sq }
        }));
}
function v(e) {
    let { loadId: t, categoryId: n, query: i, languageCode: a, offset: s } = e;
    if (
        !d.Z.getIsFetching({
            query: i,
            categoryId: n,
            languageCode: a
        })
    )
        d.Z.getIsInitialFetchComplete({
            query: i,
            categoryId: n,
            languageCode: a
        }) &&
            A({
                loadId: t,
                categoryId: n,
                query: i,
                languageCode: a,
                offset: s
            });
}
function Z(e) {
    let { loadId: t, categoryId: n, query: i, languageCode: a } = e,
        s = d.Z.getIsFetching({
            query: i,
            categoryId: n,
            languageCode: a
        }),
        r = d.Z.getIsInitialFetchComplete({
            query: i,
            categoryId: n,
            languageCode: a
        });
    !s &&
        !r &&
        A({
            loadId: t,
            categoryId: n,
            query: i,
            languageCode: a,
            offset: 0
        });
}
async function L(e) {
    return (
        !(0, a.x)(e) &&
        (
            await i.tn.get({
                url: E.ANM.GUILD_DISCOVERY_VALID_TERM,
                query: { term: e },
                oldFormErrors: !0
            })
        ).body.valid
    );
}
async function R(e) {
    let { loadId: t, categoryId: n, query: i, languageCode: a } = e;
    if ('' === i.trim()) return;
    let s = c.Z.getIsFetchingCounts(i),
        r = c.Z.getIsFetchingCounts(i);
    if (!s && !r) {
        if (
            ((0, u.LD)({
                fetchedQuery: i,
                resultsQuery: ''
            }),
            d.Z.getIsBlocked(i) || !(await L(i)))
        ) {
            o.Z.handleBlockedSearchQuery(i);
            return;
        }
        o.Z.fetchAlgoliaSearchResultCounts({
            query: i,
            algoliaFilters: { approximate_member_count: l.sq },
            onComplete: () => {
                (0, u.LD)({ resultsQuery: i });
            }
        }),
            Z({
                loadId: t,
                categoryId: n,
                query: i,
                languageCode: a
            });
    }
}
