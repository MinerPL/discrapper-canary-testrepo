"use strict";
a.r(t), a.d(t, {
  ShyBanner: function() {
    return p
  }
});
var s = a("37983");
a("884691");
var l = a("414456"),
  r = a.n(l),
  n = a("77078"),
  o = a("153769"),
  i = a("751962"),
  u = a("641207"),
  c = a("369068"),
  d = a("882849"),
  f = a("197443"),
  m = a("42913"),
  C = a("61346");

function p(e) {
  let {
    category: t
  } = e;
  return (0, s.jsxs)("div", {
    className: r(i.banner, i.shyBanner),
    "aria-label": t.name,
    children: [(0, s.jsx)("div", {
      className: i.shyGridContainer,
      children: (0, s.jsx)("img", {
        src: d,
        className: i.shyGrid,
        alt: t.name,
        "aria-hidden": !0
      })
    }), (0, s.jsx)("img", {
      src: c,
      className: r(i.shyBannerImage, i.shyBannerRight),
      alt: "",
      "aria-hidden": !0
    }), (0, s.jsx)("img", {
      src: u,
      className: r(i.shyBannerImage, i.shyBannerLeft),
      alt: ""
    }), (0, s.jsxs)("div", {
      className: i.attributionLogos,
      "aria-label": "Valorant x Discord",
      children: [(0, s.jsx)("img", {
        src: m,
        alt: "",
        "aria-hidden": !0
      }), (0, s.jsx)("img", {
        src: C,
        alt: "",
        "aria-hidden": !0
      }), (0, s.jsx)(o.default, {
        height: 16,
        "aria-hidden": !0
      })]
    }), (0, s.jsx)("img", {
      src: f,
      className: i.shyBannerLogo,
      alt: t.name,
      "aria-hidden": !0
    }), (0, s.jsx)(n.Text, {
      className: i.summary,
      variant: "text-md/normal",
      children: t.summary
    })]
  })
}