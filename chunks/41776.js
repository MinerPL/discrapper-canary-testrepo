n(47120), n(724458);
var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140),
	u = n(271383),
	c = n(430824),
	d = n(594174),
	_ = n(981631);
let E = [],
	f = {},
	h = null,
	p = null;
function I(e) {
	let t = E.indexOf(e);
	if (t > -1) {
		let n = [...E];
		return n.splice(t, 1), (E = n), delete f[e], !0;
	}
	return !1;
}
function m(e) {
	return !(e === _.ME || E.includes(e)) && ((E = [...E, e]), !0);
}
class T extends (r = o.ZP.Store) {
	initialize() {
		this.waitFor(c.Z, d.default);
	}
	setHistorySnapshot(e) {
		h = e;
	}
	getHistorySnapshot() {
		return h;
	}
	lurkingGuildIds() {
		return E;
	}
	mostRecentLurkedGuildId() {
		return 0 === E.length ? null : E[E.length - 1];
	}
	isLurking(e) {
		var t;
		let n = u.ZP.isCurrentUserGuest(e),
			r = null === (t = c.Z.getGuild(e)) || void 0 === t ? void 0 : t.isLurker();
		return !!(!n && r);
	}
	getLurkingSource() {
		return p;
	}
	getLoadId(e) {
		return null != e ? f[e] : null;
	}
}
(s = 'LurkingStore'),
	(a = 'displayName') in (i = T)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new T(l.Z, {
		CONNECTION_OPEN: function () {
			E = Object.values(c.Z.getGuilds()).reduce((e, t) => (t.isLurker() ? [...e, t.id] : e), []);
		},
		GUILD_JOIN: function (e) {
			let { guildId: t, lurker: n, source: r, directoryChannelId: i, loadId: a } = e;
			if (n) {
				var s, o;
				switch ((m(t), (s = t), null != (o = a) && (f[s] = o), r)) {
					case _.vtS.MOBILE_GUILD_DISCOVERY:
						p = { type: _.vtS.MOBILE_GUILD_DISCOVERY };
						break;
					case _.vtS.DIRECTORY_ENTRY:
						p = {
							type: _.vtS.DIRECTORY_ENTRY,
							directoryChannelId: i
						};
						break;
					default:
						p = null;
				}
				return !0;
			}
			return !1;
		},
		GUILD_STOP_LURKING: function (e) {
			let { ignoredGuildIds: t } = e,
				n = (function (e) {
					let t = new Set([...(null != e ? e : [])]);
					return [...E].reduce((e, n) => (t.has(n) ? e : I(n) || e), !1);
				})(t);
			return n && ((h = null), (p = null)), n;
		},
		GUILD_STOP_LURKING_FAILURE: function (e) {
			let { lurkingGuildId: t, lurkingSource: n } = e;
			return m(t), (p = n), !0;
		},
		GUILD_CREATE: function (e) {
			let { guild: t } = e;
			return !!(null != t.joined_at && E.includes(t.id)) && (I(t.id), (h = null), (p = null), !0);
		},
		GUILD_DELETE: function (e) {
			let { guild: t } = e;
			return !!E.includes(t.id) && (I(t.id), (h = null), (p = null), !0);
		},
		GUILD_MEMBER_ADD: function (e) {
			var t;
			let { guildId: n, joinedAt: r, user: i } = e,
				a = i.id === (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
			return !!(a && null != r && E.includes(n)) && (I(n), (h = null), (p = null), !0);
		}
	}));
