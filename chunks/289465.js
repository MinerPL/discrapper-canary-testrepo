"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("735250");
l("470079");
var a = l("803997"),
  s = l.n(a),
  i = l("481060"),
  r = l("820142");

function o(e) {
  let {
    bar: t,
    children: l,
    className: a,
    inModal: o,
    title: d
  } = e;
  return (0, n.jsxs)(i.Card, {
    editable: !0,
    className: s()(r.card, a, {
      [r.inModal]: o
    }),
    children: [(0, n.jsxs)("div", {
      className: s()(r.cardHeader, {
        [r.inModal]: o
      }),
      children: [(0, n.jsx)(i.Text, {
        variant: "text-xs/semibold",
        className: r.title,
        children: d
      }), (0, n.jsx)("div", {
        children: t
      })]
    }), o ? (0, n.jsx)(i.FormDivider, {}) : null, l]
  })
}