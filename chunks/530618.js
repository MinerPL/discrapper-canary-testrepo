"use strict";
r.r(t), r("47120");
var a = r("735250"),
  o = r("470079"),
  n = r("911765"),
  l = r("675654");
t.default = function(e) {
  let {
    confettiTarget: t,
    confettiCanvas: r,
    confettiVelocityMultiplier: s,
    sprites: i,
    colors: c
  } = e, [u, d] = o.useState(null), f = (0, n.useConfettiCannon)(r, u), [g, C] = o.useState(!1);
  return o.useEffect(() => {
    let e = Array(10).fill(0);
    return null != t && f.isReady && !g && (e = e.map((r, a) => setTimeout(() => {
      var r, o;
      a === e.length - 1 && C(!0), f.createMultipleConfetti((r = t.getBoundingClientRect(), o = null != (o = s) ? o : 1, {
        ...l.COMMON_CONFETTI_BASE_CONFIG,
        position: {
          type: "static-random",
          minValue: {
            x: r.x,
            y: r.y
          },
          maxValue: {
            x: r.x + r.width,
            y: r.y + r.height / 2
          }
        },
        velocity: {
          type: "static-random",
          minValue: {
            x: -100 * o,
            y: -50 * o
          },
          maxValue: {
            x: 100 * o,
            y: -300 * o
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
  }, [f, t, g, s]), (0, a.jsx)(n.SpriteCanvas, {
    ref: d,
    sprites: null != i ? i : l.COMMON_CONFETTI_SPRITES,
    colors: null != c ? c : l.COMMON_CONFETTI_COLORS,
    spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
    spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
  })
}