"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("516555"),
  l = s("172858"),
  r = function(e) {
    let {
      confettiTarget: t,
      confettiCanvas: s,
      confettiVelocityMultiplier: r,
      sprites: u,
      colors: o
    } = e, [d, c] = n.useState(null), E = (0, i.useConfettiCannon)(s, d), [f, _] = n.useState(!1);
    return n.useEffect(() => {
      let e = Array(10).fill(0);
      return null != t && E.isReady && !f && (e = e.map((s, a) => setTimeout(() => {
        var s, n;
        a === e.length - 1 && _(!0), E.createMultipleConfetti((s = t.getBoundingClientRect(), n = null != (n = r) ? n : 1, {
          ...l.COMMON_CONFETTI_BASE_CONFIG,
          position: {
            type: "static-random",
            minValue: {
              x: s.x,
              y: s.y
            },
            maxValue: {
              x: s.x + s.width,
              y: s.y + s.height / 2
            }
          },
          velocity: {
            type: "static-random",
            minValue: {
              x: -100 * n,
              y: -50 * n
            },
            maxValue: {
              x: 100 * n,
              y: -300 * n
            }
          },
          dragCoefficient: {
            type: "static",
            value: 1e-4
          }
        }), 50)
      }, 100 * a))), () => {
        for (let t of e) clearTimeout(t)
      }
    }, [E, t, f, r]), (0, a.jsx)(i.SpriteCanvas, {
      ref: c,
      sprites: null != u ? u : l.COMMON_CONFETTI_SPRITES,
      colors: null != o ? o : l.COMMON_CONFETTI_COLORS,
      spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })
  }