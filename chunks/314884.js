"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(78839);
let _ = !1,
  d = {};

function c(e) {
  let {
    guildBoostSlot: t
  } = e;
  d = {
    ...d,
    [t.id]: t
  }
}

function E() {
  let e = {};
  for (let t of Object.values(d)) e[t.id] = t, t.subscription = u.ZP.getSubscriptionById(t.subscriptionId);
  d = e
}
class I extends(i = a.ZP.Store) {
  initialize() {
    this.syncWith([u.ZP], E)
  }
  get hasFetched() {
    return _
  }
  get boostSlots() {
    return d
  }
  getGuildBoostSlot(e) {
    return d[e]
  }
}
o = "GuildBoostSlotStore", (s = "displayName") in(r = I) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new I(l.Z, {
  GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
    let {
      guildBoostSlots: t
    } = e;
    d = {}, t.forEach(e => {
      d[e.id] = e
    }), _ = !0
  },
  GUILD_BOOST_SLOT_UPDATE_SUCCESS: c,
  GUILD_BOOST_SLOT_CREATE: c,
  GUILD_BOOST_SLOT_UPDATE: c,
  LOGOUT: function() {
    d = {}, _ = !1
  }
})