n(47120);
var r,
	i,
	a,
	s,
	o = n(392711),
	l = n.n(o),
	u = n(442837),
	c = n(570140),
	d = n(131704),
	_ = n(592125);
let E = {};
function f(e) {
	var t;
	null === (t = e.threads) || void 0 === t || t.forEach(h);
}
function h(e) {
	if (!d.AW.has(e.type)) return !1;
	let t = (function (e) {
		if (!(e.id in E)) {
			var t, n;
			E[e.id] = {
				guildId: e.guild_id,
				parentId: e.parent_id,
				memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
				memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
			};
		}
		return E[e.id];
	})(e);
	null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview);
}
function p(e) {
	let { channel: t } = e;
	return h(t);
}
function m(e) {
	let { threads: t } = e;
	t.forEach(T);
}
function I(e) {
	let t = !1;
	for (let n of e.messages) for (let e of n) t = T(e.thread) || t;
	return (
		e.threads.forEach((e) => {
			t = T(e) || t;
		}),
		t
	);
}
function T(e) {
	if (null != e && !(e.id in E)) {
		let t = _.Z.getChannel(e.id);
		if (null != t) return h(t), !0;
	}
	return !1;
}
class g extends (r = u.ZP.Store) {
	initialize() {
		this.waitFor(_.Z);
	}
	getMemberCount(e) {
		var t, n;
		return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null;
	}
	getMemberIdsPreview(e) {
		var t, n;
		return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null;
	}
	getInitialOverlayState() {
		return E;
	}
}
(s = 'ThreadMembersStore'),
	(a = 'displayName') in (i = g)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new g(c.Z, {
		CONNECTION_OPEN: function (e) {
			(E = {}), e.guilds.forEach(f);
		},
		OVERLAY_INITIALIZE: function (e) {
			let { threadMembers: t } = e;
			E = { ...t };
		},
		GUILD_CREATE: function (e) {
			let { guild: t } = e;
			f(t);
		},
		GUILD_DELETE: function (e) {
			var t;
			let { guild: n } = e;
			(t = n.id), (E = l().omitBy(E, (e) => e.guildId === t));
		},
		CHANNEL_DELETE: function (e) {
			var t;
			let { channel: n } = e;
			(t = n.id), (E = l().omitBy(E, (e) => e.parentId === t));
		},
		THREAD_CREATE: p,
		THREAD_UPDATE: p,
		THREAD_LIST_SYNC: function (e) {
			let { threads: t } = e;
			t.forEach(h);
		},
		THREAD_MEMBERS_UPDATE: function (e) {
			let t = E[e.id];
			if (null == t) return !1;
			null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), (t.memberCount = e.memberCount);
		},
		SEARCH_FINISH: I,
		MOD_VIEW_SEARCH_FINISH: I,
		LOAD_THREADS_SUCCESS: m,
		LOAD_ARCHIVED_THREADS_SUCCESS: m,
		THREAD_DELETE: function (e) {
			let { channel: t } = e;
			delete E[t.id];
		},
		LOAD_MESSAGES_SUCCESS: function (e) {
			let t = !1;
			for (let n of e.messages) t = T(n.thread) || t;
			return t;
		}
	}));
