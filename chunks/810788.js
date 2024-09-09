n(47120);
var r,
    i = n(442837),
    a = n(570140),
    s = n(374023),
    o = n(188785);
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
let u = new Set(),
    c = {};
class d extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (c = e.hotspotOverrides));
    }
    hasHotspot(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t && c[e];
        return !(o.a || s.s.isDisallowPopupsSet()) && (n || !u.has(e));
    }
    hasHiddenHotspot(e) {
        return u.has(e);
    }
    getHotspotOverride(e) {
        return c[e];
    }
    getState() {
        return {
            hiddenHotspots: u,
            hotspotOverrides: c
        };
    }
}
l(d, 'displayName', 'HotspotStore'),
    l(d, 'persistKey', 'hotspots'),
    l(d, 'migrations', [
        (e) => ({
            hiddenHotspots: null != e ? e : [],
            hotspotOverrides: {}
        })
    ]),
    (t.Z = new d(a.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { hiddenHotspots: t } = e;
            u = new Set(t);
        },
        HOTSPOT_HIDE: function (e) {
            let { location: t } = e;
            if (u.has(t)) return !1;
            u.add(t);
        },
        HOTSPOT_OVERRIDE_SET: function (e) {
            let { location: t, enabled: n } = e;
            c[t] = n;
        },
        HOTSPOT_OVERRIDE_CLEAR: function (e) {
            let { location: t } = e;
            if (null == c[t]) return !1;
            delete c[t];
        }
    }));
