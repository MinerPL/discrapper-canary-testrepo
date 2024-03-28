"use strict";
n.r(t), n("47120");
var s, a = n("442837"),
  l = n("570140");
n("57132");
var i = n("455199"),
  r = n("70956"),
  o = n("709054"),
  u = n("497089");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = 90 * r.default.Millis.DAY,
  f = {
    tab: null,
    localItemAcks: {},
    hasNewMentions: !1,
    isDataStale: !1,
    isRefreshing: !1
  };
class E extends(s = a.default.PersistedStore) {
  initialize(e) {
    if (this.waitFor(i.default), null != e) {
      var t;
      (f = e).localItemAcks = function(e) {
        let t = {};
        for (let [n, s] of Object.entries(e)) Date.now() - s < c && (t[n] = s);
        return t
      }(null !== (t = f.localItemAcks) && void 0 !== t ? t : {}), f.isDataStale = !0
    }
  }
  getState() {
    return f
  }
  getTab() {
    var e;
    return null !== (e = f.tab) && void 0 !== e ? e : u.NotificationCenterTabs.ForYou
  }
  isLocalItemAcked(e) {
    return null != e.local_id && (null != f.localItemAcks[e.local_id] || o.default.age(e.id) > c)
  }
  hasNewMentions() {
    return f.hasNewMentions
  }
  isDataStale() {
    return f.isDataStale
  }
  isRefreshing() {
    return f.isRefreshing
  }
  shouldReload() {
    return f.hasNewMentions || f.isDataStale || f.isRefreshing
  }
}
d(E, "displayName", "NotificationCenterStore"), d(E, "persistKey", "NotificationCenterStore");

function _() {
  f.hasNewMentions = !1, f.isDataStale = !1, f.isRefreshing = !1
}
t.default = new E(l.default, {
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e
  },
  NOTIFICATION_CENTER_SET_TAB: function(e) {
    f = {
      ...f,
      tab: e.tab
    }
  },
  NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
    let {
      localIds: t
    } = e;
    t.forEach(e => {
      f = {
        ...f,
        localItemAcks: {
          ...f.localItemAcks,
          [e]: Date.now()
        }
      }
    })
  },
  NOTIFICATION_CENTER_REFRESH: function() {
    f.isRefreshing = !0
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: _,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: _
})