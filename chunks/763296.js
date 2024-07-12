n(47120), n(653041), n(536091);
var r, i, a, o, s, l, u = n(392711),
  c = n.n(u),
  d = n(442837),
  _ = n(570140),
  E = n(695346),
  f = n(581883),
  h = n(594174),
  p = n(626135),
  m = n(36703),
  I = n(709054),
  T = n(710111),
  g = n(981631),
  S = n(526761);
(a = r || (r = {}))[a.NOT_FETCHED = 0] = 'NOT_FETCHED', a[a.FETCHING = 1] = 'FETCHING', a[a.FETCHED = 2] = 'FETCHED';
let A = new Map(),
  N = new Map(),
  v = new Set(),
  O = 0,
  R = 0,
  C = new Set(),
  y = new Map(),
  D = !1;

function L(e) {
  let {
sound: t
  } = e, n = A.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
  null != n && null != r && -1 !== r ? (n[r] = t, A.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), A.set(t.guildId, [...n]));
}
let b = c().debounce(e => {
  p.default.track(g.rMx.UPDATE_SOUNDBOARD_SETTINGS, {
volume: Math.round((0, m.P)(e))
  }), E.kU.updateSetting({
volume: e
  });
}, 1000);

function M(e) {
  var t, n;
  let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
  for (let [e, t] of Object.entries(r))
t.soundboardMuted ? v.add(e) : v.delete(e);
  for (let e of v.keys())
null == r[e] && v.delete(e);
}
class P extends(i = d.ZP.Store) {
  initialize() {
this.waitFor(f.Z), M(f.Z.settings);
  }
  getOverlaySerializedState() {
return {
  soundboardSounds: Object.fromEntries(A),
  favoritedSoundIds: Array.from(C),
  localSoundboardMutes: Array.from(v)
};
  }
  getSounds() {
return A;
  }
  getSoundsForGuild(e) {
return A.get(e);
  }
  getSound(e, t) {
var n;
return (null !== (n = A.get(e)) && void 0 !== n ? n : []).find(e => e.soundId === t);
  }
  getSoundById(e) {
return Array.from(A.values()).flat().find(t => t.soundId === e);
  }
  isFetchingSounds() {
return 1 === R;
  }
  isFetchingDefaultSounds() {
return 1 === O;
  }
  isFetching() {
return this.isFetchingSounds() || this.isFetchingDefaultSounds();
  }
  shouldFetchDefaultSounds() {
return 0 === O;
  }
  hasFetchedDefaultSounds() {
return 2 === O;
  }
  isUserPlayingSounds(e) {
let t = y.get(e);
return null != t && t > 0;
  }
  isPlayingSound(e) {
return null != N.get(e);
  }
  isFavoriteSound(e) {
return C.has(e);
  }
  getFavorites() {
return C;
  }
  isLocalSoundboardMuted(e) {
return v.has(e);
  }
  hasHadOtherUserPlaySoundInSession() {
return D;
  }
  hasFetchedAllSounds() {
return 2 === R && 2 === O;
  }
}
l = 'SoundboardStore', (s = 'displayName') in(o = P) ? Object.defineProperty(o, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[s] = l, t.Z = new P(_.Z, {
  LOGOUT: function() {
A.clear(), N.clear(), y.clear(), D = !1, R = 0, O = 0;
  },
  GUILD_SOUNDBOARD_FETCH: function() {
R = 1;
  },
  GUILD_SOUNDBOARD_SOUND_CREATE: L,
  GUILD_SOUNDBOARD_SOUND_UPDATE: L,
  GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
let {
  soundId: t,
  guildId: n
} = e, r = A.get(n), i = null == r ? void 0 : r.findIndex(e => e.soundId === t);
null != r && null != i && !(i < 0) && (r.splice(i, 1), A.set(n, [...r]));
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
var t, n, r;
let {
  soundId: i,
  userId: a
} = e, o = (null !== (n = N.get(i)) && void 0 !== n ? n : 0) + 1, s = (null !== (r = y.get(a)) && void 0 !== r ? r : 0) + 1;
N.set(i, o), y.set(a, s), a !== (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (D = !0);
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
var t, n;
let {
  soundId: r,
  userId: i
} = e, a = (null !== (t = N.get(r)) && void 0 !== t ? t : 0) - 1, o = (null !== (n = y.get(i)) && void 0 !== n ? n : 0) - 1;
a <= 0 ? N.delete(r) : N.set(r, a), o <= 0 ? y.delete(i) : y.set(i, o);
  },
  USER_SOUNDBOARD_SET_VOLUME: function(e) {
let {
  volume: t
} = e;
b(t);
  },
  VOICE_CHANNEL_SELECT: function() {
N.clear(), y.clear();
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
let {
  settings: t
} = e, {
  type: n,
  proto: r
} = t;
if (n === S.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
  var i, a;
  C = new Set(null !== (a = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== a ? a : []);
} else
  n === S.yP.PRELOADED_USER_SETTINGS && M(r);
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
O = 1;
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
let {
  soundboardSounds: t
} = e;
A.set(T.X8, t), O = 2;
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
  A.set(t, n);
}), R = 2;
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
A.delete(t.id);
  },
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
let {
  userId: t
} = e;
v.has(t) ? v.delete(t) : v.add(t);
  },
  OVERLAY_INITIALIZE: function(e) {
let {
  soundboardStoreState: t
} = e;
A = new Map(I.default.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), v = new Set(t.localSoundboardMutes);
  },
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
let {
  guildId: t,
  soundboardSounds: n
} = e;
A.set(t, n);
  }
});