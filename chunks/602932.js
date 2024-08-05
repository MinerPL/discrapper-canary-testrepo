var r, i = n(161581),
  a = n(197187),
  s = n(354848),
  o = n(177448),
  l = n(626544),
  u = n(50754),
  c = n(202934),
  d = i.Function;
var _ = /MSIE .\./.test(l) || o && ((r = i.Bun.version.split('.')).length < 3 || '0' === r[0] && (r[1] < 3 || '3' === r[1] && '0' === r[2]));
e.exports = function(e, t) {
  var n = t ? 2 : 1;
  return _ ? function(r, i) {
var o = c(arguments.length, 1) > n,
  l = s(r) ? r : d(r),
  _ = o ? u(arguments, n) : [],
  E = o ? function() {
    a(l, this, _);
  } : l;
return t ? e(E, i) : e(E);
  } : e;
};