let r;
n.d(t, {
	I: function () {
		return S;
	}
}),
	n(47120);
var i,
	a,
	s,
	o,
	l = n(392711),
	u = n.n(l),
	c = n(683860),
	d = n(442837),
	_ = n(570140),
	E = n(882252),
	f = n(228392),
	h = n(131704),
	p = n(592125),
	I = n(306680),
	m = n(823379),
	T = n(709054),
	g = n(569471);
let S = 25,
	A = !1,
	N = !0,
	v = !1,
	O = !1,
	R = null,
	C = c.z.LATEST_ACTIVITY,
	y = [],
	D = 0;
function L() {
	(A = !1), (N = !0), (v = !1), (O = !1), (R = null), (C = c.z.LATEST_ACTIVITY), (r = new Set()), (D = 0), (y = []);
}
function b(e, t) {
	return t === c.z.LATEST_ACTIVITY ? I.ZP.lastMessageId(e.id) : e.id;
}
function M() {
	if (null == R) return !1;
	let e = !v,
		t = p.Z.getChannel(y[y.length - 1]),
		n = null == t ? null : b(t, C);
	y = u()(p.Z.getAllThreadsForParent(R))
		.filter((e) => e.isArchivedThread())
		.filter((t) => {
			var i;
			if (0 !== r.size && (null === (i = t.appliedTags) || void 0 === i ? void 0 : i.some((e) => r.has(e))) !== !0)
				return !1;
			if (e || null == n) return !0;
			{
				let e = null == t ? null : b(t, C);
				return null != e && T.default.compare(e, n) >= 0;
			}
		})
		.sort((e, t) => T.default.compare(b(e, C), b(t, C)))
		.map((e) => e.id)
		.reverse()
		.value();
}
function P(e) {
	if (!(y.indexOf(e) >= 0)) return !1;
	y = y.filter((t) => t !== e);
}
let U = [];
class w extends (i = d.ZP.Store) {
	initialize() {
		this.waitFor(p.Z, g.Z, I.ZP);
	}
	get canLoadMore() {
		return v && !A && !O;
	}
	get nextOffset() {
		return D;
	}
	get isInitialLoad() {
		return N;
	}
	isLoading(e, t, n) {
		return R === e && C === t && (0, m.OL)(r, n) ? A : (L(), !1);
	}
	getThreads(e, t, n) {
		return R === e && C === t && (0, m.OL)(r, n) ? y : U;
	}
}
(o = 'ArchivedThreadsStore'),
	(s = 'displayName') in (a = w)
		? Object.defineProperty(a, s, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = o),
	(t.Z = new w(_.Z, {
		CONNECTION_OPEN: L,
		THREAD_DELETE: function (e) {
			let { channel: t } = e;
			return P(t.id);
		},
		THREAD_UPDATE: function (e) {
			let { channel: t } = e;
			return R === t.parent_id && !!(0, E.yv)(t.id) && void P(t.id);
		},
		CHANNEL_DELETE: function (e) {
			if (e.channel.id !== R) return !1;
			L();
		},
		LOAD_ARCHIVED_THREADS: function (e) {
			(e.channelId !== R || e.sortOrder !== C || !(0, m.OL)(e.tagFilter, r)) && L(),
				(R = e.channelId),
				(C = e.sortOrder),
				(r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
				(A = !0),
				(N = !1);
		},
		LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
			if (e.channelId !== R || e.sortOrder !== C || !(0, m.OL)(e.tagFilter, r)) return !1;
			let t = e.threads.filter((e) => h.AW.has(e.type)).map((e) => e.id);
			y = y.concat(t);
			let n = p.Z.getChannel(R);
			null != n &&
				n.isForumLikeChannel() &&
				(0, f.Hr)({
					guildId: n.guild_id,
					channelId: n.id,
					numArchivedThreads: y.length,
					hasMoreThreads: e.hasMore,
					filterTagIds: Array.from(e.tagFilter),
					sortOrder: e.sortOrder
				}),
				M(),
				(v = e.hasMore),
				(D = e.offset + S),
				(A = !1),
				(N = !1);
		},
		LOAD_ARCHIVED_THREADS_FAIL: function (e) {
			if (e.channelId !== R || e.sortOrder !== C || !(0, m.OL)(e.tagFilter, r)) return !1;
			(A = !1), (O = !0), (N = !1);
		},
		RESORT_THREADS: function (e) {
			return (null == R || null == e.channelId || R === e.channelId) && M();
		}
	}));
