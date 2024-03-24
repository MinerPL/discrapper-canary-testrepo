"use strict";
let a, l, n;
s.r(t), s.d(t, {
  default: function() {
    return H
  }
}), s("222007");
var i = s("917351"),
  r = s.n(i),
  o = s("316693"),
  d = s("509043"),
  u = s("446674"),
  c = s("913144"),
  E = s("382981"),
  _ = s("305961"),
  I = s("746574"),
  T = s("449008"),
  S = s("991170"),
  f = s("900938"),
  m = s("53948"),
  N = s("49111");
let g = new Set,
  h = N.FormStates.CLOSED,
  C = !1,
  R = !1,
  x = [],
  L = [],
  O = m.GuildSettingsRoleEditSections.DISPLAY,
  A = !1,
  p = new Set,
  M = new Map,
  D = new Map;

function v() {
  if (null == a || null == x) return [];
  let e = r(_.default.getRoles(a.id)).values().sortBy(e => {
    let {
      position: t
    } = e;
    return t
  }).reverse().value();
  return I.default.calculatePositionDeltas({
    oldOrdering: e,
    newOrdering: x,
    idGetter: e => {
      let {
        id: t
      } = e;
      return t
    },
    existingPositionGetter: e => {
      let {
        originalPosition: t
      } = e;
      return null != t ? t : 1 / 0
    },
    ascending: !1
  })
}

function G(e) {
  let {
    section: t
  } = e;
  if (null != a || t !== N.GuildSettingsSections.ROLES) return !1;
  j()
}

function j() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  a = f.default.getProps().guild, C = !1, R = !1, n = void 0, g.clear(), h = N.FormStates.OPEN, L = [...x = null != a ? r(_.default.getRoles(a.id)).values().sortBy(e => {
    let {
      position: t
    } = e;
    return t
  }).reverse().value() : []], A = !1, e && (D.clear(), M.forEach((e, t) => {
    D.set(t, [...e])
  }))
}
let U = r.debounce(() => {
  let e = !1;
  R && !(R = v().length > 0) && (e = !0), [...g].forEach(t => {
    r.isEqual(b(t), function(e) {
      return L.find(t => {
        let {
          id: s
        } = t;
        return s === e
      })
    }(t)) && (g.delete(t), e = !0)
  }), 0 === g.size && (C = !1), A && r.isEqual(M, D) && (e = !0, A = !1), e && F.emitChange()
}, 500);

function P(e, t) {
  let s = x.indexOf(e);
  if (s < 0) return !1;
  let a = {
    ...e,
    ...t
  };
  x[s] = a, x = [...x], C = !0, g.add(a.id), U()
}

function b(e) {
  return x.find(t => {
    let {
      id: s
    } = t;
    return s === e
  })
}

function B(e) {
  let {
    guildId: t
  } = e;
  if (null == a || t !== a.id || h === N.FormStates.SUBMITTING) return !1;
  a = f.default.getProps().guild;
  let s = [];
  null != a && (s = r(_.default.getRoles(a.id)).values().sortBy(e => {
    let {
      position: t
    } = e;
    return t
  }).reverse().value()), g.forEach(e => {
    let t = b(e),
      a = -1,
      l = s.find((t, s) => {
        let {
          id: l
        } = t;
        if (l === e) return a = s, !0
      });
    null == l || null == t ? g.delete(e) : s[a] = t
  }), 0 === g.size && (C = !1), R = !1, x = [...s]
}
class y extends u.default.Store {
  initialize() {
    this.waitFor(f.default, E.default, _.default)
  }
  hasChanges() {
    return C || R || A
  }
  get errorMessage() {
    return n
  }
  get hasSortChanges() {
    return R
  }
  get hasRoleConfigurationChanges() {
    return A
  }
  get guild() {
    return a
  }
  get editedRoleIds() {
    return Array.from(g)
  }
  get editedRoleIdsForConfigurations() {
    return p
  }
  get roles() {
    return x
  }
  get formState() {
    return h
  }
  get lastRoleEditSection() {
    return O
  }
  getSortDeltas() {
    return v()
  }
  showNotice() {
    return this.hasChanges()
  }
  getRole(e) {
    return b(e)
  }
  getPermissionSearchQuery() {
    return l
  }
  getEditedRoleConnectionConfigurationsMap() {
    return D
  }
}
y.displayName = "GuildSettingsRolesStore";
let F = new y(c.default, __OVERLAY__ ? {} : {
  GUILD_SETTINGS_ROLES_INIT: () => j(),
  GUILD_SETTINGS_INIT: G,
  GUILD_SETTINGS_SET_SECTION: G,
  GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
    let {
      roles: t
    } = e;
    if (null != x && t.length !== x.length) return !1;
    x = t.map(e => b(e)).filter(T.isNotNullish), R = !0, U()
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function(e) {
    let {
      id: t,
      flag: s,
      allow: a
    } = e, l = b(t);
    if (null == l) return !1;
    let {
      permissions: n
    } = l;
    return P(l, {
      permissions: n = a ? o.add(n, s) : o.remove(n, s)
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
    let {
      id: t,
      permissions: s
    } = e, a = b(t);
    return null != a && P(a, {
      permissions: s
    })
  },
  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
    let {
      id: t
    } = e, s = b(t);
    return null != s && P(s, {
      permissions: S.NONE
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
    let {
      id: t,
      name: s
    } = e, a = b(t);
    return null != a && P(a, {
      name: s
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
    let {
      id: t,
      description: s
    } = e, a = b(t);
    return null != a && P(a, {
      description: s
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
    let {
      id: t,
      color: s
    } = e, a = 0 === s ? null : (0, d.int2hex)(s), l = b(t);
    return null != l && P(l, {
      color: s,
      colorString: a
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function(e) {
    let {
      id: t,
      hoist: s,
      mentionable: a
    } = e, l = b(t);
    return null != l && P(l, {
      hoist: s,
      mentionable: a
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function(e) {
    let {
      id: t,
      icon: s,
      unicodeEmoji: a
    } = e, l = b(t);
    return null != l && P(l, {
      icon: s,
      unicodeEmoji: a
    })
  },
  GUILD_SETTINGS_ROLE_SELECT: function(e) {
    let {
      role: t,
      searchQuery: s
    } = e;
    if (l = s, null != t) {
      if (null != b(t.id)) {
        P(t, t);
        return
      }
      x = [...x, t], U()
    }
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
    let {
      roleId: t,
      roleConnectionConfigurations: s
    } = e, a = b(t);
    if (null == a) return !1;
    let l = M.get(a.id);
    if (r.isEqual(l, s)) return !1;
    D.set(a.id, s), M.set(a.id, s), U()
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
    let {
      roleId: t,
      roleConnectionConfigurations: s
    } = e, a = b(t);
    if (null == a) return !1;
    A = !0, p.add(a.id), D.set(a.id, s), U()
  },
  GUILD_SETTINGS_CLOSE: function() {
    a = null, L = x = [], M.clear(), g.clear(), D.clear(), p = new Set, C = !1, R = !1, A = !1, h = N.FormStates.CLOSED
  },
  GUILD_ROLE_CREATE: B,
  GUILD_ROLE_UPDATE: B,
  GUILD_ROLE_DELETE: function(e) {
    return p.has(e.roleId) && (p.delete(e.roleId), M.delete(e.roleId), D.delete(e.roleId), A = !1), B(e)
  },
  GUILD_SETTINGS_ROLES_SUBMITTING: function() {
    h = N.FormStates.SUBMITTING
  },
  GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
    let {
      message: t
    } = e;
    h = N.FormStates.OPEN, n = t
  },
  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
    j(!1)
  },
  GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE: function(e) {
    let {
      section: t
    } = e;
    O = t
  }
});
var H = F