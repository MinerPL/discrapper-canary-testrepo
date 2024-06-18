"use strict";
var i, r = n(442837),
  s = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = !1,
  l = !1;
class u extends(i = r.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (a = e)
  }
  isMuted() {
    return a
  }
  shouldPlay() {
    return l
  }
  getUserAgnosticState() {
    return a
  }
}
o(u, "displayName", "StageMusicStore"), o(u, "persistKey", "StageMusicStore"), t.Z = new u(s.Z, {
  STAGE_MUSIC_MUTE: function(e) {
    let {
      muted: t
    } = e;
    a = t, l = !1
  },
  STAGE_MUSIC_PLAY: function(e) {
    let {
      play: t
    } = e;
    l = t
  },
  VOICE_CHANNEL_SELECT: function() {
    l = !1
  }
})