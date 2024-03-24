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
  o = a("313506"),
  c = a("247329"),
  u = a("333838"),
  d = a("399637"),
  f = a("976076"),
  m = function(e) {
    let {
      isFullScreen: t
    } = e;
    return (0, s.jsxs)("div", {
      className: o.heroBanner,
      children: [(0, s.jsxs)("div", {
        className: l(o.heroDescription, {
          [o.heroDescriptionWithSidebar]: !t
        }),
        children: [(0, s.jsx)(n.Heading, {
          className: o.bannerTitle,
          color: "always-white",
          variant: "display-lg",
          children: i.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
        }), (0, s.jsx)(n.Text, {
          className: o.heroSubtitle,
          color: "always-white",
          variant: "text-lg/normal",
          children: i.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE
        })]
      }), (0, s.jsx)("div", {
        className: o.bannerBackgroundWrapper,
        children: (0, s.jsx)("img", {
          className: o.bannerBackground,
          alt: "",
          src: c
        })
      }), (0, s.jsx)("img", {
        className: o.bannerForeground,
        alt: "",
        src: u
      }), (0, s.jsx)("img", {
        className: o.bannerHand,
        alt: "",
        src: d
      }), (0, s.jsx)("img", {
        className: l(o.largeSparkle, o.largeTopSparkle),
        alt: "",
        src: f
      }), (0, s.jsx)("img", {
        className: l(o.smallSparkle, o.smallTopSparkle),
        alt: "",
        src: f
      }), (0, s.jsx)("img", {
        className: l(o.largeSparkle, o.largeLeftSparkle),
        alt: "",
        src: f
      }), (0, s.jsx)("img", {
        className: l(o.smallSparkle, o.smallLeftSparkle),
        alt: "",
        src: f
      }), (0, s.jsx)("img", {
        className: l(o.largeSparkle, o.largeRightSparkle),
        alt: "",
        src: f
      }), (0, s.jsx)("img", {
        className: l(o.smallSparkle, o.smallRightSparkle),
        alt: "",
        src: f
      })]
    })
  }