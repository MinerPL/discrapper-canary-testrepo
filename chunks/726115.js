n.d(t, {
    CD: function () {
        return b;
    },
    Ew: function () {
        return S;
    },
    Mf: function () {
        return E;
    },
    NL: function () {
        return y;
    },
    QW: function () {
        return C;
    },
    U0: function () {
        return N;
    },
    Xp: function () {
        return T;
    },
    a$: function () {
        return I;
    },
    lg: function () {
        return v;
    },
    oT: function () {
        return A;
    },
    vL: function () {
        return L;
    },
    vb: function () {
        return _;
    }
}),
    n(411104),
    n(47120);
var i = n(544891),
    r = n(401919),
    a = n(706454),
    l = n(626135),
    s = n(823379),
    o = n(900849),
    c = n(762692),
    d = n(331114),
    u = n(356164),
    h = n(164991),
    m = n(128449),
    p = n(981631),
    g = n(731455),
    f = n(388032);
function _(e) {
    switch (e) {
        case m.vf.FEATURED:
            return f.intl.string(f.t['RU+DCQ']);
        case m.vf.GUILDS:
            return f.intl.string(f.t['B5tf+v']);
        case m.vf.GAMING:
            return f.intl.string(f.t['CD/USE']);
        case m.vf.MUSIC:
            return f.intl.string(f.t.nt9PLy);
        case m.vf.ENTERTAINMENT:
            return f.intl.string(f.t.gSbmdn);
        case m.vf.TECH:
            return f.intl.string(f.t['0A0By8']);
        case m.vf.EDUCATION:
            return f.intl.string(f.t.Gy9woq);
        case m.vf.HUBS:
            return f.intl.string(f.t['q469/f']);
    }
}
function E(e) {
    switch (e) {
        case m.vf.FEATURED:
            return f.intl.string(f.t.OlDfzM);
        case m.vf.GAMING:
            return f.intl.string(f.t['CD/USE']);
        case m.vf.MUSIC:
            return f.intl.string(f.t.nt9PLy);
        case m.vf.ENTERTAINMENT:
            return f.intl.string(f.t.gSbmdn);
        case m.vf.TECH:
            return f.intl.string(f.t['0A0By8']);
        case m.vf.EDUCATION:
            return f.intl.string(f.t.Gy9woq);
        case m.vf.HUBS:
            return f.intl.string(f.t.X5xPlZ);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function I(e) {
    switch (e) {
        case m.vf.FEATURED:
            return f.intl.string(f.t.SdMhrq);
        case m.vf.GAMING:
            return f.intl.string(f.t.AAJ5oq);
        case m.vf.MUSIC:
            return f.intl.string(f.t['SOio+P']);
        case m.vf.ENTERTAINMENT:
            return f.intl.string(f.t.R09vf3);
        case m.vf.TECH:
            return f.intl.string(f.t['Ew4d5+']);
        case m.vf.EDUCATION:
            return f.intl.string(f.t.sasIWV);
        case m.vf.HUBS:
            return f.intl.string(f.t['F/IQCA']);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function C(e) {
    switch (e) {
        case m.vf.FEATURED:
            return f.intl.string(f.t.crt84e);
        case m.vf.GAMING:
            return f.intl.string(f.t.fWbIpa);
        case m.vf.MUSIC:
            return f.intl.string(f.t.nfgDz8);
        case m.vf.ENTERTAINMENT:
            return f.intl.string(f.t.k1CYxs);
        case m.vf.TECH:
            return f.intl.string(f.t['4dawpq']);
        case m.vf.EDUCATION:
            return f.intl.string(f.t.uexPgY);
        default:
            return null;
    }
}
function v(e) {
    switch (e) {
        case m.vf.FEATURED:
            return g.Hk;
        case m.vf.GUILDS:
            return g.mE;
        case m.vf.GAMING:
            return g.Gj.Activity;
        case m.vf.MUSIC:
            return g.Gj.Music;
        case m.vf.ENTERTAINMENT:
            return g.Gj.Television;
        case m.vf.TECH:
            return g.Gj.Science;
        case m.vf.EDUCATION:
            return g.Gj.Education;
        case m.vf.HUBS:
            return g.gU;
        default:
            (0, s.vE)(e);
    }
}
function S(e) {
    return null == e || Date.now() - e > m.AF;
}
function N(e) {
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
function T() {
    var e;
    let [t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [a.default],
        n = (0, g.Cf)(),
        i = t.locale;
    return (null !== (e = n.find((e) => e.code === i)) && void 0 !== e ? e : n[0]).code;
}
function x(e) {
    let { loadId: t, categoryId: n, offset: i, query: r, languageCode: a } = e;
    '' !== r.trim() &&
        (o.tI(t, n),
        c.Z.fetchAlgoliaSearchResults(r, {
            categoryId: n,
            languageCode: a,
            offset: i,
            length: 12,
            filters: { approximate_member_count: o.sq }
        }));
}
function b(e) {
    let { loadId: t, categoryId: n, query: i, languageCode: r, offset: a } = e;
    if (
        !u.Z.getIsFetching({
            query: i,
            categoryId: n,
            languageCode: r
        })
    )
        u.Z.getIsInitialFetchComplete({
            query: i,
            categoryId: n,
            languageCode: r
        }) &&
            x({
                loadId: t,
                categoryId: n,
                query: i,
                languageCode: r,
                offset: a
            });
}
function A(e) {
    let { loadId: t, categoryId: n, query: i, languageCode: r } = e,
        a = u.Z.getIsFetching({
            query: i,
            categoryId: n,
            languageCode: r
        }),
        l = u.Z.getIsInitialFetchComplete({
            query: i,
            categoryId: n,
            languageCode: r
        });
    !a &&
        !l &&
        x({
            loadId: t,
            categoryId: n,
            query: i,
            languageCode: r,
            offset: 0
        });
}
async function Z(e) {
    return (
        !(0, r.x)(e) &&
        (
            await i.tn.get({
                url: p.ANM.GUILD_DISCOVERY_VALID_TERM,
                query: { term: e },
                oldFormErrors: !0
            })
        ).body.valid
    );
}
async function y(e) {
    let { loadId: t, categoryId: n, query: i, languageCode: r } = e;
    if ('' === i.trim()) return;
    let a = d.Z.getIsFetchingCounts(i),
        l = d.Z.getIsFetchingCounts(i);
    if (!a && !l) {
        if (
            ((0, h.LD)({
                fetchedQuery: i,
                resultsQuery: ''
            }),
            u.Z.getIsBlocked(i) || !(await Z(i)))
        ) {
            c.Z.handleBlockedSearchQuery(i);
            return;
        }
        c.Z.fetchAlgoliaSearchResultCounts({
            query: i,
            algoliaFilters: { approximate_member_count: o.sq },
            onComplete: () => {
                (0, h.LD)({ resultsQuery: i });
            }
        }),
            A({
                loadId: t,
                categoryId: n,
                query: i,
                languageCode: r
            });
    }
}
async function L(e) {
    let { loadId: t, guildId: n, index: i, categoryId: r, analyticsLocation: a, options: s } = e,
        c = {
            ...s,
            loadId: t
        };
    await o.Ub(n, a, c),
        l.default.track(p.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: i,
            category_id: r,
            location: a
        });
}
