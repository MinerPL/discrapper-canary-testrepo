"use strict";
var i, r = n(442837),
  s = n(570140),
  o = n(626135),
  a = n(761274),
  l = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
  permissionStates: {}
};
class d extends(i = r.ZP.DeviceSettingsStore) {
  initialize(e) {
    _ = null != e ? e : _
  }
  getUserAgnosticState() {
    return _
  }
  hasPermission(e) {
    let t = _.permissionStates[e];
    return null != t && t === a.PQ.ACCEPTED
  }
  handleSetNativePermission(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = _.permissionStates, r = i[n];
    i[n] = t, r !== t && o.default.track(l.rMx.PERMISSIONS_ACKED, {
      type: n,
      action: t,
      previous_action: null != r ? r : a.PQ.NONE
    })
  }
  constructor() {
    super(s.Z, {
      SET_NATIVE_PERMISSION: e => this.handleSetNativePermission(e)
    })
  }
}
u(d, "displayName", "NativePermissionStore"), u(d, "persistKey", "NativePermissionsStore"), t.Z = d