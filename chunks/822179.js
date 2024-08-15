n(653041);
var r,
	i = n(392711),
	a = n.n(i),
	s = n(442837),
	o = n(570140),
	l = n(704907),
	u = n(581883),
	c = n(70956),
	d = n(926491),
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
let f = { pendingUsages: [] };
c.Z.Millis.DAY;
let h = new l.Z({
		computeBonus: () => 100,
		computeWeight: (e) => {
			let t = 1;
			return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
		},
		lookupKey: (e) => d.Z.getStickerById(e),
		afterCompute: () => {},
		numFrequentlyItems: 20
	}),
	p = () => {
		d.Z.isLoaded && h.compute();
	},
	I = () => {
		p();
	};
function m() {
	var e;
	let t = null === (e = u.Z.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
	if (null == t) return !1;
	h.overwriteHistory(
		a().mapValues(t, (e) => ({
			...e,
			recentUses: e.recentUses.map(Number).filter((e) => e > 0)
		})),
		f.pendingUsages
	);
}
class T extends (r = s.ZP.PersistedStore) {
	initialize(e) {
		this.waitFor(d.Z), null != e && (f = e), this.syncWith([d.Z], I), this.syncWith([u.Z], m);
	}
	getState() {
		return f;
	}
	hasPendingUsage() {
		return f.pendingUsages.length > 0;
	}
	get stickerFrecencyWithoutFetchingLatest() {
		return h;
	}
}
E(T, 'displayName', 'StickersPersistedStore'),
	E(T, 'persistKey', 'StickersPersistedStoreV2'),
	(t.Z = new T(o.Z, {
		STICKER_TRACK_USAGE: (e) => {
			let { stickerIds: t } = e;
			null == t ||
				t.forEach((e) => {
					h.track(e),
						f.pendingUsages.push({
							key: e,
							timestamp: Date.now()
						});
				}),
				p();
		},
		USER_SETTINGS_PROTO_UPDATE: function (e) {
			let {
				settings: { type: t },
				wasSaved: n
			} = e;
			if (t !== _.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
			f.pendingUsages = [];
		}
	}));
