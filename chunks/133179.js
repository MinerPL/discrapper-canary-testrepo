"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var a = l("735250");
l("470079");
var s = l("803997"),
  n = l.n(s),
  i = l("481060"),
  r = l("285952"),
  u = l("787186");

function o(e) {
  let {
    source: t,
    selectedSource: l
  } = e, {
    id: s,
    name: o,
    url: d
  } = t, c = (null == l ? void 0 : l.id) === s;
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
          className: n()(u.sourceThumbnail, {
            [u.selected]: c
          })
        })
      }), (0, a.jsx)(i.Text, {
        className: n()(u.sourceName, {
          [u.selected]: c
        }),
        variant: "text-sm/normal",
        children: o
      })]
    })
  })
}