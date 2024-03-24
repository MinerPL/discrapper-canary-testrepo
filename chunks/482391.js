"use strict";
n.r(t), n.d(t, {
  clearIntegrationPermissions: function() {
    return l
  },
  editPermissions: function() {
    return s
  },
  getApplicationCommands: function() {
    return d
  },
  getApplicationCommandPermissions: function() {
    return T
  },
  initIntegrationPermissions: function() {
    return E
  },
  resetPermissions: function() {
    return A
  },
  updateApplicationCommandPermissions: function() {
    return _
  }
});
var r = n("872717"),
  o = n("913144"),
  u = n("507217"),
  i = n("389153"),
  a = n("49111");

function l() {
  o.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
  })
}

function s(e, t, n) {
  o.default.dispatch({
    applicationId: e,
    commandId: t,
    permissions: n,
    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
  })
}

function d(e, t) {
  r.HTTP.get(a.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
    o.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
      applicationId: t,
      commands: n.body.application_commands,
      guildId: e,
      permissions: n.body.permissions
    })
  }, () => {
    o.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
      applicationId: t
    })
  })
}
async function T(e, t, n) {
  let u = [];
  try {
    let o = await r.HTTP.get(a.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
    o.ok && (u = o.body.permissions)
  } catch (r) {
    if (404 !== r.status) {
      o.default.dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
        applicationId: e,
        commandId: n,
        guildId: t
      });
      return
    }
  }
  o.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: e,
    commandId: n,
    guildId: t,
    permissions: u
  })
}

function E(e) {
  o.default.dispatch({
    applicationId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
  })
}

function A(e) {
  o.default.dispatch({
    commandId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
  })
}
async function _(e) {
  let {
    applicationId: t,
    commandId: n,
    defaultEveryoneValue: r,
    defaultEverywhereValue: a,
    guildId: l,
    permissions: s
  } = e, d = n === t ? function(e, t, n, r) {
    if (!n || !r) return t;
    let o = {
      [e]: n,
      [(0, i.allChannelsSentinel)(e)]: r
    };
    return t.filter(e => {
      let t = o[e.id];
      return null == t || e.permission !== t
    })
  }(l, s, r, a) : s, T = await u.updateApplicationGuildCommandPermissions(t, l, n, d);
  T.ok && o.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: t,
    commandId: n,
    guildId: l,
    permissions: T.body.permissions
  })
}