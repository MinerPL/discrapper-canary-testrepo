"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var s = a("37983");
a("884691");
var l = a("414456"),
  r = a.n(l),
  n = a("77078"),
  o = a("782340"),
  i = a("313506"),
  u = a("247329"),
  c = a("333838"),
  d = a("399637"),
  f = a("976076"),
  m = function(e) {
    let {
      isFullScreen: t
    } = e;
    return (0, s.jsxs)("div", {
      className: i.heroBanner,
      children: [(0, s.jsxs)("div", {
        className: r(i.heroDescription, {
          [i.heroDescriptionWithSidebar]: !t
        }),
        children: [(0, s.jsx)(n.Heading, {
          className: i.bannerTitle,
          color: "always-white",
          variant: "display-lg",
          children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
        }), (0, s.jsx)(n.Text, {
          className: i.heroSubtitle,
          color: "always-white",
          variant: "text-lg/normal",
          children: o.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE
        })]
      }), (0, s.jsx)("div", {
        className: i.bannerBackgroundWrapper,
        children: (0, s.jsx)("img", {
          className: i.bannerBackground,
          alt: "",
          src: u
        })
      }), (0, s.jsx)("img", {
        className: i.bannerForeground,
        alt: "",
        src: c
      }), (0, s.jsx)("img", {
        className: i.bannerHand,
        alt: "",
        src: d
      }), (0, s.jsx)("img", {
        className: r(i.largeSparkle, i.largeTopSparkle),
        alt: "",
        src: f
      }), (0, s.jsx)("img", {
        className: r(i.smallSparkle, i.smallTopSparkle),
        alt: "",
        src: f
      }), (0, s.jsx)("img", {
        className: r(i.largeSparkle, i.largeLeftSparkle),
        alt: "",
        src: f
      }), (0, s.jsx)("img", {
        className: r(i.smallSparkle, i.smallLeftSparkle),
        alt: "",
        src: f
      }), (0, s.jsx)("img", {
        className: r(i.largeSparkle, i.largeRightSparkle),
        alt: "",
        src: f
      }), (0, s.jsx)("img", {
        className: r(i.smallSparkle, i.smallRightSparkle),
        alt: "",
        src: f
      })]
    })
  }