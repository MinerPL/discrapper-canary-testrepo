var l,
	i = t(442837),
	u = t(570140),
	r = t(314897),
	a = t(924301),
	o = t(658041),
	s = t(765305);
function d(e, n, t) {
	return (
		n in e
			? Object.defineProperty(e, n, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[n] = t),
		e
	);
}
let c = {},
	E = {};
function _(e) {
	let n = { ...c };
	delete n[e], (c = n);
	let t = { ...E };
	delete t[e], (E = t);
}
class N extends (l = i.ZP.PersistedStore) {
	initialize(e) {
		if (null != e) {
			var n, t;
			(c = null !== (n = e.upcomingEventDismissals) && void 0 !== n ? n : {}),
				(E = null !== (t = e.upcomingEventSeenTimestamps) && void 0 !== t ? t : {});
		}
	}
	getGuildEventNoticeDismissalTime(e) {
		return c[e];
	}
	getAllEventDismissals() {
		return c;
	}
	getUpcomingNoticeSeenTime(e) {
		return E[e];
	}
	getAllUpcomingNoticeSeenTimes() {
		return E;
	}
	getState() {
		return {
			upcomingEventDismissals: c,
			upcomingEventSeenTimestamps: E
		};
	}
}
d(N, 'displayName', 'UpcomingEventNoticesStore'),
	d(N, 'persistKey', 'UpcomingEventNotices'),
	(n.Z = new N(u.Z, {
		UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
			let { eventId: n } = e,
				t = { ...c };
			(t[n] = Date.now()), (c = t);
		},
		GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
			let { guildScheduledEvent: n } = e;
			(n.status === s.p1.CANCELED || n.status === s.p1.COMPLETED) && _(n.id);
		},
		GUILD_SCHEDULED_EVENT_DELETE: function (e) {
			let { guildScheduledEvent: n } = e;
			_(n.id);
		},
		GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
			let { userId: n, guildEventId: t } = e;
			if (n !== r.default.getId()) return;
			let l = a.ZP.getGuildScheduledEvent(t);
			if (null == l || l.status !== s.p1.SCHEDULED || null != c[t]) return;
			let i = E[t];
			if ((0, o.M)(l, void 0, i, !1) === s.X_.NEW_EVENT) {
				let e = { ...c };
				(e[t] = Date.now()), (c = e);
			}
		},
		UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
			let { guildEventId: n } = e,
				t = { ...E };
			(t[n] = Date.now()), (E = t);
		}
	}));
