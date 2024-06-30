n(47120);
var r, i, a, o, s = n(149765), l = n(442837), u = n(570140), c = n(223892), d = n(738774), _ = n(644542), E = n(923726), f = n(973542), h = n(790285), p = n(160404), m = n(592125), I = n(271383), T = n(430824), g = n(594174), S = n(981631);
let A = {}, N = new Set();
function v(e) {
    let {
        guildId: t,
        role: n,
        isPreviewingRoles: r
    } = e;
    return !!(0, f.Z)(n) && (!!(r || (0, f.h)(null != n ? n : void 0) || function (e, t) {
        if (null == e)
            return !1;
        let n = g.default.getCurrentUser();
        if (null == n)
            return !1;
        let r = I.ZP.getMember(t, n.id);
        return null != r && r.roles.includes(e.id);
    }(n, t)) || !1);
}
function O(e, t) {
    if (!t.hasFeature(S.oNc.CREATOR_MONETIZABLE) && !t.hasFeature(S.oNc.CREATOR_MONETIZABLE_PROVISIONAL))
        return !1;
    let n = p.Z.isViewingServerShop(t.id);
    for (let r of Object.keys(e.permissionOverwrites)) {
        let i = T.Z.getRole(t.id, r);
        if (!v({
                guildId: t.id,
                role: i,
                isPreviewingRoles: n
            }))
            continue;
        let a = e.permissionOverwrites[r];
        if ((0, h.TG)(e, a))
            return !0;
    }
    let r = T.Z.getRole(t.id, t.getEveryoneRoleId()), i = null != r && !s.e$(r.permissions, S.Plq.VIEW_CHANNEL), a = (0, h.wB)(e, e.permissionOverwrites[t.id]);
    if (i && !a) {
        for (let e of Object.values(T.Z.getRoles(t.id)))
            if (v({
                    guildId: t.id,
                    role: e,
                    isPreviewingRoles: n
                }) && (0, h.MT)(e))
                return !0;
    }
    return !1;
}
function R(e, t) {
    let n = A[e];
    if (null == n)
        return !1;
    let r = m.Z.getChannel(t);
    if (null == r)
        return !1;
    let i = T.Z.getGuild(r.getGuildId());
    if (null == i)
        return !1;
    let a = n.has(t), o = O(r, i);
    return a !== o && (o ? n.add(t) : n.delete(t), !0);
}
function C() {
    A = {}, N.clear();
}
function y(e) {
    let {guild: t} = e;
    delete A[t.id];
}
function D(e) {
    let {guildId: t} = e;
    delete A[t];
}
function L(e) {
    let {channel: t} = e;
    return null != t.guild_id && R(t.guild_id, t.id);
}
class b extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(T.Z, m.Z, p.Z), _.Zo.subscribe({ location: '1' }, () => C());
    }
    isChannelGated(e, t) {
        if (null == e)
            return !1;
        let n = A[e];
        return null == n && (!function (e) {
            let t = T.Z.getGuild(e);
            if (null == t)
                return;
            let n = A[e] = new Set();
            if (!t.hasFeature(S.oNc.ROLE_SUBSCRIPTIONS_ENABLED) || !(0, E.kT)(e) && !(0, c.Rw)(t))
                return;
            let r = m.Z.getMutableGuildChannelsForGuild(e);
            for (let e in r) {
                let i = r[e];
                O(i, t) && n.add(i.id);
            }
        }(e), n = A[e]), null != n && n.has(t);
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !N.has(e);
    }
}
o = 'GatedChannelStore', (a = 'displayName') in (i = b) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new b(u.Z, {
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    CACHE_LOADED_LAZY: C,
    GUILD_CREATE: y,
    GUILD_UPDATE: y,
    GUILD_DELETE: y,
    GUILD_ROLE_CREATE: D,
    GUILD_ROLE_UPDATE: D,
    GUILD_ROLE_DELETE: D,
    IMPERSONATE_UPDATE: D,
    IMPERSONATE_STOP: D,
    CHANNEL_CREATE: L,
    CHANNEL_DELETE: L,
    CHANNEL_UPDATES: function (e) {
        let {channels: t} = e, n = !1;
        for (let e of t) {
            if (null != e.guild_id)
                R(e.guild_id, e.id) && (n = !0);
        }
        return n;
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
        let {
            guildId: t,
            restrictions: n
        } = e;
        (0, d.uq)(n) ? N.add(t) : N.delete(t);
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
        let {guildId: t} = e;
        N.add(t);
    }
});
