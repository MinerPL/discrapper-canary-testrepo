"use strict";
n.d(t, {
  CP: function() {
    return f
  },
  T4: function() {
    return N
  },
  bG: function() {
    return m
  },
  g5: function() {
    return O
  },
  gZ: function() {
    return h
  },
  i6: function() {
    return S
  },
  yC: function() {
    return A
  }
}), n(47120);
var i = n(261470),
  r = n(544891),
  s = n(570140),
  o = n(706454),
  a = n(264043),
  l = n(894653),
  u = n(368862),
  _ = n(809547),
  d = n(303383),
  c = n(973001),
  E = n(981631);
let I = 12633 == n.j ? 864e5 : null,
  T = new Map;
async function h(e) {
  var t;
  let n = Date.now(),
    o = null !== (t = T.get(e)) && void 0 !== t ? t : 0;
  if (a.Z.getApplicationFetchState(e) === a.M.FETCHING || a.Z.isInvalidApplication(e) || n < o + 6e5) return;
  T.set(e, n), s.Z.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
    applicationId: e
  });
  let l = new i.Z(1e3, 5e3),
    u = (e, t) => 429 === e.status && !!(l.fails < 10) && (l.fail(() => {
      t(void 0, u)
    }), !0);
  try {
    let t = (await r.tn.get({
      url: E.ANM.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
      backoff: l,
      retries: 10,
      interceptResponse: u
    })).body;
    s.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
      application: t
    })
  } catch (t) {
    s.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
      applicationId: e,
      isInvalidApplication: !0
    })
  }
}
async function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = Date.now(),
    i = a.Z.getApplicationFetchState(e),
    l = a.Z.getApplicationLastFetchTime(e),
    {
      dontRefetchMs: u
    } = t;
  if (i !== a.M.FETCHING && (null == l || !(l + (null != u ? u : 6e5) > n))) {
    s.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
      applicationId: e
    });
    try {
      let t = await r.tn.get({
        url: E.ANM.APPLICATION_DIRECTORY_APPLICATION(e),
        query: {
          locale: o.default.locale
        }
      });
      s.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
        application: t.body
      })
    } catch (t) {
      s.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
        applicationId: e,
        isInvalidApplication: !0
      })
    }
  }
}
async function f() {
  let e = Date.now(),
    t = l.Z.getLastFetchTimeMs();
  if (null != t && t + 6e5 > e) return;
  let n = await r.tn.get({
    url: E.ANM.APPLICATION_DIRECTORY_CATEGORIES,
    query: {
      locale: o.default.locale
    }
  });
  s.Z.dispatch({
    type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
    categories: n.body
  })
}
async function N(e) {
  var t;
  let {
    applicationId: n,
    guildId: i,
    options: a
  } = e, {
    page: l
  } = null != a ? a : {}, u = Date.now(), _ = d.Z.getFetchState({
    applicationId: n,
    guildId: i
  }), {
    lastFetchTimeMs: c
  } = null !== (t = d.Z.getSimilarApplications({
    applicationId: n,
    guildId: i
  })) && void 0 !== t ? t : {};
  if (_ !== d.M.FETCHING && (null == c || !(c + 6e5 > u))) {
    s.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
      applicationId: n,
      guildId: i,
      page: l
    });
    try {
      let e = await r.tn.get({
        url: E.ANM.APPLICATION_DIRECTORY_SIMILAR(n),
        query: {
          guild_id: i,
          page: l,
          locale: o.default.locale
        }
      });
      s.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
        applicationId: n,
        guildId: i,
        similarApplications: e.body.applications,
        loadId: e.body.load_id,
        page: l,
        totalPages: e.body.num_pages
      })
    } catch (e) {
      s.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
        applicationId: n,
        guildId: i,
        page: l
      })
    }
  }
}
async function A(e) {
  var t;
  let {
    query: n,
    guildId: i,
    options: a,
    onSuccessCallback: l
  } = e, {
    page: u,
    categoryId: d,
    integrationType: c,
    minUserInstallCommandCount: I,
    excludeAppsWithCustomInstallUrl: T
  } = null != a ? a : {}, h = Date.now(), S = _.Z.getFetchState({
    query: n,
    guildId: i,
    page: u,
    categoryId: d,
    integrationType: c
  }), {
    lastFetchTimeMs: f
  } = null !== (t = _.Z.getSearchResults({
    query: n,
    guildId: i,
    page: u,
    categoryId: d,
    integrationType: c
  })) && void 0 !== t ? t : {};
  if (S !== _.M.FETCHING && (null == f || !(f + 6e5 > h))) {
    s.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
      query: n,
      guildId: i,
      page: u,
      categoryId: d,
      integrationType: c,
      minUserInstallCommandCount: I,
      excludeAppsWithCustomInstallUrl: T
    });
    try {
      let e = await r.tn.get({
        url: E.ANM.APPLICATION_DIRECTORY_SEARCH,
        query: {
          query: n,
          guild_id: i,
          page: u,
          category_id: d,
          locale: o.default.locale,
          integration_type: c,
          min_user_install_command_count: I,
          exclude_apps_with_custom_install_url: T
        }
      });
      s.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
        query: n,
        guildId: i,
        page: u,
        categoryId: d,
        integrationType: c,
        result: {
          results: e.body.results,
          countsByCategory: e.body.counts_by_category,
          totalCount: e.body.result_count,
          totalPages: e.body.num_pages,
          type: e.body.type,
          loadId: e.body.load_id
        },
        minUserInstallCommandCount: I,
        excludeAppsWithCustomInstallUrl: T
      }), null == l || l(e.body.result_count)
    } catch (e) {
      s.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
        query: n,
        guildId: i,
        page: u,
        categoryId: d,
        integrationType: c,
        minUserInstallCommandCount: I,
        excludeAppsWithCustomInstallUrl: T
      })
    }
  }
}
async function m() {
  let {
    includesInactive: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Date.now(), n = u.Z.getFetchState({
    includesInactive: e
  }), i = u.Z.getLastFetchTimeMs({
    includesInactive: e
  });
  if (n !== u.M.FETCHING && (null == i || !(i + 6e5 > t))) {
    s.Z.dispatch({
      type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
      includesInactive: e
    });
    try {
      let t = await r.tn.get({
        url: E.ANM.APPLICATION_DIRECTORY_COLLECTIONS,
        query: {
          includes_inactive: e,
          locale: o.default.locale
        }
      });
      s.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
        collections: t.body,
        includesInactive: e
      })
    } catch (t) {
      s.Z.dispatch({
        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
        includesInactive: e
      })
    }
  }
}
async function O() {
  let e = Date.now(),
    t = c.Z.getFetchState(),
    n = c.Z.getLastFetchTimeMs(),
    i = c.Z.getNextFetchRetryTimeMs();
  if (t !== c.M.FETCHING && (null == n || !(n + I > e)) && (null == i || !(e < i))) {
    s.Z.dispatch({
      type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
    });
    try {
      let e = await r.tn.get({
        url: E.ANM.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
      });
      s.Z.dispatch({
        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
        guildIdToApplicationIds: e.body
      })
    } catch (t) {
      var o;
      let e = (null == t ? void 0 : t.status) === 429;
      s.Z.dispatch({
        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
        retryAfterSeconds: e ? null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.retry_after : void 0
      })
    }
  }
}