"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  n = s.n(r),
  i = s("77078"),
  l = s("635650"),
  o = e => {
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
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-xl/extrabold",
        className: n(l.cardHeading, E),
        children: u
      }), 0 !== T.length && (null == d || d(null == c ? void 0 : c.subtitle)) && (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)("div", {
          className: I,
          children: [(0, a.jsx)(i.Text, {
            variant: null !== (r = null == c ? void 0 : null === (t = c.subtitle) || void 0 === t ? void 0 : t.textVariant) && void 0 !== r ? r : "text-sm/normal",
            children: T
          }), null != _ && (0, a.jsx)(i.Text, {
            variant: null !== (o = null == c ? void 0 : null === (s = c.description) || void 0 === s ? void 0 : s.textVariant) && void 0 !== o ? o : "text-sm/normal",
            children: (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("br", {}), _]
            })
          })]
        })
      })]
    })
  }