n(47120);
var i,
	a,
	s,
	r,
	l = n(392711),
	o = n.n(l),
	c = n(442837),
	u = n(570140),
	d = n(314897),
	_ = n(699516),
	E = n(885110),
	I = n(981631);
let m = {},
	T = {};
function h(e, t) {
	var n;
	return (null !== (n = m[e]) && void 0 !== n ? n : {})[t];
}
function N(e, t) {
	let n = h(e, t);
	if (null == n) return;
	let i = m[e];
	delete i[t], o().isEmpty(i) && delete m[e];
	let a = T[n];
	null != a && (a.delete(e), 0 === a.size && delete T[n]);
}
function f(e, t, n, i) {
	let a = n.find((e) => null != e.party && e.party.id),
		s = null != a && null != a.party ? a.party.id : null,
		r = h(t, e);
	if (null == s || i === I.Skl.OFFLINE) return null != r && (N(t, e), void 0);
	if (null != r) {
		if (r === s) return !1;
		N(t, e);
	}
	!(function (e, t, n) {
		var i;
		let a = m[e];
		if ((null == a && (a = m[e] = {}), (a[t] = n), _.Z.isBlocked(e))) return;
		let s = null !== (i = T[n]) && void 0 !== i ? i : new Set();
		(T[n] = s), s.add(e);
	})(t, e, s);
}
function C(e) {
	let { guild: t } = e,
		n = !1;
	for (let { user: e, status: i, activities: a } of t.presences) !1 !== f(t.id, e.id, a, i) && (n = !0);
	return n;
}
function p(e, t) {
	let n = !1;
	return (
		t.forEach((t) => {
			null != t && f(e, t.user.id, t.activities, t.status) && (n = !0);
		}),
		n
	);
}
function g() {
	let e = d.default.getId(),
		t = E.Z.getActivities();
	return f(I.ME, e, t);
}
class S extends (i = c.ZP.Store) {
	initialize() {
		this.syncWith([E.Z], g), this.waitFor(E.Z, _.Z);
	}
	getParty(e) {
		return null != e && null != T[e] ? T[e] : null;
	}
	getUserParties() {
		return m;
	}
	getParties() {
		return T;
	}
}
(r = 'GamePartyStore'),
	(s = 'displayName') in (a = S)
		? Object.defineProperty(a, s, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = r),
	(t.Z = new S(u.Z, {
		CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
			let { guilds: t, presences: n } = e,
				i = !1;
			for (let { user: e, status: t, activities: a } of n) null != e && !1 !== f(I.ME, e.id, a, t) && (i = !0);
			for (let e of t) !1 !== C({ guild: e }) && (i = !0);
			return i;
		},
		OVERLAY_INITIALIZE: function (e) {
			let { parties: t, userParties: n } = e;
			(T = {}), (m = { ...n }), Object.keys(t).forEach((e) => (T[e] = new Set(t[e])));
		},
		GUILD_CREATE: C,
		PRESENCES_REPLACE: function (e) {
			let { presences: t } = e,
				n = !1;
			for (let { user: e, activities: i } of t) null != e && !1 !== f(I.ME, e.id, i) && (n = !0);
			return n;
		},
		PRESENCE_UPDATES: function (e) {
			let { updates: t } = e;
			return t
				.map((e) => {
					let { guildId: t, user: n, status: i, activities: a } = e;
					return f(null != t ? t : I.ME, n.id, a, i);
				})
				.some((e) => e);
		},
		THREAD_MEMBER_LIST_UPDATE: function (e) {
			let { guildId: t, members: n } = e;
			return p(
				t,
				n.map((e) => e.presence)
			);
		},
		THREAD_MEMBERS_UPDATE: function (e) {
			let { guildId: t, addedMembers: n } = e;
			return (
				null != n &&
				p(
					t,
					n.map((e) => e.presence)
				)
			);
		},
		RELATIONSHIP_ADD: function (e) {
			let { relationship: t } = e;
			if (!_.Z.isBlocked(t.id)) return !1;
			let n = m[t.id];
			if (null == n) return !1;
			for (let e of o().values(n)) {
				let n = T[e];
				null != n && n.delete(t.id);
			}
		},
		RELATIONSHIP_REMOVE: function (e) {
			let { relationship: t } = e,
				n = m[t.id];
			if (null == n) return !1;
			for (let e of o().values(n)) {
				let n = T[e];
				null != n && n.add(t.id);
			}
		}
	}));
