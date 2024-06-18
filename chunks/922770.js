"use strict";
n.d(t, {
  $: function() {
    return c
  },
  R: function() {
    return r
  }
});
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(186325),
  _ = n(689938),
  d = n(879967);
(i = r || (r = {})).WANDERING_CUBES = "wanderingCubes", i.CHASING_DOTS = "chasingDots", i.PULSING_ELLIPSIS = "pulsingEllipsis", i.SPINNING_CIRCLE = "spinningCircle", i.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple", i.LOW_MOTION = "lowMotion";

function c(e) {
  let {
    type: t = "wanderingCubes",
    animated: n = !0,
    className: i,
    itemClassName: r,
    "aria-label": a,
    ...c
  } = e, {
    reducedMotion: E
  } = o.useContext(u.S), I = E.enabled ? function(e) {
    switch (e) {
      case "wanderingCubes":
      case "chasingDots":
        return "lowMotion";
      default:
        return e
    }
  }(t) : t;
  if (a = null != a ? a : _.Z.Messages.LOADING, "spinningCircle" === I || "spinningCircleSimple" === I) return (0, s.jsx)("div", {
    className: l()(d.spinner, d[I], i, {
      [d.stopAnimation]: !n
    }),
    role: "img",
    "aria-label": a,
    ...c,
    children: (0, s.jsx)("div", {
      className: d.spinningCircleInner,
      children: (0, s.jsxs)("svg", {
        className: d.circular,
        viewBox: "25 25 50 50",
        children: ["spinningCircle" === I && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("circle", {
            className: l()(d.path, d.path3, r),
            cx: "50",
            cy: "50",
            r: "20"
          }), (0, s.jsx)("circle", {
            className: l()(d.path, d.path2, r),
            cx: "50",
            cy: "50",
            r: "20"
          })]
        }), (0, s.jsx)("circle", {
          className: l()(d.path, r),
          cx: "50",
          cy: "50",
          r: "20"
        })]
      })
    })
  });
  let T = l()(d.item, r);
  return (0, s.jsx)("span", {
    className: l()(d.spinner, i, {
      [d.stopAnimation]: !n
    }),
    role: "img",
    "aria-label": a,
    ...c,
    children: (0, s.jsxs)("span", {
      className: l()(d.inner, d[I]),
      children: [(0, s.jsx)("span", {
        className: T
      }), (0, s.jsx)("span", {
        className: T
      }), "pulsingEllipsis" === I || "lowMotion" === I ? (0, s.jsx)("span", {
        className: T
      }) : null]
    })
  })
}
c.Type = r