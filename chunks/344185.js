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
	_ = n(592125),
	E = n(709054);
let f = {},
	h = new Set();
function p(e) {
	return {
		id: e.id,
		parentId: e.parent_id
	};
}
function I(e) {
	e in f && delete f[e];
}
function m(e) {
	null != e.threads &&
		e.threads.length > 0 &&
		((f[e.id] = {}), e.threads.filter((e) => d.AW.has(e.type)).forEach((t) => T(e.id, t))),
		e.hasThreadsSubscription && h.add(e.id);
}
function T(e, t) {
	let n = f[e],
		r = t.parent_id;
	!(r in n) && (n[r] = {}), (f[e][r][t.id] = p(t));
}
function g(e) {
	var t, n;
	let { channel: r } = e;
	if (!d.AW.has(r.type)) return !1;
	if ((null === (t = r.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return S(r);
	{
		let e = null !== (n = f[r.guild_id]) && void 0 !== n ? n : {};
		f[r.guild_id] = {
			...e,
			[r.parent_id]: {
				...e[r.parent_id],
				[r.id]: p(r)
			}
		};
	}
}
function S(e) {
	let { guild_id: t, parent_id: n, id: r } = e;
	if (null == t || null == n || !(t in f) || !(n in f[t]) || !(r in f[t][n])) return !1;
	(f[t] = {
		...f[t],
		[n]: { ...f[t][n] }
	}),
		delete f[t][n][r],
		l().isEmpty(f[t][n]) && delete f[t][n];
}
let A = {};
class N extends (r = u.ZP.Store) {
	initialize() {
		this.waitFor(_.Z);
	}
	isActive(e, t, n) {
		return null != e && null != this.getThreadsForParent(e, t)[n];
	}
	getThreadsForGuild(e) {
		var t;
		return null !== (t = f[e]) && void 0 !== t ? t : A;
	}
	getThreadsForParent(e, t) {
		var n;
		return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : A;
	}
	hasThreadsForChannel(e, t) {
		return !l().isEmpty(this.getThreadsForParent(e, t));
	}
	forEachGuild(e) {
		E.default.keys(f).forEach((t) => {
			e(t, f[t]);
		});
	}
	hasLoaded(e) {
		return h.has(e);
	}
}
(s = 'ActiveThreadsStore'),
	(a = 'displayName') in (i = N)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new N(c.Z, {
		CONNECTION_OPEN: function (e) {
			(f = {}),
				h.clear(),
				e.guilds.forEach((e) => {
					m(e);
				});
		},
		OVERLAY_INITIALIZE: function (e) {
			let { channels: t } = e;
			(f = {}),
				l()(t)
					.filter((e) => d.Ec.has(e.type))
					.groupBy('guild_id')
					.forEach((e, t) => {
						(f[t] = {}), e.forEach((e) => T(t, e));
					});
		},
		GUILD_CREATE: function (e) {
			let { guild: t } = e;
			I(t.id), m(t);
		},
		GUILD_DELETE: function (e) {
			let { guild: t } = e;
			I(t.id);
		},
		THREAD_CREATE: g,
		THREAD_UPDATE: g,
		THREAD_LIST_SYNC: function (e) {
			let { guildId: t, threads: n, channelIds: r } = e;
			for (let e in (null == r && h.add(t), (f[t] = { ...f[t] }), f[t])) f[t][e] = { ...f[t][e] };
			n.forEach((e) => T(t, e));
		},
		THREAD_DELETE: function (e) {
			let { channel: t } = e;
			return S(t);
		},
		CHANNEL_DELETE: function (e) {
			let { channel: t } = e;
			if (null == t.guild_id || !(t.guild_id in f)) return !1;
			(f[t.guild_id] = { ...f[t.guild_id] }), delete f[t.guild_id][t.id];
		}
	}));
