"use strict";
l.r(t), l.d(t, {
  fetchRoleConnectionsConfiguration: function() {
    return r
  },
  fetchUserApplicationRoleConnections: function() {
    return d
  },
  putRoleConnectionsConfigurations: function() {
    return o
  }
});
var n = l("544891"),
  a = l("570140"),
  s = l("480608"),
  i = l("981631");

function r(e, t) {
  n.HTTP.get({
    url: i.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
  }).then(e => {
    let l = [];
    e.body.length > 0 && (l = e.body.map(e => e.map(e => ({
      connectionType: e.connection_type,
      connectionMetadataField: e.connection_metadata_field,
      applicationId: e.application_id,
      operator: e.operator,
      value: e.value
    })))), a.default.dispatch({
      type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
      roleId: t,
      roleConnectionConfigurations: l
    })
  }).catch(() => {})
}
async function o(e, t, l) {
  let r = l.map(e => e.map(e => ({
      connection_type: e.connectionType,
      connection_metadata_field: e.connectionMetadataField,
      application_id: e.applicationId,
      operator: e.operator,
      value: e.value
    }))),
    o = await n.HTTP.put({
      url: i.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
      body: 0 === r.length ? [] : r,
      oldFormErrors: !0
    }).then(e => {
      let t = [];
      return e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
        connectionType: e.connection_type,
        connectionMetadataField: e.connection_metadata_field,
        applicationId: e.application_id,
        operator: e.operator,
        value: e.value
      })))), t
    }),
    d = await (0, s.requestMembersForRole)(e, t, !1);
  null != d && a.default.dispatch({
    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
    guildId: e,
    roleId: t,
    count: d
  }), a.default.dispatch({
    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
    roleId: t,
    roleConnectionConfigurations: o
  })
}
async function d() {
  return (await n.HTTP.get({
    url: i.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS
  })).body
}