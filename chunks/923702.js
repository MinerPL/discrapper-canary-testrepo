"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
}), a("222007");
var r = a("37983"),
  n = a("884691"),
  o = a("516555"),
  s = a("172858"),
  i = function(e) {
    let {
      confettiTarget: t,
      confettiCanvas: a,
      confettiVelocityMultiplier: i,
      sprites: l,
      colors: c
    } = e, [d, u] = n.useState(null), f = (0, o.useConfettiCannon)(a, d), [C, g] = n.useState(!1);
    return n.useEffect(() => {
      let e = Array(10).fill(0);
      return null != t && f.isReady && !C && (e = e.map((a, r) => setTimeout(() => {
        var a, n;
        r === e.length - 1 && g(!0), f.createMultipleConfetti((a = t.getBoundingClientRect(), n = null != (n = i) ? n : 1, {
          ...s.COMMON_CONFETTI_BASE_CONFIG,
          position: {
            type: "static-random",
            minValue: {
              x: a.x,
              y: a.y
            },
            maxValue: {
              x: a.x + a.width,
              y: a.y + a.height / 2
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
      }, 100 * r))), () => {
        for (let t of e) clearTimeout(t)
      }
    }, [f, t, C, i]), (0, r.jsx)(o.SpriteCanvas, {
      ref: u,
      sprites: null != l ? l : s.COMMON_CONFETTI_SPRITES,
      colors: null != c ? c : s.COMMON_CONFETTI_COLORS,
      spriteWidth: s.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: s.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })
  }