"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var l = n("446674"),
  u = n("862337"),
  i = n("913144"),
  r = n("49111");
let a = {},
  o = {};

function s(t, e, n) {
  var l;
  let {
    applicationId: s
  } = n, d = null !== (l = a[s]) && void 0 !== l ? l : {};
  if (d[e] = t, a[s] = d, !__OVERLAY__ && t === r.ActivityActionStates.FAILED) {
    null != o[s] && o[s].stop();
    let t = new u.Timeout;
    t.start(12e4, () => i.default.dispatch({
      type: "ACTIVITY_LAUNCH_FAIL",
      applicationId: s,
      activityType: e
    })), o[s] = t
  }
}

function d(t) {
  return s(r.ActivityActionStates.COMPLETE, r.ActivityActionTypes.JOIN, t)
}
class f extends l.default.Store {
  getState(t, e) {
    let n = a[t];
    return null == n ? void 0 : n[e]
  }
  getStates() {
    return a
  }
}
f.displayName = "ActivityLauncherStore";
var c = new f(i.default, {
  OVERLAY_INITIALIZE: function(t) {
    let {
      activityLauncherStates: e
    } = t;
    a = {
      ...e
    }
  },
  ACTIVITY_JOIN_LOADING: t => s(r.ActivityActionStates.LOADING, r.ActivityActionTypes.JOIN, t),
  ACTIVITY_JOIN_FAILED: t => s(r.ActivityActionStates.FAILED, r.ActivityActionTypes.JOIN, t),
  ACTIVITY_JOIN: d,
  EMBEDDED_ACTIVITY_CLOSE: d,
  ACTIVITY_LAUNCH_FAIL: function(t) {
    let {
      applicationId: e,
      activityType: n
    } = t, l = a[e];
    if (null == l || l[n] !== r.ActivityActionStates.FAILED) return !1;
    delete l[n]
  }
})