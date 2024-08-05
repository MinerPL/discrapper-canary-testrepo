var r = n(690244),
  i = n(192853),
  a = r('%TypeError%'),
  s = n(156700),
  o = r('%Reflect.apply%', !0) || i('Function.prototype.apply');
e.exports = function(e, t) {
  var n = arguments.length > 2 ? arguments[2] : [];
  if (!s(n))
throw new a('Assertion failed: optional `argumentsList`, if provided, must be a List');
  return o(e, t, n);
};