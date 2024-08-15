let r, i, a;
n(47120), n(177593);
var s,
	o = n(442837),
	l = n(570140),
	u = n(238514),
	c = n(695346),
	d = n(581883),
	_ = n(283595);
function E(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let f = {
		applicationId: null,
		originURL: null
	},
	h = f,
	p = new Set(),
	m = !1;
function I() {
	a = null;
}
function T() {
	(r = null), (i = null), (p = new Set()), (h.applicationId = null), (h.originURL = null), I();
}
class g extends (s = o.ZP.PersistedStore) {
	initialize(e) {
		(r = (h = { ...(null != e ? e : f) }).applicationId),
			(i = h.originURL),
			this.waitFor(d.Z, u.Z),
			this.syncWith([d.Z, u.Z], () => !0),
			_.Z.whenInitialized(() => {
				m = !0;
			});
	}
	inTestModeForApplication(e) {
		return r === e;
	}
	inTestModeForEmbeddedApplication(e) {
		return r === e && null != i;
	}
	shouldDisplayTestMode(e) {
		return c.Sb.getSetting() && this.inTestModeForApplication(e);
	}
	getState() {
		return h;
	}
	get isTestMode() {
		return null != r;
	}
	get isFetchingAuthorization() {
		return p.size > 0;
	}
	get testModeEmbeddedApplicationId() {
		return null != i ? r : null;
	}
	get testModeApplicationId() {
		return r;
	}
	get testModeOriginURL() {
		return i;
	}
	get error() {
		return a;
	}
	whenInitialized(e) {
		this.addConditionalChangeListener(() => {
			if (m) return setImmediate(e), !1;
		});
	}
}
E(g, 'displayName', 'TestModeStore'),
	E(g, 'persistKey', 'TestModeStore'),
	(t.Z = new g(l.Z, {
		DEVELOPER_TEST_MODE_AUTHORIZATION_START: function (e) {
			let { applicationId: t } = e;
			p.add(t), (a = null);
		},
		DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function (e) {
			let { applicationId: t, originURL: n } = e;
			(r = t), (i = n), p.delete(t), (a = null), (h.applicationId = t), (h.originURL = n);
		},
		DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function (e) {
			let { applicationId: t, error: n } = e;
			p.delete(t), (a = n);
		},
		OVERLAY_INITIALIZE: function (e) {
			let { testModeApplicationId: t } = e;
			r = t;
		},
		DEVELOPER_TEST_MODE_RESET_ERROR: I,
		LOGOUT: T,
		DEVELOPER_TEST_MODE_RESET: T
	}));
