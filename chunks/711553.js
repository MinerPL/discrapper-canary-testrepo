"use strict";
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  a = n(481060),
  o = n(937482),
  r = n(547881),
  d = n(981631),
  c = n(689938),
  u = n(387080);
t.Z = function(e) {
  let t;
  let {
    title: n,
    header: s,
    children: h,
    renderSettings: p,
    onDragStart: f
  } = e;
  return t = null != n ? (0, i.jsxs)(r.ZP.Bar, {
    className: l()(u.header, u.draggableStartArea),
    onMouseDown: f,
    children: [(0, i.jsx)(r.ZP.Content, {
      className: l()(u.headerTitle, u.draggableStartArea),
      dynamicSize: !0,
      children: n
    }), (0, i.jsx)(r.ZP.Content, {
      children: (0, i.jsx)(a.Popout, {
        position: "right",
        renderPopout: null != p ? p : d.dG4,
        autoInvert: !1,
        children: e => (0, i.jsx)(r.ZP.Icon, {
          ...e,
          icon: o.Z,
          label: c.Z.Messages.SETTINGS
        })
      })
    })]
  }) : s, (0, i.jsxs)("div", {
    className: u.sidebar,
    children: [t, (0, i.jsx)("div", {
      className: u.children,
      children: h
    })]
  })
}