let r;
n(47120), n(724458);
var i,
	a = n(442837),
	s = n(570140),
	o = n(180335);
function l(e, t, n) {
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
let u = { hidden: !1 },
	c = new Map(),
	d = new Map(),
	_ = new Map(),
	E = !1;
function f(e) {
	e(c), (c = new Map(c));
}
class h extends (i = a.ZP.PersistedStore) {
	initialize(e) {
		null != e && (u = e);
	}
	getState() {
		return u;
	}
	getFeeds() {
		return c;
	}
	getFeed(e) {
		return c.get(e);
	}
	getFeedState(e) {
		return d.get(e);
	}
	getLastFeedFetchDate(e) {
		return _.get(e);
	}
	getFilters() {
		return r;
	}
	getFeedRequestId(e) {
		var t;
		return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id;
	}
	getDebugImpressionCappingDisabled() {
		return E;
	}
	getMatchingInboxEntry(e) {
		let { activity: t, userId: n, feedId: r } = e,
			i = this.getFeed(r);
		if (null == i || null == t) return;
		let a = i.entries.reduce((e, t) => (t.content.author_id === n ? [...e, t.content] : [...e]), []);
		return (0, o.vu)(a, t);
	}
	get hidden() {
		return u.hidden;
	}
}
l(h, 'displayName', 'ContentInventoryStore'),
	l(h, 'persistKey', 'ContentInventoryStore'),
	(t.Z = new h(s.Z, {
		CONNECTION_OPEN: function () {
			c = new Map();
		},
		CONTENT_INVENTORY_SET_FEED: function (e) {
			let { feedId: t, feed: n } = e;
			f((e) => e.set(t, n)), _.set(t, new Date());
		},
		CONTENT_INVENTORY_SET_FEED_STATE: function (e) {
			let { feedId: t, state: n } = e;
			d.set(t, n);
		},
		CONTENT_INVENTORY_SET_FILTERS: function (e) {
			let { filters: t } = e;
			r = t;
		},
		CONTENT_INVENTORY_CLEAR_FEED: function (e) {
			let { feedId: t } = e;
			if (!c.has(t)) return !1;
			f((e) => e.delete(t));
		},
		CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function () {
			u.hidden = !u.hidden;
		},
		CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function () {
			E = !E;
		}
	}));
