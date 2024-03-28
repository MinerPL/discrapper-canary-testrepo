"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  r = s("911765");
let i = [s("992134")],
  l = ["#FFFFFF"],
  u = 1e3 / 60,
  o = {
    velocity: {
      type: "static-random",
      minValue: {
        x: 0,
        y: 1
      },
      maxValue: {
        x: 3,
        y: 3
      }
    },
    rotation: {
      type: "linear-random",
      minValue: {
        x: 0,
        y: 0,
        z: 0
      },
      maxValue: {
        x: 0,
        y: 0,
        z: 360
      },
      minAddValue: {
        x: 0,
        y: 0,
        z: -5
      },
      maxAddValue: {
        x: 0,
        y: 0,
        z: 5
      }
    },
    size: {
      type: "static-random",
      minValue: 2,
      maxValue: 6
    },
    dragCoefficient: {
      type: "static",
      value: {
        x: .05,
        y: .05
      }
    },
    opacity: {
      type: "static",
      value: .3
    }
  };

function c(e) {
  let {
    className: t,
    firing: s = !0,
    wind: c = 2
  } = e, [d, C] = n.useState(null), [p, A] = n.useState(null), E = (0, r.useConfettiCannon)(p, d), _ = n.useMemo(() => new r.Environment({
    wind: c
  }), [c]), m = n.useCallback(() => {
    let e = null == p ? void 0 : p.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    E.createConfetti({
      ...o,
      position: {
        type: "static-random",
        minValue: {
          x: -t.width / 2,
          y: -6
        },
        maxValue: {
          x: t.width,
          y: -6
        }
      }
    })
  }, [E, p]);
  return n.useEffect(() => {
    let e = s ? setInterval(m, u) : null;
    return () => clearInterval(e)
  }, [s, m]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.ConfettiCanvas, {
      ref: A,
      className: t,
      environment: _
    }), (0, a.jsx)(r.SpriteCanvas, {
      ref: C,
      colors: l,
      sprites: i,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}