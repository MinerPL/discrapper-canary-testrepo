var i = n(448730),
  s = n(386015),
  a = n(232396),
  o = n(263604);
e.exports = function(e) {
  return function(t) {
var n = s(t = o(t)) ? a(t) : void 0,
  r = n ? n[0] : t.charAt(0),
  l = n ? i(n, 1).join('') : t.slice(1);
return r[e]() + l;
  };
};