var r = n(689118), i = n(997290), a = n(764900), o = n(957578).Buffer, s = n(877024), l = n(335613), u = n(315893), c = o.alloc(128);
function d(e, t) {
    a.call(this, 'digest'), 'string' == typeof t && (t = o.from(t));
    var n = 'sha512' === e || 'sha384' === e ? 128 : 64;
    this._alg = e, this._key = t, t.length > n ? t = ('rmd160' === e ? new l() : u(e)).update(t).digest() : t.length < n && (t = o.concat([
        t,
        c
    ], n));
    for (var r = this._ipad = o.allocUnsafe(n), i = this._opad = o.allocUnsafe(n), s = 0; s < n; s++)
        r[s] = 54 ^ t[s], i[s] = 92 ^ t[s];
    this._hash = 'rmd160' === e ? new l() : u(e), this._hash.update(r);
}
r(d, a), d.prototype._update = function (e) {
    this._hash.update(e);
}, d.prototype._final = function () {
    var e = this._hash.digest();
    return ('rmd160' === this._alg ? new l() : u(this._alg)).update(this._opad).update(e).digest();
}, e.exports = function (e, t) {
    return 'rmd160' === (e = e.toLowerCase()) || 'ripemd160' === e ? new d('rmd160', t) : 'md5' === e ? new i(s, t) : new d(e, t);
};
