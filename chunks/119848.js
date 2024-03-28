"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
}), a("627341");
var s = a("735250");
a("470079");
var i = a("278074"),
  n = a("219496"),
  l = a("346585"),
  o = a("363577"),
  r = a("81259");

function d(e) {
  let {
    username: t,
    oneClickFlow: a = !1
  } = e, d = (0, o.useUsernameLiveCheck)((0, l.formatPomeloForEditing)(t), !0, !1, a);
  if (null == d) return null;
  let u = (0, i.match)(d.type).with(n.NameValidationState.RATE_LIMIT, () => "info").with(n.NameValidationState.ERROR, () => "error").with(n.NameValidationState.AVAILABLE, () => "success").with(n.NameValidationState.INTERNAL_ERROR, () => null).exhaustive();
  return null == u ? null : (0, s.jsx)(r.default, {
    type: u,
    children: d.message
  })
}