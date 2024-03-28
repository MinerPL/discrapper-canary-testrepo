"use strict";
n.r(e), n("47120");
var l = n("735250"),
  i = n("470079"),
  u = n("911765"),
  a = n("745510"),
  o = n("675654");
let r = {
    xMin: -40,
    xMax: 40,
    yMin: -40,
    yMax: -70
  },
  s = (t, e, n) => null == n ? e : t * n / 100,
  C = i.memo(function(t) {
    let {
      confettiTarget: e,
      colors: n,
      emojiURL: C,
      numBursts: _,
      particlesPerBurst: M,
      offsetXPercentageMax: O,
      offsetXPercentageMin: c,
      offsetYPercentageMax: f,
      offsetYPercentageMin: T,
      customConfettiCanvas: p,
      speedValues: E = r,
      dragCoefficientValue: I = .001,
      onAnimationEnd: h
    } = t, [d, m] = i.useState(null), {
      confettiCanvas: N
    } = i.useContext(a.ConfettiCannonContext), S = (0, u.useConfettiCannon)(null != p ? p : N, d), [x, y] = i.useState(!1);
    i.useEffect(() => {
      x && (null == h || h())
    });
    let g = i.useMemo(() => {
      if (null != C) return [{
        src: C,
        colorize: !1
      }]
    }, [C]);
    return i.useEffect(() => {
      if (null == e) return;
      let t = Array(null != _ ? _ : 4).fill(0);
      return t = t.map((n, l) => setTimeout(() => {
        S.createMultipleConfetti(function(t, e, n, l, i) {
          let u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : r,
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : .001,
            C = s(t.width, 100, n),
            _ = s(t.height, 75, i),
            M = s(t.width, 350, e),
            O = s(t.height, 75, l),
            {
              xMin: c,
              xMax: f,
              yMin: T,
              yMax: p
            } = u;
          return {
            ...o.COMMON_CONFETTI_BASE_CONFIG,
            position: {
              type: "static-random",
              minValue: {
                x: t.left + C,
                y: t.top + _
              },
              maxValue: {
                x: t.left + M,
                y: t.top + O
              }
            },
            velocity: {
              type: "static-random",
              minValue: {
                x: c,
                y: T
              },
              maxValue: {
                x: f,
                y: p
              }
            },
            size: {
              type: "static-random",
              minValue: o.COMMON_CONFETTI_MAX_SPRITE_SIZE,
              maxValue: o.COMMON_CONFETTI_MAX_SPRITE_SIZE
            },
            dragCoefficient: {
              type: "static",
              value: a
            }
          }
        }(e.getBoundingClientRect(), O, c, f, T, E, I), null != M ? M : 50), l === t.length - 1 && null != h && y(!0)
      }, 60 * l)), () => {
        for (let e of t) clearTimeout(e)
      }
    }, [S, e, _, M, O, c, f, T, E, I, h]), (0, l.jsx)(u.SpriteCanvas, {
      ref: m,
      sprites: null != g ? g : o.COMMON_CONFETTI_SPRITES,
      colors: null != n ? n : o.COMMON_CONFETTI_COLORS,
      spriteWidth: o.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: o.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })
  });
e.default = C