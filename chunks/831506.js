n(47120);
var i, a, s, l, r = n(392711), o = n.n(r), c = n(442837), d = n(570140), u = n(314897), _ = n(699516), E = n(885110), m = n(981631);
let I = {}, T = {};
function h(e, t) {
    var n;
    return (null !== (n = I[e]) && void 0 !== n ? n : {})[t];
}
function N(e, t) {
    let n = h(e, t);
    if (null == n)
        return;
    let i = I[e];
    delete i[t], o().isEmpty(i) && delete I[e];
    let a = T[n];
    null != a && (a.delete(e), 0 === a.size && delete T[n]);
}
function f(e, t, n, i) {
    let a = n.find(e => null != e.party && e.party.id), s = null != a && null != a.party ? a.party.id : null, l = h(t, e);
    if (null == s || i === m.Skl.OFFLINE)
        return null != l && (N(t, e), void 0);
    if (null != l) {
        if (l === s)
            return !1;
        N(t, e);
    }
    !function (e, t, n) {
        var i;
        let a = I[e];
        if (null == a && (a = I[e] = {}), a[t] = n, _.Z.isBlocked(e))
            return;
        let s = null !== (i = T[n]) && void 0 !== i ? i : new Set();
        T[n] = s, s.add(e);
    }(t, e, s);
}
function p(e) {
    let {guild: t} = e, n = !1;
    for (let {
                user: e,
                status: i,
                activities: a
            } of t.presences)
        !1 !== f(t.id, e.id, a, i) && (n = !0);
    return n;
}
function C(e, t) {
    let n = !1;
    return t.forEach(t => {
        null != t && f(e, t.user.id, t.activities, t.status) && (n = !0);
    }), n;
}
function g() {
    let e = u.default.getId(), t = E.Z.getActivities();
    return f(m.ME, e, t);
}
class S extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([E.Z], g), this.waitFor(E.Z, _.Z);
    }
    getParty(e) {
        return null != e && null != T[e] ? T[e] : null;
    }
    getUserParties() {
        return I;
    }
    getParties() {
        return T;
    }
}
l = 'GamePartyStore', (s = 'displayName') in (a = S) ? Object.defineProperty(a, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[s] = l, t.Z = new S(d.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let {
                guilds: t,
                presences: n
            } = e, i = !1;
        for (let {
                    user: e,
                    status: t,
                    activities: a
                } of n)
            null != e && !1 !== f(m.ME, e.id, a, t) && (i = !0);
        for (let e of t)
            !1 !== p({ guild: e }) && (i = !0);
        return i;
    },
    OVERLAY_INITIALIZE: function (e) {
        let {
            parties: t,
            userParties: n
        } = e;
        T = {}, I = { ...n }, Object.keys(t).forEach(e => T[e] = new Set(t[e]));
    },
    GUILD_CREATE: p,
    PRESENCES_REPLACE: function (e) {
        let {presences: t} = e, n = !1;
        for (let {
                    user: e,
                    activities: i
                } of t)
            null != e && !1 !== f(m.ME, e.id, i) && (n = !0);
        return n;
    },
    PRESENCE_UPDATES: function (e) {
        let {updates: t} = e;
        return t.map(e => {
            let {
                guildId: t,
                user: n,
                status: i,
                activities: a
            } = e;
            return f(null != t ? t : m.ME, n.id, a, i);
        }).some(e => e);
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let {
            guildId: t,
            members: n
        } = e;
        return C(t, n.map(e => e.presence));
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let {
            guildId: t,
            addedMembers: n
        } = e;
        return null != n && C(t, n.map(e => e.presence));
    },
    RELATIONSHIP_ADD: function (e) {
        let {relationship: t} = e;
        if (!_.Z.isBlocked(t.id))
            return !1;
        let n = I[t.id];
        if (null == n)
            return !1;
        for (let e of o().values(n)) {
            let n = T[e];
            null != n && n.delete(t.id);
        }
    },
    RELATIONSHIP_REMOVE: function (e) {
        let {relationship: t} = e, n = I[t.id];
        if (null == n)
            return !1;
        for (let e of o().values(n)) {
            let n = T[e];
            null != n && n.add(t.id);
        }
    }
});
