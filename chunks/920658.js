"use strict";
n.r(i);
var t = n("757490"),
  o = {
    masculine: "ostatni",
    feminine: "ostatnia"
  },
  a = {
    masculine: "ten",
    feminine: "ta"
  },
  r = {
    masculine: "następny",
    feminine: "następna"
  },
  u = {
    0: "feminine",
    1: "masculine",
    2: "masculine",
    3: "feminine",
    4: "masculine",
    5: "masculine",
    6: "feminine"
  };

function d(e, i, n, d) {
  if ((0, t.default)(i, n, d)) s = a;
  else if ("lastWeek" === e) s = o;
  else if ("nextWeek" === e) s = r;
  else throw Error("Cannot determine adjectives for token ".concat(e));
  var s, l = s[u[i.getUTCDay()]];
  return "'".concat(l, "' eeee 'o' p")
}
var s = {
  lastWeek: d,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: d,
  other: "P"
};
i.default = function(e, i, n, t) {
  var o = s[e];
  return "function" == typeof o ? o(e, i, n, t) : o
}