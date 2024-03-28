"use strict";
n.r(t), n.d(t, {
  CHANNEL_NEXT: function() {
    return E
  },
  CHANNEL_PREV: function() {
    return c
  },
  NAVIGATE_BACK: function() {
    return A
  },
  NAVIGATE_FORWARD: function() {
    return C
  },
  TOGGLE_PREVIOUS_GUILD: function() {
    return _
  }
});
var i = n("140492"),
  o = n("475468"),
  l = n("703656"),
  u = n("920440"),
  a = n("944486"),
  s = n("914010"),
  d = n("358085"),
  r = n("981631");
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
      if (null != s.default.getGuildId()) e = r.ME;
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