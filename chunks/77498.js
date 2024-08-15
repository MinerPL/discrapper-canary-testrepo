let r;
n(47120);
var i,
	a,
	s = n(442837),
	o = n(433517),
	l = n(570140),
	u = n(642047),
	c = n(695346),
	d = n(973616),
	_ = n(358085);
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
let f = 'GameStoreReportedGames',
	h = new u.Z(),
	p = {},
	I = {},
	m = null !== (i = o.K.get(f)) && void 0 !== i ? i : {},
	T = '';
let g = null;
function S(e) {
	return {
		id: e.id,
		name: e.name,
		executables: e.executables,
		overlayWarn: e.overlayWarn,
		overlayCompatibilityHook: e.overlayCompatibilityHook,
		overlay: e.overlay,
		hook: e.hook,
		aliases: e.aliases,
		supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
	};
}
function A(e) {
	let t = e instanceof d.Z ? S(e) : e;
	for (let n of (h.set(e.id, t), (p[e.name.toLowerCase()] = t), e.aliases)) p[n.toLowerCase()] = t;
	if ((0, _.isDesktop)()) for (let n of e.executables) I[n.name] = t;
}
class N extends (a = s.ZP.PersistedStore) {
	initialize(e) {
		var t;
		null != e &&
			(null != e.detectableGamesEtag && (T = e.detectableGamesEtag),
			null === (t = e.detectableGames) || void 0 === t || t.forEach((e) => A(e)));
	}
	getState() {
		return (0, _.isDesktop)()
			? {
					detectableGamesEtag: T,
					detectableGames: h.values()
				}
			: {
					detectableGamesEtag: '',
					detectableGames: []
				};
	}
	get games() {
		return h.values();
	}
	getDetectableGame(e) {
		return h.get(e);
	}
	getGameByName(e) {
		if (null == e) return null;
		let t = e.toLowerCase();
		return Object.prototype.hasOwnProperty.call(p, t) ? p[t] : null;
	}
	isGameInDatabase(e) {
		return (
			null != this.getGameByName(e.name) ||
			(void 0 !== e.nativeProcessObserverId && (2147483648 & e.nativeProcessObserverId) == 0)
		);
	}
	get fetching() {
		return !0 === r;
	}
	get detectableGamesEtag() {
		return T;
	}
	get lastFetched() {
		return g;
	}
	getGameByExecutable(e) {
		return I[e];
	}
	getGameByGameData(e) {
		var t, n;
		let r;
		if (null == e.exePath) return null;
		let i = e.exePath.split('/').pop(),
			a = e.exePath.split('/').slice(-2).join('/');
		if (null != e.name) {
			if (null != (r = this.getGameByName(e.name)) && null != r.executables) {
				let e = r.executables.map((e) => e.name);
				if (e.includes(i) || e.includes(a)) return r;
			} else if (null != r) return null;
		}
		return null !==
			(n = null !== (t = this.getGameByExecutable(i)) && void 0 !== t ? t : this.getGameByExecutable(a)) && void 0 !== n
			? n
			: r;
	}
	shouldReport(e) {
		let t = null != this.getGameByName(e),
			n = null != m[e];
		return c.G6.getSetting() && !r && !(t || n);
	}
	markGameReported(e) {
		(m[e] = !0), o.K.set(f, m);
	}
}
E(N, 'displayName', 'GameStore'),
	E(N, 'persistKey', 'GameStore'),
	E(N, 'migrations', [
		(e) => {
			var t, n;
			if (null == e)
				return {
					detectableGamesEtag: '',
					detectableGames: []
				};
			return {
				detectableGamesEtag: e.detectableGamesEtag,
				detectableGames:
					null !== (n = null === (t = e.detectableGames) || void 0 === t ? void 0 : t.map((e) => S(new d.Z(e)))) &&
					void 0 !== n
						? n
						: []
			};
		},
		(e) =>
			(0, _.isDesktop)()
				? e
				: {
						detectableGamesEtag: '',
						detectableGames: []
					}
	]),
	(t.Z = new N(l.Z, {
		OVERLAY_INITIALIZE: function (e) {
			let { detectableApplications: t } = e;
			for (let e of t) A(e);
		},
		GAMES_DATABASE_FETCH: function () {
			r = !0;
		},
		GAMES_DATABASE_FETCH_FAIL: function () {
			r = !1;
		},
		GAMES_DATABASE_UPDATE: function (e) {
			let { games: t, etag: n } = e;
			for (let e of (null != n && T !== n && (T = n), t))
				A(
					(function (e) {
						var t, n, r, i, a, s;
						return {
							id: e.id,
							name: e.name,
							executables: (null !== (t = e.executables) && void 0 !== t ? t : []).map(d.B),
							overlay: null !== (n = e.overlay) && void 0 !== n && n,
							overlayWarn: null !== (r = e.overlay_warn) && void 0 !== r && r,
							overlayCompatibilityHook: null !== (i = e.overlay_compatibility_hook) && void 0 !== i && i,
							hook: null === (a = e.hook) || void 0 === a || a,
							aliases: null !== (s = e.aliases) && void 0 !== s ? s : [],
							supportsOutOfProcessOverlay: d.Z.supportsOutOfProcessOverlay(e.overlay_methods)
						};
					})(e)
				);
			(r = void 0), (g = Date.now());
		}
	}));
