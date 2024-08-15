let r = n(689118),
	i = n(814033),
	a = n(873994).DecoderBuffer,
	s = n(206424),
	o = n(375990);
function l(e) {
	(this.enc = 'der'), (this.name = e.name), (this.entity = e), (this.tree = new u()), this.tree._init(e.body);
}
function u(e) {
	s.call(this, 'der', e);
}
function c(e, t) {
	let n = e.readUInt8(t);
	if (e.isError(n)) return n;
	let r = o.tagClass[n >> 6],
		i = (32 & n) == 0;
	if ((31 & n) == 31) {
		let r = n;
		for (n = 0; (128 & r) == 128; ) {
			if (((r = e.readUInt8(t)), e.isError(r))) return r;
			(n <<= 7), (n |= 127 & r);
		}
	} else n &= 31;
	let a = o.tag[n];
	return {
		cls: r,
		primitive: i,
		tag: n,
		tagStr: a
	};
}
function d(e, t, n) {
	let r = e.readUInt8(n);
	if (e.isError(r)) return r;
	if (!t && 128 === r) return null;
	if ((128 & r) == 0) return r;
	let i = 127 & r;
	if (i > 4) return e.error('length octect is too long');
	r = 0;
	for (let t = 0; t < i; t++) {
		r <<= 8;
		let t = e.readUInt8(n);
		if (e.isError(t)) return t;
		r |= t;
	}
	return r;
}
(e.exports = l),
	(l.prototype.decode = function (e, t) {
		return !a.isDecoderBuffer(e) && (e = new a(e, t)), this.tree._decode(e, t);
	}),
	r(u, s),
	(u.prototype._peekTag = function (e, t, n) {
		if (e.isEmpty()) return !1;
		let r = e.save(),
			i = c(e, 'Failed to peek tag: "' + t + '"');
		return e.isError(i) ? i : (e.restore(r), i.tag === t || i.tagStr === t || i.tagStr + 'of' === t || n);
	}),
	(u.prototype._decodeTag = function (e, t, n) {
		let r = c(e, 'Failed to decode tag of "' + t + '"');
		if (e.isError(r)) return r;
		let i = d(e, r.primitive, 'Failed to get length of "' + t + '"');
		if (e.isError(i)) return i;
		if (!n && r.tag !== t && r.tagStr !== t && r.tagStr + 'of' !== t) return e.error('Failed to match tag: "' + t + '"');
		if (r.primitive || null !== i) return e.skip(i, 'Failed to match body of: "' + t + '"');
		let a = e.save(),
			s = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
		return e.isError(s) ? s : ((i = e.offset - a.offset), e.restore(a), e.skip(i, 'Failed to match body of: "' + t + '"'));
	}),
	(u.prototype._skipUntilEnd = function (e, t) {
		for (;;) {
			let n;
			let r = c(e, t);
			if (e.isError(r)) return r;
			let i = d(e, r.primitive, t);
			if (e.isError(i)) return i;
			if (((n = r.primitive || null !== i ? e.skip(i) : this._skipUntilEnd(e, t)), e.isError(n))) return n;
			if ('end' === r.tagStr) break;
		}
	}),
	(u.prototype._decodeList = function (e, t, n, r) {
		let i = [];
		for (; !e.isEmpty(); ) {
			let t = this._peekTag(e, 'end');
			if (e.isError(t)) return t;
			let a = n.decode(e, 'der', r);
			if (e.isError(a) && t) break;
			i.push(a);
		}
		return i;
	}),
	(u.prototype._decodeStr = function (e, t) {
		if ('bitstr' === t) {
			let t = e.readUInt8();
			return e.isError(t)
				? t
				: {
						unused: t,
						data: e.raw()
					};
		}
		if ('bmpstr' === t) {
			let t = e.raw();
			if (t.length % 2 == 1) return e.error('Decoding of string type: bmpstr length mismatch');
			let n = '';
			for (let e = 0; e < t.length / 2; e++) n += String.fromCharCode(t.readUInt16BE(2 * e));
			return n;
		}
		if ('numstr' === t) {
			let t = e.raw().toString('ascii');
			return this._isNumstr(t) ? t : e.error('Decoding of string type: numstr unsupported characters');
		} else if ('octstr' === t) return e.raw();
		else if ('objDesc' === t) return e.raw();
		else if ('printstr' === t) {
			let t = e.raw().toString('ascii');
			return this._isPrintstr(t) ? t : e.error('Decoding of string type: printstr unsupported characters');
		} else if (/str$/.test(t)) return e.raw().toString();
		else return e.error('Decoding of string type: ' + t + ' unsupported');
	}),
	(u.prototype._decodeObjid = function (e, t, n) {
		let r;
		let i = [],
			a = 0,
			s = 0;
		for (; !e.isEmpty(); ) (s = e.readUInt8()), (a <<= 7), (a |= 127 & s), (128 & s) == 0 && (i.push(a), (a = 0));
		128 & s && i.push(a);
		let o = (i[0] / 40) | 0,
			l = i[0] % 40;
		if (((r = n ? i : [o, l].concat(i.slice(1))), t)) {
			let e = t[r.join(' ')];
			void 0 === e && (e = t[r.join('.')]), void 0 !== e && (r = e);
		}
		return r;
	}),
	(u.prototype._decodeTime = function (e, t) {
		let n, r, i, a, s, o;
		let l = e.raw().toString();
		if ('gentime' === t) (n = 0 | l.slice(0, 4)), (r = 0 | l.slice(4, 6)), (i = 0 | l.slice(6, 8)), (a = 0 | l.slice(8, 10)), (s = 0 | l.slice(10, 12)), (o = 0 | l.slice(12, 14));
		else {
			if ('utctime' !== t) return e.error('Decoding ' + t + ' time is not supported yet');
			(n = 0 | l.slice(0, 2)), (r = 0 | l.slice(2, 4)), (i = 0 | l.slice(4, 6)), (a = 0 | l.slice(6, 8)), (s = 0 | l.slice(8, 10)), (o = 0 | l.slice(10, 12)), (n = n < 70 ? 2000 + n : 1900 + n);
		}
		return Date.UTC(n, r - 1, i, a, s, o, 0);
	}),
	(u.prototype._decodeNull = function () {
		return null;
	}),
	(u.prototype._decodeBool = function (e) {
		let t = e.readUInt8();
		return e.isError(t) ? t : 0 !== t;
	}),
	(u.prototype._decodeInt = function (e, t) {
		let n = new i(e.raw());
		return t && (n = t[n.toString(10)] || n), n;
	}),
	(u.prototype._use = function (e, t) {
		return 'function' == typeof e && (e = e(t)), e._getDecoder('der').tree;
	});
