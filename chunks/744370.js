"use strict";
var r = n("476508"),
  a = n("570596"),
  o = n("548828"),
  i = n("831496"),
  l = n("250765"),
  u = n("730427"),
  s = [].push;
e.exports = function(e) {
  var t, n, c, d, f = arguments.length,
    p = f > 1 ? arguments[1] : void 0;
  return (i(this), (t = void 0 !== p) && o(p), l(e)) ? new this : (n = [], t ? (c = 0, d = r(p, f > 2 ? arguments[2] : void 0), u(e, function(e) {
    a(s, n, d(e, c++))
  })) : u(e, s, {
    that: n
  }), new this(n))
}