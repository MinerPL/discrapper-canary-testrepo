"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  r = a.n(s),
  n = a("77078"),
  i = a("782340"),
  o = a("98881"),
  c = a("247329"),
  u = a("333838"),
  d = a("399637"),
  f = a("976076"),
  m = function(e) {
    let {
      isFullScreen: t
    } = e;
    return (0, l.jsxs)("div", {
      className: o.heroBanner,
      children: [(0, l.jsxs)("div", {
        className: r(o.heroDescription, {
          [o.heroDescriptionWithSidebar]: !t
        }),
        children: [(0, l.jsx)(n.Heading, {
          className: o.bannerTitle,
          color: "always-white",
          variant: "display-lg",
          children: i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
        }), (0, l.jsx)(n.Text, {
          className: o.heroSubtitle,
          color: "always-white",
          variant: "text-lg/normal",
          children: i.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE
        })]
      }), (0, l.jsx)("div", {
        className: o.bannerBackgroundWrapper,
        children: (0, l.jsx)("img", {
          className: o.bannerBackground,
          alt: "",
          src: c
        })
      }), (0, l.jsx)("img", {
        className: o.bannerForeground,
        alt: "",
        src: u
      }), (0, l.jsx)("img", {
        className: o.bannerHand,
        alt: "",
        src: d
      }), (0, l.jsx)("img", {
        className: r(o.largeSparkle, o.largeTopSparkle),
        alt: "",
        src: f
      }), (0, l.jsx)("img", {
        className: r(o.smallSparkle, o.smallTopSparkle),
        alt: "",
        src: f
      }), (0, l.jsx)("img", {
        className: r(o.largeSparkle, o.largeLeftSparkle),
        alt: "",
        src: f
      }), (0, l.jsx)("img", {
        className: r(o.smallSparkle, o.smallLeftSparkle),
        alt: "",
        src: f
      }), (0, l.jsx)("img", {
        className: r(o.largeSparkle, o.largeRightSparkle),
        alt: "",
        src: f
      }), (0, l.jsx)("img", {
        className: r(o.smallSparkle, o.smallRightSparkle),
        alt: "",
        src: f
      })]
    })
  }