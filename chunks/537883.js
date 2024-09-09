var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140),
    c = n(331114);
let d = [];
class u extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getVisibleTabs() {
        return d;
    }
}
(s = 'GlobalDiscoveryServersSearchLayoutStore'),
    (a = 'displayName') in (i = u)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    new u(o.Z, {
        CONNECTION_OPEN: function () {
            d = [];
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: function () {
            d = [];
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
            let { id: t } = e,
                n = c.Z.getCounts(t);
            if (null == n) return !1;
            d = n;
        }
    });
