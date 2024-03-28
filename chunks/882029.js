"use strict";
n.r(t);
var a, s = n("442837"),
  l = n("570140"),
  i = n("314897"),
  r = n("57562"),
  o = n("351780"),
  u = n("843693");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {
    unlockedAchievements: {}
  },
  f = {
    ...c
  };
class E extends(a = s.default.PersistedStore) {
  initialize(e) {
    this.waitFor(i.default, u.default);
    let t = null != e ? e : {
      ...c
    };
    for (let e in t) f[e] = t[e]
  }
  getState() {
    return f
  }
  getAllUnlockedAchievements() {
    return f.unlockedAchievements
  }
  getUnlocked(e) {
    var t;
    return null !== (t = f.unlockedAchievements[e]) && void 0 !== t ? t : null
  }
}
d(E, "displayName", "PoggermodeAchievementStore"), d(E, "persistKey", "PoggermodeAchievementStore"), t.default = new E(l.default, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
    var t;
    let {
      achievementId: n
    } = e;
    if (!o.default.isEnabled()) return !1;
    t = n, null != f.unlockedAchievements[t] || (f.unlockedAchievements = {
      ...f.unlockedAchievements,
      [t]: {
        achievementId: t,
        dateUnlocked: Date.now()
      }
    }, setTimeout(() => {
      (0, r.showAchievementToast)(t, !0)
    }, 2e3))
  }
})