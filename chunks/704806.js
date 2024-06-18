"use strict";
n.d(t, {
  q: function() {
    return h
  }
}), n(47120);
var i, r = n(442837),
  s = n(570140),
  o = n(353926),
  a = n(626135),
  l = n(358085),
  u = n(998502);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = {
  hashes: {}
};
async function c() {
  if (!l.isPlatformEmbedded || !(0, l.isWindows)()) return [];
  await u.ZP.ensureModule("discord_media");
  let e = u.ZP.requireModule("discord_media");
  return await e.getSystemAnalyticsBlob() || []
}
async function E() {
  try {
    let e = (await c()).filter(e => d.hashes[e.name] !== e.hash);
    for (let {
        name: t,
        hash: n,
        data: i
      }
      of e) a.default.track(t, i), (d = {
      hashes: {
        ...d.hashes
      }
    }).hashes[t] = n;
    e.length > 0 && T.emitChange()
  } catch (e) {}
}
class I extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    d = null != e && "object" == typeof e.hashes ? e : {
      hashes: {}
    }, this.waitFor(o.Z)
  }
  getState() {
    return d
  }
  async info() {
    try {
      let e = (await c()).find(e => "hardware_detected" === e.name);
      if (null == e) return null;
      return e.data
    } catch (e) {}
  }
}
_(I, "displayName", "SystemAnalyticsStore"), _(I, "persistKey", "SystemAnalyticsStore");
let T = new I(s.Z, {
  START_SESSION: function() {
    return E(), !1
  }
});

function h() {
  return T.info()
}