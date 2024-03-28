"use strict";
a.r(t);
var i = a("757490"),
  n = ["domenica", "luned\xec", "marted\xec", "mercoled\xec", "gioved\xec", "venerd\xec", "sabato"];

function o(e) {
  return "'" + n[e] + " alle' p"
}
var r = {
  lastWeek: function(e, t, a) {
    var r = e.getUTCDay();
    return (0, i.default)(e, t, a) ? o(r) : function(e) {
      if (0 === e) return "'domenica scorsa alle' p";
      return "'" + n[e] + " scorso alle' p"
    }(r)
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: function(e, t, a) {
    var r = e.getUTCDay();
    return (0, i.default)(e, t, a) ? o(r) : function(e) {
      if (0 === e) return "'domenica prossima alle' p";
      return "'" + n[e] + " prossimo alle' p"
    }(r)
  },
  other: "P"
};
t.default = function(e, t, a, i) {
  var n = r[e];
  return "function" == typeof n ? n(t, a, i) : n
}