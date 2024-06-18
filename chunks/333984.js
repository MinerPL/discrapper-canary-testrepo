"use strict";
n(47120);
var i = n(592125),
  r = n(412788);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = new Set,
  a = new Set,
  l = !1;

function u(e) {
  return e.isSpam
}

function _(e) {
  let t = !1;
  if (e.isSpam && !o.has(e.id)) o.add(e.id), t = !0;
  if (!e.isSpam && o.has(e.id)) o.delete(e.id), t = !0;
  if (!e.isSpam && a.has(e.id)) a.delete(e.id), t = !0;
  return t
}

function d() {
  o.clear(), a.clear(), Object.values(i.Z.getMutablePrivateChannels()).forEach(e => {
    _(e)
  }), l = !0
}

function c(e) {
  let {
    channelId: t
  } = e;
  a.add(t)
}

function E(e) {
  let {
    channel: t
  } = e;
  return _(t)
}

function I(e) {
  let {
    channels: t
  } = e;
  for (let e of t) _(e)
}

function T(e) {
  let {
    channel: t
  } = e, n = !1;
  return o.has(t.id) && (o.delete(t.id), n = !0), n
}
class h extends r.Z {
  initialize() {
    this.waitFor(i.Z)
  }
  loadCache() {
    let e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
    null != e && (o = new Set(e))
  }
  takeSnapshot() {
    return {
      version: h.LATEST_SNAPSHOT_VERSION,
      data: Array.from(o)
    }
  }
  getSpamChannelIds() {
    return o
  }
  getSpamChannelsCount() {
    return o.size
  }
  isSpam(e) {
    return o.has(e)
  }
  isAcceptedOptimistic(e) {
    return a.has(e)
  }
  isReady() {
    return l
  }
  constructor() {
    super({
      CONNECTION_OPEN: d,
      CONNECTION_OPEN_SUPPLEMENTAL: d,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      CHANNEL_CREATE: E,
      CHANNEL_UPDATES: I,
      CHANNEL_DELETE: T,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: c
    })
  }
}
s(h, "displayName", "SpamMessageRequestStore"), s(h, "LATEST_SNAPSHOT_VERSION", 1), t.Z = new h