"use strict";
n.d(t, {
  V1: function() {
    return E
  },
  ZI: function() {
    return T
  }
});
var i = n(524437),
  r = n(381499),
  s = n(570140),
  o = n(514361),
  a = n(238514),
  l = n(210887),
  u = n(695346),
  _ = n(675478),
  d = n(981631),
  c = n(874893);

function E(e) {
  return _.hW.updateAsync("guildFolders", t => {
    t.folders = e.map(e => {
      let t = i.yX.create({
        guildIds: e.guildIds
      });
      return null != e.folderId && (t.id = r.r1.create({
        value: String(e.folderId)
      })), null != e.folderColor && (t.color = r.wA.create({
        value: String(e.folderColor)
      })), null != e.folderName && "" !== e.folderName && (t.name = r.Gm.create({
        value: String(e.folderName)
      })), t
    })
  }, _.fy.SLOW_USER_ACTION)
}

function I(e) {
  switch (e) {
    case d.BRd.DARK:
      return i.Q2.DARK;
    case d.BRd.LIGHT:
      return i.Q2.LIGHT;
    case d.BRd.DARKER:
      return i.Q2.DARKER;
    case d.BRd.MIDNIGHT:
      return i.Q2.MIDNIGHT;
    default:
      return i.Q2.DARK
  }
}

function T(e) {
  let {
    backgroundGradientPresetId: t,
    theme: n
  } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.fy.INFREQUENT_USER_ACTION;
  if (s.Z.dispatch({
      type: "UNSYNCED_USER_SETTINGS_UPDATE",
      settings: {
        useSystemTheme: "system" === n ? c.K.ON : c.K.OFF
      }
    }), s.Z.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          settings: {
            clientThemeSettings: {
              backgroundGradientPresetId: t
            },
            theme: "system" === n ? void 0 : n
          }
        }
      }
    }), a.Z.shouldSync("appearance")) return _.hW.updateAsync("appearance", e => {
    var i;
    e.theme = I(n), e.clientThemeSettings = {
      backgroundGradientPresetId: null != (i = {
        backgroundGradientPresetId: t
      }).backgroundGradientPresetId ? r.yC.create({
        value: i.backgroundGradientPresetId
      }) : void 0
    }
  }, i)
}
t.ZP = {
  overrideLocale(e) {
    s.Z.dispatch({
      type: "USER_SETTINGS_LOCALE_OVERRIDE",
      locale: e
    })
  },
  updatedUnsyncedSettings(e) {
    s.Z.dispatch({
      type: "UNSYNCED_USER_SETTINGS_UPDATE",
      settings: e
    })
  },
  setShouldSyncTextSettings(e) {
    s.Z.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        text: {
          shouldSync: e,
          settings: e ? {} : {
            inlineAttachmentMedia: u.x4.getSetting(),
            inlineEmbedMedia: u.RS.getSetting(),
            renderEmbeds: u.NA.getSetting(),
            renderReactions: u.nc.getSetting(),
            animateEmoji: u.Yk.getSetting(),
            animateStickers: u.Wp.getSetting(),
            gifAutoPlay: u.QK.getSetting()
          }
        }
      }
    })
  },
  setShouldSyncAppearanceSettings(e) {
    var t;
    s.Z.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          shouldSync: e,
          settings: e ? {} : {
            theme: l.Z.theme,
            clientThemeSettings: {
              backgroundGradientPresetId: null === (t = o.Z.gradientPreset) || void 0 === t ? void 0 : t.id
            },
            developerMode: u.Sb.getSetting()
          }
        }
      }
    })
  },
  applySettingsOverride(e) {
    s.Z.dispatch({
      type: "USER_SETTINGS_OVERRIDE_APPLY",
      settings: e
    })
  },
  clearSettingsOverride() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    s.Z.dispatch({
      type: "USER_SETTINGS_OVERRIDE_CLEAR",
      settings: t
    })
  },
  updateLocale: e => _.hW.updateAsync("localization", t => {
    t.locale = r.Gm.create({
      value: e
    })
  }, _.fy.INFREQUENT_USER_ACTION),
  updateTheme(e) {
    s.Z.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          settings: {
            theme: e
          }
        }
      }
    }), a.Z.shouldSync("appearance") && _.hW.updateAsync("appearance", t => {
      t.theme = I(e)
    }, _.fy.INFREQUENT_USER_ACTION)
  }
}