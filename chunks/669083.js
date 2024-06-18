"use strict";
n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var i, s, l = n(735250),
  a = n(470079),
  o = n(442837),
  r = n(481060),
  d = n(13245),
  c = n(906467),
  u = n(556296),
  h = n(237997),
  p = n(285952),
  f = n(739563),
  E = n(998502),
  Z = n(13140),
  g = n(658785),
  m = n(981631),
  _ = n(689938),
  I = n(836394),
  S = n(611273);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).GENERAL = "GENERAL", s.VOICE = "VOICE", s.DEVELOPER = "DEVELOPER";
let C = () => [{
    value: m.ipw.LARGE,
    name: _.Z.Messages.AVATAR_SIZE_OPTION_LARGE
  }, {
    value: m.ipw.SMALL,
    name: _.Z.Messages.AVATAR_SIZE_OPTION_SMALL
  }],
  x = () => [{
    value: m.wC$.ALWAYS,
    name: _.Z.Messages.DISPLAY_OPTION_ALWAYS
  }, {
    value: m.wC$.ONLY_WHILE_SPEAKING,
    name: _.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
  }, {
    value: m.wC$.NEVER,
    name: _.Z.Messages.DISPLAY_OPTION_NEVER
  }],
  N = () => [{
    value: m.OYC.ALWAYS,
    name: _.Z.Messages.DISPLAY_OPTION_ALWAYS
  }, {
    value: m.OYC.ONLY_WHILE_SPEAKING,
    name: _.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
  }];

function T() {
  let e = h.Z.getNotificationPositionMode(),
    t = e !== m._vf.DISABLED,
    n = u.Z.getOverlayKeybind(),
    i = u.Z.getOverlayChatKeybind();
  d.Z.track(m.rMx.OVERLAY_SETTINGS_UPDATED, {
    enabled: !0,
    notifications_enabled: t,
    notifications_position: t ? e : null,
    text_notifications_mode: h.Z.getTextChatNotificationMode(),
    text_opacity_slider: h.Z.getTextWidgetOpacity(),
    hotkey: null != n ? (0, Z.BB)(n.shortcut) : null,
    text_activation_hotkey: null != i ? (0, Z.BB)(i.shortcut) : null
  })
}
class O extends a.PureComponent {
  componentDidMount() {
    d.Z.track(m.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    d.Z.setNotificationPositionMode(t), T()
  }
  handleChangeAvatarSizeMode(e) {
    let {
      value: t
    } = e;
    d.Z.setAvatarSizeMode(t)
  }
  handleChangeDisplayNameMode(e) {
    let {
      value: t
    } = e;
    d.Z.setDisplayNameMode(t)
  }
  handleChangeDisplayUserMode(e) {
    let {
      value: t
    } = e;
    d.Z.setDisplayUserMode(t)
  }
  renderHeader() {
    return (0, l.jsxs)(p.Z, {
      direction: p.Z.Direction.VERTICAL,
      grow: 0,
      shrink: 0,
      className: I.header,
      children: [(0, l.jsxs)(p.Z, {
        children: [(0, l.jsx)(r.FormTitle, {
          className: I.headerTitle,
          tag: "h1",
          children: _.Z.Messages.OVERLAY_SETTINGS_TITLE
        }), (0, l.jsx)(r.ModalCloseButton, {
          className: I.headerClose,
          onClick: this.props.onClose
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = c.Z.isDeveloper ? (0, l.jsx)(r.TabBar.Item, {
      id: "DEVELOPER",
      className: I.tabBarItem,
      children: "Developer"
    }) : null;
    return (0, l.jsxs)(r.TabBar, {
      selectedItem: e,
      type: "top",
      className: I.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, l.jsx)(r.TabBar.Item, {
        id: "GENERAL",
        className: I.tabBarItem,
        children: _.Z.Messages.OVERLAY_SETTINGS_GENERAL_TAB
      }), (0, l.jsx)(r.TabBar.Item, {
        id: "VOICE",
        className: I.tabBarItem,
        children: _.Z.Messages.OVERLAY_SETTINGS_VOICE_TAB
      }), t]
    })
  }
  renderBody() {
    let e;
    let {
      selectedSection: t
    } = this.state;
    switch (t) {
      case "DEVELOPER":
        e = this.renderDeveloperSettings();
        break;
      case "VOICE":
        e = this.renderVoiceSettings();
        break;
      default:
        e = this.renderGeneralSettings()
    }
    return (0, l.jsx)(r.ModalContent, {
      className: I.content,
      children: e
    }, t)
  }
  renderGeneralSettings() {
    let {
      textChatNotificationMode: e,
      notificationPositionMode: t,
      shouldShowKeybindIndicators: n,
      showKeybindIndicators: i
    } = this.props, s = t !== m._vf.DISABLED;
    return (0, l.jsxs)(a.Fragment, {
      children: [(0, l.jsx)(r.FormItem, {
        title: _.Z.Messages.FORM_LABEL_NOTIFICATION_POSITION,
        className: S.marginBottom20,
        children: (0, l.jsx)(f.Z, {
          position: t,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, l.jsx)(r.FormSwitch, {
        value: s && e === m.Ypu.ENABLED,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !s,
        hideBorder: !0,
        children: _.Z.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
      }), i && (0, l.jsx)(r.FormSwitch, {
        value: n,
        onChange: e => d.Z.setShowKeybindIndicators(e),
        hideBorder: !0,
        children: _.Z.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
      })]
    })
  }
  renderVoiceSettings() {
    let {
      avatarSizeMode: e,
      displayNameMode: t,
      displayUserMode: n
    } = this.props;
    return (0, l.jsxs)(a.Fragment, {
      children: [(0, l.jsx)(r.FormItem, {
        title: _.Z.Messages.FORM_LABEL_AVATAR_SIZE,
        className: S.marginBottom20,
        children: (0, l.jsx)(r.RadioGroup, {
          onChange: this.handleChangeAvatarSizeMode,
          options: C(),
          value: e,
          size: r.RadioGroup.Sizes.SMALL
        })
      }), (0, l.jsx)(r.FormItem, {
        title: _.Z.Messages.FORM_LABEL_DISPLAY_NAMES,
        className: S.marginBottom20,
        children: (0, l.jsx)(r.RadioGroup, {
          onChange: this.handleChangeDisplayNameMode,
          options: x(),
          value: t,
          size: r.RadioGroup.Sizes.SMALL
        })
      }), (0, l.jsx)(r.FormItem, {
        title: _.Z.Messages.FORM_LABEL_DISPLAY_USERS,
        className: S.marginBottom20,
        children: (0, l.jsx)(r.RadioGroup, {
          onChange: this.handleChangeDisplayUserMode,
          options: N(),
          value: n,
          size: r.RadioGroup.Sizes.SMALL
        })
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, l.jsx)(a.Fragment, {
      children: (0, l.jsx)(r.FormItem, {
        title: "Crashes",
        className: S.marginBottom20,
        children: (0, l.jsx)(r.SingleSelect, {
          value: void 0,
          options: [{
            value: void 0,
            label: "Native crash"
          }, {
            value: 0,
            label: "Abort()"
          }, {
            value: 1,
            label: "SIGSEGV()"
          }, {
            value: 2,
            label: "EXCEPTION_ACCESS_VIOLATION"
          }, {
            value: 3,
            label: "RaiseFailFastException"
          }, {
            value: 4,
            label: "Out of Memory"
          }],
          onChange: e => null != e && E.ZP.crash(e)
        })
      })
    })
  }
  render() {
    return (0, l.jsxs)(r.ModalRoot, {
      "aria-label": _.Z.Messages.OVERLAY_SETTINGS_TITLE,
      transitionState: r.ModalTransitionState.ENTERED,
      children: [this.renderHeader(), this.renderBody()]
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      selectedSection: "GENERAL"
    }), v(this, "handleSelectSection", e => {
      this.setState({
        selectedSection: e
      })
    }), v(this, "handleToggleTextChatNotifications", () => {
      let {
        ENABLED: e,
        DISABLED: t
      } = m.Ypu, n = this.props.textChatNotificationMode === e ? t : e;
      d.Z.setTextChatNotificationMode(n), T()
    })
  }
}

function A(e) {
  let {
    onClose: t
  } = e, {
    avatarSizeMode: n,
    displayNameMode: i,
    displayUserMode: s,
    notificationPositionMode: a,
    textChatNotificationMode: r,
    shouldShowKeybindIndicators: d
  } = (0, o.cj)([h.Z], () => ({
    avatarSizeMode: h.Z.getAvatarSizeMode(),
    displayNameMode: h.Z.getDisplayNameMode(),
    displayUserMode: h.Z.getDisplayUserMode(),
    notificationPositionMode: h.Z.getNotificationPositionMode(),
    textChatNotificationMode: h.Z.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: h.Z.showKeybindIndicators
  })), {
    showKeybindIndicators: c
  } = g.Z.useExperiment({
    location: "Overlay Settings"
  });
  return (0, l.jsx)(O, {
    onClose: t,
    avatarSizeMode: n,
    displayNameMode: i,
    displayUserMode: s,
    notificationPositionMode: a,
    textChatNotificationMode: r,
    shouldShowKeybindIndicators: d,
    showKeybindIndicators: c
  })
}