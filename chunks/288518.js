"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var i = n("988415"),
  s = n("42203"),
  r = n("455079");
let a = new Set,
  o = new Set,
  l = !1,
  u = null;

function d(e) {
  return e.isMessageRequest && !e.isSpam
}

function c(e) {
  let t = !1;
  return d(e) && !a.has(e.id) && (a.add(e.id), t = !0), !d(e) && a.has(e.id) && (a.delete(e.id), t = !0), !d(e) && o.has(e.id) && (o.delete(e.id), t = !0), t
}

function f(e) {
  var t;
  null != e && (u = null !== (t = (0, i.getCountryCodeByAlpha2)(e)) && void 0 !== t ? t : (0, i.getDefaultCountryCode)())
}

function _(e) {
  "CONNECTION_OPEN" === e.type && f(e.countryCode), a.clear(), o.clear(), Object.values(s.default.getMutablePrivateChannels()).forEach(e => {
    c(e)
  }), l = !0
}

function h(e) {
  let {
    channelId: t
  } = e;
  o.add(t)
}

function g(e) {
  let {
    channel: t
  } = e;
  return c(t)
}

function m(e) {
  let {
    channels: t
  } = e;
  for (let e of t) c(e)
}

function E(e) {
  let {
    channel: t
  } = e;
  return !!a.has(t.id) && (a.delete(t.id), !0)
}

function p(e) {
  let {
    messageRequestChannelIds: t
  } = e;
  t.forEach(e => a.add(e))
}

function v(e) {
  let {
    countryCode: t
  } = e;
  f(t)
}
class S extends r.default {
  takeSnapshot() {
    return {
      version: S.LATEST_SNAPSHOT_VERSION,
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
    return o.has(e)
  }
  getUserCountryCode() {
    return u
  }
  isReady() {
    return l
  }
  constructor() {
    super(), this.loadCache = () => {
      let e = this.readSnapshot(S.LATEST_SNAPSHOT_VERSION);
      null != e && (a = new Set(e))
    }, this.registerActionHandlers({
      CONNECTION_OPEN: _,
      CONNECTION_OPEN_SUPPLEMENTAL: _,
      CACHE_LOADED_LAZY: this.loadCache,
      OVERLAY_INITIALIZE: p,
      CHANNEL_CREATE: g,
      CHANNEL_UPDATES: m,
      CHANNEL_DELETE: E,
      SET_LOCATION_METADATA: v,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: h
    }), this.waitFor(s.default)
  }
}
S.displayName = "MessageRequestStore", S.LATEST_SNAPSHOT_VERSION = 1;
var T = new S