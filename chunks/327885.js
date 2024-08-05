s.d(t, {
  Z: function() {
return f;
  }
});
var n = s(735250);
s(470079);
var a = s(512722),
  i = s.n(a),
  r = s(392711),
  o = s.n(r),
  l = s(442837),
  c = s(481060),
  d = s(660216),
  _ = s(13245),
  E = s(825209),
  u = s(887278),
  T = s(630699),
  I = s(658785),
  S = s(556296),
  N = s(808506),
  C = s(237997),
  m = s(739563),
  A = s(626135);
s(63063);
var g = s(13140),
  h = s(981631),
  O = s(689938),
  p = s(766877);
let R = x(null);

function x(e) {
  var t;
  let s = C.Z.getNotificationPositionMode(),
n = s !== h._vf.DISABLED,
a = S.Z.getOverlayKeybind(),
i = S.Z.getOverlayChatKeybind();
  return {
enabled: N.Z.enabled,
notifications_enabled: n,
notifications_position: n ? s : null,
text_notifications_mode: C.Z.getTextChatNotificationMode(),
hotkey: null != a ? (0, g.BB)(a.shortcut) : null,
text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null,
text_opacity_slider: C.Z.getTextWidgetOpacity(),
old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : N.Z.enabled
  };
}

function M(e) {
  let {
children: t,
title: s
  } = e;
  return (0, n.jsx)(c.FormItem, {
title: s,
className: p.userSettingsOverlayField,
children: t
  });
}

function f(e) {
  let {
className: t,
showHeader: s = !0
  } = e, {
enabled: a,
legacyEnabled: r
  } = (0, l.cj)([N.Z], () => ({
enabled: N.Z.enabled,
legacyEnabled: N.Z.legacyEnabled
  })), {
avatarSizeMode: g,
displayNameMode: f,
displayUserMode: D,
notificationPositionMode: P,
textChatNotificationMode: L,
shouldShowKeybindIndicators: b
  } = (0, l.cj)([C.Z], () => ({
avatarSizeMode: C.Z.getAvatarSizeMode(),
displayNameMode: C.Z.getDisplayNameMode(),
displayUserMode: C.Z.getDisplayUserMode(),
notificationPositionMode: C.Z.getNotificationPositionMode(),
textChatNotificationMode: C.Z.getTextChatNotificationMode(),
shouldShowKeybindIndicators: C.Z.showKeybindIndicators
  })), Z = (0, l.e7)([S.Z], () => S.Z.getOverlayKeybind()), {
showKeybindIndicators: v
  } = I.Z.useExperiment({
location: 'overlay_user_settings'
  }), j = (0, u.$1)();

  function B(e) {
_.Z.setEnabled(e, r), A.default.track(h.rMx.OVERLAY_TOGGLED, {
  enabled: e,
  setting_type: 'overlay toggled - global'
});
  }

  function U(e) {
_.Z.setEnabled(a, e), A.default.track(h.rMx.OVERLAY_TOGGLED, {
  enabled: e,
  setting_type: 'overlay toggled - legacy'
});
  }
  return ! function() {
let e = x(R);
!o().isEqual(e, R) && (A.default.track(h.rMx.OVERLAY_SETTINGS_UPDATED, e), R = e);
  }(), (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(c.FormSection, {
    className: t,
    tag: c.FormTitleTags.H1,
    title: s ? O.Z.Messages.OVERLAY : null,
    children: [
      !1,
      (0, n.jsxs)('div', {
        className: p.enableOverlaySection,
        children: [
          (0, T.H)() ? (0, n.jsxs)(c.FormItem, {
            title: O.Z.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
            className: p.enableOverlayItem,
            children: [
              (0, n.jsx)(c.FormSwitch, {
                className: p.enableSwitch,
                value: a,
                hideBorder: !0,
                onChange: B,
                children: O.Z.Messages.ENABLE_INGAME_OVERLAY
              }),
              (0, n.jsx)(c.FormSwitch, {
                className: p.enableSwitch,
                value: r,
                disabled: j || !a,
                note: j ? O.Z.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
                hideBorder: !0,
                onChange: U,
                children: O.Z.Messages.ENABLE_LEGACY_OVERLAY
              })
            ]
          }) : (0, n.jsx)(c.FormItem, {
            title: O.Z.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
            className: p.enableOverlayItem,
            children: (0, n.jsx)(c.FormSwitch, {
              className: p.enableSwitch,
              value: a,
              disabled: j,
              note: j ? O.Z.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
              hideBorder: !0,
              onChange: B,
              children: O.Z.Messages.ENABLE_INGAME_OVERLAY
            })
          }),
          (0, n.jsx)(c.FormItem, {
            title: O.Z.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK,
            className: p.enableOverlayItem,
            children: (0, n.jsx)(E.Z, {
              disabled: !a,
              defaultValue: null != Z ? Z.shortcut : [],
              onChange: function(e) {
                i()(null != Z, 'Keybind should never be undefined'), d.Z.setKeybind({
                  ...Z,
                  shortcut: e
                });
              }
            })
          })
        ]
      }),
      (0, n.jsx)(M, {
        title: O.Z.Messages.FORM_LABEL_AVATAR_SIZE,
        children: (0, n.jsx)(c.RadioGroup, {
          options: [{
              name: O.Z.Messages.AVATAR_SIZE_OPTION_LARGE,
              value: h.ipw.LARGE
            },
            {
              name: O.Z.Messages.AVATAR_SIZE_OPTION_SMALL,
              value: h.ipw.SMALL
            }
          ],
          onChange: e => {
            let {
              value: t
            } = e;
            return _.Z.setAvatarSizeMode(t);
          },
          value: g
        })
      }),
      (0, n.jsx)(M, {
        title: O.Z.Messages.FORM_LABEL_DISPLAY_NAMES,
        children: (0, n.jsx)(c.RadioGroup, {
          options: [{
              name: O.Z.Messages.DISPLAY_OPTION_ALWAYS,
              value: h.wC$.ALWAYS
            },
            {
              name: O.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
              value: h.wC$.ONLY_WHILE_SPEAKING
            },
            {
              name: O.Z.Messages.DISPLAY_OPTION_NEVER,
              value: h.wC$.NEVER
            }
          ],
          onChange: e => {
            let {
              value: t
            } = e;
            return _.Z.setDisplayNameMode(t);
          },
          value: f
        })
      }),
      (0, n.jsx)(M, {
        title: O.Z.Messages.FORM_LABEL_DISPLAY_USERS,
        children: (0, n.jsx)(c.RadioGroup, {
          options: [{
              name: O.Z.Messages.DISPLAY_OPTION_ALWAYS,
              value: h.OYC.ALWAYS
            },
            {
              name: O.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
              value: h.OYC.ONLY_WHILE_SPEAKING
            }
          ],
          onChange: e => {
            let {
              value: t
            } = e;
            return _.Z.setDisplayUserMode(t);
          },
          value: D
        })
      }),
      v && (0, n.jsx)(M, {
        children: (0, n.jsx)(c.FormSwitch, {
          value: b,
          onChange: e => _.Z.setShowKeybindIndicators(e),
          hideBorder: !0,
          children: O.Z.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
        })
      })
    ]
  }),
  (0, n.jsxs)(c.FormSection, {
    tag: c.FormTitleTags.H1,
    title: O.Z.Messages.OVERLAY_NOTIFICATIONS_SETTINGS,
    className: p.notificationSection,
    children: [
      (0, n.jsx)(M, {
        title: O.Z.Messages.FORM_LABEL_NOTIFICATION_POSITION,
        children: (0, n.jsx)('div', {
          className: p.notificationSettings,
          children: (0, n.jsx)(m.Z, {
            position: P,
            onChange: (e, t) => _.Z.setNotificationPositionMode(t)
          })
        })
      }),
      (0, n.jsx)(M, {
        children: (0, n.jsx)(c.FormSwitch, {
          value: P !== h._vf.DISABLED && L === h.Ypu.ENABLED,
          disabled: P === h._vf.DISABLED,
          onChange: function() {
            let {
              ENABLED: e,
              DISABLED: t
            } = h.Ypu;
            _.Z.setTextChatNotificationMode(L === e ? t : e);
          },
          hideBorder: !0,
          children: O.Z.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
        })
      })
    ]
  })
]
  });
}