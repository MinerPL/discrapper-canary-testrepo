"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140);
let d = {};
class c extends(i = u.ZP.Store) {
  isConnected(e) {
    return null != d[e]
  }
  get connections() {
    return l().values(d)
  }
  getApplication(e) {
    return d[e]
  }
  getAllConnections() {
    return d
  }
}
o = "ConnectedAppsStore", (s = "displayName") in(r = c) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new c(_.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      connectedApps: t
    } = e;
    d = {
      ...t
    }
  },
  RPC_APP_CONNECTED: function(e) {
    let {
      application: t
    } = e;
    if (null == t.id) return !1;
    let n = t.id;
    null == d[n] && (d[n] = {
      count: 0,
      id: t.id,
      name: t.name,
      icon: t.icon,
      coverImage: t.coverImage,
      authenticated: !1
    }), d[n].count++
  },
  RPC_APP_AUTHENTICATED: function(e) {
    let {
      application: t
    } = e;
    if (null != t.id && null != d[t.id]) d[t.id].authenticated = !0
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      application: t
    } = e;
    if (null != t.id && null != d[t.id]) d[t.id].count--, 0 === d[t.id].count && delete d[t.id]
  }
})