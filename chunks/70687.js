var r = n(546299),
  i = n(261638),
  a = n(411108),
  s = r.rotl32,
  o = r.sum32,
  l = r.sum32_5,
  u = a.ft_1,
  c = i.BlockHash,
  d = [
1518500249,
1859775393,
2400959708,
3395469782
  ];

function _() {
  if (!(this instanceof _))
return new _();
  c.call(this), this.h = [
1732584193,
4023233417,
2562383102,
271733878,
3285377520
  ], this.W = Array(80);
}
r.inherits(_, c), e.exports = _, _.blockSize = 512, _.outSize = 160, _.hmacStrength = 80, _.padLength = 64, _.prototype._update = function(e, t) {
  for (var n = this.W, r = 0; r < 16; r++)
n[r] = e[t + r];
  for (; r < n.length; r++)
n[r] = s(n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16], 1);
  var i = this.h[0],
a = this.h[1],
c = this.h[2],
_ = this.h[3],
E = this.h[4];
  for (r = 0; r < n.length; r++) {
var f = ~~(r / 20),
  h = l(s(i, 5), u(f, a, c, _), E, n[r], d[f]);
E = _, _ = c, c = s(a, 30), a = i, i = h;
  }
  this.h[0] = o(this.h[0], i), this.h[1] = o(this.h[1], a), this.h[2] = o(this.h[2], c), this.h[3] = o(this.h[3], _), this.h[4] = o(this.h[4], E);
}, _.prototype._digest = function(e) {
  return 'hex' === e ? r.toHex32(this.h, 'big') : r.split32(this.h, 'big');
};