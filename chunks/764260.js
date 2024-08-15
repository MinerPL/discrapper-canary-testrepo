n.d(t, {
  Gf: function() {
return T;
  },
  OW: function() {
return u;
  },
  S1: function() {
return l;
  },
  TY: function() {
return c;
  },
  Uv: function() {
return d;
  },
  _l: function() {
return I;
  },
  d_: function() {
return E;
  },
  lO: function() {
return o;
  },
  sI: function() {
return r;
  },
  we: function() {
return _;
  }
}), n(47120);
var s = n(570140),
  a = n(749210),
  i = n(228643);

function r(e) {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_SORT_UPDATE',
roles: e
  });
}

function l() {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_INIT'
  });
}

function o(e, t, n) {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS',
id: e,
flag: t,
allow: n
  });
}

function c(e) {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS',
id: e
  });
}

function d(e, t) {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_NAME',
id: e,
name: t
  });
}

function u(e, t) {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_COLOR',
id: e,
color: t
  });
}

function _(e, t, n) {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_SETTINGS',
id: e,
hoist: t,
mentionable: n
  });
}

function I(e, t, n) {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON',
id: e,
icon: t,
unicodeEmoji: n
  });
}

function E(e, t) {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS',
roleId: e,
roleConnectionConfigurations: t
  });
}
async function T(e, t, n, r, l) {
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_SUBMITTING'
  });
  try {
let s = async () => {
  if (null == t || 0 === t.length)
    return;
  let n = t.pop();
  if (null == n || '' === n.name)
    return s();
  await a.Z.updateRole(e, n.id, {
    name: n.name,
    description: n.description,
    permissions: n.permissions,
    color: n.color,
    hoist: n.hoist,
    mentionable: n.mentionable,
    icon: n.icon,
    unicodeEmoji: n.unicodeEmoji
  }).then(s, s);
};
if (null != n && n.length > 0 ? await a.Z.batchRoleUpdate(e, n).then(s, s) : await s(), null != l && null != r)
  for await (let t of r) {
    let n = l.get(t);
    await (0, i.L_)(e, t, null != n ? n : []);
  }
  } catch (e) {
var o, c;
s.Z.dispatch({
  type: 'GUILD_SETTINGS_ROLES_SAVE_FAIL',
  message: null !== (c = null === (o = e.body) || void 0 === o ? void 0 : o.message) && void 0 !== c ? c : Object.values(e.body)[0]
});
return;
  }
  s.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS'
  });
}