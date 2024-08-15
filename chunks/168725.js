var r = n(413135).Buffer,
	i = n(814033),
	a = new (n(687363))(),
	s = new i(24),
	o = new i(11),
	l = new i(10),
	u = new i(3),
	c = new i(7),
	d = n(988608),
	_ = n(706178);
function E(e, t) {
	return (t = t || 'utf8'), !r.isBuffer(e) && (e = new r(e, t)), (this._pub = new i(e)), this;
}
function f(e, t) {
	return (t = t || 'utf8'), !r.isBuffer(e) && (e = new r(e, t)), (this._priv = new i(e)), this;
}
e.exports = p;
var h = {};
function p(e, t, n) {
	this.setGenerator(t),
		(this.__prime = new i(e)),
		(this._prime = i.mont(this.__prime)),
		(this._primeLen = e.length),
		(this._pub = void 0),
		(this._priv = void 0),
		(this._primeCode = void 0),
		n ? ((this.setPublicKey = E), (this.setPrivateKey = f)) : (this._primeCode = 8);
}
function I(e, t) {
	var n = new r(e.toArray());
	return t ? n.toString(t) : n;
}
Object.defineProperty(p.prototype, 'verifyError', {
	enumerable: !0,
	get: function () {
		return (
			'number' != typeof this._primeCode &&
				(this._primeCode = (function (e, t) {
					var n,
						r = t.toString('hex'),
						i = [r, e.toString(16)].join('_');
					if (i in h) return h[i];
					var _ = 0;
					if (e.isEven() || !d.simpleSieve || !d.fermatTest(e) || !a.test(e))
						return (_ += 1), '02' === r || '05' === r ? (_ += 8) : (_ += 4), (h[i] = _), _;
					switch ((!a.test(e.shrn(1)) && (_ += 2), r)) {
						case '02':
							e.mod(s).cmp(o) && (_ += 8);
							break;
						case '05':
							(n = e.mod(l)).cmp(u) && n.cmp(c) && (_ += 8);
							break;
						default:
							_ += 4;
					}
					return (h[i] = _), _;
				})(this.__prime, this.__gen)),
			this._primeCode
		);
	}
}),
	(p.prototype.generateKeys = function () {
		return (
			!this._priv && (this._priv = new i(_(this._primeLen))),
			(this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed()),
			this.getPublicKey()
		);
	}),
	(p.prototype.computeSecret = function (e) {
		var t = new r((e = (e = new i(e)).toRed(this._prime)).redPow(this._priv).fromRed().toArray()),
			n = this.getPrime();
		if (t.length < n.length) {
			var a = new r(n.length - t.length);
			a.fill(0), (t = r.concat([a, t]));
		}
		return t;
	}),
	(p.prototype.getPublicKey = function (e) {
		return I(this._pub, e);
	}),
	(p.prototype.getPrivateKey = function (e) {
		return I(this._priv, e);
	}),
	(p.prototype.getPrime = function (e) {
		return I(this.__prime, e);
	}),
	(p.prototype.getGenerator = function (e) {
		return I(this._gen, e);
	}),
	(p.prototype.setGenerator = function (e, t) {
		return (t = t || 'utf8'), !r.isBuffer(e) && (e = new r(e, t)), (this.__gen = e), (this._gen = new i(e)), this;
	});
