"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(887024),
  o = n(675654);
t.Z = function(e) {
  let {
    confettiTarget: t,
    confettiCanvas: n,
    confettiVelocityMultiplier: a,
    sprites: l,
    colors: u
  } = e, [_, d] = r.useState(null), c = (0, s.uR)(n, _), [E, I] = r.useState(!1);
  return r.useEffect(() => {
    let e = Array(10).fill(0);
    return null != t && c.isReady && !E && (e = e.map((n, i) => setTimeout(() => {
      var n, r;
      i === e.length - 1 && I(!0), c.createMultipleConfetti((n = t.getBoundingClientRect(), r = null != (r = a) ? r : 1, {
        ...o.We,
        position: {
          type: "static-random",
          minValue: {
            x: n.x,
            y: n.y
          },
          maxValue: {
            x: n.x + n.width,
            y: n.y + n.height / 2
          }
        },
        velocity: {
          type: "static-random",
          minValue: {
            x: -100 * r,
            y: -50 * r
          },
          maxValue: {
            x: 100 * r,
            y: -300 * r
          }
        },
        dragCoefficient: {
          type: "static",
          value: 1e-4
        }
      }), 50)
    }, 100 * i))), () => {
      for (let t of e) clearTimeout(t)
    }
  }, [c, t, E, a]), (0, i.jsx)(s.Ji, {
    ref: d,
    sprites: null != l ? l : o.CA,
    colors: null != u ? u : o.Br,
    spriteWidth: o.Ko,
    spriteHeight: o.Ko
  })
}