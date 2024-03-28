"use strict";
n.r(t), n.d(t, {
  SafetyToast: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("914576"),
  r = n("481060"),
  o = n("317885"),
  u = n("339586");

function d(e) {
  let {
    text: t
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(u.toast, o.toast),
    children: [(0, s.jsx)(i.ShieldIcon, {
      color: r.tokens.colors.TEXT_BRAND
    }), (0, s.jsx)(r.Text, {
      className: u.__invalid_content,
      color: "header-primary",
      variant: "text-md/normal",
      children: t
    })]
  })
}