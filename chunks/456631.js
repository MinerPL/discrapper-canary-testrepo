"use strict";
let i;
n.d(t, {
  H: function() {
    return f
  }
}), n(47120), n(733860);
var r, s, o, a, l = n(392711),
  u = n(442837),
  _ = n(780384),
  d = n(570140),
  c = n(70956),
  E = n(963838),
  I = n(354459);
let T = [],
  h = {},
  S = [],
  f = e => {
    null != e && d.Z.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  N = [],
  A = 10 * c.Z.Millis.SECOND,
  m = (0, l.debounce)(() => {
    let e = (0, E.cX)(S);
    _.uv.announce(e, "polite"), S = []
  }, 500);
class O extends(r = u.ZP.Store) {
  get recentlyUsedEmojis() {
    return T
  }
  get isOnCooldown() {
    return null != i && new Date < i
  }
  get effectCooldownEndTime() {
    return i
  }
  getEffectForUserId(e) {
    return h[e]
  }
}
a = "VoiceChannelEffectsStore", (o = "displayName") in(s = O) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new O(d.Z, {
  VOICE_CHANNEL_EFFECT_CLEAR: e => {
    let {
      userId: t
    } = e;
    null != h[t] && delete h[t]
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: e => {
    let {
      emoji: t
    } = e;
    if (null != t) T.unshift(t), (T = (0, l.uniqBy)(T, "name")).length > I.e5 + 1 && T.pop()
  },
  VOICE_CHANNEL_EFFECT_SEND: e => {
    let {
      emoji: t,
      userId: n,
      animationType: i
    } = e;
    null != t && null != i && (h[n] = {
      emoji: t,
      sentAt: Date.now(),
      animationType: i
    }, S = [...S, {
      emojiName: t.name,
      userId: n
    }], m())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((N = [e, ...N].slice(0, 20)).length >= 20) {
      let t = N[N.length - 1],
        n = e.getTime() - t.getTime();
      n < A && (i = new Date(e.getTime() + A - n))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: t
    } = e;
    i = new Date(Date.now() + t)
  }
})