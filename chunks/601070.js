n(47120), n(653041);
var r,
	i,
	a,
	s,
	o = n(392711),
	l = n.n(o),
	u = n(442837),
	c = n(570140),
	d = n(131704),
	_ = n(592125),
	E = n(430824),
	f = n(306680),
	h = n(944486),
	p = n(709054),
	m = n(344185),
	I = n(569471),
	T = n(819168),
	g = n(176505);
let S = {},
	A = {},
	N = {},
	v = {},
	O = {},
	R = {},
	C = null,
	y = {};
function D() {
	for (let e in ((S = {}), (O = {}), (A = {}), (N = {}), (v = {}), (C = h.Z.getChannelId()), y)) clearTimeout(y[e]);
	(y = {}),
		m.Z.forEachGuild((e) => {
			b(e);
		}),
		M();
}
function L(e) {
	for (let t in (delete S[e], delete O[e], delete A[e], delete N[e], delete v[e], b(e), N[e])) U(e, t);
}
function b(e) {
	let t = m.Z.getThreadsForGuild(e);
	for (let e in t)
		for (let n in t[e]) {
			Z(n);
			let e = _.Z.getChannel(n);
			if (null == e) continue;
			let t = I.Z.joinTimestamp(n);
			if (null != t) {
				let n = {
						channel: e,
						joinTimestamp: t.getTime()
					},
					{ isUnread: r, isRelevant: i, isTimedRelevant: a } = V(e);
				Y(S, e, n, !1), Y(O, e, i ? n : null, !1), Y(A, e, r ? n : null, !1), a && H(e, !0);
			} else {
				Y(N, e, e, !1);
				let t = f.ZP.isForumPostUnread(e.id);
				Y(v, e, t ? e : null, !1);
			}
		}
}
function M() {
	for (let e in ((R = {}), N)) for (let t in N[e]) U(e, t);
}
function P(e) {
	let t = _.Z.getBasicChannel(e);
	null != t && d.uC.has(t.type) && U(t.guild_id, t.id);
}
function U(e, t) {
	let n = _.Z.getChannel(t);
	if (null == n || !n.isForumLikeChannel()) return;
	if ((null == R[e] && (R[e] = {}), (R[e][t] = 0), null == N[e] || null == N[e][t])) return;
	let r = E.Z.getGuild(e);
	if (null == r) return;
	let i = f.ZP.getTrackedAckMessageId(t);
	if (null == i) {
		let e = Date.now();
		null != r.joinedAt && (r.joinedAt instanceof Date ? (e = r.joinedAt.getTime()) : 'string' == typeof r.joinedAt && (e = new Date(r.joinedAt).getTime())), (i = p.default.fromTimestamp(e));
	}
	for (let n in N[e][t]) t === C ? f.ZP.isNewForumThread(n, t, r) && R[e][t]++ : p.default.compare(n, i) > 0 && !f.ZP.hasOpenedThread(n) && R[e][t]++;
}
function w(e, t, n) {
	if (null == t) return !1;
	let r = _.Z.getChannel(n),
		i = I.Z.joinTimestamp(n);
	if (null != r && m.Z.isActive(e, t, n)) {
		if (null != i) {
			let e = {
					channel: r,
					joinTimestamp: i.getTime()
				},
				{ isUnread: t, isRelevant: n, isTimedRelevant: a } = V(r);
			Y(S, r, e, !0), Y(O, r, n ? e : null, !0), Y(A, r, t ? e : null, !0), Y(N, r, null, !0), Y(v, r, null, !0), H(r, a);
		} else {
			let e = f.ZP.isForumPostUnread(r.id);
			Y(S, r, null, !0), Y(A, r, null, !0), Y(O, r, null, !0), Y(N, r, r, !0), Y(v, r, e ? r : null, !0), Z(r.id);
		}
		U(e, t);
	} else j(S, e, t, n), j(O, e, t, n), j(A, e, t, n), j(N, e, t, n), j(v, e, t, n), Z(n), U(e, t);
}
function x(e) {
	return w(e.channel.guild_id, e.channel.parent_id, e.channel.id);
}
function G(e) {
	let t = _.Z.getChannel(e.id);
	return !!(null != t && m.Z.isActive(e.guildId, t.parent_id, e.id)) && w(t.guild_id, t.parent_id, t.id);
}
function k(e) {
	let t = _.Z.getChannel(e.channelId);
	if (null == t) B();
	else {
		let { guild_id: e, parent_id: r } = t;
		if (!d.Ec.has(t.type)) {
			var n;
			return !!(Number(null === (n = R[e]) || void 0 === n ? void 0 : n[t.id]) > 0) && (U(e, t.id), !0);
		}
		if (null == r) return !1;
		if (W(S, t)) {
			let { isUnread: n, isRelevant: i, isTimedRelevant: a } = V(t);
			H(t, a);
			let s = W(A, t),
				o = W(O, t);
			if (n === s && i === o) return !1;
			let l = S[e][r][t.id],
				u = n ? l : null,
				c = i ? l : null;
			Y(A, t, u, !0), Y(O, t, c, !0), U(e, r);
		} else {
			let e = W(v, t),
				n = f.ZP.isForumPostUnread(t.id);
			if (n === e) return !1;
			Y(v, t, n ? t : null, !0);
		}
	}
}
function B() {
	for (let e in ((A = {}), (O = {}), S))
		for (let t in S[e])
			for (let n in S[e][t]) {
				let r = S[e][t][n],
					{ isUnread: i, isRelevant: a, isTimedRelevant: s } = V(r.channel);
				i && Y(A, r.channel, r, !1), a && Y(O, r.channel, r, !1), H(r.channel, s);
			}
	for (let e in ((v = {}), N))
		for (let t in N[e])
			for (let n in N[e][t]) {
				let r = N[e][t][n];
				f.ZP.isForumPostUnread(n) && Y(v, r, r, !1);
			}
	M();
}
function F() {
	let e = C;
	if ((C = h.Z.getChannelId()) === e) return !1;
	P(e), P(C);
}
function V(e) {
	let t = f.ZP.getMentionCount(e.id) > 0,
		n = f.ZP.hasUnread(e.id) && !I.Z.isMuted(e.id),
		r = e.hasFlag(g.zZ.PINNED),
		i = e.isActiveThread(),
		a = i && (0, T.Z)(e) > Date.now();
	return {
		isUnread: ((i || r) && n) || t,
		isRelevant: a || r || n || t,
		isTimedRelevant: a
	};
}
function H(e, t) {
	Z(e.id),
		t &&
			(function (e) {
				y[e.id] = setTimeout(
					() => {
						let t = _.Z.getChannel(e.id);
						null != t &&
							c.Z.dispatch({
								type: 'THREAD_UPDATE',
								channel: t
							});
					},
					(0, T.Z)(e) - Date.now() + 1
				);
			})(e);
}
function Z(e) {
	e in y && (clearTimeout(y[e]), delete y[e]);
}
function Y(e, t, n, r) {
	let { guild_id: i, parent_id: a, id: s } = t;
	null != i &&
		null != a &&
		null != s &&
		(!(i in e) && (e[i] = {}),
		!(a in e[i]) && (e[i][a] = {}),
		r &&
			(e[i] = {
				...e[i],
				[a]: { ...e[i][a] }
			}),
		null === n ? (delete e[i][a][s], l().isEmpty(e[i][a]) && delete e[i][a]) : (e[i][a][s] = n));
}
function j(e, t, n, r) {
	if (null != t && null != n && null != r)
		K(e, t, n, r) &&
			((e[t] = {
				...e[t],
				[n]: { ...e[t][n] }
			}),
			delete e[t][n][r],
			l().isEmpty(e[t][n]) && delete e[t][n]);
}
function W(e, t) {
	return K(e, t.guild_id, t.parent_id, t.id);
}
function K(e, t, n, r) {
	return t in e && n in e[t] && r in e[t][n];
}
let z = {},
	q = {},
	Q = {},
	X = {},
	$ = {};
class J extends (r = u.ZP.Store) {
	initialize() {
		this.waitFor(m.Z, _.Z, I.Z, f.ZP), this.syncWith([h.Z], F);
	}
	hasActiveJoinedUnreadThreads(e, t) {
		return e in A && t in A[e];
	}
	getActiveUnjoinedThreadsForParent(e, t) {
		var n;
		return e in N && null !== (n = N[e][t]) && void 0 !== n ? n : X;
	}
	getActiveJoinedThreadsForParent(e, t) {
		var n;
		return e in S && null !== (n = S[e][t]) && void 0 !== n ? n : Q;
	}
	getActiveJoinedThreadsForGuild(e) {
		var t;
		return null !== (t = S[e]) && void 0 !== t ? t : z;
	}
	getActiveJoinedUnreadThreadsForGuild(e) {
		var t;
		return null !== (t = A[e]) && void 0 !== t ? t : z;
	}
	getActiveJoinedUnreadThreadsForParent(e, t) {
		var n;
		return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : Q;
	}
	getActiveJoinedRelevantThreadsForGuild(e) {
		var t;
		return null !== (t = O[e]) && void 0 !== t ? t : z;
	}
	getActiveJoinedRelevantThreadsForParent(e, t) {
		var n;
		return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : Q;
	}
	getActiveUnjoinedThreadsForGuild(e) {
		var t;
		return null !== (t = N[e]) && void 0 !== t ? t : q;
	}
	getActiveUnjoinedUnreadThreadsForGuild(e) {
		var t;
		return null !== (t = v[e]) && void 0 !== t ? t : z;
	}
	getActiveUnjoinedUnreadThreadsForParent(e, t) {
		var n;
		return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : Q;
	}
	getNewThreadCountsForGuild(e) {
		var t;
		return null !== (t = R[e]) && void 0 !== t ? t : $;
	}
	computeAllActiveJoinedThreads(e) {
		let t = [];
		for (let n in S) if (n === e || null == e) for (let e in S[n]) for (let r in S[n][e]) t.push(S[n][e][r].channel);
		return t;
	}
	getNewThreadCount(e, t) {
		var n, r;
		return null !== (r = null === (n = R[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0;
	}
	getActiveThreadCount(e, t) {
		var n, r, i, a;
		let s = l().size(null !== (i = null === (n = S[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : {});
		return s + l().size(null !== (a = null === (r = N[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : {});
	}
}
(s = 'ActiveJoinedThreadsStore'),
	(a = 'displayName') in (i = J)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new J(c.Z, {
		CONNECTION_OPEN: D,
		OVERLAY_INITIALIZE: D,
		THREAD_LIST_SYNC: function (e) {
			let { guildId: t } = e;
			return L(t);
		},
		LOAD_THREADS_SUCCESS: D,
		LOAD_ARCHIVED_THREADS_SUCCESS: D,
		SEARCH_FINISH: D,
		MOD_VIEW_SEARCH_FINISH: D,
		GUILD_CREATE: function (e) {
			let { guild: t } = e;
			return L(t.id);
		},
		GUILD_DELETE: D,
		CURRENT_USER_UPDATE: D,
		THREAD_CREATE: x,
		THREAD_UPDATE: x,
		THREAD_DELETE: x,
		CHANNEL_UPDATES: function (e) {
			let { channels: t } = e;
			for (let e of t)
				if (
					e.isNSFW() !==
					(function (e, t) {
						if (null == t) return !1;
						let n = S[e],
							r = null == n ? null : n[t];
						if (null != r) {
							for (let e in r) if (r[e].channel.isNSFW()) return !0;
						}
						let i = N[e],
							a = null == i ? null : i[t];
						if (null != a) {
							for (let e in a) if (a[e].isNSFW()) return !0;
						}
						return !1;
					})(e.guild_id, e.parent_id)
				) {
					D();
					return;
				}
			return !1;
		},
		CHANNEL_DELETE: function (e) {
			let { channel: t } = e,
				n = !1;
			return null != t.guild_id && null != t.parent_id && (t.guild_id in S && t.parent_id in S[t.guild_id] && (delete S[t.guild_id][t.parent_id], (n = !0)), t.guild_id in A && t.parent_id in A[t.guild_id] && (delete A[t.guild_id][t.parent_id], (n = !0)), t.guild_id in O && t.parent_id in O[t.guild_id] && (p.default.keys(O[t.guild_id][t.parent_id]).forEach(Z), delete O[t.guild_id][t.parent_id], (n = !0)), t.guild_id in N && t.parent_id in N[t.guild_id] && (delete N[t.guild_id][t.parent_id], (n = !0)), t.guild_id in v && t.parent_id in v[t.guild_id] && (delete v[t.guild_id][t.parent_id], (n = !0)), n && U(t.guild_id, t.parent_id)), n;
		},
		THREAD_MEMBER_UPDATE: G,
		THREAD_MEMBERS_UPDATE: G,
		LOAD_MESSAGES_SUCCESS: k,
		MESSAGE_CREATE: k,
		MESSAGE_DELETE: k,
		MESSAGE_DELETE_BULK: k,
		MESSAGE_ACK: k,
		CHANNEL_ACK: k,
		CHANNEL_LOCAL_ACK: k,
		CHANNEL_SELECT: function (e) {
			k(e), F();
		},
		PASSIVE_UPDATE_V2: function (e) {
			if (e.channels.length > 0) return L(e.guildId);
		},
		WINDOW_FOCUS: B,
		UPDATE_CHANNEL_DIMENSIONS: B,
		DRAWER_OPEN: B,
		DRAWER_CLOSE: B,
		BULK_ACK: B
	}));
