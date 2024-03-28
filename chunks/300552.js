"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("962908"),
  a = n("991813"),
  o = n("15568");

function i(e, t) {
  if (e) {
    if ("string" == typeof e) return (0, o.default)(e, t);
    var n, i = r(n = Object.prototype.toString.call(e)).call(n, 8, -1);
    if ("Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i) return a(e);
    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return (0, o.default)(e, t)
  }
}