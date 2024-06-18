"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(256286);
t.Z = e => {
  let {
    message: t,
    className: n,
    noResultsImageURL: r,
    forceLightTheme: a,
    suggestions: l
  } = e;
  return (0, i.jsx)("div", {
    className: s()({
      [o.forceLightTheme]: a
    }, n),
    children: (0, i.jsxs)("div", {
      className: o.wrapper,
      children: [(0, i.jsx)("div", {
        className: o.sadImage,
        style: null != r ? {
          backgroundImage: "url(".concat(r, ")")
        } : {}
      }), (0, i.jsx)("div", {
        children: t
      }), l]
    })
  })
}