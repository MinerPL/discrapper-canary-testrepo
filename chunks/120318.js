"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("65597"),
  r = s("77078"),
  o = s("102985"),
  d = s("79798"),
  u = s("470668");

function c(e) {
  let {
    className: t,
    avatarURL: s,
    name: l,
    bot: c,
    verifiedBot: E,
    userTag: _
  } = e, I = (0, i.useStateFromStores)([o.default], () => o.default.hidePersonalInformation);
  return (0, a.jsxs)("div", {
    className: n(u.container, t),
    children: [(0, a.jsx)(r.Avatar, {
      className: u.avatar,
      src: s,
      size: r.AvatarSizes.SIZE_24,
      "aria-label": l
    }), (0, a.jsxs)("div", {
      className: u.textContainer,
      children: [(0, a.jsx)(r.Text, {
        tag: "span",
        className: u.name,
        color: "header-primary",
        variant: "text-sm/semibold",
        children: l
      }), c ? (0, a.jsx)(d.default, {
        className: u.botTag,
        verified: E
      }) : null, I ? null : (0, a.jsx)(r.Text, {
        tag: "span",
        color: "interactive-normal",
        className: u.userTag,
        variant: "text-sm/normal",
        children: _
      })]
    })]
  })
}