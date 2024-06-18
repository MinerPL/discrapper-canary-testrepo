"use strict";
t.d(s, {
  Gf: function() {
    return T
  },
  OW: function() {
    return u
  },
  S1: function() {
    return r
  },
  TY: function() {
    return c
  },
  Uv: function() {
    return d
  },
  _l: function() {
    return _
  },
  d_: function() {
    return I
  },
  lO: function() {
    return o
  },
  sI: function() {
    return a
  },
  we: function() {
    return E
  }
}), t(47120);
var n = t(570140),
  i = t(749210),
  l = t(228643);

function a(e) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
    roles: e
  })
}

function r() {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_INIT"
  })
}

function o(e, s, t) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
    id: e,
    flag: s,
    allow: t
  })
}

function c(e) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
    id: e
  })
}

function d(e, s) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
    id: e,
    name: s
  })
}

function u(e, s) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
    id: e,
    color: s
  })
}

function E(e, s, t) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
    id: e,
    hoist: s,
    mentionable: t
  })
}

function _(e, s, t) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
    id: e,
    icon: s,
    unicodeEmoji: t
  })
}

function I(e, s) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
    roleId: e,
    roleConnectionConfigurations: s
  })
}
async function T(e, s, t, a, r) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
  });
  try {
    let n = async () => {
      if (null == s || 0 === s.length) return;
      let t = s.pop();
      if (null == t || "" === t.name) return n();
      await i.Z.updateRole(e, t.id, {
        name: t.name,
        description: t.description,
        permissions: t.permissions,
        color: t.color,
        hoist: t.hoist,
        mentionable: t.mentionable,
        icon: t.icon,
        unicodeEmoji: t.unicodeEmoji
      }).then(n, n)
    };
    if (null != t && t.length > 0 ? await i.Z.batchRoleUpdate(e, t).then(n, n) : await n(), null != r && null != a)
      for await (let s of a) {
        let t = r.get(s);
        await (0, l.L_)(e, s, null != t ? t : [])
      }
  } catch (e) {
    var o, c;
    n.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
      message: null !== (c = null === (o = e.body) || void 0 === o ? void 0 : o.message) && void 0 !== c ? c : Object.values(e.body)[0]
    });
    return
  }
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
  })
}