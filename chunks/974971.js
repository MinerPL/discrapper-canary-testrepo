    "use strict";
    var n = e("525305"),
      o = e("354848"),
      i = e("332916"),
      u = e("641236")("toStringTag"),
      c = Object,
      s = "Arguments" === i(function() {
        return arguments
      }()),
      a = function(t, r) {
        try {
          return t[r]
        } catch (t) {}
      };
    t.exports = n ? i : function(t) {
      var r, e, n;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = a(r = c(t), u)) ? e : s ? i(r) : "Object" === (n = i(r)) && o(r.callee) ? "Arguments" : n
    }