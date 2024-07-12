var r = n(690244),
  i = r('%Symbol.species%', !0),
  a = r('%TypeError%'),
  o = n(66034),
  s = n(414916),
  l = n(156700),
  u = n(718129),
  c = n(632384),
  d = n(73871);
e.exports = function(e, t) {
  if (!d(t) || t < 0)
throw new a('Assertion failed: length must be an integer >= 0');
  if (!l(e))
return o(t);
  var n = s(e, 'constructor');
  if (i && 'Object' === c(n) && null === (n = s(n, i)) && (n = void 0), void 0 === n)
return o(t);
  if (!u(n))
throw new a('C must be a constructor');
  return new n(t);
};