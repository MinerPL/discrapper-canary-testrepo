var r = n(706165),
  i = n(690244)('%TypeError%'),
  a = n(632384),
  s = n(710157),
  o = n(713720);
e.exports = function(e) {
  if ('Object' !== a(e))
throw new i('ToPropertyDescriptor requires an object');
  var t = {};
  if (r(e, 'enumerable') && (t['[[Enumerable]]'] = s(e.enumerable)), r(e, 'configurable') && (t['[[Configurable]]'] = s(e.configurable)), r(e, 'value') && (t['[[Value]]'] = e.value), r(e, 'writable') && (t['[[Writable]]'] = s(e.writable)), r(e, 'get')) {
var n = e.get;
if (void 0 !== n && !o(n))
  throw new i('getter must be a function');
t['[[Get]]'] = n;
  }
  if (r(e, 'set')) {
var l = e.set;
if (void 0 !== l && !o(l))
  throw new i('setter must be a function');
t['[[Set]]'] = l;
  }
  if ((r(t, '[[Get]]') || r(t, '[[Set]]')) && (r(t, '[[Value]]') || r(t, '[[Writable]]')))
throw new i('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  return t;
};