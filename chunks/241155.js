t(47120);
var l,
	i,
	u,
	r,
	a = t(392711),
	o = t.n(a),
	s = t(442837),
	d = t(570140),
	c = t(924301),
	E = t(601964),
	_ = t(486527);
let N = !1,
	f = {},
	S = {},
	T = {},
	Z = (e) => (
		(T[e.guild_scheduled_event.id] = new E.ZP(e.guild_scheduled_event.guild)),
		(S[e.guild_scheduled_event.id] = e.guild_scheduled_event),
		{
			channelId: e.directory_channel_id,
			scheduledEventId: e.entity_id,
			type: _.C2.GUILD_SCHEDULED_EVENT,
			authorId: e.author_id,
			createdAt: e.created_at
		}
	);
class I extends (l = s.ZP.Store) {
	isFetching() {
		return N;
	}
	getEventDirectoryEntries(e) {
		if (null != e) return f[e];
	}
	getCachedGuildByEventId(e) {
		var n;
		return null !== (n = T[e]) && void 0 !== n ? n : void 0;
	}
	getCachedGuildScheduledEventById(e) {
		var n;
		return null !== (n = S[e]) && void 0 !== n ? n : void 0;
	}
}
(r = 'EventDirectoryStore'),
	(u = 'displayName') in (i = I)
		? Object.defineProperty(i, u, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[u] = r),
	(n.Z = new I(d.Z, {
		EVENT_DIRECTORY_FETCH_START: function () {
			N = !0;
		},
		EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
			let { channelId: n, entries: t } = e;
			N = !1;
			let l = o().sortBy(
					[...t],
					[
						function (e) {
							return (0, c.CQ)(e.guild_scheduled_event);
						}
					]
				),
				i = o().map(l, Z);
			f[n] = i;
		},
		EVENT_DIRECTORY_FETCH_FAILURE: function () {
			N = !1;
		}
	}));
