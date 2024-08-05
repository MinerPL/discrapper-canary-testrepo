s.d(t, {
  Z: function() {
return ee;
  }
}), s(653041), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(392711),
  l = s.n(o),
  c = s(442837),
  d = s(481060),
  _ = s(668781),
  E = s(292556),
  u = s(92114),
  T = s(419363),
  I = s(818083),
  S = s(688465),
  N = s(487419),
  C = s(378364),
  m = s(197344),
  A = s(734934),
  g = s(223683),
  h = s(312400),
  O = s(115345),
  p = s(392888),
  R = s(921801),
  x = s(657254),
  M = s(470647),
  f = s(292959),
  D = s(9156),
  P = s(626135),
  L = s(912101),
  b = s(358085),
  Z = s(709054),
  v = s(557177),
  j = s(695346),
  B = s(675478),
  U = s(33656),
  G = s(726985),
  F = s(981631),
  y = s(468788),
  V = s(689938),
  Y = s(847508),
  w = s(549856);

function k(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}

function H(e) {
  let {
label: t,
enabled: s,
disabled: a,
onPreview: i,
onChange: r,
tooltip: o
  } = e;
  return (0, n.jsx)(d.FormSwitch, {
className: Y.soundRow,
value: s,
onChange: r,
disabled: a,
tooltipNote: o,
children: (0, n.jsxs)('div', {
  className: Y.notificationSound,
  children: [
    (0, n.jsx)('div', {
      className: Y.soundName,
      children: t
    }),
    (0, n.jsx)(d.Clickable, {
      className: Y.soundIcon,
      onClick: i,
      'aria-label': V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
      children: (0, n.jsx)(d.VoiceNormalIcon, {
        size: 'xs',
        color: 'currentColor',
        className: Y.icon,
        'aria-hidden': !0
      })
    })
  ]
})
  });
}

function W(e) {
  let {
disabledSounds: t,
disableAllSounds: s,
notifyMessagesInSelectedChannel: i
  } = e, {
allowAprilFoolsSoundpack: o
  } = x.Z.useExperiment({
location: '791c79_1'
  }, {
autoTrackExposure: !1
  }), l = m.Z.useIsRingtoneEligible();
  a.useEffect(() => {
x.Z.trackExposure({
  location: '791c79_3'
});
  }, []);
  let c = a.useRef(),
_ = (0, A.p)(),
u = a.useCallback((e, t) => {
  t.stopPropagation(), t.preventDefault(), null != c.current && c.current.stop(), c.current = v.GN(e);
}, []),
T = a.useCallback((e, s) => {
  let n = t.filter(t => t !== e);
  !s && n.push(e), e === C.Z.ringtone && P.default.track(F.rMx.EVENT_RINGTONE_TOGGLED, {
    toggled_on: s,
    sound_name: e
  }), E.default.setDisabledSounds(n);
}, [t]);
  a.useEffect(() => () => {
var e;
null === (e = c.current) || void 0 === e || e.stop();
  });
  let I = [{
  label: V.Z.Messages.SOUND_MESSAGE,
  sound: 'message1',
  focusModeDisabled: _
},
{
  label: V.Z.Messages.SOUND_DEAFEN,
  sound: 'deafen'
},
{
  label: V.Z.Messages.SOUND_UNDEAFEN,
  sound: 'undeafen'
},
{
  label: V.Z.Messages.MUTE,
  sound: 'mute'
},
{
  label: V.Z.Messages.UNMUTE,
  sound: 'unmute'
},
{
  label: V.Z.Messages.SOUND_VOICE_DISCONNECTED,
  sound: 'disconnect'
},
{
  label: V.Z.Messages.SOUND_PTT_ACTIVATE,
  sound: 'ptt_start'
},
{
  label: V.Z.Messages.SOUND_PTT_DEACTIVATE,
  sound: 'ptt_stop'
},
{
  label: V.Z.Messages.SOUND_USER_JOIN,
  sound: 'user_join'
},
{
  label: V.Z.Messages.SOUND_USER_LEAVE,
  sound: 'user_leave'
},
{
  label: V.Z.Messages.SOUND_USER_MOVED,
  sound: 'user_moved'
},
{
  label: V.Z.Messages.SOUND_OUTGOING_RING,
  sound: 'call_calling'
},
{
  label: V.Z.Messages.SOUND_INCOMING_RING,
  sound: 'call_ringing'
},
...l ? [{
  label: C.Z.getRingtoneSettingsLabel(),
  sound: C.Z.ringtone,
  disabled: t.includes('call_ringing')
}] : [],
{
  label: V.Z.Messages.SOUND_STREAM_STARTED,
  sound: 'stream_started'
},
{
  label: V.Z.Messages.SOUND_STREAM_STOPPED,
  sound: 'stream_ended'
},
{
  label: V.Z.Messages.SOUND_VIEWER_JOIN,
  sound: 'stream_user_joined'
},
{
  label: V.Z.Messages.SOUND_VIEWER_LEAVE,
  sound: 'stream_user_left'
},
{
  label: V.Z.Messages.SOUND_ACTIVITY_START,
  sound: 'activity_launch'
},
{
  label: V.Z.Messages.SOUND_ACTIVITY_END,
  sound: 'activity_end'
},
{
  label: V.Z.Messages.SOUND_ACTIVITY_USER_JOIN,
  sound: 'activity_user_join'
},
{
  label: V.Z.Messages.SOUND_ACTIVITY_USER_LEAVE,
  sound: 'activity_user_left'
},
{
  label: V.Z.Messages.SOUND_INVITED_TO_SPEAK,
  sound: 'reconnect'
}
  ];
  return (0, n.jsx)(R.F, {
setting: G.s6.NOTIFICATIONS_SOUNDS,
children: (0, n.jsxs)(d.FormSection, {
  tag: d.FormTitleTags.H1,
  title: V.Z.Messages.SOUNDS,
  children: [
    o ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(d.FormTitle, {
          className: w.marginBottom20,
          children: V.Z.Messages.SOUNDPACK_LABEL
        }),
        (0, n.jsx)(M.Z, {
          className: r()(Y.soundpackSelect, w.marginBottom40)
        })
      ]
    }) : null,
    (0, n.jsx)(d.FormSwitch, {
      note: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
      value: i,
      onChange: E.default.setNotifyMessagesInSelectedChannel,
      children: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
    }),
    (0, n.jsx)(d.FormSwitch, {
      note: V.Z.Messages.SOUND_DISABLE_ALL_NOTE,
      value: s,
      onChange: E.default.toggleDisableAllSounds,
      children: V.Z.Messages.SOUND_DISABLE_ALL
    }),
    I.map(e => {
      let {
        label: a,
        sound: i,
        disabled: r,
        focusModeDisabled: o
      } = e;
      return (0, n.jsx)(H, {
        label: a,
        disabled: s || !0 === r || !0 === o,
        tooltip: o ? V.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
        onChange: e => T(i, e),
        onPreview: e => u(i, e),
        enabled: !s && !t.includes(i) && !0 !== o
      }, i);
    })
  ]
})
  });
}

function K() {
  let e = (0, c.e7)([N.Z], () => N.Z.getGuildAlertSettings()),
[t, s] = a.useState(null),
i = Z.default.keys(e).map(t => {
  let s = e[t];
  return {
    label: s.guildName,
    value: s.guildId
  };
});
  return 0 === Object.keys(e).length ? null : (0, n.jsxs)(R.F, {
setting: G.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
children: [
  (0, n.jsxs)(d.Heading, {
    variant: 'heading-lg/semibold',
    className: r()(Y.titleWithBeta, w.marginBottom20),
    children: [
      V.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER,
      (0, n.jsx)(S.Z, {})
    ]
  }),
  (0, n.jsx)(d.FormText, {
    type: d.FormTextTypes.DESCRIPTION,
    className: w.marginBottom20,
    children: V.Z.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
  }),
  (0, n.jsxs)(d.FormItem, {
    title: V.Z.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
    children: [
      (0, n.jsx)(d.SingleSelect, {
        className: null != t ? w.marginBottom20 : w.marginBottom40,
        value: t,
        onChange: e => {
          s(e);
        },
        options: i
      }),
      null != t ? (0, n.jsxs)('div', {
        className: w.marginTop20,
        children: [
          (0, n.jsxs)(R.F, {
            setting: G.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
            children: [
              (0, n.jsx)(d.FormSwitch, {
                className: r()(w.marginBottom20),
                note: V.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
                value: !e[t].disableRaidAlertNag,
                onChange: () => {
                  (0, B.PS)(t, e => {
                    e.disableRaidAlertNag = !e.disableRaidAlertNag;
                  }, B.fy.INFREQUENT_USER_ACTION);
                },
                hideBorder: !0,
                children: V.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
              }),
              (0, n.jsx)(d.FormDivider, {
                className: r()(w.marginTop20, w.marginBottom40)
              })
            ]
          }),
          (0, n.jsxs)(R.F, {
            setting: G.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
            children: [
              (0, n.jsx)(d.FormSwitch, {
                className: w.marginBottom20,
                note: V.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
                value: !e[t].disableRaidAlertPush,
                onChange: () => {
                  (0, B.PS)(t, e => {
                    e.disableRaidAlertPush = !e.disableRaidAlertPush;
                  }, B.fy.INFREQUENT_USER_ACTION);
                },
                hideBorder: !0,
                children: V.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
              }),
              (0, n.jsx)(d.FormDivider, {
                className: r()(w.marginTop20, w.marginBottom40)
              })
            ]
          })
        ]
      }) : null,
      null != t ? null : (0, n.jsx)(d.FormDivider, {
        className: r()(w.marginTop20, w.marginBottom40)
      })
    ]
  })
]
  });
}
class z extends a.PureComponent {
  handleDesktopChange(e) {
let t = e ? F.qrD.ALL : F.qrD.NEVER;
if (t !== F.qrD.NEVER) {
  var s;
  s = 'UserSettingsModal', L.Z.requestPermission(e => {
    let t = e ? F.$Ab.ENABLED : F.$Ab.BLOCKED;
    E.default.setPermissionsState(t, s);
  });
} else
  E.default.setDesktopType(t);
  }
  handleTTSChange(e) {
let t = e.value;
E.default.setTTSType(t);
  }
  render() {
let {
  desktopType: e,
  afkTimeout: t,
  disableUnreadBadge: s,
  taskbarFlash: a,
  disabledSounds: i,
  disableAllSounds: o,
  notifyMessagesInSelectedChannel: c,
  focusMode: _
} = this.props, E = b.isPlatformEmbedded && (0, b.isWindows)(), u = l().range(1, 11).map(e => ({
  value: 60 * e,
  label: V.Z.Messages.DURATION_MINUTES.format({
    minutes: e
  })
}));
return (0, n.jsxs)(d.FormSection, {
  tag: d.FormTitleTags.H1,
  title: V.Z.Messages.NOTIFICATIONS,
  children: [
    (0, n.jsx)(R.F, {
      setting: G.s6.NOTIFICATIONS_ENABLE_DESKTOP,
      children: (0, n.jsx)(d.FormSwitch, {
        className: w.marginBottom20,
        value: e !== F.qrD.NEVER && !_,
        onChange: this.handleDesktopChange,
        note: V.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
        disabled: _,
        tooltipNote: _ ? V.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
        children: V.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE
      })
    }),
    (0, n.jsx)(X, {}),
    (0, n.jsx)(R.F, {
      setting: G.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
      children: (0, n.jsx)(d.FormSwitch, {
        className: E ? w.marginBottom20 : w.marginBottom40,
        value: !s,
        note: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
        onChange: this.handleToggleShowUnreadBadge,
        children: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
      })
    }),
    (0, n.jsx)(R.F, {
      setting: G.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
      children: (0, n.jsx)(d.FormSwitch, {
        className: w.marginBottom40,
        value: a,
        note: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
        onChange: this.handleToggleShowFlash,
        children: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
      })
    }),
    (0, n.jsx)(q, {}),
    (0, n.jsx)(R.F, {
      setting: G.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
      children: (0, n.jsxs)(d.FormItem, {
        title: V.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        children: [
          (0, n.jsx)(d.SingleSelect, {
            value: t,
            onChange: j.CM.updateSetting,
            options: u
          }),
          (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: w.marginTop8,
            children: V.Z.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
          }),
          (0, n.jsx)(d.FormDivider, {
            className: r()(w.marginTop40, w.marginBottom40)
          })
        ]
      })
    }),
    this.renderTTS(),
    (0, n.jsx)(K, {}),
    (0, n.jsx)(d.FormItem, {
      children: (0, n.jsx)(W, {
        disabledSounds: i,
        disableAllSounds: o,
        notifyMessagesInSelectedChannel: c
      })
    }),
    (0, n.jsx)(U.Z, {})
  ]
});
  }
  constructor(...e) {
super(...e), k(this, 'handleToggleShowUnreadBadge', () => {
  E.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
}), k(this, 'handleToggleShowFlash', () => {
  E.default.setTaskbarFlash(!this.props.taskbarFlash);
}), k(this, 'renderTTS', () => {
  if (!T.Zh)
    return null;
  let e = [{
      name: V.Z.Messages.TTS_ALLS,
      value: F.PrB.ALL_CHANNELS
    },
    {
      name: V.Z.Messages.TTS_CURRENT,
      value: F.PrB.SELECTED_CHANNEL
    },
    {
      name: V.Z.Messages.TTS_NEVER,
      value: F.PrB.NEVER
    }
  ];
  return (0, n.jsxs)(R.F, {
    setting: G.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
    children: [
      (0, n.jsxs)(d.FormItem, {
        title: V.Z.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
        children: [
          (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: w.marginBottom8,
            children: V.Z.Messages.FORM_DESCRIPTION_TTS
          }),
          (0, n.jsx)(d.RadioGroup, {
            options: e,
            onChange: this.handleTTSChange,
            value: this.props.ttsType
          })
        ]
      }),
      (0, n.jsx)(d.FormDivider, {
        className: r()(w.marginTop40, w.marginBottom40)
      })
    ]
  });
});
  }
}
let Q = (0, I.B)({
  kind: 'user',
  id: '2024-01_mention_on_all_messages',
  label: 'Mention on all messages',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Increment mention count when receiving a message in a channel set to all messages',
config: {
  enabled: !0
}
  }]
});

function X() {
  let e = Q.useExperiment({
  location: 'settings'
}, {
  autoTrackExposure: !1
}).enabled,
t = (0, c.e7)([D.ZP], () => D.ZP.mentionOnAllMessages);
  return e ? (0, n.jsx)(R.F, {
setting: G.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
children: (0, n.jsx)(d.FormSwitch, {
  className: w.marginBottom20,
  value: t,
  onChange: e => {
    u.Z.setAccountFlag(y.c.MENTION_ON_ALL_MESSAGES, e);
  },
  note: 'Increments the mention count when receiving a message in a channel set to \'All Messages\'',
  children: 'Mention on all messages?'
})
  }) : null;
}

function q() {
  let e = h.xT.useExperiment({
  location: 'UserSettingsNotifications'
}, {
  autoTrackExposure: !1
}).enabled,
{
  manuallyOpen: t
} = h.fs.useExperiment({
  location: 'UserSettingsNotifications'
}, {
  autoTrackExposure: !1
}),
s = (0, c.e7)([D.ZP], () => D.ZP.useNewNotifications),
[i, o] = a.useState(!1);
  return e && (s || t) ? (0, n.jsxs)(n.Fragment, {
children: [
  s ? (0, n.jsx)(R.F, {
    setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
    children: (0, n.jsx)(d.FormSwitch, {
      className: w.marginBottom40,
      style: {
        marginTop: -20
      },
      value: s,
      disabled: i || !s,
      note: V.Z.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
      onChange: () => J(o),
      children: V.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
    })
  }) : t ? (0, n.jsx)(R.F, {
    setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
    children: (0, n.jsx)(d.FormSwitch, {
      className: w.marginBottom40,
      value: s,
      disabled: i || s,
      note: 'Turns on the new notification system',
      onChange: () => (0, p.R)(!0),
      children: V.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
    })
  }) : null,
  (0, n.jsxs)(R.F, {
    setting: G.s6.NOTIFICATIONS_NEW_SETTINGS,
    children: [
      (0, n.jsx)(d.FormItem, {
        title: 'New Notification Settings (Advanced, Staff Only)',
        children: (0, n.jsxs)('div', {
          style: {
            display: 'flex',
            gap: 16
          },
          children: [
            (0, n.jsx)(R.F, {
              setting: G.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
              children: (0, n.jsx)(d.Button, {
                onClick: g.KP,
                children: 'Restore most recent snapshot'
              })
            }),
            (0, n.jsx)(R.F, {
              setting: G.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
              children: (0, n.jsx)(d.Button, {
                onClick: () => {
                  (0, p.R)(!0);
                },
                children: 'Launch Migration'
              })
            }),
            (0, n.jsx)(R.F, {
              setting: G.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
              children: (0, n.jsx)(d.FormSwitch, {
                hideBorder: !0,
                value: s,
                onChange: e => {
                  u.Z.setAccountFlag(y.c.USE_NEW_NOTIFICATIONS, e);
                },
                children: 'Toggle new system on/off'
              })
            })
          ]
        })
      }),
      (0, n.jsx)(d.FormDivider, {
        className: r()(w.marginTop40, w.marginBottom40)
      })
    ]
  })
]
  }) : null;
}
async function J(e) {
  e(!0);
  let t = await (0, g.Tn)();
  0 === t.length ? await (0, O.oL)() : _.Z.show({
title: V.Z.Messages.CONFIRM,
body: V.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({
  date: new Date(t[t.length - 1].recorded_at)
}),
cancelText: V.Z.Messages.CANCEL,
confirmText: V.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
onConfirm: O.oL
  }), e(!1);
}

function $(e) {
  let t = (0, A.p)();
  return (0, n.jsx)(z, {
...e,
focusMode: t
  });
}

function ee() {
  let e = (0, c.cj)([f.Z], () => ({
disableUnreadBadge: f.Z.getDisableUnreadBadge(),
taskbarFlash: f.Z.taskbarFlash,
disabledSounds: f.Z.getDisabledSounds(),
disableAllSounds: f.Z.getDisableAllSounds(),
desktopType: f.Z.getDesktopType(),
ttsType: f.Z.getTTSType(),
notifyMessagesInSelectedChannel: f.Z.getNotifyMessagesInSelectedChannel()
  }));
  return (0, n.jsx)($, {
...e,
afkTimeout: j.CM.useSetting()
  });
}