"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("481060"),
  r = n("682864"),
  o = n("759231"),
  u = n("79136");

function d(e) {
  let {
    message: t,
    error: n,
    onClick: s,
    submitting: d,
    className: c,
    ctaMessage: f
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(u.container, c),
    children: [(0, a.jsxs)("div", {
      className: u.textContainer,
      children: [(0, a.jsx)(o.default, {
        className: u.warningIcon
      }), (0, a.jsx)(r.default, {
        size: 10,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.default, {
          size: 1
        }), (0, a.jsx)(i.Text, {
          className: u.info,
          variant: "text-sm/normal",
          children: t
        }), null != n && (0, a.jsx)(i.Text, {
          className: l()(u.info, u.error),
          variant: "text-sm/normal",
          children: n
        })]
      })]
    }), (0, a.jsx)(r.default, {
      size: 16,
      horizontal: !0
    }), (0, a.jsx)(i.Button, {
      className: u.undoButton,
      color: i.Button.Colors.LINK,
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.ICON,
      onClick: s,
      submitting: d,
      children: f
    })]
  })
}