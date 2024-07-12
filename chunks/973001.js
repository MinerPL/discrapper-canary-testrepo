n.d(t, {
  M: function() {
return r;
  }
}), n(47120);
var r, i, a, o = n(442837),
  s = n(570140),
  l = n(70956);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(a = r || (r = {}))[a.NOT_FETCHED = 0] = 'NOT_FETCHED', a[a.FETCHING = 1] = 'FETCHING', a[a.FETCHED = 2] = 'FETCHED', a[a.ERROR = 3] = 'ERROR';
let c = {
  applicationIdToGuildIds: {},
  lastFetchTimeMs: null,
  nextFetchRetryTimeMs: null,
  fetchState: 0
};

function d(e) {
  let {
applicationId: t,
guildId: n
  } = e;
  null == c.applicationIdToGuildIds[t] && (c.applicationIdToGuildIds[t] = new Set()), c.applicationIdToGuildIds[t].add(n), c.applicationIdToGuildIds[t] = new Set(c.applicationIdToGuildIds[t]);
}
class _ extends(i = o.ZP.PersistedStore) {
  initialize(e) {
if (null != e)
  for (let t in (c.lastFetchTimeMs = e.lastFetchTimeMs, c.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs, c.fetchState = e.fetchState, e.applicationIdToGuildIds))
    c.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t]);
  }
  getState() {
return c;
  }
  getGuildIdsForApplication(e) {
if (null != e)
  return c.applicationIdToGuildIds[e];
  }
  getLastFetchTimeMs() {
return c.lastFetchTimeMs;
  }
  getNextFetchRetryTimeMs() {
return c.nextFetchRetryTimeMs;
  }
  getFetchState() {
return c.fetchState;
  }
}
u(_, 'displayName', 'MyGuildApplicationsStore'), u(_, 'persistKey', 'MyGuildApplicationsStore'), t.Z = new _(s.Z, {
  LOGOUT: function() {
c.applicationIdToGuildIds = {}, c.lastFetchTimeMs = null, c.nextFetchRetryTimeMs = null, c.fetchState = 0;
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
c.fetchState = 1;
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(e) {
let {
  guildIdToApplicationIds: t
} = e;
for (let e in (c.fetchState = 2, c.lastFetchTimeMs = Date.now(), c.applicationIdToGuildIds = {}, c.nextFetchRetryTimeMs = null, t))
  for (let n of t[e])
    d({
      applicationId: n,
      guildId: e
    });
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(e) {
let {
  retryAfterSeconds: t
} = e;
if (c.fetchState = 3, null != t) {
  let e = t * l.Z.Millis.SECOND;
  c.nextFetchRetryTimeMs = Date.now() + e;
}
  },
  INTEGRATION_CREATE: function(e) {
let {
  application: t,
  guildId: n
} = e;
if (null != t)
  d({
    applicationId: t.id,
    guildId: n
  });
  },
  INTEGRATION_DELETE: function(e) {
let {
  applicationId: t,
  guildId: n
} = e;
if (null != t)
  ! function(e) {
    let {
      applicationId: t,
      guildId: n
    } = e;
    if (null != c.applicationIdToGuildIds[t])
      c.applicationIdToGuildIds[t].delete(n), c.applicationIdToGuildIds[t] = new Set(c.applicationIdToGuildIds[t]);
  }({
    applicationId: t,
    guildId: n
  });
  }
});