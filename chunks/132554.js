"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  l = n("77078"),
  a = n("978679"),
  o = n("249121");

function u(e) {
  let {
    className: t,
    copy: n,
    bannerImage: i,
    textColor: u = "always-white"
  } = e;
  return (0, r.jsxs)("div", {
    className: s(o.bannerContainer, t),
    children: [null == i ? null : (0, r.jsx)("img", {
      alt: "",
      className: o.banner,
      src: i
    }), (0, r.jsxs)("div", {
      className: o.textContainer,
      children: [(0, r.jsx)(a.default, {
        className: o.giftIcon
      }), (0, r.jsx)(l.Heading, {
        className: o.textHeader,
        color: u,
        variant: "eyebrow",
        children: n
      })]
    })]
  })
}