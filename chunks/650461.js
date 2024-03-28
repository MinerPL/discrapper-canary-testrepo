"use strict";
n.r(t), n.d(t, {
  newClanProgress: function() {
    return E
  }
}), n("47120");
var a, s, l, i, r = n("913527"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("308083");
let f = {};

function E() {
  return {
    selectedGames: new Set,
    playstyle: c.ClanPlaystyles.NONE,
    interests: new Set,
    description: "",
    tag: "",
    primetime: [{
      day: void 0,
      time: o()().startOf("day")
    }]
  }
}
class h extends(a = u.default.Store) {
  getState(e) {
    return f[e]
  }
}
i = "ClanSetupStore", (l = "displayName") in(s = h) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new h(d.default, {
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e, a = null != f[t] ? f[t] : E();
    f[t] = {
      ...a,
      ...n
    }
  },
  CLAN_SETUP_CLEAR: function(e) {
    let {
      guildId: t
    } = e;
    delete f[t]
  }
})