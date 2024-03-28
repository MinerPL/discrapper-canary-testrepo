"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("47120");
var i, a, l = n("735250"),
  s = n("470079"),
  o = n("442837"),
  r = n("481060"),
  d = n("13245"),
  u = n("906467"),
  c = n("556296"),
  f = n("237997"),
  h = n("285952"),
  p = n("739563"),
  g = n("998502"),
  m = n("13140"),
  E = n("658785"),
  S = n("981631"),
  v = n("689938"),
  y = n("873663"),
  I = n("794711");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a = i || (i = {})).GENERAL = "GENERAL", a.VOICE = "VOICE", a.DEVELOPER = "DEVELOPER";
let N = () => [{
    value: S.OverlayAvatarSizes.LARGE,
    name: v.default.Messages.AVATAR_SIZE_OPTION_LARGE
  }, {
    value: S.OverlayAvatarSizes.SMALL,
    name: v.default.Messages.AVATAR_SIZE_OPTION_SMALL
  }],
  O = () => [{
    value: S.OverlayDisplayNames.ALWAYS,
    name: v.default.Messages.DISPLAY_OPTION_ALWAYS
  }, {
    value: S.OverlayDisplayNames.ONLY_WHILE_SPEAKING,
    name: v.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
  }, {
    value: S.OverlayDisplayNames.NEVER,
    name: v.default.Messages.DISPLAY_OPTION_NEVER
  }],
  _ = () => [{
    value: S.OverlayDisplayUsers.ALWAYS,
    name: v.default.Messages.DISPLAY_OPTION_ALWAYS
  }, {
    value: S.OverlayDisplayUsers.ONLY_WHILE_SPEAKING,
    name: v.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
  }];

function C() {
  let e = f.default.getNotificationPositionMode(),
    t = e !== S.OverlayNotificationPositions.DISABLED,
    n = c.default.getOverlayKeybind(),
    i = c.default.getOverlayChatKeybind();
  d.default.track(S.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
    enabled: !0,
    notifications_enabled: t,
    notifications_position: t ? e : null,
    text_notifications_mode: f.default.getTextChatNotificationMode(),
    text_opacity_slider: f.default.getTextWidgetOpacity(),
    hotkey: null != n ? (0, m.toString)(n.shortcut) : null,
    text_activation_hotkey: null != i ? (0, m.toString)(i.shortcut) : null
  })
}
class A extends s.PureComponent {
  componentDidMount() {
    d.default.track(S.AnalyticEvents.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    d.default.setNotificationPositionMode(t), C()
  }
  handleChangeAvatarSizeMode(e) {
    let {
      value: t
    } = e;
    d.default.setAvatarSizeMode(t)
  }
  handleChangeDisplayNameMode(e) {
    let {
      value: t
    } = e;
    d.default.setDisplayNameMode(t)
  }
  handleChangeDisplayUserMode(e) {
    let {
      value: t
    } = e;
    d.default.setDisplayUserMode(t)
  }
  renderHeader() {
    return (0, l.jsxs)(h.default, {
      direction: h.default.Direction.VERTICAL,
      grow: 0,
      shrink: 0,
      className: y.header,
      children: [(0, l.jsxs)(h.default, {
        children: [(0, l.jsx)(r.FormTitle, {
          className: y.headerTitle,
          tag: "h1",
          children: v.default.Messages.OVERLAY_SETTINGS_TITLE
        }), (0, l.jsx)(r.ModalCloseButton, {
          className: y.headerClose,
          onClick: this.props.onClose
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = u.default.isDeveloper ? (0, l.jsx)(r.TabBar.Item, {
      id: "DEVELOPER",
      className: y.tabBarItem,
      children: "Developer"
    }) : null;
    return (0, l.jsxs)(r.TabBar, {
      selectedItem: e,
      type: "top",
      className: y.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, l.jsx)(r.TabBar.Item, {
        id: "GENERAL",
        className: y.tabBarItem,
        children: v.default.Messages.OVERLAY_SETTINGS_GENERAL_TAB
      }), (0, l.jsx)(r.TabBar.Item, {
        id: "VOICE",
        className: y.tabBarItem,
        children: v.default.Messages.OVERLAY_SETTINGS_VOICE_TAB
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
      className: y.content,
      children: e
    }, t)
  }
  renderGeneralSettings() {
    let {
      textChatNotificationMode: e,
      notificationPositionMode: t,
      shouldShowKeybindIndicators: n,
      showKeybindIndicators: i
    } = this.props, a = t !== S.OverlayNotificationPositions.DISABLED;
    return (0, l.jsxs)(s.Fragment, {
      children: [(0, l.jsx)(r.FormItem, {
        title: v.default.Messages.FORM_LABEL_NOTIFICATION_POSITION,
        className: I.marginBottom20,
        children: (0, l.jsx)(p.default, {
          position: t,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, l.jsx)(r.FormSwitch, {
        value: a && e === S.OverlayNotificationTextChatTypes.ENABLED,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !a,
        hideBorder: !0,
        children: v.default.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
      }), i && (0, l.jsx)(r.FormSwitch, {
        value: n,
        onChange: e => d.default.setShowKeybindIndicators(e),
        hideBorder: !0,
        children: v.default.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
      })]
    })
  }
  renderVoiceSettings() {
    let {
      avatarSizeMode: e,
      displayNameMode: t,
      displayUserMode: n
    } = this.props;
    return (0, l.jsxs)(s.Fragment, {
      children: [(0, l.jsx)(r.FormItem, {
        title: v.default.Messages.FORM_LABEL_AVATAR_SIZE,
        className: I.marginBottom20,
        children: (0, l.jsx)(r.RadioGroup, {
          onChange: this.handleChangeAvatarSizeMode,
          options: N(),
          value: e,
          size: r.RadioGroup.Sizes.SMALL
        })
      }), (0, l.jsx)(r.FormItem, {
        title: v.default.Messages.FORM_LABEL_DISPLAY_NAMES,
        className: I.marginBottom20,
        children: (0, l.jsx)(r.RadioGroup, {
          onChange: this.handleChangeDisplayNameMode,
          options: O(),
          value: t,
          size: r.RadioGroup.Sizes.SMALL
        })
      }), (0, l.jsx)(r.FormItem, {
        title: v.default.Messages.FORM_LABEL_DISPLAY_USERS,
        className: I.marginBottom20,
        children: (0, l.jsx)(r.RadioGroup, {
          onChange: this.handleChangeDisplayUserMode,
          options: _(),
          value: n,
          size: r.RadioGroup.Sizes.SMALL
        })
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, l.jsx)(s.Fragment, {
      children: (0, l.jsx)(r.FormItem, {
        title: "Crashes",
        className: I.marginBottom20,
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
          onChange: e => null != e && g.default.crash(e)
        })
      })
    })
  }
  render() {
    return (0, l.jsxs)(r.ModalRoot, {
      "aria-label": v.default.Messages.OVERLAY_SETTINGS_TITLE,
      transitionState: r.ModalTransitionState.ENTERED,
      children: [this.renderHeader(), this.renderBody()]
    })
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      selectedSection: "GENERAL"
    }), T(this, "handleSelectSection", e => {
      this.setState({
        selectedSection: e
      })
    }), T(this, "handleToggleTextChatNotifications", () => {
      let {
        ENABLED: e,
        DISABLED: t
      } = S.OverlayNotificationTextChatTypes, n = this.props.textChatNotificationMode === e ? t : e;
      d.default.setTextChatNotificationMode(n), C()
    })
  }
}

function x(e) {
  let {
    onClose: t
  } = e, {
    avatarSizeMode: n,
    displayNameMode: i,
    displayUserMode: a,
    notificationPositionMode: s,
    textChatNotificationMode: r,
    shouldShowKeybindIndicators: d
  } = (0, o.useStateFromStoresObject)([f.default], () => ({
    avatarSizeMode: f.default.getAvatarSizeMode(),
    displayNameMode: f.default.getDisplayNameMode(),
    displayUserMode: f.default.getDisplayUserMode(),
    notificationPositionMode: f.default.getNotificationPositionMode(),
    textChatNotificationMode: f.default.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: f.default.showKeybindIndicators
  })), {
    showKeybindIndicators: u
  } = E.default.useExperiment({
    location: "Overlay Settings"
  });
  return (0, l.jsx)(A, {
    onClose: t,
    avatarSizeMode: n,
    displayNameMode: i,
    displayUserMode: a,
    notificationPositionMode: s,
    textChatNotificationMode: r,
    shouldShowKeybindIndicators: d,
    showKeybindIndicators: u
  })
}