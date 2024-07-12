n.r(t), n.d(t, {
  default: function() {
return s;
  }
});
var r = n(217224),
  i = n(528734),
  a = n(984181),
  o = n(951516);

function s(e, t) {
  (0, o.Z)(2, arguments);
  var n = (0, i.default)(e),
s = (0, r.Z)(t),
l = n.getFullYear(),
u = n.getDate(),
c = new Date(0);
  c.setFullYear(l, s, 15), c.setHours(0, 0, 0, 0);
  var d = (0, a.Z)(c);
  return n.setMonth(s, Math.min(u, d)), n;
}