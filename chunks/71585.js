r(47120), r(653041);
var a, n = r(442837), i = r(570140);
function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}
let l = () => ({ itemImpressions: [] }), c = l(), s = new Set(), d = new Set(), u = 0, h = !1, m = !1;
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < u)
        return;
    c.itemImpressions.length > 1000 && (c.itemImpressions = []);
    let t = 0, r = Date.now() - 259200000;
    for (let e = 0; e < c.itemImpressions.length; e++) {
        let [a, n] = c.itemImpressions[e];
        if (n < r)
            t = e + 1;
        else
            break;
    }
    t > 0 && (c.itemImpressions = c.itemImpressions.slice(t));
    let a = m ? 1000 : 57600000, n = new Set(), i = new Set(), o = Date.now() - a, l = null;
    for (let [e, t] of c.itemImpressions)
        t < o ? n.add(e) : null == l && (l = t + a), i.add(e);
    s = n, d = i, u = null != l ? l : 1 / 0, h = !0;
}
class p extends (a = n.ZP.PersistedStore) {
    initialize(e) {
        c = {
            ...c,
            ...null != e ? e : {}
        };
    }
    getState() {
        return c;
    }
    getImpressionCappedItemIds() {
        return g(), s;
    }
    getDebugFastImpressionCappingEnabled() {
        return m;
    }
    reset() {
        c = l();
    }
}
o(p, 'displayName', 'ContentInventoryPersistedStore'), o(p, 'persistKey', 'ContentInventoryPersistedStore'), t.Z = new p(i.Z, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function (e) {
        let {itemIds: t} = e;
        !h && g();
        let r = Date.now(), a = !1;
        for (let e of t)
            !d.has(e) && (c.itemImpressions.push([
                e,
                r
            ]), a = !0);
        return g(a), a;
    },
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function () {
        c.itemImpressions = [], g(!0);
    },
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function () {
        return console.log('Item impressions:', c.itemImpressions), !1;
    },
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function () {
        m = !m;
    }
});
