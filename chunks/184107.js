var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140);
let c = {};
class d extends (r = l.ZP.Store) {
    getSkuIdForChannel(e) {
        return c[e];
    }
}
(s = 'ChannelSKUStore'),
    (a = 'displayName') in (i = d)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new d(o.Z, {
        CONNECTION_OPEN: function () {
            c = {};
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
            let { channelId: t, storeListing: n } = e;
            null != t && (c[t] = n.sku.id);
        }
    }));
