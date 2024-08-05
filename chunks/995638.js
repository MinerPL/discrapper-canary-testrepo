n.r(t), n.d(t, {
  default: function() {
return s;
  }
});
var r = n(424421),
  i = n(767629),
  a = n(951516);

function s(e, t) {
  (0, a.Z)(2, arguments);
  var n = (0, i.default)(e),
s = (0, i.default)(t);
  return Math.round((n.getTime() - (0, r.Z)(n) - (s.getTime() - (0, r.Z)(s))) / 86400000);
}