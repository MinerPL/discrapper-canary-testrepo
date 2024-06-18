"use strict";
n(47120);
var i = n(133080),
  r = n(592125),
  s = n(412788);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = new Set,
  l = new Set,
  u = !1,
  _ = null;

function d(e) {
  return e.isMessageRequest && !e.isSpam
}

function c(e) {
  let t = !1;
  return d(e) && !a.has(e.id) && (a.add(e.id), t = !0), !d(e) && a.has(e.id) && (a.delete(e.id), t = !0), !d(e) && l.has(e.id) && (l.delete(e.id), t = !0), t
}

function E(e) {
  var t;
  if (null != e) _ = null !== (t = (0, i.Zz)(e)) && void 0 !== t ? t : (0, i.K4)()
}

function I(e) {
  "CONNECTION_OPEN" === e.type && E(e.countryCode), a.clear(), l.clear(), Object.values(r.Z.getMutablePrivateChannels()).forEach(e => {
    c(e)
  }), u = !0
}

function T(e) {
  let {
    channelId: t
  } = e;
  l.add(t)
}

function h(e) {
  let {
    channel: t
  } = e;
  return c(t)
}

function S(e) {
  let {
    channels: t
  } = e;
  for (let e of t) c(e)
}

function f(e) {
  let {
    channel: t
  } = e;
  return !!a.has(t.id) && (a.delete(t.id), !0)
}

function N(e) {
  let {
    messageRequestChannelIds: t
  } = e;
  t.forEach(e => a.add(e))
}

function A(e) {
  let {
    countryCode: t
  } = e;
  E(t)
}
class m extends s.Z {
  initialize() {
    this.waitFor(r.Z)
  }
  loadCache() {
    let e = this.readSnapshot(m.LATEST_SNAPSHOT_VERSION);
    null != e && (a = new Set(e))
  }
  takeSnapshot() {
    return {
      version: m.LATEST_SNAPSHOT_VERSION,
      data: Array.from(a)
    }
  }
  getMessageRequestChannelIds() {
    return a
  }
  getMessageRequestsCount() {
    return a.size
  }
  isMessageRequest(e) {
    return a.has(e)
  }
  isAcceptedOptimistic(e) {
    return l.has(e)
  }
  getUserCountryCode() {
    return _
  }
  isReady() {
    return u
  }
  constructor() {
    super({
      CONNECTION_OPEN: I,
      CONNECTION_OPEN_SUPPLEMENTAL: I,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      OVERLAY_INITIALIZE: N,
      CHANNEL_CREATE: h,
      CHANNEL_UPDATES: S,
      CHANNEL_DELETE: f,
      SET_LOCATION_METADATA: A,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: T
    })
  }
}
o(m, "displayName", "MessageRequestStore"), o(m, "LATEST_SNAPSHOT_VERSION", 1), t.Z = new m