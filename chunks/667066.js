var n = r("657398"),
  a = r("708187"),
  o = r("389109"),
  i = Object.prototype,
  l = Function.prototype.toString,
  u = i.hasOwnProperty,
  s = l.call(Object);
e.exports = function(e) {
  if (!o(e) || "[object Object]" != n(e)) return !1;
  var t = a(e);
  if (null === t) return !0;
  var r = u.call(t, "constructor") && t.constructor;
  return "function" == typeof r && r instanceof r && l.call(r) == s
}