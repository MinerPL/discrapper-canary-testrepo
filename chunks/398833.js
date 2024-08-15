var r = n(413135).Buffer,
	i = n(136924),
	a = n(814033);
e.exports = function (e) {
	return new o(e);
};
var s = {
	secp256k1: {
		name: 'secp256k1',
		byteLength: 32
	},
	secp224r1: {
		name: 'p224',
		byteLength: 28
	},
	prime256v1: {
		name: 'p256',
		byteLength: 32
	},
	prime192v1: {
		name: 'p192',
		byteLength: 24
	},
	ed25519: {
		name: 'ed25519',
		byteLength: 32
	},
	secp384r1: {
		name: 'p384',
		byteLength: 48
	},
	secp521r1: {
		name: 'p521',
		byteLength: 66
	}
};
function o(e) {
	(this.curveType = s[e]), !this.curveType && (this.curveType = { name: e }), (this.curve = new i.ec(this.curveType.name)), (this.keys = void 0);
}
function l(e, t, n) {
	!Array.isArray(e) && (e = e.toArray());
	var i = new r(e);
	if (n && i.length < n) {
		var a = new r(n - i.length);
		a.fill(0), (i = r.concat([a, i]));
	}
	return t ? i.toString(t) : i;
}
(s.p224 = s.secp224r1),
	(s.p256 = s.secp256r1 = s.prime256v1),
	(s.p192 = s.secp192r1 = s.prime192v1),
	(s.p384 = s.secp384r1),
	(s.p521 = s.secp521r1),
	(o.prototype.generateKeys = function (e, t) {
		return (this.keys = this.curve.genKeyPair()), this.getPublicKey(e, t);
	}),
	(o.prototype.computeSecret = function (e, t, n) {
		return (t = t || 'utf8'), !r.isBuffer(e) && (e = new r(e, t)), l(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), n, this.curveType.byteLength);
	}),
	(o.prototype.getPublicKey = function (e, t) {
		var n = this.keys.getPublic('compressed' === t, !0);
		return 'hybrid' === t && (n[n.length - 1] % 2 ? (n[0] = 7) : (n[0] = 6)), l(n, e);
	}),
	(o.prototype.getPrivateKey = function (e) {
		return l(this.keys.getPrivate(), e);
	}),
	(o.prototype.setPublicKey = function (e, t) {
		return (t = t || 'utf8'), !r.isBuffer(e) && (e = new r(e, t)), this.keys._importPublic(e), this;
	}),
	(o.prototype.setPrivateKey = function (e, t) {
		(t = t || 'utf8'), !r.isBuffer(e) && (e = new r(e, t));
		var n = new a(e);
		return (n = n.toString(16)), (this.keys = this.curve.genKeyPair()), this.keys._importPrivate(n), this;
	});
