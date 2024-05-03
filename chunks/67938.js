"use strict";
a.r(t), a.d(t, {
  ShyBanner: function() {
    return E
  }
});
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("442837"),
  i = a("481060"),
  o = a("607070"),
  u = a("68972"),
  c = a("479292"),
  d = a("338231"),
  f = a("383416"),
  m = a("26213"),
  C = a("249174"),
  p = a("767247"),
  h = a("621881");

function E(e) {
  let {
    category: t
  } = e, a = (0, n.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, l.jsxs)("div", {
    className: r()(c.banner, c.shyBanner),
    "aria-label": t.name,
    children: [(0, l.jsxs)("div", {
      className: c.noOverflow,
      children: [(0, l.jsx)("img", {
        src: a ? C : m,
        className: c.shyGrid,
        alt: t.name,
        "aria-hidden": !0
      }), (0, l.jsx)("img", {
        src: f,
        className: r()(c.shyBannerImage, c.shyBannerRight),
        alt: "",
        "aria-hidden": !0
      })]
    }), (0, l.jsx)("img", {
      src: d,
      className: r()(c.shyBannerImage, c.shyBannerLeft),
      alt: ""
    }), (0, l.jsx)("img", {
      src: p,
      className: c.shyBannerLogo,
      alt: t.name,
      "aria-hidden": !0
    }), (0, l.jsxs)("div", {
      className: c.attributionLogos,
      "aria-label": "Valorant x Discord",
      children: [(0, l.jsx)("img", {
        src: h,
        alt: "",
        "aria-hidden": !0
      }), (0, l.jsx)(i.Text, {
        variant: "heading-sm/extrabold",
        tag: "div",
        children: "|"
      }), (0, l.jsx)(u.default, {
        height: 22,
        "aria-hidden": !0
      })]
    }), (0, l.jsx)(i.Text, {
      className: c.summary,
      variant: "text-md/normal",
      children: t.summary
    })]
  })
}