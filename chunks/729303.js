n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var r,
	l,
	u,
	i,
	a = n(442837),
	c = n(570140);
let o = new Map();
class s extends (r = a.ZP.Store) {
	getUsers() {
		return o;
	}
	isKeyVerified(e, t) {
		let n = o.get(e);
		if (null == t || null == n || n.length !== t.length) return !1;
		for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
}
(i = 'TransientKeyStore'),
	(u = 'displayName') in (l = s)
		? Object.defineProperty(l, u, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (l[u] = i),
	(t.Z = new s(c.Z, {
		SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
			let { userId: t, key: n } = e,
				r = new Uint8Array(n);
			o.set(t, r);
		},
		SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
			let { userId: t } = e;
			return o.delete(t);
		}
	}));
