"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
}), l("222007");
var i = l("37983"),
  a = l("884691"),
  n = l("988150"),
  s = l("23619");

function r(e) {
  let {
    imageBackground: t,
    applicationName: l,
    imageClassName: r,
    imageNotFoundClassName: c
  } = e, [o, d] = a.useState(!1);
  return "not-found" === t.state || o ? (0, i.jsx)("div", {
    className: c,
    children: (0, i.jsx)(n.default, {
      className: s.brokenImageIcon
    })
  }) : "loading" === t.state ? null : (0, i.jsx)("img", {
    alt: l,
    className: r,
    src: t.url,
    onError: () => d(!0)
  })
}