n(653041), n(47120), n(724458);
var i,
	a,
	s,
	r,
	l = n(392711),
	o = n.n(l),
	c = n(442837),
	d = n(570140),
	u = n(592125);
n(914010);
var _ = n(709054),
	E = n(176505);
let h = {},
	m = {},
	I = {},
	g = {};
function p(e) {
	let t = m[e];
	if (null == t) return;
	let n = _.default.fromTimestamp(Date.now() - 900000),
		i = o().findIndex(t, (e) => _.default.compare(e.id, n) > 0);
	if (-1 === i) m[e] = [];
	else {
		let n = Math.max(i, t.length - 26);
		m[e] = o().slice(t, n);
	}
	I[e] = Date.now();
}
function T(e, t, n, i) {
	h[e].add(t);
	let a = I[t];
	(null == a || a + 300000 > Date.now()) && p(t),
		null == m[t] && (m[t] = []),
		m[t].push({
			id: n,
			userId: i
		});
}
function S(e) {
	let { channel: t } = e;
	delete m[t.id], delete I[t.id];
}
class f extends (i = c.ZP.Store) {
	getActiveChannelsFetchStatus(e) {
		return g[e];
	}
	getActiveChannelIds(e) {
		return h[e];
	}
	getChannelMessageData(e) {
		return m[e];
	}
	shouldFetch(e) {
		var t;
		return null == h[e] && !(null === (t = g[e]) || void 0 === t ? void 0 : t.loading);
	}
}
(r = 'ActiveChannelsStore'),
	(s = 'displayName') in (a = f)
		? Object.defineProperty(a, s, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = r),
	new f(d.Z, {
		CHANNEL_SELECT: function (e) {
			let { channelId: t, guildId: n } = e;
			if (!(0, E.ME)(t) || null == n) return !1;
			let i = h[n];
			if (null == i) return !1;
			i.forEach((e) => {
				var t;
				p(e), (null === (t = m[e]) || void 0 === t ? void 0 : t.length) === 0 && delete m[e];
			});
			let a = o()
				.chain(Array.from(i))
				.filter((e) => e in m)
				.sortBy((e) => {
					var t, n;
					return -(null !== (n = null === (t = m[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0);
				})
				.value();
			h[n] = new Set(a);
		},
		MESSAGE_CREATE: function (e) {
			var t;
			let { channelId: n, message: i, optimistic: a, isPushNotification: s } = e;
			if (a || s) return !1;
			let r = u.Z.getChannel(n);
			if (null == r) return !1;
			let l = r.guild_id;
			if (null == l || null == h[l]) return !1;
			T(l, n, i.id, null === (t = i.author) || void 0 === t ? void 0 : t.id);
		},
		GUILD_DELETE: function (e) {
			let { guild: t } = e;
			delete h[t.id];
		},
		CHANNEL_DELETE: S,
		THREAD_DELETE: S,
		ACTIVE_CHANNELS_FETCH_START: function (e) {
			let { guildId: t } = e;
			g[t] = {
				loading: !0,
				error: null,
				fetchedAt: Date.now()
			};
		},
		ACTIVE_CHANNELS_FETCH_SUCCESS: function (e) {
			let { guildId: t, channels: n } = e;
			(g[t] = {
				loading: !1,
				error: null,
				fetchedAt: Date.now()
			}),
				(h[t] = new Set()),
				n.forEach((e) => {
					let { channel_id: n, messages: i } = e;
					i.forEach((e) => {
						T(t, n, e.message_id, e.user_id);
					});
				});
		},
		ACTIVE_CHANNELS_FETCH_FAILURE: function (e) {
			let { guildId: t, error: n } = e;
			g[t] = {
				loading: !1,
				error: n,
				fetchedAt: null
			};
		},
		CONNECTION_OPEN: function () {}
	});
