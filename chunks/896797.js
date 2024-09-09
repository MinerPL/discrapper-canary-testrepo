var r,
    a = n(442837),
    i = n(433517),
    l = n(570140),
    s = n(981631);
function o(e, t, n) {
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
let u = {
        lastViewedPath: null,
        lastViewedNonVoicePath: null
    },
    c = u,
    d = 'LAST_VIEWED_PATH';
class I extends (r = a.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
        c = null != e ? e : u;
    }
    get defaultRoute() {
        return s.Z5c.ME;
    }
    get lastNonVoiceRoute() {
        var e;
        return null !== (e = c.lastViewedNonVoicePath) && void 0 !== e ? e : s.Z5c.ME;
    }
    get fallbackRoute() {
        return s.Z5c.ME;
    }
    getState() {
        return c;
    }
}
o(I, 'displayName', 'DefaultRouteStore'),
    o(I, 'persistKey', 'DefaultRouteStore'),
    o(I, 'migrations', [
        () => {
            let e = i.K.get(d, null);
            return i.K.remove(d), { lastViewedPath: e };
        }
    ]),
    (t.Z = new I(l.Z, {
        SAVE_LAST_ROUTE: function (e) {
            let { path: t } = e;
            return (c.lastViewedPath = t), !0;
        },
        SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: t } = e;
            return (c.lastViewedNonVoicePath = t), !0;
        }
    }));
