var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140);
let u = !1,
	c = !1,
	d = {},
	_ = null;
class E extends (s = o.ZP.Store) {
	hasConsented(e) {
		return null != d[e] && d[e].consented;
	}
	get fetchedConsents() {
		return u;
	}
	get receivedConsentsInConnectionOpen() {
		return c;
	}
	getAuthenticationConsentRequired() {
		return _;
	}
}
(a = 'ConsentStore'),
	(i = 'displayName') in (r = E)
		? Object.defineProperty(r, i, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (r[i] = a),
	(t.Z = new E(l.Z, {
		CONNECTION_OPEN: function (e) {
			let { consents: t } = e;
			null != t &&
				((d = {
					...d,
					...t
				}),
				(c = !0));
		},
		UPDATE_CONSENTS: function (e) {
			let { consents: t } = e;
			(d = { ...t }), (u = !0);
		},
		SET_CONSENT_REQUIRED: function (e) {
			_ = e.consentRequired;
		},
		LOGOUT: function () {
			_ = null;
		}
	}));
