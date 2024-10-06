t.d(s, {
    Z: function () {
        return es;
    }
}),
    t(653041),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(392711),
    l = t.n(o),
    c = t(442837),
    d = t(524437),
    _ = t(481060),
    u = t(668781),
    E = t(292556),
    T = t(87051),
    S = t(419363),
    I = t(818083),
    N = t(688465),
    A = t(487419),
    C = t(378364),
    m = t(197344),
    g = t(734934),
    h = t(223683),
    O = t(312400),
    p = t(115345),
    R = t(392888),
    x = t(106371),
    M = t(995774),
    f = t(921801),
    D = t(292959),
    L = t(9156),
    P = t(626135),
    b = t(912101),
    Z = t(358085),
    v = t(709054),
    j = t(557177),
    B = t(695346),
    U = t(675478),
    G = t(33656),
    F = t(726985),
    y = t(981631),
    V = t(468788),
    Y = t(689938),
    k = t(769533),
    w = t(113207);
function H(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
function W(e) {
    let { label: s, enabled: t, disabled: a, onPreview: i, onChange: r, tooltip: o } = e;
    return (0, n.jsx)(_.FormSwitch, {
        className: k.soundRow,
        value: t,
        onChange: r,
        disabled: a,
        tooltipNote: o,
        children: (0, n.jsxs)('div', {
            className: k.notificationSound,
            children: [
                (0, n.jsx)('div', {
                    className: k.soundName,
                    children: s
                }),
                (0, n.jsx)(_.Clickable, {
                    className: k.soundIcon,
                    onClick: i,
                    'aria-label': Y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
                    children: (0, n.jsx)(_.VoiceNormalIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: k.icon,
                        'aria-hidden': !0
                    })
                })
            ]
        })
    });
}
function K(e) {
    let { disabledSounds: s, disableAllSounds: t, notifyMessagesInSelectedChannel: i } = e,
        r = m.Z.useIsRingtoneEligible(),
        o = a.useRef(),
        l = (0, g.p)(),
        c = a.useCallback((e, s) => {
            s.stopPropagation(), s.preventDefault(), null != o.current && o.current.stop(), (o.current = j.GN(e));
        }, []),
        d = a.useCallback(
            (e, t) => {
                let n = s.filter((s) => s !== e);
                !t && n.push(e),
                    e === C.Z.ringtone &&
                        P.default.track(y.rMx.EVENT_RINGTONE_TOGGLED, {
                            toggled_on: t,
                            sound_name: e
                        }),
                    E.default.setDisabledSounds(n);
            },
            [s]
        );
    a.useEffect(() => () => {
        var e;
        null === (e = o.current) || void 0 === e || e.stop();
    });
    let u = [
        {
            label: Y.Z.Messages.SOUND_MESSAGE,
            sound: 'message1',
            focusModeDisabled: l
        },
        {
            label: Y.Z.Messages.SOUND_DEAFEN,
            sound: 'deafen'
        },
        {
            label: Y.Z.Messages.SOUND_UNDEAFEN,
            sound: 'undeafen'
        },
        {
            label: Y.Z.Messages.MUTE,
            sound: 'mute'
        },
        {
            label: Y.Z.Messages.UNMUTE,
            sound: 'unmute'
        },
        {
            label: Y.Z.Messages.SOUND_VOICE_DISCONNECTED,
            sound: 'disconnect'
        },
        {
            label: Y.Z.Messages.SOUND_PTT_ACTIVATE,
            sound: 'ptt_start'
        },
        {
            label: Y.Z.Messages.SOUND_PTT_DEACTIVATE,
            sound: 'ptt_stop'
        },
        {
            label: Y.Z.Messages.SOUND_USER_JOIN,
            sound: 'user_join'
        },
        {
            label: Y.Z.Messages.SOUND_USER_LEAVE,
            sound: 'user_leave'
        },
        {
            label: Y.Z.Messages.SOUND_USER_MOVED,
            sound: 'user_moved'
        },
        {
            label: Y.Z.Messages.SOUND_OUTGOING_RING,
            sound: 'call_calling'
        },
        {
            label: Y.Z.Messages.SOUND_INCOMING_RING,
            sound: 'call_ringing'
        },
        ...(r
            ? [
                  {
                      label: C.Z.getRingtoneSettingsLabel(),
                      sound: C.Z.ringtone,
                      disabled: s.includes('call_ringing')
                  }
              ]
            : []),
        {
            label: Y.Z.Messages.SOUND_STREAM_STARTED,
            sound: 'stream_started'
        },
        {
            label: Y.Z.Messages.SOUND_STREAM_STOPPED,
            sound: 'stream_ended'
        },
        {
            label: Y.Z.Messages.SOUND_VIEWER_JOIN,
            sound: 'stream_user_joined'
        },
        {
            label: Y.Z.Messages.SOUND_VIEWER_LEAVE,
            sound: 'stream_user_left'
        },
        {
            label: Y.Z.Messages.SOUND_ACTIVITY_START,
            sound: 'activity_launch'
        },
        {
            label: Y.Z.Messages.SOUND_ACTIVITY_END,
            sound: 'activity_end'
        },
        {
            label: Y.Z.Messages.SOUND_ACTIVITY_USER_JOIN,
            sound: 'activity_user_join'
        },
        {
            label: Y.Z.Messages.SOUND_ACTIVITY_USER_LEAVE,
            sound: 'activity_user_left'
        },
        {
            label: Y.Z.Messages.SOUND_INVITED_TO_SPEAK,
            sound: 'reconnect'
        }
    ];
    return (0, n.jsx)(f.F, {
        setting: F.s6.NOTIFICATIONS_SOUNDS,
        children: (0, n.jsxs)(_.FormSection, {
            tag: _.FormTitleTags.H1,
            title: Y.Z.Messages.SOUNDS,
            children: [
                (0, n.jsx)(_.FormSwitch, {
                    note: Y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
                    value: i,
                    onChange: E.default.setNotifyMessagesInSelectedChannel,
                    children: Y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
                }),
                (0, n.jsx)(_.FormSwitch, {
                    note: Y.Z.Messages.SOUND_DISABLE_ALL_NOTE,
                    value: t,
                    onChange: E.default.toggleDisableAllSounds,
                    children: Y.Z.Messages.SOUND_DISABLE_ALL
                }),
                u.map((e) => {
                    let { label: a, sound: i, disabled: r, focusModeDisabled: o } = e;
                    return (0, n.jsx)(
                        W,
                        {
                            label: a,
                            disabled: t || !0 === r || !0 === o,
                            tooltip: o ? Y.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
                            onChange: (e) => d(i, e),
                            onPreview: (e) => c(i, e),
                            enabled: !t && !s.includes(i) && !0 !== o
                        },
                        i
                    );
                })
            ]
        })
    });
}
function z() {
    let e = (0, c.e7)([A.Z], () => A.Z.getGuildAlertSettings()),
        [s, t] = a.useState(null),
        i = v.default.keys(e).map((s) => {
            let t = e[s];
            return {
                label: t.guildName,
                value: t.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, n.jsxs)(f.F, {
              setting: F.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, n.jsxs)(_.Heading, {
                      variant: 'heading-lg/semibold',
                      className: r()(k.titleWithBeta, w.marginBottom20),
                      children: [Y.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, n.jsx)(N.Z, {})]
                  }),
                  (0, n.jsx)(_.FormText, {
                      type: _.FormTextTypes.DESCRIPTION,
                      className: w.marginBottom20,
                      children: Y.Z.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
                  }),
                  (0, n.jsxs)(_.FormItem, {
                      title: Y.Z.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
                      children: [
                          (0, n.jsx)(_.SingleSelect, {
                              className: null != s ? w.marginBottom20 : w.marginBottom40,
                              value: s,
                              onChange: (e) => {
                                  t(e);
                              },
                              options: i
                          }),
                          null != s
                              ? (0, n.jsxs)('div', {
                                    className: w.marginTop20,
                                    children: [
                                        (0, n.jsxs)(f.F, {
                                            setting: F.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, n.jsx)(_.FormSwitch, {
                                                    className: r()(w.marginBottom20),
                                                    note: Y.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
                                                    value: !e[s].disableRaidAlertNag,
                                                    onChange: () => {
                                                        (0, U.PS)(
                                                            s,
                                                            (e) => {
                                                                e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                            },
                                                            U.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: Y.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
                                                }),
                                                (0, n.jsx)(_.FormDivider, { className: r()(w.marginTop20, w.marginBottom40) })
                                            ]
                                        }),
                                        (0, n.jsxs)(f.F, {
                                            setting: F.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, n.jsx)(_.FormSwitch, {
                                                    className: w.marginBottom20,
                                                    note: Y.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
                                                    value: !e[s].disableRaidAlertPush,
                                                    onChange: () => {
                                                        (0, U.PS)(
                                                            s,
                                                            (e) => {
                                                                e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                            },
                                                            U.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: Y.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
                                                }),
                                                (0, n.jsx)(_.FormDivider, { className: r()(w.marginTop20, w.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != s ? null : (0, n.jsx)(_.FormDivider, { className: r()(w.marginTop20, w.marginBottom40) })
                      ]
                  })
              ]
          });
}
class Q extends a.PureComponent {
    handleDesktopChange(e) {
        let s = e ? y.qrD.ALL : y.qrD.NEVER;
        if (s !== y.qrD.NEVER) {
            var t;
            (t = 'UserSettingsModal'),
                b.Z.requestPermission((e) => {
                    let s = e ? y.$Ab.ENABLED : y.$Ab.BLOCKED;
                    E.default.setPermissionsState(s, t);
                });
        } else E.default.setDesktopType(s);
    }
    handleTTSChange(e) {
        let s = e.value;
        E.default.setTTSType(s);
    }
    render() {
        let { desktopType: e, afkTimeout: s, disableUnreadBadge: t, taskbarFlash: a, disabledSounds: i, disableAllSounds: o, notifyMessagesInSelectedChannel: c, focusMode: d } = this.props,
            u = Z.isPlatformEmbedded && (0, Z.isWindows)(),
            E = l()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: Y.Z.Messages.DURATION_MINUTES.format({ minutes: e })
                }));
        return (0, n.jsxs)(_.FormSection, {
            tag: _.FormTitleTags.H1,
            title: Y.Z.Messages.NOTIFICATIONS,
            children: [
                (0, n.jsx)(f.F, {
                    setting: F.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, n.jsx)(_.FormSwitch, {
                        className: w.marginBottom20,
                        value: e !== y.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: Y.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
                        disabled: d,
                        tooltipNote: d ? Y.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
                        children: Y.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE
                    })
                }),
                (0, n.jsx)(q, {}),
                (0, n.jsx)(f.F, {
                    setting: F.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, n.jsx)(_.FormSwitch, {
                        className: u ? w.marginBottom20 : w.marginBottom40,
                        value: !t,
                        note: Y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
                        onChange: this.handleToggleShowUnreadBadge,
                        children: Y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
                    })
                }),
                (0, n.jsx)(f.F, {
                    setting: F.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, n.jsx)(_.FormSwitch, {
                        className: w.marginBottom40,
                        value: a,
                        note: Y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
                        onChange: this.handleToggleShowFlash,
                        children: Y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
                    })
                }),
                (0, n.jsx)(J, {}),
                (0, n.jsx)(et, {}),
                (0, n.jsx)(f.F, {
                    setting: F.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, n.jsxs)(_.FormItem, {
                        title: Y.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
                        children: [
                            (0, n.jsx)(_.SingleSelect, {
                                value: s,
                                onChange: B.CM.updateSetting,
                                options: E
                            }),
                            (0, n.jsx)(_.FormText, {
                                type: _.FormTextTypes.DESCRIPTION,
                                className: w.marginTop8,
                                children: Y.Z.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
                            }),
                            (0, n.jsx)(_.FormDivider, { className: r()(w.marginTop40, w.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, n.jsx)(z, {}),
                (0, n.jsx)(_.FormItem, {
                    children: (0, n.jsx)(K, {
                        disabledSounds: i,
                        disableAllSounds: o,
                        notifyMessagesInSelectedChannel: c
                    })
                }),
                (0, n.jsx)(G.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            H(this, 'handleToggleShowUnreadBadge', () => {
                E.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            H(this, 'handleToggleShowFlash', () => {
                E.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            H(this, 'renderTTS', () => {
                if (!S.Zh) return null;
                let e = [
                    {
                        name: Y.Z.Messages.TTS_ALLS,
                        value: y.PrB.ALL_CHANNELS
                    },
                    {
                        name: Y.Z.Messages.TTS_CURRENT,
                        value: y.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: Y.Z.Messages.TTS_NEVER,
                        value: y.PrB.NEVER
                    }
                ];
                return (0, n.jsxs)(f.F, {
                    setting: F.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, n.jsxs)(_.FormItem, {
                            title: Y.Z.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
                            children: [
                                (0, n.jsx)(_.FormText, {
                                    type: _.FormTextTypes.DESCRIPTION,
                                    className: w.marginBottom8,
                                    children: Y.Z.Messages.FORM_DESCRIPTION_TTS
                                }),
                                (0, n.jsx)(_.RadioGroup, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, n.jsx)(_.FormDivider, { className: r()(w.marginTop40, w.marginBottom40) })
                    ]
                });
            });
    }
}
let X = (0, I.B)({
    kind: 'user',
    id: '2024-01_mention_on_all_messages',
    label: 'Mention on all messages',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Increment mention count when receiving a message in a channel set to all messages',
            config: { enabled: !0 }
        }
    ]
});
function q() {
    let e = X.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        s = (0, c.e7)([L.ZP], () => L.ZP.mentionOnAllMessages);
    return e
        ? (0, n.jsx)(f.F, {
              setting: F.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, n.jsx)(_.FormSwitch, {
                  className: w.marginBottom20,
                  value: s,
                  onChange: (e) => {
                      T.Z.setAccountFlag(V.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: 'Mention on all messages?'
              })
          })
        : null;
}
function J() {
    let e = O.xT.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: s } = O.fs.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }),
        t = (0, c.e7)([L.ZP], () => L.ZP.useNewNotifications),
        [i, o] = a.useState(!1);
    return e && (t || s)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  t
                      ? (0, n.jsx)(f.F, {
                            setting: F.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, n.jsx)(_.FormSwitch, {
                                className: w.marginBottom40,
                                style: { marginTop: -20 },
                                value: t,
                                disabled: i || !t,
                                note: Y.Z.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
                                onChange: () => $(o),
                                children: Y.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
                            })
                        })
                      : s
                        ? (0, n.jsx)(f.F, {
                              setting: F.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, n.jsx)(_.FormSwitch, {
                                  className: w.marginBottom40,
                                  value: t,
                                  disabled: i || t,
                                  note: 'Turns on the new notification system',
                                  onChange: () => (0, R.R)(!0),
                                  children: Y.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
                              })
                          })
                        : null,
                  (0, n.jsxs)(f.F, {
                      setting: F.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, n.jsx)(_.FormItem, {
                              title: 'New Notification Settings (Advanced, Staff Only)',
                              children: (0, n.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      gap: 16
                                  },
                                  children: [
                                      (0, n.jsx)(f.F, {
                                          setting: F.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, n.jsx)(_.Button, {
                                              onClick: h.KP,
                                              children: 'Restore most recent snapshot'
                                          })
                                      }),
                                      (0, n.jsx)(f.F, {
                                          setting: F.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, n.jsx)(_.Button, {
                                              onClick: () => {
                                                  (0, R.R)(!0);
                                              },
                                              children: 'Launch Migration'
                                          })
                                      }),
                                      (0, n.jsx)(f.F, {
                                          setting: F.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, n.jsx)(_.FormSwitch, {
                                              hideBorder: !0,
                                              value: t,
                                              onChange: (e) => {
                                                  T.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, n.jsx)(_.FormDivider, { className: r()(w.marginTop40, w.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function $(e) {
    e(!0);
    let s = await (0, h.Tn)();
    0 === s.length
        ? await (0, p.oL)()
        : u.Z.show({
              title: Y.Z.Messages.CONFIRM,
              body: Y.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({ date: new Date(s[s.length - 1].recorded_at) }),
              cancelText: Y.Z.Messages.CANCEL,
              confirmText: Y.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
              onConfirm: p.oL
          }),
        e(!1);
}
function ee(e) {
    let s = (0, g.p)();
    return (0, n.jsx)(Q, {
        ...e,
        focusMode: s
    });
}
function es() {
    let e = (0, c.cj)([D.Z], () => ({
        disableUnreadBadge: D.Z.getDisableUnreadBadge(),
        taskbarFlash: D.Z.taskbarFlash,
        disabledSounds: D.Z.getDisabledSounds(),
        disableAllSounds: D.Z.getDisableAllSounds(),
        desktopType: D.Z.getDesktopType(),
        ttsType: D.Z.getTTSType(),
        notifyMessagesInSelectedChannel: D.Z.getNotifyMessagesInSelectedChannel()
    }));
    return (0, n.jsx)(ee, {
        ...e,
        afkTimeout: B.CM.useSetting()
    });
}
function et() {
    let e = B.fz.useSetting(),
        s = [
            {
                name: Y.Z.Messages.REACTION_NOTIFICATIONS_ENABLED,
                value: d.Ns.NOTIFICATIONS_ENABLED
            },
            {
                name: Y.Z.Messages.REACTION_NOTIFICATIONS_ONLY_DMS,
                value: d.Ns.ONLY_DMS
            },
            {
                name: Y.Z.Messages.REACTION_NOTIFICATIONS_DISABLED,
                value: d.Ns.NOTIFICATIONS_DISABLED
            }
        ];
    return x.Z.getCurrentConfig({ location: 'webSettings' }).enableInAppNotifications
        ? (0, n.jsxs)(f.F, {
              setting: F.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, n.jsxs)(_.FormItem, {
                      title: Y.Z.Messages.REACTION_NOTIFICATIONS,
                      children: [
                          (0, n.jsx)(_.FormText, {
                              type: _.FormTextTypes.DESCRIPTION,
                              className: w.marginBottom8,
                              children: Y.Z.Messages.FORM_DESCRIPTION_REACTION_NOTIFICATIONS
                          }),
                          (0, n.jsx)(_.RadioGroup, {
                              options: s,
                              onChange: (s) => {
                                  (0, M.MR)(s.value, e);
                              },
                              value: e
                          })
                      ]
                  }),
                  (0, n.jsx)(_.FormDivider, { className: r()(w.marginTop40, w.marginBottom40) })
              ]
          })
        : null;
}
