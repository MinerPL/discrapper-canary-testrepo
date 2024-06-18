var n = e(585606),
  o = e(443735),
  i = e(402428),
  a = e(207757),
  u = e(830911),
  f = e(556868),
  c = Object.prototype.hasOwnProperty;
t.exports = function(t, r) {
  var e = i(t),
    s = !e && o(t),
    p = !e && !s && a(t),
    l = !e && !s && !p && f(t),
    h = e || s || p || l,
    v = h ? n(t.length, String) : [],
    d = v.length;
  for (var b in t)(r || c.call(t, b)) && !(h && ("length" == b || p && ("offset" == b || "parent" == b) || l && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || u(b, d))) && v.push(b);
  return v
}