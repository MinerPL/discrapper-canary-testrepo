var r = n(134533),
  i = n(690244),
  a = r() && i('%Object.defineProperty%', !0),
  s = r.hasArrayLengthDefineBug(),
  o = s && n(453312),
  l = n(192853)('Object.prototype.propertyIsEnumerable');
e.exports = function(e, t, n, r, i, u) {
  if (!a) {
if (!e(u) || !u['[[Configurable]]'] || !u['[[Writable]]'] || i in r && l(r, i) !== !!u['[[Enumerable]]'])
  return !1;
var c = u['[[Value]]'];
return r[i] = c, t(r[i], c);
  }
  return s && 'length' === i && '[[Value]]' in u && o(r) && r.length !== u['[[Value]]'] ? (r.length = u['[[Value]]'], r.length === u['[[Value]]']) : (a(r, i, n(u)), !0);
};