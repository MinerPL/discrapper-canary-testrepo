"use strict";
n.r(t), n.d(t, {
  clearSearch: function() {
    return T
  },
  createAlgoliaIndex: function() {
    return E
  },
  doAlgoliaSearch: function() {
    return function e(t, n) {
      let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        {
          categoryId: a = C.DISCOVERY_ALL_CATEGORIES_ID,
          preferredLocale: s,
          offset: c,
          length: p,
          tag: m
        } = n,
        E = d.default.getSearchIndex();
      if (null == E) return;
      l && ! function(e) {
        let {
          query: t,
          preferredLocale: n,
          offset: l,
          limit: a,
          categoryId: s,
          tag: r
        } = e, o = (0, u.getHistory)(), d = i.stringify({
          query: t,
          offset: l,
          limit: a,
          preferredLocale: n,
          categoryId: s,
          tag: r
        }), c = o.location.search;
        (!(null != c && c.length > 0 && c.startsWith("?")) || c.startsWith("?") && c.split("?")[1] !== d) && (0, u.transitionTo)(h.Routes.GUILD_DISCOVERY, {
          search: d
        })
      }({
        query: t,
        preferredLocale: s,
        offset: c,
        limit: p,
        categoryId: a,
        tag: m
      }), o.default.dispatch({
        type: "GUILD_DISCOVERY_SEARCH_FETCH_START",
        section: h.GuildDiscoverySections.SEARCH,
        query: t,
        categoryId: a
      });
      let S = Object.assign({}, g, n.filters),
        _ = Object.keys(S).map(e => "".concat(e).concat(S[e]));
      a !== C.DISCOVERY_ALL_CATEGORIES_ID && _.push("(primary_category_id=".concat(a, " OR categories.id=").concat(a, ")"));
      let I = _.join(" AND ");
      try {
        let i = E.search(t, {
            filters: I,
            optionalFilters: ["preferred_locale: ".concat(s)],
            length: p,
            offset: c,
            restrictSearchableAttributes: ["name", "description", "keywords", "categories.name", "categories.name_localizations.".concat(s), "primary_category.name", "primary_category.name_localizations.".concat(s), "vanity_url_code"]
          }),
          u = r.HTTP.get({
            url: h.Endpoints.GUILD_DISCOVERY_VALID_TERM,
            query: {
              term: t
            },
            oldFormErrors: !0
          });
        Promise.all([i, u]).then(e => {
          let [{
            hits: n,
            nbHits: l
          }, {
            body: {
              valid: s
            }
          }] = e;
          o.default.dispatch({
            type: "GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS",
            section: h.GuildDiscoverySections.SEARCH,
            query: t,
            categoryId: a,
            guilds: s ? [...n.map(e => ({
              ...e,
              id: e.objectID
            }))] : [],
            offset: c,
            limit: p,
            total: s ? Math.min(l, C.MAX_ALGOLIA_PAGINATOR_RESULTS) : 0
          })
        }).catch(s => {
          s.body.retry_after > 0 && E === d.default.getSearchIndex() ? setTimeout(() => {
            e(t, n, l)
          }, s.body.retry_after * f.default.Millis.SECOND) : o.default.dispatch({
            type: "GUILD_DISCOVERY_SEARCH_FETCH_FAILURE",
            section: h.GuildDiscoverySections.SEARCH,
            categoryId: a,
            query: t
          })
        })
      } catch (e) {
        o.default.dispatch({
          type: "GUILD_DISCOVERY_SEARCH_FETCH_FAILURE",
          section: h.GuildDiscoverySections.SEARCH,
          categoryId: a,
          query: t
        })
      }
    }
  },
  fetchFeaturedOrPopularGuilds: function() {
    return I
  },
  fetchGamesYouPlayGuilds: function() {
    return N
  },
  fetchPopularGuildsForCategory: function() {
    return _
  },
  getSearchResultsCount: function() {
    return S
  },
  selectCategory: function() {
    return A
  }
}), n("653041"), n("47120");
var l = n("807034"),
  a = n("983399"),
  s = n.n(a),
  i = n("664751"),
  r = n("544891"),
  o = n("570140"),
  u = n("703656"),
  d = n("683301"),
  c = n("230307"),
  f = n("70956"),
  h = n("981631"),
  C = n("731455");
let p = window.GLOBAL_ENV.ALGOLIA_KEY,
  m = "production" === window.GLOBAL_ENV.PROJECT_ENV ? "prod_discoverable_guilds" : "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "stg_discoverable_guilds" : "dev_discoverable_guilds",
  g = {
    "auto_removed:": !1,
    approximate_presence_count: "> 0",
    approximate_member_count: "> 0"
  };

function E() {
  if (null == p) return;
  let e = s()("NKTZZ4AIZU", p, {
    responsesCache: (0, l.createNullCache)()
  }).initIndex(m);
  o.default.wait(() => o.default.dispatch({
    type: "GUILD_DISCOVERY_SEARCH_INIT",
    index: e
  }))
}

function S(e, t) {
  let n = d.default.getSearchIndex();
  if (null == n) return;
  let l = Object.assign({}, g, t),
    a = Object.keys(l).map(e => "".concat(e).concat(l[e]));
  try {
    let t = n.search(e, {
        filters: a.join(" AND "),
        facets: ["categories.id"]
      }),
      l = r.HTTP.get({
        url: h.Endpoints.GUILD_DISCOVERY_VALID_TERM,
        query: {
          term: e
        },
        oldFormErrors: !0
      });
    Promise.all([t, l]).then(t => {
      let [{
        nbHits: n,
        facets: l
      }, {
        body: {
          valid: a
        }
      }] = t;
      o.default.dispatch({
        type: "GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS",
        query: e,
        nbHits: a ? n : 0,
        facets: a ? l : void 0
      })
    })
  } catch (t) {
    o.default.dispatch({
      type: "GUILD_DISCOVERY_SEARCH_COUNTS_FAIL",
      query: e
    })
  }
}
async function _(e) {
  o.default.dispatch({
    type: "GUILD_DISCOVERY_POPULAR_FETCH_START",
    categoryId: e
  });
  try {
    let {
      guilds: t
    } = (await r.HTTP.get({
      url: h.Endpoints.GUILD_DISCOVERY,
      query: i.stringify({
        categories: [e]
      }),
      oldFormErrors: !0
    })).body;
    o.default.dispatch({
      type: "GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS",
      categoryId: e,
      guilds: t
    })
  } catch (t) {
    o.default.dispatch({
      type: "GUILD_DISCOVERY_POPULAR_FETCH_FAILURE",
      categoryId: e
    })
  }
}
async function I(e, t) {
  o.default.dispatch({
    type: "GUILD_DISCOVERY_FETCH_START",
    section: h.GuildDiscoverySections.FEATURED
  });
  try {
    let n = await r.HTTP.get({
      url: h.Endpoints.GUILD_DISCOVERY,
      query: i.stringify({
        offset: e,
        limit: t
      }),
      oldFormErrors: !0
    });
    L(n.body, h.GuildDiscoverySections.FEATURED)
  } catch (e) {
    o.default.dispatch({
      type: "GUILD_DISCOVERY_FETCH_FAILURE",
      section: h.GuildDiscoverySections.FEATURED
    })
  }
}
async function N() {
  let e = Object.keys(c.default.applicationStatistics);
  o.default.dispatch({
    type: "GUILD_DISCOVERY_FETCH_START",
    section: h.GuildDiscoverySections.GAMES_YOU_PLAY
  });
  try {
    let t = await r.HTTP.get({
      url: h.Endpoints.GUILD_DISCOVERY,
      query: i.stringify({
        application_ids: e
      }),
      oldFormErrors: !0
    });
    L(t.body, h.GuildDiscoverySections.GAMES_YOU_PLAY)
  } catch (e) {
    o.default.dispatch({
      type: "GUILD_DISCOVERY_FETCH_FAILURE",
      section: h.GuildDiscoverySections.GAMES_YOU_PLAY
    })
  }
}

function T() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  e && (0, u.transitionTo)(h.Routes.GUILD_DISCOVERY), o.default.dispatch({
    type: "GUILD_DISCOVERY_CLEAR_SEARCH"
  })
}

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  o.default.dispatch({
    type: "GUILD_DISCOVERY_SELECT_CATEGORY",
    categoryId: e,
    isHomepage: t
  })
}

function L(e, t) {
  let {
    offset: n,
    limit: l,
    guilds: a,
    total: s
  } = e;
  o.default.dispatch({
    type: "GUILD_DISCOVERY_FETCH_SUCCESS",
    section: t,
    guilds: a,
    offset: n,
    limit: l,
    total: s
  })
}