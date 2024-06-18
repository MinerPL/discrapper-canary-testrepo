"use strict";
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  l = t(425734),
  r = t(897246),
  o = t(211371),
  c = t(775087);
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()];
s.Z = () => (0, n.jsx)("div", {
  className: l.skeletons,
  children: d.map(e => (0, n.jsxs)("div", {
    className: l.cardsContainer,
    children: [(0, n.jsx)("div", {
      className: i()(o.skeleton, r.shopBanner),
      children: (0, n.jsx)("div", {
        className: o.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, s) => s).map(e => (0, n.jsx)("div", {
      className: i()(o.skeleton, c.shopCard),
      children: (0, n.jsxs)("div", {
        className: o.cardBody,
        children: [(0, n.jsx)("div", {
          className: o.cardAvatar
        }), (0, n.jsx)("div", {
          className: o.cardTitle
        }), (0, n.jsx)("div", {
          className: o.cardDescription
        }), (0, n.jsx)("div", {
          className: o.cardSummary
        })]
      })
    }, e))]
  }, e))
})