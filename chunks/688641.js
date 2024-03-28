"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("481060"),
  r = n("692437"),
  o = n("689938"),
  u = n("234689");

function d(e) {
  let {
    className: t,
    iconContainerClassName: n,
    icon: l,
    color: d,
    title: c,
    description: f,
    userCount: h,
    onClick: m,
    highlight: p
  } = e;
  return (0, a.jsxs)(i.Clickable, {
    className: s()(u.container, t, null != p && {
      [u.pulse]: p
    }),
    onClick: m,
    children: [(0, a.jsx)("div", {
      style: {
        backgroundColor: d
      },
      className: s()(u.icon, n),
      children: l
    }), (0, a.jsxs)("div", {
      className: u.textContainer,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: c
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: u.inline,
        children: f
      }), null != h && h > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: u.dot,
          children: "•"
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: u.inline,
          children: o.default.Messages.GUILD_EVENT_INTERESTED.format({
            count: h
          })
        })]
      }) : null]
    }), (0, a.jsx)(r.default, {
      height: 16,
      width: 16,
      className: u.caret
    })]
  })
}