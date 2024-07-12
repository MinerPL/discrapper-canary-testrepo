n.r(t), n(789020);
var r, i, a, o, s = n(261470),
  l = n(213919),
  u = n(442837),
  c = n(544891),
  d = n(433517),
  _ = n(570140),
  E = n(179658),
  f = n(70956),
  h = n(960048),
  p = n(981631);
let m = (() => {
let e = ''.concat(location.protocol, '//').concat(location.host, '/__development/source_maps'),
  t = null,
  n = new s.Z(5 * f.Z.Millis.SECOND, 1 * f.Z.Millis.MINUTE, !0),
  r = () => {
    c.tn.put({
      url: e,
      headers: {
        Authorization: l.getToken()
      },
      oldFormErrors: !0
    }).then(e => {
      401 === e.status || 403 === e.status ? (t = null, (0, E.y)({
        sourceMapsEnabled: !1
      })) : 200 !== e.status ? t = setTimeout(r, n.fail()) : (n.succeed(), t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * f.Z.Millis.SECOND * 0.75));
    }, () => {
      t = setTimeout(r, n.fail());
    });
  };
return {
  set: n => {
    if (n !== (null != t))
      n ? t = setTimeout(r, 0) : (clearTimeout(t), t = null, c.tn.del({
        url: e,
        headers: {
          Authorization: l.getToken()
        },
        oldFormErrors: !0
      }));
  }
};
  })(),
  I = 'DeveloperOptionsStore',
  T = {
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
  g = {
...T
  };

function S(e) {
  g = {
...T,
...g,
...e
  }, m.set(g.sourceMapsEnabled), d.K.set(I, g);
}
class A extends(r = u.ZP.Store) {
  initialize() {
let e = d.K.get(I);
null != e && (g = {
  ...T,
  ...e
});
  }
  get isTracingRequests() {
return g.trace;
  }
  get isForcedCanary() {
return g.canary;
  }
  get isLoggingGatewayEvents() {
return g.logGatewayEvents;
  }
  get isLoggingOverlayEvents() {
return g.logOverlayEvents;
  }
  get isLoggingAnalyticsEvents() {
return g.logAnalyticsEvents;
  }
  get isAxeEnabled() {
return g.axeEnabled;
  }
  get sourceMapsEnabled() {
return g.sourceMapsEnabled;
  }
  get isAnalyticsDebuggerEnabled() {
return g.analyticsDebuggerEnabled;
  }
  get isBugReporterEnabled() {
return g.bugReporterEnabled;
  }
  get isIdleStatusIndicatorEnabled() {
return g.idleStatusIndicatorEnabled;
  }
  get appDirectoryIncludesInactiveCollections() {
return g.appDirectoryIncludesInactiveCollections;
  }
  getDebugOptionsHeaderValue() {
return Object.keys(g).map(e => g[e]), Object.keys(g).filter(e => g[e]).join(',');
  }
}
o = 'DeveloperOptionsStore', (a = 'displayName') in(i = A) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o, t.default = new A(_.Z, {
  LOGOUT: function(e) {
S(T);
  },
  CONNECTION_OPEN: function(e) {
var t;
let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & p.xW$.STAFF) === p.xW$.STAFF,
  r = n || null != e.user.personal_connection_id;
n && m.set(g.sourceMapsEnabled), h.Z.setTags({
  isStaff: r.toString()
});
  },
  DEVELOPER_OPTIONS_UPDATE_SETTINGS: function(e) {
let {
  settings: t
} = e;
S(t);
  }
});