"use strict";
n.d(t, {
  M: function() {
    return i
  }
}), n(47120);
var i, r, s, o = n(442837),
  a = n(570140),
  l = n(70956);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED", s[s.ERROR = 3] = "ERROR";
let _ = {
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
  null == _.applicationIdToGuildIds[t] && (_.applicationIdToGuildIds[t] = new Set), _.applicationIdToGuildIds[t].add(n), _.applicationIdToGuildIds[t] = new Set(_.applicationIdToGuildIds[t])
}
class c extends(r = o.ZP.PersistedStore) {
  initialize(e) {
    if (null != e)
      for (let t in _.lastFetchTimeMs = e.lastFetchTimeMs, _.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs, _.fetchState = e.fetchState, e.applicationIdToGuildIds) _.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t])
  }
  getState() {
    return _
  }
  getGuildIdsForApplication(e) {
    if (null != e) return _.applicationIdToGuildIds[e]
  }
  getLastFetchTimeMs() {
    return _.lastFetchTimeMs
  }
  getNextFetchRetryTimeMs() {
    return _.nextFetchRetryTimeMs
  }
  getFetchState() {
    return _.fetchState
  }
}
u(c, "displayName", "MyGuildApplicationsStore"), u(c, "persistKey", "MyGuildApplicationsStore"), t.Z = new c(a.Z, {
  LOGOUT: function() {
    _.applicationIdToGuildIds = {}, _.lastFetchTimeMs = null, _.nextFetchRetryTimeMs = null, _.fetchState = 0
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
    _.fetchState = 1
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(e) {
    let {
      guildIdToApplicationIds: t
    } = e;
    for (let e in _.fetchState = 2, _.lastFetchTimeMs = Date.now(), _.applicationIdToGuildIds = {}, _.nextFetchRetryTimeMs = null, t)
      for (let n of t[e]) d({
        applicationId: n,
        guildId: e
      })
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(e) {
    let {
      retryAfterSeconds: t
    } = e;
    if (_.fetchState = 3, null != t) {
      let e = t * l.Z.Millis.SECOND;
      _.nextFetchRetryTimeMs = Date.now() + e
    }
  },
  INTEGRATION_CREATE: function(e) {
    let {
      application: t,
      guildId: n
    } = e;
    if (null != t) d({
      applicationId: t.id,
      guildId: n
    })
  },
  INTEGRATION_DELETE: function(e) {
    let {
      applicationId: t,
      guildId: n
    } = e;
    if (null != t) ! function(e) {
      let {
        applicationId: t,
        guildId: n
      } = e;
      if (null != _.applicationIdToGuildIds[t]) _.applicationIdToGuildIds[t].delete(n), _.applicationIdToGuildIds[t] = new Set(_.applicationIdToGuildIds[t])
    }({
      applicationId: t,
      guildId: n
    })
  }
})