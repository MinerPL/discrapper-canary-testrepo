var r = n(685053),
	i = r.assert,
	a = r.parseBytes,
	s = r.cachedProperty;
function o(e, t) {
	(this.eddsa = e), (this._secret = a(t.secret)), e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = a(t.pub));
}
(o.fromPublic = function (e, t) {
	return t instanceof o ? t : new o(e, { pub: t });
}),
	(o.fromSecret = function (e, t) {
		return t instanceof o ? t : new o(e, { secret: t });
	}),
	(o.prototype.secret = function () {
		return this._secret;
	}),
	s(o, 'pubBytes', function () {
		return this.eddsa.encodePoint(this.pub());
	}),
	s(o, 'pub', function () {
		return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
	}),
	s(o, 'privBytes', function () {
		var e = this.eddsa,
			t = this.hash(),
			n = e.encodingLength - 1,
			r = t.slice(0, e.encodingLength);
		return (r[0] &= 248), (r[n] &= 127), (r[n] |= 64), r;
	}),
	s(o, 'priv', function () {
		return this.eddsa.decodeInt(this.privBytes());
	}),
	s(o, 'hash', function () {
		return this.eddsa.hash().update(this.secret()).digest();
	}),
	s(o, 'messagePrefix', function () {
		return this.hash().slice(this.eddsa.encodingLength);
	}),
	(o.prototype.sign = function (e) {
		return i(this._secret, 'KeyPair can only verify'), this.eddsa.sign(e, this);
	}),
	(o.prototype.verify = function (e, t) {
		return this.eddsa.verify(e, t, this);
	}),
	(o.prototype.getSecret = function (e) {
		return i(this._secret, 'KeyPair is public only'), r.encode(this.secret(), e);
	}),
	(o.prototype.getPublic = function (e) {
		return r.encode(this.pubBytes(), e);
	}),
	(e.exports = o);
