var a = s("448730"),
  l = s("386015"),
  n = s("232396"),
  i = s("263604");
e.exports = function(e) {
  return function(t) {
    var s = l(t = i(t)) ? n(t) : void 0,
      r = s ? s[0] : t.charAt(0),
      o = s ? a(s, 1).join("") : t.slice(1);
    return r[e]() + o
  }
}