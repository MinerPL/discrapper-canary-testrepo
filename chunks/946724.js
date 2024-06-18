"use strict";
let n, i, l;
t(47120);
var a, r, o, c, d = t(392711),
  u = t.n(d),
  E = t(149765),
  _ = t(866442),
  I = t(442837),
  T = t(570140),
  N = t(561654),
  m = t(430824),
  S = t(990492),
  h = t(823379),
  g = t(700785),
  x = t(999382),
  C = t(203377),
  R = t(981631);
let L = new Set,
  O = R.QZA.CLOSED,
  A = !1,
  p = !1,
  M = [],
  f = [],
  v = C.ZI.DISPLAY,
  D = !1,
  Z = new Set,
  j = new Map,
  U = new Map;

function G() {
  if (null == n || null == M) return [];
  let e = u()(m.Z.getRoles(n.id)).values().sortBy(e => {
    let {
      position: s
    } = e;
    return s
  }).reverse().value();
  return S.ZP.calculatePositionDeltas({
    oldOrdering: e,
    newOrdering: M,
    idGetter: e => {
      let {
        id: s
      } = e;
      return s
    },
    existingPositionGetter: e => {
      let {
        originalPosition: s
      } = e;
      return null != s ? s : 1 / 0
    },
    ascending: !1
  })
}

function P(e) {
  let {
    section: s
  } = e;
  if (null != n || s !== R.pNK.ROLES) return !1;
  b()
}

function b() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  n = x.Z.getProps().guild, A = !1, p = !1, l = void 0, L.clear(), O = R.QZA.OPEN, f = [...M = null != n ? u()(m.Z.getRoles(n.id)).values().sortBy(e => {
    let {
      position: s
    } = e;
    return s
  }).reverse().value() : []], D = !1, e && (U.clear(), j.forEach((e, s) => {
    U.set(s, [...e])
  }))
}
let B = u().debounce(() => {
  let e = !1;
  p && !(p = G().length > 0) && (e = !0), [...L].forEach(s => {
    u().isEqual(F(s), function(e) {
      return f.find(s => {
        let {
          id: t
        } = s;
        return t === e
      })
    }(s)) && (L.delete(s), e = !0)
  }), 0 === L.size && (A = !1), D && u().isEqual(j, U) && (e = !0, D = !1), e && H.emitChange()
}, 500);

function y(e, s) {
  let t = M.indexOf(e);
  if (t < 0) return !1;
  let n = {
    ...e,
    ...s
  };
  M[t] = n, M = [...M], A = !0, L.add(n.id), B()
}

function F(e) {
  return M.find(s => {
    let {
      id: t
    } = s;
    return t === e
  })
}

function w(e) {
  let {
    guildId: s
  } = e;
  if (null == n || s !== n.id || O === R.QZA.SUBMITTING) return !1;
  n = x.Z.getProps().guild;
  let t = [];
  null != n && (t = u()(m.Z.getRoles(n.id)).values().sortBy(e => {
    let {
      position: s
    } = e;
    return s
  }).reverse().value()), L.forEach(e => {
    let s = F(e),
      n = -1;
    null == t.find((s, t) => {
      let {
        id: i
      } = s;
      if (i === e) return n = t, !0
    }) || null == s ? L.delete(e) : t[n] = s
  }), 0 === L.size && (A = !1), p = !1, M = [...t]
}
class k extends(a = I.ZP.Store) {
  initialize() {
    this.waitFor(x.Z, N.Z, m.Z)
  }
  hasChanges() {
    return A || p || D
  }
  get errorMessage() {
    return l
  }
  get hasSortChanges() {
    return p
  }
  get hasRoleConfigurationChanges() {
    return D
  }
  get guild() {
    return n
  }
  get editedRoleIds() {
    return Array.from(L)
  }
  get editedRoleIdsForConfigurations() {
    return Z
  }
  get roles() {
    return M
  }
  get formState() {
    return O
  }
  get lastRoleEditSection() {
    return v
  }
  getSortDeltas() {
    return G()
  }
  showNotice() {
    return this.hasChanges()
  }
  getRole(e) {
    return F(e)
  }
  getPermissionSearchQuery() {
    return i
  }
  getEditedRoleConnectionConfigurationsMap() {
    return U
  }
}
c = "GuildSettingsRolesStore", (o = "displayName") in(r = k) ? Object.defineProperty(r, o, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = c;
let H = new k(T.Z, __OVERLAY__ ? {} : {
  GUILD_SETTINGS_ROLES_INIT: () => b(),
  GUILD_SETTINGS_INIT: P,
  GUILD_SETTINGS_SET_SECTION: P,
  GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
    let {
      roles: s
    } = e;
    if (null != M && s.length !== M.length) return !1;
    M = s.map(e => F(e)).filter(h.lm), p = !0, B()
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function(e) {
    let {
      id: s,
      flag: t,
      allow: n
    } = e, i = F(s);
    if (null == i) return !1;
    let {
      permissions: l
    } = i;
    return y(i, {
      permissions: l = n ? E.IH(l, t) : E.Od(l, t)
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
    let {
      id: s,
      permissions: t
    } = e, n = F(s);
    return null != n && y(n, {
      permissions: t
    })
  },
  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
    let {
      id: s
    } = e, t = F(s);
    return null != t && y(t, {
      permissions: g.Hn
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
    let {
      id: s,
      name: t
    } = e, n = F(s);
    return null != n && y(n, {
      name: t
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
    let {
      id: s,
      description: t
    } = e, n = F(s);
    return null != n && y(n, {
      description: t
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
    let {
      id: s,
      color: t
    } = e, n = 0 === t ? null : (0, _.Rf)(t), i = F(s);
    return null != i && y(i, {
      color: t,
      colorString: n
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function(e) {
    let {
      id: s,
      hoist: t,
      mentionable: n
    } = e, i = F(s);
    return null != i && y(i, {
      hoist: t,
      mentionable: n
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function(e) {
    let {
      id: s,
      icon: t,
      unicodeEmoji: n
    } = e, i = F(s);
    return null != i && y(i, {
      icon: t,
      unicodeEmoji: n
    })
  },
  GUILD_SETTINGS_ROLE_SELECT: function(e) {
    let {
      role: s,
      searchQuery: t
    } = e;
    if (i = t, null != s) {
      if (null != F(s.id)) {
        y(s, s);
        return
      }
      M = [...M, s], B()
    }
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
    let {
      roleId: s,
      roleConnectionConfigurations: t
    } = e, n = F(s);
    if (null == n) return !1;
    let i = j.get(n.id);
    if (u().isEqual(i, t)) return !1;
    U.set(n.id, t), j.set(n.id, t), B()
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
    let {
      roleId: s,
      roleConnectionConfigurations: t
    } = e, n = F(s);
    if (null == n) return !1;
    D = !0, Z.add(n.id), U.set(n.id, t), B()
  },
  GUILD_SETTINGS_CLOSE: function() {
    n = null, f = M = [], j.clear(), L.clear(), U.clear(), Z = new Set, A = !1, p = !1, D = !1, O = R.QZA.CLOSED
  },
  GUILD_ROLE_CREATE: w,
  GUILD_ROLE_UPDATE: w,
  GUILD_ROLE_DELETE: function(e) {
    return Z.has(e.roleId) && (Z.delete(e.roleId), j.delete(e.roleId), U.delete(e.roleId), D = !1), w(e)
  },
  GUILD_SETTINGS_ROLES_SUBMITTING: function() {
    O = R.QZA.SUBMITTING
  },
  GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
    let {
      message: s
    } = e;
    O = R.QZA.OPEN, l = s
  },
  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
    b(!1)
  },
  GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE: function(e) {
    let {
      section: s
    } = e;
    v = s
  }
});
s.Z = H