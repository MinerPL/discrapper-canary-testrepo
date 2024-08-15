var r = n(689118),
	i = n(957578).Buffer,
	a = n(764900),
	s = i.alloc(128);
function o(e, t) {
	a.call(this, 'digest'),
		'string' == typeof t && (t = i.from(t)),
		(this._alg = e),
		(this._key = t),
		t.length > 64 ? (t = e(t)) : t.length < 64 && (t = i.concat([t, s], 64));
	for (var n = (this._ipad = i.allocUnsafe(64)), r = (this._opad = i.allocUnsafe(64)), o = 0; o < 64; o++)
		(n[o] = 54 ^ t[o]), (r[o] = 92 ^ t[o]);
	this._hash = [n];
}
r(o, a),
	(o.prototype._update = function (e) {
		this._hash.push(e);
	}),
	(o.prototype._final = function () {
		var e = this._alg(i.concat(this._hash));
		return this._alg(i.concat([this._opad, e]));
	}),
	(e.exports = o);
