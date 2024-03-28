"use strict";
a.r(t);
var r = a("528734"),
  n = a("757490"),
  i = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"];

function u(e) {
  var t = i[e];
  return 2 === e ? "'във " + t + " в' p" : "'в " + t + " в' p"
}
var o = {
  lastWeek: function(e, t, a) {
    var o = (0, r.default)(e),
      d = o.getUTCDay();
    return (0, n.default)(o, t, a) ? u(d) : function(e) {
      var t = i[e];
      switch (e) {
        case 0:
        case 3:
        case 6:
          return "'миналата " + t + " в' p";
        case 1:
        case 2:
        case 4:
        case 5:
          return "'миналия " + t + " в' p"
      }
    }(d)
  },
  yesterday: "'вчера в' p",
  today: "'днес в' p",
  tomorrow: "'утре в' p",
  nextWeek: function(e, t, a) {
    var o = (0, r.default)(e),
      d = o.getUTCDay();
    return (0, n.default)(o, t, a) ? u(d) : function(e) {
      var t = i[e];
      switch (e) {
        case 0:
        case 3:
        case 6:
          return "'следващата " + t + " в' p";
        case 1:
        case 2:
        case 4:
        case 5:
          return "'следващия " + t + " в' p"
      }
    }(d)
  },
  other: "P"
};
t.default = function(e, t, a, r) {
  var n = o[e];
  return "function" == typeof n ? n(t, a, r) : n
}