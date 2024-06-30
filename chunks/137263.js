var r = n(689118), i = n(676972), a = n(957578).Buffer, o = [
        1518500249,
        1859775393,
        -1894007588,
        -899497514
    ], s = Array(80);
function l() {
    this.init(), this._w = s, i.call(this, 64, 56);
}
r(l, i), l.prototype.init = function () {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
l.prototype._update = function (e) {
    for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, a = 0 | this._d, s = 0 | this._e, l = 0; l < 16; ++l)
        t[l] = e.readInt32BE(4 * l);
    for (; l < 80; ++l)
        t[l] = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16];
    for (var u = 0; u < 80; ++u) {
        var c, d, _, E, f, h, p = ~~(u / 20);
        var m = ((c = n) << 5 | c >>> 27) + (d = p, _ = r, E = i, f = a, 0 === d ? _ & E | ~_ & f : 2 === d ? _ & E | _ & f | E & f : _ ^ E ^ f) + s + t[u] + o[p] | 0;
        s = a, a = i, i = (h = r) << 30 | h >>> 2, r = n, n = m;
    }
    this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = a + this._d | 0, this._e = s + this._e | 0;
}, l.prototype._hash = function () {
    var e = a.allocUnsafe(20);
    return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e;
}, e.exports = l;
