"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("702976");
var i = n("981980"),
  s = n("171718"),
  r = n("446674"),
  a = n("872717"),
  o = n("95410"),
  l = n("913144"),
  u = n("527015"),
  d = n("718517"),
  c = n("286235"),
  f = n("49111");
let _ = (() => {
    let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
      t = null,
      n = new i.default(5 * d.default.Millis.SECOND, 1 * d.default.Millis.MINUTE, !0),
      r = () => {
        a.default.put({
          url: e,
          headers: {
            Authorization: s.default.getToken()
          },
          oldFormErrors: !0
        }).then(e => {
          401 === e.status || 403 === e.status ? (t = null, (0, u.setDeveloperOptionSettings)({
            sourceMapsEnabled: !1
          })) : 200 !== e.status ? t = setTimeout(r, n.fail()) : (n.succeed(), t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * d.default.Millis.SECOND * .75))
        }, () => {
          t = setTimeout(r, n.fail())
        })
      };
    return {
      set: n => {
        let i = null != t;
        n !== i && (n ? t = setTimeout(r, 0) : (clearTimeout(t), t = null, a.default.delete({
          url: e,
          headers: {
            Authorization: s.default.getToken()
          },
          oldFormErrors: !0
        })))
      }
    }
  })(),
  h = "DeveloperOptionsStore",
  g = {
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
  m = {
    ...g
  };

function E(e) {
  m = {
    ...g,
    ...m,
    ...e
  }, _.set(m.sourceMapsEnabled), o.default.set(h, m)
}
class p extends r.default.Store {
  initialize() {
    let e = o.default.get(h);
    null != e && (m = {
      ...g,
      ...e
    })
  }
  get isTracingRequests() {
    return m.trace
  }
  get isForcedCanary() {
    return m.canary
  }
  get isLoggingGatewayEvents() {
    return m.logGatewayEvents
  }
  get isLoggingOverlayEvents() {
    return m.logOverlayEvents
  }
  get isLoggingAnalyticsEvents() {
    return m.logAnalyticsEvents
  }
  get isAxeEnabled() {
    return m.axeEnabled
  }
  get sourceMapsEnabled() {
    return m.sourceMapsEnabled
  }
  get isAnalyticsDebuggerEnabled() {
    return m.analyticsDebuggerEnabled
  }
  get isBugReporterEnabled() {
    return m.bugReporterEnabled
  }
  get isIdleStatusIndicatorEnabled() {
    return m.idleStatusIndicatorEnabled
  }
  get appDirectoryIncludesInactiveCollections() {
    return m.appDirectoryIncludesInactiveCollections
  }
  getDebugOptionsHeaderValue() {
    Object.keys(m).map(e => m[e]);
    let e = Object.keys(m).filter(e => m[e]);
    return e.join(",")
  }
}
p.displayName = "DeveloperOptionsStore";
var v = new p(l.default, {
  LOGOUT: function(e) {
    E(g)
  },
  CONNECTION_OPEN: function(e) {
    var t;
    let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & f.UserFlags.STAFF) === f.UserFlags.STAFF,
      i = n || null != e.user.personal_connection_id;
    n && _.set(m.sourceMapsEnabled), c.default.setTags({
      isStaff: i.toString()
    })
  },
  DEVELOPER_OPTIONS_UPDATE_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    E(t)
  }
})