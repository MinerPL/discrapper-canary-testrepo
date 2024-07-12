n(653041);
var r, i = n(392711),
  a = n.n(i),
  o = n(442837),
  s = n(570140),
  l = n(911969),
  u = n(704907),
  c = n(581883),
  d = n(674563),
  _ = n(526761);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let f = {
pendingUsages: []
  },
  h = new u.Z({
computeBonus: () => 100,
computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1,
lookupKey: e => e,
afterCompute: () => {},
numFrequentlyItems: d.yP
  });

function p(e) {
  f.pendingUsages.push({
key: e,
timestamp: Date.now()
  }), h.track(e), h.compute();
}

function m() {
  var e, t;
  let n = null !== (t = null === (e = c.Z.frecencyWithoutFetchingLatest.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
  h.overwriteHistory(a().mapValues(n, e => ({
...e,
recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), f.pendingUsages);
}
class I extends(r = o.ZP.PersistedStore) {
  initialize(e) {
null != e && (f = e), this.syncWith([c.Z], m);
  }
  getState() {
return f;
  }
  hasPendingUsage() {
return f.pendingUsages.length > 0;
  }
  getApplicationFrecencyWithoutLoadingLatest() {
return h;
  }
  getScoreWithoutLoadingLatest(e) {
var t;
return null !== (t = h.getScore(e)) && void 0 !== t ? t : 0;
  }
  getTopApplicationsWithoutLoadingLatest() {
return h.frequently;
  }
}
E(I, 'displayName', 'ApplicationFrecencyStore'), E(I, 'persistKey', 'ApplicationFrecency'), t.Z = new I(s.Z, {
  APPLICATION_COMMAND_USED: function(e) {
let {
  command: t
} = e;
if (t.type !== l.yU.CHAT)
  return !1;
p(t.applicationId);
  },
  EMBEDDED_ACTIVITY_OPEN: function(e) {
let {
  applicationId: t
} = e;
p(t);
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
let {
  settings: {
    type: t
  },
  wasSaved: n
} = e;
if (t !== _.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)
  return !1;
f.pendingUsages = [];
  }
});