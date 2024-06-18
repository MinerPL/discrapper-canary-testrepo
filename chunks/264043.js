"use strict";
n.d(t, {
  M: function() {
    return i
  }
}), n(47120);
var i, r, s, o, a, l, u = n(442837),
  _ = n(570140),
  d = n(973616);
(s = i || (i = {}))[s.FETCHING = 0] = "FETCHING", s[s.FETCHED = 1] = "FETCHED", s[s.ERROR = 2] = "ERROR";
let c = {},
  E = {},
  I = new Set,
  T = {};
class h extends(r = u.ZP.Store) {
  getApplication(e) {
    if (null != e) return c[e]
  }
  getApplicationRecord(e) {
    if (null == e) return;
    let t = c[e];
    if (null != t) return d.Z.createFromServer(t)
  }
  getApplications() {
    return c
  }
  getApplicationFetchState(e) {
    if (null != e) return E[e]
  }
  getApplicationFetchStates() {
    return E
  }
  isInvalidApplication(e) {
    return null != e && I.has(e)
  }
  getInvalidApplicationIds() {
    return I
  }
  isFetching(e) {
    return 0 === this.getApplicationFetchState(e)
  }
  getApplicationLastFetchTime(e) {
    if (null != e) return T[e]
  }
}
l = "ApplicationDirectoryApplicationsStore", (a = "displayName") in(o = h) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new h(_.Z, {
  APPLICATION_DIRECTORY_FETCH_APPLICATION: function(e) {
    let {
      applicationId: t
    } = e;
    E = {
      ...E,
      [t]: 0
    }
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function(e) {
    let {
      application: t
    } = e;
    c = {
      ...c,
      [t.id]: t
    }, E = {
      ...E,
      [t.id]: 1
    };
    let n = Date.now();
    T = {
      ...T,
      [t.id]: n
    }, I.has(t.id) && (I.delete(t.id), I = new Set(I))
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function(e) {
    let {
      applicationId: t,
      isInvalidApplication: n
    } = e;
    E = {
      ...E,
      [t]: 2
    }, n && (I.add(t), I = new Set(I))
  }
})