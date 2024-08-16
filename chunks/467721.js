var i,
    l = n(442837),
    r = n(570140);
function a(e, t, n) {
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
function s() {
    return { lastTriggered: 0 };
}
let o = s();
class c extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        o = {
            ...s(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return o;
    }
    cooldownIsActive() {
        return o.lastTriggered >= Date.now() - 172800000;
    }
}
a(c, 'displayName', 'HDStreamingViewerStore'),
    a(c, 'persistKey', 'HDStreamingViewerStore'),
    (t.Z = new c(r.Z, {
        LOGOUT: function () {
            o = s();
        },
        HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
            o.lastTriggered = Date.now();
        }
    }));
