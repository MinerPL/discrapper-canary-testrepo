"use strict";
l.r(t);
var n, u = l("442837"),
  a = l("433517"),
  i = l("570140"),
  r = l("981631");

function o(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let d = {
    lastViewedPath: null,
    lastViewedNonVoicePath: null
  },
  s = d,
  c = "LAST_VIEWED_PATH";
class f extends(n = u.default.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
    s = null != e ? e : d
  }
  get defaultRoute() {
    return r.Routes.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null !== (e = s.lastViewedNonVoicePath) && void 0 !== e ? e : r.Routes.ME
  }
  get fallbackRoute() {
    return r.Routes.ME
  }
  getState() {
    return s
  }
}
o(f, "displayName", "DefaultRouteStore"), o(f, "persistKey", "DefaultRouteStore"), o(f, "migrations", [() => {
  let e = a.Storage.get(c, null);
  return a.Storage.remove(c), {
    lastViewedPath: e
  }
}]), t.default = new f(i.default, {
  SAVE_LAST_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return s.lastViewedPath = t, !0
  },
  SAVE_LAST_NON_VOICE_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return s.lastViewedNonVoicePath = t, !0
  }
})