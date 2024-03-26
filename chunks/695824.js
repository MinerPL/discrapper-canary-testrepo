"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("37983");
a("884691");
var r = a("414456"),
  s = a.n(r),
  n = a("922063"),
  o = a("858422"),
  i = a("682123"),
  u = a("183891");
let c = () => 4 * Math.random() + 8,
  d = [c(), c(), c()];
var f = () => (0, l.jsx)(l.Fragment, {
  children: d.map(e => (0, l.jsxs)("div", {
    className: n.cardsContainer,
    children: [(0, l.jsx)("div", {
      className: s(u.skeleton, o.shopBanner),
      children: (0, l.jsx)("div", {
        className: u.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, l.jsx)("div", {
      className: s(u.skeleton, i.shopCard),
      children: (0, l.jsxs)("div", {
        className: u.cardBody,
        children: [(0, l.jsx)("div", {
          className: u.cardAvatar
        }), (0, l.jsx)("div", {
          className: u.cardTitle
        }), (0, l.jsx)("div", {
          className: u.cardDescription
        }), (0, l.jsx)("div", {
          className: u.cardSummary
        })]
      })
    }, e))]
  }, e))
})