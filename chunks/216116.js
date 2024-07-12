var r = n(859209),
  i = n(581031),
  a = n(714050),
  o = n(202934),
  s = URLSearchParams,
  l = s.prototype,
  u = i(l.append),
  c = i(l.delete),
  d = i(l.forEach),
  _ = i([].push),
  E = new s('a=1&a=2&b=3');
E.delete('a', 1), E.delete('b', void 0), E + '' != 'a=2' && r(l, 'delete', function(e) {
  var t, n = arguments.length,
r = n < 2 ? void 0 : arguments[1];
  if (n && void 0 === r)
return c(this, e);
  var i = [];
  d(this, function(e, t) {
_(i, {
  key: t,
  value: e
});
  }), o(n, 1);
  for (var s = a(e), l = a(r), E = 0, f = 0, h = !1, p = i.length; E < p;)
t = i[E++], h || t.key === s ? (h = !0, c(this, t.key)) : f++;
  for (; f < p;)
!((t = i[f++]).key === s && t.value === l) && u(this, t.key, t.value);
}, {
  enumerable: !0,
  unsafe: !0
});