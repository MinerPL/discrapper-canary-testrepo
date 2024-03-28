"use strict";
A.r(t), A.d(t, {
  default: function() {
    return d
  }
});
var a = A("735250");
A("470079");
var l = A("866442"),
  s = A("481060"),
  n = A("682864"),
  r = A("630641"),
  i = A("689938"),
  o = A("745592");

function d(e) {
  let {
    locked: t,
    role: A,
    textVariant: d = "text-xs/medium"
  } = e, u = (0, s.useToken)(s.tokens.colors.INTERACTIVE_NORMAL).hex();
  return (0, a.jsx)("div", {
    className: o.roleTagContainer,
    children: (0, a.jsxs)("div", {
      className: o.roleTag,
      children: [(0, a.jsx)("div", {
        className: o.roleColor,
        style: {
          backgroundColor: (0, l.int2hex)(A.color)
        }
      }), (0, a.jsx)(n.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsxs)(s.Text, {
        variant: d,
        color: "text-normal",
        children: [(0, a.jsx)(s.HiddenVisually, {
          children: i.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
        }), A.name]
      }), !0 === t && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(n.default, {
          size: 8,
          horizontal: !0
        }), (0, a.jsx)(r.default, {
          color: u
        })]
      })]
    })
  })
}