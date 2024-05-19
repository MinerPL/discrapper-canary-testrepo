"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("955627");
t.default = e => {
  var t, s, r, o;
  let {
    title: u,
    shouldShowElement: d,
    cardVariantStyleInfo: c,
    description: _,
    titleClassName: E = "",
    subtitle: T = "",
    subtitleClassName: I
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.Heading, {
      variant: "heading-xl/extrabold",
      className: i()(l.cardHeading, E),
      children: u
    }), 0 !== T.length && (null == d || d(null == c ? void 0 : c.subtitle)) && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: I,
        children: [(0, a.jsx)(n.Text, {
          variant: null !== (r = null == c ? void 0 : null === (t = c.subtitle) || void 0 === t ? void 0 : t.textVariant) && void 0 !== r ? r : "text-sm/normal",
          children: T
        }), null != _ && (0, a.jsx)(n.Text, {
          variant: null !== (o = null == c ? void 0 : null === (s = c.description) || void 0 === s ? void 0 : s.textVariant) && void 0 !== o ? o : "text-sm/normal",
          children: (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("br", {}), _]
          })
        })]
      })
    })]
  })
}