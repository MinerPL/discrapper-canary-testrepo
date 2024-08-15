n(653041), n(47120), n(724458);
var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140),
	u = n(740504),
	c = n(853856),
	d = n(314897),
	_ = n(592125),
	E = n(984933),
	f = n(430824),
	h = n(981631);
let p = null,
	m = {},
	I = null;
function T() {
	return {
		_categories: [],
		null: []
	};
}
let g = T();
function S(e, t) {
	e.index = t;
}
function A(e) {
	let t = E.ZP.getChannels(e),
		n = T(),
		r = (e) => {
			var t;
			let { channel: r } = e;
			(null !== (t = n[null != r.parent_id ? r.parent_id : 'null']) && void 0 !== t ? t : n.null).push({
				channel: r,
				index: -1
			});
		};
	return (
		t[h.d4z.GUILD_CATEGORY].forEach((e) => {
			let { channel: t } = e;
			n._categories.push({
				channel: t,
				index: -1
			}),
				(n[t.id] = []);
		}),
		t[E.sH].forEach(r),
		t[E.Zb].forEach(r),
		(0, u.Z)(n._categories, n).forEach(S),
		(m[e] = n),
		n
	);
}
function N() {
	(m = {}), null != p && A(p);
}
function v(e) {
	let {
		guild: { id: t }
	} = e;
	(m[t] = void 0), p === t && A(t);
}
function O(e) {
	let {
		channel: { guild_id: t }
	} = e;
	if (null == t) return !1;
	(m[t] = void 0), p === t && A(t);
}
function R(e) {
	let { guildId: t } = e;
	(m[t] = void 0), t === p && A(t);
}
function C(e, t) {
	if (((I = t), null == e || null == e.getGuildId())) return !1;
	let n = e.getGuildId();
	return null != n && ((m[n] = void 0), n === p && A(n), !0);
}
function y() {
	A(h.I_8);
}
class D extends (r = o.ZP.Store) {
	initialize() {
		this.waitFor(E.ZP, f.Z, d.default, _.Z, c.Z), this.syncWith([c.Z], y);
	}
	getCategories(e) {
		return null != e
			? (function (e) {
					let t = m[e];
					return null != t ? t : A(e);
				})(e)
			: g;
	}
}
(s = 'GuildCategoryStore'),
	(a = 'displayName') in (i = D)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new D(l.Z, {
		CHANNEL_SELECT: function (e) {
			let { guildId: t } = e;
			if (((p = null != t ? t : null), null == t || null != m[t])) return !1;
			A(t);
		},
		CONNECTION_OPEN: N,
		OVERLAY_INITIALIZE: N,
		CACHE_LOADED_LAZY: N,
		GUILD_CREATE: v,
		GUILD_UPDATE: v,
		GUILD_DELETE: function (e) {
			let {
				guild: { id: t }
			} = e;
			delete m[t];
		},
		CHANNEL_CREATE: O,
		CHANNEL_DELETE: O,
		CHANNEL_UPDATES: function (e) {
			let { channels: t } = e,
				n = !1;
			for (let { guild_id: e } of t) null != e && ((m[e] = void 0), (n = !0), p === e && A(e));
			return n;
		},
		GUILD_MEMBER_UPDATE: function (e) {
			let { guildId: t, user: n } = e;
			if (d.default.getId() !== n.id) return !1;
			(m[t] = void 0), t === p && A(t);
		},
		CURRENT_USER_UPDATE: function () {
			if (null == p) return !1;
			A(p);
		},
		GUILD_ROLE_CREATE: R,
		GUILD_ROLE_UPDATE: R,
		GUILD_ROLE_DELETE: R,
		IMPERSONATE_UPDATE: R,
		IMPERSONATE_STOP: R,
		VOICE_CHANNEL_SELECT: function (e) {
			let { channelId: t } = e;
			return null == t && null != I ? C(_.Z.getChannel(I), null) : C(_.Z.getChannel(t), t);
		},
		VOICE_STATE_UPDATES: function (e) {
			let { voiceStates: t } = e;
			return t.reduce((e, t) => {
				let { channelId: n, sessionId: r } = t;
				return d.default.getSessionId() !== r ? e : C(_.Z.getChannel(n), n) || e;
			}, !1);
		}
	}));
