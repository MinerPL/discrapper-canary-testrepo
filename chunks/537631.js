var r = n(690244),
  i = r('%Number%'),
  a = r('%RegExp%'),
  o = r('%TypeError%'),
  s = r('%parseInt%'),
  l = n(192853),
  u = n(385097),
  c = l('String.prototype.slice'),
  d = u(/^0b[01]+$/i),
  _ = u(/^0o[0-7]+$/i),
  E = u(/^[-+]0x[0-9a-f]+$/i),
  f = u(new a('[\x85\u200B\uFFFE]', 'g')),
  h = n(761652),
  p = n(632384);
e.exports = function e(t) {
  if ('String' !== p(t))
throw new o('Assertion failed: `argument` is not a String');
  if (d(t))
return i(s(c(t, 2), 2));
  if (_(t))
return i(s(c(t, 2), 8));
  if (f(t) || E(t))
return NaN;
  var n = h(t);
  return n !== t ? e(n) : i(t);
};