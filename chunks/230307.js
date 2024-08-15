var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140),
	u = n(981631);
let c = {},
	d = null;
class _ extends (s = o.ZP.Store) {
	get applicationStatistics() {
		return c;
	}
	get lastFetched() {
		return d;
	}
	getGameDuration(e) {
		let t = c[e];
		return null != t ? t.total_duration : 0;
	}
	getLastPlayedDateTime(e) {
		let t = c[e];
		return null != t ? new Date(t.last_played_at).getTime() : null;
	}
	hasApplicationStatistic(e) {
		return null != c[e];
	}
	getCurrentUserStatisticsForApplication(e) {
		return c[e];
	}
	getQuickSwitcherScoreForApplication(e) {
		let t = c[e],
			n = 0;
		if (null != t) {
			let e = Date.now(),
				r = Math.floor((e - new Date(t.last_played_at).getTime()) / 86400000),
				i = Math.floor((1000 * t.total_duration) / 3600000);
			0 === r
				? (n += 50)
				: r >= 1 && r < 2
					? (n += 40)
					: r >= 2 && r < 4
						? (n += 30)
						: r >= 4 && r < 7
							? (n += 20)
							: r >= 7 && (n += 10),
				0 === i
					? (n += 0)
					: i >= 1 && i < 12
						? (n += 10)
						: i >= 12 && i < 168
							? (n += 20)
							: i >= 168 && i < 720
								? (n += 40)
								: i >= 720 && (n += 50);
		}
		return n;
	}
}
(a = 'LibraryApplicationStatisticsStore'),
	(i = 'displayName') in (r = _)
		? Object.defineProperty(r, i, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (r[i] = a),
	(t.Z = new _(l.Z, {
		USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: function (e) {
			let { statistics: t } = e;
			t.forEach((e) => {
				c[e.application_id] = e;
			}),
				(d = Date.now());
		},
		ACTIVITY_UPDATE_START: function (e) {
			let { duration: t, applicationId: n, distributor: r } = e,
				i = c[n],
				a = new Date().toISOString(),
				s = 0,
				o = 0;
			if (null != i) {
				var l;
				(s = i.total_duration), (o = null !== (l = i.total_discord_sku_duration) && void 0 !== l ? l : 0);
			}
			(s += t),
				r === u.GQo.DISCORD && (o += t),
				(c[n] = {
					application_id: n,
					total_duration: s,
					last_played_at: a,
					total_discord_sku_duration: o
				});
		},
		LOGOUT: function () {
			(c = {}), (d = null);
		}
	}));
