"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("77078"),
  r = n("191814"),
  o = n("423487"),
  u = n("700934");

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
    className: l(u.container, c),
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
          className: l(u.info, u.error),
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