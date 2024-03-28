"use strict";
a.r(t), a.d(t, {
  ShyBanner: function() {
    return E
  }
});
var s = a("735250");
a("470079");
var l = a("803997"),
  r = a.n(l),
  n = a("442837"),
  o = a("481060"),
  i = a("607070"),
  u = a("68972"),
  c = a("442479"),
  d = a("373008"),
  f = a("383416"),
  m = a("26213"),
  C = a("249174"),
  p = a("767247"),
  g = a("621881"),
  h = a("586755");

function E(e) {
  let {
    category: t
  } = e, a = (0, n.useStateFromStores)([i.default], () => i.default.useReducedMotion);
  return (0, s.jsxs)("div", {
    className: r()(c.banner, c.shyBanner),
    "aria-label": t.name,
    children: [(0, s.jsxs)("div", {
      className: c.noOverflow,
      children: [(0, s.jsx)("img", {
        src: a ? C : m,
        className: c.shyGrid,
        alt: t.name,
        "aria-hidden": !0
      }), (0, s.jsx)("img", {
        src: f,
        className: r()(c.shyBannerImage, c.shyBannerRight),
        alt: "",
        "aria-hidden": !0
      })]
    }), (0, s.jsx)("img", {
      src: d,
      className: r()(c.shyBannerImage, c.shyBannerLeft),
      alt: ""
    }), (0, s.jsx)("img", {
      src: p,
      className: c.shyBannerLogo,
      alt: t.name,
      "aria-hidden": !0
    }), (0, s.jsxs)("div", {
      className: c.attributionLogos,
      "aria-label": "Valorant x Discord",
      children: [(0, s.jsx)("img", {
        src: g,
        alt: "",
        "aria-hidden": !0
      }), (0, s.jsx)("img", {
        src: h,
        alt: "",
        "aria-hidden": !0
      }), (0, s.jsx)(u.default, {
        height: 16,
        "aria-hidden": !0
      })]
    }), (0, s.jsx)(o.Text, {
      className: c.summary,
      variant: "text-md/normal",
      children: t.summary
    })]
  })
}