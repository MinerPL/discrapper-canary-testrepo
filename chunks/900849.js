n.d(t, {
    Az: function () {
        return g;
    },
    Eg: function () {
        return C;
    },
    IZ: function () {
        return S;
    },
    Lq: function () {
        return m;
    },
    P1: function () {
        return r;
    },
    PP: function () {
        return I;
    },
    Ub: function () {
        return p;
    },
    Zt: function () {
        return T;
    },
    c6: function () {
        return O;
    },
    j$: function () {
        return N;
    },
    m9: function () {
        return v;
    },
    mT: function () {
        return R;
    },
    sq: function () {
        return h;
    },
    tI: function () {
        return A;
    }
}),
    n(47120);
var r,
    i,
    a = n(664751),
    s = n(544891),
    o = n(749210),
    l = n(41776),
    u = n(703656),
    c = n(769654),
    d = n(650774),
    _ = n(430824),
    E = n(626135),
    f = n(981631);
((i = r || (r = {})).SEARCH = 'Search'), (i.RECOMMENDED = 'Recommended'), (i.POPULAR = 'Popular'), (i.RECOMMENDED_E3 = 'Recommended - E3'), (i.HEADER = 'Header'), (i.GLOBAL_DISCOVERY = 'Global Discovery'), (i.FORWARD_BREADCRUMB = 'Forward Breadcrumb');
let h = '>200';
async function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { channelId: r, onSuccess: i, joinSource: a, loadId: s, setsHistorySnapshot: d = !0, shouldNavigate: E = !0 } = n,
        f = (0, u.s1)();
    d && l.Z.setHistorySnapshot({ ...f });
    let h = _.Z.getGuild(e),
        p = { state: { analyticsSource: t } };
    null != h && null != h.joinedAt
        ? E && (0, c.X)(e, p)
        : (await o.Z.joinGuild(e, {
              lurker: !0,
              source: a,
              loadId: s,
              lurkLocation: null == t ? void 0 : t.page
          }),
          E &&
              (await o.Z.transitionToGuildSync(
                  e,
                  {
                      ...p,
                      welcomeModalChannelId: r,
                      search: f.location.search
                  },
                  r
              ))),
        null == i || i();
}
async function m(e) {
    let t,
        { loadId: n, guildId: i, index: a, analyticsContext: s, categoryId: o } = e;
    'string' == typeof s && s in r && (t = s);
    let l = {
        page: f.ZY5.GUILD_DISCOVERY,
        object: f.qAy.CARD,
        section: t
    };
    await p(i, l, { loadId: n }),
        (function (e) {
            let { loadId: t, guildId: n, index: r, analyticsContext: i, categoryId: a } = e,
                s = {
                    page: f.ZY5.GUILD_DISCOVERY,
                    section: i
                };
            'string' != typeof i && null != i.location && (s = i.location),
                E.default.track(f.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
                    location: s,
                    guild_id: n,
                    load_id: t,
                    card_index: r,
                    location_object: f.qAy.CARD,
                    category_id: a
                });
        })({
            loadId: n,
            guildId: i,
            index: a,
            analyticsContext: s,
            categoryId: o
        });
}
function I(e) {
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
        emojiCount: e.emoji_count,
        stickers: e.stickers,
        stickerCount: e.sticker_count,
        keywords: e.keywords
    };
}
function T(e) {
    let { loadId: t, gamesYouPlayGuilds: n, allGuilds: r, categoryId: i, recommendationsSource: a = null } = e,
        s = n.length,
        o = r.length;
    E.default.track(f.rMx.GUILD_DISCOVERY_VIEWED, {
        load_id: t,
        num_guilds: s + o,
        num_guilds_recommended: s,
        num_guilds_popular: o,
        recommended_guild_ids: n.map((e) => e.id),
        category_id: i,
        recommendations_source: a
    });
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    E.default.track(f.rMx.GUILD_DISCOVERY_EXITED, {
        load_id: e,
        guild_ids_viewed: t,
        recommendations_source: n
    });
}
function S(e) {
    E.default.track(f.rMx.SEARCH_CLOSED, { load_id: e });
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    E.default.track(f.rMx.SEARCH_STARTED, {
        search_type: f.aib.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t
    });
}
function N(e, t, n, r) {
    E.default.track(f.rMx.SEARCH_STARTED, {
        search_type: f.aib.GUILD_DISCOVERY_TAG,
        load_id: e,
        location: {
            page: f.ZY5.GUILD_DISCOVERY,
            section: n
        },
        category_id: t,
        guild_id: r
    });
}
function v(e) {
    let { categoryId: t } = e;
    E.default.track(f.rMx.GUILD_DISCOVERY_SEARCH_FAILED, { category_id: t });
}
function O(e) {
    let { loadId: t, searchId: n, query: r, guildResults: i, analyticsContext: a, categoryId: s, isTagSearch: o } = e;
    E.default.track(f.rMx.SEARCH_RESULT_VIEWED, {
        search_type: o ? f.aib.GUILD_DISCOVERY_TAG : f.aib.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== i ? i.length : null,
        guild_ids: void 0 !== i ? i.map((e) => e.id) : null,
        query: r,
        location: a.location,
        category_id: s
    });
}
function R(e) {
    let t = l.Z.getLoadId(e);
    E.default.track(f.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: d.Z.getMemberCount(e)
    });
}
async function C(e) {
    try {
        var t, n;
        let r = await s.tn.get({
                url: f.ANM.GUILD_DISCOVERY,
                query: a.stringify({ guild_ids: e }),
                oldFormErrors: !0
            }),
            i = null === (n = r.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
        if (null == i) return i;
        return I(i);
    } catch (e) {
        return null;
    }
}
