var r = n(21841),
	i = n(689118),
	a = {};
function s(e) {
	r.equal(e.length, 8, 'Invalid IV length'), (this.iv = Array(8));
	for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t];
}
(t.instantiate = function (e) {
	function t(t) {
		e.call(this, t), this._cbcInit();
	}
	i(t, e);
	for (var n = Object.keys(a), r = 0; r < n.length; r++) {
		var s = n[r];
		t.prototype[s] = a[s];
	}
	return (
		(t.create = function (e) {
			return new t(e);
		}),
		t
	);
}),
	(a._cbcInit = function () {
		var e = new s(this.options.iv);
		this._cbcState = e;
	}),
	(a._update = function (e, t, n, r) {
		var i = this._cbcState,
			a = this.constructor.super_.prototype,
			s = i.iv;
		if ('encrypt' === this.type) {
			for (var o = 0; o < this.blockSize; o++) s[o] ^= e[t + o];
			a._update.call(this, s, 0, n, r);
			for (var o = 0; o < this.blockSize; o++) s[o] = n[r + o];
		} else {
			a._update.call(this, e, t, n, r);
			for (var o = 0; o < this.blockSize; o++) n[r + o] ^= s[o];
			for (var o = 0; o < this.blockSize; o++) s[o] = e[t + o];
		}
	});
