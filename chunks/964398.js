"use strict";
n.r(t), n("47120"), n("411104");
var l = n("735250"),
  a = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("481060"),
  o = n("65205"),
  u = n("689938"),
  d = n("12954");

function c(e) {
  let {
    className: t
  } = e;
  return (0, l.jsxs)("svg", {
    className: t,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    children: [(0, l.jsx)("g", {
      filter: "url(#a)",
      children: (0, l.jsx)("path", {
        d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
        fill: "currentColor"
      })
    }), (0, l.jsx)("defs", {
      children: (0, l.jsxs)("filter", {
        id: "a",
        x: "0",
        y: "0",
        width: "48",
        height: "48",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [(0, l.jsx)("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), (0, l.jsx)("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), (0, l.jsx)("feOffset", {
          dy: "8"
        }), (0, l.jsx)("feGaussianBlur", {
          stdDeviation: "8"
        }), (0, l.jsx)("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
        }), (0, l.jsx)("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_605_72103"
        }), (0, l.jsx)("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_605_72103",
          result: "shape"
        })]
      })
    })]
  })
}
let f = [{
    x: .5,
    y: .05
  }, {
    x: .95,
    y: .2
  }, {
    x: 1,
    y: .5
  }, {
    x: .95,
    y: .8
  }, {
    x: .5,
    y: .95
  }, {
    x: .05,
    y: .8
  }, {
    x: 0,
    y: .5
  }, {
    x: .05,
    y: .2
  }],
  h = f.length;

function m(e, t, n) {
  let l = e * t;
  return e > .5 ? l - n : e < .5 ? l : l - n / 2
}
let C = (e, t) => {
  let n = Math.abs(t.x),
    l = 180 / Math.PI * Math.atan2(Math.abs(t.y), n),
    a = e / 2 - 28.8;
  return {
    x: Math.max(a * Math.cos(2 * Math.PI * l / 360), 0),
    y: Math.max(a * Math.sin(2 * Math.PI * l / 360), 0)
  }
};
t.default = a.memo(function(e) {
  let {
    wheelWidth: t,
    wheelHeight: n,
    itemWidth: p,
    itemHeight: g,
    showDeadZoneIndicator: E,
    activeItem: _,
    onItemSelect: S,
    onItemAction: I,
    interactive: N = !0,
    children: T
  } = e, A = a.useRef(null), L = a.useRef([]), v = a.useRef(!1), x = a.useRef(null), [R, M] = a.useState(0), [y, O] = a.useState({
    x: 0,
    y: 0
  }), D = Math.abs(y.x) + Math.abs(y.y) > 0, b = a.useMemo(() => i().chunk(T, h), [T]), j = a.useCallback((e, t) => {
    null == L.current[R] ? L.current[R] = [] : L.current[R][t] = e
  }, [R]), P = a.useCallback((e, t) => {
    x.current = t, S(h * e + t)
  }, [S]), G = a.useCallback(() => {
    x.current = null, S(null)
  }, [S]), U = a.useCallback(e => {
    G(), v.current = e
  }, [G]), w = a.useCallback((e, t, n) => {
    if (v.current) {
      O({
        x: 0,
        y: 0
      });
      return
    }
    let l = {
        x: e.x - t.x,
        y: e.y - t.y
      },
      a = l.x < 0,
      s = l.y < 0,
      i = C(n, l),
      r = a ? Math.max(l.x, -i.x) : Math.min(l.x, i.x);
    O({
      x: r / 2,
      y: (s ? Math.max(l.y, -i.y) : Math.min(l.y, i.y)) / 2
    })
  }, []), B = a.useCallback(e => {
    null != x.current && (e.preventDefault(), e.stopPropagation(), null == I || I(h * R + x.current))
  }, [I, R]), F = a.useMemo(() => (0, s.throttle)(e => {
    if (null == A.current) return;
    let l = A.current.getBoundingClientRect(),
      a = l.left + l.width / 2,
      s = {
        x: a,
        y: l.top + l.height / 2
      },
      i = {
        x: e.clientX,
        y: e.clientY
      };
    if (w(i, s, Math.max(t, n)), v.current) {
      null != _ && G();
      return
    }
    let r = (0, o.extendLineSegment)(s, i, Math.max(t, n));
    for (let e = 0; e < L.current[R].length; e++) {
      let t = L.current[R][e];
      if (null == t) continue;
      let n = t.getBoundingClientRect();
      if ((0, o.doesLineSegmentIntersectRectangle)(s, r, n)) {
        P(R, e);
        return
      }
    }
    G()
  }, 16), [_, w, G, P, R, n, t]), H = a.useCallback(e => {
    if (!N) return;
    let t = R + (e.deltaY > 0 ? 1 : -1);
    t >= 0 && t < b.length && (null != x.current && (b[t].length > x.current ? P(t, x.current) : G()), M(t))
  }, [N, R, b, P, G]), V = a.useMemo(() => b[R].map((e, a) => {
    let s = f[a];
    if (null == s) throw Error("Too many items supplied ".concat(T.length, " expected max of ").concat(f.length));
    let i = m(s.x, t, p),
      r = m(s.y, n, g);
    return (0, l.jsx)("div", {
      ref: e => j(e, a),
      className: d.chatWheelItem,
      style: {
        left: i,
        top: r,
        width: p,
        height: g
      },
      children: e
    }, a)
  }), [b, R, t, p, n, g, T.length, j]);
  return (0, l.jsx)(r.Clickable, {
    className: d.chatWheelMouseInput,
    onMouseMove: F,
    onWheel: H,
    onClick: B,
    children: (0, l.jsxs)("div", {
      ref: A,
      className: d.chatWheel,
      style: {
        width: t,
        height: n
      },
      children: [(0, l.jsxs)("svg", {
        className: d.chatWheelBackground,
        viewBox: "0 0 288 288",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, l.jsxs)("filter", {
          id: "soundboard-wheel-background-shadow",
          x: "0",
          y: "0",
          width: "288",
          height: "288",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [(0, l.jsx)("feFlood", {
            floodOpacity: "0",
            result: "BackgroundImageFix"
          }), (0, l.jsx)("feColorMatrix", {
            in: "SourceAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha"
          }), (0, l.jsx)("feOffset", {
            dy: "8"
          }), (0, l.jsx)("feGaussianBlur", {
            stdDeviation: "8"
          }), (0, l.jsx)("feColorMatrix", {
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          }), (0, l.jsx)("feBlend", {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_489_60382"
          }), (0, l.jsx)("feBlend", {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_489_60382",
            result: "shape"
          })]
        }), (0, l.jsxs)("g", {
          filter: "url(#soundboard-wheel-background-shadow)",
          children: [(0, l.jsx)("circle", {
            className: d.chatWheelBackground,
            cx: "144",
            cy: "144",
            r: "103.68",
            strokeWidth: "40.32"
          }), E && (0, l.jsx)("circle", {
            className: d.chatWheelDeadZone,
            onMouseEnter: () => U(!0),
            onMouseLeave: () => U(!1),
            cx: 144,
            cy: 144,
            r: 28.8
          }), D && (0, l.jsx)("circle", {
            className: d.chatWheelCenter,
            cx: 144 + y.x,
            cy: 144 + y.y,
            r: 28.8
          })]
        }), E && (0, l.jsx)("circle", {
          className: d.chatWheelDeadZone,
          onMouseEnter: () => U(!0),
          onMouseLeave: () => U(!1),
          cx: 144,
          cy: 144,
          r: 28.8,
          stroke: "none"
        })]
      }), (0, l.jsxs)("div", {
        className: d.innerContent,
        children: [E && (0, l.jsx)(c, {
          className: d.chatWheelDeadZoneIcon
        }), N && b.length > 1 ? (0, l.jsx)("div", {
          className: d.paginationHint,
          children: u.default.Messages.CHAT_WHEEL_PAGINATION_HINT
        }) : null]
      }), V]
    })
  })
})