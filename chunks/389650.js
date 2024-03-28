"use strict";
s.r(t), s.d(t, {
  default: function() {
    return V
  }
}), s("47120"), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("692547"),
  c = s("481060"),
  S = s("660216"),
  E = s("225433"),
  T = s("825209"),
  _ = s("721383"),
  f = s("612226"),
  m = s("714338"),
  g = s("924557"),
  h = s("74299"),
  N = s("131951"),
  I = s("556296"),
  p = s("808506"),
  C = s("186095"),
  A = s("285952"),
  O = s("474333"),
  x = s("63063"),
  R = s("358085"),
  M = s("13140"),
  v = s("210887"),
  D = s("659947"),
  L = s("981631"),
  P = s("420212"),
  j = s("689938"),
  b = s("397288"),
  U = s("850169"),
  y = s("794711");

function B(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function F(e) {
  let {
    children: t
  } = e;
  return t([f.KeybindGroup.MESSAGE, f.KeybindGroup.NAVIGATION, f.KeybindGroup.DND, f.KeybindGroup.CHAT, f.KeybindGroup.VOICE_AND_VIDEO, f.KeybindGroup.MISCELLANEOUS])
}
let G = o()((0, f.getDefaultLayoutContent)()).filter(e => e.description !== j.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG).groupBy(e => e.group).value(),
  k = d.default.connectStores([v.default], () => ({
    theme: v.default.theme
  }))(C.default);
class H extends n.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, t = M.toString(e.shortcut);
    return m.default.hasBind(t) ? (0, a.jsx)(c.FormText, {
      className: b.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      style: {
        color: u.default.unsafe_rawColors.RED_400.css
      },
      children: j.default.Messages.KEYBIND_CONFLICT
    }) : P.NavigationShortcuts.has(t) ? (0, a.jsx)(c.FormText, {
      className: b.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      style: {
        color: u.default.unsafe_rawColors.RED_400.css
      },
      children: j.default.Messages.KEYBIND_NAVIGATION_CONFLICT.format({
        keyboardNavArticle: x.default.getArticleURL(L.HelpdeskArticles.KEYBOARD_NAVIGATION)
      })
    }) : (0, a.jsx)(c.FormText, {
      className: b.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      children: this.props.keybindDescriptions[e.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: t
    } = this.props.keybind;
    return (0, a.jsxs)(A.default, {
      direction: A.default.Direction.VERTICAL,
      className: i()(b.keybindGroup, U.card),
      children: [!e && (0, a.jsx)(E.default, {
        "aria-label": j.default.Messages.REMOVE_KEYBIND,
        className: b.removeKeybind,
        onClick: this.handleDeleteKeybind,
        look: E.default.Looks.FILLED
      }), (0, a.jsxs)(A.default, {
        className: y.marginBottom8,
        children: [(0, a.jsx)(A.default.Child, {
          basis: "45%",
          children: (0, a.jsx)(c.FormItem, {
            title: j.default.Messages.USER_SETTINGS_KEYBINDS_ACTION,
            className: b.item,
            children: (0, a.jsx)(c.SingleSelect, {
              value: this.props.keybind.action,
              options: this.props.keybindActionTypes,
              onChange: this.handleActionChanged,
              isDisabled: e
            })
          })
        }), (0, a.jsx)(A.default.Child, {
          basis: "45%",
          children: (0, a.jsx)(c.FormItem, {
            title: j.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
            className: b.item,
            children: (0, a.jsx)(T.default, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), (0, a.jsx)(A.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(c.FormItem, {
            className: b.switch,
            children: (0, a.jsx)(c.Tooltip, {
              text: j.default.Messages.USER_SETTINGS_KEYBIND_ENABLE_DISABLE,
              children: e => (0, a.jsx)("div", {
                ...e,
                children: (0, a.jsx)(c.Switch, {
                  checked: t,
                  onChange: this.handleEnableDisable
                })
              })
            })
          })
        })]
      }), (0, a.jsx)(A.default.Child, {
        children: this.renderMessage()
      }), this.renderExtraSettings()]
    })
  }
  renderExtraSettings() {
    let {
      action: e
    } = this.props.keybind;
    if (e === L.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL) return (0, a.jsx)(D.default, {
      keybind: this.props.keybind
    })
  }
  constructor(...e) {
    super(...e), B(this, "handleActionChanged", e => {
      S.default.setKeybind({
        ...this.props.keybind,
        action: e
      })
    }), B(this, "handleShortcutChange", e => {
      S.default.setKeybind({
        ...this.props.keybind,
        shortcut: e
      })
    }), B(this, "handleDeleteKeybind", () => {
      S.default.deleteKeybind(this.props.keybind.id)
    }), B(this, "handleEnableDisable", () => {
      let {
        keybind: e
      } = this.props;
      S.default.setKeybind({
        ...this.props.keybind,
        enabled: !e.enabled
      })
    })
  }
}
class w extends n.PureComponent {
  componentDidMount() {
    S.default.enableAll(!1)
  }
  componentWillUnmount() {
    S.default.enableAll(!0)
  }
  get keybindActionTypes() {
    let {
      overlaySupported: e,
      canGoLive: t,
      allowSoundboard: s,
      enableClips: a
    } = this.props, n = [{
      value: L.GlobalKeybindActions.UNASSIGNED,
      label: j.default.Messages.KEYBIND_UNASSIGNED
    }, {
      value: L.GlobalKeybindActions.PUSH_TO_TALK,
      label: j.default.Messages.KEYBIND_PUSH_TO_TALK
    }, {
      value: L.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY,
      label: j.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
    }, {
      value: L.GlobalKeybindActions.PUSH_TO_MUTE,
      label: j.default.Messages.KEYBIND_PUSH_TO_MUTE
    }, {
      value: L.GlobalKeybindActions.TOGGLE_MUTE,
      label: j.default.Messages.KEYBIND_TOGGLE_MUTE
    }, {
      value: L.GlobalKeybindActions.TOGGLE_DEAFEN,
      label: j.default.Messages.KEYBIND_TOGGLE_DEAFEN
    }, {
      value: L.GlobalKeybindActions.TOGGLE_VOICE_MODE,
      label: j.default.Messages.KEYBIND_TOGGLE_VOICE_MODE
    }, {
      value: L.GlobalKeybindActions.TOGGLE_STREAMER_MODE,
      label: j.default.Messages.KEYBIND_TOGGLE_STREAM_MODE
    }];
    return e && (n.push({
      value: L.GlobalKeybindActions.TOGGLE_OVERLAY,
      label: j.default.Messages.KEYBIND_TOGGLE_OVERLAY
    }), n.push({
      value: L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK,
      label: j.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
    }), n.push({
      value: L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
      label: j.default.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
    })), t && (0, R.isWindows)() && n.push({
      value: L.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING,
      label: j.default.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
    }), (0, R.isDesktop)() && (n.push({
      value: L.GlobalKeybindActions.NAVIGATE_BACK,
      label: j.default.Messages.KEYBIND_NAVIGATE_BACK
    }, {
      value: L.GlobalKeybindActions.NAVIGATE_FORWARD,
      label: j.default.Messages.KEYBIND_NAVIGATE_FORWARD
    }, {
      value: L.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL,
      label: j.default.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
    }, {
      value: L.GlobalKeybindActions.DISCONNECT_FROM_VOICE_CHANNEL,
      label: j.default.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
    }), s && n.push({
      value: L.GlobalKeybindActions.SOUNDBOARD,
      label: j.default.Messages.KEYBIND_SOUNDBOARD
    }, {
      value: L.GlobalKeybindActions.SOUNDBOARD_HOLD,
      label: j.default.Messages.KEYBIND_SOUNDBOARD_HOLD
    }), a && n.push({
      value: L.GlobalKeybindActions.SAVE_CLIP,
      label: j.default.Messages.CLIPS_SAVE
    })), n
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: t,
      enableClips: s
    } = this.props, a = {
      [L.GlobalKeybindActions.UNASSIGNED]: j.default.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
      [L.GlobalKeybindActions.PUSH_TO_MUTE]: j.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
      [L.GlobalKeybindActions.PUSH_TO_TALK]: j.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
      [L.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY]: j.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
      [L.GlobalKeybindActions.TOGGLE_MUTE]: j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
      [L.GlobalKeybindActions.TOGGLE_DEAFEN]: j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
      [L.GlobalKeybindActions.TOGGLE_VOICE_MODE]: j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
      [L.GlobalKeybindActions.TOGGLE_STREAMER_MODE]: j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
    };
    return e && (a[L.GlobalKeybindActions.TOGGLE_OVERLAY] = j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY, a[L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK] = j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK), t && (0, R.isWindows)() && (a[L.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING] = j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, R.isDesktop)() && (a[L.GlobalKeybindActions.NAVIGATE_BACK] = j.default.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK, a[L.GlobalKeybindActions.NAVIGATE_FORWARD] = j.default.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD, a[L.GlobalKeybindActions.SOUNDBOARD] = (0, R.isWindows)() ? j.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : j.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD, a[L.GlobalKeybindActions.SOUNDBOARD_HOLD] = (0, R.isWindows)() ? j.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : j.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD, s && (a[L.GlobalKeybindActions.SAVE_CLIP] = j.default.Messages.CLIPS_KEYBIND_DESCRIPTION)), a
  }
  renderKeybinds(e) {
    return e.map(e => (0, a.jsx)("div", {
      className: b.row,
      children: (0, a.jsx)(H, {
        keybind: e,
        keybindDescriptions: this.keybindDescriptions,
        keybindActionTypes: this.keybindActionTypes
      }, e.id)
    }, e.id))
  }
  renderEmpty(e) {
    if (0 === e.length) return (0, a.jsx)(k, {
      className: y.marginTop60,
      children: (0, a.jsx)(C.EmptyStateImage, {
        darkSrc: s("572279"),
        lightSrc: s("871803"),
        width: 320,
        height: 170
      })
    })
  }
  render() {
    let e = this.props.enableClips,
      t = o()(this.props.keybinds).reject(e => e.managed && ![L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, L.GlobalKeybindActions.SAVE_CLIP].includes(e.action)).reject(t => !e && t.action === L.GlobalKeybindActions.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === L.GlobalKeybindActions.SOUNDBOARD || e.action === L.GlobalKeybindActions.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => !0 === e.managed ? -1 : 0).value();
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormSection, {
        tag: c.FormTitleTags.H1,
        title: j.default.Messages.KEYBINDS,
        children: R.isPlatformEmbedded ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)(A.default, {
            justify: A.default.Justify.BETWEEN,
            className: y.marginBottom20,
            children: [(0, a.jsx)(A.default.Child, {
              grow: 0,
              children: (0, a.jsx)(O.default, {
                messageType: O.HelpMessageTypes.WARNING,
                children: j.default.Messages.ADD_KEYBIND_WARNING
              })
            }), (0, a.jsx)(A.default.Child, {
              wrap: !0,
              grow: 0,
              children: (0, a.jsx)(c.Button, {
                size: c.ButtonSizes.LARGE,
                onClick: this.handleAddKeybind,
                children: j.default.Messages.ADD_KEYBIND
              })
            })]
          }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsxs)(c.FormSection, {
            children: [this.renderKeybinds(t), this.renderEmpty(t)]
          })]
        }) : (0, a.jsx)(O.default, {
          messageType: O.HelpMessageTypes.INFO,
          textVariant: "text-lg/medium",
          className: b.browserNotice,
          children: j.default.Messages.KEYBIND_IN_BROSWER_NOTICE.format({
            downloadLink: L.MarketingURLs.DOWNLOAD
          })
        })
      }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsxs)(c.FormSection, {
        tag: c.FormTitleTags.H1,
        title: j.default.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
        className: y.marginTop60,
        children: [(0, a.jsxs)("div", {
          className: b.defaultKeybind,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            children: j.default.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
          }), (0, a.jsx)("div", {
            className: b.defaultKeybindShortcutGroup,
            children: (0, a.jsx)(c.KeyCombo, {
              shortcut: _.TOGGLE_HOTKEYS.binds["0"],
              className: b.__invalid_defaultKeybindShortcut
            })
          })]
        }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsx)(F, {
          children: e => (0, a.jsx)(a.Fragment, {
            children: e.map((e, t) => {
              let s = (0, f.getNameForKeybindGroup)(e),
                l = (0, f.getDescriptionForKeybindGroup)(e),
                r = G[e];
              return (0, a.jsxs)("div", {
                className: b.defaultKeybindGroup,
                children: [(0, a.jsx)(c.Heading, {
                  variant: "heading-deprecated-12/semibold",
                  className: i()(b.defaultKeybindGroupHeader, {
                    [b.defaultKeybindGroupWithDescription]: null != l
                  }),
                  children: s
                }), null != l && (0, a.jsx)(c.Text, {
                  color: "header-secondary",
                  className: b.defaultKeybindGroupDescription,
                  variant: "text-sm/normal",
                  children: l
                }), (0, a.jsx)(c.FormDivider, {}), r.map(e => (0, a.jsxs)(n.Fragment, {
                  children: [(0, a.jsxs)("div", {
                    className: b.defaultKeybind,
                    children: [(0, a.jsx)(c.Text, {
                      variant: "text-md/normal",
                      children: e.description
                    }), (0, a.jsx)("div", {
                      className: b.defaultKeybindShortcutGroup,
                      children: e.binds.map(e => (0, a.jsx)(c.KeyCombo, {
                        shortcut: e
                      }, e))
                    })]
                  }), (0, a.jsx)(c.FormDivider, {})]
                }, e.description))]
              }, t)
            })
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), B(this, "handleAddKeybind", () => {
      S.default.addKeybind()
    })
  }
}

function V() {
  let e = (0, d.useStateFromStores)([I.default], () => I.default.getState()),
    t = (0, d.useStateFromStores)([N.default], () => (0, h.default)(N.default)),
    s = (0, d.useStateFromStores)([p.default], () => p.default.isSupported()),
    n = (0, g.useEnableClips)();
  return (0, a.jsx)(w, {
    keybinds: e,
    canGoLive: t,
    overlaySupported: s,
    allowSoundboard: (0, R.isWindows)(),
    enableClips: n
  })
}