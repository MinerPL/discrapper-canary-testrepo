"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var n = s("37983");
s("884691");
var a = s("414456"),
  r = s.n(a),
  o = s("77078"),
  i = s("968246");

function u(e) {
  let {
    tips: t,
    className: s,
    headerText: a
  } = e;
  return (0, n.jsxs)("div", {
    className: r(i.tipsSection, s),
    children: [(0, n.jsx)("div", {
      className: i.tipsHeader,
      children: (0, n.jsx)(o.Heading, {
        variant: "heading-lg/bold",
        className: i.headerText,
        children: a
      })
    }), (0, n.jsx)("ul", {
      className: i.tipsList,
      children: t.map((e, t) => (0, n.jsxs)("li", {
        className: i.tipRow,
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: i.tipNumber,
          children: t + 1
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: e
        })]
      }, "safety-tips-".concat(t)))
    })]
  })
}