n(47120);
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(392711),
	c = n(442837),
	d = n(759174),
	_ = n(570140),
	E = n(598077),
	f = n(314897),
	h = n(709054),
	p = n(770471),
	I = n(860852);
((a = r || (r = {}))[(a.INVALID = 0)] = 'INVALID'),
	(a[(a.VALID_USER_ONLY = 1)] = 'VALID_USER_ONLY'),
	(a[(a.VALID = 2)] = 'VALID');
let m = new Set(),
	T = new Set(),
	g = new Set(),
	S = [],
	A = (e) => 'user:'.concat(e),
	N = (e) => 'channel:'.concat(e),
	v = (e) => 'validity:'.concat(e),
	O = new d.h(
		function (e) {
			let t = m.has(e.userId) ? 1 : 0;
			return null != e.viewers && (t = 2), [A(e.userId), N(e.channelId), v(t)];
		},
		(e) => e.channelId
	);
function R(e, t, n) {
	if (f.default.getId() === e) return !1;
	if (null == t) {
		let t = O.get(e);
		return !!(null != t && (0, u.isEqual)(t.source, n)) && (O.delete(e), void 0);
	}
	!m.has(e) && !T.has(e) && (g.add(e), (S = [...g]));
	let r = (0, I.tI)(t, e, n);
	O.set(e, r);
}
function C(e) {
	return null != e
		? {
				type: I.$C.GUILD,
				guildId: e
			}
		: { type: I.$C.GLOBAL };
}
class y extends (i = c.ZP.Store) {
	getBroadcasts() {
		return O.values(v(2));
	}
	getBroadcastsToValidateChannels() {
		return O.values(v(1));
	}
	getBroadcastByChannel(e) {
		return O.values(N(e))[0];
	}
	getBroadcastByUser(e) {
		return O.get(e);
	}
	getUserIdsToValidate() {
		return S;
	}
}
(l = 'BroadcastingStore'),
	(o = 'displayName') in (s = y)
		? Object.defineProperty(s, o, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (s[o] = l),
	(t.Z = new y(_.Z, {
		PRESENCE_UPDATES: function (e) {
			let { updates: t } = e;
			return t.forEach((e) => {
				let { user: t, broadcast: n, guildId: r } = e;
				R(t.id, n, C(r));
			});
		},
		PRESENCES_REPLACE: function (e) {
			let { presences: t } = e;
			return t.forEach((e) => {
				let { user: t, broadcast: n, guildId: r } = e;
				R(t.id, n, C(r));
			});
		},
		CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
			let { presences: t, guilds: n } = e;
			t.forEach((e) => {
				let { user: t, broadcast: n, guildId: r } = e;
				R(t.id, n, C(r));
			}),
				n.forEach((e) => {
					let { presences: t, id: n } = e;
					t.forEach((e) => {
						let { user: t, broadcast: r } = e;
						R(t.id, r, C(n));
					});
				});
		},
		BROADCASTER_BUCKETS_RECEIVED: function (e) {
			let { data: t } = e;
			h.default.keys(t).forEach((e) => {
				p.g.includes(t[e]) ? m.add(e) : T.add(e), g.clear(), (S = [...g]);
				let n = O.get(e);
				null != n && (O.delete(e), O.set(e, n));
			});
		},
		BROADCAST_VIEWERS_UPDATE: function (e) {
			let { viewers: t } = e;
			Object.entries(t).forEach((e) => {
				let [t, n] = e,
					r = O.get(t);
				null != r &&
					O.set(t, {
						...r,
						viewers: n
					});
			});
		},
		CHANNEL_RECIPIENT_ADD: function (e) {
			let { channelId: t, user: n } = e,
				r = O.values(N(t))[0];
			if (null == r || null == r.viewers || r.viewers.some((e) => e.id === n.id)) return !1;
			O.set(r.userId, {
				...r,
				viewers: [...r.viewers, new E.Z(n)]
			});
		},
		CHANNEL_RECIPIENT_REMOVE: function (e) {
			let { channelId: t, user: n } = e,
				r = O.values(N(t))[0];
			if (null == r || null == r.viewers) return !1;
			O.set(r.userId, {
				...r,
				viewers: r.viewers.filter((e) => e.id !== n.id)
			});
		},
		CHANNEL_CREATE: function (e) {
			var t;
			let { channel: n } = e,
				r = O.values(N(n.id))[0];
			if (null == r) return !1;
			let i = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
			O.set(r.userId, {
				...r,
				viewers: i.filter((e) => e.id !== r.userId).map((e) => new E.Z(e))
			});
		},
		LOGOUT: function () {
			m.clear(), T.clear(), g.clear(), (S = []), O.clear();
		}
	}));
