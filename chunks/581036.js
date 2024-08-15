t(47120);
var u,
	l,
	r,
	i,
	o = t(512722),
	a = t.n(o),
	d = t(442837),
	c = t(570140),
	s = t(344185),
	f = t(592125),
	g = t(306680);
let m = {},
	Z = new Set();
class E extends (u = d.ZP.Store) {
	initialize() {
		this.waitFor(s.Z, f.Z, g.ZP);
	}
	getCount(e) {
		return m[e];
	}
	getThreadIdsMissingCounts(e, n) {
		return (
			a()(s.Z.hasLoaded(e), 'must wait for THREAD_LIST_SYNC before calling this'),
			n.filter((e) => !(e in m) && !Z.has(e))
		);
	}
}
(i = 'ForumPostUnreadCountStore'),
	(r = 'displayName') in (l = E)
		? Object.defineProperty(l, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (l[r] = i),
	(n.Z = new E(c.Z, {
		CONNECTION_OPEN: function () {
			(m = {}), (Z = new Set());
		},
		THREAD_CREATE: function (e) {
			let { channel: n, isNewlyCreated: t } = e;
			if (!t || !s.Z.hasLoaded(n.guild_id)) return !1;
			m[n.id] = 0;
		},
		MESSAGE_CREATE: function (e) {
			let { channelId: n, optimistic: t, isPushNotification: u } = e;
			if (t || u || !(n in m)) return !1;
			m[n]++;
		},
		FORUM_UNREADS: function (e) {
			let { threads: n } = e;
			n.forEach((e) => {
				null != e.count && (m[e.threadId] = e.count);
			});
		},
		MESSAGE_ACK: function (e) {
			let { channelId: n } = e;
			if (!(n in m)) {
				let e = f.Z.getChannel(n),
					t = f.Z.getChannel(null == e ? void 0 : e.parent_id);
				if (!(null == t ? void 0 : t.isForumLikeChannel())) return !1;
			}
			m[n] = g.ZP.getUnreadCount(n);
		},
		REQUEST_FORUM_UNREADS: function (e) {
			let { threads: n } = e;
			n.forEach((e) => {
				let { threadId: n } = e;
				return Z.add(n);
			});
		}
	}));
