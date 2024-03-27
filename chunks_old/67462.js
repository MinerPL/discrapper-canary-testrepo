var n = r("60297"),
  a = r("191472"),
  o = r("346173"),
  i = Object.prototype,
  u = Function.prototype.toString,
  l = i.hasOwnProperty,
  s = u.call(Object);
e.exports = function(e) {
  if (!o(e) || "[object Object]" != n(e)) return !1;
  var t = a(e);
  if (null === t) return !0;
  var r = l.call(t, "constructor") && t.constructor;
  return "function" == typeof r && r instanceof r && u.call(r) == s
}