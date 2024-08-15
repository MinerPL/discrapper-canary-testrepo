var r = n(538315),
  i = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
  a = Object.prototype.toString,
  s = Array.prototype.concat,
  o = n(445086),
  l = n(768175)(),
  u = function(e, t, n, r) {
if (t in e) {
  if (!0 === r) {
    if (e[t] === n)
      return;
  } else {
    var i;
    if (!('function' == typeof(i = r) && '[object Function]' === a.call(i)) || !r())
      return;
  }
}
l ? o(e, t, n, !0) : o(e, t, n);
  },
  c = function(e, t) {
var n = arguments.length > 2 ? arguments[2] : {},
  a = r(t);
i && (a = s.call(a, Object.getOwnPropertySymbols(t)));
for (var o = 0; o < a.length; o += 1)
  u(e, a[o], t[a[o]], n[a[o]]);
  };
c.supportsDescriptors = !!l, e.exports = c;