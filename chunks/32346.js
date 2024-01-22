"use strict";
let i, s;
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var r = n("917351"),
  a = n.n(r),
  o = n("446674"),
  l = n("913144"),
  u = n("49111");
let d = c();

function c() {
  return {
    recentCustomStatuses: [],
    currentDefaultStatus: null
  }
}
class f extends o.default.PersistedStore {
  initialize(e) {
    d = {
      ...c(),
      ...null != e ? e : {}
    }
  }
  getState() {
    return d
  }
  getCurrentHangStatus() {
    return i
  }
  getCustomHangStatus() {
    return s
  }
  getRecentCustomStatuses() {
    return d.recentCustomStatuses
  }
  getCurrentDefaultStatus() {
    return d.currentDefaultStatus
  }
  getHangStatusActivity() {
    return null == i ? null : {
      type: u.ActivityTypes.HANG_STATUS,
      name: "Hang Status",
      state: i,
      details: null == s ? void 0 : s.status,
      emoji: null == s ? void 0 : s.emoji
    }
  }
}
f.displayName = "HangStatusStore", f.persistKey = "HangStatusStore";
var _ = new f(l.default, {
  LOGOUT: function() {
    d = c()
  },
  UPDATE_HANG_STATUS: function(e) {
    let {
      status: t,
      saveAsDefault: n
    } = e;
    i = t, s = null, n && (d.currentDefaultStatus = {
      status: t,
      customHangStatus: s,
      expiresAt: Date.now() + 288e5
    })
  },
  UPDATE_HANG_STATUS_CUSTOM: function(e) {
    let {
      status: t,
      emoji: n,
      saveAsDefault: r
    } = e;
    i = u.HangStatusTypes.CUSTOM, s = {
      status: t,
      emoji: n
    };
    let o = [...d.recentCustomStatuses],
      l = o.findIndex(e => e.status === t && a.isEqual(e.emoji, n)); - 1 !== l ? o.splice(l, 1) : 7 === o.length && o.splice(6, 1), d.recentCustomStatuses = [s, ...o], r && (d.currentDefaultStatus = {
      status: i,
      customHangStatus: s,
      expiresAt: Date.now() + 288e5
    })
  },
  CLEAR_HANG_STATUS: function(e) {
    let {
      saveAsDefault: t
    } = e;
    i = null, s = null, t && (d.currentDefaultStatus = {
      status: null,
      customHangStatus: null,
      expiresAt: Date.now() + 288e5
    })
  }
})