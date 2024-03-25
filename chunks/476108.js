"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var n = r("446674"),
  i = r("95410"),
  s = r("913144"),
  l = r("49111");
let a = {
    lastViewedPath: null,
    lastViewedNonVoicePath: null
  },
  u = a,
  o = "LAST_VIEWED_PATH";
class d extends n.default.PersistedStore {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
    u = null != e ? e : a
  }
  get defaultRoute() {
    return l.Routes.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
  }
  get fallbackRoute() {
    return l.Routes.ME
  }
  getState() {
    return u
  }
}
d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
  let e = i.default.get(o, null);
  return i.default.remove(o), {
    lastViewedPath: e
  }
}];
var c = new d(s.default, {
  SAVE_LAST_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return u.lastViewedPath = t, !0
  },
  SAVE_LAST_NON_VOICE_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return u.lastViewedNonVoicePath = t, !0
  }
})