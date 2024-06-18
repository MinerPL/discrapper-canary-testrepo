"use strict";
n(653041);
var i, r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(704907),
  u = n(581883),
  _ = n(70956),
  d = n(926491),
  c = n(526761);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = {
  pendingUsages: []
};
_.Z.Millis.DAY;
let T = new l.Z({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 0;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => d.Z.getStickerById(e),
    afterCompute: () => {},
    numFrequentlyItems: 20
  }),
  h = () => {
    d.Z.isLoaded && T.compute()
  },
  S = () => {
    h()
  };

function f() {
  var e;
  let t = null === (e = u.Z.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
  if (null == t) return !1;
  T.overwriteHistory(s().mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), I.pendingUsages)
}
class N extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(d.Z), null != e && (I = e), this.syncWith([d.Z], S), this.syncWith([u.Z], f)
  }
  getState() {
    return I
  }
  hasPendingUsage() {
    return I.pendingUsages.length > 0
  }
  get stickerFrecencyWithoutFetchingLatest() {
    return T
  }
}
E(N, "displayName", "StickersPersistedStore"), E(N, "persistKey", "StickersPersistedStoreV2"), t.Z = new N(a.Z, {
  STICKER_TRACK_USAGE: e => {
    let {
      stickerIds: t
    } = e;
    null == t || t.forEach(e => {
      T.track(e), I.pendingUsages.push({
        key: e,
        timestamp: Date.now()
      })
    }), h()
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    if (t !== c.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    I.pendingUsages = []
  }
})