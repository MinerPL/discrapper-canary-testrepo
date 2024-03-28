"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("177222"),
  a = n("986775"),
  o = n("195802"),
  i = n("299188"),
  l = n("626447"),
  u = n("176070");

function s(e) {
  var t = "function" == typeof r ? new r : void 0;
  return (s = function(e) {
    if (null === e || !(0, l.default)(e)) return e;
    if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
    if (void 0 !== t) {
      if (t.has(e)) return t.get(e);
      t.set(e, n)
    }

    function n() {
      return (0, u.default)(e, arguments, (0, o.default)(this).constructor)
    }
    return n.prototype = a(e.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0, i.default)(n, e)
  })(e)
}