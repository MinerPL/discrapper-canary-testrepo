var r, i = n(442837),
  a = n(570140);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let o = !1,
  l = !1;
class u extends(r = i.ZP.DeviceSettingsStore) {
  initialize(e) {
null != e && (o = e);
  }
  isMuted() {
return o;
  }
  shouldPlay() {
return l;
  }
  getUserAgnosticState() {
return o;
  }
}
s(u, 'displayName', 'StageMusicStore'), s(u, 'persistKey', 'StageMusicStore'), t.Z = new u(a.Z, {
  STAGE_MUSIC_MUTE: function(e) {
let {
  muted: t
} = e;
o = t, l = !1;
  },
  STAGE_MUSIC_PLAY: function(e) {
let {
  play: t
} = e;
l = t;
  },
  VOICE_CHANNEL_SELECT: function() {
l = !1;
  }
});