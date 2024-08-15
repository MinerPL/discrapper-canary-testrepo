var r = n(957578).Buffer;
function i(e) {
	!r.isBuffer(e) && (e = r.from(e));
	for (var t = (e.length / 4) | 0, n = Array(t), i = 0; i < t; i++) n[i] = e.readUInt32BE(4 * i);
	return n;
}
function a(e) {
	for (; 0 < e.length; e++) e[0] = 0;
}
function s(e, t, n, r, i) {
	for (var a, s, o, l, u = n[0], c = n[1], d = n[2], _ = n[3], E = e[0] ^ t[0], f = e[1] ^ t[1], h = e[2] ^ t[2], p = e[3] ^ t[3], m = 4, I = 1; I < i; I++) (a = u[E >>> 24] ^ c[(f >>> 16) & 255] ^ d[(h >>> 8) & 255] ^ _[255 & p] ^ t[m++]), (s = u[f >>> 24] ^ c[(h >>> 16) & 255] ^ d[(p >>> 8) & 255] ^ _[255 & E] ^ t[m++]), (o = u[h >>> 24] ^ c[(p >>> 16) & 255] ^ d[(E >>> 8) & 255] ^ _[255 & f] ^ t[m++]), (l = u[p >>> 24] ^ c[(E >>> 16) & 255] ^ d[(f >>> 8) & 255] ^ _[255 & h] ^ t[m++]), (E = a), (f = s), (h = o), (p = l);
	return (a = ((r[E >>> 24] << 24) | (r[(f >>> 16) & 255] << 16) | (r[(h >>> 8) & 255] << 8) | r[255 & p]) ^ t[m++]), (s = ((r[f >>> 24] << 24) | (r[(h >>> 16) & 255] << 16) | (r[(p >>> 8) & 255] << 8) | r[255 & E]) ^ t[m++]), (o = ((r[h >>> 24] << 24) | (r[(p >>> 16) & 255] << 16) | (r[(E >>> 8) & 255] << 8) | r[255 & f]) ^ t[m++]), (l = ((r[p >>> 24] << 24) | (r[(E >>> 16) & 255] << 16) | (r[(f >>> 8) & 255] << 8) | r[255 & h]) ^ t[m++]), [(a >>>= 0), (s >>>= 0), (o >>>= 0), (l >>>= 0)];
}
var o = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
	l = (function () {
		for (var e = Array(256), t = 0; t < 256; t++) t < 128 ? (e[t] = t << 1) : (e[t] = (t << 1) ^ 283);
		for (var n = [], r = [], i = [[], [], [], []], a = [[], [], [], []], s = 0, o = 0, l = 0; l < 256; ++l) {
			var u = o ^ (o << 1) ^ (o << 2) ^ (o << 3) ^ (o << 4);
			(u = (u >>> 8) ^ (255 & u) ^ 99), (n[s] = u), (r[u] = s);
			var c = e[s],
				d = e[c],
				_ = e[d],
				E = (257 * e[u]) ^ (16843008 * u);
			(i[0][s] = (E << 24) | (E >>> 8)), (i[1][s] = (E << 16) | (E >>> 16)), (i[2][s] = (E << 8) | (E >>> 24)), (i[3][s] = E), (E = (16843009 * _) ^ (65537 * d) ^ (257 * c) ^ (16843008 * s)), (a[0][u] = (E << 24) | (E >>> 8)), (a[1][u] = (E << 16) | (E >>> 16)), (a[2][u] = (E << 8) | (E >>> 24)), (a[3][u] = E), 0 === s ? (s = o = 1) : ((s = c ^ e[e[e[_ ^ c]]]), (o ^= e[e[o]]));
		}
		return {
			SBOX: n,
			INV_SBOX: r,
			SUB_MIX: i,
			INV_SUB_MIX: a
		};
	})();
function u(e) {
	(this._key = i(e)), this._reset();
}
(u.blockSize = 16),
	(u.keySize = 32),
	(u.prototype.blockSize = u.blockSize),
	(u.prototype.keySize = u.keySize),
	(u.prototype._reset = function () {
		for (var e = this._key, t = e.length, n = t + 6, r = (n + 1) * 4, i = [], a = 0; a < t; a++) i[a] = e[a];
		for (a = t; a < r; a++) {
			var s = i[a - 1];
			a % t == 0 ? ((s = (s << 8) | (s >>> 24)), (s = ((l.SBOX[s >>> 24] << 24) | (l.SBOX[(s >>> 16) & 255] << 16) | (l.SBOX[(s >>> 8) & 255] << 8) | l.SBOX[255 & s]) ^ (o[(a / t) | 0] << 24))) : t > 6 && a % t == 4 && (s = (l.SBOX[s >>> 24] << 24) | (l.SBOX[(s >>> 16) & 255] << 16) | (l.SBOX[(s >>> 8) & 255] << 8) | l.SBOX[255 & s]), (i[a] = i[a - t] ^ s);
		}
		for (var u = [], c = 0; c < r; c++) {
			var d = r - c,
				_ = i[d - (c % 4 ? 0 : 4)];
			c < 4 || d <= 4 ? (u[c] = _) : (u[c] = l.INV_SUB_MIX[0][l.SBOX[_ >>> 24]] ^ l.INV_SUB_MIX[1][l.SBOX[(_ >>> 16) & 255]] ^ l.INV_SUB_MIX[2][l.SBOX[(_ >>> 8) & 255]] ^ l.INV_SUB_MIX[3][l.SBOX[255 & _]]);
		}
		(this._nRounds = n), (this._keySchedule = i), (this._invKeySchedule = u);
	}),
	(u.prototype.encryptBlockRaw = function (e) {
		return s((e = i(e)), this._keySchedule, l.SUB_MIX, l.SBOX, this._nRounds);
	}),
	(u.prototype.encryptBlock = function (e) {
		var t = this.encryptBlockRaw(e),
			n = r.allocUnsafe(16);
		return n.writeUInt32BE(t[0], 0), n.writeUInt32BE(t[1], 4), n.writeUInt32BE(t[2], 8), n.writeUInt32BE(t[3], 12), n;
	}),
	(u.prototype.decryptBlock = function (e) {
		var t = (e = i(e))[1];
		(e[1] = e[3]), (e[3] = t);
		var n = s(e, this._invKeySchedule, l.INV_SUB_MIX, l.INV_SBOX, this._nRounds),
			a = r.allocUnsafe(16);
		return a.writeUInt32BE(n[0], 0), a.writeUInt32BE(n[3], 4), a.writeUInt32BE(n[2], 8), a.writeUInt32BE(n[1], 12), a;
	}),
	(u.prototype.scrub = function () {
		a(this._keySchedule), a(this._invKeySchedule), a(this._key);
	}),
	(e.exports.AES = u);
