var s,
	a = n(442837),
	r = n(570140),
	i = n(314897),
	l = n(57562),
	o = n(351780),
	c = n(843693);
function d(e, t, n) {
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
let _ = { unlockedAchievements: {} },
	u = { ..._ };
class E extends (s = a.ZP.PersistedStore) {
	initialize(e) {
		this.waitFor(i.default, c.ZP);
		let t = null != e ? e : { ..._ };
		for (let e in t) u[e] = t[e];
	}
	getState() {
		return u;
	}
	getAllUnlockedAchievements() {
		return u.unlockedAchievements;
	}
	getUnlocked(e) {
		var t;
		return null !== (t = u.unlockedAchievements[e]) && void 0 !== t ? t : null;
	}
}
d(E, 'displayName', 'PoggermodeAchievementStore'),
	d(E, 'persistKey', 'PoggermodeAchievementStore'),
	(t.Z = new E(r.Z, {
		POGGERMODE_ACHIEVEMENT_UNLOCK: function (e) {
			var t;
			let { achievementId: n } = e;
			if (!o.Z.isEnabled()) return !1;
			(t = n),
				null != u.unlockedAchievements[t] ||
					((u.unlockedAchievements = {
						...u.unlockedAchievements,
						[t]: {
							achievementId: t,
							dateUnlocked: Date.now()
						}
					}),
					setTimeout(() => {
						(0, l.D)(t, !0);
					}, 2000));
		}
	}));
