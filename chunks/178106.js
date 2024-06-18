"use strict";
n(653041), n(47120);
var i, r = n(392711),
  s = n.n(r),
  o = n(31775),
  a = n.n(o),
  l = n(442837),
  u = n(570140),
  _ = n(704907),
  d = n(581883),
  c = n(594174),
  E = n(164878),
  I = n(763296),
  T = n(697426),
  h = n(710111),
  S = n(526761);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = [],
  A = new(a())({
    max: h.zb
  }),
  m = new _.Z({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 0;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => I.Z.getSoundById(e),
    afterCompute: () => {},
    numFrequentlyItems: h.O6
  });

function O() {
  var e, t;
  if (!R()) return;
  let n = null === (e = d.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
  m.overwriteHistory((t = null != n ? n : {}, s().mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  }))), N)
}

function R() {
  return (0, E.v)({
    location: "soundboard_event_store",
    autoTrackExposure: !1
  }).canSeeFrequentlyPlayed
}
class C extends(i = l.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(c.default, I.Z), (null == e ? void 0 : e.recentlyHeardCache) != null && A.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (N = e.playedEventsPendingFlush), this.syncWith([d.Z], O)
  }
  getState() {
    return {
      recentlyHeardCache: A.dump(),
      playedEventsPendingFlush: N
    }
  }
  hasPendingUsage() {
    return N.length > 0
  }
  get playedSoundHistory() {
    return m.usageHistory
  }
  get recentlyHeardSoundIds() {
    return A.values()
  }
  get frecentlyPlayedSounds() {
    return m.frequently
  }
}
f(C, "displayName", "SoundboardEventStore"), f(C, "persistKey", "SoundboardEventStore"), t.Z = new C(u.Z, {
  GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
    let {
      sound: t,
      trigger: n
    } = e;
    if (!R()) return;
    let i = t.soundId.toString();
    n === T.YQ.SOUNDBOARD && function(e) {
      m.track(e), N.push({
        key: e,
        timestamp: Date.now()
      }), m.compute()
    }(i)
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
    var t;
    let {
      soundId: n,
      userId: i
    } = e;
    if (! function() {
        return (0, E.v)({
          location: "soundboard_event_store",
          autoTrackExposure: !1
        }).canSeeRecentlyHeard
      }()) return;
    let r = n.toString();
    i !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && function(e) {
      for (let t of I.Z.getSounds().values())
        if (null != t.find(t => t.soundId.toString() === e)) return !0;
      return !1
    }(r) && function(e) {
      A.set(e, e)
    }(r)
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    R() && t === S.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (N = [])
  }
})