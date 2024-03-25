"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("37983");
s("884691");
var r = s("393414"),
  n = s("479287"),
  o = s("668332"),
  l = e => {
    let {
      onClose: t
    } = e;
    return (0, a.jsx)(n.default, {
      transitionTo: e => {
        (0, r.transitionTo)(e)
      },
      replaceWith: e => {
        (0, r.replaceWith)(e)
      },
      authBoxClassName: o.card,
      closeLogin: t
    })
  }