n.d(t, {
  CP: function() {
return m;
  },
  T4: function() {
return I;
  },
  bG: function() {
return g;
  },
  g5: function() {
return S;
  },
  gZ: function() {
return h;
  },
  i6: function() {
return p;
  },
  yC: function() {
return T;
  }
}), n(47120);
var r = n(261470),
  i = n(544891),
  a = n(570140),
  o = n(706454),
  s = n(264043),
  l = n(894653),
  u = n(368862),
  c = n(809547),
  d = n(303383),
  _ = n(973001),
  E = n(981631);
let f = new Map();
async function h(e) {
  var t;
  let n = Date.now(),
o = null !== (t = f.get(e)) && void 0 !== t ? t : 0;
  if (s.Z.getApplicationFetchState(e) === s.M.FETCHING || s.Z.isInvalidApplication(e) || n < o + 600000)
return;
  f.set(e, n), a.Z.dispatch({
type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
applicationId: e
  });
  let l = new r.Z(1000, 5000),
u = (e, t) => 429 === e.status && !!(l.fails < 10) && (l.fail(() => {
  t(void 0, u);
}), !0);
  try {
let t = (await i.tn.get({
  url: E.ANM.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
  backoff: l,
  retries: 10,
  interceptResponse: u
})).body;
a.Z.dispatch({
  type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
  application: t
});
  } catch (t) {
a.Z.dispatch({
  type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
  applicationId: e,
  isInvalidApplication: !0
});
  }
}
async function p(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
n = Date.now(),
r = s.Z.getApplicationFetchState(e),
l = s.Z.getApplicationLastFetchTime(e),
{
  dontRefetchMs: u
} = t;
  if (r !== s.M.FETCHING && (null == l || !(l + (null != u ? u : 600000) > n))) {
a.Z.dispatch({
  type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
  applicationId: e
});
try {
  let t = await i.tn.get({
    url: E.ANM.APPLICATION_DIRECTORY_APPLICATION(e),
    query: {
      locale: o.default.locale
    }
  });
  a.Z.dispatch({
    type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
    application: t.body
  });
} catch (t) {
  a.Z.dispatch({
    type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
    applicationId: e,
    isInvalidApplication: !0
  });
}
  }
}
async function m() {
  let e = Date.now(),
t = l.Z.getLastFetchTimeMs();
  if (null != t && t + 600000 > e)
return;
  let n = await i.tn.get({
url: E.ANM.APPLICATION_DIRECTORY_CATEGORIES,
query: {
  locale: o.default.locale
}
  });
  a.Z.dispatch({
type: 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS',
categories: n.body
  });
}
async function I(e) {
  var t;
  let {
applicationId: n,
guildId: r,
options: s
  } = e, {
page: l
  } = null != s ? s : {}, u = Date.now(), c = d.Z.getFetchState({
applicationId: n,
guildId: r
  }), {
lastFetchTimeMs: _
  } = null !== (t = d.Z.getSimilarApplications({
applicationId: n,
guildId: r
  })) && void 0 !== t ? t : {};
  if (c !== d.M.FETCHING && (null == _ || !(_ + 600000 > u))) {
a.Z.dispatch({
  type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS',
  applicationId: n,
  guildId: r,
  page: l
});
try {
  let e = await i.tn.get({
    url: E.ANM.APPLICATION_DIRECTORY_SIMILAR(n),
    query: {
      guild_id: r,
      page: l,
      locale: o.default.locale
    }
  });
  a.Z.dispatch({
    type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS',
    applicationId: n,
    guildId: r,
    similarApplications: e.body.applications,
    loadId: e.body.load_id,
    page: l,
    totalPages: e.body.num_pages
  });
} catch (e) {
  a.Z.dispatch({
    type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE',
    applicationId: n,
    guildId: r,
    page: l
  });
}
  }
}
async function T(e) {
  var t;
  let {
query: n,
guildId: r,
options: s,
onSuccessCallback: l
  } = e, {
page: u,
categoryId: d,
integrationType: _,
minUserInstallCommandCount: f,
excludeAppsWithCustomInstallUrl: h
  } = null != s ? s : {}, p = Date.now(), m = c.Z.getFetchState({
query: n,
guildId: r,
page: u,
categoryId: d,
integrationType: _
  }), {
lastFetchTimeMs: I
  } = null !== (t = c.Z.getSearchResults({
query: n,
guildId: r,
page: u,
categoryId: d,
integrationType: _
  })) && void 0 !== t ? t : {};
  if (m !== c.M.FETCHING && (null == I || !(I + 600000 > p))) {
a.Z.dispatch({
  type: 'APPLICATION_DIRECTORY_FETCH_SEARCH',
  query: n,
  guildId: r,
  page: u,
  categoryId: d,
  integrationType: _,
  minUserInstallCommandCount: f,
  excludeAppsWithCustomInstallUrl: h
});
try {
  let e = await i.tn.get({
    url: E.ANM.APPLICATION_DIRECTORY_SEARCH,
    query: {
      query: n,
      guild_id: r,
      page: u,
      category_id: d,
      locale: o.default.locale,
      integration_type: _,
      min_user_install_command_count: f,
      exclude_apps_with_custom_install_url: h
    }
  });
  a.Z.dispatch({
    type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS',
    query: n,
    guildId: r,
    page: u,
    categoryId: d,
    integrationType: _,
    result: {
      results: e.body.results,
      countsByCategory: e.body.counts_by_category,
      totalCount: e.body.result_count,
      totalPages: e.body.num_pages,
      type: e.body.type,
      loadId: e.body.load_id
    },
    minUserInstallCommandCount: f,
    excludeAppsWithCustomInstallUrl: h
  }), null == l || l(e.body.result_count);
} catch (e) {
  a.Z.dispatch({
    type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE',
    query: n,
    guildId: r,
    page: u,
    categoryId: d,
    integrationType: _,
    minUserInstallCommandCount: f,
    excludeAppsWithCustomInstallUrl: h
  });
}
  }
}
async function g() {
  let {
includesInactive: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Date.now(), n = u.Z.getFetchState({
includesInactive: e
  }), r = u.Z.getLastFetchTimeMs({
includesInactive: e
  });
  if (n !== u.M.FETCHING && (null == r || !(r + 600000 > t))) {
a.Z.dispatch({
  type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS',
  includesInactive: e
});
try {
  let t = await i.tn.get({
    url: E.ANM.APPLICATION_DIRECTORY_COLLECTIONS,
    query: {
      includes_inactive: e,
      locale: o.default.locale
    }
  });
  a.Z.dispatch({
    type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS',
    collections: t.body,
    includesInactive: e
  });
} catch (t) {
  a.Z.dispatch({
    type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE',
    includesInactive: e
  });
}
  }
}
async function S() {
  let e = Date.now(),
t = _.Z.getFetchState(),
n = _.Z.getLastFetchTimeMs(),
r = _.Z.getNextFetchRetryTimeMs();
  if (t !== _.M.FETCHING && (null == n || !(n + 86400000 > e)) && (null == r || !(e < r))) {
a.Z.dispatch({
  type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS'
});
try {
  let e = await i.tn.get({
    url: E.ANM.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
  });
  a.Z.dispatch({
    type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS',
    guildIdToApplicationIds: e.body
  });
} catch (t) {
  var o;
  let e = (null == t ? void 0 : t.status) === 429;
  a.Z.dispatch({
    type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE',
    retryAfterSeconds: e ? null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.retry_after : void 0
  });
}
  }
}