var r = n(390976),
  i = n(690244),
  a = n(781421),
  o = n(815329),
  s = i('%Function.prototype.apply%'),
  l = i('%Function.prototype.call%'),
  u = i('%Reflect.apply%', !0) || r.call(l, s),
  c = n(583584),
  d = i('%Math.max%');
e.exports = function(e) {
  if ('function' != typeof e)
throw new o('a function is required');
  var t = u(r, l, arguments);
  return a(t, 1 + d(0, e.length - (arguments.length - 1)), !0);
};
var _ = function() {
  return u(r, s, arguments);
};
c ? c(e.exports, 'apply', {
  value: _
}) : e.exports.apply = _;