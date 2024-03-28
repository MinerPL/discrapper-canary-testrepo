"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("873546"),
  r = n("481060"),
  o = n("470134"),
  u = n("836595");

function d(e) {
  let {
    guildId: t,
    children: n,
    className: l
  } = e, {
    horizontalScrollNotice: d,
    handleScroll: c,
    handleSetScrollerRef: f,
    handleSetContainerRef: h
  } = (0, o.default)(t), m = (0, a.jsx)("div", {
    className: u.tierPreviewsContainer,
    children: (0, a.jsx)("div", {
      className: s()(u.tierPreviews, l),
      children: n
    })
  });
  return !i.isMobile && (m = (0, a.jsxs)(a.Fragment, {
    children: [d, (0, a.jsx)(r.AdvancedScroller, {
      className: u.scroller,
      orientation: "horizontal",
      ref: f,
      onScroll: c,
      children: m
    })]
  })), (0, a.jsx)("div", {
    className: u.carouselMaxWidth,
    ref: h,
    children: m
  })
}