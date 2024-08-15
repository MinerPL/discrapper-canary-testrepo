var r,
	i,
	a = n(957578).Buffer,
	s = n(180756),
	o = n(138031),
	l = n(275227),
	u = n(871230),
	c = n.g.crypto && n.g.crypto.subtle,
	d = {
		sha: 'SHA-1',
		'sha-1': 'SHA-1',
		sha1: 'SHA-1',
		sha256: 'SHA-256',
		'sha-256': 'SHA-256',
		sha384: 'SHA-384',
		'sha-384': 'SHA-384',
		'sha-512': 'SHA-512',
		sha512: 'SHA-512'
	},
	_ = [];
function E() {
	return i ? i : (i = n.g.process && n.g.process.nextTick ? n.g.process.nextTick : n.g.queueMicrotask ? n.g.queueMicrotask : n.g.setImmediate ? n.g.setImmediate : n.g.setTimeout);
}
function f(e, t, n, r, i) {
	return c
		.importKey('raw', e, { name: 'PBKDF2' }, !1, ['deriveBits'])
		.then(function (e) {
			return c.deriveBits(
				{
					name: 'PBKDF2',
					salt: t,
					iterations: n,
					hash: { name: i }
				},
				e,
				r << 3
			);
		})
		.then(function (e) {
			return a.from(e);
		});
}
e.exports = function (e, t, i, h, p, m) {
	'function' == typeof p && ((m = p), (p = void 0));
	var I = d[(p = p || 'sha1').toLowerCase()];
	if (!I || 'function' != typeof n.g.Promise) {
		E()(function () {
			var n;
			try {
				n = l(e, t, i, h, p);
			} catch (e) {
				return m(e);
			}
			m(null, n);
		});
		return;
	}
	if ((s(i, h), (e = u(e, o, 'Password')), (t = u(t, o, 'Salt')), 'function' != typeof m)) throw Error('No callback provided to pbkdf2');
	!(function (e, t) {
		e.then(
			function (e) {
				E()(function () {
					t(null, e);
				});
			},
			function (e) {
				E()(function () {
					t(e);
				});
			}
		);
	})(
		(function (e) {
			if ((n.g.process && !n.g.process.browser) || !c || !c.importKey || !c.deriveBits) return Promise.resolve(!1);
			if (void 0 !== _[e]) return _[e];
			var t = f((r = r || a.alloc(8)), r, 10, 128, e)
				.then(function () {
					return !0;
				})
				.catch(function () {
					return !1;
				});
			return (_[e] = t), t;
		})(I).then(function (n) {
			return n ? f(e, t, i, h, I) : l(e, t, i, h, p);
		}),
		m
	);
};
