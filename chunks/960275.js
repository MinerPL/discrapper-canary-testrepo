"use strict";
n.r(t), n("47120");
var a = n("570140"),
  s = n("317770"),
  l = n("314897"),
  i = n("57562"),
  r = n("882029"),
  o = n("955204"),
  u = n("351780"),
  d = n("843693");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = new Set;
class E extends s.default {
  _initialize() {
    a.default.subscribe("MESSAGE_CREATE", this.handleMessageCreate), a.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
  }
  _terminate() {
    a.default.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), a.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
  }
  constructor(...e) {
    super(...e), c(this, "handleSettingsUpdate", e => {
      let {
        settings: t
      } = e;
      t.enabled ? (0, i.unlockAchievement)(o.PoggermodeAchievementId.ENABLE_POGGERMODE) : !1 === t.enabled && (0, i.unlockAchievement)(o.PoggermodeAchievementId.DISABLE_POGGERMODE), Object.keys(t).some(e => e.startsWith("confetti")) && (0, i.unlockAchievement)(o.PoggermodeAchievementId.CUSTOMIZE_CONFETTI)
    }), c(this, "handleMessageCreate", e => {
      var t;
      let {
        channelId: n,
        message: {
          author: a,
          nonce: s,
          mentions: c
        }
      } = e;
      if (!u.default.isEnabled()) return !1;
      let E = l.default.getId();
      if ((null == c ? void 0 : c.find(e => e.id === E)) != null ? (0, i.unlockAchievement)(o.PoggermodeAchievementId.PING_ME) : (null !== (t = null == c ? void 0 : c.length) && void 0 !== t ? t : 0) > 0 && (null == a ? void 0 : a.id) === E && (0, i.unlockAchievement)(o.PoggermodeAchievementId.PING_SOMEONE), !(0, d.shouldTrackMessage)(null == a ? void 0 : a.id, E, s, f)) return !1;
      let h = d.default.getMostRecentMessageCombo(n),
        {
          combo: _
        } = null != h ? h : {};
      if (null == _) return !1;
      Object.values(o.PoggermodeAchievementId).forEach(e => {
        if (null != r.default.getUnlocked(e)) return;
        let t = (0, o.getPoggermodeAchievementData)(e),
          n = null == t ? void 0 : t.checkUnlock;
        if (null != n) !1 !== n(_) && (0, i.unlockAchievement)(e)
      })
    })
  }
}
t.default = new E