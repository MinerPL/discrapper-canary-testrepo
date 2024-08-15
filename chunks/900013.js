var r = n(649786),
  i = n(436091),
  a = n(682653),
  s = n(661233);
e.exports = function(e, t, n) {
  if (!s(n))
return !1;
  var o = typeof t;
  return ('number' == o ? !!(i(n) && a(t, n.length)) : 'string' == o && t in n) && r(n[t], e);
};