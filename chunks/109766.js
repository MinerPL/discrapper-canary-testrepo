
function r(e, t) {
  void 0 === t && (t = 0);
  var n = e % 19,
r = Math.floor(e / 100),
i = e % 100,
a = Math.floor(r / 4),
s = Math.floor((r + 8) / 25),
o = Math.floor((r - s + 1) / 3),
l = Math.floor(19 * n + r - a - o + 15) % 30,
u = Math.floor(i / 4),
c = Math.floor(32 + r % 4 * 2 + 2 * u - l - i % 4) % 7,
d = Math.floor((n + 11 * l + 22 * c) / 451),
_ = Math.floor((l + c - 7 * d + 114) / 31);
  return [Math.ceil((Date.UTC(e, _ - 1, (l + c - 7 * d + 114) % 31 + 1 + t) - Date.UTC(e, 0, 1)) / 86400000)];
}
n.d(t, {
  d: function() {
return r;
  }
});