n(653041);
var r,
	i = n(392711),
	a = n.n(i),
	s = n(442837),
	o = n(570140),
	l = n(911969),
	u = n(704907),
	c = n(581883),
	d = n(674563),
	_ = n(526761);
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
let f = [l.yU.CHAT, l.yU.PRIMARY_ENTRY_POINT],
	h = { pendingUsages: [] },
	p = new u.Z({
		computeBonus: () => 100,
		computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
		lookupKey: (e) => e,
		afterCompute: () => {},
		numFrequentlyItems: d.yP
	});
function I(e) {
	h.pendingUsages.push({
		key: e,
		timestamp: Date.now()
	}),
		p.track(e),
		p.compute();
}
function m() {
	var e, t;
	let n =
		null !==
			(t =
				null === (e = c.Z.frecencyWithoutFetchingLatest.applicationFrecency) || void 0 === e
					? void 0
					: e.applications) && void 0 !== t
			? t
			: {};
	p.overwriteHistory(
		a().mapValues(n, (e) => ({
			...e,
			recentUses: e.recentUses.map(Number).filter((e) => e > 0)
		})),
		h.pendingUsages
	);
}
class T extends (r = s.ZP.PersistedStore) {
	initialize(e) {
		null != e && (h = e), this.syncWith([c.Z], m);
	}
	getState() {
		return h;
	}
	hasPendingUsage() {
		return h.pendingUsages.length > 0;
	}
	getApplicationFrecencyWithoutLoadingLatest() {
		return p;
	}
	getScoreWithoutLoadingLatest(e) {
		var t;
		return null !== (t = p.getScore(e)) && void 0 !== t ? t : 0;
	}
	getTopApplicationsWithoutLoadingLatest() {
		return p.frequently;
	}
}
E(T, 'displayName', 'ApplicationFrecencyStore'),
	E(T, 'persistKey', 'ApplicationFrecency'),
	(t.Z = new T(o.Z, {
		APPLICATION_COMMAND_USED: function (e) {
			let { command: t } = e;
			if (!f.includes(t.type)) return !1;
			I(t.applicationId);
		},
		EMBEDDED_ACTIVITY_OPEN: function (e) {
			let { applicationId: t } = e;
			I(t);
		},
		USER_SETTINGS_PROTO_UPDATE: function (e) {
			let {
				settings: { type: t },
				wasSaved: n
			} = e;
			if (t !== _.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
			h.pendingUsages = [];
		}
	}));
