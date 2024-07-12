n.d(t, {
  Z: function() {
return A;
  }
}), n(47120);
var i, s, a = n(735250),
  o = n(470079),
  r = n(442837),
  l = n(481060),
  c = n(13245),
  d = n(906467),
  u = n(556296),
  h = n(237997),
  p = n(285952),
  f = n(739563),
  _ = n(998502),
  g = n(13140),
  m = n(658785),
  E = n(981631),
  Z = n(689938),
  I = n(226952),
  S = n(549856);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(s = i || (i = {})).GENERAL = 'GENERAL', s.VOICE = 'VOICE', s.DEVELOPER = 'DEVELOPER';
let v = () => [{
  value: E.ipw.LARGE,
  name: Z.Z.Messages.AVATAR_SIZE_OPTION_LARGE
},
{
  value: E.ipw.SMALL,
  name: Z.Z.Messages.AVATAR_SIZE_OPTION_SMALL
}
  ],
  x = () => [{
  value: E.wC$.ALWAYS,
  name: Z.Z.Messages.DISPLAY_OPTION_ALWAYS
},
{
  value: E.wC$.ONLY_WHILE_SPEAKING,
  name: Z.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
},
{
  value: E.wC$.NEVER,
  name: Z.Z.Messages.DISPLAY_OPTION_NEVER
}
  ],
  T = () => [{
  value: E.OYC.ALWAYS,
  name: Z.Z.Messages.DISPLAY_OPTION_ALWAYS
},
{
  value: E.OYC.ONLY_WHILE_SPEAKING,
  name: Z.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
}
  ];

function N() {
  let e = h.Z.getNotificationPositionMode(),
t = e !== E._vf.DISABLED,
n = u.Z.getOverlayKeybind(),
i = u.Z.getOverlayChatKeybind();
  c.Z.track(E.rMx.OVERLAY_SETTINGS_UPDATED, {
enabled: !0,
notifications_enabled: t,
notifications_position: t ? e : null,
text_notifications_mode: h.Z.getTextChatNotificationMode(),
text_opacity_slider: h.Z.getTextWidgetOpacity(),
hotkey: null != n ? (0, g.BB)(n.shortcut) : null,
text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null
  });
}
class O extends o.PureComponent {
  componentDidMount() {
c.Z.track(E.rMx.SETTINGS_PANE_VIEWED, {
  settings_type: 'overlay',
  destination_pane: 'OVERLAY SETTINGS',
  origin_pane: null
});
  }
  handleChangeNotificationPositionMode(e, t) {
c.Z.setNotificationPositionMode(t), N();
  }
  handleChangeAvatarSizeMode(e) {
let {
  value: t
} = e;
c.Z.setAvatarSizeMode(t);
  }
  handleChangeDisplayNameMode(e) {
let {
  value: t
} = e;
c.Z.setDisplayNameMode(t);
  }
  handleChangeDisplayUserMode(e) {
let {
  value: t
} = e;
c.Z.setDisplayUserMode(t);
  }
  renderHeader() {
return (0, a.jsxs)(p.Z, {
  direction: p.Z.Direction.VERTICAL,
  grow: 0,
  shrink: 0,
  className: I.header,
  children: [
    (0, a.jsxs)(p.Z, {
      children: [
        (0, a.jsx)(l.FormTitle, {
          className: I.headerTitle,
          tag: 'h1',
          children: Z.Z.Messages.OVERLAY_SETTINGS_TITLE
        }),
        (0, a.jsx)(l.ModalCloseButton, {
          className: I.headerClose,
          onClick: this.props.onClose
        })
      ]
    }),
    this.renderTabBar()
  ]
});
  }
  renderTabBar() {
let {
  selectedSection: e
} = this.state, t = d.Z.isDeveloper ? (0, a.jsx)(l.TabBar.Item, {
  id: 'DEVELOPER',
  className: I.tabBarItem,
  children: 'Developer'
}) : null;
return (0, a.jsxs)(l.TabBar, {
  selectedItem: e,
  type: 'top',
  className: I.__invalid_tabBar,
  onItemSelect: this.handleSelectSection,
  children: [
    (0, a.jsx)(l.TabBar.Item, {
      id: 'GENERAL',
      className: I.tabBarItem,
      children: Z.Z.Messages.OVERLAY_SETTINGS_GENERAL_TAB
    }),
    (0, a.jsx)(l.TabBar.Item, {
      id: 'VOICE',
      className: I.tabBarItem,
      children: Z.Z.Messages.OVERLAY_SETTINGS_VOICE_TAB
    }),
    t
  ]
});
  }
  renderBody() {
let e;
let {
  selectedSection: t
} = this.state;
switch (t) {
  case 'DEVELOPER':
    e = this.renderDeveloperSettings();
    break;
  case 'VOICE':
    e = this.renderVoiceSettings();
    break;
  default:
    e = this.renderGeneralSettings();
}
return (0, a.jsx)(l.ModalContent, {
  className: I.content,
  children: e
}, t);
  }
  renderGeneralSettings() {
let {
  textChatNotificationMode: e,
  notificationPositionMode: t,
  shouldShowKeybindIndicators: n,
  showKeybindIndicators: i
} = this.props, s = t !== E._vf.DISABLED;
return (0, a.jsxs)(o.Fragment, {
  children: [
    (0, a.jsx)(l.FormItem, {
      title: Z.Z.Messages.FORM_LABEL_NOTIFICATION_POSITION,
      className: S.marginBottom20,
      children: (0, a.jsx)(f.Z, {
        position: t,
        onChange: this.handleChangeNotificationPositionMode
      })
    }),
    (0, a.jsx)(l.FormSwitch, {
      value: s && e === E.Ypu.ENABLED,
      onChange: this.handleToggleTextChatNotifications,
      disabled: !s,
      hideBorder: !0,
      children: Z.Z.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
    }),
    i && (0, a.jsx)(l.FormSwitch, {
      value: n,
      onChange: e => c.Z.setShowKeybindIndicators(e),
      hideBorder: !0,
      children: Z.Z.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
    })
  ]
});
  }
  renderVoiceSettings() {
let {
  avatarSizeMode: e,
  displayNameMode: t,
  displayUserMode: n
} = this.props;
return (0, a.jsxs)(o.Fragment, {
  children: [
    (0, a.jsx)(l.FormItem, {
      title: Z.Z.Messages.FORM_LABEL_AVATAR_SIZE,
      className: S.marginBottom20,
      children: (0, a.jsx)(l.RadioGroup, {
        onChange: this.handleChangeAvatarSizeMode,
        options: v(),
        value: e,
        size: l.RadioGroup.Sizes.SMALL
      })
    }),
    (0, a.jsx)(l.FormItem, {
      title: Z.Z.Messages.FORM_LABEL_DISPLAY_NAMES,
      className: S.marginBottom20,
      children: (0, a.jsx)(l.RadioGroup, {
        onChange: this.handleChangeDisplayNameMode,
        options: x(),
        value: t,
        size: l.RadioGroup.Sizes.SMALL
      })
    }),
    (0, a.jsx)(l.FormItem, {
      title: Z.Z.Messages.FORM_LABEL_DISPLAY_USERS,
      className: S.marginBottom20,
      children: (0, a.jsx)(l.RadioGroup, {
        onChange: this.handleChangeDisplayUserMode,
        options: T(),
        value: n,
        size: l.RadioGroup.Sizes.SMALL
      })
    })
  ]
});
  }
  renderDeveloperSettings() {
return (0, a.jsx)(o.Fragment, {
  children: (0, a.jsx)(l.FormItem, {
    title: 'Crashes',
    className: S.marginBottom20,
    children: (0, a.jsx)(l.SingleSelect, {
      value: void 0,
      options: [{
          value: void 0,
          label: 'Native crash'
        },
        {
          value: 0,
          label: 'Abort()'
        },
        {
          value: 1,
          label: 'SIGSEGV()'
        },
        {
          value: 2,
          label: 'EXCEPTION_ACCESS_VIOLATION'
        },
        {
          value: 3,
          label: 'RaiseFailFastException'
        },
        {
          value: 4,
          label: 'Out of Memory'
        }
      ],
      onChange: e => null != e && _.ZP.crash(e)
    })
  })
});
  }
  render() {
return (0, a.jsxs)(l.ModalRoot, {
  'aria-label': Z.Z.Messages.OVERLAY_SETTINGS_TITLE,
  transitionState: l.ModalTransitionState.ENTERED,
  children: [
    this.renderHeader(),
    this.renderBody()
  ]
});
  }
  constructor(...e) {
super(...e), C(this, 'state', {
  selectedSection: 'GENERAL'
}), C(this, 'handleSelectSection', e => {
  this.setState({
    selectedSection: e
  });
}), C(this, 'handleToggleTextChatNotifications', () => {
  let {
    ENABLED: e,
    DISABLED: t
  } = E.Ypu, n = this.props.textChatNotificationMode === e ? t : e;
  c.Z.setTextChatNotificationMode(n), N();
});
  }
}

function A(e) {
  let {
onClose: t
  } = e, {
avatarSizeMode: n,
displayNameMode: i,
displayUserMode: s,
notificationPositionMode: o,
textChatNotificationMode: l,
shouldShowKeybindIndicators: c
  } = (0, r.cj)([h.Z], () => ({
avatarSizeMode: h.Z.getAvatarSizeMode(),
displayNameMode: h.Z.getDisplayNameMode(),
displayUserMode: h.Z.getDisplayUserMode(),
notificationPositionMode: h.Z.getNotificationPositionMode(),
textChatNotificationMode: h.Z.getTextChatNotificationMode(),
shouldShowKeybindIndicators: h.Z.showKeybindIndicators
  })), {
showKeybindIndicators: d
  } = m.Z.useExperiment({
location: 'Overlay Settings'
  });
  return (0, a.jsx)(O, {
onClose: t,
avatarSizeMode: n,
displayNameMode: i,
displayUserMode: s,
notificationPositionMode: o,
textChatNotificationMode: l,
shouldShowKeybindIndicators: c,
showKeybindIndicators: d
  });
}