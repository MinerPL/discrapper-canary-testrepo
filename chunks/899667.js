n(47120);
var a, r, o, i, c = n(442837), l = n(570140);
let s = {}, d = null, u = [], p = !1, _ = !1, f = null, S = null;
function m() {
    _ = !0;
}
class g extends (a = c.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != s[e] ? s[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != s[e] ? s[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return u;
    }
    getAppliedGuildBoost(e) {
        return u.find(t => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return _;
    }
    get applyBoostError() {
        return f;
    }
    get unapplyBoostError() {
        return S;
    }
    get cooldownEndsAt() {
        return d;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return p;
    }
}
i = 'AppliedGuildBoostStore', (o = 'displayName') in (r = g) ? Object.defineProperty(r, o, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[o] = i, t.Z = new g(l.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let {
            guildId: t,
            appliedBoosts: n
        } = e;
        s[t] = {
            subscriptions: n,
            lastFetchedAt: Date.now()
        };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let {appliedGuildBoosts: t} = e;
        p = !1, u = t;
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
        let {endsAt: t} = e;
        d = t;
    },
    GUILD_UNAPPLY_BOOST_START: m,
    GUILD_APPLY_BOOST_START: m,
    GUILD_APPLY_BOOST_SUCCESS: function (e) {
        let {appliedGuildBoost: t} = e, n = new Set(t.map(e => e.id));
        u = [
            ...t,
            ...u.filter(e => !n.has(e.id))
        ], f = null, _ = !1;
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let {error: t} = e;
        _ = !1, f = t;
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let {boostId: t} = e;
        u = u.filter(e => e.id !== t), _ = !1;
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let {error: t} = e;
        _ = !1, S = t;
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        p = !0;
    }
});
