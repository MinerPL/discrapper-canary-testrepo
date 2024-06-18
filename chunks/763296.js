"use strict";
n(47120), n(653041), n(536091);
var i, r, s, o, a, l, u = n(392711),
  _ = n.n(u),
  d = n(442837),
  c = n(570140),
  E = n(695346),
  I = n(581883),
  T = n(594174),
  h = n(626135),
  S = n(36703),
  f = n(709054),
  N = n(710111),
  A = n(981631),
  m = n(526761);
(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
let O = new Map,
  R = new Map,
  C = new Set,
  p = 0,
  g = 0,
  L = new Set,
  v = new Map,
  D = !1;

function M(e) {
  let {
    sound: t
  } = e, n = O.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
  null != n && null != i && -1 !== i ? (n[i] = t, O.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), O.set(t.guildId, [...n]))
}
let P = _().debounce(e => {
  h.default.track(A.rMx.UPDATE_SOUNDBOARD_SETTINGS, {
    volume: Math.round((0, S.P)(e))
  }), E.kU.updateSetting({
    volume: e
  })
}, 1e3);

function y(e) {
  var t, n;
  let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
  for (let [e, t] of Object.entries(i)) t.soundboardMuted ? C.add(e) : C.delete(e);
  for (let e of C.keys()) null == i[e] && C.delete(e)
}
class U extends(r = d.ZP.Store) {
  initialize() {
    this.waitFor(I.Z), y(I.Z.settings)
  }
  getOverlaySerializedState() {
    return {
      soundboardSounds: Object.fromEntries(O),
      favoritedSoundIds: Array.from(L),
      localSoundboardMutes: Array.from(C)
    }
  }
  getSounds() {
    return O
  }
  getSoundsForGuild(e) {
    return O.get(e)
  }
  getSound(e, t) {
    var n;
    return (null !== (n = O.get(e)) && void 0 !== n ? n : []).find(e => e.soundId === t)
  }
  getSoundById(e) {
    return Array.from(O.values()).flat().find(t => t.soundId === e)
  }
  isFetchingSounds() {
    return 1 === g
  }
  isFetchingDefaultSounds() {
    return 1 === p
  }
  isFetching() {
    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
  }
  shouldFetchDefaultSounds() {
    return 0 === p
  }
  hasFetchedDefaultSounds() {
    return 2 === p
  }
  isUserPlayingSounds(e) {
    let t = v.get(e);
    return null != t && t > 0
  }
  isPlayingSound(e) {
    return null != R.get(e)
  }
  isFavoriteSound(e) {
    return L.has(e)
  }
  getFavorites() {
    return L
  }
  isLocalSoundboardMuted(e) {
    return C.has(e)
  }
  hasHadOtherUserPlaySoundInSession() {
    return D
  }
  hasFetchedAllSounds() {
    return 2 === g && 2 === p
  }
}
l = "SoundboardStore", (a = "displayName") in(o = U) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new U(c.Z, {
  LOGOUT: function() {
    O.clear(), R.clear(), v.clear(), D = !1, g = 0, p = 0
  },
  GUILD_SOUNDBOARD_FETCH: function() {
    g = 1
  },
  GUILD_SOUNDBOARD_SOUND_CREATE: M,
  GUILD_SOUNDBOARD_SOUND_UPDATE: M,
  GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
    let {
      soundId: t,
      guildId: n
    } = e, i = O.get(n), r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
    null != i && null != r && !(r < 0) && (i.splice(r, 1), O.set(n, [...i]))
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
    var t, n, i;
    let {
      soundId: r,
      userId: s
    } = e, o = (null !== (n = R.get(r)) && void 0 !== n ? n : 0) + 1, a = (null !== (i = v.get(s)) && void 0 !== i ? i : 0) + 1;
    R.set(r, o), v.set(s, a), s !== (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (D = !0)
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
    var t, n;
    let {
      soundId: i,
      userId: r
    } = e, s = (null !== (t = R.get(i)) && void 0 !== t ? t : 0) - 1, o = (null !== (n = v.get(r)) && void 0 !== n ? n : 0) - 1;
    s <= 0 ? R.delete(i) : R.set(i, s), o <= 0 ? v.delete(r) : v.set(r, o)
  },
  USER_SOUNDBOARD_SET_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    P(t)
  },
  VOICE_CHANNEL_SELECT: function() {
    R.clear(), v.clear()
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: t
    } = e, {
      type: n,
      proto: i
    } = t;
    if (n === m.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
      var r, s;
      L = new Set(null !== (s = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== s ? s : [])
    } else n === m.yP.PRELOADED_USER_SETTINGS && y(i)
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
    p = 1
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
    let {
      soundboardSounds: t
    } = e;
    O.set(N.X8, t), p = 2
  },
  SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
    let {
      updates: t
    } = e;
    t.forEach(e => {
      let {
        guildId: t,
        sounds: n
      } = e;
      O.set(t, n)
    }), g = 2
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    O.delete(t.id)
  },
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
    let {
      userId: t
    } = e;
    C.has(t) ? C.delete(t) : C.add(t)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      soundboardStoreState: t
    } = e;
    O = new Map(f.default.entries(t.soundboardSounds)), L = new Set(t.favoritedSoundIds), C = new Set(t.localSoundboardMutes)
  },
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
    let {
      guildId: t,
      soundboardSounds: n
    } = e;
    O.set(t, n)
  }
})