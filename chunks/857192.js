"use strict";
n.r(t), n(789020);
var i, r, s, o, a = n(261470),
  l = n(213919),
  u = n(442837),
  _ = n(544891),
  d = n(433517),
  c = n(570140),
  E = n(179658),
  I = n(70956),
  T = n(960048),
  h = n(981631);
let S = (() => {
    let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
      t = null,
      n = new a.Z(5 * I.Z.Millis.SECOND, 1 * I.Z.Millis.MINUTE, !0),
      i = () => {
        _.tn.put({
          url: e,
          headers: {
            Authorization: l.getToken()
          },
          oldFormErrors: !0
        }).then(e => {
          401 === e.status || 403 === e.status ? (t = null, (0, E.y)({
            sourceMapsEnabled: !1
          })) : 200 !== e.status ? t = setTimeout(i, n.fail()) : (n.succeed(), t = setTimeout(i, e.body.sourceMapCookieTTLSeconds * I.Z.Millis.SECOND * .75))
        }, () => {
          t = setTimeout(i, n.fail())
        })
      };
    return {
      set: n => {
        if (n !== (null != t)) n ? t = setTimeout(i, 0) : (clearTimeout(t), t = null, _.tn.del({
          url: e,
          headers: {
            Authorization: l.getToken()
          },
          oldFormErrors: !0
        }))
      }
    }
  })(),
  f = "DeveloperOptionsStore",
  N = {
    trace: !1,
    canary: !1,
    logGatewayEvents: !1,
    logOverlayEvents: !1,
    logAnalyticsEvents: !1,
    sourceMapsEnabled: !1,
    axeEnabled: !1,
    analyticsDebuggerEnabled: !1,
    bugReporterEnabled: !0,
    idleStatusIndicatorEnabled: !1,
    appDirectoryIncludesInactiveCollections: !1
  },
  A = {
    ...N
  };

function m(e) {
  A = {
    ...N,
    ...A,
    ...e
  }, S.set(A.sourceMapsEnabled), d.K.set(f, A)
}
class O extends(i = u.ZP.Store) {
  initialize() {
    let e = d.K.get(f);
    null != e && (A = {
      ...N,
      ...e
    })
  }
  get isTracingRequests() {
    return A.trace
  }
  get isForcedCanary() {
    return A.canary
  }
  get isLoggingGatewayEvents() {
    return A.logGatewayEvents
  }
  get isLoggingOverlayEvents() {
    return A.logOverlayEvents
  }
  get isLoggingAnalyticsEvents() {
    return A.logAnalyticsEvents
  }
  get isAxeEnabled() {
    return A.axeEnabled
  }
  get sourceMapsEnabled() {
    return A.sourceMapsEnabled
  }
  get isAnalyticsDebuggerEnabled() {
    return A.analyticsDebuggerEnabled
  }
  get isBugReporterEnabled() {
    return A.bugReporterEnabled
  }
  get isIdleStatusIndicatorEnabled() {
    return A.idleStatusIndicatorEnabled
  }
  get appDirectoryIncludesInactiveCollections() {
    return A.appDirectoryIncludesInactiveCollections
  }
  getDebugOptionsHeaderValue() {
    return Object.keys(A).map(e => A[e]), Object.keys(A).filter(e => A[e]).join(",")
  }
}
o = "DeveloperOptionsStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.default = new O(c.Z, {
  LOGOUT: function(e) {
    m(N)
  },
  CONNECTION_OPEN: function(e) {
    var t;
    let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & h.xW$.STAFF) === h.xW$.STAFF,
      i = n || null != e.user.personal_connection_id;
    n && S.set(A.sourceMapsEnabled), T.Z.setTags({
      isStaff: i.toString()
    })
  },
  DEVELOPER_OPTIONS_UPDATE_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    m(t)
  }
})