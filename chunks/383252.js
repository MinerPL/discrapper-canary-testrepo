n(535213)();
var r = n(245252),
  i = n(665855),
  a = n(247498),
  o = n(350506),
  s = n(665679),
  l = n(705806),
  u = l(s('%Promise.all%')),
  c = l(s('%Promise.reject%'));
e.exports = function(e) {
  var t = this;
  if ('Object' !== i(t))
throw TypeError('`this` value must be an object');
  return u(t, o(a(e), function(e) {
var n = r(t, e);
try {
  return n.then(function(e) {
    return {
      status: 'fulfilled',
      value: e
    };
  }, function(e) {
    return {
      status: 'rejected',
      reason: e
    };
  });
} catch (e) {
  return c(t, e);
}
  }));
};