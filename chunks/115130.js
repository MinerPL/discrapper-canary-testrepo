"use strict";
n(789020);
var i, r = n(442837),
  s = n(570140),
  o = n(695346),
  a = n(630388),
  l = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _() {
  return {
    lastUsedObject: {},
    useActivityUrlOverride: !1,
    activityUrlOverride: null,
    filter: ""
  }
}
let d = _(),
  c = null,
  E = [];
class I extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    d = {
      ..._(),
      ...null != e ? e : {}
    }
  }
  getState() {
    return d
  }
  getIsEnabled() {
    return o.Sb.getSetting() && E.length > 0
  }
  getLastUsedObject() {
    return d.lastUsedObject
  }
  getUseActivityUrlOverride() {
    return this.getIsEnabled() && d.useActivityUrlOverride
  }
  getActivityUrlOverride() {
    return this.getIsEnabled() ? d.activityUrlOverride : null
  }
  getFetchState() {
    return c
  }
  getFilter() {
    return this.getIsEnabled() ? d.filter : ""
  }
  getDeveloperShelfItems() {
    return this.getIsEnabled() ? E : []
  }
  inDevModeForApplication(e) {
    return this.getIsEnabled() && null != E.find(t => t.id === e)
  }
}
u(I, "displayName", "DeveloperActivityShelfStore"), u(I, "persistKey", "DeveloperActivityShelfStore"), u(I, "migrations", [e => (delete e.isEnabled, {
  ...e
})]), t.Z = new I(s.Z, {
  LOGOUT: function() {
    d = _(), c = null, E = []
  },
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
    d.useActivityUrlOverride = !d.useActivityUrlOverride
  },
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
    let {
      activityUrlOverride: t
    } = e;
    d.activityUrlOverride = t
  },
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
    let {
      applicationId: t,
      timestamp: n
    } = e;
    if (null == E.find(e => e.id === t)) return !1;
    d.lastUsedObject[t] = n
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
    c = "loading"
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
    let {
      applications: t
    } = e;
    c = "loaded", E = t.filter(e => null != e.flags && (0, a.yE)(e.flags, l.udG.EMBEDDED))
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
    let {
      type: t
    } = e;
    c = "errored"
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
    let {
      filter: t
    } = e;
    d.filter = t
  },
  USER_SETTINGS_PROTO_UPDATE() {}
})