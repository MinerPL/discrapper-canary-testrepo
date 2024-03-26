"use strict";
n.r(t), n.d(t, {
  getRedirectPath: function() {
    return o
  },
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("803182"),
  l = n("447669"),
  i = n("49111"),
  r = n("492397");

function o() {
  let e = location.pathname + location.search,
    t = r.CONFERENCE_MODE_ENABLED ? i.Routes.REGISTER : (0, l.getLoginPath)(e, !1);
  return t
}
var u = function() {
  return (0, a.jsx)(s.Redirect, {
    to: o()
  })
}