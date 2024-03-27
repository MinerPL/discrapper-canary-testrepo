"use strict";
let l, a, i;
n.r(e), n.d(e, {
  default: function() {
    return A
  }
}), n("222007");
var o = n("446674"),
  s = n("913144"),
  r = n("959254"),
  c = n("161454"),
  u = n("686470"),
  d = n("964889"),
  p = n("773336"),
  f = n("149190"),
  C = n("49111");
class h extends o.default.Store {
  initialize() {
    p.isPlatformEmbedded && f.init(), l = {}, a = new Set, i = []
  }
  getState(t, e) {
    let n = (0, d.getComboId)(t, e);
    return l[n]
  }
  isSyncing(t, e) {
    let n = (0, d.getComboId)(t, e);
    return a.has(n)
  }
}
h.displayName = "CloudSyncStore";
var A = new h(s.default, {
  GAME_CLOUD_SYNC_START: function(t) {
    let {
      applicationId: e,
      branchId: n
    } = t, l = (0, d.getComboId)(e, n);
    a.add(l)
  },
  GAME_CLOUD_SYNC_UPDATE: function(t) {
    let {
      state: e
    } = t;
    for (let t of Object.keys(e)) l[t] = e[t]
  },
  GAME_CLOUD_SYNC_COMPLETE: function(t) {
    let {
      applicationId: e,
      branchId: n
    } = t, i = (0, d.getComboId)(e, n);
    return a.delete(i), l[i] = {
      type: C.CloudSyncStateTypes.DONE,
      timestamp: Date.now()
    }, !0
  },
  GAME_CLOUD_SYNC_CONFLICT: function(t) {
    let {
      applicationId: e,
      branchId: n,
      next: i,
      remote: o
    } = t, s = (0, d.getComboId)(e, n);
    l[s] = {
      type: C.CloudSyncStateTypes.CONFLICT,
      next: i,
      remote: o
    }, a.delete(s)
  },
  GAME_CLOUD_SYNC_ERROR: function(t) {
    let {
      applicationId: e,
      branchId: n
    } = t, i = (0, d.getComboId)(e, n);
    l[i] = {
      type: C.CloudSyncStateTypes.ERROR
    }, a.delete(i)
  },
  RUNNING_GAMES_CHANGE: function() {
    let t = c.default.getRunningDiscordApplicationIds(),
      e = i.filter(e => !t.includes(e));
    for (let t of e) {
      let e = u.default.getActiveLibraryApplication(t);
      null != e && s.default.wait(() => {
        try {
          r.sync(e.id, e.branchId)
        } catch (t) {}
      })
    }
    return i = t, !1
  }
})