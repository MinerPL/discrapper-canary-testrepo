t.d(n, {
  Gf: function() {
return S;
  },
  OW: function() {
return I;
  },
  S1: function() {
return l;
  },
  TY: function() {
return c;
  },
  Uv: function() {
return _;
  },
  _l: function() {
return E;
  },
  d_: function() {
return N;
  },
  lO: function() {
return r;
  },
  sI: function() {
return i;
  },
  we: function() {
return d;
  }
}), t(47120);
var a = t(570140),
  s = t(749210),
  o = t(228643);

function i(e) {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_SORT_UPDATE',
roles: e
  });
}

function l() {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_INIT'
  });
}

function r(e, n, t) {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS',
id: e,
flag: n,
allow: t
  });
}

function c(e) {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS',
id: e
  });
}

function _(e, n) {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_NAME',
id: e,
name: n
  });
}

function I(e, n) {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_COLOR',
id: e,
color: n
  });
}

function d(e, n, t) {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_SETTINGS',
id: e,
hoist: n,
mentionable: t
  });
}

function E(e, n, t) {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON',
id: e,
icon: n,
unicodeEmoji: t
  });
}

function N(e, n) {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS',
roleId: e,
roleConnectionConfigurations: n
  });
}
async function S(e, n, t, i, l) {
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_SUBMITTING'
  });
  try {
let a = async () => {
  if (null == n || 0 === n.length)
    return;
  let t = n.pop();
  if (null == t || '' === t.name)
    return a();
  await s.Z.updateRole(e, t.id, {
    name: t.name,
    description: t.description,
    permissions: t.permissions,
    color: t.color,
    hoist: t.hoist,
    mentionable: t.mentionable,
    icon: t.icon,
    unicodeEmoji: t.unicodeEmoji
  }).then(a, a);
};
if (null != t && t.length > 0 ? await s.Z.batchRoleUpdate(e, t).then(a, a) : await a(), null != l && null != i)
  for await (let n of i) {
    let t = l.get(n);
    await (0, o.L_)(e, n, null != t ? t : []);
  }
  } catch (e) {
var r, c;
a.Z.dispatch({
  type: 'GUILD_SETTINGS_ROLES_SAVE_FAIL',
  message: null !== (c = null === (r = e.body) || void 0 === r ? void 0 : r.message) && void 0 !== c ? c : Object.values(e.body)[0]
});
return;
  }
  a.Z.dispatch({
type: 'GUILD_SETTINGS_ROLES_SAVE_SUCCESS'
  });
}