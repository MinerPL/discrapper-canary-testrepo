"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("146606"),
  u = n("446674"),
  o = n("430568"),
  d = n("206230"),
  c = n("718517"),
  f = n("568088"),
  h = n("86807");
let m = 6 * c.default.Millis.SECOND,
  p = 2 * c.default.Millis.SECOND,
  E = 2 * c.default.Millis.SECOND,
  g = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function S(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: s
  } = e, {
    emoji: c,
    sentAt: S
  } = n, C = (0, u.useStateFromStores)([d.default], () => d.default.useReducedMotion), [_, I] = l.useState(!0), T = !C, v = (0, r.useTransition)(_, {
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
    immediate: C,
    onRest: (e, t) => {
      let {
        phase: n
      } = t;
      "leave" === n && s()
    }
  });
  return (l.useEffect(() => {
    let e;
    return Date.now() - S >= E ? (0, f.clearVoiceChannelEffectForUser)(t) : e = setTimeout(() => {
      I(!1), T && (0, f.clearVoiceChannelEffectForUser)(t)
    }, T ? p : m), () => {
      null != e && clearTimeout(e)
    }
  }, [S, t, T]), T) ? null : v((e, t) => {
    var n;
    let {
      rotate: l
    } = e;
    return t && (0, a.jsx)(r.animated.div, {
      className: h.voiceChannelEffectEmojiContainer,
      style: {
        transform: l.to(g)
      },
      children: (0, a.jsx)(o.default, {
        className: i(h.voiceChannelEffectEmoji),
        emojiId: c.id,
        emojiName: c.name,
        animated: null !== (n = c.animated) && void 0 !== n && n
      })
    })
  })
}