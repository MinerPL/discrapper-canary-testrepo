"use strict";
s.r(t), s.d(t, {
  default: function() {
    return et
  }
}), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  o = s.n(r),
  d = s("446674"),
  u = s("77078"),
  c = s("404118"),
  S = s("193990"),
  E = s("519705"),
  f = s("533280"),
  T = s("408166"),
  m = s("862205"),
  _ = s("298878"),
  g = s("54346"),
  h = s("684581"),
  I = s("488284"),
  N = s("649649"),
  p = s("640497"),
  C = s("128887"),
  A = s("699668"),
  O = s("748021"),
  x = s("168067"),
  R = s("820974"),
  M = s("385649"),
  v = s("101125"),
  D = s("282109"),
  L = s("368121"),
  P = s("599110"),
  j = s("34676"),
  b = s("566673"),
  U = s("773336"),
  B = s("709681"),
  y = s("845579"),
  F = s("872173"),
  G = s("77809"),
  k = s("49111"),
  H = s("76618"),
  w = s("782340"),
  V = s("9162"),
  Y = s("926622");

function W(e) {
  let {
    label: t,
    enabled: s,
    disabled: n,
    onPreview: l,
    onChange: i,
    tooltip: r
  } = e;
  return (0, a.jsx)(u.FormSwitch, {
    className: V.soundRow,
    value: s,
    onChange: i,
    disabled: n,
    tooltipNote: r,
    children: (0, a.jsxs)("div", {
      className: V.notificationSound,
      children: [(0, a.jsx)("div", {
        className: V.soundName,
        children: t
      }), (0, a.jsx)(u.Clickable, {
        className: V.soundIcon,
        onClick: l,
        "aria-label": w.default.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
        children: (0, a.jsx)(L.default, {
          width: 16,
          height: 16,
          className: V.icon,
          "aria-hidden": !0
        })
      })]
    })
  })
}

function K(e) {
  let {
    disabledSounds: t,
    disableAllSounds: s,
    notifyMessagesInSelectedChannel: l
  } = e, {
    allowAprilFoolsSoundpack: r
  } = x.default.useExperiment({
    location: "791c79_1"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: o
  } = T.ActivitiesSoundsExperiment.useExperiment({
    location: "791c79_2"
  }, {
    autoTrackExposure: !1
  }), d = I.default.useIsRingtoneEligible();
  n.useEffect(() => {
    x.default.trackExposure({
      location: "791c79_3"
    })
  }, []);
  let c = n.useRef(),
    E = y.QuietMode.useSetting(),
    f = n.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), null != c.current && c.current.stop(), c.current = B.playSound(e)
    }, []),
    m = n.useCallback((e, s) => {
      let a = t.filter(t => t !== e);
      !s && a.push(e), e === h.default.ringtone && P.default.track(k.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
        toggled_on: s,
        sound_name: e
      }), S.default.setDisabledSounds(a)
    }, [t]);
  n.useEffect(() => () => {
    var e;
    null === (e = c.current) || void 0 === e || e.stop()
  });
  let _ = [{
    label: w.default.Messages.SOUND_MESSAGE,
    sound: "message1",
    quietModeDisabled: E
  }, {
    label: w.default.Messages.SOUND_DEAFEN,
    sound: "deafen"
  }, {
    label: w.default.Messages.SOUND_UNDEAFEN,
    sound: "undeafen"
  }, {
    label: w.default.Messages.MUTE,
    sound: "mute"
  }, {
    label: w.default.Messages.UNMUTE,
    sound: "unmute"
  }, {
    label: w.default.Messages.SOUND_VOICE_DISCONNECTED,
    sound: "disconnect"
  }, {
    label: w.default.Messages.SOUND_PTT_ACTIVATE,
    sound: "ptt_start"
  }, {
    label: w.default.Messages.SOUND_PTT_DEACTIVATE,
    sound: "ptt_stop"
  }, {
    label: w.default.Messages.SOUND_USER_JOIN,
    sound: "user_join"
  }, {
    label: w.default.Messages.SOUND_USER_LEAVE,
    sound: "user_leave"
  }, {
    label: w.default.Messages.SOUND_USER_MOVED,
    sound: "user_moved"
  }, {
    label: w.default.Messages.SOUND_OUTGOING_RING,
    sound: "call_calling"
  }, {
    label: w.default.Messages.SOUND_INCOMING_RING,
    sound: "call_ringing"
  }, ...d ? [{
    label: h.default.getRingtoneSettingsLabel(),
    sound: h.default.ringtone,
    disabled: t.includes("call_ringing")
  }] : [], {
    label: w.default.Messages.SOUND_STREAM_STARTED,
    sound: "stream_started"
  }, {
    label: w.default.Messages.SOUND_STREAM_STOPPED,
    sound: "stream_ended"
  }, {
    label: w.default.Messages.SOUND_VIEWER_JOIN,
    sound: "stream_user_joined"
  }, {
    label: w.default.Messages.SOUND_VIEWER_LEAVE,
    sound: "stream_user_left"
  }, ...o ? [{
    label: w.default.Messages.SOUND_ACTIVITY_START,
    sound: "activity_launch"
  }, {
    label: w.default.Messages.SOUND_ACTIVITY_END,
    sound: "activity_end"
  }, {
    label: w.default.Messages.SOUND_ACTIVITY_USER_JOIN,
    sound: "activity_user_join"
  }, {
    label: w.default.Messages.SOUND_ACTIVITY_USER_LEAVE,
    sound: "activity_user_left"
  }] : [], {
    label: w.default.Messages.SOUND_INVITED_TO_SPEAK,
    sound: "reconnect"
  }];
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: w.default.Messages.SOUNDS,
    children: [r ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.FormTitle, {
        className: Y.marginBottom20,
        children: w.default.Messages.SOUNDPACK_LABEL
      }), (0, a.jsx)(R.default, {
        className: i(V.soundpackSelect, Y.marginBottom40)
      })]
    }) : null, (0, a.jsx)(u.FormSwitch, {
      note: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
      value: l,
      onChange: S.default.setNotifyMessagesInSelectedChannel,
      children: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
    }), (0, a.jsx)(u.FormSwitch, {
      note: w.default.Messages.SOUND_DISABLE_ALL_NOTE,
      value: s,
      onChange: S.default.toggleDisableAllSounds,
      children: w.default.Messages.SOUND_DISABLE_ALL
    }), _.map(e => {
      let {
        label: n,
        sound: l,
        disabled: i,
        quietModeDisabled: r
      } = e;
      return (0, a.jsx)(W, {
        label: n,
        disabled: s || !0 === i || !0 === r,
        tooltip: r ? w.default.Messages.QUIET_MODE_DISABLED_BY : void 0,
        onChange: e => m(l, e),
        onPreview: e => f(l, e),
        enabled: !s && !t.includes(l) && !0 !== r
      }, l)
    })]
  })
}

function z() {
  let e = (0, d.useStateFromStores)([g.default], () => g.default.getGuildAlertSettings()),
    [t, s] = n.useState(null),
    l = Object.keys(e).map(t => {
      let s = e[t];
      return {
        label: s.guildName,
        value: s.guildId
      }
    });
  return 0 === Object.keys(e).length ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.Heading, {
      variant: "heading-lg/semibold",
      className: i(V.titleWithBeta, Y.marginBottom20),
      children: [w.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, a.jsx)(_.default, {})]
    }), (0, a.jsx)(u.FormText, {
      type: u.FormTextTypes.DESCRIPTION,
      className: Y.marginBottom20,
      children: w.default.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
    }), (0, a.jsxs)(u.FormItem, {
      title: w.default.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
      children: [(0, a.jsx)(u.SingleSelect, {
        value: t,
        onChange: e => {
          s(e)
        },
        options: l
      }), null != t ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.FormSwitch, {
          className: i(Y.marginBottom20, Y.marginTop20),
          note: w.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
          value: !e[t].disableRaidAlertNag,
          onChange: () => {
            (0, F.updateUserGuildSettings)(t, e => {
              e.disableRaidAlertNag = !e.disableRaidAlertNag
            }, F.UserSettingsDelay.INFREQUENT_USER_ACTION)
          },
          children: w.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
        }), (0, a.jsx)(u.FormSwitch, {
          className: Y.marginBottom20,
          note: w.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
          value: !e[t].disableRaidAlertPush,
          onChange: () => {
            (0, F.updateUserGuildSettings)(t, e => {
              e.disableRaidAlertPush = !e.disableRaidAlertPush
            }, F.UserSettingsDelay.INFREQUENT_USER_ACTION)
          },
          hideBorder: !0,
          children: w.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
        })]
      }) : null]
    }), (0, a.jsx)(u.FormDivider, {
      className: i(null != t ? Y.marginTop20 : Y.marginTop40, Y.marginBottom40)
    })]
  })
}
class Q extends n.PureComponent {
  handleDesktopChange(e) {
    let t = e ? k.DesktopNotificationTypes.ALL : k.DesktopNotificationTypes.NEVER;
    if (t !== k.DesktopNotificationTypes.NEVER) {
      var s;
      s = "UserSettingsModal", b.default.requestPermission(e => {
        let t = e ? k.NotificationPermissionTypes.ENABLED : k.NotificationPermissionTypes.BLOCKED;
        S.default.setPermissionsState(t, s)
      })
    } else S.default.setDesktopType(t)
  }
  handleTTSChange(e) {
    let t = e.value;
    S.default.setTTSType(t)
  }
  render() {
    let {
      desktopType: e,
      afkTimeout: t,
      disableUnreadBadge: s,
      taskbarFlash: n,
      disabledSounds: l,
      disableAllSounds: r,
      notifyMessagesInSelectedChannel: d,
      quietMode: c
    } = this.props, S = U.isPlatformEmbedded && (0, U.isWindows)(), E = o.range(1, 11).map(e => ({
      value: 60 * e,
      label: w.default.Messages.DURATION_MINUTES.format({
        minutes: e
      })
    }));
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: w.default.Messages.NOTIFICATIONS,
      children: [(0, a.jsx)(X, {}), (0, a.jsx)(u.FormSwitch, {
        className: Y.marginBottom20,
        value: e !== k.DesktopNotificationTypes.NEVER && !c,
        onChange: this.handleDesktopChange,
        note: w.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
        disabled: c,
        tooltipNote: c ? w.default.Messages.QUIET_MODE_DISABLED_BY : void 0,
        children: w.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE
      }), (0, a.jsx)(Z, {}), (0, a.jsx)(u.FormSwitch, {
        className: S ? Y.marginBottom20 : Y.marginBottom40,
        value: !s,
        note: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
        onChange: this.handleToggleShowUnreadBadge,
        children: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
      }), S ? (0, a.jsx)(u.FormSwitch, {
        className: Y.marginBottom40,
        value: n,
        note: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
        onChange: this.handleToggleShowFlash,
        children: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
      }) : null, (0, a.jsx)(J, {}), (0, a.jsxs)(u.FormItem, {
        title: w.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        children: [(0, a.jsx)(u.SingleSelect, {
          value: t,
          onChange: y.AfkTimeout.updateSetting,
          options: E
        }), (0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: Y.marginTop8,
          children: w.default.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
        }), (0, a.jsx)(u.FormDivider, {
          className: i(Y.marginTop40, Y.marginBottom40)
        })]
      }), this.renderTTS(), (0, a.jsx)(u.FormDivider, {
        className: i(Y.marginTop40, Y.marginBottom40)
      }), (0, a.jsx)(z, {}), (0, a.jsx)(u.FormItem, {
        children: (0, a.jsx)(K, {
          disabledSounds: l,
          disableAllSounds: r,
          notifyMessagesInSelectedChannel: d
        })
      }), (0, a.jsx)(G.default, {})]
    })
  }
  constructor(...e) {
    super(...e), this.handleToggleShowUnreadBadge = () => {
      S.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }, this.handleToggleShowFlash = () => {
      S.default.setTaskbarFlash(!this.props.taskbarFlash)
    }, this.renderTTS = () => {
      if (!f.supported) return null;
      let e = [{
        name: w.default.Messages.TTS_ALLS,
        value: k.TTSNotificationTypes.ALL_CHANNELS
      }, {
        name: w.default.Messages.TTS_CURRENT,
        value: k.TTSNotificationTypes.SELECTED_CHANNEL
      }, {
        name: w.default.Messages.TTS_NEVER,
        value: k.TTSNotificationTypes.NEVER
      }];
      return (0, a.jsxs)(u.FormItem, {
        title: w.default.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
        children: [(0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: Y.marginBottom8,
          children: w.default.Messages.FORM_DESCRIPTION_TTS
        }), (0, a.jsx)(u.RadioGroup, {
          options: e,
          onChange: this.handleTTSChange,
          value: this.props.ttsType
        })]
      })
    }
  }
}
let q = (0, m.createExperiment)({
  kind: "user",
  id: "2024-01_mention_on_all_messages",
  label: "Mention on all messages",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Increment mention count when receiving a message in a channel set to all messages",
    config: {
      enabled: !0
    }
  }]
});

function Z() {
  let e = q.useExperiment({
      location: "settings"
    }, {
      autoTrackExposure: !1
    }).enabled,
    t = (0, d.useStateFromStores)([D.default], () => D.default.mentionOnAllMessages);
  return e ? (0, a.jsx)(u.FormSwitch, {
    className: Y.marginBottom20,
    value: t,
    onChange: e => {
      E.default.setAccountFlag(H.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES, e)
    },
    note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
    children: "Mention on all messages?"
  }) : null
}

function X() {
  let e = C.QuietModeExperiment.useExperiment({
      location: "settings"
    }).allowQuietMode,
    t = y.QuietMode.useSetting(),
    s = async () => {
      await y.QuietMode.updateSetting(!t), (0, j.trackAccountNotificationSettingUpdated)({
        quietMode: !t
      }, {
        quietMode: t
      }), v.default.getStatus() === k.StatusTypes.DND && !t && c.default.show({
        title: w.default.Messages.QUIET_MODE_WHILE_DND_UPSELL_TITLE,
        body: w.default.Messages.QUIET_MODE_WHILE_DND_UPSELL_BODY,
        cancelText: w.default.Messages.NO_THANKS,
        confirmText: w.default.Messages.OKAY,
        onConfirm: () => {
          y.StatusSetting.updateSetting(k.StatusTypes.ONLINE)
        }
      })
    };
  return e ? (0, a.jsx)(u.FormSwitch, {
    className: Y.marginBottom20,
    value: t,
    onChange: s,
    note: w.default.Messages.QUIET_MODE_SETTINGS_DESCRIPTION,
    children: w.default.Messages.QUIET_MODE_SETTINGS_LABEL
  }) : null
}

function J() {
  let e = p.NotificationsExperiment.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }).enabled,
    {
      manuallyOpen: t
    } = p.UnreadsEntryPointExperiment.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }),
    s = (0, d.useStateFromStores)([D.default], () => D.default.useNewNotifications),
    [l, i] = n.useState(!1);
  return e && (s || t) ? (0, a.jsxs)(a.Fragment, {
    children: [s ? (0, a.jsx)(u.FormSwitch, {
      className: Y.marginBottom40,
      style: {
        marginTop: -20
      },
      value: s,
      disabled: l || !s,
      note: w.default.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
      onChange: () => $(i),
      children: w.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
    }) : t ? (0, a.jsx)(u.FormSwitch, {
      className: Y.marginBottom40,
      style: {
        marginTop: -20
      },
      value: s,
      disabled: l || s,
      note: "Turns on the new notification system",
      onChange: () => (0, O.openMigrationModal)(!0),
      children: w.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
    }) : null, null]
  }) : null
}
async function $(e) {
  e(!0);
  let t = await (0, N.listSnapshots)();
  0 === t.length ? await (0, A.revertToOldSystem)() : c.default.show({
    title: w.default.Messages.CONFIRM,
    body: w.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: w.default.Messages.CANCEL,
    confirmText: w.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
    onConfirm: A.revertToOldSystem
  }), e(!1)
}

function ee(e) {
  let t = y.QuietMode.useSetting();
  return (0, a.jsx)(Q, {
    ...e,
    quietMode: t
  })
}

function et() {
  let e = (0, d.useStateFromStoresObject)([M.default], () => ({
    disableUnreadBadge: M.default.getDisableUnreadBadge(),
    taskbarFlash: M.default.taskbarFlash,
    disabledSounds: M.default.getDisabledSounds(),
    disableAllSounds: M.default.getDisableAllSounds(),
    desktopType: M.default.getDesktopType(),
    ttsType: M.default.getTTSType(),
    notifyMessagesInSelectedChannel: M.default.getNotifyMessagesInSelectedChannel()
  }));
  return (0, a.jsx)(ee, {
    ...e,
    afkTimeout: y.AfkTimeout.useSetting()
  })
}