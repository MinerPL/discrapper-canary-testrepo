"use strict";
n.r(t), n.d(t, {
  CHANNEL_NEXT: function() {
    return E
  },
  CHANNEL_PREV: function() {
    return c
  },
  TOGGLE_PREVIOUS_GUILD: function() {
    return _
  },
  NAVIGATE_BACK: function() {
    return A
  },
  NAVIGATE_FORWARD: function() {
    return C
  }
});
var i = n("473532"),
  o = n("722525"),
  l = n("393414"),
  u = n("239380"),
  a = n("18494"),
  s = n("162771"),
  d = n("773336"),
  r = n("49111");
let E = {
    binds: ["alt+down"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.default)(), !1)
  },
  c = {
    binds: ["alt+up"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.default)(-1), !1)
  },
  _ = {
    binds: ["mod+alt+right"],
    comboKeysBindGlobal: !0,
    action() {
      let e;
      let t = s.default.getGuildId();
      if (null != t) e = r.ME;
      else {
        let t = s.default.getLastSelectedGuildId();
        null != t && (e = t, (0, o.transitionToChannel)(t, a.default.getChannelId(t)))
      }
      return null != e && (0, u.transitionToGuild)(e), !1
    }
  },
  A = {
    binds: (0, d.isMac)() ? ["mod+["] : ["alt+left"],
    comboKeysBindGlobal: !0,
    action: () => ((0, l.back)(), !1)
  },
  C = {
    binds: (0, d.isMac)() ? ["mod+]"] : ["alt+right"],
    comboKeysBindGlobal: !0,
    action: () => ((0, l.forward)(), !1)
  }