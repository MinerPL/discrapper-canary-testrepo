"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var a = l("735250");
l("470079");
var n = l("481060"),
  s = l("195367"),
  r = l("689938"),
  i = l("776683");

function d(e) {
  let {
    isSlideReady: t,
    ...l
  } = e;
  return (0, a.jsxs)("div", {
    className: i.__invalid_slideContainer,
    children: [(0, a.jsxs)("div", {
      className: i.header,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        children: r.default.Messages.GUILD_EVENT_CREATE_HEADER
      }), (0, a.jsx)(n.Text, {
        color: "header-secondary",
        className: i.text,
        variant: "text-sm/normal",
        children: r.default.Messages.GUILD_EVENT_CREATE_BODY
      })]
    }), (0, a.jsx)(s.default, {
      ...l,
      canSetFocus: t
    })]
  })
}