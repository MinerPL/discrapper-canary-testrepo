let r;
n(47120);
var i, a, o, s, l = n(442837), u = n(902704), c = n(570140), d = n(601964), _ = n(411198), E = n(625137), f = n(709054), h = n(314897), p = n(981631), m = n(647086);
let I = {}, T = {}, g = !1, S = [];
function A(e) {
    for (let t of (T = {}, I = {}, r = 0, e))
        r++, T[t.id] = _.cL(t), I[t.id] = t.roles;
}
function N(e) {
    let {
            guildId: t,
            role: n
        } = e, r = I[t], i = E.CL(n), a = null == r ? void 0 : r[i.id];
    if (null != a && (0, u.Z)(i, a))
        return !1;
    r = {
        ...r,
        [n.id]: E.CL(n)
    }, r = E.iw(t, Object.values(r)), I[t] = r;
}
let v = Object.freeze({});
class O extends (i = l.ZP.Store) {
    getGuild(e) {
        return null == e ? void 0 : e === p.I_8 ? m.g : T[e];
    }
    getGuilds() {
        return T;
    }
    getGuildIds() {
        return f.default.keys(T);
    }
    getGuildCount() {
        return r;
    }
    isLoaded() {
        return g;
    }
    getGeoRestrictedGuilds() {
        return S;
    }
    getAllGuildsRoles() {
        return I;
    }
    getRoles(e) {
        var t;
        return null !== (t = I[e]) && void 0 !== t ? t : v;
    }
    getRole(e, t) {
        var n;
        return null === (n = I[e]) || void 0 === n ? void 0 : n[t];
    }
}
s = 'GuildStore', (o = 'displayName') in (a = O) ? Object.defineProperty(a, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[o] = s, t.Z = new O(c.Z, {
    BACKGROUND_SYNC: function (e) {
        for (let n of e.guilds) {
            var t;
            let e = T[n.id];
            if (null == e || 'unavailable' === n.data_mode)
                return;
            T[n.id] = _.sp(n, e), I[n.id] = 'partial' === n.data_mode ? _.EO(n.id, null !== (t = I[n.id]) && void 0 !== t ? t : v, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : E.C5(n.id, n.roles);
        }
        r = Object.keys(T).length;
    },
    CONNECTION_OPEN: function (e) {
        g = !0;
        let t = T;
        T = {}, I = {}, r = 0, e.guilds.forEach(e => {
            r++, T[e.id] = _.wD(e, t[e.id]), I[e.id] = e.roles instanceof Array ? E.C5(e.id, e.roles) : e.roles;
        });
        let n = !1;
        if (S.length !== e.geoRestrictedGuilds.length)
            n = !0;
        else
            for (let t = 0; t < e.geoRestrictedGuilds.length; t++)
                if (!(0, u.Z)(S[t], e.geoRestrictedGuilds[t])) {
                    n = !0;
                    break;
                }
        n && (S = e.geoRestrictedGuilds);
    },
    OVERLAY_INITIALIZE: function (e) {
        var t;
        T = {}, I = {}, r = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
            r++, T[e.id] = new d.ZP(e);
        }), I = e.allGuildsRoles;
    },
    CACHE_LOADED: function (e) {
        A(e.guilds);
    },
    CACHE_LOADED_LAZY: function (e) {
        if (0 === e.guilds.length)
            return !1;
        A(e.guilds);
    },
    GUILD_CREATE: function (e) {
        let t = _.wD(e.guild, T[e.guild.id]);
        null == T[t.id] && r++, T = {
            ...T,
            [t.id]: t
        }, I[t.id] = e.guild.roles instanceof Array ? E.C5(t.id, e.guild.roles) : e.guild.roles;
    },
    GUILD_UPDATE: function (e) {
        let t = _.di(e.guild, T[e.guild.id]);
        null == T[t.id] && r++, T = {
            ...T,
            [t.id]: t
        }, I[t.id] = E.C5(t.id, e.guild.roles);
    },
    GUILD_DELETE: function (e) {
        let {guild: t} = e, n = S.findIndex(e => e.id === t.id);
        if (-1 !== n) {
            S.splice(n, 1), S = [...S];
            return;
        }
        if (null == T[t.id] || t.unavailable)
            return !1;
        T = { ...T }, delete T[t.id], I[t.id] = void 0, r--;
    },
    GUILD_ROLE_CREATE: N,
    GUILD_ROLE_UPDATE: N,
    GUILD_ROLE_DELETE: function (e) {
        let {
                guildId: t,
                roleId: n
            } = e, r = I[t];
        if (null == r)
            return !1;
        r = { ...r }, delete r[n], I[t] = r;
    },
    GUILD_MEMBER_ADD: function (e) {
        let {
                guildId: t,
                joinedAt: n,
                user: r
            } = e, i = h.default.getId(), a = T[t];
        if (i !== r.id || null == a)
            return !1;
        let o = 'string' == typeof n ? new Date(n) : n;
        if (o === a.joinedAt || null == o)
            return !1;
        T = {
            ...T,
            [t]: a.updateJoinedAt(o)
        };
    },
    GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
        return !0;
    },
    GUILD_GEO_RESTRICTED: function (e) {
        S = [
            ...S,
            {
                id: e.guildId,
                name: e.name,
                icon: e.icon,
                unavailable: !0,
                geo_restricted: !0
            }
        ];
    }
});
