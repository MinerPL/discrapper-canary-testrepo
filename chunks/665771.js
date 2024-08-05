n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(528734),
  i = n(951516),
  a = n(964415);

function s(e) {
  (0, i.Z)(1, arguments);
  var t = (0, r.default)(e),
n = t.getUTCFullYear(),
s = new Date(0);
  s.setUTCFullYear(n + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var o = (0, a.Z)(s),
l = new Date(0);
  l.setUTCFullYear(n, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var u = (0, a.Z)(l);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1;
}