n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(528734),
  i = n(951516),
  a = n(217224);

function o(e, t) {
  (0, i.Z)(2, arguments);
  var n = (0, a.Z)(t);
  n % 7 == 0 && (n -= 7);
  var o = (0, r.default)(e),
s = o.getUTCDay(),
l = n % 7,
u = ((l + 7) % 7 < 1 ? 7 : 0) + n - s;
  return o.setUTCDate(o.getUTCDate() + u), o;
}