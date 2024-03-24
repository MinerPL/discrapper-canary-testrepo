"use strict";
s.r(e), s.d(e, {
  default: function() {
    return c
  }
}), s("222007");
var l = s("37983"),
  i = s("884691"),
  a = s("516555"),
  n = s("526887"),
  r = s("172858");
let o = {
    xMin: -40,
    xMax: 40,
    yMin: -40,
    yMax: -70
  },
  u = (t, e, s) => null == s ? e : t * s / 100,
  d = i.memo(function(t) {
    let {
      confettiTarget: e,
      colors: s,
      emojiURL: d,
      numBursts: c,
      particlesPerBurst: f,
      offsetXPercentageMax: p,
      offsetXPercentageMin: h,
      offsetYPercentageMax: m,
      offsetYPercentageMin: C,
      customConfettiCanvas: S,
      speedValues: g = o,
      dragCoefficientValue: I = .001,
      onAnimationEnd: T
    } = t, [E, _] = i.useState(null), {
      confettiCanvas: v
    } = i.useContext(n.ConfettiCannonContext), M = (0, a.useConfettiCannon)(null != S ? S : v, E), [O, x] = i.useState(!1);
    i.useEffect(() => {
      O && (null == T || T())
    });
    let N = i.useMemo(() => {
      if (null != d) return [{
        src: d,
        colorize: !1
      }]
    }, [d]);
    return i.useEffect(() => {
      if (null == e) return;
      let t = Array(null != c ? c : 4).fill(0);
      return t = t.map((s, l) => setTimeout(() => {
        M.createMultipleConfetti(function(t, e, s, l, i) {
          let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
            n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : .001,
            d = u(t.width, 100, s),
            c = u(t.height, 75, i),
            f = u(t.width, 350, e),
            p = u(t.height, 75, l),
            {
              xMin: h,
              xMax: m,
              yMin: C,
              yMax: S
            } = a;
          return {
            ...r.COMMON_CONFETTI_BASE_CONFIG,
            position: {
              type: "static-random",
              minValue: {
                x: t.left + d,
                y: t.top + c
              },
              maxValue: {
                x: t.left + f,
                y: t.top + p
              }
            },
            velocity: {
              type: "static-random",
              minValue: {
                x: h,
                y: C
              },
              maxValue: {
                x: m,
                y: S
              }
            },
            size: {
              type: "static-random",
              minValue: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
              maxValue: r.COMMON_CONFETTI_MAX_SPRITE_SIZE
            },
            dragCoefficient: {
              type: "static",
              value: n
            }
          }
        }(e.getBoundingClientRect(), p, h, m, C, g, I), null != f ? f : 50), l === t.length - 1 && null != T && x(!0)
      }, 60 * l)), () => {
        for (let e of t) clearTimeout(e)
      }
    }, [M, e, c, f, p, h, m, C, g, I, T]), (0, l.jsx)(a.SpriteCanvas, {
      ref: _,
      sprites: null != N ? N : r.COMMON_CONFETTI_SPRITES,
      colors: null != s ? s : r.COMMON_CONFETTI_COLORS,
      spriteWidth: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: r.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })
  });
var c = d