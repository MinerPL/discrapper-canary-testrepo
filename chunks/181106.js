"use strict";
var i, r, s, o, a = n(442837),
  l = n(846519),
  u = n(570140),
  _ = n(981631);
let d = {},
  c = {};

function E(e, t, n) {
  var i;
  let {
    applicationId: r
  } = n, s = null !== (i = d[r]) && void 0 !== i ? i : {};
  if (s[t] = e, d[r] = s, !__OVERLAY__ && e === _.OcF.FAILED) {
    null != c[r] && c[r].stop();
    let e = new l.V7;
    e.start(12e4, () => u.Z.dispatch({
      type: "ACTIVITY_LAUNCH_FAIL",
      applicationId: r,
      activityType: t
    })), c[r] = e
  }
}

function I(e) {
  return E(_.OcF.COMPLETE, _.mFx.JOIN, e)
}
class T extends(o = a.ZP.Store) {
  getState(e, t) {
    let n = d[e];
    return null == n ? void 0 : n[t]
  }
  getStates() {
    return d
  }
}
s = "ActivityLauncherStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new T(u.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      activityLauncherStates: t
    } = e;
    d = {
      ...t
    }
  },
  ACTIVITY_JOIN_LOADING: e => E(_.OcF.LOADING, _.mFx.JOIN, e),
  ACTIVITY_JOIN_FAILED: e => E(_.OcF.FAILED, _.mFx.JOIN, e),
  ACTIVITY_JOIN: I,
  EMBEDDED_ACTIVITY_CLOSE: I,
  ACTIVITY_LAUNCH_FAIL: function(e) {
    let {
      applicationId: t,
      activityType: n
    } = e, i = d[t];
    if (null == i || i[n] !== _.OcF.FAILED) return !1;
    delete i[n]
  }
})