"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var l = n("475674"),
  s = n("42326"),
  i = n("906467");

function r(e) {
  var t;
  let {
    participant: n,
    className: r
  } = e;
  let o = null == (t = (0, l.default)(n)) ? null : i.default.isDeveloper ? "".concat(t.message, " (").concat(t.errorType, ")") : t.message;
  return null != o ? (0, a.jsx)(s.default, {
    className: r,
    errorMessage: o
  }) : null
}