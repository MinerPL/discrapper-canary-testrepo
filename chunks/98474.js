"use strict";
i.r(t), i.d(t, {
  default: function() {
    return T
  }
}), i("47120");
var n = i("735250"),
  a = i("470079"),
  s = i("911765"),
  l = i("718017"),
  o = i("748780"),
  r = i("596454"),
  u = i("745510"),
  d = i("912893"),
  c = i("153850"),
  h = i("768581"),
  f = i("176354"),
  m = i("675654"),
  p = i("386537");
let g = [];

function T(e) {
  let {
    messageId: t,
    emoji: i,
    startPosition: T,
    targetPosition: v
  } = e, [S, E] = a.useState(0), [R, I] = a.useState(0), [N, C] = a.useState(null), {
    confettiCanvas: _
  } = a.useContext(u.ConfettiCannonContext), x = (0, s.useConfettiCannon)(_, N), O = a.useMemo(() => [{
    src: null == i.id ? f.default.getURL(i.name) : h.default.getEmojiURL({
      id: i.id,
      animated: !1,
      size: 22
    }),
    colorize: !1
  }], [i.name, i.id]), j = v.x - v.width / 2 * .5, A = v.y - v.height / 2 * .5, M = (0, l.useSpring)({
    from: {
      y: T.y
    },
    to: {
      y: A
    },
    config: {
      duration: 450,
      easing: o.default.Easing.in(o.default.Easing.exp)
    },
    onChange: e => {
      let {
        y: t
      } = e;
      I(t)
    }
  }), b = (0, l.useSpring)({
    from: {
      x: T.x,
      scale: 1,
      opacity: 1
    },
    to: {
      x: j,
      scale: .5,
      opacity: .4
    },
    config: {
      duration: 450,
      easing: o.default.Easing.in(o.default.Easing.ease)
    },
    onRest: () => {
      (0, d.clearReactionPickerAnimation)(t, i.name, i.id)
    },
    onChange: e => {
      let {
        x: t
      } = e;
      E(t)
    }
  });
  return a.useEffect(() => {
    S > 0 && R > 0 && x.createConfetti({
      ...m.COMMON_CONFETTI_BASE_CONFIG,
      position: {
        type: "static",
        value: {
          x: S,
          y: R
        }
      }
    })
  }, [x, S, R]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.SpriteCanvas, {
      ref: C,
      sprites: O,
      colors: g,
      spriteWidth: m.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: m.COMMON_CONFETTI_MAX_SPRITE_SIZE
    }), (0, n.jsx)(c.default, {
      children: (0, n.jsx)(l.animated.div, {
        style: {
          ...M
        },
        className: p.emojiContainer,
        children: (0, n.jsx)(l.animated.div, {
          style: {
            ...b,
            opacity: b.opacity
          },
          children: (0, n.jsx)(r.default, {
            className: p.emoji,
            emojiId: i.id,
            emojiName: i.name,
            animated: i.animated,
            size: "jumbo"
          })
        })
      })
    })]
  })
}