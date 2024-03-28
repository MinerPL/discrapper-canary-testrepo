"use strict";
s.r(t), s.d(t, {
  default: function() {
    return $
  }
}), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("668781"),
  S = s("292556"),
  E = s("92114"),
  T = s("419363"),
  _ = s("818083"),
  f = s("688465"),
  m = s("487419"),
  g = s("378364"),
  h = s("197344"),
  N = s("734934"),
  I = s("223683"),
  p = s("312400"),
  C = s("115345"),
  A = s("392888"),
  O = s("657254"),
  x = s("470647"),
  R = s("292959"),
  M = s("9156"),
  v = s("632184"),
  D = s("626135"),
  L = s("912101"),
  P = s("358085"),
  j = s("709054"),
  b = s("557177"),
  U = s("695346"),
  y = s("675478"),
  B = s("33656"),
  F = s("981631"),
  G = s("468788"),
  k = s("689938"),
  H = s("993510"),
  w = s("794711");

function V(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function Y(e) {
  let {
    label: t,
    enabled: s,
    disabled: n,
    onPreview: l,
    onChange: i,
    tooltip: r
  } = e;
  return (0, a.jsx)(u.FormSwitch, {
    className: H.soundRow,
    value: s,
    onChange: i,
    disabled: n,
    tooltipNote: r,
    children: (0, a.jsxs)("div", {
      className: H.notificationSound,
      children: [(0, a.jsx)("div", {
        className: H.soundName,
        children: t
      }), (0, a.jsx)(u.Clickable, {
        className: H.soundIcon,
        onClick: l,
        "aria-label": k.default.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
        children: (0, a.jsx)(v.default, {
          width: 16,
          height: 16,
          className: H.icon,
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
  } = O.default.useExperiment({
    location: "791c79_1"
  }, {
    autoTrackExposure: !1
  }), o = h.default.useIsRingtoneEligible();
  n.useEffect(() => {
    O.default.trackExposure({
      location: "791c79_3"
    })
  }, []);
  let d = n.useRef(),
    c = (0, N.useFocusModeEnabled)(),
    E = n.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), null != d.current && d.current.stop(), d.current = b.playSound(e)
    }, []),
    T = n.useCallback((e, s) => {
      let a = t.filter(t => t !== e);
      !s && a.push(e), e === g.default.ringtone && D.default.track(F.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
        toggled_on: s,
        sound_name: e
      }), S.default.setDisabledSounds(a)
    }, [t]);
  n.useEffect(() => () => {
    var e;
    null === (e = d.current) || void 0 === e || e.stop()
  });
  let _ = [{
    label: k.default.Messages.SOUND_MESSAGE,
    sound: "message1",
    focusModeDisabled: c
  }, {
    label: k.default.Messages.SOUND_DEAFEN,
    sound: "deafen"
  }, {
    label: k.default.Messages.SOUND_UNDEAFEN,
    sound: "undeafen"
  }, {
    label: k.default.Messages.MUTE,
    sound: "mute"
  }, {
    label: k.default.Messages.UNMUTE,
    sound: "unmute"
  }, {
    label: k.default.Messages.SOUND_VOICE_DISCONNECTED,
    sound: "disconnect"
  }, {
    label: k.default.Messages.SOUND_PTT_ACTIVATE,
    sound: "ptt_start"
  }, {
    label: k.default.Messages.SOUND_PTT_DEACTIVATE,
    sound: "ptt_stop"
  }, {
    label: k.default.Messages.SOUND_USER_JOIN,
    sound: "user_join"
  }, {
    label: k.default.Messages.SOUND_USER_LEAVE,
    sound: "user_leave"
  }, {
    label: k.default.Messages.SOUND_USER_MOVED,
    sound: "user_moved"
  }, {
    label: k.default.Messages.SOUND_OUTGOING_RING,
    sound: "call_calling"
  }, {
    label: k.default.Messages.SOUND_INCOMING_RING,
    sound: "call_ringing"
  }, ...o ? [{
    label: g.default.getRingtoneSettingsLabel(),
    sound: g.default.ringtone,
    disabled: t.includes("call_ringing")
  }] : [], {
    label: k.default.Messages.SOUND_STREAM_STARTED,
    sound: "stream_started"
  }, {
    label: k.default.Messages.SOUND_STREAM_STOPPED,
    sound: "stream_ended"
  }, {
    label: k.default.Messages.SOUND_VIEWER_JOIN,
    sound: "stream_user_joined"
  }, {
    label: k.default.Messages.SOUND_VIEWER_LEAVE,
    sound: "stream_user_left"
  }, {
    label: k.default.Messages.SOUND_ACTIVITY_START,
    sound: "activity_launch"
  }, {
    label: k.default.Messages.SOUND_ACTIVITY_END,
    sound: "activity_end"
  }, {
    label: k.default.Messages.SOUND_ACTIVITY_USER_JOIN,
    sound: "activity_user_join"
  }, {
    label: k.default.Messages.SOUND_ACTIVITY_USER_LEAVE,
    sound: "activity_user_left"
  }, {
    label: k.default.Messages.SOUND_INVITED_TO_SPEAK,
    sound: "reconnect"
  }];
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: k.default.Messages.SOUNDS,
    children: [r ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.FormTitle, {
        className: w.marginBottom20,
        children: k.default.Messages.SOUNDPACK_LABEL
      }), (0, a.jsx)(x.default, {
        className: i()(H.soundpackSelect, w.marginBottom40)
      })]
    }) : null, (0, a.jsx)(u.FormSwitch, {
      note: k.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
      value: l,
      onChange: S.default.setNotifyMessagesInSelectedChannel,
      children: k.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
    }), (0, a.jsx)(u.FormSwitch, {
      note: k.default.Messages.SOUND_DISABLE_ALL_NOTE,
      value: s,
      onChange: S.default.toggleDisableAllSounds,
      children: k.default.Messages.SOUND_DISABLE_ALL
    }), _.map(e => {
      let {
        label: n,
        sound: l,
        disabled: i,
        focusModeDisabled: r
      } = e;
      return (0, a.jsx)(Y, {
        label: n,
        disabled: s || !0 === i || !0 === r,
        tooltip: r ? k.default.Messages.QUIET_MODE_DISABLED_BY : void 0,
        onChange: e => T(l, e),
        onPreview: e => E(l, e),
        enabled: !s && !t.includes(l) && !0 !== r
      }, l)
    })]
  })
}

function W() {
  let e = (0, d.useStateFromStores)([m.default], () => m.default.getGuildAlertSettings()),
    [t, s] = n.useState(null),
    l = j.default.keys(e).map(t => {
      let s = e[t];
      return {
        label: s.guildName,
        value: s.guildId
      }
    });
  return 0 === Object.keys(e).length ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.Heading, {
      variant: "heading-lg/semibold",
      className: i()(H.titleWithBeta, w.marginBottom20),
      children: [k.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, a.jsx)(f.default, {})]
    }), (0, a.jsx)(u.FormText, {
      type: u.FormTextTypes.DESCRIPTION,
      className: w.marginBottom20,
      children: k.default.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
    }), (0, a.jsxs)(u.FormItem, {
      title: k.default.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
      children: [(0, a.jsx)(u.SingleSelect, {
        value: t,
        onChange: e => {
          s(e)
        },
        options: l
      }), null != t ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.FormSwitch, {
          className: i()(w.marginBottom20, w.marginTop20),
          note: k.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
          value: !e[t].disableRaidAlertNag,
          onChange: () => {
            (0, y.updateUserGuildSettings)(t, e => {
              e.disableRaidAlertNag = !e.disableRaidAlertNag
            }, y.UserSettingsDelay.INFREQUENT_USER_ACTION)
          },
          children: k.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
        }), (0, a.jsx)(u.FormSwitch, {
          className: w.marginBottom20,
          note: k.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
          value: !e[t].disableRaidAlertPush,
          onChange: () => {
            (0, y.updateUserGuildSettings)(t, e => {
              e.disableRaidAlertPush = !e.disableRaidAlertPush
            }, y.UserSettingsDelay.INFREQUENT_USER_ACTION)
          },
          hideBorder: !0,
          children: k.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
        })]
      }) : null]
    }), (0, a.jsx)(u.FormDivider, {
      className: i()(null != t ? w.marginTop20 : w.marginTop40, w.marginBottom40)
    })]
  })
}
class z extends n.PureComponent {
  handleDesktopChange(e) {
    let t = e ? F.DesktopNotificationTypes.ALL : F.DesktopNotificationTypes.NEVER;
    if (t !== F.DesktopNotificationTypes.NEVER) {
      var s;
      s = "UserSettingsModal", L.default.requestPermission(e => {
        let t = e ? F.NotificationPermissionTypes.ENABLED : F.NotificationPermissionTypes.BLOCKED;
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
      focusMode: c
    } = this.props, S = P.isPlatformEmbedded && (0, P.isWindows)(), E = o().range(1, 11).map(e => ({
      value: 60 * e,
      label: k.default.Messages.DURATION_MINUTES.format({
        minutes: e
      })
    }));
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: k.default.Messages.NOTIFICATIONS,
      children: [(0, a.jsx)(u.FormSwitch, {
        className: w.marginBottom20,
        value: e !== F.DesktopNotificationTypes.NEVER && !c,
        onChange: this.handleDesktopChange,
        note: k.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
        disabled: c,
        tooltipNote: c ? k.default.Messages.QUIET_MODE_DISABLED_BY : void 0,
        children: k.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE
      }), (0, a.jsx)(X, {}), (0, a.jsx)(u.FormSwitch, {
        className: S ? w.marginBottom20 : w.marginBottom40,
        value: !s,
        note: k.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
        onChange: this.handleToggleShowUnreadBadge,
        children: k.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
      }), S ? (0, a.jsx)(u.FormSwitch, {
        className: w.marginBottom40,
        value: n,
        note: k.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
        onChange: this.handleToggleShowFlash,
        children: k.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
      }) : null, (0, a.jsx)(q, {}), (0, a.jsxs)(u.FormItem, {
        title: k.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        children: [(0, a.jsx)(u.SingleSelect, {
          value: t,
          onChange: U.AfkTimeout.updateSetting,
          options: E
        }), (0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: w.marginTop8,
          children: k.default.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
        }), (0, a.jsx)(u.FormDivider, {
          className: i()(w.marginTop40, w.marginBottom40)
        })]
      }), this.renderTTS(), (0, a.jsx)(u.FormDivider, {
        className: i()(w.marginTop40, w.marginBottom40)
      }), (0, a.jsx)(W, {}), (0, a.jsx)(u.FormItem, {
        children: (0, a.jsx)(K, {
          disabledSounds: l,
          disableAllSounds: r,
          notifyMessagesInSelectedChannel: d
        })
      }), (0, a.jsx)(B.default, {})]
    })
  }
  constructor(...e) {
    super(...e), V(this, "handleToggleShowUnreadBadge", () => {
      S.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), V(this, "handleToggleShowFlash", () => {
      S.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), V(this, "renderTTS", () => {
      if (!T.supported) return null;
      let e = [{
        name: k.default.Messages.TTS_ALLS,
        value: F.TTSNotificationTypes.ALL_CHANNELS
      }, {
        name: k.default.Messages.TTS_CURRENT,
        value: F.TTSNotificationTypes.SELECTED_CHANNEL
      }, {
        name: k.default.Messages.TTS_NEVER,
        value: F.TTSNotificationTypes.NEVER
      }];
      return (0, a.jsxs)(u.FormItem, {
        title: k.default.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
        children: [(0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: w.marginBottom8,
          children: k.default.Messages.FORM_DESCRIPTION_TTS
        }), (0, a.jsx)(u.RadioGroup, {
          options: e,
          onChange: this.handleTTSChange,
          value: this.props.ttsType
        })]
      })
    })
  }
}
let Q = (0, _.createExperiment)({
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

function X() {
  let e = Q.useExperiment({
      location: "settings"
    }, {
      autoTrackExposure: !1
    }).enabled,
    t = (0, d.useStateFromStores)([M.default], () => M.default.mentionOnAllMessages);
  return e ? (0, a.jsx)(u.FormSwitch, {
    className: w.marginBottom20,
    value: t,
    onChange: e => {
      E.default.setAccountFlag(G.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES, e)
    },
    note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
    children: "Mention on all messages?"
  }) : null
}

function q() {
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
    s = (0, d.useStateFromStores)([M.default], () => M.default.useNewNotifications),
    [l, i] = n.useState(!1);
  return e && (s || t) ? (0, a.jsxs)(a.Fragment, {
    children: [s ? (0, a.jsx)(u.FormSwitch, {
      className: w.marginBottom40,
      style: {
        marginTop: -20
      },
      value: s,
      disabled: l || !s,
      note: k.default.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
      onChange: () => Z(i),
      children: k.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
    }) : t ? (0, a.jsx)(u.FormSwitch, {
      className: w.marginBottom40,
      style: {
        marginTop: -20
      },
      value: s,
      disabled: l || s,
      note: "Turns on the new notification system",
      onChange: () => (0, A.openMigrationModal)(!0),
      children: k.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
    }) : null, null]
  }) : null
}
async function Z(e) {
  e(!0);
  let t = await (0, I.listSnapshots)();
  0 === t.length ? await (0, C.revertToOldSystem)() : c.default.show({
    title: k.default.Messages.CONFIRM,
    body: k.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: k.default.Messages.CANCEL,
    confirmText: k.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
    onConfirm: C.revertToOldSystem
  }), e(!1)
}

function J(e) {
  let t = (0, N.useFocusModeEnabled)();
  return (0, a.jsx)(z, {
    ...e,
    focusMode: t
  })
}

function $() {
  let e = (0, d.useStateFromStoresObject)([R.default], () => ({
    disableUnreadBadge: R.default.getDisableUnreadBadge(),
    taskbarFlash: R.default.taskbarFlash,
    disabledSounds: R.default.getDisabledSounds(),
    disableAllSounds: R.default.getDisableAllSounds(),
    desktopType: R.default.getDesktopType(),
    ttsType: R.default.getTTSType(),
    notifyMessagesInSelectedChannel: R.default.getNotifyMessagesInSelectedChannel()
  }));
  return (0, a.jsx)(J, {
    ...e,
    afkTimeout: U.AfkTimeout.useSetting()
  })
}