"use strict";
t.d(s, {
  Z: function() {
    return u
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(399606),
  r = t(481060),
  o = t(246946),
  c = t(467679),
  d = t(815589);

function u(e) {
  let {
    className: s,
    avatarURL: t,
    name: i,
    bot: u,
    verifiedBot: E,
    userTag: _
  } = e, I = (0, a.e7)([o.Z], () => o.Z.hidePersonalInformation);
  return (0, n.jsxs)("div", {
    className: l()(d.container, s),
    children: [(0, n.jsx)(r.Avatar, {
      className: d.avatar,
      src: t,
      size: r.AvatarSizes.SIZE_24,
      "aria-label": i
    }), (0, n.jsxs)("div", {
      className: d.textContainer,
      children: [(0, n.jsx)(r.Text, {
        tag: "span",
        className: d.name,
        color: "header-primary",
        variant: "text-sm/semibold",
        children: i
      }), u ? (0, n.jsx)(c.Z, {
        className: d.botTag,
        verified: E
      }) : null, I ? null : (0, n.jsx)(r.Text, {
        tag: "span",
        color: "interactive-normal",
        className: d.userTag,
        variant: "text-sm/normal",
        children: _
      })]
    })]
  })
}