"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  i = s("285952"),
  r = s("563000"),
  o = s("794711");

function d(e) {
  let {
    features: t
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: t.map((e, t) => (0, a.jsxs)(i.default, {
      align: i.default.Align.CENTER,
      className: l()(o.marginTop20, r.feature, {
        [r.featureBorder]: 0 !== t
      }),
      children: [null != e.icon ? (0, a.jsx)("div", {
        className: l()(r.icon, e.icon)
      }) : null, (0, a.jsxs)("div", {
        children: [null != e.title ? (0, a.jsx)("div", {
          className: l()(o.marginBottom8, r.title),
          children: e.title
        }) : null, (0, a.jsx)("div", {
          className: r.description,
          children: e.description
        })]
      })]
    }, t))
  })
}