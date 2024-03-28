"use strict";
n.r(t), n.d(t, {
  MessageNoticeBanner: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("402312");

function r(e) {
  let {
    bannerIcon: t,
    bannerHeader: n,
    bannerSubtext: l,
    containerStyles: r,
    headerStyles: o,
    children: u
  } = e;
  return (0, a.jsxs)("div", {
    className: i.spamBanner,
    children: [(0, a.jsxs)("div", {
      className: s()(i.bannerTextContainer, r),
      children: ["string" == typeof t ? (0, a.jsx)("img", {
        src: t,
        alt: "",
        className: i.bannerIcon
      }) : t, (0, a.jsxs)("div", {
        className: i.bannerText,
        children: [(0, a.jsx)("div", {
          className: s()(i.bannerHeader, o),
          children: n
        }), (0, a.jsx)("div", {
          className: i.bannerSubtext,
          children: l
        })]
      })]
    }), (0, a.jsx)("div", {
      className: i.actionButtons,
      children: u
    })]
  })
}