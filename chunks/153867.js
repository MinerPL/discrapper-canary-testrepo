"use strict";
n.r(t), n.d(t, {
  saveClientTheme: function() {
    return T
  },
  saveGuildFolders: function() {
    return E
  }
});
var i = n("524437"),
  r = n("381499"),
  a = n("570140"),
  s = n("514361"),
  o = n("238514"),
  l = n("210887"),
  u = n("695346"),
  d = n("675478"),
  _ = n("981631"),
  c = n("874893");

function E(e) {
  return d.PreloadedUserSettingsActionCreators.updateAsync("guildFolders", t => {
    t.folders = e.map(e => {
      let t = i.GuildFolder.create({
        guildIds: e.guildIds
      });
      return null != e.folderId && (t.id = r.Int64Value.create({
        value: String(e.folderId)
      })), null != e.folderColor && (t.color = r.UInt64Value.create({
        value: String(e.folderColor)
      })), null != e.folderName && "" !== e.folderName && (t.name = r.StringValue.create({
        value: String(e.folderName)
      })), t
    })
  }, d.UserSettingsDelay.SLOW_USER_ACTION)
}

function I(e) {
  switch (e) {
    case _.ThemeTypes.DARK:
      return i.Theme.DARK;
    case _.ThemeTypes.LIGHT:
      return i.Theme.LIGHT;
    case _.ThemeTypes.DARKER:
      return i.Theme.DARKER;
    case _.ThemeTypes.MIDNIGHT:
      return i.Theme.MIDNIGHT;
    default:
      return i.Theme.DARK
  }
}

function T(e) {
  let {
    backgroundGradientPresetId: t,
    theme: n
  } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.UserSettingsDelay.INFREQUENT_USER_ACTION;
  if (a.default.dispatch({
      type: "UNSYNCED_USER_SETTINGS_UPDATE",
      settings: {
        useSystemTheme: "system" === n ? c.SystemThemeState.ON : c.SystemThemeState.OFF
      }
    }), a.default.dispatch({
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
    }), o.default.shouldSync("appearance")) return d.PreloadedUserSettingsActionCreators.updateAsync("appearance", e => {
    var i;
    e.theme = I(n), e.clientThemeSettings = {
      backgroundGradientPresetId: null != (i = {
        backgroundGradientPresetId: t
      }).backgroundGradientPresetId ? r.UInt32Value.create({
        value: i.backgroundGradientPresetId
      }) : void 0
    }
  }, i)
}
t.default = {
  overrideLocale(e) {
    a.default.dispatch({
      type: "USER_SETTINGS_LOCALE_OVERRIDE",
      locale: e
    })
  },
  updatedUnsyncedSettings(e) {
    a.default.dispatch({
      type: "UNSYNCED_USER_SETTINGS_UPDATE",
      settings: e
    })
  },
  setShouldSyncTextSettings(e) {
    a.default.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        text: {
          shouldSync: e,
          settings: e ? {} : {
            inlineAttachmentMedia: u.InlineAttachmentMedia.getSetting(),
            inlineEmbedMedia: u.InlineEmbedMedia.getSetting(),
            renderEmbeds: u.RenderEmbeds.getSetting(),
            renderReactions: u.RenderReactions.getSetting(),
            animateEmoji: u.AnimateEmoji.getSetting(),
            animateStickers: u.AnimateStickers.getSetting(),
            gifAutoPlay: u.GifAutoPlay.getSetting()
          }
        }
      }
    })
  },
  setShouldSyncAppearanceSettings(e) {
    var t;
    a.default.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          shouldSync: e,
          settings: e ? {} : {
            theme: l.default.theme,
            clientThemeSettings: {
              backgroundGradientPresetId: null === (t = s.default.gradientPreset) || void 0 === t ? void 0 : t.id
            },
            developerMode: u.DeveloperMode.getSetting()
          }
        }
      }
    })
  },
  applySettingsOverride(e) {
    a.default.dispatch({
      type: "USER_SETTINGS_OVERRIDE_APPLY",
      settings: e
    })
  },
  clearSettingsOverride() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    a.default.dispatch({
      type: "USER_SETTINGS_OVERRIDE_CLEAR",
      settings: t
    })
  },
  updateLocale: e => d.PreloadedUserSettingsActionCreators.updateAsync("localization", t => {
    t.locale = r.StringValue.create({
      value: e
    })
  }, d.UserSettingsDelay.INFREQUENT_USER_ACTION),
  updateTheme(e) {
    a.default.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          settings: {
            theme: e
          }
        }
      }
    }), o.default.shouldSync("appearance") && d.PreloadedUserSettingsActionCreators.updateAsync("appearance", t => {
      t.theme = I(e)
    }, d.UserSettingsDelay.INFREQUENT_USER_ACTION)
  }
}