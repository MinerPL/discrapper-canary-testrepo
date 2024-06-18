"use strict";
var e = n(566885),
  o = n(470592),
  i = n(339718),
  u = n(49693),
  c = function(t) {
    var r = 1 === t;
    return function(n, c, f) {
      for (var a, s = i(n), y = o(s), p = e(c, f), h = u(y); h-- > 0;)
        if (p(a = y[h], h, s)) switch (t) {
          case 0:
            return a;
          case 1:
            return h
        }
      return r ? -1 : void 0
    }
  };
t.exports = {
  findLast: c(0),
  findLastIndex: c(1)
}