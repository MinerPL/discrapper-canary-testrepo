t.d(n, {
  L_: function() {
return r;
  },
  nj: function() {
return c;
  },
  sE: function() {
return o;
  }
});
var i = t(544891),
  a = t(570140),
  s = t(480608),
  l = t(981631);

function o(e, n) {
  i.tn.get({
url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n)
  }).then(e => {
let t = [];
e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
  connectionType: e.connection_type,
  connectionMetadataField: e.connection_metadata_field,
  applicationId: e.application_id,
  operator: e.operator,
  value: e.value
})))), a.Z.dispatch({
  type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
  roleId: n,
  roleConnectionConfigurations: t
});
  }).catch(() => {});
}
async function r(e, n, t) {
  let o = t.map(e => e.map(e => ({
  connection_type: e.connectionType,
  connection_metadata_field: e.connectionMetadataField,
  application_id: e.applicationId,
  operator: e.operator,
  value: e.value
}))),
r = await i.tn.put({
  url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
  body: 0 === o.length ? [] : o,
  oldFormErrors: !0
}).then(e => {
  let n = [];
  return e.body.length > 0 && (n = e.body.map(e => e.map(e => ({
    connectionType: e.connection_type,
    connectionMetadataField: e.connection_metadata_field,
    applicationId: e.application_id,
    operator: e.operator,
    value: e.value
  })))), n;
}),
c = await (0, s.H)(e, n, !1);
  null != c && a.Z.dispatch({
type: 'GUILD_ROLE_MEMBER_COUNT_UPDATE',
guildId: e,
roleId: n,
count: c
  }), a.Z.dispatch({
type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
roleId: n,
roleConnectionConfigurations: r
  });
}
async function c() {
  return (await i.tn.get({
url: l.ANM.APPLICATION_USER_ROLE_CONNECTIONS
  })).body;
}