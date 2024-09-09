n.r(t), n(789020);
var r,
    i,
    a,
    s,
    o = n(261470),
    l = n(213919),
    u = n(442837),
    c = n(544891),
    d = n(433517),
    _ = n(570140),
    E = n(179658),
    f = n(70956),
    h = n(960048),
    p = n(981631);
let I = (() => {
        let e = ''.concat(location.protocol, '//').concat(location.host, '/__development/source_maps'),
            t = null,
            n = new o.Z(5 * f.Z.Millis.SECOND, 1 * f.Z.Millis.MINUTE, !0),
            r = () => {
                c.tn
                    .put({
                        url: e,
                        headers: { Authorization: l.getToken() },
                        oldFormErrors: !0
                    })
                    .then(
                        (e) => {
                            401 === e.status || 403 === e.status ? ((t = null), (0, E.y)({ sourceMapsEnabled: !1 })) : 200 !== e.status ? (t = setTimeout(r, n.fail())) : (n.succeed(), (t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * f.Z.Millis.SECOND * 0.75)));
                        },
                        () => {
                            t = setTimeout(r, n.fail());
                        }
                    );
            };
        return {
            set: (n) => {
                if (n !== (null != t))
                    n
                        ? (t = setTimeout(r, 0))
                        : (clearTimeout(t),
                          (t = null),
                          c.tn.del({
                              url: e,
                              headers: { Authorization: l.getToken() },
                              oldFormErrors: !0
                          }));
            }
        };
    })(),
    m = 'DeveloperOptionsStore',
    T = {
        trace: !1,
        canary: !1,
        logGatewayEvents: !1,
        logOverlayEvents: !1,
        logAnalyticsEvents: !1,
        sourceMapsEnabled: !1,
        axeEnabled: !1,
        cssDebuggingEnabled: !1,
        layoutDebuggingEnabled: !1,
        analyticsDebuggerEnabled: !1,
        bugReporterEnabled: !0,
        idleStatusIndicatorEnabled: !1,
        appDirectoryIncludesInactiveCollections: !1,
        isStreamInfoOverlayEnabled: !1
    },
    S = { ...T };
function g(e) {
    (S = {
        ...T,
        ...S,
        ...e
    }),
        I.set(S.sourceMapsEnabled),
        d.K.set(m, S);
}
class A extends (r = u.ZP.Store) {
    initialize() {
        let e = d.K.get(m);
        null != e &&
            (S = {
                ...T,
                ...e
            });
    }
    get isTracingRequests() {
        return S.trace;
    }
    get isForcedCanary() {
        return S.canary;
    }
    get isLoggingGatewayEvents() {
        return S.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return S.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return S.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return S.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return S.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return S.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return S.sourceMapsEnabled;
    }
    get isAnalyticsDebuggerEnabled() {
        return S.analyticsDebuggerEnabled;
    }
    get isBugReporterEnabled() {
        return S.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return S.idleStatusIndicatorEnabled;
    }
    get appDirectoryIncludesInactiveCollections() {
        return S.appDirectoryIncludesInactiveCollections;
    }
    get isStreamInfoOverlayEnabled() {
        return S.isStreamInfoOverlayEnabled;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(S).map((e) => S[e]),
            Object.keys(S)
                .filter((e) => S[e])
                .join(',')
        );
    }
}
(s = 'DeveloperOptionsStore'),
    (a = 'displayName') in (i = A)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.default = new A(_.Z, {
        LOGOUT: function (e) {
            g(T);
        },
        CONNECTION_OPEN: function (e) {
            var t;
            let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & p.xW$.STAFF) === p.xW$.STAFF,
                r = n || null != e.user.personal_connection_id;
            n && I.set(S.sourceMapsEnabled), h.Z.setTags({ isStaff: r.toString() });
        },
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: function (e) {
            let { settings: t } = e;
            g(t);
        }
    }));
