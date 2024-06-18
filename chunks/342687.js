"use strict";
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(826298),
  l = n(699973);
t.Z = e => {
  let {
    showImage: t
  } = e, {
    usageWidth: n,
    descriptionWidth: s,
    sourceWidth: u
  } = r.useMemo(() => ({
    usageWidth: o().random(60, 120),
    descriptionWidth: o().random(200, 600),
    sourceWidth: o().random(45, 90)
  }), []);
  return (0, i.jsxs)("div", {
    className: l.wrapper,
    children: [t ? (0, i.jsx)("div", {
      className: l.image
    }) : null, (0, i.jsxs)("div", {
      className: l.infoWrapper,
      children: [(0, i.jsx)("div", {
        style: {
          maxWidth: (0, a.Q1)(n)
        },
        className: l.usageWrapper
      }), (0, i.jsx)("div", {
        style: {
          maxWidth: (0, a.Q1)(s)
        },
        className: l.description
      })]
    }), (0, i.jsx)("div", {
      style: {
        width: (0, a.Q1)(u)
      },
      className: l.source
    })]
  })
}