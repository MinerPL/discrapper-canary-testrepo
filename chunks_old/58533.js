"use strict";
i.r(t), i.d(t, {
  default: function() {
    return R
  }
}), i("222007");
var n = i("37983"),
  a = i("884691"),
  l = i("516555"),
  o = i("146606"),
  s = i("458960"),
  r = i("430568"),
  u = i("526887"),
  c = i("140708"),
  d = i("983782"),
  h = i("315102"),
  m = i("402671"),
  f = i("172858"),
  p = i("62688");
let T = [];

function R(e) {
  let {
    messageId: t,
    emoji: i,
    startPosition: R,
    targetPosition: g
  } = e, [E, I] = a.useState(0), [N, S] = a.useState(0), [_, v] = a.useState(null), {
    confettiCanvas: C
  } = a.useContext(u.ConfettiCannonContext), j = (0, l.useConfettiCannon)(C, _), O = a.useMemo(() => {
    let e = null == i.id ? m.default.getURL(i.name) : h.default.getEmojiURL({
      id: i.id,
      animated: !1,
      size: 22
    });
    return [{
      src: e,
      colorize: !1
    }]
  }, [i.name, i.id]), A = g.x - g.width / 2 * .5, x = g.y - g.height / 2 * .5, M = (0, o.useSpring)({
    from: {
      y: R.y
    },
    to: {
      y: x
    },
    config: {
      duration: 450,
      easing: s.default.Easing.in(s.default.Easing.exp)
    },
    onChange: e => {
      let {
        y: t
      } = e;
      S(t)
    }
  }), b = (0, o.useSpring)({
    from: {
      x: R.x,
      scale: 1,
      opacity: 1
    },
    to: {
      x: A,
      scale: .5,
      opacity: .4
    },
    config: {
      duration: 450,
      easing: s.default.Easing.in(s.default.Easing.ease)
    },
    onRest: () => {
      (0, c.clearReactionPickerAnimation)(t, i.name, i.id)
    },
    onChange: e => {
      let {
        x: t
      } = e;
      I(t)
    }
  });
  return a.useEffect(() => {
    E > 0 && N > 0 && j.createConfetti({
      ...f.COMMON_CONFETTI_BASE_CONFIG,
      position: {
        type: "static",
        value: {
          x: E,
          y: N
        }
      }
    })
  }, [j, E, N]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.SpriteCanvas, {
      ref: v,
      sprites: O,
      colors: T,
      spriteWidth: f.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: f.COMMON_CONFETTI_MAX_SPRITE_SIZE
    }), (0, n.jsx)(d.default, {
      children: (0, n.jsx)(o.animated.div, {
        style: {
          ...M
        },
        className: p.emojiContainer,
        children: (0, n.jsx)(o.animated.div, {
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