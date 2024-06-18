"use strict";
n.d(t, {
  k: function() {
    return c
  },
  m: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(1561),
  l = n(465670),
  u = n(759231),
  _ = n(835023);
let d = {
    RED: _.backgroundRed,
    BACKGROUND_TERTIARY: _.backgroundTertiary,
    BACKGROUND_ACCENT: _.backgroundAccent
  },
  c = r.forwardRef(function(e, t) {
    let {
      role: n,
      children: r,
      className: s,
      onDismiss: c,
      backgroundColor: E = d.RED,
      icon: I = u.Z,
      iconClassName: T
    } = e;
    return (0, i.jsxs)("div", {
      className: o()(_.error, s, E),
      ref: t,
      children: [(0, i.jsx)(I, {
        className: o()(_.icon, T)
      }), (0, i.jsx)("div", {
        role: n,
        className: _.text,
        children: r
      }), null != c ? (0, i.jsx)(a.P, {
        onClick: c,
        className: _.errorClose,
        children: (0, i.jsx)(l.Z, {
          className: _.errorCloseIcon
        })
      }) : null]
    })
  })