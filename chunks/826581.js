n(47120), n(653041);
var r,
	i,
	a,
	s,
	o = n(913527),
	l = n.n(o),
	u = n(442837),
	c = n(759174),
	d = n(570140),
	_ = n(430824),
	E = n(594174),
	f = n(70956),
	h = n(881952),
	p = n(246364),
	I = n(937111),
	m = n(981631);
let T = new Map(),
	g = {};
function S(e) {
	return g[e];
}
function A(e, t) {
	(g[e] = t), T.set(e, l()());
}
function N(e, t, n) {
	if (t !== n && null != t) {
		if (t === p.wB.SUBMITTED) {
			let t = g[e];
			A(e, t + 1);
		}
		if (n === p.wB.SUBMITTED) {
			let t = g[e];
			A(e, Math.max(0, t - 1));
		}
	}
}
let v = !1,
	O = (e) => 'guild-join-request='.concat(e),
	R = (e, t) => 'guild-'.concat(e, '-').concat(t);
function C(e) {
	let t = [];
	return t.push(O(e.joinRequestId)), t.push(R(e.guildId, e.applicationStatus)), t;
}
let y = new c.h(C, (e) => ''.concat(e.joinRequestId)),
	D = new c.h(C, (e) => ''.concat(e.joinRequestId)),
	L = new c.h(C, (e) => ''.concat(e.actionedAt));
function b(e) {
	return y.get(e);
}
function M(e) {
	(G[e.joinRequestId] = e),
		y.set(e.joinRequestId, e),
		(0, h.Nd)(e.applicationStatus) && (L.delete(e.joinRequestId), D.set(e.joinRequestId, e)),
		(0, h.bk)(e.applicationStatus) && (D.delete(e.joinRequestId), L.set(e.joinRequestId, e));
}
function P(e) {
	var t, n;
	let { guildId: r, request: i } = e,
		a = (0, I.j)(i),
		s = E.default.getCurrentUser();
	if (null == s || a.userId === s.id) return !1;
	let o = null === ((n = a.joinRequestId), (t = y.get(n))) || void 0 === t ? void 0 : t.applicationStatus;
	return N(r, a.applicationStatus, o), M(a), !0;
}
let U = {},
	w = {},
	x = {},
	G = {},
	k = 10 * f.Z.Seconds.MINUTE;
class B extends (r = u.ZP.Store) {
	getRequest(e) {
		return G[e];
	}
	getRequests(e, t) {
		let n = R(e, t);
		return (0, h.bk)(t) ? L.values(n) : (0, h.Nd)(t) ? D.values(n) : y.values(n);
	}
	getSubmittedGuildJoinRequestTotal(e) {
		return g[e];
	}
	isFetching() {
		return v;
	}
	hasFetched(e) {
		if (!T.has(e)) return !1;
		let t = T.get(e);
		return null != t && l()().diff(t, 'seconds') < k;
	}
	getSelectedApplicationTab(e) {
		var t;
		let n = _.Z.getGuild(e),
			r = (null == n ? void 0 : n.hasFeature(m.oNc.CLAN)) ? 'REVIEW_APPLICATION' : p.wB.SUBMITTED;
		return null !== (t = U[e]) && void 0 !== t ? t : r;
	}
	getSelectedSortOrder(e) {
		var t;
		return null !== (t = w[e]) && void 0 !== t ? t : p.Nw.TIMESTAMP_DESC;
	}
	getSelectedGuildJoinRequest(e) {
		var t;
		let n = x[e];
		return null != n ? ((t = n.joinRequestId), y.get(t)) : null;
	}
}
(s = 'GuildJoinRequestStoreV2'),
	(a = 'displayName') in (i = B)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new B(d.Z, {
		GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function (e) {
			let { joinRequest: t } = e;
			M(t);
		},
		GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function (e) {
			let { status: t, requests: n, total: r, guildId: i } = e;
			(v = !1),
				t === p.wB.SUBMITTED && A(i, r),
				n.forEach((e) => {
					M(e);
				});
		},
		GUILD_JOIN_REQUESTS_FETCH_START: function () {
			v = !0;
		},
		GUILD_JOIN_REQUESTS_FETCH_FAILURE: function () {
			v = !1;
		},
		GUILD_JOIN_REQUESTS_BULK_ACTION: function (e) {
			let { guildId: t, action: n } = e;
			y.values(R(t, p.wB.SUBMITTED)).forEach((e) => {
				M({
					...e,
					applicationStatus: n
				});
			}),
				A(t, 0);
		},
		GUILD_JOIN_REQUEST_CREATE: P,
		GUILD_JOIN_REQUEST_UPDATE: P,
		GUILD_JOIN_REQUEST_DELETE: function (e) {
			var t, n;
			let { id: r, guildId: i } = e;
			let a = ((t = r), y.get(t));
			if (null != a) {
				N(i, null, a.applicationStatus), (n = r), delete G[n], y.delete(n), D.delete(n), L.delete(n);
			}
		},
		GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function (e) {
			let { guildId: t, applicationTab: n } = e;
			n !== U[t] && (U[t] = n);
		},
		GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function (e) {
			var t;
			let { guildId: n, sortOrder: r } = e;
			if (r === w[n]) return;
			w[n] = r;
			let i = null !== (t = U[n]) && void 0 !== t ? t : p.wB.SUBMITTED;
			'REVIEW_APPLICATION' !== i && ((0, h.bk)(i) && L.clear(), (0, h.Nd)(i) && D.clear());
		},
		GUILD_JOIN_REQUESTS_SET_SELECTED: function (e) {
			let { guildId: t, request: n } = e;
			x[t] = n;
		}
	}));
