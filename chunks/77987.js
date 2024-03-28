"use strict";
a.r(t), a.d(t, {
  makeAuthenticated: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var r = a("314897"),
  s = a("449934"),
  o = a("857458"),
  i = a("981631");

function u(e, t) {
  var a, u;
  let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    passProps: !0
  };

  function c(a) {
    if (!(0, s.isAuthenticated)() && r.default.getLoginStatus() !== i.LoginStates.LOGGING_IN && r.default.allowLogoutRedirect()) return null != t ? (0, n.jsx)(t, {
      renderRedirect: (0, n.jsx)(o.default, {})
    }) : (0, n.jsx)(o.default, {});
    return (0, n.jsx)(e, {
      ...l.passProps ? a : null
    })
  }
  return c.displayName = "Authenticated(".concat(null !== (u = null !== (a = e.displayName) && void 0 !== a ? a : e.name) && void 0 !== u ? u : "<Unknown>", ")"), c
}