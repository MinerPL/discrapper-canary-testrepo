var r = n(4148),
  i = n(665679),
  a = i('%Function.prototype.apply%'),
  s = i('%Function.prototype.call%'),
  o = i('%Reflect.apply%', !0) || r.call(s, a),
  l = i('%Object.getOwnPropertyDescriptor%', !0),
  u = i('%Object.defineProperty%', !0),
  c = i('%Math.max%');
if (u)
  try {
u({}, 'a', {
  value: 1
});
  } catch (e) {
u = null;
  }
e.exports = function(e) {
  var t = o(r, s, arguments);
  return l && u && l(t, 'length').configurable && u(t, 'length', {
value: 1 + c(0, e.length - (arguments.length - 1))
  }), t;
};
var d = function() {
  return o(r, a, arguments);
};
u ? u(e.exports, 'apply', {
  value: d
}) : e.exports.apply = d;