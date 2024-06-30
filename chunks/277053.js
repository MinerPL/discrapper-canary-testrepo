let i, s;
n(47120);
var a, r, l, o, c = n(392711), d = n.n(c), u = n(442837), _ = n(433517), E = n(570140), h = n(700785), I = n(388610), m = n(592125), p = n(981631), g = n(71080);
let T = new Set(), S = p.QZA.CLOSED, C = !1, N = null, f = null, A = null, Z = null, L = null, v = null, O = _.K.get(g.kf) || !1;
function R(e) {
    let t = e.getGuildId(), n = { ...e.permissionOverwrites };
    return null != t && null == n[t] && (n[t] = h.we(t)), n;
}
function x() {
    if (A = I.Z.getChannel(), Z = I.Z.getCategory(), null == A)
        return !1;
    let e = A.getGuildId();
    f = N = R(A), null == N[L] && (L = e), s = null != Z, i = h.o4(A, Z), v = null, C = !1, S = p.QZA.CLOSED, T.clear();
}
class P extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, m.Z);
    }
    hasChanges() {
        return C;
    }
    showNotice() {
        return this.hasChanges();
    }
    getPermissionOverwrite(e) {
        return null == N ? void 0 : N[e];
    }
    get editedPermissionIds() {
        return Array.from(T);
    }
    get permissionOverwrites() {
        return N;
    }
    get selectedOverwriteId() {
        return L;
    }
    get formState() {
        return S;
    }
    get isLockable() {
        return s;
    }
    get locked() {
        return i;
    }
    get channel() {
        return A;
    }
    get category() {
        return Z;
    }
    get advancedMode() {
        return O;
    }
}
o = 'ChannelSettingsPermissionsStore', (l = 'displayName') in (r = P) ? Object.defineProperty(r, l, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[l] = o, t.Z = new P(E.Z, {
    CHANNEL_SETTINGS_SET_SECTION: function (e) {
        let {section: t} = e;
        if (null != A || t !== p.CoT.PERMISSIONS)
            return !1;
        x();
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: x,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function (e) {
        let {
                id: t,
                allow: n,
                deny: s
            } = e, a = null == N ? void 0 : N[t];
        if (null == a || null == A)
            return !1;
        a = {
            ...a,
            allow: n,
            deny: s
        }, N = {
            ...N,
            [t]: a
        }, T.add(t), S = p.QZA.OPEN, C = !d().isEqual(N, f), i = h.o4(A, Z);
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function (e) {
        let {id: t} = e;
        if (null != N && null != N[t])
            L = t;
        else {
            if (null == A)
                return !1;
            v = t;
        }
    },
    CHANNEL_SETTINGS_CLOSE: function () {
        S = p.QZA.CLOSED, N = null, f = null, A = null, Z = null, C = !1, T.clear(), L = null, v = null;
    },
    CHANNEL_UPDATES: function (e) {
        let {channels: t} = e;
        if (null == A)
            return !1;
        let n = !1;
        for (let e of t)
            !1 !== function (e) {
                if (null == A || A.id !== e || null == (A = m.Z.getChannel(e)))
                    return !1;
                Z = I.Z.getCategory();
                let t = A.getGuildId();
                if (null == t)
                    return !1;
                f = R(A);
                let n = {};
                return T.forEach(e => {
                    null != N && (n[e] = N[e]);
                }), null == n[t] && null == A.permissionOverwrites[t] && (n[t] = h.we(t)), null == (N = {
                    ...A.permissionOverwrites,
                    ...n
                })[L] ? L = t : null != v && null != N[v] && (L = v, v = null), i = h.o4(A, Z), !0;
            }(e.id) && (n = !0);
        return n;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function () {
        S = p.QZA.SUBMITTING;
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function (e) {
        let {silent: t} = e;
        t ? S = p.QZA.OPEN : (S = p.QZA.CLOSED, x());
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function (e) {
        let {advancedMode: t} = e;
        O = t, _.K.set(g.kf, t);
    }
});
