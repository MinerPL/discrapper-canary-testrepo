var r = n(690244),
  i = n(49662),
  a = r('%SyntaxError%'),
  s = r('%TypeError%'),
  o = n(395238),
  l = n(75150),
  u = n(860438),
  c = n(365916),
  d = n(828148),
  _ = n(240919),
  E = n(148309),
  f = n(632384),
  h = n(905125);
e.exports = function(e, t, n) {
  if ('Object' !== f(e))
throw new s('Assertion failed: O must be an Object');
  if (!d(t))
throw new s('Assertion failed: P must be a Property Key');
  if (!o({
  Type: f,
  IsDataDescriptor: u,
  IsAccessorDescriptor: l
}, n))
throw new s('Assertion failed: Desc must be a Property Descriptor');
  if (!i) {
if (l(n))
  throw new a('This environment does not support accessor property descriptors.');
var r = !(t in e) && n['[[Writable]]'] && n['[[Enumerable]]'] && n['[[Configurable]]'] && '[[Value]]' in n,
  p = t in e && (!('[[Configurable]]' in n) || n['[[Configurable]]']) && (!('[[Enumerable]]' in n) || n['[[Enumerable]]']) && (!('[[Writable]]' in n) || n['[[Writable]]']) && '[[Value]]' in n;
if (r || p)
  return e[t] = n['[[Value]]'], E(e[t], n['[[Value]]']);
throw new a('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');
  }
  var m = i(e, t),
I = m && _(m),
T = c(e);
  return h(e, t, T, n, I);
};