let s, a, i;
n(47120);
var r, l, o, c, d = n(392711), u = n.n(d), _ = n(149765), E = n(866442), I = n(442837), T = n(570140), m = n(561654), N = n(430824), S = n(990492), h = n(823379), g = n(700785), C = n(999382), x = n(203377), p = n(981631);
let R = new Set(), f = p.QZA.CLOSED, L = !1, O = !1, A = [], M = [], v = x.ZI.DISPLAY, D = !1, j = new Set(), Z = new Map(), b = new Map();
function U() {
    if (null == s || null == A)
        return [];
    let e = u()(N.Z.getRoles(s.id)).values().sortBy(e => {
        let {position: t} = e;
        return t;
    }).reverse().value();
    return S.ZP.calculatePositionDeltas({
        oldOrdering: e,
        newOrdering: A,
        idGetter: e => {
            let {id: t} = e;
            return t;
        },
        existingPositionGetter: e => {
            let {originalPosition: t} = e;
            return null != t ? t : 1 / 0;
        },
        ascending: !1
    });
}
function G(e) {
    let {section: t} = e;
    if (null != s || t !== p.pNK.ROLES)
        return !1;
    P();
}
function P() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    s = C.Z.getProps().guild, L = !1, O = !1, i = void 0, R.clear(), f = p.QZA.OPEN, M = [...A = null != s ? u()(N.Z.getRoles(s.id)).values().sortBy(e => {
            let {position: t} = e;
            return t;
        }).reverse().value() : []], D = !1, e && (b.clear(), Z.forEach((e, t) => {
        b.set(t, [...e]);
    }));
}
let B = u().debounce(() => {
    let e = !1;
    O && !(O = U().length > 0) && (e = !0), [...R].forEach(t => {
        u().isEqual(F(t), function (e) {
            return M.find(t => {
                let {id: n} = t;
                return n === e;
            });
        }(t)) && (R.delete(t), e = !0);
    }), 0 === R.size && (L = !1), D && u().isEqual(Z, b) && (e = !0, D = !1), e && H.emitChange();
}, 500);
function y(e, t) {
    let n = A.indexOf(e);
    if (n < 0)
        return !1;
    let s = {
        ...e,
        ...t
    };
    A[n] = s, A = [...A], L = !0, R.add(s.id), B();
}
function F(e) {
    return A.find(t => {
        let {id: n} = t;
        return n === e;
    });
}
function k(e) {
    let {guildId: t} = e;
    if (null == s || t !== s.id || f === p.QZA.SUBMITTING)
        return !1;
    s = C.Z.getProps().guild;
    let n = [];
    null != s && (n = u()(N.Z.getRoles(s.id)).values().sortBy(e => {
        let {position: t} = e;
        return t;
    }).reverse().value()), R.forEach(e => {
        let t = F(e), s = -1;
        null == n.find((t, n) => {
            let {id: a} = t;
            if (a === e)
                return s = n, !0;
        }) || null == t ? R.delete(e) : n[s] = t;
    }), 0 === R.size && (L = !1), O = !1, A = [...n];
}
class w extends (r = I.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, m.Z, N.Z);
    }
    hasChanges() {
        return L || O || D;
    }
    get errorMessage() {
        return i;
    }
    get hasSortChanges() {
        return O;
    }
    get hasRoleConfigurationChanges() {
        return D;
    }
    get guild() {
        return s;
    }
    get editedRoleIds() {
        return Array.from(R);
    }
    get editedRoleIdsForConfigurations() {
        return j;
    }
    get roles() {
        return A;
    }
    get formState() {
        return f;
    }
    get lastRoleEditSection() {
        return v;
    }
    getSortDeltas() {
        return U();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return F(e);
    }
    getPermissionSearchQuery() {
        return a;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return b;
    }
}
c = 'GuildSettingsRolesStore', (o = 'displayName') in (l = w) ? Object.defineProperty(l, o, {
    value: c,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : l[o] = c;
let H = new w(T.Z, __OVERLAY__ ? {} : {
    GUILD_SETTINGS_ROLES_INIT: () => P(),
    GUILD_SETTINGS_INIT: G,
    GUILD_SETTINGS_SET_SECTION: G,
    GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
        let {roles: t} = e;
        if (null != A && t.length !== A.length)
            return !1;
        A = t.map(e => F(e)).filter(h.lm), O = !0, B();
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
        let {
                id: t,
                flag: n,
                allow: s
            } = e, a = F(t);
        if (null == a)
            return !1;
        let {permissions: i} = a;
        return y(a, { permissions: i = s ? _.IH(i, n) : _.Od(i, n) });
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
        let {
                id: t,
                permissions: n
            } = e, s = F(t);
        return null != s && y(s, { permissions: n });
    },
    GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
        let {id: t} = e, n = F(t);
        return null != n && y(n, { permissions: g.Hn });
    },
    GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
        let {
                id: t,
                name: n
            } = e, s = F(t);
        return null != s && y(s, { name: n });
    },
    GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
        let {
                id: t,
                description: n
            } = e, s = F(t);
        return null != s && y(s, { description: n });
    },
    GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
        let {
                id: t,
                color: n
            } = e, s = 0 === n ? null : (0, E.Rf)(n), a = F(t);
        return null != a && y(a, {
            color: n,
            colorString: s
        });
    },
    GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
        let {
                id: t,
                hoist: n,
                mentionable: s
            } = e, a = F(t);
        return null != a && y(a, {
            hoist: n,
            mentionable: s
        });
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
        let {
                id: t,
                icon: n,
                unicodeEmoji: s
            } = e, a = F(t);
        return null != a && y(a, {
            icon: n,
            unicodeEmoji: s
        });
    },
    GUILD_SETTINGS_ROLE_SELECT: function (e) {
        let {
            role: t,
            searchQuery: n
        } = e;
        if (a = n, null != t) {
            if (null != F(t.id)) {
                y(t, t);
                return;
            }
            A = [
                ...A,
                t
            ], B();
        }
    },
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
        let {
                roleId: t,
                roleConnectionConfigurations: n
            } = e, s = F(t);
        if (null == s)
            return !1;
        let a = Z.get(s.id);
        if (u().isEqual(a, n))
            return !1;
        b.set(s.id, n), Z.set(s.id, n), B();
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
        let {
                roleId: t,
                roleConnectionConfigurations: n
            } = e, s = F(t);
        if (null == s)
            return !1;
        D = !0, j.add(s.id), b.set(s.id, n), B();
    },
    GUILD_SETTINGS_CLOSE: function () {
        s = null, M = A = [], Z.clear(), R.clear(), b.clear(), j = new Set(), L = !1, O = !1, D = !1, f = p.QZA.CLOSED;
    },
    GUILD_ROLE_CREATE: k,
    GUILD_ROLE_UPDATE: k,
    GUILD_ROLE_DELETE: function (e) {
        return j.has(e.roleId) && (j.delete(e.roleId), Z.delete(e.roleId), b.delete(e.roleId), D = !1), k(e);
    },
    GUILD_SETTINGS_ROLES_SUBMITTING: function () {
        f = p.QZA.SUBMITTING;
    },
    GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
        let {message: t} = e;
        f = p.QZA.OPEN, i = t;
    },
    GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
        P(!1);
    },
    GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE: function (e) {
        let {section: t} = e;
        v = t;
    }
});
t.Z = H;
