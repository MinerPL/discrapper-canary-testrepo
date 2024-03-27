"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var r = s("90915"),
  i = s("86621"),
  n = s("788188"),
  l = s("49111"),
  o = (0, i.default)(function() {
    return (0, a.jsxs)(r.Switch, {
      children: [(0, a.jsx)(r.Route, {
        path: l.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, a.jsx)(n.default, {})
      }), (0, a.jsx)(r.Redirect, {
        to: l.Routes.APP
      })]
    })
  })