var i,
	s,
	l,
	a,
	r = t(442837),
	o = t(570140);
let u = {};
class d extends (a = r.ZP.Store) {
	getOptions(e) {
		return u[e];
	}
}
(l = 'SendMessageOptionsStore'),
	(s = 'displayName') in (i = d)
		? Object.defineProperty(i, s, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[s] = l),
	(n.Z = new d(o.Z, {
		MESSAGE_CREATE: function (e) {
			let { message: n, sendMessageOptions: t } = e;
			null != t && (u[n.id] = t), null != n.nonce && n.nonce in u && delete u[n.nonce];
		}
	}));
