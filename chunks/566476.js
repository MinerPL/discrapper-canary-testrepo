"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var l = s("803997"),
  n = s.n(l),
  i = s("399606"),
  r = s("481060"),
  o = s("246946"),
  d = s("467679"),
  u = s("835291");

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
    className: n()(u.container, t),
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