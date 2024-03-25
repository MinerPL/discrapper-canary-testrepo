var i = n("389832"),
  a = n("488605"),
  l = n("907193"),
  s = n("890305");
e.exports = function(e) {
  return function(t) {
    var n = a(t = s(t)) ? l(t) : void 0,
      o = n ? n[0] : t.charAt(0),
      r = n ? i(n, 1).join("") : t.slice(1);
    return o[e]() + r
  }
}