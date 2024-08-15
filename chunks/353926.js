n.d(t, {
	V: function () {
		return et;
	}
}),
	n(789020),
	n(411104),
	n(47120),
	n(757143);
var r = n(392711),
	i = n.n(r),
	a = n(108131),
	s = n.n(a),
	o = n(433517),
	l = n(865427),
	u = n(710845),
	c = n(314897),
	d = n(412788),
	_ = n(626135),
	E = n(360359),
	f = n(987338),
	h = n(981631);
function p(e, t, n) {
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
let m = 'scientist:triggered',
	I = 'exerimentOverrides',
	T = 'userExperimentOverrides',
	g = 'guildExperimentOverrides',
	S = new u.Z('ExperimentStore'),
	A = !1,
	N = {},
	v = {},
	O = [],
	R = [],
	C = {},
	y = {},
	D = {},
	L = {},
	b = {},
	M = 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL,
	P = {};
function U(e) {
	let t = P[e];
	if (void 0 !== t) return t;
	{
		let t = s().v3(e);
		return (P[e] = t), t;
	}
}
let w = f.qO.map((e) => U(e));
function x(e, t) {
	return e || w.includes(t);
}
function G(e) {
	var t;
	return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & h.xW$.STAFF) === h.xW$.STAFF || null != e.personal_connection_id || !1;
}
function k(e, t, n, r) {
	let i = ''.concat(t.type, '|').concat(e),
		a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
	if (t.type === f.xY.USER) return a && ((i += '|'.concat(n)), r && (i += '|triggerDebugging')), i;
	if (t.type === f.xY.GUILD) return (i += '|'.concat(t.guildId)), a && ((i += '|'.concat(n)), r && (i += '|triggerDebugging')), i;
	throw Error();
}
function B(e) {
	if (e.type === f.xY.USER) return U(''.concat(e.bucket, '|').concat(e.revision));
	if (e.type === f.xY.GUILD) return U(''.concat(e.bucket, '|').concat(e.revision, '|').concat(e.guildId));
	throw Error();
}
let F = Date.now();
function V(e, t, n, r) {
	let i = N[k(e, t, n, r)];
	return !(null == i || Date.now() - i.time > 604800000) && i.hash === B(t);
}
function H(e) {
	let { experimentId: t, descriptor: n, location: r, location_stack: i, context: a, fingerprint: s, excluded: o, exposureType: l } = e;
	if (n.override) return !1;
	let u = l === f.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled;
	if (V(t, n, r, u)) return !1;
	if (n.type === f.xY.USER) {
		let e = {
			name: t,
			revision: n.revision,
			population: n.population,
			bucket: n.bucket,
			location: r,
			location_stack: i,
			hash_result: n.hashResult,
			excluded: o,
			exposure_type: l
		};
		null != a && (e.context_guild_id = a.guildId);
		let c = u ? h.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : h.rMx.EXPERIMENT_USER_TRIGGERED;
		_.default.track(c, e, {
			flush: !0,
			fingerprint: s
		});
	} else if (n.type === f.xY.GUILD) {
		let e = u ? h.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : h.rMx.EXPERIMENT_GUILD_TRIGGERED;
		_.default.track(
			e,
			{
				name: t,
				revision: n.revision,
				bucket: n.bucket,
				guild_id: n.guildId,
				location: r,
				location_stack: i,
				hash_result: n.hashResult,
				excluded: o,
				exposure_type: l
			},
			{
				flush: !0,
				fingerprint: s
			}
		);
	}
	(N[k(t, n, r, u)] = {
		time: Date.now(),
		hash: B(n)
	}),
		ee(N);
}
function Z(e) {
	let [t, n] = e;
	return null != E.Z[t] ? E.Z[t](n) : null;
}
function Y(e) {
	let [t, n] = e;
	return {
		buckets: t.map((e) => {
			let [t, n] = e;
			return {
				bucket: t,
				positions: n.map((e) => {
					let { s: t, e: n } = e;
					return {
						start: t,
						end: n
					};
				})
			};
		}),
		filters: n.map(Z),
		rawFilterData: n
	};
}
function j(e) {
	!M && 'CONNECTION_OPEN' === e.type && G(e.user) && (M = !0), (C = {}), (y = {}), (D = {});
	let t = 'CONNECTION_OPEN' === e.type || null == e.fingerprint || e.fingerprint === c.default.getFingerprint(),
		{ experiments: r, guildExperiments: i } = e;
	t && W(r, i), n(598984).Vx.trackExposure(), (A = !0);
}
function W(e, t) {
	(O = e),
		(R = null != t ? t : []),
		e.forEach((e) => {
			let [t, n, r, i, a, s, o, l] = e;
			C[t] = {
				type: 'user',
				revision: n,
				population: a,
				bucket: r,
				override: 0 === i,
				hashResult: null != s ? s : -1,
				aaMode: 1 === o,
				triggerDebuggingEnabled: x(1 === l, t)
			};
		}),
		null != t &&
			t.forEach((e) => {
				let [t, n, r, i, a, s, o, l, u, c] = e;
				y[t] = {
					hashKey: n,
					revision: r,
					populations: i.map(Y),
					overrides: (function (e) {
						let t = {};
						if (null == e) return t;
						for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
						return t;
					})(a),
					overridesFormatted: (null != s ? s : []).map((e) => e.map(Y)),
					holdoutName: null != o ? o : null,
					holdoutBucket: null != l ? l : null,
					aaMode: 1 === u,
					triggerDebuggingEnabled: x(1 === c, t)
				};
			});
}
function K(e, t, n) {
	let r = null;
	for (let { buckets: a, filters: s } of t) {
		var i = !0;
		if (null != s) {
			for (let t of s)
				if (null != t && !t(e)) {
					i = !1;
					break;
				}
		}
		if (!i) continue;
		let t = a.find((e) => {
			let { positions: t } = e;
			return t.some((e) => {
				let { start: t, end: r } = e;
				return n >= t && n < r;
			});
		});
		if ((r = null != t ? t.bucket : f.NZ.CONTROL) === f.NZ.NOT_ELIGIBLE) break;
		return r;
	}
	return null;
}
function z(e) {
	let t = {};
	for (let r in e) {
		var n;
		let i = e[r];
		for (let e of ((t[r] = { ...i }), t[r].populations)) e.filters = e.rawFilterData.map(Z);
		for (let e of null !== (n = t[r].overridesFormatted) && void 0 !== n ? n : []) for (let t of e) t.filters = t.rawFilterData.map(Z);
	}
	return t;
}
function q(e) {
	let { serializedExperimentStore: t, user: n } = e;
	!M && G(n) && (M = !0), (A = t.hasLoadedExperiments), (N = t.trackedExposureExperiments), (C = t.loadedUserExperiments), (L = t.userExperimentOverrides), (b = t.guildExperimentOverrides), (y = z(t.loadedGuildExperiments)), (D = {});
}
function Q() {
	A = !0;
}
function X(e) {
	let { isSwitchingAccount: t } = e;
	o.K.remove(m), !t && (o.K.remove(I), o.K.remove(T), o.K.remove(g), (L = {}), (b = {})), (C = {}), (O = []), (N = {}), (A = !1);
}
function $() {
	(A = !1), (N = {}), o.K.remove(m);
}
function J() {
	try {
		o.K.set(T, L);
	} catch (e) {
		S.error('Error saving user experiment overrides, unsaved data will be lost', e),
			_.default.track(h.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
				module: 'discord_app',
				call: 'ExperimentStore.saveExperimentOverrides'
			});
	}
	try {
		o.K.set(g, b);
	} catch (e) {
		S.error('Error saving guild experiment overrides, unsaved data will be lost', e),
			_.default.track(h.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
				module: 'discord_app',
				call: 'ExperimentStore.saveExperimentOverrides'
			});
	}
}
function ee(e) {
	try {
		o.K.set(m, {
			v: 1,
			e: e
		});
	} catch (e) {
		S.error('Error saving tracked exposure experiments, unsaved data will be lost', e),
			_.default.track(h.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
				module: 'discord_app',
				call: 'ExperimentStore.saveTrackedExposureExperiments'
			});
	}
}
function et(e) {
	let { experimentId: t, experimentType: n, title: r, description: i, buckets: a, commonTriggerPoint: s } = e;
	v[t] = {
		type: n,
		title: r,
		description: i,
		buckets: a,
		commonTriggerPoint: s
	};
}
function en(e) {
	var t;
	let { experimentId: n, experimentBucket: r, experimentType: i, skipCleanup: a } = e,
		s = null != i ? i : null === (t = v[n]) || void 0 === t ? void 0 : t.type;
	if (null == s) return !1;
	if (
		(null == r
			? ((L = { ...L }), delete L[n], (b = { ...b }), delete b[n])
			: 'user' === s
				? (L = {
						...L,
						[n]: {
							type: s,
							revision: 1,
							population: 0,
							bucket: r,
							override: !0
						}
					})
				: (b = {
						...b,
						[n]: {
							type: s,
							revision: 1,
							bucket: r,
							override: !0
						}
					}),
		!a)
	)
		for (let e of [L, b]) for (let t in e) null == v[t] && delete L[t];
	J();
}
function er(e) {
	let { guild: t } = e;
	for (let e in D) {
		let [n] = e.split(':');
		t.id === n && delete D[e];
	}
}
class ei extends d.Z {
	initialize() {
		(N = (function () {
			let e = o.K.get(m);
			if (null == e || 1 !== e.v) return {};
			let t = e.e,
				n = Date.now(),
				r = !1;
			for (let e in t) n - t[e].time > 604800000 && (delete t[e], (r = !0));
			return r && ee(t), t;
		})()),
			!(function () {
				var e, t, n;
				let r = [null !== (e = o.K.get(I)) && void 0 !== e ? e : {}, null !== (t = o.K.get(T)) && void 0 !== t ? t : {}, null !== (n = o.K.get(g)) && void 0 !== n ? n : {}];
				(L = {}), (b = {});
				let a = !i().isEmpty(r[0]);
				for (let e of r)
					for (let t in e) {
						let n = e[t];
						null == n || (n.type !== f.xY.USER && n.type !== f.xY.GUILD) || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], (a = !0)) : n.type === f.xY.USER ? (L[t] = n) : (b[t] = n);
					}
				let s = (0, l._S)();
				for (let e in s)
					(L[e] = {
						type: f.xY.USER,
						revision: 1,
						population: 0,
						override: !0,
						fromCookie: !0,
						bucket: s[e]
					}),
						(b[e] = {
							type: f.xY.GUILD,
							revision: 1,
							override: !0,
							fromCookie: !0,
							bucket: s[e]
						}),
						(a = !0);
				a && J();
			})();
	}
	loadCache() {
		let e = this.readSnapshot(ei.LATEST_SNAPSHOT_VERSION);
		null != e && ('loadedUserExperiments' in e ? ((C = e.loadedUserExperiments), (y = z(e.loadedGuildExperiments))) : W(e.rawUserExperiments, e.rawGuildExperiments));
	}
	takeSnapshot() {
		return {
			version: ei.LATEST_SNAPSHOT_VERSION,
			data: {
				rawUserExperiments: O,
				rawGuildExperiments: R
			}
		};
	}
	get hasLoadedExperiments() {
		return A;
	}
	hasRegisteredExperiment(e) {
		return null != v[e];
	}
	getUserExperimentDescriptor(e) {
		if (M) {
			let t = L[e];
			if (null != t) return t;
		}
		let t = U(e);
		return C[''.concat(t)];
	}
	getGuildExperimentDescriptor(e, t) {
		let n = null != t ? t : h.lds,
			r = b[e];
		if (M && null != r) return r;
		let i = ''.concat(n, ':').concat(e);
		if (i in D) return D[i];
		let a = (function e(t, n) {
			var r, i;
			let a = U(n),
				s = y[''.concat(a)];
			if (null == s) return null;
			let { revision: o, aaMode: l } = s,
				u = s.overrides[t],
				c = s.triggerDebuggingEnabled;
			if (null != u)
				return u === f.NZ.NOT_ELIGIBLE
					? null
					: {
							type: f.xY.GUILD,
							guildId: t,
							revision: o,
							bucket: u,
							override: !0,
							hashResult: -1,
							triggerDebuggingEnabled: c
						};
			let d = U(''.concat(null !== (r = s.hashKey) && void 0 !== r ? r : n, ':').concat(t)) % 10000,
				_ = null;
			for (let e of null !== (i = s.overridesFormatted) && void 0 !== i ? i : [])
				if (null !== (_ = K(t, e, d)))
					return {
						type: f.xY.GUILD,
						guildId: t,
						revision: s.revision,
						bucket: _,
						override: !0,
						hashResult: d,
						triggerDebuggingEnabled: c
					};
			if (null == (_ = K(t, s.populations, d))) return null;
			if (null != s.holdoutName && null != s.holdoutBucket && s.holdoutName !== n) {
				let n = e(t, s.holdoutName);
				if (
					(null == n ? void 0 : n.bucket) != null &&
					(!0 !== n.override &&
						H({
							experimentId: s.holdoutName,
							descriptor: n
						}),
					(null == n ? void 0 : n.bucket) === s.holdoutBucket)
				)
					return null;
			}
			return {
				type: f.xY.GUILD,
				guildId: t,
				revision: s.revision,
				bucket: _,
				hashResult: d,
				aaMode: l,
				triggerDebuggingEnabled: c
			};
		})(n, e);
		return (D[i] = a), a;
	}
	getUserExperimentBucket(e) {
		let t = this.getUserExperimentDescriptor(e);
		return null != t ? t.bucket : f.NZ.NOT_ELIGIBLE;
	}
	getGuildExperimentBucket(e, t) {
		let n = this.getGuildExperimentDescriptor(e, t);
		return null != n ? n.bucket : f.NZ.NOT_ELIGIBLE;
	}
	getAllUserExperimentDescriptors() {
		return C;
	}
	getGuildExperiments() {
		return y;
	}
	getLoadedUserExperiment(e) {
		return C[U(e)];
	}
	getLoadedGuildExperiment(e) {
		return y[U(e)];
	}
	getRecentExposures(e, t) {
		let n = ''.concat(e, '|').concat(t, '|');
		return Object.entries(N)
			.filter((e) => {
				let [t] = e;
				return t.startsWith(n);
			})
			.map((e) => {
				let [t, { time: r }] = e;
				return [t.replace(n, ''), r];
			});
	}
	getRegisteredExperiments() {
		return v;
	}
	getAllExperimentOverrideDescriptors() {
		return M
			? {
					...L,
					...b
				}
			: {};
	}
	getExperimentOverrideDescriptor(e) {
		var t;
		return M ? (null !== (t = L[e]) && void 0 !== t ? t : b[e]) : null;
	}
	getAllExperimentAssignments() {
		let e = {},
			t = {};
		for (let n in (Object.keys(v).forEach((e) => {
			t[U(''.concat(e))] = e;
		}),
		C)) {
			let r = t[n];
			null != r && (e[r] = C[n].bucket);
		}
		for (let t in D) {
			let n = D[t];
			null != n && (e[t] = n.bucket);
		}
		return e;
	}
	getSerializedState() {
		let e = {};
		for (let t in y) for (let n of ((e[t] = JSON.parse(JSON.stringify(y[t]))), e[t].populations)) n.filters = [];
		return {
			hasLoadedExperiments: A,
			trackedExposureExperiments: N,
			loadedUserExperiments: C,
			loadedGuildExperiments: e,
			userExperimentOverrides: L,
			guildExperimentOverrides: b
		};
	}
	hasExperimentTrackedExposure(e, t, n, r) {
		return V(e, t, n, r);
	}
	constructor() {
		super({
			LOGOUT: X,
			LOGIN_SUCCESS: $,
			CONNECTION_OPEN: j,
			EXPERIMENTS_FETCH_SUCCESS: j,
			OVERLAY_INITIALIZE: q,
			CACHE_LOADED: () => this.loadCache(),
			EXPERIMENTS_FETCH_FAILURE: Q,
			EXPERIMENT_OVERRIDE_BUCKET: en,
			GUILD_CREATE: er,
			GUILD_UPDATE: er
		}),
			p(this, 'trackExposure', H);
	}
}
p(ei, 'displayName', 'ExperimentStore'), p(ei, 'LATEST_SNAPSHOT_VERSION', 1), (t.Z = new ei());
