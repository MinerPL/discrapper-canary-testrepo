"use strict";
n.r(t);
var i = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  s = n("481060"),
  o = n("937482"),
  r = n("547881"),
  d = n("981631"),
  u = n("689938"),
  c = n("298069");
t.default = function(e) {
  let t;
  let {
    title: n,
    header: a,
    children: f,
    renderSettings: h,
    onDragStart: p
  } = e;
  return t = null != n ? (0, i.jsxs)(r.default.Bar, {
    className: l()(c.header, c.draggableStartArea),
    onMouseDown: p,
    children: [(0, i.jsx)(r.default.Content, {
      className: l()(c.headerTitle, c.draggableStartArea),
      dynamicSize: !0,
      children: n
    }), (0, i.jsx)(r.default.Content, {
      children: (0, i.jsx)(s.Popout, {
        position: "right",
        renderPopout: null != h ? h : d.NOOP,
        autoInvert: !1,
        children: e => (0, i.jsx)(r.default.Icon, {
          ...e,
          icon: o.default,
          label: u.default.Messages.SETTINGS
        })
      })
    })]
  }) : a, (0, i.jsxs)("div", {
    className: c.sidebar,
    children: [t, (0, i.jsx)("div", {
      className: c.children,
      children: f
    })]
  })
}