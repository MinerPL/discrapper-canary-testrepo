var l,
    i = t(442837),
    a = t(433517),
    r = t(570140),
    s = t(981631);
function o(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let u = {
        lastViewedPath: null,
        lastViewedNonVoicePath: null
    },
    c = u,
    d = 'LAST_VIEWED_PATH';
class p extends (l = i.ZP.PersistedStore) {
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
o(p, 'displayName', 'DefaultRouteStore'),
    o(p, 'persistKey', 'DefaultRouteStore'),
    o(p, 'migrations', [
        () => {
            let e = a.K.get(d, null);
            return a.K.remove(d), { lastViewedPath: e };
        }
    ]),
    (n.Z = new p(r.Z, {
        SAVE_LAST_ROUTE: function (e) {
            let { path: n } = e;
            return (c.lastViewedPath = n), !0;
        },
        SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: n } = e;
            return (c.lastViewedNonVoicePath = n), !0;
        }
    }));
