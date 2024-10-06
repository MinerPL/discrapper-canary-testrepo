var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140),
    c = n(331114),
    d = n(356164);
let u = [];
function _() {
    u = [];
}
class E extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.Z);
    }
    getVisibleTabs() {
        return u;
    }
}
(s = 'GlobalDiscoveryServersSearchLayoutStore'),
    (a = 'displayName') in (i = E)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new E(o.Z, {
        CONNECTION_OPEN: _,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: _,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_BLOCKED: _,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
            let { query: t } = e,
                n = c.Z.getCounts(t);
            if (null == n) return !1;
            u = n;
        }
    }));
