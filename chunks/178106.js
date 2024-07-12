n(653041), n(47120);
var r, i = n(392711),
  a = n.n(i),
  o = n(31775),
  s = n.n(o),
  l = n(442837),
  u = n(570140),
  c = n(704907),
  d = n(581883),
  _ = n(594174),
  E = n(164878),
  f = n(763296),
  h = n(697426),
  p = n(710111),
  m = n(526761);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let T = [],
  g = new(s())({
max: p.zb
  }),
  S = new c.Z({
computeBonus: () => 100,
computeWeight: e => {
  let t = 1;
  return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t;
},
lookupKey: e => f.Z.getSoundById(e),
afterCompute: () => {},
numFrequentlyItems: p.O6
  });

function A() {
  var e, t;
  if (!N())
return;
  let n = null === (e = d.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
  S.overwriteHistory((t = null != n ? n : {}, a().mapValues(t, e => ({
...e,
recentUses: e.recentUses.map(Number).filter(e => e > 0)
  }))), T);
}

function N() {
  return (0, E.v)({
location: 'soundboard_event_store',
autoTrackExposure: !1
  }).canSeeFrequentlyPlayed;
}
class v extends(r = l.ZP.PersistedStore) {
  initialize(e) {
this.waitFor(_.default, f.Z), (null == e ? void 0 : e.recentlyHeardCache) != null && g.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (T = e.playedEventsPendingFlush), this.syncWith([d.Z], A);
  }
  getState() {
return {
  recentlyHeardCache: g.dump(),
  playedEventsPendingFlush: T
};
  }
  hasPendingUsage() {
return T.length > 0;
  }
  get playedSoundHistory() {
return S.usageHistory;
  }
  get recentlyHeardSoundIds() {
return g.values();
  }
  get frecentlyPlayedSounds() {
return S.frequently;
  }
}
I(v, 'displayName', 'SoundboardEventStore'), I(v, 'persistKey', 'SoundboardEventStore'), t.Z = new v(u.Z, {
  GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
let {
  sound: t,
  trigger: n
} = e;
if (!N())
  return;
let r = t.soundId.toString();
n === h.YQ.SOUNDBOARD && function(e) {
  S.track(e), T.push({
    key: e,
    timestamp: Date.now()
  }), S.compute();
}(r);
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
var t;
let {
  soundId: n,
  userId: r
} = e;
if (! function() {
    return (0, E.v)({
      location: 'soundboard_event_store',
      autoTrackExposure: !1
    }).canSeeRecentlyHeard;
  }())
  return;
let i = n.toString();
r !== (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && function(e) {
  for (let t of f.Z.getSounds().values())
    if (null != t.find(t => t.soundId.toString() === e))
      return !0;
  return !1;
}(i) && function(e) {
  g.set(e, e);
}(i);
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
let {
  settings: {
    type: t
  },
  wasSaved: n
} = e;
N() && t === m.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (T = []);
  }
});