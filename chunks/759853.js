"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("887024"),
  i = n("920906"),
  r = n("442837"),
  o = n("607070"),
  u = n("569379"),
  d = n("675654"),
  c = n("977524"),
  f = n("197857");
let E = ["#51BC9D"];
t.default = e => {
  let {
    quest: t,
    progressBarRef: n
  } = e, {
    completionSpring: h,
    startCompletionAnimation: _
  } = (0, u.useQuestBarCompletionAnimation)(), C = s.useRef(!1), m = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion), [S, p] = s.useState(null), [g, I] = s.useState(null), T = s.useRef(new l.Environment({
    gravity: 0,
    wind: 0
  })), A = (0, l.useConfettiCannon)(S, g), N = s.useCallback(() => {
    let e = n.current;
    if (null != e && A.isReady) {
      var t, a, s, l;
      A.createMultipleConfetti((t = e.offsetLeft, a = e.offsetTop, s = e.clientHeight, l = e.clientWidth, {
        ...d.COMMON_CONFETTI_BASE_CONFIG,
        position: {
          type: "static-random",
          minValue: {
            x: t + 12,
            y: a + 12
          },
          maxValue: {
            x: t + 12 + s,
            y: a + 12 + l
          }
        },
        velocity: {
          type: "static-random",
          minValue: {
            x: -30,
            y: -30
          },
          maxValue: {
            x: 30,
            y: 30
          }
        },
        dragCoefficient: {
          type: "static",
          value: 1e-4
        },
        size: {
          type: "static-random",
          minValue: 2,
          maxValue: 3
        }
      }), 50)
    }
  }, [n, A]);
  return (s.useEffect(() => {
    var e;
    let n = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
    !C.current && n && (_(), N()), C.current = n
  }, [t, N, _]), m) ? null : (0, a.jsxs)("div", {
    className: c.wrapper,
    children: [(0, a.jsx)(i.animated.div, {
      className: c.background,
      style: {
        opacity: h
      }
    }), (0, a.jsx)(l.ConfettiCanvas, {
      ref: p,
      className: c.confetti,
      environment: T.current
    }), (0, a.jsx)(l.SpriteCanvas, {
      ref: I,
      sprites: [f],
      colors: E,
      spriteWidth: d.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: d.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })]
  })
}