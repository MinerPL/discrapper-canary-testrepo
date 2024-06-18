"use strict";
n.d(t, {
  M: function() {
    return a
  }
});
var i, r, s, o, a, l, u = n(31775),
  _ = n.n(u),
  d = n(442837),
  c = n(570140);

function E(e) {
  let {
    applicationId: t,
    guildId: n,
    page: i
  } = e;
  return "applicationId:".concat(t, " guildId:").concat(n, " page:").concat(i)
}(i = a || (a = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
let I = new(_())({
    max: 20
  }),
  T = {};
class h extends(l = d.ZP.Store) {
  getSimilarApplications(e) {
    let {
      applicationId: t,
      guildId: n,
      page: i
    } = e;
    if (null == t) return;
    let r = E({
      applicationId: t,
      guildId: n,
      page: i
    });
    return I.get(r)
  }
  getFetchState(e) {
    let {
      applicationId: t,
      guildId: n,
      page: i
    } = e;
    if (null != t) return T[E({
      applicationId: t,
      guildId: n,
      page: i
    })]
  }
}
o = "ApplicationDirectorySimilarApplicationsStore", (s = "displayName") in(r = h) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new h(c.Z, {
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(e) {
    let {
      applicationId: t,
      guildId: n,
      page: i
    } = e, r = E({
      applicationId: t,
      guildId: n,
      page: i
    });
    T = {
      ...T,
      [r]: 1
    }
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(e) {
    let {
      applicationId: t,
      guildId: n,
      similarApplications: i,
      loadId: r,
      page: s,
      totalPages: o
    } = e, a = E({
      applicationId: t,
      guildId: n,
      page: s
    });
    I.set(a, {
      lastFetchTimeMs: Date.now(),
      applications: i,
      loadId: r,
      page: s,
      totalPages: o
    }), T = {
      ...T,
      [a]: 2
    }
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(e) {
    let {
      applicationId: t,
      guildId: n,
      page: i
    } = e, r = E({
      applicationId: t,
      guildId: n,
      page: i
    });
    T = {
      ...T,
      [r]: 3
    }
  }
})