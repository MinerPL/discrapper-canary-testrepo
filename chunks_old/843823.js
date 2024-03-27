"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("446674"),
  i = n("913144"),
  u = n("27618");
let a = !1,
  r = Object.freeze({
    userAffinities: [],
    affinityUserIds: new Set,
    lastFetched: 0
  }),
  d = Object.freeze({
    userAffinitiesMap: new Map,
    affinityUserIds: new Set
  }),
  s = {
    ...r
  },
  o = {
    ...d
  };

function c() {
  let e = new Map(s.userAffinities.filter(e => {
      let {
        user_id: t
      } = e;
      return !u.default.isBlocked(t)
    }).map(e => [e.user_id, e])),
    t = new Set(e.keys());
  o = {
    userAffinitiesMap: e,
    affinityUserIds: t
  }
}
class E extends l.default.PersistedStore {
  initialize(e) {
    this.waitFor(u.default), null != e && (s.userAffinities = e.userAffinities, s.lastFetched = e.lastFetched, c()), this.syncWith([u.default], c)
  }
  needsRefresh() {
    return Date.now() - s.lastFetched > 864e5
  }
  getFetching() {
    return a
  }
  getState() {
    return s
  }
  getUserAffinities() {
    return s.userAffinities
  }
  getUserAffinity(e) {
    return o.userAffinitiesMap.get(e)
  }
  getUserAffinitiesUserIds() {
    return o.affinityUserIds
  }
}
E.displayName = "UserAffinitiesStore", E.persistKey = "UserAffinitiesStore", E.migrations = [e => null];
var f = new E(i.default, {
  LOAD_USER_AFFINITIES_SUCCESS: function(e) {
    var t;
    let {
      affinities: n
    } = e;
    s.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], s.lastFetched = Date.now(), c(), a = !1
  },
  LOAD_USER_AFFINITIES: function() {
    a = !0
  },
  LOAD_USER_AFFINITIES_FAILURE: function() {
    a = !1
  },
  LOGOUT: function() {
    s = {
      ...r
    }, o = {
      ...d
    }
  }
})