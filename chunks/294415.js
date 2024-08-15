var r = n(689118),
	i = n(997290),
	a = n(764900),
	s = n(957578).Buffer,
	o = n(877024),
	l = n(335613),
	u = n(315893),
	c = s.alloc(128);
function d(e, t) {
	a.call(this, 'digest'), 'string' == typeof t && (t = s.from(t));
	var n = 'sha512' === e || 'sha384' === e ? 128 : 64;
	(this._alg = e), (this._key = t), t.length > n ? (t = ('rmd160' === e ? new l() : u(e)).update(t).digest()) : t.length < n && (t = s.concat([t, c], n));
	for (var r = (this._ipad = s.allocUnsafe(n)), i = (this._opad = s.allocUnsafe(n)), o = 0; o < n; o++) (r[o] = 54 ^ t[o]), (i[o] = 92 ^ t[o]);
	(this._hash = 'rmd160' === e ? new l() : u(e)), this._hash.update(r);
}
r(d, a),
	(d.prototype._update = function (e) {
		this._hash.update(e);
	}),
	(d.prototype._final = function () {
		var e = this._hash.digest();
		return ('rmd160' === this._alg ? new l() : u(this._alg)).update(this._opad).update(e).digest();
	}),
	(e.exports = function (e, t) {
		return 'rmd160' === (e = e.toLowerCase()) || 'ripemd160' === e ? new d('rmd160', t) : 'md5' === e ? new i(o, t) : new d(e, t);
	});
