a(47120);
var t,
    o,
    r,
    i,
    c = a(442837),
    s = a(570140);
let l = {},
    d = null,
    u = [],
    p = !1,
    f = !1,
    _ = null,
    b = null;
function g() {
    f = !0;
}
class y extends (t = c.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != l[e] ? l[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != l[e] ? l[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return u;
    }
    getAppliedGuildBoost(e) {
        return u.find((n) => n.id === e);
    }
    get isModifyingAppliedBoost() {
        return f;
    }
    get applyBoostError() {
        return _;
    }
    get unapplyBoostError() {
        return b;
    }
    get cooldownEndsAt() {
        return d;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return p;
    }
}
(i = 'AppliedGuildBoostStore'),
    (r = 'displayName') in (o = y)
        ? Object.defineProperty(o, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[r] = i),
    (n.Z = new y(s.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: n, appliedBoosts: a } = e;
            l[n] = {
                subscriptions: a,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: n } = e;
            (p = !1), (u = n);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: n } = e;
            d = n;
        },
        GUILD_UNAPPLY_BOOST_START: g,
        GUILD_APPLY_BOOST_START: g,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: n } = e,
                a = new Set(n.map((e) => e.id));
            (u = [...n, ...u.filter((e) => !a.has(e.id))]), (_ = null), (f = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: n } = e;
            (f = !1), (_ = n);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: n } = e;
            (u = u.filter((e) => e.id !== n)), (f = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: n } = e;
            (f = !1), (b = n);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            p = !0;
        }
    }));
