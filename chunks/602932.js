var r, i = n(161581),
  a = n(197187),
  o = n(354848),
  s = n(177448),
  l = n(626544),
  u = n(50754),
  c = n(202934),
  d = i.Function;
var _ = /MSIE .\./.test(l) || s && ((r = i.Bun.version.split('.')).length < 3 || '0' === r[0] && (r[1] < 3 || '3' === r[1] && '0' === r[2]));
e.exports = function(e, t) {
  var n = t ? 2 : 1;
  return _ ? function(r, i) {
var s = c(arguments.length, 1) > n,
  l = o(r) ? r : d(r),
  _ = s ? u(arguments, n) : [],
  E = s ? function() {
    a(l, this, _);
  } : l;
return t ? e(E, i) : e(E);
  } : e;
};