"use strict";
let i;
var r, s = n(442837),
  o = n(570140),
  a = n(353368);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends(r = s.ZP.PersistedStore) {
  initialize(e) {
    var t;
    i = null !== (t = null == e ? void 0 : e.animationType) && void 0 !== t ? t : a.q.PREMIUM
  }
  getState() {
    return {
      animationType: i
    }
  }
}
l(u, "displayName", "VoiceChannelEffectsPersistedStore"), l(u, "persistKey", "VoiceChannelEffectsPersistedStore"), t.Z = new u(o.Z, {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
    i = i === a.q.BASIC ? a.q.PREMIUM : a.q.BASIC
  }
})