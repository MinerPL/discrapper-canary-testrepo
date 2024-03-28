"use strict";
let l, a, i;
n.r(e), n("47120");
var o, s, r, c, u = n("442837"),
  d = n("570140"),
  p = n("372123"),
  f = n("594190"),
  C = n("283595"),
  h = n("780570"),
  y = n("358085"),
  A = n("209492"),
  S = n("981631");
class _ extends(o = u.default.Store) {
  initialize() {
    y.isPlatformEmbedded && A.init(), l = {}, a = new Set, i = []
  }
  getState(t, e) {
    return l[(0, h.getComboId)(t, e)]
  }
  isSyncing(t, e) {
    let n = (0, h.getComboId)(t, e);
    return a.has(n)
  }
}
c = "CloudSyncStore", (r = "displayName") in(s = _) ? Object.defineProperty(s, r, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = c, e.default = new _(d.default, {
  GAME_CLOUD_SYNC_START: function(t) {
    let {
      applicationId: e,
      branchId: n
    } = t, l = (0, h.getComboId)(e, n);
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
    } = t, i = (0, h.getComboId)(e, n);
    return a.delete(i), l[i] = {
      type: S.CloudSyncStateTypes.DONE,
      timestamp: Date.now()
    }, !0
  },
  GAME_CLOUD_SYNC_CONFLICT: function(t) {
    let {
      applicationId: e,
      branchId: n,
      next: i,
      remote: o
    } = t, s = (0, h.getComboId)(e, n);
    l[s] = {
      type: S.CloudSyncStateTypes.CONFLICT,
      next: i,
      remote: o
    }, a.delete(s)
  },
  GAME_CLOUD_SYNC_ERROR: function(t) {
    let {
      applicationId: e,
      branchId: n
    } = t, i = (0, h.getComboId)(e, n);
    l[i] = {
      type: S.CloudSyncStateTypes.ERROR
    }, a.delete(i)
  },
  RUNNING_GAMES_CHANGE: function() {
    let t = f.default.getRunningDiscordApplicationIds();
    for (let e of i.filter(e => !t.includes(e))) {
      let t = C.default.getActiveLibraryApplication(e);
      null != t && d.default.wait(() => {
        try {
          p.sync(t.id, t.branchId)
        } catch (t) {}
      })
    }
    return i = t, !1
  }
})