var i, s, a, r, l = n(442837), o = n(570140);
let c = {};
class d extends (r = l.ZP.Store) {
    getSkuIdForChannel(e) {
        return c[e];
    }
}
a = 'ChannelSKUStore', (s = 'displayName') in (i = d) ? Object.defineProperty(i, s, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[s] = a, t.Z = new d(o.Z, {
    CONNECTION_OPEN: function () {
        c = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let {
            channelId: t,
            storeListing: n
        } = e;
        null != t && (c[t] = n.sku.id);
    }
});
