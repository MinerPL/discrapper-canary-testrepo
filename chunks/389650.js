t.d(s, {
  Z: function() {
return Y;
  }
}), t(47120), t(653041);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(392711),
  l = t.n(o),
  c = t(442837),
  d = t(692547),
  _ = t(481060),
  E = t(660216),
  u = t(225433),
  I = t(825209),
  T = t(721383),
  S = t(612226),
  N = t(714338),
  C = t(924557),
  m = t(600164),
  A = t(74299),
  g = t(777036),
  O = t(131951),
  h = t(556296),
  p = t(808506),
  R = t(63063),
  x = t(358085),
  M = t(13140),
  f = t(210887),
  D = t(659947),
  P = t(981631),
  L = t(420212),
  b = t(689938),
  Z = t(602260),
  v = t(440376),
  j = t(224499);

function B(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}

function U(e) {
  let {
children: s
  } = e;
  return s([
S.Q2.MESSAGE,
S.Q2.NAVIGATION,
S.Q2.DND,
S.Q2.CHAT,
S.Q2.VOICE_AND_VIDEO,
S.Q2.MISCELLANEOUS
  ]);
}
let G = l()((0, S.Rv)()).filter(e => e.description !== b.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG).groupBy(e => e.group).value(),
  F = c.ZP.connectStores([f.Z], () => ({
theme: f.Z.theme
  }))(_.EmptyState);
class y extends a.PureComponent {
  renderMessage() {
let {
  keybind: e
} = this.props, s = M.BB(e.shortcut);
return N.Z.hasBind(s) ? (0, n.jsx)(_.FormText, {
  className: Z.keybindMessage,
  type: _.FormTextTypes.DESCRIPTION,
  style: {
    color: d.Z.unsafe_rawColors.RED_400.css
  },
  children: b.Z.Messages.KEYBIND_CONFLICT
}) : L.Sp.has(s) ? (0, n.jsx)(_.FormText, {
  className: Z.keybindMessage,
  type: _.FormTextTypes.DESCRIPTION,
  style: {
    color: d.Z.unsafe_rawColors.RED_400.css
  },
  children: b.Z.Messages.KEYBIND_NAVIGATION_CONFLICT.format({
    keyboardNavArticle: R.Z.getArticleURL(P.BhN.KEYBOARD_NAVIGATION)
  })
}) : (0, n.jsx)(_.FormText, {
  className: Z.keybindMessage,
  type: _.FormTextTypes.DESCRIPTION,
  children: this.props.keybindDescriptions[e.action]
});
  }
  render() {
let {
  managed: e,
  enabled: s
} = this.props.keybind;
return (0, n.jsxs)(m.Z, {
  direction: m.Z.Direction.VERTICAL,
  className: r()(Z.keybindGroup, v.card),
  children: [
    !e && (0, n.jsx)(u.Z, {
      'aria-label': b.Z.Messages.REMOVE_KEYBIND,
      className: Z.removeKeybind,
      onClick: this.handleDeleteKeybind,
      look: u.Z.Looks.FILLED
    }),
    (0, n.jsxs)(m.Z, {
      className: j.marginBottom8,
      children: [
        (0, n.jsx)(m.Z.Child, {
          basis: '45%',
          children: (0, n.jsx)(_.FormItem, {
            title: b.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION,
            className: Z.item,
            children: (0, n.jsx)(_.SingleSelect, {
              value: this.props.keybind.action,
              options: this.props.keybindActionTypes,
              onChange: this.handleActionChanged,
              isDisabled: e
            })
          })
        }),
        (0, n.jsx)(m.Z.Child, {
          basis: '45%',
          children: (0, n.jsx)(_.FormItem, {
            title: b.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
            className: Z.item,
            children: (0, n.jsx)(I.Z, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }),
        (0, n.jsx)(m.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, n.jsx)(_.FormItem, {
            className: Z.switch,
            children: (0, n.jsx)(_.Tooltip, {
              text: b.Z.Messages.USER_SETTINGS_KEYBIND_ENABLE_DISABLE,
              children: e => (0, n.jsx)('div', {
                ...e,
                children: (0, n.jsx)(_.Switch, {
                  checked: s,
                  onChange: this.handleEnableDisable
                })
              })
            })
          })
        })
      ]
    }),
    (0, n.jsx)(m.Z.Child, {
      children: this.renderMessage()
    }),
    this.renderExtraSettings()
  ]
});
  }
  renderExtraSettings() {
let {
  action: e
} = this.props.keybind;
if (e === P.kg4.SWITCH_TO_VOICE_CHANNEL)
  return (0, n.jsx)(D.Z, {
    keybind: this.props.keybind
  });
  }
  constructor(...e) {
super(...e), B(this, 'handleActionChanged', e => {
  E.Z.setKeybind({
    ...this.props.keybind,
    action: e
  });
}), B(this, 'handleShortcutChange', e => {
  E.Z.setKeybind({
    ...this.props.keybind,
    shortcut: e
  });
}), B(this, 'handleDeleteKeybind', () => {
  E.Z.deleteKeybind(this.props.keybind.id);
}), B(this, 'handleEnableDisable', () => {
  let {
    keybind: e
  } = this.props;
  E.Z.setKeybind({
    ...this.props.keybind,
    enabled: !e.enabled
  });
});
  }
}
class V extends a.PureComponent {
  componentDidMount() {
E.Z.enableAll(!1);
  }
  componentWillUnmount() {
E.Z.enableAll(!0);
  }
  get keybindActionTypes() {
let {
  overlaySupported: e,
  canGoLive: s,
  allowSoundboard: t,
  enableClips: n
} = this.props, a = [{
    value: P.kg4.UNASSIGNED,
    label: b.Z.Messages.KEYBIND_UNASSIGNED
  },
  {
    value: P.kg4.PUSH_TO_TALK,
    label: b.Z.Messages.KEYBIND_PUSH_TO_TALK
  },
  {
    value: P.kg4.PUSH_TO_TALK_PRIORITY,
    label: b.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
  },
  {
    value: P.kg4.PUSH_TO_MUTE,
    label: b.Z.Messages.KEYBIND_PUSH_TO_MUTE
  },
  {
    value: P.kg4.TOGGLE_MUTE,
    label: b.Z.Messages.KEYBIND_TOGGLE_MUTE
  },
  {
    value: P.kg4.TOGGLE_DEAFEN,
    label: b.Z.Messages.KEYBIND_TOGGLE_DEAFEN
  },
  {
    value: P.kg4.TOGGLE_VOICE_MODE,
    label: b.Z.Messages.KEYBIND_TOGGLE_VOICE_MODE
  },
  {
    value: P.kg4.TOGGLE_STREAMER_MODE,
    label: b.Z.Messages.KEYBIND_TOGGLE_STREAM_MODE
  }
];
return e && (a.push({
  value: P.kg4.TOGGLE_OVERLAY,
  label: b.Z.Messages.KEYBIND_TOGGLE_OVERLAY
}), a.push({
  value: P.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
  label: b.Z.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
}), a.push({
  value: P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
  label: b.Z.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
})), s && (0, x.isWindows)() && a.push({
  value: P.kg4.TOGGLE_GO_LIVE_STREAMING,
  label: b.Z.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
}), (0, x.isDesktop)() && (a.push({
  value: P.kg4.NAVIGATE_BACK,
  label: b.Z.Messages.KEYBIND_NAVIGATE_BACK
}, {
  value: P.kg4.NAVIGATE_FORWARD,
  label: b.Z.Messages.KEYBIND_NAVIGATE_FORWARD
}, {
  value: P.kg4.SWITCH_TO_VOICE_CHANNEL,
  label: b.Z.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
}, {
  value: P.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
  label: b.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
}), t && a.push({
  value: P.kg4.SOUNDBOARD,
  label: b.Z.Messages.KEYBIND_SOUNDBOARD
}, {
  value: P.kg4.SOUNDBOARD_HOLD,
  label: b.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
}), n && a.push({
  value: P.kg4.SAVE_CLIP,
  label: b.Z.Messages.CLIPS_SAVE
})), a;
  }
  get keybindDescriptions() {
let {
  overlaySupported: e,
  canGoLive: s,
  enableClips: t
} = this.props, n = {
  [P.kg4.UNASSIGNED]: b.Z.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
  [P.kg4.PUSH_TO_MUTE]: b.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
  [P.kg4.PUSH_TO_TALK]: b.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
  [P.kg4.PUSH_TO_TALK_PRIORITY]: b.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
  [P.kg4.TOGGLE_MUTE]: b.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
  [P.kg4.TOGGLE_DEAFEN]: b.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
  [P.kg4.TOGGLE_VOICE_MODE]: b.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
  [P.kg4.TOGGLE_STREAMER_MODE]: b.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
};
return e && (n[P.kg4.TOGGLE_OVERLAY] = b.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY, n[P.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = b.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK), s && (0, x.isWindows)() && (n[P.kg4.TOGGLE_GO_LIVE_STREAMING] = b.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, x.isDesktop)() && (n[P.kg4.NAVIGATE_BACK] = b.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK, n[P.kg4.NAVIGATE_FORWARD] = b.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD, n[P.kg4.SOUNDBOARD] = (0, x.isWindows)() ? b.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : b.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD, n[P.kg4.SOUNDBOARD_HOLD] = (0, x.isWindows)() ? b.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : b.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD, t && (n[P.kg4.SAVE_CLIP] = b.Z.Messages.CLIPS_KEYBIND_DESCRIPTION)), n;
  }
  renderKeybinds(e) {
return e.map(e => (0, n.jsx)('div', {
  className: Z.row,
  children: (0, n.jsx)(y, {
    keybind: e,
    keybindDescriptions: this.keybindDescriptions,
    keybindActionTypes: this.keybindActionTypes
  }, e.id)
}, e.id));
  }
  renderEmpty(e) {
if (0 === e.length)
  return (0, n.jsx)(F, {
    className: j.marginTop60,
    children: (0, n.jsx)(_.EmptyStateImage, {
      darkSrc: t(572279),
      lightSrc: t(871803),
      width: 320,
      height: 170
    })
  });
  }
  render() {
let e = this.props.enableClips,
  s = l()(this.props.keybinds).reject(e => e.managed && ![
    P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
    P.kg4.SAVE_CLIP
  ].includes(e.action)).reject(s => !e && s.action === P.kg4.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === P.kg4.SOUNDBOARD || e.action === P.kg4.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => !0 === e.managed ? -1 : 0).value();
return (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsx)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: b.Z.Messages.KEYBINDS,
      children: x.isPlatformEmbedded ? (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)(m.Z, {
            justify: m.Z.Justify.BETWEEN,
            className: j.marginBottom20,
            children: [
              (0, n.jsx)(m.Z.Child, {
                grow: 0,
                children: (0, n.jsx)(g.Z, {
                  messageType: g.Q.WARNING,
                  children: b.Z.Messages.ADD_KEYBIND_WARNING
                })
              }),
              (0, n.jsx)(m.Z.Child, {
                wrap: !0,
                grow: 0,
                children: (0, n.jsx)(_.Button, {
                  size: _.ButtonSizes.LARGE,
                  onClick: this.handleAddKeybind,
                  children: b.Z.Messages.ADD_KEYBIND
                })
              })
            ]
          }),
          (0, n.jsx)(_.FormDivider, {}),
          (0, n.jsxs)(_.FormSection, {
            children: [
              this.renderKeybinds(s),
              this.renderEmpty(s)
            ]
          })
        ]
      }) : (0, n.jsx)(g.Z, {
        messageType: g.Q.INFO,
        textVariant: 'text-lg/medium',
        className: Z.browserNotice,
        children: b.Z.Messages.KEYBIND_IN_BROSWER_NOTICE.format({
          downloadLink: P.EYA.DOWNLOAD
        })
      })
    }),
    (0, n.jsx)(_.FormDivider, {}),
    (0, n.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: b.Z.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
      className: j.marginTop60,
      children: [
        (0, n.jsxs)('div', {
          className: Z.defaultKeybind,
          children: [
            (0, n.jsx)(_.Text, {
              variant: 'text-md/normal',
              children: b.Z.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
            }),
            (0, n.jsx)('div', {
              className: Z.defaultKeybindShortcutGroup,
              children: (0, n.jsx)(_.KeyCombo, {
                shortcut: T._.binds['0'],
                className: Z.__invalid_defaultKeybindShortcut
              })
            })
          ]
        }),
        (0, n.jsx)(_.FormDivider, {}),
        (0, n.jsx)(U, {
          children: e => (0, n.jsx)(n.Fragment, {
            children: e.map((e, s) => {
              let t = (0, S.UD)(e),
                i = (0, S.U6)(e),
                o = G[e];
              return (0, n.jsxs)('div', {
                className: Z.defaultKeybindGroup,
                children: [
                  (0, n.jsx)(_.Heading, {
                    variant: 'heading-deprecated-12/semibold',
                    className: r()(Z.defaultKeybindGroupHeader, {
                      [Z.defaultKeybindGroupWithDescription]: null != i
                    }),
                    children: t
                  }),
                  null != i && (0, n.jsx)(_.Text, {
                    color: 'header-secondary',
                    className: Z.defaultKeybindGroupDescription,
                    variant: 'text-sm/normal',
                    children: i
                  }),
                  (0, n.jsx)(_.FormDivider, {}),
                  o.map(e => (0, n.jsxs)(a.Fragment, {
                    children: [
                      (0, n.jsxs)('div', {
                        className: Z.defaultKeybind,
                        children: [
                          (0, n.jsx)(_.Text, {
                            variant: 'text-md/normal',
                            children: e.description
                          }),
                          (0, n.jsx)('div', {
                            className: Z.defaultKeybindShortcutGroup,
                            children: e.binds.map(e => (0, n.jsx)(_.KeyCombo, {
                              shortcut: e
                            }, e))
                          })
                        ]
                      }),
                      (0, n.jsx)(_.FormDivider, {})
                    ]
                  }, e.description))
                ]
              }, s);
            })
          })
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), B(this, 'handleAddKeybind', () => {
  E.Z.addKeybind();
});
  }
}

function Y() {
  let e = (0, c.e7)([h.Z], () => h.Z.getState()),
s = (0, c.e7)([O.Z], () => (0, A.Z)(O.Z)),
t = (0, c.e7)([p.Z], () => p.Z.isSupported()),
a = (0, C.Go)();
  return (0, n.jsx)(V, {
keybinds: e,
canGoLive: s,
overlaySupported: t,
allowSoundboard: (0, x.isWindows)(),
enableClips: a
  });
}