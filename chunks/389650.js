s.d(t, {
  Z: function() {
return Y;
  }
}), s(47120), s(653041);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(392711),
  l = s.n(o),
  c = s(442837),
  d = s(692547),
  _ = s(481060),
  E = s(660216),
  u = s(225433),
  T = s(825209),
  I = s(721383),
  S = s(612226),
  N = s(714338),
  C = s(924557),
  m = s(74299),
  A = s(131951),
  h = s(556296),
  g = s(808506),
  O = s(285952),
  p = s(474333),
  R = s(63063),
  x = s(358085),
  M = s(13140),
  D = s(210887),
  f = s(659947),
  P = s(981631),
  L = s(420212),
  Z = s(689938),
  b = s(104995),
  v = s(735194),
  j = s(549856);

function B(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}

function U(e) {
  let {
children: t
  } = e;
  return t([
S.Q2.MESSAGE,
S.Q2.NAVIGATION,
S.Q2.DND,
S.Q2.CHAT,
S.Q2.VOICE_AND_VIDEO,
S.Q2.MISCELLANEOUS
  ]);
}
let G = l()((0, S.Rv)()).filter(e => e.description !== Z.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG).groupBy(e => e.group).value(),
  F = c.ZP.connectStores([D.Z], () => ({
theme: D.Z.theme
  }))(_.EmptyState);
class y extends a.PureComponent {
  renderMessage() {
let {
  keybind: e
} = this.props, t = M.BB(e.shortcut);
return N.Z.hasBind(t) ? (0, n.jsx)(_.FormText, {
  className: b.keybindMessage,
  type: _.FormTextTypes.DESCRIPTION,
  style: {
    color: d.Z.unsafe_rawColors.RED_400.css
  },
  children: Z.Z.Messages.KEYBIND_CONFLICT
}) : L.Sp.has(t) ? (0, n.jsx)(_.FormText, {
  className: b.keybindMessage,
  type: _.FormTextTypes.DESCRIPTION,
  style: {
    color: d.Z.unsafe_rawColors.RED_400.css
  },
  children: Z.Z.Messages.KEYBIND_NAVIGATION_CONFLICT.format({
    keyboardNavArticle: R.Z.getArticleURL(P.BhN.KEYBOARD_NAVIGATION)
  })
}) : (0, n.jsx)(_.FormText, {
  className: b.keybindMessage,
  type: _.FormTextTypes.DESCRIPTION,
  children: this.props.keybindDescriptions[e.action]
});
  }
  render() {
let {
  managed: e,
  enabled: t
} = this.props.keybind;
return (0, n.jsxs)(O.Z, {
  direction: O.Z.Direction.VERTICAL,
  className: r()(b.keybindGroup, v.card),
  children: [
    !e && (0, n.jsx)(u.Z, {
      'aria-label': Z.Z.Messages.REMOVE_KEYBIND,
      className: b.removeKeybind,
      onClick: this.handleDeleteKeybind,
      look: u.Z.Looks.FILLED
    }),
    (0, n.jsxs)(O.Z, {
      className: j.marginBottom8,
      children: [
        (0, n.jsx)(O.Z.Child, {
          basis: '45%',
          children: (0, n.jsx)(_.FormItem, {
            title: Z.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION,
            className: b.item,
            children: (0, n.jsx)(_.SingleSelect, {
              value: this.props.keybind.action,
              options: this.props.keybindActionTypes,
              onChange: this.handleActionChanged,
              isDisabled: e
            })
          })
        }),
        (0, n.jsx)(O.Z.Child, {
          basis: '45%',
          children: (0, n.jsx)(_.FormItem, {
            title: Z.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
            className: b.item,
            children: (0, n.jsx)(T.Z, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }),
        (0, n.jsx)(O.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, n.jsx)(_.FormItem, {
            className: b.switch,
            children: (0, n.jsx)(_.Tooltip, {
              text: Z.Z.Messages.USER_SETTINGS_KEYBIND_ENABLE_DISABLE,
              children: e => (0, n.jsx)('div', {
                ...e,
                children: (0, n.jsx)(_.Switch, {
                  checked: t,
                  onChange: this.handleEnableDisable
                })
              })
            })
          })
        })
      ]
    }),
    (0, n.jsx)(O.Z.Child, {
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
  return (0, n.jsx)(f.Z, {
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
  canGoLive: t,
  allowSoundboard: s,
  enableClips: n
} = this.props, a = [{
    value: P.kg4.UNASSIGNED,
    label: Z.Z.Messages.KEYBIND_UNASSIGNED
  },
  {
    value: P.kg4.PUSH_TO_TALK,
    label: Z.Z.Messages.KEYBIND_PUSH_TO_TALK
  },
  {
    value: P.kg4.PUSH_TO_TALK_PRIORITY,
    label: Z.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
  },
  {
    value: P.kg4.PUSH_TO_MUTE,
    label: Z.Z.Messages.KEYBIND_PUSH_TO_MUTE
  },
  {
    value: P.kg4.TOGGLE_MUTE,
    label: Z.Z.Messages.KEYBIND_TOGGLE_MUTE
  },
  {
    value: P.kg4.TOGGLE_DEAFEN,
    label: Z.Z.Messages.KEYBIND_TOGGLE_DEAFEN
  },
  {
    value: P.kg4.TOGGLE_VOICE_MODE,
    label: Z.Z.Messages.KEYBIND_TOGGLE_VOICE_MODE
  },
  {
    value: P.kg4.TOGGLE_STREAMER_MODE,
    label: Z.Z.Messages.KEYBIND_TOGGLE_STREAM_MODE
  }
];
return e && (a.push({
  value: P.kg4.TOGGLE_OVERLAY,
  label: Z.Z.Messages.KEYBIND_TOGGLE_OVERLAY
}), a.push({
  value: P.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
  label: Z.Z.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
}), a.push({
  value: P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
  label: Z.Z.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
})), t && (0, x.isWindows)() && a.push({
  value: P.kg4.TOGGLE_GO_LIVE_STREAMING,
  label: Z.Z.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
}), (0, x.isDesktop)() && (a.push({
  value: P.kg4.NAVIGATE_BACK,
  label: Z.Z.Messages.KEYBIND_NAVIGATE_BACK
}, {
  value: P.kg4.NAVIGATE_FORWARD,
  label: Z.Z.Messages.KEYBIND_NAVIGATE_FORWARD
}, {
  value: P.kg4.SWITCH_TO_VOICE_CHANNEL,
  label: Z.Z.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
}, {
  value: P.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
  label: Z.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
}), s && a.push({
  value: P.kg4.SOUNDBOARD,
  label: Z.Z.Messages.KEYBIND_SOUNDBOARD
}, {
  value: P.kg4.SOUNDBOARD_HOLD,
  label: Z.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
}), n && a.push({
  value: P.kg4.SAVE_CLIP,
  label: Z.Z.Messages.CLIPS_SAVE
})), a;
  }
  get keybindDescriptions() {
let {
  overlaySupported: e,
  canGoLive: t,
  enableClips: s
} = this.props, n = {
  [P.kg4.UNASSIGNED]: Z.Z.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
  [P.kg4.PUSH_TO_MUTE]: Z.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
  [P.kg4.PUSH_TO_TALK]: Z.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
  [P.kg4.PUSH_TO_TALK_PRIORITY]: Z.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
  [P.kg4.TOGGLE_MUTE]: Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
  [P.kg4.TOGGLE_DEAFEN]: Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
  [P.kg4.TOGGLE_VOICE_MODE]: Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
  [P.kg4.TOGGLE_STREAMER_MODE]: Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
};
return e && (n[P.kg4.TOGGLE_OVERLAY] = Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY, n[P.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK), t && (0, x.isWindows)() && (n[P.kg4.TOGGLE_GO_LIVE_STREAMING] = Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, x.isDesktop)() && (n[P.kg4.NAVIGATE_BACK] = Z.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK, n[P.kg4.NAVIGATE_FORWARD] = Z.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD, n[P.kg4.SOUNDBOARD] = (0, x.isWindows)() ? Z.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : Z.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD, n[P.kg4.SOUNDBOARD_HOLD] = (0, x.isWindows)() ? Z.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : Z.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD, s && (n[P.kg4.SAVE_CLIP] = Z.Z.Messages.CLIPS_KEYBIND_DESCRIPTION)), n;
  }
  renderKeybinds(e) {
return e.map(e => (0, n.jsx)('div', {
  className: b.row,
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
      darkSrc: s(572279),
      lightSrc: s(871803),
      width: 320,
      height: 170
    })
  });
  }
  render() {
let e = this.props.enableClips,
  t = l()(this.props.keybinds).reject(e => e.managed && ![
    P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
    P.kg4.SAVE_CLIP
  ].includes(e.action)).reject(t => !e && t.action === P.kg4.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === P.kg4.SOUNDBOARD || e.action === P.kg4.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => !0 === e.managed ? -1 : 0).value();
return (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsx)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: Z.Z.Messages.KEYBINDS,
      children: x.isPlatformEmbedded ? (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)(O.Z, {
            justify: O.Z.Justify.BETWEEN,
            className: j.marginBottom20,
            children: [
              (0, n.jsx)(O.Z.Child, {
                grow: 0,
                children: (0, n.jsx)(p.Z, {
                  messageType: p.Q.WARNING,
                  children: Z.Z.Messages.ADD_KEYBIND_WARNING
                })
              }),
              (0, n.jsx)(O.Z.Child, {
                wrap: !0,
                grow: 0,
                children: (0, n.jsx)(_.Button, {
                  size: _.ButtonSizes.LARGE,
                  onClick: this.handleAddKeybind,
                  children: Z.Z.Messages.ADD_KEYBIND
                })
              })
            ]
          }),
          (0, n.jsx)(_.FormDivider, {}),
          (0, n.jsxs)(_.FormSection, {
            children: [
              this.renderKeybinds(t),
              this.renderEmpty(t)
            ]
          })
        ]
      }) : (0, n.jsx)(p.Z, {
        messageType: p.Q.INFO,
        textVariant: 'text-lg/medium',
        className: b.browserNotice,
        children: Z.Z.Messages.KEYBIND_IN_BROSWER_NOTICE.format({
          downloadLink: P.EYA.DOWNLOAD
        })
      })
    }),
    (0, n.jsx)(_.FormDivider, {}),
    (0, n.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: Z.Z.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
      className: j.marginTop60,
      children: [
        (0, n.jsxs)('div', {
          className: b.defaultKeybind,
          children: [
            (0, n.jsx)(_.Text, {
              variant: 'text-md/normal',
              children: Z.Z.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
            }),
            (0, n.jsx)('div', {
              className: b.defaultKeybindShortcutGroup,
              children: (0, n.jsx)(_.KeyCombo, {
                shortcut: I._.binds['0'],
                className: b.__invalid_defaultKeybindShortcut
              })
            })
          ]
        }),
        (0, n.jsx)(_.FormDivider, {}),
        (0, n.jsx)(U, {
          children: e => (0, n.jsx)(n.Fragment, {
            children: e.map((e, t) => {
              let s = (0, S.UD)(e),
                i = (0, S.U6)(e),
                o = G[e];
              return (0, n.jsxs)('div', {
                className: b.defaultKeybindGroup,
                children: [
                  (0, n.jsx)(_.Heading, {
                    variant: 'heading-deprecated-12/semibold',
                    className: r()(b.defaultKeybindGroupHeader, {
                      [b.defaultKeybindGroupWithDescription]: null != i
                    }),
                    children: s
                  }),
                  null != i && (0, n.jsx)(_.Text, {
                    color: 'header-secondary',
                    className: b.defaultKeybindGroupDescription,
                    variant: 'text-sm/normal',
                    children: i
                  }),
                  (0, n.jsx)(_.FormDivider, {}),
                  o.map(e => (0, n.jsxs)(a.Fragment, {
                    children: [
                      (0, n.jsxs)('div', {
                        className: b.defaultKeybind,
                        children: [
                          (0, n.jsx)(_.Text, {
                            variant: 'text-md/normal',
                            children: e.description
                          }),
                          (0, n.jsx)('div', {
                            className: b.defaultKeybindShortcutGroup,
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
              }, t);
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
t = (0, c.e7)([A.Z], () => (0, m.Z)(A.Z)),
s = (0, c.e7)([g.Z], () => g.Z.isSupported()),
a = (0, C.Go)();
  return (0, n.jsx)(V, {
keybinds: e,
canGoLive: t,
overlaySupported: s,
allowSoundboard: (0, x.isWindows)(),
enableClips: a
  });
}