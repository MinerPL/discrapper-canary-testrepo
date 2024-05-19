"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var a = l("735250");
l("470079");
var n = l("120356"),
  s = l.n(n),
  i = l("481060"),
  r = l("285952"),
  u = l("578168");

function o(e) {
  let {
    source: t,
    selectedSource: l
  } = e, {
    id: n,
    name: o,
    url: d
  } = t, c = (null == l ? void 0 : l.id) === n;
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)(r.default, {
      direction: r.default.Direction.VERTICAL,
      justify: r.default.Justify.CENTER,
      align: r.default.Align.CENTER,
      children: [(0, a.jsx)(r.default, {
        justify: r.default.Justify.CENTER,
        align: r.default.Align.CENTER,
        children: (0, a.jsx)("div", {
          style: {
            backgroundImage: "url(".concat(d, ")")
          },
          className: s()(u.sourceThumbnail, {
            [u.selected]: c
          })
        })
      }), (0, a.jsx)(i.Text, {
        className: s()(u.sourceName, {
          [u.selected]: c
        }),
        variant: "text-sm/normal",
        children: o
      })]
    })
  })
}