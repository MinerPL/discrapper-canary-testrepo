let r, i, a;
n.d(t, {
    X: function () {
        return h;
    },
    l: function () {
        return m;
    }
}),
    n(177593),
    n(733860),
    n(47120),
    n(653041),
    n(17089);
var s,
    o = n(756647),
    l = n(442837),
    u = n(544891),
    c = n(761609);
function d(e, t, n) {
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
let _ = 1500,
    E = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : (e) => setImmediate(() => e()),
    f = new c.R(),
    h = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    p = [],
    I = () => Promise.resolve({ sessionId: void 0 }),
    m = (e) => {
        var t;
        let { dispatcher: n, actionHandler: s, getFingerprint: c, getSessionId: m = I, TRACKING_URL: T, drainTimeoutOverride: S, waitFor: g } = e;
        _ = null != S ? S : 1500;
        function A() {
            return 0 !== p.length && (null != i ? null != r : null != c());
        }
        function N() {
            null == a && A() && (a = E(O, { timeout: _ }));
        }
        function O() {
            if (((a = null), !A())) return;
            let e = p.slice();
            (p = []),
                R(e).then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null === (t = e.resolve) || void 0 === t || t.call(e);
                        });
                    },
                    (t) => {
                        p.unshift(...e);
                        let { message: n } = t.body || t;
                        console.warn('[AnalyticsTrackingStore] Track:', n);
                    }
                );
        }
        function R(e) {
            let t = Date.now(),
                n = e.map((e) => ({
                    ...e,
                    properties: {
                        ...e.properties,
                        client_send_timestamp: t
                    }
                }));
            return u.tn.post({
                url: T,
                body: {
                    token: r,
                    events: n
                },
                retries: 3
            });
        }
        (h.handleConnectionOpen = function (e) {
            let { analyticsToken: t, user: n } = e;
            return null != t && (r = t), null != n.id && (i = n.id), N(), !1;
        }),
            (h.handleConnectionClosed = function () {
                return O(), (r = null), (i = null), !1;
            }),
            (h.handleFingerprint = function () {
                return O(), !1;
            }),
            (h.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: a, resolve: s } = e;
                return (
                    m().then((e) => {
                        let { sessionId: l } = e,
                            u = {
                                type: t,
                                fingerprint: a,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: l,
                                    ...n
                                },
                                resolve: s
                            },
                            d = (function (e) {
                                if (null != i) return i;
                                let t = e.fingerprint || c();
                                return null != t ? (0, o.s)(t) : null;
                            })(u);
                        null != d && (u.properties.client_uuid = f.generate(d)), p.push(u);
                        p.length > 10000 && (p = p.slice(-10000)), r ? O() : N();
                    }),
                    !1
                );
            });
        class v extends (t = l.ZP.Store) {
            initialize() {
                null != g && this.waitFor(...g);
            }
            constructor(...e) {
                super(...e), d(this, 'submitEventsImmediately', R);
            }
        }
        return d(v, 'displayName', 'AnalyticsTrackingStore'), new v(n, s);
    };
