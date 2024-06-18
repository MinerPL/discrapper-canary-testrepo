"use strict";
var i, r, s, o, a, l, u, _, d, c, E, I, T, h;

function S(e, t) {
  let {
    sound_id: n,
    emoji_id: i,
    emoji_name: r,
    user_id: s,
    available: o,
    ...a
  } = e;
  return {
    ...a,
    soundId: n,
    guildId: t,
    emojiId: i,
    emojiName: r,
    userId: s,
    available: null == o || o
  }
}

function f(e) {
  let {
    soundId: t,
    guildId: n,
    emojiId: i,
    emojiName: r,
    userId: s,
    ...o
  } = e;
  return {
    ...o,
    sound_id: t,
    guild_id: n,
    emoji_id: i,
    emoji_name: r,
    user_id: s
  }
}
n.d(t, {
  H$: function() {
    return o
  },
  MW: function() {
    return s
  },
  Pb: function() {
    return i
  },
  QL: function() {
    return f
  },
  YQ: function() {
    return u
  },
  bg: function() {
    return a
  },
  jy: function() {
    return r
  },
  o3: function() {
    return S
  },
  vB: function() {
    return l
  }
}), (_ = i || (i = {}))[_.PLAY = 0] = "PLAY", _[_.ADD = 1] = "ADD", (d = r || (r = {})).ENTRY = "entry_sound", d.EXIT = "exit_sound", d.DEFAULT = "default", (c = s || (s = {})).ADDED = "added", c.UPDATED = "updated", c.REMOVED = "removed", (E = o || (o = {})).DEFAULT = "default", E.CUSTOM = "custom", (I = a || (a = {}))[I.FAVORITES = 0] = "FAVORITES", I[I.RECENTLY_HEARD = 1] = "RECENTLY_HEARD", I[I.FREQUENTLY_USED = 2] = "FREQUENTLY_USED", I[I.GUILD = 3] = "GUILD", I[I.DEFAULTS = 4] = "DEFAULTS", I[I.SEARCH = 5] = "SEARCH", (T = l || (l = {}))[T.SOUND = 0] = "SOUND", T[T.ADD_SOUND = 1] = "ADD_SOUND", (h = u || (u = {}))[h.GIFT_CODE = 0] = "GIFT_CODE", h[h.SOUNDBOARD = 1] = "SOUNDBOARD", h[h.JOINED_VOICE_CHANNEL = 2] = "JOINED_VOICE_CHANNEL"