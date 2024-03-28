"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("399606"),
  s = n("481060"),
  i = n("351780"),
  r = n("170248");

function o(e) {
  let {
    isShaking: t,
    shakeLocation: n,
    children: o,
    className: u
  } = e, d = (0, r.default)(n);
  return (0, l.useStateFromStores)([i.default], () => i.default.isEnabled({
    shakeLocation: n
  })) ? (0, a.jsx)(s.Shaker, {
    isShaking: t,
    intensity: d,
    className: u,
    children: o
  }) : (0, a.jsx)(a.Fragment, {
    children: o
  })
}