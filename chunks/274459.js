"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("718017"),
  o = n("442837"),
  u = n("596454"),
  d = n("607070"),
  c = n("70956"),
  f = n("456631"),
  h = n("456084");
let m = 6 * c.default.Millis.SECOND,
  p = 2 * c.default.Millis.SECOND,
  E = 2 * c.default.Millis.SECOND,
  C = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function g(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: s
  } = e, {
    emoji: c,
    sentAt: g
  } = n, S = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), [_, T] = l.useState(!0), I = !S, A = (0, r.useTransition)(_, {
    from: {
      rotate: -120
    },
    enter: {
      rotate: 0
    },
    leave: {
      rotate: -120
    },
    config: r.config.default,
    immediate: S,
    onRest: (e, t) => {
      let {
        phase: n
      } = t;
      "leave" === n && s()
    }
  });
  return (l.useEffect(() => {
    let e;
    return Date.now() - g >= E ? (0, f.clearVoiceChannelEffectForUser)(t) : e = setTimeout(() => {
      T(!1), I && (0, f.clearVoiceChannelEffectForUser)(t)
    }, I ? p : m), () => {
      null != e && clearTimeout(e)
    }
  }, [g, t, I]), I) ? null : A((e, t) => {
    var n;
    let {
      rotate: l
    } = e;
    return t && (0, a.jsx)(r.animated.div, {
      className: h.voiceChannelEffectEmojiContainer,
      style: {
        transform: l.to(C)
      },
      children: (0, a.jsx)(u.default, {
        className: i()(h.voiceChannelEffectEmoji),
        emojiId: c.id,
        emojiName: c.name,
        animated: null !== (n = c.animated) && void 0 !== n && n
      })
    })
  })
}