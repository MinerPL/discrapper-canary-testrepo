var i,
	a,
	s,
	r,
	l = n(442837),
	o = n(570140),
	c = n(292556),
	d = n(812206);
class u extends (r = l.ZP.Store) {}
(s = 'UserAchievementStore'),
	(a = 'displayName') in (i = u)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s);
new u(o.Z, {
	USER_ACHIEVEMENT_UPDATE: function (e) {
		let { userAchievement: t } = e,
			{ application_id: n, achievement: i, percent_complete: a } = t;
		if (100 === a && null != i) {
			let e = d.Z.getApplication(n),
				t = null != e ? e.getIconURL(64) : null;
			c.default.showNotification(
				t,
				i.name,
				i.description,
				{ notif_type: 'USER_ACHIEVEMENT_UPDATE' },
				{ omitViewTracking: !0 }
			);
		}
	}
});
