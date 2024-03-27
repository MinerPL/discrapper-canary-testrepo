"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("37983"),
  i = n("884691"),
  l = n("516555");
let r = [n("315147")],
  s = ["#FFFFFF"],
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

function d(e) {
  let {
    className: t,
    firing: n = !0,
    wind: d = 2
  } = e, [h, c] = i.useState(null), [f, m] = i.useState(null), p = (0, l.useConfettiCannon)(f, h), S = i.useMemo(() => new l.Environment({
    wind: d
  }), [d]), b = i.useCallback(() => {
    let e = null == f ? void 0 : f.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    p.createConfetti({
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
  }, [p, f]);
  return i.useEffect(() => {
    let e = n ? setInterval(b, u) : null;
    return () => clearInterval(e)
  }, [n, b]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.ConfettiCanvas, {
      ref: m,
      className: t,
      environment: S
    }), (0, a.jsx)(l.SpriteCanvas, {
      ref: c,
      colors: s,
      sprites: r,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}