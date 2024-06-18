var r = n(657398),
  i = n(708187),
  a = n(389109),
  o = Object.prototype,
  s = Function.prototype.toString,
  u = o.hasOwnProperty,
  c = s.call(Object);
e.exports = function(e) {
  if (!a(e) || "[object Object]" != r(e)) return !1;
  var t = i(e);
  if (null === t) return !0;
  var n = u.call(t, "constructor") && t.constructor;
  return "function" == typeof n && n instanceof n && s.call(n) == c
}