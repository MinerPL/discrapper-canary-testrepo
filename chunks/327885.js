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
  _ = s("658785"),
  f = s("556296"),
  m = s("808506"),
  g = s("237997"),
  h = s("739563"),
  N = s("626135");
s("63063");
var I = s("13140"),
  p = s("981631"),
  C = s("689938"),
  A = s("89209");
let O = x(null);

function x(e) {
  var t;
  let s = g.default.getNotificationPositionMode(),
    a = s !== p.OverlayNotificationPositions.DISABLED,
    n = f.default.getOverlayKeybind(),
    l = f.default.getOverlayChatKeybind();
  return {
    enabled: m.default.enabled,
    notifications_enabled: a,
    notifications_position: a ? s : null,
    text_notifications_mode: g.default.getTextChatNotificationMode(),
    hotkey: null != n ? (0, I.toString)(n.shortcut) : null,
    text_activation_hotkey: null != l ? (0, I.toString)(l.shortcut) : null,
    text_opacity_slider: g.default.getTextWidgetOpacity(),
    old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : m.default.enabled
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

function M() {
  let {
    enabled: e,
    legacyEnabled: t
  } = (0, o.useStateFromStoresObject)([m.default], () => ({
    enabled: m.default.enabled,
    legacyEnabled: m.default.legacyEnabled
  })), {
    avatarSizeMode: s,
    displayNameMode: n,
    displayUserMode: i,
    notificationPositionMode: I,
    textChatNotificationMode: M,
    shouldShowKeybindIndicators: v
  } = (0, o.useStateFromStoresObject)([g.default], () => ({
    avatarSizeMode: g.default.getAvatarSizeMode(),
    displayNameMode: g.default.getDisplayNameMode(),
    displayUserMode: g.default.getDisplayUserMode(),
    notificationPositionMode: g.default.getNotificationPositionMode(),
    textChatNotificationMode: g.default.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: g.default.showKeybindIndicators
  })), D = (0, o.useStateFromStores)([f.default], () => f.default.getOverlayKeybind()), {
    showKeybindIndicators: L
  } = _.default.useExperiment({
    location: "overlay_user_settings"
  }), P = (0, E.isHookModuleTooOld)();

  function j(e) {
    c.default.setEnabled(e, t), N.default.track(p.AnalyticEvents.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - global"
    })
  }

  function b(t) {
    c.default.setEnabled(e, t), N.default.track(p.AnalyticEvents.OVERLAY_TOGGLED, {
      enabled: t,
      setting_type: "overlay toggled - legacy"
    })
  }
  return ! function() {
    let e = x(O);
    !r().isEqual(e, O) && (N.default.track(p.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, e), O = e)
  }(), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: C.default.Messages.OVERLAY,
      children: [!1, (0, a.jsxs)("div", {
        className: A.enableOverlaySection,
        children: [(0, T.isOOPExperimentEnabled)() ? (0, a.jsxs)(d.FormItem, {
          title: C.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: A.enableOverlayItem,
          children: [(0, a.jsx)(d.FormSwitch, {
            className: A.enableSwitch,
            value: e,
            hideBorder: !0,
            onChange: j,
            children: C.default.Messages.ENABLE_INGAME_OVERLAY
          }), (0, a.jsx)(d.FormSwitch, {
            className: A.enableSwitch,
            value: t,
            disabled: P || !e,
            note: P ? C.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: b,
            children: C.default.Messages.ENABLE_LEGACY_OVERLAY
          })]
        }) : (0, a.jsx)(d.FormItem, {
          title: C.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: A.enableOverlayItem,
          children: (0, a.jsx)(d.FormSwitch, {
            className: A.enableSwitch,
            value: e,
            disabled: P,
            note: P ? C.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: j,
            children: C.default.Messages.ENABLE_INGAME_OVERLAY
          })
        }), (0, a.jsx)(d.FormItem, {
          title: C.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK,
          className: A.enableOverlayItem,
          children: (0, a.jsx)(S.default, {
            disabled: !e,
            defaultValue: null != D ? D.shortcut : [],
            onChange: function(e) {
              l()(null != D, "Keybind should never be undefined"), u.default.setKeybind({
                ...D,
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
          value: s
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
          value: n
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
          value: i
        })
      }), L && (0, a.jsx)(R, {
        children: (0, a.jsx)(d.FormSwitch, {
          value: v,
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
            position: I,
            onChange: (e, t) => c.default.setNotificationPositionMode(t)
          })
        })
      }), (0, a.jsx)(R, {
        children: (0, a.jsx)(d.FormSwitch, {
          value: I !== p.OverlayNotificationPositions.DISABLED && M === p.OverlayNotificationTextChatTypes.ENABLED,
          disabled: I === p.OverlayNotificationPositions.DISABLED,
          onChange: function() {
            let {
              ENABLED: e,
              DISABLED: t
            } = p.OverlayNotificationTextChatTypes;
            c.default.setTextChatNotificationMode(M === e ? t : e)
          },
          hideBorder: !0,
          children: C.default.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
        })
      })]
    })]
  })
}