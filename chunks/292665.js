"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var i = l("735250");
l("470079");
var a = l("803997"),
  n = l.n(a),
  s = l("481060"),
  r = l("471731"),
  c = l("900409");

function o(e) {
  let {
    title: t,
    className: l,
    ref: a
  } = e;
  return (0, i.jsxs)("div", {
    className: n()(c.header, l),
    ref: a,
    children: [(0, i.jsx)(r.default, {
      className: c.logo
    }), (0, i.jsx)(s.HeadingLevel, {
      forceLevel: 1,
      children: (0, i.jsx)(s.Heading, {
        className: c.title,
        variant: "heading-md/semibold",
        color: "header-secondary",
        children: t
      })
    })]
  })
}