var r = n(700312).charAt,
  i = n(714050),
  a = n(644659),
  s = n(828114),
  o = n(535586),
  l = 'String Iterator',
  u = a.set,
  c = a.getterFor(l);
s(String, 'String', function(e) {
  u(this, {
type: l,
string: i(e),
index: 0
  });
}, function() {
  var e, t = c(this),
n = t.string,
i = t.index;
  return i >= n.length ? o(void 0, !0) : (e = r(n, i), t.index += e.length, o(e, !1));
});