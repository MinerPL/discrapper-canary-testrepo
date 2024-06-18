"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  i = n(481060),
  r = n(285952),
  o = n(578168);

function u(e) {
  let {
    source: t,
    selectedSource: n
  } = e, {
    id: s,
    name: u,
    url: c
  } = t, d = (null == n ? void 0 : n.id) === s;
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)(r.Z, {
      direction: r.Z.Direction.VERTICAL,
      justify: r.Z.Justify.CENTER,
      align: r.Z.Align.CENTER,
      children: [(0, l.jsx)(r.Z, {
        justify: r.Z.Justify.CENTER,
        align: r.Z.Align.CENTER,
        children: (0, l.jsx)("div", {
          style: {
            backgroundImage: "url(".concat(c, ")")
          },
          className: a()(o.sourceThumbnail, {
            [o.selected]: d
          })
        })
      }), (0, l.jsx)(i.Text, {
        className: a()(o.sourceName, {
          [o.selected]: d
        }),
        variant: "text-sm/normal",
        children: u
      })]
    })
  })
}