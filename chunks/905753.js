let i, a, s;
t(47120);
var l, o, r, c, d = t(442837),
  u = t(570140),
  I = t(581364),
  m = t(399860);
let _ = {},
  N = {},
  E = !1;

function T() {
  i = void 0, _ = {}, N = {}, a = void 0, s = void 0, E = !1;
}
class h extends(l = d.ZP.Store) {
  getApplicationPermissions() {
return _;
  }
  getCommands() {
return N;
  }
  getCommand(e) {
return null == N ? void 0 : N[e];
  }
  getEditedApplication() {
return a;
  }
  getEditedCommand() {
return s;
  }
  isUnavailable() {
return E;
  }
  getApplicationId() {
return i;
  }
}
c = 'IntegrationPermissionStore', (r = 'displayName') in(o = h) ? Object.defineProperty(o, r, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[r] = c, n.Z = new h(u.Z, {
  LOGOUT: T,
  INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function(e) {
let {
  applicationId: n
} = e;
if (n !== i)
  return !1;
E = !0;
  },
  INTEGRATION_PERMISSION_SETTINGS_CLEAR: T,
  INTEGRATION_PERMISSION_SETTINGS_INIT: function(e) {
let {
  applicationId: n
} = e;
T(), i = n;
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function(e) {
let {
  applicationId: n,
  commandId: t,
  permissions: a
} = e;
if (n !== i)
  return !1;
if (t === i) {
  _ = (0, m.tk)(a);
  return;
}
let s = N[t];
if (null == s)
  return !1;
N[t] = {
  ...s,
  permissions: (0, m.tk)(a)
};
  },
  INTEGRATION_PERMISSION_SETTINGS_EDIT: function(e) {
let {
  applicationId: n,
  commandId: t,
  permissions: l
} = e;
if (n !== i)
  return !1;
t === i ? a = l : s = {
  commandId: t,
  permissions: l
};
  },
  INTEGRATION_PERMISSION_SETTINGS_RESET: function(e) {
let {
  commandId: n
} = e;
null == n ? a = void 0 : s = void 0;
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function(e) {
let {
  applicationId: n
} = e;
if (n !== i)
  return !1;
E = !0;
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function(e) {
let {
  applicationId: n,
  commands: t,
  permissions: a
} = e;
if (n !== i)
  return !1;
let s = Object.fromEntries(a.map(e => [
    e.id,
    e.permissions
  ])),
  l = {};
for (let e of t)
  if (e.application_id === i) {
    let n = (0, I.Z8)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }),
      t = s[e.id];
    null != t && (n.permissions = (0, m.tk)(t)), l[e.id] = n;
  }
N = l;
  }
});