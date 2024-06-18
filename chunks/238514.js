"use strict";
var i, r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(433517),
  l = n(570140),
  u = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = {};
class c extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    d = null != e ? e : {}
  }
  getState() {
    return d
  }
  shouldSync(e) {
    var t;
    return (null === (t = d[e]) || void 0 === t ? void 0 : t.shouldSync) !== !1
  }
  getTextSettings() {
    var e;
    return null === (e = d.text) || void 0 === e ? void 0 : e.settings
  }
  getAppearanceSettings() {
    var e;
    return null === (e = d.appearance) || void 0 === e ? void 0 : e.settings
  }
}
_(c, "displayName", "SelectivelySyncedUserSettingsStore"), _(c, "persistKey", "SelectivelySyncedUserSettingsStore"), _(c, "migrations", [() => {
  var e, t;
  let n = null !== (e = a.K.get("UserSettingsSync")) && void 0 !== e ? e : {},
    i = null !== (t = a.K.get("UserSettingsStore")) && void 0 !== t ? t : {};
  a.K.remove("UserSettingsSync");
  let r = {};
  return !1 === n[u.oAB.TEXT] && (r.text = {
    shouldSync: !1,
    settings: s().pick(i, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay"])
  }), !1 === n[u.oAB.APPEARANCE] && (r.appearance = {
    shouldSync: !1,
    settings: s().pick(i, ["theme", "clientThemeSettings", "developerMode"])
  }), r
}, e => {
  var t, n;
  if ((null == e ? void 0 : null === (n = e.appearance) || void 0 === n ? void 0 : null === (t = n.settings) || void 0 === t ? void 0 : t.theme) === "amoled") return {
    ...e,
    appearance: {
      ...e.appearance,
      settings: {
        ...e.appearance.settings,
        theme: "midnight"
      }
    }
  }
}]), t.Z = new c(l.Z, {
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function(e) {
    let {
      changes: t
    } = e;
    for (let e in t) {
      var n;
      let {
        shouldSync: i,
        settings: r
      } = t[e];
      if (!0 === i) {
        delete d[e];
        continue
      }!1 === i && (d[e] = {
        shouldSync: i,
        settings: {}
      });
      if ((null === (n = d[e]) || void 0 === n ? void 0 : n.shouldSync) === !1)
        for (let t in r) d[e].settings[t] = r[t]
    }
  },
  LOGOUT: function() {
    d = {}
  }
})