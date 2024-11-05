n.d(t, {
    Z: function () {
        return ee;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(524437),
    u = n(481060),
    m = n(668781),
    h = n(292556),
    g = n(87051),
    p = n(419363),
    x = n(818083),
    S = n(688465),
    T = n(487419),
    C = n(197344),
    _ = n(476756),
    E = n(734934),
    f = n(223683),
    I = n(312400),
    N = n(115345),
    A = n(392888),
    b = n(106371),
    v = n(995774),
    j = n(921801),
    O = n(292959),
    R = n(9156),
    P = n(912101),
    D = n(358085),
    y = n(709054),
    B = n(557177),
    L = n(695346),
    Z = n(675478),
    F = n(33656),
    M = n(726985),
    k = n(981631),
    w = n(468788),
    U = n(388032),
    V = n(769533),
    G = n(113207);
function Y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
    let { label: t, enabled: n, disabled: s, onPreview: r, onChange: l, tooltip: a } = e;
    return (0, i.jsx)(u.FormSwitch, {
        className: V.soundRow,
        value: n,
        onChange: l,
        disabled: s,
        tooltipNote: a,
        children: (0, i.jsxs)('div', {
            className: V.notificationSound,
            children: [
                (0, i.jsx)('div', {
                    className: V.soundName,
                    children: t
                }),
                (0, i.jsx)(u.Clickable, {
                    className: V.soundIcon,
                    onClick: r,
                    'aria-label': U.intl.string(U.t.Kd4uxM),
                    children: (0, i.jsx)(u.VoiceNormalIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: V.icon,
                        'aria-hidden': !0
                    })
                })
            ]
        })
    });
}
function z(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: r } = e,
        a = s.useRef(),
        o = (0, E.p)(),
        c = s.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != a.current && a.current.stop(), (a.current = B.GN(e));
        }, []),
        d = s.useCallback(
            (e, n) => {
                let i = t.filter((t) => t !== e);
                !n && i.push(e), h.default.setDisabledSounds(i);
            },
            [t]
        );
    s.useEffect(() => () => {
        var e;
        null === (e = a.current) || void 0 === e || e.stop();
    });
    let m = [
            {
                label: U.intl.string(U.t.pz71xM),
                sound: 'message1',
                focusModeDisabled: o
            },
            {
                label: U.intl.string(U.t.hK51Ym),
                sound: 'deafen'
            },
            {
                label: U.intl.string(U.t.XiejaG),
                sound: 'undeafen'
            },
            {
                label: U.intl.string(U.t['w4m94+']),
                sound: 'mute'
            },
            {
                label: U.intl.string(U.t.YqAjX1),
                sound: 'unmute'
            },
            {
                label: U.intl.string(U.t['juL9/P']),
                sound: 'disconnect'
            },
            {
                label: U.intl.string(U.t.x98vQk),
                sound: 'ptt_start'
            },
            {
                label: U.intl.string(U.t['1HjRqK']),
                sound: 'ptt_stop'
            },
            {
                label: U.intl.string(U.t['9JB1Cg']),
                sound: 'user_join'
            },
            {
                label: U.intl.string(U.t.KUBBNj),
                sound: 'user_leave'
            },
            {
                label: U.intl.string(U.t.EZjqUV),
                sound: 'user_moved'
            },
            {
                label: U.intl.string(U.t.LnNlQk),
                sound: 'call_calling'
            },
            {
                label: U.intl.string(U.t.XBrJT0),
                sound: 'call_ringing'
            },
            {
                label: U.intl.string(U.t['Nd8P5+']),
                sound: 'stream_started'
            },
            {
                label: U.intl.string(U.t['9bYj+P']),
                sound: 'stream_ended'
            },
            {
                label: U.intl.string(U.t.KccUIy),
                sound: 'stream_user_joined'
            },
            {
                label: U.intl.string(U.t.dsjkiI),
                sound: 'stream_user_left'
            },
            {
                label: U.intl.string(U.t.nFOcf3),
                sound: 'activity_launch'
            },
            {
                label: U.intl.string(U.t['a6lw/v']),
                sound: 'activity_end'
            },
            {
                label: U.intl.string(U.t.KaFxra),
                sound: 'activity_user_join'
            },
            {
                label: U.intl.string(U.t.S14z9v),
                sound: 'activity_user_left'
            },
            {
                label: U.intl.string(U.t.CP3DCw),
                sound: 'reconnect'
            }
        ],
        g = null != C.Z.useHolidaySoundpack();
    return (0, i.jsx)(j.F, {
        setting: M.s6.NOTIFICATIONS_SOUNDS,
        children: (0, i.jsxs)(u.FormSection, {
            children: [
                g
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.FormTitle, {
                                  className: G.marginBottom20,
                                  children: U.intl.string(U.t.fgSHf3)
                              }),
                              (0, i.jsx)(_.Z, {})
                          ]
                      })
                    : null,
                (0, i.jsx)(u.FormTitle, {
                    className: l()(G.marginBottom20, G.marginTop20),
                    children: U.intl.string(U.t.MKWyKS)
                }),
                (0, i.jsx)(u.FormSwitch, {
                    note: U.intl.string(U.t['7oXUio']),
                    value: r,
                    onChange: h.default.setNotifyMessagesInSelectedChannel,
                    children: U.intl.string(U.t.lF5GGR)
                }),
                (0, i.jsx)(u.FormSwitch, {
                    note: U.intl.string(U.t['+B0XLC']),
                    value: n,
                    onChange: h.default.toggleDisableAllSounds,
                    children: U.intl.string(U.t['2ZhCOT'])
                }),
                m.map((e) => {
                    let { label: s, sound: r, focusModeDisabled: l } = e;
                    return (0, i.jsx)(
                        H,
                        {
                            label: s,
                            disabled: n || !0 === l,
                            tooltip: l ? U.intl.string(U.t.cIRG0t) : void 0,
                            onChange: (e) => d(r, e),
                            onPreview: (e) => c(r, e),
                            enabled: !n && !t.includes(r) && !0 !== l
                        },
                        r
                    );
                })
            ]
        })
    });
}
function W() {
    let e = (0, c.e7)([T.Z], () => T.Z.getGuildAlertSettings()),
        [t, n] = s.useState(null),
        r = y.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, i.jsxs)(j.F, {
              setting: M.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, i.jsxs)(u.Heading, {
                      variant: 'heading-lg/semibold',
                      className: l()(V.titleWithBeta, G.marginBottom20),
                      children: [U.intl.string(U.t.D9yVAA), (0, i.jsx)(S.Z, {})]
                  }),
                  (0, i.jsx)(u.FormText, {
                      type: u.FormTextTypes.DESCRIPTION,
                      className: G.marginBottom20,
                      children: U.intl.string(U.t['0PhAOD'])
                  }),
                  (0, i.jsxs)(u.FormItem, {
                      title: U.intl.string(U.t.Q0PsXV),
                      children: [
                          (0, i.jsx)(u.SingleSelect, {
                              className: null != t ? G.marginBottom20 : G.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: r
                          }),
                          null != t
                              ? (0, i.jsxs)('div', {
                                    className: G.marginTop20,
                                    children: [
                                        (0, i.jsxs)(j.F, {
                                            setting: M.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, i.jsx)(u.FormSwitch, {
                                                    className: l()(G.marginBottom20),
                                                    note: U.intl.string(U.t['z8Td4+']),
                                                    value: !e[t].disableRaidAlertNag,
                                                    onChange: () => {
                                                        (0, Z.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                            },
                                                            Z.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: U.intl.string(U.t.u6dc5O)
                                                }),
                                                (0, i.jsx)(u.FormDivider, { className: l()(G.marginTop20, G.marginBottom40) })
                                            ]
                                        }),
                                        (0, i.jsxs)(j.F, {
                                            setting: M.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, i.jsx)(u.FormSwitch, {
                                                    className: G.marginBottom20,
                                                    note: U.intl.string(U.t.PyxXs7),
                                                    value: !e[t].disableRaidAlertPush,
                                                    onChange: () => {
                                                        (0, Z.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                            },
                                                            Z.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: U.intl.string(U.t.P8MG6u)
                                                }),
                                                (0, i.jsx)(u.FormDivider, { className: l()(G.marginTop20, G.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != t ? null : (0, i.jsx)(u.FormDivider, { className: l()(G.marginTop20, G.marginBottom40) })
                      ]
                  })
              ]
          });
}
class K extends s.PureComponent {
    handleDesktopChange(e) {
        let t = e ? k.qrD.ALL : k.qrD.NEVER;
        if (t !== k.qrD.NEVER) {
            var n;
            (n = 'UserSettingsModal'),
                P.Z.requestPermission((e) => {
                    let t = e ? k.$Ab.ENABLED : k.$Ab.BLOCKED;
                    h.default.setPermissionsState(t, n);
                });
        } else h.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e.value;
        h.default.setTTSType(t);
    }
    render() {
        let { desktopType: e, afkTimeout: t, disableUnreadBadge: n, taskbarFlash: s, disabledSounds: r, disableAllSounds: a, notifyMessagesInSelectedChannel: c, focusMode: d } = this.props,
            m = D.isPlatformEmbedded && (0, D.isWindows)(),
            h = o()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: U.intl.formatToPlainString(U.t.iXLF9f, { minutes: e })
                }));
        return (0, i.jsxs)(u.FormSection, {
            tag: u.FormTitleTags.H1,
            title: U.intl.string(U.t.HcoRu7),
            children: [
                (0, i.jsx)(j.F, {
                    setting: M.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, i.jsx)(u.FormSwitch, {
                        className: G.marginBottom20,
                        value: e !== k.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: U.intl.string(U.t.wF9ih4),
                        disabled: d,
                        tooltipNote: d ? U.intl.string(U.t.cIRG0t) : void 0,
                        children: U.intl.string(U.t['/0WClp'])
                    })
                }),
                (0, i.jsx)(Q, {}),
                (0, i.jsx)(j.F, {
                    setting: M.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, i.jsx)(u.FormSwitch, {
                        className: m ? G.marginBottom20 : G.marginBottom40,
                        value: !n,
                        note: U.intl.string(U.t['9K4qwc']),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: U.intl.string(U.t.VH8AIC)
                    })
                }),
                (0, i.jsx)(j.F, {
                    setting: M.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, i.jsx)(u.FormSwitch, {
                        className: G.marginBottom40,
                        value: s,
                        note: U.intl.string(U.t['bd4j4+']),
                        onChange: this.handleToggleShowFlash,
                        children: U.intl.string(U.t.xSmFQE)
                    })
                }),
                (0, i.jsx)(X, {}),
                (0, i.jsx)(et, {}),
                (0, i.jsx)(j.F, {
                    setting: M.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, i.jsxs)(u.FormItem, {
                        title: U.intl.string(U.t.TTvjd3),
                        children: [
                            (0, i.jsx)(u.SingleSelect, {
                                value: t,
                                onChange: L.CM.updateSetting,
                                options: h
                            }),
                            (0, i.jsx)(u.FormText, {
                                type: u.FormTextTypes.DESCRIPTION,
                                className: G.marginTop8,
                                children: U.intl.string(U.t.Xytv9P)
                            }),
                            (0, i.jsx)(u.FormDivider, { className: l()(G.marginTop40, G.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, i.jsx)(W, {}),
                (0, i.jsx)(u.FormItem, {
                    children: (0, i.jsx)(z, {
                        disabledSounds: r,
                        disableAllSounds: a,
                        notifyMessagesInSelectedChannel: c
                    })
                }),
                (0, i.jsx)(F.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, 'handleToggleShowUnreadBadge', () => {
                h.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            Y(this, 'handleToggleShowFlash', () => {
                h.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            Y(this, 'renderTTS', () => {
                if (!p.Zh) return null;
                let e = [
                    {
                        name: U.intl.string(U.t.B1AGeH),
                        value: k.PrB.ALL_CHANNELS
                    },
                    {
                        name: U.intl.string(U.t.uM2rNj),
                        value: k.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: U.intl.string(U.t.DYO5Oj),
                        value: k.PrB.NEVER
                    }
                ];
                return (0, i.jsxs)(j.F, {
                    setting: M.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, i.jsxs)(u.FormItem, {
                            title: U.intl.string(U.t.VIm5MD),
                            children: [
                                (0, i.jsx)(u.FormText, {
                                    type: u.FormTextTypes.DESCRIPTION,
                                    className: G.marginBottom8,
                                    children: U.intl.string(U.t['+4dnAw'])
                                }),
                                (0, i.jsx)(u.RadioGroup, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, i.jsx)(u.FormDivider, { className: l()(G.marginTop40, G.marginBottom40) })
                    ]
                });
            });
    }
}
let q = (0, x.B)({
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
function Q() {
    let e = q.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        t = (0, c.e7)([R.ZP], () => R.ZP.mentionOnAllMessages);
    return e
        ? (0, i.jsx)(j.F, {
              setting: M.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, i.jsx)(u.FormSwitch, {
                  className: G.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      g.Z.setAccountFlag(w.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: 'Mention on all messages?'
              })
          })
        : null;
}
function X() {
    let e = I.xT.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = I.fs.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([R.ZP], () => R.ZP.useNewNotifications),
        [r, a] = s.useState(!1);
    return e && (n || t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  n
                      ? (0, i.jsx)(j.F, {
                            setting: M.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, i.jsx)(u.FormSwitch, {
                                className: G.marginBottom40,
                                style: { marginTop: -20 },
                                value: n,
                                disabled: r || !n,
                                note: U.intl.string(U.t.frbLrK),
                                onChange: () => J(a),
                                children: U.intl.string(U.t.z21l8P)
                            })
                        })
                      : t
                        ? (0, i.jsx)(j.F, {
                              setting: M.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, i.jsx)(u.FormSwitch, {
                                  className: G.marginBottom40,
                                  value: n,
                                  disabled: r || n,
                                  note: 'Turns on the new notification system',
                                  onChange: () => (0, A.R)(!0),
                                  children: U.intl.string(U.t.z21l8P)
                              })
                          })
                        : null,
                  (0, i.jsxs)(j.F, {
                      setting: M.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, i.jsx)(u.FormItem, {
                              title: 'New Notification Settings (Advanced, Staff Only)',
                              children: (0, i.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      gap: 16
                                  },
                                  children: [
                                      (0, i.jsx)(j.F, {
                                          setting: M.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, i.jsx)(u.Button, {
                                              onClick: f.KP,
                                              children: 'Restore most recent snapshot'
                                          })
                                      }),
                                      (0, i.jsx)(j.F, {
                                          setting: M.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, i.jsx)(u.Button, {
                                              onClick: () => {
                                                  (0, A.R)(!0);
                                              },
                                              children: 'Launch Migration'
                                          })
                                      }),
                                      (0, i.jsx)(j.F, {
                                          setting: M.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, i.jsx)(u.FormSwitch, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  g.Z.setAccountFlag(w.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsx)(u.FormDivider, { className: l()(G.marginTop40, G.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function J(e) {
    e(!0);
    let t = await (0, f.Tn)();
    0 === t.length
        ? await (0, N.oL)()
        : m.Z.show({
              title: U.intl.string(U.t['cY+Ooa']),
              body: U.intl.format(U.t['7zTJJS'], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: U.intl.string(U.t['ETE/oK']),
              confirmText: U.intl.string(U.t.Rm96T0),
              onConfirm: N.oL
          }),
        e(!1);
}
function $(e) {
    let t = (0, E.p)();
    return (0, i.jsx)(K, {
        ...e,
        focusMode: t
    });
}
function ee() {
    let e = (0, c.cj)([O.Z], () => ({
        disableUnreadBadge: O.Z.getDisableUnreadBadge(),
        taskbarFlash: O.Z.taskbarFlash,
        disabledSounds: O.Z.getDisabledSounds(),
        disableAllSounds: O.Z.getDisableAllSounds(),
        desktopType: O.Z.getDesktopType(),
        ttsType: O.Z.getTTSType(),
        notifyMessagesInSelectedChannel: O.Z.getNotifyMessagesInSelectedChannel()
    }));
    return (0, i.jsx)($, {
        ...e,
        afkTimeout: L.CM.useSetting()
    });
}
function et() {
    let e = L.fz.useSetting(),
        t = [
            {
                name: U.intl.string(U.t['9x/Rtb']),
                value: d.Ns.NOTIFICATIONS_ENABLED
            },
            {
                name: U.intl.string(U.t.fJAbQU),
                value: d.Ns.ONLY_DMS
            },
            {
                name: U.intl.string(U.t['xu+UDQ']),
                value: d.Ns.NOTIFICATIONS_DISABLED
            }
        ];
    return b.Z.getCurrentConfig({ location: 'webSettings' }).enableInAppNotifications
        ? (0, i.jsxs)(j.F, {
              setting: M.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, i.jsxs)(u.FormItem, {
                      title: U.intl.string(U.t.Rq0NFh),
                      children: [
                          (0, i.jsx)(u.FormText, {
                              type: u.FormTextTypes.DESCRIPTION,
                              className: G.marginBottom8,
                              children: U.intl.string(U.t.oWF6eX)
                          }),
                          (0, i.jsx)(u.RadioGroup, {
                              options: t,
                              onChange: (t) => {
                                  (0, v.MR)(t.value, e);
                              },
                              value: e
                          })
                      ]
                  }),
                  (0, i.jsx)(u.FormDivider, { className: l()(G.marginTop40, G.marginBottom40) })
              ]
          })
        : null;
}
