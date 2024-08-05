var r = n(689118),
  i = n(676972),
  a = n(957578).Buffer,
  s = [
1518500249,
1859775393,
-1894007588,
-899497514
  ],
  o = Array(80);

function l() {
  this.init(), this._w = o, i.call(this, 64, 56);
}
r(l, i), l.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
l.prototype._update = function(e) {
  for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, a = 0 | this._d, o = 0 | this._e, l = 0; l < 16; ++l)
t[l] = e.readInt32BE(4 * l);
  for (; l < 80; ++l) {
;
t[l] = (c = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16]) << 1 | c >>> 31;
  }
  for (var u = 0; u < 80; ++u) {
var c, d, _, E, f, h, p, m = ~~(u / 20);
var I = ((d = n) << 5 | d >>> 27) + (_ = m, E = r, f = i, h = a, 0 === _ ? E & f | ~E & h : 2 === _ ? E & f | E & h | f & h : E ^ f ^ h) + o + t[u] + s[m] | 0;
o = a, a = i, i = (p = r) << 30 | p >>> 2, r = n, n = I;
  }
  this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = a + this._d | 0, this._e = o + this._e | 0;
}, l.prototype._hash = function() {
  var e = a.allocUnsafe(20);
  return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e;
}, e.exports = l;