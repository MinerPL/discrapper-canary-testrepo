var r = n(223428),
	i = n(855467),
	a = n(972566),
	s = n(814033),
	o = n(530917),
	l = n(108381),
	u = n(895598),
	c = n(957578).Buffer;
e.exports = function (e, t, n) {
	d = e.padding ? e.padding : n ? 1 : 4;
	var d,
		_,
		E = r(e),
		f = E.modulus.byteLength();
	if (t.length > f || new s(t).cmp(E.modulus) >= 0) throw Error('decryption error');
	_ = n ? u(new s(t), E) : o(t, E);
	var h = c.alloc(f - _.length);
	if (((_ = c.concat([h, _], f)), 4 === d))
		return (function (e, t) {
			var n = e.modulus.byteLength(),
				r = l('sha1').update(c.alloc(0)).digest(),
				s = r.length;
			if (0 !== t[0]) throw Error('decryption error');
			var o = t.slice(1, s + 1),
				u = t.slice(s + 1),
				d = a(o, i(u, s)),
				_ = a(u, i(d, n - s - 1));
			if (
				(function (e, t) {
					(e = c.from(e)), (t = c.from(t));
					var n = 0,
						r = e.length;
					e.length !== t.length && (n++, (r = Math.min(e.length, t.length)));
					for (var i = -1; ++i < r; ) n += e[i] ^ t[i];
					return n;
				})(r, _.slice(0, s))
			)
				throw Error('decryption error');
			for (var E = s; 0 === _[E]; ) E++;
			if (1 !== _[E++]) throw Error('decryption error');
			return _.slice(E);
		})(E, _);
	if (1 === d)
		return (function (e, t, n) {
			for (var r = t.slice(0, 2), i = 2, a = 0; 0 !== t[i++]; )
				if (i >= t.length) {
					a++;
					break;
				}
			var s = t.slice(2, i - 1);
			if (
				((('0002' !== r.toString('hex') && !n) || ('0001' !== r.toString('hex') && n)) && a++, s.length < 8 && a++, a)
			)
				throw Error('decryption error');
			return t.slice(i);
		})(E, _, n);
	if (3 === d) return _;
	else throw Error('unknown padding');
};
