"use strict";
n.d(t, {
  C7: function() {
    return S
  },
  Hw: function() {
    return s
  },
  M5: function() {
    return _
  },
  Ps: function() {
    return E
  },
  SD: function() {
    return I
  },
  ai: function() {
    return c
  },
  c8: function() {
    return f
  },
  kG: function() {
    return o
  },
  lS: function() {
    return d
  }
});
var i, r, s, o, a = n(726542),
  l = n(358085),
  u = n(981631);
let _ = "spotify",
  d = "spotify:",
  c = a.Z.get(u.ABu.SPOTIFY).name;

function E(e) {
  return null != e && e.startsWith(d)
}(i = s || (s = {})).TRACK = "track", i.ARTIST = "artist", i.ALBUM = "album", i.PLAYLIST = "playlist", i.EPISODE = "episode", i.SHOW = "show", (r = o || (o = {})).USER_ACTIVITY_PLAY = "user_activity_play", r.USER_ACTIVITY_SYNC = "user_activity_sync", r.EMBED_SYNC = "embed_sync";
let I = ["open.spotify.com", "www.spotify.com"],
  T = "https://api.spotify.com/v1",
  h = e => "?utm_source=discord&utm_medium=".concat(e),
  S = Object.freeze({
    PROFILE: "".concat(T, "/me"),
    NOTIFICATIONS_PLAYER: "".concat(T, "/me/notifications/player"),
    PLAYER: "".concat(T, "/me/player"),
    PLAYER_DEVICES: "".concat(T, "/me/player/devices"),
    PLAYER_PLAY: "".concat(T, "/me/player/play"),
    PLAYER_PAUSE: "".concat(T, "/me/player/pause"),
    PLAYER_REPEAT: "".concat(T, "/me/player/repeat"),
    WEB_OPEN: function(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
      return "https://open.spotify.com/".concat(encodeURIComponent(e), "/").concat(encodeURIComponent(t)).concat(h(n))
    },
    EMBED: function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
      return "https://open.spotify.com/embed".concat(e).concat(h(t))
    },
    PLAYER_OPEN: function(e, t) {
      let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
      return "".concat(_, ":").concat(encodeURIComponent(e), ":").concat(encodeURIComponent(t)).concat(n ? h(i) : "")
    },
    PREMIUM_SITE: "https://www.spotify.com/premium/".concat(h("desktop")),
    INSTALL_ATTRIBUTION: e => "https://app.adjust.com/bdyga9?campaign=".concat(e),
    APP_STORE: (0, l.isAndroid)() ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
    IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
  });

function f(e) {
  if ("string" != typeof e) return null;
  switch (e) {
    case "track":
      return "track";
    case "artist":
      return "artist";
    case "album":
      return "album";
    case "playlist":
      return "playlist";
    case "episode":
      return "episode";
    case "show":
      return "show";
    default:
      return null
  }
}