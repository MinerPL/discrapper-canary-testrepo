"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var i = n("42203"),
  s = n("455079");
let r = new Set,
  a = new Set,
  o = !1;

function l(e) {
  return e.isSpam
}

function u(e) {
  let t = !1;
  if (e.isSpam && !r.has(e.id)) r.add(e.id), t = !0;
  if (!e.isSpam && r.has(e.id)) r.delete(e.id), t = !0;
  if (!e.isSpam && a.has(e.id)) a.delete(e.id), t = !0;
  return t
}

function d() {
  r.clear(), a.clear(), Object.values(i.default.getMutablePrivateChannels()).forEach(e => {
    u(e)
  }), o = !0
}

function c(e) {
  let {
    channelId: t
  } = e;
  a.add(t)
}

function f(e) {
  let {
    channel: t
  } = e;
  return u(t)
}

function _(e) {
  let {
    channels: t
  } = e;
  for (let e of t) u(e)
}

function h(e) {
  let {
    channel: t
  } = e, n = !1;
  return r.has(t.id) && (r.delete(t.id), n = !0), n
}
class g extends s.default {
  takeSnapshot() {
    return {
      version: g.LATEST_SNAPSHOT_VERSION,
      data: Array.from(r)
    }
  }
  getSpamChannelIds() {
    return r
  }
  getSpamChannelsCount() {
    return r.size
  }
  isSpam(e) {
    return r.has(e)
  }
  isAcceptedOptimistic(e) {
    return a.has(e)
  }
  isReady() {
    return o
  }
  constructor() {
    super(), this.loadCache = () => {
      let e = this.readSnapshot(g.LATEST_SNAPSHOT_VERSION);
      null != e && (r = new Set(e))
    }, this.registerActionHandlers({
      CONNECTION_OPEN: d,
      CONNECTION_OPEN_SUPPLEMENTAL: d,
      CACHE_LOADED_LAZY: this.loadCache,
      CHANNEL_CREATE: f,
      CHANNEL_UPDATES: _,
      CHANNEL_DELETE: h,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: c
    }), this.waitFor(i.default)
  }
}
g.displayName = "SpamMessageRequestStore", g.LATEST_SNAPSHOT_VERSION = 1;
var m = new g