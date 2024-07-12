n(47120);
var i, s = n(442837),
  l = n(570140),
  r = n(709054),
  a = n(592125);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let o = {},
  h = o;

function u() {
  r.default.keys(h).forEach(e => {
null == a.Z.getChannel(e) && delete h[e];
  });
}
class c extends(i = s.ZP.PersistedStore) {
  initialize(e) {
this.waitFor(a.Z), h = null != e ? e : o;
  }
  getState() {
return h;
  }
  getCollapsed() {
return h;
  }
  isCollapsed(e) {
return h[e] || !1;
  }
}
d(c, 'displayName', 'CollapsedVoiceChannelStore'), d(c, 'persistKey', 'collapsedChannels'), t.Z = new c(l.Z, {
  CONNECTION_OPEN: u,
  OVERLAY_INITIALIZE: u,
  CHANNEL_COLLAPSE: function(e) {
let {
  channelId: t
} = e;
h[t] ? delete h[t] : h[t] = !0, h = {
  ...h
};
  }
});