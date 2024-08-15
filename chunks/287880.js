t.d(s, {
	Ae: function () {
		return d;
	},
	Qe: function () {
		return E;
	},
	U0: function () {
		return u;
	},
	bV: function () {
		return _;
	},
	uZ: function () {
		return c;
	}
}),
	t(518263),
	t(970173),
	t(520712),
	t(268111),
	t(941497),
	t(32026),
	t(480839),
	t(744285),
	t(492257),
	t(873817),
	t(757143);
var n,
	a,
	i,
	r = t(943418);
let o = null !== (i = null === (n = window) || void 0 === n ? void 0 : n.crypto) && void 0 !== i ? i : null === (a = window) || void 0 === a ? void 0 : a.msCrypto,
	l = 'Uint8Array' in window,
	c = null != o && 'getRandomValues' in o && l,
	d = 'PublicKeyCredential' in window && l;
function _() {
	var e, s;
	return (
		(s = ((e = 20), o.getRandomValues(new Uint8Array(20)))),
		r
			.encode(s)
			.toString('utf8')
			.replace(/=/g, '')
			.toLowerCase()
			.replace(/(\w{4})/g, '$1 ')
			.trim()
	);
}
function E(e) {
	return e.replace(/[\s._-]+/g, '').toUpperCase();
}
function u(e, s) {
	let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'Discord';
	return 'otpauth://totp/'.concat(encodeURI(t), ':').concat(encodeURI(e), '?secret=').concat(E(s), '&issuer=').concat(encodeURIComponent(t));
}
