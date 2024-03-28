"use strict";
let n, a, s;
l.r(t), l("47120");
var i, r, o, d, u = l("442837"),
  c = l("570140"),
  f = l("581364"),
  m = l("399860");
let I = {},
  T = {},
  N = !1;

function E() {
  n = void 0, I = {}, T = {}, a = void 0, s = void 0, N = !1
}
class S extends(i = u.default.Store) {
  getApplicationPermissions() {
    return I
  }
  getCommands() {
    return T
  }
  getCommand(e) {
    return null == T ? void 0 : T[e]
  }
  getEditedApplication() {
    return a
  }
  getEditedCommand() {
    return s
  }
  isUnavailable() {
    return N
  }
  getApplicationId() {
    return n
  }
}
d = "IntegrationPermissionStore", (o = "displayName") in(r = S) ? Object.defineProperty(r, o, {
  value: d,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = d, t.default = new S(c.default, {
  LOGOUT: E,
  INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function(e) {
    let {
      applicationId: t
    } = e;
    if (t !== n) return !1;
    N = !0
  },
  INTEGRATION_PERMISSION_SETTINGS_CLEAR: E,
  INTEGRATION_PERMISSION_SETTINGS_INIT: function(e) {
    let {
      applicationId: t
    } = e;
    E(), n = t
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function(e) {
    let {
      applicationId: t,
      commandId: l,
      permissions: a
    } = e;
    if (t !== n) return !1;
    if (l === n) {
      I = (0, m.keyPermissions)(a);
      return
    }
    let s = T[l];
    if (null == s) return !1;
    T[l] = {
      ...s,
      permissions: (0, m.keyPermissions)(a)
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_EDIT: function(e) {
    let {
      applicationId: t,
      commandId: l,
      permissions: i
    } = e;
    if (t !== n) return !1;
    l === n ? a = i : s = {
      commandId: l,
      permissions: i
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_RESET: function(e) {
    let {
      commandId: t
    } = e;
    null == t ? a = void 0 : s = void 0
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function(e) {
    let {
      applicationId: t
    } = e;
    if (t !== n) return !1;
    N = !0
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      commands: l,
      permissions: a
    } = e;
    if (t !== n) return !1;
    let s = Object.fromEntries(a.map(e => [e.id, e.permissions])),
      i = {};
    for (let e of l)
      if (e.application_id === n) {
        let t = (0, f.buildCommand)({
            rootCommand: e,
            command: e,
            applicationId: e.application_id
          }),
          l = s[e.id];
        null != l && (t.permissions = (0, m.keyPermissions)(l)), i[e.id] = t
      } T = i
  }
})