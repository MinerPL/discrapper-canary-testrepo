var r = n(859209),
  i = n(581031),
  a = n(714050),
  o = n(202934),
  s = URLSearchParams,
  l = s.prototype,
  u = i(l.getAll),
  c = i(l.has),
  d = new s('a=1');
(d.has('a', 2) || !d.has('a', void 0)) && r(l, 'has', function(e) {
  var t = arguments.length,
n = t < 2 ? void 0 : arguments[1];
  if (t && void 0 === n)
return c(this, e);
  var r = u(this, e);
  o(t, 1);
  for (var i = a(n), s = 0; s < r.length;)
if (r[s++] === i)
  return !0;
  return !1;
}, {
  enumerable: !0,
  unsafe: !0
});