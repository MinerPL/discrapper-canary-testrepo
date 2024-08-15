var r = n(957578).Buffer,
	i = n(294415),
	a = n(530917),
	s = n(136924).ec,
	o = n(28704),
	l = n(223428),
	u = n(733345);
function c(e, t, n, a) {
	if ((e = r.from(e.toArray())).length < t.byteLength()) {
		var s = r.alloc(t.byteLength() - e.length);
		e = r.concat([s, e]);
	}
	var o = n.length,
		l = (function (e, t) {
			e = (e = d(e, t)).mod(t);
			var n = r.from(e.toArray());
			if (n.length < t.byteLength()) {
				var i = r.alloc(t.byteLength() - n.length);
				n = r.concat([i, n]);
			}
			return n;
		})(n, t),
		u = r.alloc(o);
	u.fill(1);
	var c = r.alloc(o);
	return (
		(c = i(a, c)
			.update(u)
			.update(r.from([0]))
			.update(e)
			.update(l)
			.digest()),
		(u = i(a, c).update(u).digest()),
		(c = i(a, c)
			.update(u)
			.update(r.from([1]))
			.update(e)
			.update(l)
			.digest()),
		(u = i(a, c).update(u).digest()),
		{
			k: c,
			v: u
		}
	);
}
function d(e, t) {
	var n = new o(e),
		r = (e.length << 3) - t.bitLength();
	return r > 0 && n.ishrn(r), n;
}
function _(e, t, n) {
	var a, s;
	do {
		for (a = r.alloc(0); 8 * a.length < e.bitLength(); ) (t.v = i(n, t.k).update(t.v).digest()), (a = r.concat([a, t.v]));
		(s = d(a, e)),
			(t.k = i(n, t.k)
				.update(t.v)
				.update(r.from([0]))
				.digest()),
			(t.v = i(n, t.k).update(t.v).digest());
	} while (-1 !== s.cmp(e));
	return s;
}
(e.exports = function (e, t, n, i, E) {
	var f = l(t);
	if (f.curve) {
		if ('ecdsa' !== i && 'ecdsa/rsa' !== i) throw Error('wrong private key type');
		return (function (e, t) {
			var n = u[t.curve.join('.')];
			if (!n) throw Error('unknown curve ' + t.curve.join('.'));
			var i = new s(n).keyFromPrivate(t.privateKey).sign(e);
			return r.from(i.toDER());
		})(e, f);
	}
	if ('dsa' === f.type) {
		if ('dsa' !== i) throw Error('wrong private key type');
		return (function (e, t, n) {
			for (var i, a = t.params.priv_key, s = t.params.p, l = t.params.q, u = t.params.g, E = new o(0), f = d(e, l).mod(l), h = !1, p = c(a, l, e, n); !1 === h; )
				(E = (function (e, t, n, r) {
					return e.toRed(o.mont(n)).redPow(t).fromRed().mod(r);
				})(u, (i = _(l, p, n)), s, l)),
					0 ===
						(h = i
							.invm(l)
							.imul(f.add(a.mul(E)))
							.mod(l)).cmpn(0) && ((h = !1), (E = new o(0)));
			return (function (e, t) {
				(e = e.toArray()), (t = t.toArray()), 128 & e[0] && (e = [0].concat(e)), 128 & t[0] && (t = [0].concat(t));
				var n = [48, e.length + t.length + 4, 2, e.length];
				return (n = n.concat(e, [2, t.length], t)), r.from(n);
			})(E, h);
		})(e, f, n);
	}
	if ('rsa' !== i && 'ecdsa/rsa' !== i) throw Error('wrong private key type');
	e = r.concat([E, e]);
	for (var h = f.modulus.byteLength(), p = [0, 1]; e.length + p.length + 1 < h; ) p.push(255);
	p.push(0);
	for (var m = -1; ++m < e.length; ) p.push(e[m]);
	return a(p, f);
}),
	(e.exports.getKey = c),
	(e.exports.makeKey = _);
