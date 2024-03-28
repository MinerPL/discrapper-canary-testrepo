"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("858752"),
  u = n("294639"),
  d = n("697908");
t.default = a.forwardRef(function(e, t) {
  let {
    renderIcon: n,
    text: a,
    selected: s,
    badge: c,
    showUnread: f = !1,
    ...h
  } = e;
  return (0, l.jsxs)(r.Clickable, {
    ...h,
    innerRef: t,
    tag: "li",
    className: i()(u.containerDefault, d.wrapper, {
      [d.modeSelected]: s
    }),
    children: [f ? (0, l.jsx)("div", {
      className: i()(d.unread, d.unreadImportant)
    }) : null, (0, l.jsx)("div", {
      className: d.link,
      children: (0, l.jsxs)("div", {
        className: o.content,
        children: [(0, l.jsx)("div", {
          className: d.iconContainer,
          children: n(d.icon)
        }), (0, l.jsx)("div", {
          className: d.name,
          children: a
        }), c]
      })
    })]
  })
})