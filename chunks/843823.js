"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("222007");
var n = a("446674"),
  i = a("913144"),
  s = a("27618");
let l = !1,
  r = Object.freeze({
    userAffinities: [],
    affinityUserIds: new Set,
    lastFetched: 0
  }),
  u = {
    ...r
  };

function o() {
  u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
}
class d extends n.default.PersistedStore {
  initialize(e) {
    this.waitFor(s.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([s.default], o)
  }
  needsRefresh() {
    return Date.now() - u.lastFetched > 864e5
  }
  getFetching() {
    return l
  }
  getState() {
    return u
  }
  getUserAffinities() {
    return u.userAffinities
  }
  getUserAffinitiesUserIds() {
    return u.affinityUserIds
  }
}
d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
var c = new d(i.default, {
  LOAD_USER_AFFINITIES_SUCCESS: function(e) {
    var t;
    let {
      affinities: a
    } = e;
    u.userAffinities = null !== (t = a.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), l = !1
  },
  LOAD_USER_AFFINITIES: function() {
    l = !0
  },
  LOAD_USER_AFFINITIES_FAILURE: function() {
    l = !1
  },
  LOGOUT: function() {
    u = {
      ...r
    }
  }
})