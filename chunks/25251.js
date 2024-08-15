let r, i;
var a,
	s,
	o,
	l,
	u = n(392711),
	c = n(442837),
	d = n(570140),
	_ = n(358085),
	E = n(729436);
let f = [],
	h = !1;
let p = f,
	m = {},
	I = null;
let T = 0,
	g = (e) => {
		p = (0, u.cloneDeep)(e);
		let t = {};
		p.forEach((e) => {
			t[e.id] = (0, _.isAndroid)() ? (0, E.QE)(e) : e;
		}),
			(m = t);
	},
	S = () => {
		(h = !1), g(f), (I = null), (i = void 0);
	};
class A extends (l = c.ZP.Store) {
	get isFetching() {
		return h;
	}
	get fetchError() {
		return r;
	}
	get profileEffects() {
		return p;
	}
	get tryItOutId() {
		return I;
	}
	canFetch() {
		return null == i || Date.now() >= i;
	}
	hasFetched() {
		return null != i && null == r;
	}
	getProfileEffectById(e) {
		return null != e ? m[e] : void 0;
	}
}
(o = 'ProfileEffectStore'),
	(s = 'displayName') in (a = A)
		? Object.defineProperty(a, s, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = o),
	(t.Z = new A(d.Z, {
		USER_PROFILE_EFFECTS_FETCH: () => {
			h = !0;
		},
		USER_PROFILE_EFFECTS_FETCH_SUCCESS: (e) => {
			let { profileEffects: t } = e;
			(h = !1), (r = void 0), (i = Date.now() + 300000), (T = 0), g(0 === t.length ? f : t);
		},
		USER_PROFILE_EFFECTS_FETCH_FAILURE: (e) => {
			let { error: t } = e;
			(h = !1), (r = t), (i = Date.now() + Math.min(60000 * 2 ** T, 3600000)), ++T, g(f);
		},
		PROFILE_EFFECTS_SET_TRY_IT_OUT: (e) => {
			let { id: t } = e;
			I = t;
		},
		LOGOUT: (e) => {
			S();
		}
	}));
