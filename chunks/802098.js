n(47120);
var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(433517),
	u = n(570140),
	c = n(706454),
	d = n(695346),
	_ = n(581883),
	E = n(596401);
let f = {},
	h = {},
	p = null,
	m = null,
	I = null,
	T = 'lastChangeLogDate',
	g = null,
	S = null,
	A = new Set();
function N() {
	g = d.l4.getSetting();
}
class v extends (r = o.ZP.Store) {
	initialize() {
		this.waitFor(c.default, _.Z), this.syncWith([c.default], () => !0), this.syncWith([_.Z], N);
		let e = l.K.get(T);
		if (null != e)
			try {
				S = new Date(e);
			} catch {
				l.K.remove(T);
			}
	}
	getChangelog(e, t) {
		var n, r;
		return null !== (r = null === (n = f[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : null;
	}
	latestChangelogId() {
		return p;
	}
	getChangelogLoadStatus(e, t) {
		var n, r;
		return null !== (r = null === (n = h[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : E.LU.NOT_LOADED;
	}
	hasLoadedConfig() {
		return null != I;
	}
	getConfig() {
		return I;
	}
	overrideId() {
		return m;
	}
	lastSeenChangelogId() {
		return g;
	}
	lastSeenChangelogDate() {
		return S;
	}
	getStateForDebugging() {
		return {
			changelogConfig: I,
			loadedChangelogs: h,
			lastSeenChangelogId: g,
			lastSeenChangelogDate: S
		};
	}
	isLocked() {
		return A.size > 0;
	}
}
(s = 'ChangelogStore'),
	(a = 'displayName') in (i = v)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new v(u.Z, {
		CHANGE_LOG_LOCK: function (e) {
			let { key: t } = e;
			if (A.has(t)) return !1;
			(A = new Set(A)).add(t);
		},
		CHANGE_LOG_UNLOCK: function (e) {
			let { key: t } = e;
			if (!A.has(t)) return !1;
			(A = new Set(A)).delete(t);
		},
		CHANGE_LOG_SET_CONFIG: function (e) {
			let { config: t, latestChangelogId: n } = e;
			(p = n), (I = t);
		},
		CHANGE_LOG_FETCH_SUCCESS: function (e) {
			let { id: t, changelog: n } = e;
			null == f[t] && (f[t] = {}),
				(f[t][n.locale] = {
					id: t,
					date: n.date,
					body: n.content,
					revision: 1,
					locale: n.locale,
					[n.asset_type === E.h3.YOUTUBE_VIDEO_ID ? 'youtube_video_id' : 'image']: n.asset
				}),
				null == h[t] && (h[t] = {}),
				(h[t][n.locale] = E.LU.LOADED_SUCCESS);
		},
		CHANGE_LOG_FETCH_FAILED: function (e) {
			let { id: t, locale: n } = e;
			if (null != f[t] && null != f[t][n]) return !1;
			null == h[t] && (h[t] = {}), (h[t][n] = E.LU.LOADED_FAILURE);
		},
		CHANGE_LOG_SET_OVERRIDE: function (e) {
			let { id: t } = e;
			m = t;
		},
		CHANGE_LOG_MARK_SEEN: function (e) {
			let { changelogDate: t } = e;
			(S = new Date(t)), l.K.set(T, t);
		}
	}));
