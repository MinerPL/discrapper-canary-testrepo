n(653041);
var i,
	a = n(392711),
	s = n.n(a),
	r = n(442837),
	l = n(570140),
	o = n(194359),
	c = n(81825),
	d = n(5254),
	u = n(199902),
	_ = n(271383),
	E = n(430824),
	h = n(158776),
	m = n(699516),
	I = n(594174),
	g = n(981631);
function p(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
function T(e) {
	let t = I.default.getUser(e);
	return {
		user: t,
		usernameLower: null != t ? t.username.toLowerCase() : null
	};
}
function S(e) {
	return {
		status: h.Z.getStatus(e),
		isMobile: h.Z.isMobileOnline(e),
		activities: h.Z.getActivities(e),
		applicationStream: u.Z.getAnyStreamForUser(e)
	};
}
function f(e) {
	let t = [];
	return (
		s()(_.ZP.memberOf(e))
			.map(E.Z.getGuild)
			.sortBy((e) => (null != e ? e.name.toLowerCase() : null))
			.forEach((e) => {
				null != e && t.push(e);
			}),
		{
			mutualGuildsLength: t.length,
			mutualGuilds: t.slice(0, 5)
		}
	);
}
class C extends c.Z {
	get comparator() {
		var e, t, n, i, a;
		return [this.type, null !== (a = null !== (i = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== i ? i : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : this.usernameLower];
	}
	constructor(e) {
		super(), p(this, 'key', void 0), p(this, 'type', void 0), p(this, 'status', void 0), p(this, 'isMobile', void 0), p(this, 'activities', void 0), p(this, 'applicationStream', void 0), p(this, 'user', void 0), p(this, 'usernameLower', void 0), p(this, 'mutualGuildsLength', void 0), p(this, 'mutualGuilds', void 0), p(this, 'nickname', void 0), (this.key = e.key), (this.type = e.type), (this.status = e.status), (this.activities = e.activities), (this.applicationStream = e.applicationStream), (this.user = e.user), (this.isMobile = e.isMobile), (this.usernameLower = e.usernameLower), (this.mutualGuildsLength = e.mutualGuildsLength), (this.mutualGuilds = e.mutualGuilds), (this.nickname = e.nickname);
	}
}
class N {
	reset() {
		let e = s().map(
				m.Z.getRelationships(),
				(e, t) =>
					new C({
						key: t,
						type: e,
						nickname: m.Z.getNickname(t),
						...T(t),
						...S(t),
						...f(t)
					})
			),
			t = s().map(
				d.Z.getSuggestions(),
				(e) =>
					new C({
						key: e.key,
						type: 99,
						nickname: e.name,
						...T(e.key),
						...S(e.key),
						...f(e.key)
					})
			);
		return new N(s().concat(e, t));
	}
	clone() {
		return new N(this._rows);
	}
	update(e) {
		let t = !1;
		for (let n = 0; n < this._rows.length; n++) {
			let i = this._rows[n],
				a = i.merge(e(i.key));
			(t = t || a !== i), (this._rows[n] = a);
		}
		return t;
	}
	filter(e, t) {
		return s()(this._rows)
			.filter((e) => {
				if (null == e.user) return !1;
				if (null != t && '' !== t) {
					let n = t.toLowerCase();
					return [e.usernameLower, e.nickname, e.user.globalName].map((e) => (null == e ? void 0 : e.toLowerCase())).some((e) => (null == e ? void 0 : e.includes(n)));
				}
				return !0;
			})
			.filter((t) => {
				switch (e) {
					case g.pJs.ONLINE:
						return t.type === g.OGo.FRIEND && t.status !== g.Skl.OFFLINE;
					case g.pJs.PENDING:
						return t.type === g.OGo.PENDING_INCOMING || t.type === g.OGo.PENDING_OUTGOING;
					case g.pJs.SUGGESTIONS:
						return 99 === t.type;
					case g.pJs.BLOCKED:
						return t.type === g.OGo.BLOCKED;
					case g.pJs.ALL:
					default:
						return t.type === g.OGo.FRIEND;
				}
			})
			.sortBy((e) => e.comparator)
			.value();
	}
	getRelationshipCounts() {
		let e = {
			[g.OGo.FRIEND]: 0,
			[g.OGo.PENDING_INCOMING]: 0,
			[g.OGo.PENDING_OUTGOING]: 0,
			99: 0,
			[g.OGo.BLOCKED]: 0
		};
		return (
			this._rows.forEach((t) => {
				null != t.user && null != e[t.type] && e[t.type]++;
			}),
			e
		);
	}
	constructor(e = []) {
		p(this, '_rows', void 0), (this._rows = e);
	}
}
let A = !0,
	v = !1,
	Z = g.pJs.ONLINE,
	L = new N(),
	O = !0,
	R = !1;
function x() {
	let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
	A && (e || (Z !== g.pJs.ONLINE && Z !== g.pJs.ADD_FRIEND)) && !v && ((A = !1), (v = !0), o.Z.fetchRelationships());
}
function b() {
	if (((A = !0), O ? (v = !1) : x(), (L = L.reset()), R)) return;
	let e = L.getRelationshipCounts();
	Z = 0 === e[g.OGo.FRIEND] ? (0 !== e[g.OGo.PENDING_INCOMING] ? g.pJs.PENDING : g.pJs.ADD_FRIEND) : g.pJs.ONLINE;
}
function P() {
	L = O ? new N() : L.reset();
}
function M(e) {
	return function () {
		return !O && !!L.update(e) && ((L = L.clone()), !0);
	};
}
class D extends (i = r.ZP.Store) {
	initialize() {
		this.waitFor(m.Z, h.Z, I.default, E.Z, _.ZP, u.Z, d.Z), this.syncWith([m.Z], P), this.syncWith([d.Z], P), this.syncWith([I.default], M(T)), this.syncWith([h.Z, u.Z], M(S)), b();
	}
	getState() {
		return {
			fetching: v,
			section: Z,
			pendingCount: m.Z.getPendingCount(),
			rows: L
		};
	}
}
p(D, 'displayName', 'FriendsStore'),
	(t.ZP = new D(l.Z, {
		CONNECTION_OPEN: function () {
			b();
		},
		FRIENDS_SET_SECTION: function (e) {
			(Z = e.section), x();
		},
		CHANNEL_SELECT: function (e) {
			let { channelId: t } = e;
			return (O = null != t), P(), !O;
		},
		LOAD_RELATIONSHIPS_SUCCESS: function () {
			v = !1;
		},
		LOAD_RELATIONSHIPS_FAILURE: function () {
			(A = !0), (v = !0);
		},
		DRAWER_SELECT_TAB: function (e) {
			let { tab: t } = e;
			return (O = t !== g.cII.FRIENDS), P(), !O;
		},
		FRIENDS_SET_INITIAL_SECTION: function (e) {
			(Z = e.section), (R = !0);
		}
	}));
