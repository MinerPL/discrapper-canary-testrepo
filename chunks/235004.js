"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007"), n("424973"), n("834022");
var i, s, r = n("917351"),
  a = n.n(r),
  o = n("446674"),
  l = n("913144"),
  u = n("845579"),
  d = n("374363"),
  c = n("697218"),
  f = n("599110"),
  _ = n("829536"),
  h = n("846325"),
  g = n("49111"),
  m = n("397336");
(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
let E = new Map,
  p = new Map,
  v = new Set,
  S = 0,
  T = 0,
  I = new Set,
  C = new Map,
  A = !1;

function y(e) {
  let {
    sound: t
  } = e, n = E.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
  null != n && null != i && -1 !== i ? (n[i] = t, E.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), E.set(t.guildId, [...n]))
}
let N = a.debounce(e => {
  f.default.track(g.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
    volume: Math.round((0, _.amplitudeToPerceptual)(e))
  }), u.SoundboardSettings.updateSetting({
    volume: e
  })
}, 1e3);

function R(e) {
  var t, n;
  let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
  for (let [e, t] of Object.entries(i)) t.soundboardMuted ? v.add(e) : v.delete(e);
  for (let e of v.keys()) null == i[e] && v.delete(e)
}
class O extends o.default.Store {
  initialize() {
    this.waitFor(d.default), R(d.default.settings)
  }
  getOverlaySerializedState() {
    return {
      soundboardSounds: Object.fromEntries(E),
      favoritedSoundIds: Array.from(I),
      localSoundboardMutes: Array.from(v)
    }
  }
  getSounds() {
    return E
  }
  getSoundsForGuild(e) {
    return E.get(e)
  }
  getSound(e, t) {
    var n;
    let i = null !== (n = E.get(e)) && void 0 !== n ? n : [];
    return i.find(e => e.soundId === t)
  }
  getSoundById(e) {
    let t = Array.from(E.values()).flat();
    return t.find(t => t.soundId === e)
  }
  isFetchingSounds() {
    return 1 === T
  }
  isFetchingDefaultSounds() {
    return 1 === S
  }
  isFetching() {
    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
  }
  shouldFetchDefaultSounds() {
    return 0 === S
  }
  hasFetchedDefaultSounds() {
    return 2 === S
  }
  isUserPlayingSounds(e) {
    let t = C.get(e);
    return null != t && t > 0
  }
  isPlayingSound(e) {
    return null != p.get(e)
  }
  isFavoriteSound(e) {
    return I.has(e)
  }
  getFavorites() {
    return I
  }
  isLocalSoundboardMuted(e) {
    return v.has(e)
  }
  hasHadOtherUserPlaySoundInSession() {
    return A
  }
  hasFetchedAllSounds() {
    return 2 === T && 2 === S
  }
}
O.displayName = "SoundboardStore";
var D = new O(l.default, {
  LOGOUT: function() {
    E.clear(), p.clear(), C.clear(), A = !1, T = 0, S = 0
  },
  GUILD_SOUNDBOARD_FETCH: function() {
    T = 1
  },
  GUILD_SOUNDBOARD_SOUND_CREATE: y,
  GUILD_SOUNDBOARD_SOUND_UPDATE: y,
  GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
    let {
      soundId: t,
      guildId: n
    } = e;
    E.delete(t);
    let i = E.get(n),
      s = null == i ? void 0 : i.findIndex(e => e.soundId === t);
    null != i && null != s && !(s < 0) && (i.splice(s, 1), E.set(n, [...i]))
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
    var t, n, i;
    let {
      soundId: s,
      userId: r
    } = e, a = (null !== (n = p.get(s)) && void 0 !== n ? n : 0) + 1, o = (null !== (i = C.get(r)) && void 0 !== i ? i : 0) + 1;
    p.set(s, a), C.set(r, o), r !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (A = !0)
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
    var t, n;
    let {
      soundId: i,
      userId: s
    } = e, r = (null !== (t = p.get(i)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = C.get(s)) && void 0 !== n ? n : 0) - 1;
    r <= 0 ? p.delete(i) : p.set(i, r), a <= 0 ? C.delete(s) : C.set(s, a)
  },
  USER_SOUNDBOARD_SET_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    N(t)
  },
  VOICE_CHANNEL_SELECT: function() {
    p.clear(), C.clear()
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: t
    } = e, {
      type: n,
      proto: i
    } = t;
    if (n === m.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      var s, r;
      I = new Set(null !== (r = null == i ? void 0 : null === (s = i.favoriteSoundboardSounds) || void 0 === s ? void 0 : s.soundIds) && void 0 !== r ? r : [])
    } else n === m.UserSettingsTypes.PRELOADED_USER_SETTINGS && R(i)
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
    S = 1
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
    let {
      soundboardSounds: t
    } = e;
    E.set(h.DEFAULT_SOUND_GUILD_ID, t), S = 2
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
      E.set(t, n)
    }), T = 2
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    E.delete(t.id)
  },
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
    let {
      userId: t
    } = e;
    v.has(t) ? v.delete(t) : v.add(t)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      soundboardStoreState: t
    } = e;
    E = new Map(Object.entries(t.soundboardSounds)), I = new Set(t.favoritedSoundIds), v = new Set(t.localSoundboardMutes)
  },
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
    let {
      guildId: t,
      soundboardSounds: n
    } = e;
    E.set(t, n)
  }
})