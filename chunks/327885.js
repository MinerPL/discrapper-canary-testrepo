"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("392711"),
  r = s.n(i),
  o = s("442837"),
  d = s("481060"),
  u = s("660216"),
  c = s("13245"),
  S = s("825209"),
  E = s("887278"),
  T = s("630699"),
  f = s("658785"),
  m = s("556296"),
  _ = s("808506"),
  g = s("237997"),
  h = s("739563"),
  I = s("626135");
s("63063");
var N = s("13140"),
  p = s("981631"),
  C = s("689938"),
  A = s("501465");
let O = x(null);

function x(e) {
  var t;
  let s = g.default.getNotificationPositionMode(),
    a = s !== p.OverlayNotificationPositions.DISABLED,
    n = m.default.getOverlayKeybind(),
    l = m.default.getOverlayChatKeybind();
  return {
    enabled: _.default.enabled,
    notifications_enabled: a,
    notifications_position: a ? s : null,
    text_notifications_mode: g.default.getTextChatNotificationMode(),
    hotkey: null != n ? (0, N.toString)(n.shortcut) : null,
    text_activation_hotkey: null != l ? (0, N.toString)(l.shortcut) : null,
    text_opacity_slider: g.default.getTextWidgetOpacity(),
    old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : _.default.enabled
  }
}

function R(e) {
  let {
    children: t,
    title: s
  } = e;
  return (0, a.jsx)(d.FormItem, {
    title: s,
    className: A.userSettingsOverlayField,
    children: t
  })
}

function M(e) {
  let {
    className: t,
    showHeader: s = !0
  } = e, {
    enabled: n,
    legacyEnabled: i
  } = (0, o.useStateFromStoresObject)([_.default], () => ({
    enabled: _.default.enabled,
    legacyEnabled: _.default.legacyEnabled
  })), {
    avatarSizeMode: N,
    displayNameMode: M,
    displayUserMode: v,
    notificationPositionMode: D,
    textChatNotificationMode: L,
    shouldShowKeybindIndicators: P
  } = (0, o.useStateFromStoresObject)([g.default], () => ({
    avatarSizeMode: g.default.getAvatarSizeMode(),
    displayNameMode: g.default.getDisplayNameMode(),
    displayUserMode: g.default.getDisplayUserMode(),
    notificationPositionMode: g.default.getNotificationPositionMode(),
    textChatNotificationMode: g.default.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: g.default.showKeybindIndicators
  })), j = (0, o.useStateFromStores)([m.default], () => m.default.getOverlayKeybind()), {
    showKeybindIndicators: b
  } = f.default.useExperiment({
    location: "overlay_user_settings"
  }), U = (0, E.isHookModuleTooOld)();

  function y(e) {
    c.default.setEnabled(e, i), I.default.track(p.AnalyticEvents.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - global"
    })
  }

  function B(e) {
    c.default.setEnabled(n, e), I.default.track(p.AnalyticEvents.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - legacy"
    })
  }
  return ! function() {
    let e = x(O);
    !r().isEqual(e, O) && (I.default.track(p.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, e), O = e)
  }(), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.FormSection, {
      className: t,
      tag: d.FormTitleTags.H1,
      title: s ? C.default.Messages.OVERLAY : null,
      children: [!1, (0, a.jsxs)("div", {
        className: A.enableOverlaySection,
        children: [(0, T.isOOPExperimentEnabled)() ? (0, a.jsxs)(d.FormItem, {
          title: C.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: A.enableOverlayItem,
          children: [(0, a.jsx)(d.FormSwitch, {
            className: A.enableSwitch,
            value: n,
            hideBorder: !0,
            onChange: y,
            children: C.default.Messages.ENABLE_INGAME_OVERLAY
          }), (0, a.jsx)(d.FormSwitch, {
            className: A.enableSwitch,
            value: i,
            disabled: U || !n,
            note: U ? C.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: B,
            children: C.default.Messages.ENABLE_LEGACY_OVERLAY
          })]
        }) : (0, a.jsx)(d.FormItem, {
          title: C.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: A.enableOverlayItem,
          children: (0, a.jsx)(d.FormSwitch, {
            className: A.enableSwitch,
            value: n,
            disabled: U,
            note: U ? C.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: y,
            children: C.default.Messages.ENABLE_INGAME_OVERLAY
          })
        }), (0, a.jsx)(d.FormItem, {
          title: C.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK,
          className: A.enableOverlayItem,
          children: (0, a.jsx)(S.default, {
            disabled: !n,
            defaultValue: null != j ? j.shortcut : [],
            onChange: function(e) {
              l()(null != j, "Keybind should never be undefined"), u.default.setKeybind({
                ...j,
                shortcut: e
              })
            }
          })
        })]
      }), (0, a.jsx)(R, {
        title: C.default.Messages.FORM_LABEL_AVATAR_SIZE,
        children: (0, a.jsx)(d.RadioGroup, {
          options: [{
            name: C.default.Messages.AVATAR_SIZE_OPTION_LARGE,
            value: p.OverlayAvatarSizes.LARGE
          }, {
            name: C.default.Messages.AVATAR_SIZE_OPTION_SMALL,
            value: p.OverlayAvatarSizes.SMALL
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return c.default.setAvatarSizeMode(t)
          },
          value: N
        })
      }), (0, a.jsx)(R, {
        title: C.default.Messages.FORM_LABEL_DISPLAY_NAMES,
        children: (0, a.jsx)(d.RadioGroup, {
          options: [{
            name: C.default.Messages.DISPLAY_OPTION_ALWAYS,
            value: p.OverlayDisplayNames.ALWAYS
          }, {
            name: C.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
            value: p.OverlayDisplayNames.ONLY_WHILE_SPEAKING
          }, {
            name: C.default.Messages.DISPLAY_OPTION_NEVER,
            value: p.OverlayDisplayNames.NEVER
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return c.default.setDisplayNameMode(t)
          },
          value: M
        })
      }), (0, a.jsx)(R, {
        title: C.default.Messages.FORM_LABEL_DISPLAY_USERS,
        children: (0, a.jsx)(d.RadioGroup, {
          options: [{
            name: C.default.Messages.DISPLAY_OPTION_ALWAYS,
            value: p.OverlayDisplayUsers.ALWAYS
          }, {
            name: C.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
            value: p.OverlayDisplayUsers.ONLY_WHILE_SPEAKING
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return c.default.setDisplayUserMode(t)
          },
          value: v
        })
      }), b && (0, a.jsx)(R, {
        children: (0, a.jsx)(d.FormSwitch, {
          value: P,
          onChange: e => c.default.setShowKeybindIndicators(e),
          hideBorder: !0,
          children: C.default.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
        })
      })]
    }), (0, a.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: C.default.Messages.OVERLAY_NOTIFICATIONS_SETTINGS,
      className: A.notificationSection,
      children: [(0, a.jsx)(R, {
        title: C.default.Messages.FORM_LABEL_NOTIFICATION_POSITION,
        children: (0, a.jsx)("div", {
          className: A.notificationSettings,
          children: (0, a.jsx)(h.default, {
            position: D,
            onChange: (e, t) => c.default.setNotificationPositionMode(t)
          })
        })
      }), (0, a.jsx)(R, {
        children: (0, a.jsx)(d.FormSwitch, {
          value: D !== p.OverlayNotificationPositions.DISABLED && L === p.OverlayNotificationTextChatTypes.ENABLED,
          disabled: D === p.OverlayNotificationPositions.DISABLED,
          onChange: function() {
            let {
              ENABLED: e,
              DISABLED: t
            } = p.OverlayNotificationTextChatTypes;
            c.default.setTextChatNotificationMode(L === e ? t : e)
          },
          hideBorder: !0,
          children: C.default.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
        })
      })]
    })]
  })
}