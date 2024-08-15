var t,
	r,
	o,
	s,
	l = a(442837),
	i = a(570140);
let _ = null,
	C = null;
class A extends (s = l.ZP.Store) {
	get client() {
		return _;
	}
	get cashAppPayComponent() {
		return C;
	}
}
(o = 'AdyenStore'),
	(r = 'displayName') in (t = A)
		? Object.defineProperty(t, r, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (t[r] = o);
let u = new A(i.Z, {
	ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
		let { client: n } = e;
		_ = n;
	},
	ADYEN_TEARDOWN_CLIENT: function () {
		_ = null;
	},
	ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
		let { component: n } = e;
		C = n;
	}
});
n.Z = u;
