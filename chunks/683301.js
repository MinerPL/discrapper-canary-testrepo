"use strict";
n.d(t, {
  xk: function() {
    return A
  }
}), n(47120), n(653041);
var i, r, s, o, a, l, u = n(512722),
  _ = n.n(u),
  d = n(392711),
  c = n.n(d),
  E = n(442837);
n(902704);
var I = n(570140),
  T = n(117496),
  h = n(314897),
  S = n(230307),
  f = n(981631),
  N = n(731455);
(s = i || (i = {})).UNSET = "unset", s.FETCHING = "fetching", s.FAILED = "failed", s.SUCCEEDED = "succeeded";
let A = {
    guilds: [],
    total: 0,
    offset: 0,
    limit: 0,
    loading: !1,
    isFirstLoad: !0
  },
  m = {
    [f.Lcj.FEATURED]: {
      ...A
    },
    [f.Lcj.GAMES_YOU_PLAY]: {
      ...A
    },
    [f.Lcj.MISC]: {
      ...A
    },
    [f.Lcj.SEARCH]: {},
    [N.Hk]: {
      ...A
    }
  },
  O = "",
  R = !1,
  C = "unset",
  p = null,
  g = N.Hk,
  L = N.Hk,
  v = null,
  D = [],
  M = (0, T.P)(),
  P = !1;

function y(e) {
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
    keywords: e.keywords
  }
}
class U extends(r = E.ZP.Store) {
  initialize() {
    this.waitFor(h.default)
  }
  isFetching() {
    return R || null == p || null == S.Z.lastFetched
  }
  isFetchingSearch() {
    return "fetching" === C
  }
  hasSearchError() {
    return "failed" === C
  }
  getDiscoverableGuilds() {
    return m
  }
  getCurrentCategoryId() {
    return g
  }
  getCurrentHomepageCategoryId() {
    return L
  }
  getSearchIndex() {
    return v
  }
  getMostRecentQuery() {
    return O
  }
  getTopCategoryCounts(e) {
    var t;
    return null === (t = m[f.Lcj.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts
  }
  getSeenGuildIds() {
    return D
  }
  getLoadId() {
    return M
  }
  getIsReady() {
    return P
  }
}
l = "GuildDiscoveryStore", (a = "displayName") in(o = U) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.ZP = new U(I.Z, {
  GUILD_DISCOVERY_SEARCH_INIT: function(e) {
    let {
      index: t
    } = e;
    v = t
  },
  GUILD_DISCOVERY_FETCH_START: function(e) {
    let {
      section: t
    } = e;
    R = !0, m = {
      ...m,
      [t]: {
        ...m[t],
        loading: !0
      }
    }
  },
  GUILD_DISCOVERY_FETCH_SUCCESS: function(e) {
    let {
      guilds: t,
      section: n,
      total: i,
      offset: r,
      limit: s
    } = e;
    R = !1, p = Date.now(), M = (0, T.P)();
    let o = c().map(t, y);
    m = {
      ...m,
      [n]: {
        guilds: o,
        offset: r,
        limit: s,
        total: i,
        loading: !1,
        isFirstLoad: !1
      }
    }
  },
  GUILD_DISCOVERY_FETCH_FAILURE: function(e) {
    let {
      section: t
    } = e;
    R = !1, m = {
      ...m,
      [t]: {
        ...A,
        loading: !1
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_START: function(e) {
    let {
      categoryId: t
    } = e;
    R = !0, m = {
      ...m,
      [t]: {
        ...A,
        ...m[t],
        loading: !0
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: function(e) {
    let {
      categoryId: t,
      guilds: n
    } = e;
    R = !1, p = Date.now();
    let i = c().map(n, y);
    m = {
      ...m,
      [t]: {
        ...A,
        guilds: i,
        loading: !1,
        isFirstLoad: !1
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_FAILURE: function(e) {
    let {
      categoryId: t
    } = e;
    R = !1, m = {
      ...m,
      [t]: {
        ...A,
        loading: !1
      }
    }
  },
  GUILD_DISCOVERY_SEARCH_FETCH_START: function(e) {
    var t;
    let {
      section: n,
      query: i,
      categoryId: r
    } = e;
    _()("search" === n, "This action only supports search it seems"), C = "fetching", m = {
      ...m,
      [n]: {
        ...m[n],
        [i]: {
          ...m[n][i],
          [r]: {
            ...null === (t = m[n][i]) || void 0 === t ? void 0 : t[r],
            loading: !0
          }
        }
      }
    }, O = i
  },
  GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: function(e) {
    var t;
    let {
      section: n,
      guilds: i,
      total: r,
      offset: s,
      limit: o,
      query: a,
      categoryId: l
    } = e;
    _()("search" === n, "This action only supports search it seems");
    let u = i.map(y);
    m = {
      ...m,
      [n]: {
        ...m[n],
        [a]: {
          ...m[n][a],
          [l]: {
            ...null === (t = m[n][a]) || void 0 === t ? void 0 : t[l],
            guilds: u,
            total: r,
            offset: s,
            limit: o,
            loading: !1
          }
        }
      }
    }, O = a, C = "succeeded"
  },
  GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function(e) {
    var t;
    let {
      section: n,
      query: i,
      categoryId: r
    } = e;
    _()("search" === n, "This action only supports search it seems"), C = "failed", m = {
      ...m,
      [n]: {
        ...m[n],
        [i]: {
          ...m[n][i],
          [r]: {
            ...null === (t = m[n][i]) || void 0 === t ? void 0 : t[r],
            loading: !1
          }
        }
      }
    }
  },
  GUILD_DISCOVERY_SELECT_CATEGORY: function(e) {
    let {
      categoryId: t,
      isHomepage: n
    } = e;
    g = t, n && (L = t)
  },
  GUILD_DISCOVERY_CLEAR_SEARCH: function() {
    O = ""
  },
  GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS: function(e) {
    let {
      nbHits: t,
      facets: n,
      query: i
    } = e, r = [];
    if (null != n) {
      var s;
      let e = null !== (s = n["categories.id"]) && void 0 !== s ? s : {};
      delete e[N.o3], r = Object.entries(e).map(e => {
        let [t, n] = e;
        return [parseInt(t, 10), n]
      }).sort((e, t) => t[1] - e[1]).slice(0, 7)
    }
    m = {
      ...m,
      [f.Lcj.SEARCH]: {
        ...m[f.Lcj.SEARCH],
        [i]: {
          ...m[f.Lcj.SEARCH][i],
          resultCounts: [
            [N.Hk, Math.min(N.lA, t)], ...r
          ]
        }
      }
    }
  },
  GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: function(e) {
    let {
      query: t
    } = e;
    m = {
      ...m,
      [f.Lcj.SEARCH]: {
        ...m[f.Lcj.SEARCH],
        [t]: {
          ...m[f.Lcj.SEARCH][t],
          resultCounts: null
        }
      }
    }
  },
  GUILD_DISCOVERY_GUILD_SEEN: function(e) {
    let {
      guildId: t
    } = e;
    !D.includes(t) && D.push(t)
  },
  GUILD_DISCOVERY_CLEAR_SEEN_GUILDS: function() {
    D = []
  },
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let {
      forClanDiscovery: t
    } = e;
    t && (g = N.Gj.Clans, L = N.Gj.Clans, P = !0)
  }
})