"use strict";
n.r(t), n.d(t, {
  SafetyToast: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("877585"),
  r = n("77078"),
  o = n("653829"),
  u = n("882746");

function d(e) {
  let {
    text: t
  } = e;
  return (0, s.jsxs)("div", {
    className: l(u.toast, o.toast),
    children: [(0, s.jsx)(i.ShieldIcon, {
      color: r.tokens.colors.TEXT_BRAND
    }), (0, s.jsx)(r.Text, {
      className: u.content,
      color: "header-primary",
      variant: "text-md/normal",
      children: t
    })]
  })
}