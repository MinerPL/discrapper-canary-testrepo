"use strict";
a.r(e);
var n = a("757490");

function i(t, e, a) {
  var i = "eeee p";
  return (0, n.default)(t, e, a) ? i : t.getTime() > e.getTime() ? "'下个'" + i : "'上个'" + i
}
var r = {
  lastWeek: i,
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: i,
  other: "PP p"
};
e.default = function(t, e, a, n) {
  var i = r[t];
  return "function" == typeof i ? i(e, a, n) : i
}