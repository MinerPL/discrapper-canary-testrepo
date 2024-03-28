"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("986775"),
  a = n("692316"),
  o = n("299188");

function i(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
  e.prototype = r(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), a(e, "prototype", {
    writable: !1
  }), t && (0, o.default)(e, t)
}