n(47120);
var r, i, a, o, s = n(392711),
  l = n.n(s),
  u = n(442837),
  c = n(570140);
let d = {};
class _ extends(r = u.ZP.Store) {
  isConnected(e) {
return null != d[e];
  }
  get connections() {
return l().values(d);
  }
  getApplication(e) {
return d[e];
  }
  getAllConnections() {
return d;
  }
}
o = 'ConnectedAppsStore', (a = 'displayName') in(i = _) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o, t.Z = new _(c.Z, {
  OVERLAY_INITIALIZE: function(e) {
let {
  connectedApps: t
} = e;
d = {
  ...t
};
  },
  RPC_APP_CONNECTED: function(e) {
let {
  application: t
} = e;
if (null == t.id)
  return !1;
let n = t.id;
null == d[n] && (d[n] = {
  count: 0,
  id: t.id,
  name: t.name,
  icon: t.icon,
  coverImage: t.coverImage,
  authenticated: !1
}), d[n].count++;
  },
  RPC_APP_AUTHENTICATED: function(e) {
let {
  application: t
} = e;
if (null != t.id && null != d[t.id])
  d[t.id].authenticated = !0;
  },
  RPC_APP_DISCONNECTED: function(e) {
let {
  application: t
} = e;
if (null != t.id && null != d[t.id])
  d[t.id].count--, 0 === d[t.id].count && delete d[t.id];
  }
});