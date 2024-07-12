var r = n(957578).Buffer,
  i = n(292735);
e.exports = function(e, t, n, a) {
  if (!r.isBuffer(e) && (e = r.from(e, 'binary')), t && (!r.isBuffer(t) && (t = r.from(t, 'binary')), 8 !== t.length))
throw RangeError('salt should be Buffer with 8 byte length');
  for (var o = n / 8, s = r.alloc(o), l = r.alloc(a || 0), u = r.alloc(0); o > 0 || a > 0;) {
var c = new i();
c.update(u), c.update(e), t && c.update(t), u = c.digest();
var d = 0;
if (o > 0) {
  var _ = s.length - o;
  d = Math.min(o, u.length), u.copy(s, _, 0, d), o -= d;
}
if (d < u.length && a > 0) {
  var E = l.length - a,
    f = Math.min(a, u.length - d);
  u.copy(l, E, d, d + f), a -= f;
}
  }
  return u.fill(0), {
key: s,
iv: l
  };
};