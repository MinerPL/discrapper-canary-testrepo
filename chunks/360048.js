"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(613828),
  l = n(481060),
  u = n(368488);
let _ = r.forwardRef(function(e, t) {
  var n;
  let {
    avatar: r,
    name: s,
    children: _,
    subText: d,
    decorators: c,
    onClick: E,
    selected: I,
    muted: T,
    to: h,
    avatarClassName: S,
    selectedClassName: f,
    innerClassName: N,
    wrapContent: A,
    highlighted: m,
    focusProps: O,
    ...R
  } = e;
  R.className = o()(R.className, u.container, {
    [u.selected]: I,
    [u.highlighted]: m,
    [null != f ? f : ""]: I,
    [u.clickable]: !I && (null != h || null != E)
  }), R["aria-selected"] = null !== (n = R["aria-selected"]) && void 0 !== n ? n : I;
  let C = (0, i.jsxs)("div", {
    className: o()(N, u.layout, {
      [u.muted]: !I && T,
      [u.wrappedLayout]: A
    }),
    children: [(0, i.jsx)("div", {
      className: o()(u.avatar, S),
      children: r
    }), (0, i.jsxs)("div", {
      className: u.content,
      children: [(0, i.jsxs)("div", {
        className: u.nameAndDecorators,
        children: [(0, i.jsx)("div", {
          className: o()(u.name, {
            [u.wrappedName]: A
          }),
          children: s
        }), c]
      }), null != d ? (0, i.jsx)("div", {
        className: u.subText,
        children: d
      }) : null]
    }), null != _ ? (0, i.jsx)("div", {
      className: u.children,
      children: _
    }) : null]
  });
  return null != h ? (0, i.jsx)(l.FocusRing, {
    ...O,
    children: (0, i.jsx)(a.rU, {
      to: h,
      onClick: E,
      ...R,
      role: "listitem",
      ref: t,
      children: C
    })
  }) : null != E ? (0, i.jsx)(l.Clickable, {
    onClick: E,
    focusProps: O,
    ...R,
    role: "listitem",
    innerRef: t,
    children: C
  }) : (0, i.jsx)(l.FocusRing, {
    ...O,
    children: (0, i.jsx)("div", {
      ...R,
      role: "listitem",
      ref: t,
      children: C
    })
  })
});
t.Z = _