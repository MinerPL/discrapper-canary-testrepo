var n = t(484155),
  a = t(599773),
  i = t(730179),
  l = Math.min;
e.exports = function(e, s) {
  if ((e = i(e)) < 1 || e > 9007199254740991) return [];
  var t = 4294967295,
    r = l(e, 4294967295);
  s = a(s), e -= 4294967295;
  for (var o = n(r, s); ++t < e;) s(t);
  return o
}