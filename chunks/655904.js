"use strict";
n.d(t, {
  E: function() {
    return c
  }
});
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(692547),
  _ = n(855616);
(i = r || (r = {})).XSMALL = "xsmall", i.SMALL = "small", i.LARGE = "large";
let d = "indeterminate";

function c(e) {
  let t, {
      className: n,
      percent: i,
      size: r = "small",
      foregroundColor: a = u.Z.unsafe_rawColors.BRAND_500.css,
      backgroundColor: c = "var(--background-modifier-active)",
      foregroundGradientColor: E,
      animate: I = !0
    } = e,
    T = null != i ? i : 0;
  return t = null != E ? {
    background: "linear-gradient(to right, ".concat(E[0], ", ").concat(E[1], ")")
  } : {
    backgroundColor: a
  }, (0, s.jsx)("div", {
    className: l()(n, _.progress, _[r]),
    style: {
      backgroundColor: c
    },
    children: T !== d && "number" == typeof T ? (0, s.jsx)("div", {
      className: l()(_.progressBar, _[r], {
        [_.animating]: I
      }),
      style: {
        transform: "translate3d(".concat(Math.min(Math.max(0, T), 100) - 100, "%, 0, 0)"),
        ...t
      }
    }) : (0, s.jsxs)(o.Fragment, {
      children: [(0, s.jsx)("div", {
        className: l()(_.indeterminateBar1, _[r], {
          [_.animating]: I
        }),
        style: t
      }), (0, s.jsx)("div", {
        className: l()(_.indeterminateBar2, _[r], {
          [_.animating]: I
        }),
        style: t
      })]
    })
  })
}
c.Sizes = r, c.INDETERMINATE = d