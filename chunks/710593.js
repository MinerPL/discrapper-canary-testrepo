"use strict";
n.d(t, {
  M: function() {
    return _
  },
  c: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(714338),
  a = n(583543);

function l(e) {
  let {
    direction: t = "up"
  } = e;
  return (0, i.jsx)("svg", {
    width: "10",
    height: "10",
    xmlns: "http://www.w3.org/2000/svg",
    className: s()(a.bindArrow, a[t]),
    children: (0, i.jsx)("g", {
      fill: "#FFFFFF",
      children: (0, i.jsx)("polygon", {
        transform: "translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ",
        points: "4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10"
      })
    })
  })
}
let u = {
  mod: () => o.Z.modKey,
  alt: () => o.Z.altKey,
  up: () => (0, i.jsx)(l, {
    direction: "up"
  }),
  down: () => (0, i.jsx)(l, {
    direction: "down"
  }),
  left: () => (0, i.jsx)(l, {
    direction: "left"
  }),
  right: () => (0, i.jsx)(l, {
    direction: "right"
  }),
  pageup: () => "page up",
  pagedown: () => "page down",
  "any-character": () => "any key",
  plus: () => "+",
  return: () => o.Z.returnKey
};

function _(e) {
  let {
    shortcut: t,
    dim: n = !1,
    className: r,
    keyClassName: o
  } = e, l = Array.isArray(t) ? t : t.split("+");
  return (0, i.jsx)("div", {
    className: s()(a.combo, r, {
      [a.dim]: n
    }),
    children: l.map(e => null != u[e] ? u[e]() : e).map((e, t) => (0, i.jsx)("span", {
      className: s()(a.key, o),
      children: e
    }, t))
  })
}