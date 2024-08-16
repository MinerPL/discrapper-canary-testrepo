n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(78839);
let c = !1,
    d = {};
function _(e) {
    let { guildBoostSlot: t } = e;
    d = {
        ...d,
        [t.id]: t
    };
}
function E() {
    let e = {};
    for (let t of Object.values(d)) (e[t.id] = t), (t.subscription = u.ZP.getSubscriptionById(t.subscriptionId));
    d = e;
}
class f extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([u.ZP], E);
    }
    get hasFetched() {
        return c;
    }
    get boostSlots() {
        return d;
    }
    getGuildBoostSlot(e) {
        return d[e];
    }
}
(s = 'GuildBoostSlotStore'),
    (a = 'displayName') in (i = f)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new f(l.Z, {
        GUILD_BOOST_SLOTS_FETCH_SUCCESS: function (e) {
            let { guildBoostSlots: t } = e;
            (d = {}),
                t.forEach((e) => {
                    d[e.id] = e;
                }),
                (c = !0);
        },
        GUILD_BOOST_SLOT_UPDATE_SUCCESS: _,
        GUILD_BOOST_SLOT_CREATE: _,
        GUILD_BOOST_SLOT_UPDATE: _,
        LOGOUT: function () {
            (d = {}), (c = !1);
        }
    }));
