"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  r = a.n(s),
  n = a("451594"),
  i = a("927694"),
  o = a("395535"),
  c = a("492666");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()];
var f = () => (0, l.jsx)(l.Fragment, {
  children: d.map(e => (0, l.jsxs)("div", {
    className: n.cardsContainer,
    children: [(0, l.jsx)("div", {
      className: r(c.skeleton, i.shopBanner),
      children: (0, l.jsx)("div", {
        className: c.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, l.jsx)("div", {
      className: r(c.skeleton, o.shopCard),
      children: (0, l.jsxs)("div", {
        className: c.cardBody,
        children: [(0, l.jsx)("div", {
          className: c.cardAvatar
        }), (0, l.jsx)("div", {
          className: c.cardTitle
        }), (0, l.jsx)("div", {
          className: c.cardDescription
        }), (0, l.jsx)("div", {
          className: c.cardSummary
        })]
      })
    }, e))]
  }, e))
})