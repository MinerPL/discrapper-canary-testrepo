"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("481060"),
  r = n("957826");
t.default = e => {
  let {
    renderTitle: t,
    renderTagline: n,
    renderActions: a,
    renderMedia: o,
    className: u,
    isHorizontal: d = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(r.tile, {
      [r.tileHorizontal]: d
    }, u),
    children: [(0, s.jsx)("div", {
      className: l()(r.media, {
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