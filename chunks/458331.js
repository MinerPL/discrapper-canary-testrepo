"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("77078"),
  r = n("503496"),
  o = e => {
    let {
      renderTitle: t,
      renderTagline: n,
      renderActions: a,
      renderMedia: o,
      className: u,
      isHorizontal: d = !1
    } = e;
    return (0, s.jsxs)("div", {
      className: l(r.tile, {
        [r.tileHorizontal]: d
      }, u),
      children: [(0, s.jsx)("div", {
        className: l(r.media, {
          [r.mediaHorizontal]: d
        }),
        children: null == o ? void 0 : o()
      }), (0, s.jsxs)("div", {
        className: r.description,
        children: [(0, s.jsx)(i.H, {
          className: r.title,
          children: null == t ? void 0 : t()
        }), (0, s.jsx)("div", {
          className: r.tagline,
          children: null == n ? void 0 : n()
        }), (0, s.jsx)("div", {
          className: r.actions,
          children: null == a ? void 0 : a()
        })]
      })]
    })
  }