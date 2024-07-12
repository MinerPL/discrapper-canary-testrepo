n.r(t), n.d(t, {
  default: function() {
return s;
  }
});
var r = n(528734),
  i = n(780264),
  a = n(621359),
  o = n(951516);

function s(e) {
  (0, o.Z)(1, arguments);
  var t = (0, r.default)(e);
  return Math.round(((0, i.Z)(t).getTime() - (0, a.Z)(t).getTime()) / 604800000) + 1;
}