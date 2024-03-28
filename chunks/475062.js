"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("703656"),
  n = s("153069"),
  o = s("341053");
t.default = e => {
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