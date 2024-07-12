n(724458);
var i, l, r, a, s = n(442837),
  o = n(570140),
  c = n(981631);
let u = {};

function d(e) {
  let t = u[e = null != e ? e : 'null'];
  return null == t && (t = u[e] = {
state: c.hes.DISCONNECTED,
quality: c.IE4.UNKNOWN,
pings: [],
hostname: null,
lossRate: null
  }), t;
}

function h(e, t, n) {
  let i = u[e = null != e ? e : 'null'];
  return null != i ? t(i) : n;
}
class p extends(i = s.ZP.Store) {
  getConnectionState(e) {
return h(e, e => {
  let {
    state: t
  } = e;
  return t;
}, c.hes.DISCONNECTED);
  }
  getQuality(e) {
return h(e, e => {
  let {
    quality: t
  } = e;
  return t;
}, c.IE4.UNKNOWN);
  }
  getHostname(e) {
return h(e, e => {
  let {
    hostname: t
  } = e;
  return t;
}, null);
  }
  getPings(e) {
return h(e, e => {
  let {
    pings: t
  } = e;
  return t;
}, []);
  }
  getAveragePing(e) {
let t = this.getPings(e);
return 0 === t.length ? 0 : t.reduce((e, t) => e + t.value, 0) / t.length;
  }
  getLastPing(e) {
var t;
let n = this.getPings(e);
if (0 === n.length)
  return 0;
return null === (t = n[n.length - 1]) || void 0 === t ? void 0 : t.value;
  }
  getOutboundLossRate(e) {
return h(e, e => {
  let {
    lossRate: t
  } = e;
  return t;
}, null);
  }
}
a = 'OverlayRTCConnectionStore', (r = 'displayName') in(l = p) ? Object.defineProperty(l, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[r] = a, t.Z = new p(o.Z, {
  OVERLAY_INITIALIZE: function(e) {
u = e.rtcConnectionStates;
  },
  RTC_CONNECTION_STATE: function(e) {
if (null != e.streamKey)
  return !1;
let t = d(e.lobbyId);
t.state = e.state, t.hostname = e.hostname;
  },
  RTC_CONNECTION_PING: function(e) {
let t = d(e.lobbyId);
t.pings = e.pings, t.quality = e.quality;
  },
  RTC_CONNECTION_LOSS_RATE: function(e) {
d(e.lobbyId).lossRate = e.lossRate;
  }
});