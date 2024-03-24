"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var s = a("37983");
a("884691");
var r = a("414456"),
  l = a.n(r),
  n = a("77078"),
  i = a("782340"),
  o = a("859155"),
  c = a("200406"),
  u = a("283045"),
  d = a("718297"),
  f = a("929880"),
  m = function(e) {
    let {
      isFullScreen: t
    } = e;
    return (0, s.jsxs)("div", {
      className: l(o.heroBanner, t ? o.heroBannerFullScreen : o.heroBannerWithSidebar),
      children: [(0, s.jsxs)("div", {
        className: o.heroDescription,
        children: [(0, s.jsx)(n.Heading, {
          className: o.bannerTitle,
          color: "always-white",
          variant: "display-lg",
          children: i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
        }), (0, s.jsx)(n.Text, {
          className: o.heroSubtitle,
          color: "always-white",
          variant: "text-lg/normal",
          children: i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT
        })]
      }), (0, s.jsxs)("div", {
        className: o.bannerArt,
        children: [(0, s.jsx)("img", {
          className: o.bannerGrid,
          alt: "",
          src: c,
          width: "484",
          height: "402"
        }), (0, s.jsx)("img", {
          className: o.bannerGridSmol,
          alt: "",
          src: d,
          width: "85",
          height: "60"
        }), (0, s.jsx)("img", {
          className: o.bannerGridMedium,
          alt: "",
          src: u,
          width: "178",
          height: "106"
        }), (0, s.jsx)("img", {
          className: o.bannerHand,
          alt: "",
          src: f,
          width: "265",
          height: "238"
        })]
      })]
    })
  }