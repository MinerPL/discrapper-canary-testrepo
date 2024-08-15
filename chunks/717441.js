var e = n(49693),
  o = n(959318),
  i = RangeError;
t.exports = function(t, r, n, u) {
  var f = e(t),
a = o(n),
c = a < 0 ? f + a : a;
  if (c >= f || c < 0)
throw i('Incorrect index');
  for (var s = new r(f), y = 0; y < f; y++)
s[y] = y === c ? u : t[y];
  return s;
};