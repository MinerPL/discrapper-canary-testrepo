"use strict";
let a, l, n;
s.r(t), s("47120");
var i, r, o, d, u = s("392711"),
  c = s.n(u),
  E = s("149765"),
  _ = s("866442"),
  I = s("442837"),
  T = s("570140"),
  S = s("561654"),
  f = s("430824"),
  m = s("990492"),
  N = s("823379"),
  g = s("700785"),
  h = s("999382"),
  C = s("203377"),
  R = s("981631");
let x = new Set,
  L = R.FormStates.CLOSED,
  O = !1,
  A = !1,
  p = [],
  M = [],
  D = C.GuildSettingsRoleEditSections.DISPLAY,
  v = !1,
  j = new Set,
  G = new Map,
  U = new Map;

function P() {
  if (null == a || null == p) return [];
  let e = c()(f.default.getRoles(a.id)).values().sortBy(e => {
    let {
      position: t
    } = e;
    return t
  }).reverse().value();
  return m.default.calculatePositionDeltas({
    oldOrdering: e,
    newOrdering: p,
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

function b(e) {
  let {
    section: t
  } = e;
  if (null != a || t !== R.GuildSettingsSections.ROLES) return !1;
  B()
}

function B() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  a = h.default.getProps().guild, O = !1, A = !1, n = void 0, x.clear(), L = R.FormStates.OPEN, M = [...p = null != a ? c()(f.default.getRoles(a.id)).values().sortBy(e => {
    let {
      position: t
    } = e;
    return t
  }).reverse().value() : []], v = !1, e && (U.clear(), G.forEach((e, t) => {
    U.set(t, [...e])
  }))
}
let y = c().debounce(() => {
  let e = !1;
  A && !(A = P().length > 0) && (e = !0), [...x].forEach(t => {
    c().isEqual(H(t), function(e) {
      return M.find(t => {
        let {
          id: s
        } = t;
        return s === e
      })
    }(t)) && (x.delete(t), e = !0)
  }), 0 === x.size && (O = !1), v && c().isEqual(G, U) && (e = !0, v = !1), e && V.emitChange()
}, 500);

function F(e, t) {
  let s = p.indexOf(e);
  if (s < 0) return !1;
  let a = {
    ...e,
    ...t
  };
  p[s] = a, p = [...p], O = !0, x.add(a.id), y()
}

function H(e) {
  return p.find(t => {
    let {
      id: s
    } = t;
    return s === e
  })
}

function k(e) {
  let {
    guildId: t
  } = e;
  if (null == a || t !== a.id || L === R.FormStates.SUBMITTING) return !1;
  a = h.default.getProps().guild;
  let s = [];
  null != a && (s = c()(f.default.getRoles(a.id)).values().sortBy(e => {
    let {
      position: t
    } = e;
    return t
  }).reverse().value()), x.forEach(e => {
    let t = H(e),
      a = -1;
    null == s.find((t, s) => {
      let {
        id: l
      } = t;
      if (l === e) return a = s, !0
    }) || null == t ? x.delete(e) : s[a] = t
  }), 0 === x.size && (O = !1), A = !1, p = [...s]
}
class w extends(i = I.default.Store) {
  initialize() {
    this.waitFor(h.default, S.default, f.default)
  }
  hasChanges() {
    return O || A || v
  }
  get errorMessage() {
    return n
  }
  get hasSortChanges() {
    return A
  }
  get hasRoleConfigurationChanges() {
    return v
  }
  get guild() {
    return a
  }
  get editedRoleIds() {
    return Array.from(x)
  }
  get editedRoleIdsForConfigurations() {
    return j
  }
  get roles() {
    return p
  }
  get formState() {
    return L
  }
  get lastRoleEditSection() {
    return D
  }
  getSortDeltas() {
    return P()
  }
  showNotice() {
    return this.hasChanges()
  }
  getRole(e) {
    return H(e)
  }
  getPermissionSearchQuery() {
    return l
  }
  getEditedRoleConnectionConfigurationsMap() {
    return U
  }
}
d = "GuildSettingsRolesStore", (o = "displayName") in(r = w) ? Object.defineProperty(r, o, {
  value: d,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = d;
let V = new w(T.default, __OVERLAY__ ? {} : {
  GUILD_SETTINGS_ROLES_INIT: () => B(),
  GUILD_SETTINGS_INIT: b,
  GUILD_SETTINGS_SET_SECTION: b,
  GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
    let {
      roles: t
    } = e;
    if (null != p && t.length !== p.length) return !1;
    p = t.map(e => H(e)).filter(N.isNotNullish), A = !0, y()
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function(e) {
    let {
      id: t,
      flag: s,
      allow: a
    } = e, l = H(t);
    if (null == l) return !1;
    let {
      permissions: n
    } = l;
    return F(l, {
      permissions: n = a ? E.add(n, s) : E.remove(n, s)
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
    let {
      id: t,
      permissions: s
    } = e, a = H(t);
    return null != a && F(a, {
      permissions: s
    })
  },
  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
    let {
      id: t
    } = e, s = H(t);
    return null != s && F(s, {
      permissions: g.NONE
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
    let {
      id: t,
      name: s
    } = e, a = H(t);
    return null != a && F(a, {
      name: s
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
    let {
      id: t,
      description: s
    } = e, a = H(t);
    return null != a && F(a, {
      description: s
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
    let {
      id: t,
      color: s
    } = e, a = 0 === s ? null : (0, _.int2hex)(s), l = H(t);
    return null != l && F(l, {
      color: s,
      colorString: a
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function(e) {
    let {
      id: t,
      hoist: s,
      mentionable: a
    } = e, l = H(t);
    return null != l && F(l, {
      hoist: s,
      mentionable: a
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function(e) {
    let {
      id: t,
      icon: s,
      unicodeEmoji: a
    } = e, l = H(t);
    return null != l && F(l, {
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
      if (null != H(t.id)) {
        F(t, t);
        return
      }
      p = [...p, t], y()
    }
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
    let {
      roleId: t,
      roleConnectionConfigurations: s
    } = e, a = H(t);
    if (null == a) return !1;
    let l = G.get(a.id);
    if (c().isEqual(l, s)) return !1;
    U.set(a.id, s), G.set(a.id, s), y()
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
    let {
      roleId: t,
      roleConnectionConfigurations: s
    } = e, a = H(t);
    if (null == a) return !1;
    v = !0, j.add(a.id), U.set(a.id, s), y()
  },
  GUILD_SETTINGS_CLOSE: function() {
    a = null, M = p = [], G.clear(), x.clear(), U.clear(), j = new Set, O = !1, A = !1, v = !1, L = R.FormStates.CLOSED
  },
  GUILD_ROLE_CREATE: k,
  GUILD_ROLE_UPDATE: k,
  GUILD_ROLE_DELETE: function(e) {
    return j.has(e.roleId) && (j.delete(e.roleId), G.delete(e.roleId), U.delete(e.roleId), v = !1), k(e)
  },
  GUILD_SETTINGS_ROLES_SUBMITTING: function() {
    L = R.FormStates.SUBMITTING
  },
  GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
    let {
      message: t
    } = e;
    L = R.FormStates.OPEN, n = t
  },
  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
    B(!1)
  },
  GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE: function(e) {
    let {
      section: t
    } = e;
    D = t
  }
});
t.default = V