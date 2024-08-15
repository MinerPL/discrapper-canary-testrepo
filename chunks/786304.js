var r = n(21841),
	i = n(689118),
	a = n(449348),
	s = n(922689);
function o(e, t) {
	r.equal(t.length, 24, 'Invalid key length');
	var n = t.slice(0, 8),
		i = t.slice(8, 16),
		a = t.slice(16, 24);
	'encrypt' === e
		? (this.ciphers = [
				s.create({
					type: 'encrypt',
					key: n
				}),
				s.create({
					type: 'decrypt',
					key: i
				}),
				s.create({
					type: 'encrypt',
					key: a
				})
			])
		: (this.ciphers = [
				s.create({
					type: 'decrypt',
					key: a
				}),
				s.create({
					type: 'encrypt',
					key: i
				}),
				s.create({
					type: 'decrypt',
					key: n
				})
			]);
}
function l(e) {
	a.call(this, e);
	var t = new o(this.type, this.options.key);
	this._edeState = t;
}
i(l, a),
	(e.exports = l),
	(l.create = function (e) {
		return new l(e);
	}),
	(l.prototype._update = function (e, t, n, r) {
		var i = this._edeState;
		i.ciphers[0]._update(e, t, n, r), i.ciphers[1]._update(n, r, n, r), i.ciphers[2]._update(n, r, n, r);
	}),
	(l.prototype._pad = s.prototype._pad),
	(l.prototype._unpad = s.prototype._unpad);
