n(47120), n(789020), n(177593);
var r,
	i,
	a,
	s,
	o = n(392711),
	l = n.n(o),
	u = n(442837),
	c = n(433517),
	d = n(570140),
	_ = n(85521),
	E = n(630388),
	f = n(780570),
	h = n(314897),
	p = n(981631);
let I = 'LibraryApplicationStore';
function m() {
	var e;
	return null !== (e = c.K.get(I)) && void 0 !== e ? e : {};
}
let T = !1,
	g = {},
	S = {},
	A = new Set(),
	N = {},
	v = {},
	O = !1;
function R() {
	c.K.set(I, {
		...m(),
		activeLaunchOptionIds: v
	});
}
function C() {
	c.K.set(I, {
		...m(),
		activeLibraryApplicationBranchIds: N
	});
}
function y(e) {
	for (let t of e) {
		let e = _.Z.createFromServer(t);
		g[(0, f.Tu)(e.id, e.branchId)] = e;
	}
}
function D(e) {
	let { libraryApplication: t } = e,
		n = _.Z.createFromServer(t),
		r = (0, f.Tu)(n.id, n.branchId);
	(g[r] = n), A.delete(r);
}
function L(e, t) {
	var n;
	let r = (0, f.Tu)(e, t);
	return null !== (n = g[r]) && void 0 !== n ? n : S[r];
}
function b() {
	return {
		...S,
		...g
	};
}
class M extends (r = u.ZP.Store) {
	initialize() {
		this.waitFor(h.default);
		let e = c.K.get(I);
		null != e &&
			(null == e.activeLaunchOptionIds ? R() : (v = e.activeLaunchOptionIds),
			null == e.activeLibraryApplicationBranchIds ? C() : (N = e.activeLibraryApplicationBranchIds));
	}
	get libraryApplications() {
		return (function (e) {
			let t = b();
			return (
				Object.keys(t).forEach((n) => {
					!e(t[n]) && delete t[n];
				}),
				t
			);
		})((e) => !e.isHidden());
	}
	getAllLibraryApplications() {
		return b();
	}
	hasLibraryApplication() {
		return Object.keys(b()).length > 0;
	}
	hasApplication(e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			r = L(e, t);
		return !(null == r || (!n && r.isHidden())) && (0, f.Je)(r);
	}
	getLibraryApplication(e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			r = L(e, t);
		return n && null != r ? ((0, f.Je)(r) ? r : null) : r;
	}
	getActiveLibraryApplication(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = N[e];
		if (null != n) {
			var r;
			let i = (0, f.Tu)(e, n),
				a = null !== (r = g[i]) && void 0 !== r ? r : S[i];
			if (null != a && (0, f.Je)(a) && (t || !a.isHidden())) return a;
		}
		let i = b();
		for (let n in i)
			if (i[n].id === e) {
				let e = i[n];
				if ((0, f.Je)(e) && (t || !e.isHidden())) return e;
			}
	}
	isUpdatingFlags(e, t) {
		return A.has((0, f.Tu)(e, t));
	}
	getActiveLaunchOptionId(e, t) {
		return v[(0, f.Tu)(e, t)];
	}
	get fetched() {
		return T;
	}
	get entitledBranchIds() {
		return l()(b())
			.values()
			.filter((e) => (0, f.Je)(e))
			.map((e) => e.branchId)
			.value();
	}
	get hasRemovedLibraryApplicationThisSession() {
		return O;
	}
	whenInitialized(e) {
		this.addConditionalChangeListener(() => {
			if (T) return setImmediate(e), !1;
		});
	}
}
(s = 'LibraryApplicationStore'),
	(a = 'displayName') in (i = M)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new M(d.Z, {
		LOGOUT: function () {
			T = !1;
		},
		LIBRARY_FETCH_SUCCESS: function (e) {
			let { libraryApplications: t } = e;
			(g = {}), y(t), (T = !0);
		},
		SKU_PURCHASE_SUCCESS: function (e) {
			let { libraryApplications: t } = e;
			y(t);
		},
		LIBRARY_APPLICATION_FLAGS_UPDATE_START: function (e) {
			let { applicationId: t, branchId: n, flags: r } = e,
				i = (0, f.Tu)(t, n),
				a = L(t, n);
			null != a && !a.isHidden() && E.yE(r, p.eHb.HIDDEN) && (O = !0), A.add(i);
		},
		LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: D,
		LIBRARY_APPLICATION_UPDATE: D,
		LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function (e) {
			let { applicationId: t, branchId: n, launchOptionId: r } = e;
			(v[(0, f.Tu)(t, n)] = r), R();
		},
		LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function (e) {
			let { applicationId: t, branchId: n } = e;
			if (N[t] === n) return !1;
			(N[t] = n), C();
		},
		LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function (e) {
			let { libraryApplications: t } = e;
			for (let e of t) S[(0, f.Tu)(e.id, e.branchId)] = e;
		},
		DEVELOPER_TEST_MODE_RESET: function () {
			S = {};
		}
	}));
