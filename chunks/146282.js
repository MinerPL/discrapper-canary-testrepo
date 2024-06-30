let r;
n(47120);
var i, a, o, s, l = n(442837), u = n(570140);
let c = new Map(), d = new Map(), _ = new Map(), E = !1, f = !1;
function h(e) {
    e(c), c = new Map(c);
}
class p extends (i = l.ZP.Store) {
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
        return f;
    }
    get hidden() {
        return E;
    }
}
s = 'ContentInventoryStore', (o = 'displayName') in (a = p) ? Object.defineProperty(a, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[o] = s, t.Z = new p(u.Z, {
    CONNECTION_OPEN: function () {
        c = new Map(), E = !1;
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
        let {
            feedId: t,
            feed: n
        } = e;
        h(e => e.set(t, n)), _.set(t, new Date());
    },
    CONTENT_INVENTORY_SET_FEED_STATE: function (e) {
        let {
            feedId: t,
            state: n
        } = e;
        d.set(t, n);
    },
    CONTENT_INVENTORY_SET_FILTERS: function (e) {
        let {filters: t} = e;
        r = t;
    },
    CONTENT_INVENTORY_CLEAR_FEED: function (e) {
        let {feedId: t} = e;
        if (!c.has(t))
            return !1;
        h(e => e.delete(t));
    },
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function () {
        E = !E;
    },
    CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function () {
        f = !f;
    }
});
