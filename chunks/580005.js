"use strict";
n.d(t, {
  C: function() {
    return S
  }
}), n(653041);
var i, r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(704907),
  u = n(581883),
  _ = n(592125),
  d = n(430824),
  c = n(944486),
  E = n(914010),
  I = n(981631),
  T = n(526761);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = 100,
  f = new l.Z({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 0;
      return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
    },
    lookupKey: e => {
      var t, n;
      return null !== (n = null !== (t = d.Z.getGuild(e)) && void 0 !== t ? t : _.Z.getChannel(e)) && void 0 !== n ? n : _.Z.getChannel(_.Z.getDMFromUserId(e))
    },
    afterCompute: () => {},
    numFrequentlyItems: S,
    maxSamples: 10
  }),
  N = null,
  A = null;

function m(e) {
  let {
    guildId: t,
    channelId: n
  } = e, i = !1;
  return n !== N && (N = null != n ? n : null, null != n && I.Xyh.test(n) && (i = !0, f.track(n), R.pendingUsages.push({
    key: n,
    timestamp: Date.now()
  }))), t !== A && (A = null != t ? t : null, null != t && I.Xyh.test(t) && (i = !0, f.track(t), R.pendingUsages.push({
    key: t,
    timestamp: Date.now()
  }))), i
}

function O() {
  var e;
  let t = null === (e = u.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
  if (null == t) return !1;
  f.overwriteHistory(s().mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), R.pendingUsages)
}
let R = {
  pendingUsages: []
};
class C extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(E.Z, c.Z), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && I.Xyh.test(e.key)), R = e), this.syncWith([u.Z], O)
  }
  getState() {
    return R
  }
  hasPendingUsage() {
    return R.pendingUsages.length > 0
  }
  get frecencyWithoutFetchingLatest() {
    return f
  }
  getFrequentlyWithoutFetchingLatest() {
    return f.frequently
  }
  getScoreWithoutFetchingLatest(e) {
    var t;
    return null !== (t = f.getFrecency(e)) && void 0 !== t ? t : 0
  }
  getScoreForDMWithoutFetchingLatest(e) {
    let t = _.Z.getDMFromUserId(e);
    return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
  }
  getMaxScore() {
    return 10 * S
  }
  getBonusScore() {
    return 100
  }
}
h(C, "displayName", "FrecencyStore"), h(C, "persistKey", "FrecencyStore"), t.Z = new C(a.Z, {
  CHANNEL_SELECT: m,
  VOICE_CHANNEL_SELECT: m,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    return t === T.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!n && (R.pendingUsages = [], !0)
  }
})