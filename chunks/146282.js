let r;
n(47120), n(724458);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(570140),
    c = n(180335);
let d = new Map(),
    _ = new Map(),
    E = new Map(),
    f = !1;
function h(e) {
    e(d), (d = new Map(d));
}
class p extends (i = l.ZP.Store) {
    getFeeds() {
        return d;
    }
    getFeed(e) {
        return d.get(e);
    }
    getFeedState(e) {
        return _.get(e);
    }
    getLastFeedFetchDate(e) {
        return E.get(e);
    }
    getFilters() {
        return r;
    }
    getFeedRequestId(e) {
        var t;
        return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id;
    }
    getDebugImpressionCappingDisabled() {
        return f;
    }
    getMatchingInboxEntry(e) {
        let { activity: t, userId: n, feedId: r } = e,
            i = this.getFeed(r);
        if (null == i || null == t) return;
        let a = i.entries.reduce((e, t) => (t.content.author_id === n ? [...e, t.content] : [...e]), []);
        return (0, c.vu)(a, t);
    }
}
(o = 'ContentInventoryStore'),
    (s = 'displayName') in (a = p)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new p(u.Z, {
        CONNECTION_OPEN: function () {
            d = new Map();
        },
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t, feed: n } = e;
            h((e) => e.set(t, n)), E.set(t, new Date());
        },
        CONTENT_INVENTORY_SET_FEED_STATE: function (e) {
            let { feedId: t, state: n } = e;
            _.set(t, n);
        },
        CONTENT_INVENTORY_SET_FILTERS: function (e) {
            let { filters: t } = e;
            r = t;
        },
        CONTENT_INVENTORY_CLEAR_FEED: function (e) {
            let { feedId: t } = e;
            if (!d.has(t)) return !1;
            h((e) => e.delete(t));
        },
        CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function () {
            f = !f;
        }
    }));
