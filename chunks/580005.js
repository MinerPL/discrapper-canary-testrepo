n.d(t, {
  C: function() {
return m;
  }
}), n(653041);
var r, i = n(392711),
  a = n.n(i),
  s = n(442837),
  o = n(570140),
  l = n(704907),
  u = n(581883),
  c = n(592125),
  d = n(430824),
  _ = n(944486),
  E = n(914010),
  f = n(981631),
  h = n(526761);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let m = 100,
  I = new l.Z({
computeBonus: () => 100,
computeWeight: e => {
  let t = 1;
  return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t;
},
lookupKey: e => {
  var t, n;
  return null !== (n = null !== (t = d.Z.getGuild(e)) && void 0 !== t ? t : c.Z.getChannel(e)) && void 0 !== n ? n : c.Z.getChannel(c.Z.getDMFromUserId(e));
},
afterCompute: () => {},
numFrequentlyItems: m,
maxSamples: 10
  }),
  T = null,
  g = null;

function S(e) {
  let {
guildId: t,
channelId: n
  } = e, r = !1;
  return n !== T && (T = null != n ? n : null, null != n && f.Xyh.test(n) && (r = !0, I.track(n), N.pendingUsages.push({
key: n,
timestamp: Date.now()
  }))), t !== g && (g = null != t ? t : null, null != t && f.Xyh.test(t) && (r = !0, I.track(t), N.pendingUsages.push({
key: t,
timestamp: Date.now()
  }))), r;
}

function A() {
  var e;
  let t = null === (e = u.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
  if (null == t)
return !1;
  I.overwriteHistory(a().mapValues(t, e => ({
...e,
recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), N.pendingUsages);
}
let N = {
  pendingUsages: []
};
class v extends(r = s.ZP.PersistedStore) {
  initialize(e) {
this.waitFor(E.Z, _.Z), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && f.Xyh.test(e.key)), N = e), this.syncWith([u.Z], A);
  }
  getState() {
return N;
  }
  hasPendingUsage() {
return N.pendingUsages.length > 0;
  }
  get frecencyWithoutFetchingLatest() {
return I;
  }
  getFrequentlyWithoutFetchingLatest() {
return I.frequently;
  }
  getScoreWithoutFetchingLatest(e) {
var t;
return null !== (t = I.getFrecency(e)) && void 0 !== t ? t : 0;
  }
  getScoreForDMWithoutFetchingLatest(e) {
let t = c.Z.getDMFromUserId(e);
return null != t ? this.getScoreWithoutFetchingLatest(t) : 0;
  }
  getMaxScore() {
return 10 * m;
  }
  getBonusScore() {
return 100;
  }
}
p(v, 'displayName', 'FrecencyStore'), p(v, 'persistKey', 'FrecencyStore'), t.Z = new v(o.Z, {
  CHANNEL_SELECT: S,
  VOICE_CHANNEL_SELECT: S,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
let {
  settings: {
    type: t
  },
  wasSaved: n
} = e;
return t === h.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!n && (N.pendingUsages = [], !0);
  }
});