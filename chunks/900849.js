n.d(t, {
    Az: function () {
        return E;
    },
    Eg: function () {
        return A;
    },
    IZ: function () {
        return v;
    },
    PP: function () {
        return g;
    },
    Ub: function () {
        return m;
    },
    c6: function () {
        return b;
    },
    m9: function () {
        return S;
    },
    mT: function () {
        return y;
    },
    rC: function () {
        return T;
    },
    sq: function () {
        return p;
    },
    tI: function () {
        return I;
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
    f = n(430824),
    _ = n(626135),
    h = n(981631);
((i = r || (r = {})).SEARCH = 'Search'), (i.RECOMMENDED = 'Recommended'), (i.POPULAR = 'Popular'), (i.RECOMMENDED_E3 = 'Recommended - E3'), (i.HEADER = 'Header'), (i.GLOBAL_DISCOVERY = 'Global Discovery'), (i.FORWARD_BREADCRUMB = 'Forward Breadcrumb');
let p = '>200';
async function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { channelId: r, onSuccess: i, joinSource: a, loadId: s, setsHistorySnapshot: d = !0, shouldNavigate: _ = !0 } = n,
        h = (0, u.s1)();
    d && l.Z.setHistorySnapshot({ ...h });
    let p = f.Z.getGuild(e),
        m = { state: { analyticsSource: t } };
    null != p && null != p.joinedAt
        ? _ && (0, c.X)(e, m)
        : (await o.Z.joinGuild(e, {
              lurker: !0,
              source: a,
              loadId: s,
              lurkLocation: null == t ? void 0 : t.page
          }),
          _ &&
              (await o.Z.transitionToGuildSync(
                  e,
                  {
                      ...m,
                      welcomeModalChannelId: r,
                      search: h.location.search
                  },
                  r
              ))),
        null == i || i();
}
function g(e) {
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
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    _.default.track(h.rMx.GUILD_DISCOVERY_EXITED, {
        load_id: e,
        guild_ids_viewed: t,
        recommendations_source: n
    });
}
function v(e) {
    _.default.track(h.rMx.SEARCH_CLOSED, { load_id: e });
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    _.default.track(h.rMx.SEARCH_STARTED, {
        search_type: h.aib.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t
    });
}
function S(e) {
    let { categoryId: t, error: n, willRequestRetry: r, isRequestRetry: i } = e;
    _.default.track(h.rMx.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: r,
        is_request_retry: i
    });
}
function T(e) {
    let { categoryId: t } = e;
    _.default.track(h.rMx.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function b(e) {
    let { loadId: t, searchId: n, query: r, guildResults: i, analyticsContext: a, categoryId: s, isTagSearch: o } = e;
    _.default.track(h.rMx.SEARCH_RESULT_VIEWED, {
        search_type: o ? h.aib.GUILD_DISCOVERY_TAG : h.aib.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== i ? i.length : null,
        guild_ids: void 0 !== i ? i.map((e) => e.id) : null,
        query: r,
        location: a.location,
        category_id: s
    });
}
function y(e) {
    let t = l.Z.getLoadId(e);
    _.default.track(h.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: d.Z.getMemberCount(e)
    });
}
async function A(e) {
    try {
        var t, n;
        let r = await s.tn.get({
                url: h.ANM.GUILD_DISCOVERY,
                query: a.stringify({ guild_ids: e }),
                oldFormErrors: !0
            }),
            i = null === (n = r.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
        if (null == i) return i;
        return g(i);
    } catch (e) {
        return null;
    }
}
