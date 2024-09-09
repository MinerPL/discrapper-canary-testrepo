t.d(s, {
    Z: function () {
        return V;
    }
}),
    t(47120),
    t(653041);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(392711),
    l = t.n(o),
    c = t(442837),
    d = t(692547),
    _ = t(481060),
    u = t(660216),
    E = t(225433),
    T = t(825209),
    S = t(721383),
    I = t(612226),
    N = t(714338),
    m = t(924557),
    C = t(600164),
    A = t(74299),
    g = t(131951),
    h = t(556296),
    O = t(808506),
    p = t(63063),
    R = t(358085),
    x = t(13140),
    f = t(210887),
    M = t(659947),
    D = t(981631),
    P = t(420212),
    L = t(689938),
    b = t(602260),
    Z = t(440376),
    v = t(224499);
function j(e, s, t) {
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
function B(e) {
    let { children: s } = e;
    return s([I.Q2.MESSAGE, I.Q2.NAVIGATION, I.Q2.DND, I.Q2.CHAT, I.Q2.VOICE_AND_VIDEO, I.Q2.MISCELLANEOUS]);
}
let U = l()((0, I.Rv)())
        .filter((e) => e.description !== L.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG)
        .groupBy((e) => e.group)
        .value(),
    G = c.ZP.connectStores([f.Z], () => ({ theme: f.Z.theme }))(_.EmptyState);
class F extends a.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            s = x.BB(e.shortcut);
        return N.Z.hasBind(s)
            ? (0, n.jsx)(_.FormText, {
                  className: b.keybindMessage,
                  type: _.FormTextTypes.DESCRIPTION,
                  style: { color: d.Z.unsafe_rawColors.RED_400.css },
                  children: L.Z.Messages.KEYBIND_CONFLICT
              })
            : P.Sp.has(s)
              ? (0, n.jsx)(_.FormText, {
                    className: b.keybindMessage,
                    type: _.FormTextTypes.DESCRIPTION,
                    style: { color: d.Z.unsafe_rawColors.RED_400.css },
                    children: L.Z.Messages.KEYBIND_NAVIGATION_CONFLICT.format({ keyboardNavArticle: p.Z.getArticleURL(D.BhN.KEYBOARD_NAVIGATION) })
                })
              : (0, n.jsx)(_.FormText, {
                    className: b.keybindMessage,
                    type: _.FormTextTypes.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action]
                });
    }
    render() {
        let { managed: e, enabled: s } = this.props.keybind;
        return (0, n.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            className: r()(b.keybindGroup, Z.card),
            children: [
                !e &&
                    (0, n.jsx)(E.Z, {
                        'aria-label': L.Z.Messages.REMOVE_KEYBIND,
                        className: b.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                        look: E.Z.Looks.FILLED
                    }),
                (0, n.jsxs)(C.Z, {
                    className: v.marginBottom8,
                    children: [
                        (0, n.jsx)(C.Z.Child, {
                            basis: '45%',
                            children: (0, n.jsx)(_.FormItem, {
                                title: L.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION,
                                className: b.item,
                                children: (0, n.jsx)(_.SingleSelect, {
                                    value: this.props.keybind.action,
                                    options: this.props.keybindActionTypes,
                                    onChange: this.handleActionChanged,
                                    isDisabled: e
                                })
                            })
                        }),
                        (0, n.jsx)(C.Z.Child, {
                            basis: '45%',
                            children: (0, n.jsx)(_.FormItem, {
                                title: L.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
                                className: b.item,
                                children: (0, n.jsx)(T.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange
                                })
                            })
                        }),
                        (0, n.jsx)(C.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(_.FormItem, {
                                className: b.switch,
                                children: (0, n.jsx)(_.Tooltip, {
                                    text: L.Z.Messages.USER_SETTINGS_KEYBIND_ENABLE_DISABLE,
                                    children: (e) =>
                                        (0, n.jsx)('div', {
                                            ...e,
                                            children: (0, n.jsx)(_.Switch, {
                                                checked: s,
                                                onChange: this.handleEnableDisable
                                            })
                                        })
                                })
                            })
                        })
                    ]
                }),
                (0, n.jsx)(C.Z.Child, { children: this.renderMessage() }),
                this.renderExtraSettings()
            ]
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        if (e === D.kg4.SWITCH_TO_VOICE_CHANNEL) return (0, n.jsx)(M.Z, { keybind: this.props.keybind });
    }
    constructor(...e) {
        super(...e),
            j(this, 'handleActionChanged', (e) => {
                u.Z.setKeybind({
                    ...this.props.keybind,
                    action: e
                });
            }),
            j(this, 'handleShortcutChange', (e) => {
                u.Z.setKeybind({
                    ...this.props.keybind,
                    shortcut: e
                });
            }),
            j(this, 'handleDeleteKeybind', () => {
                u.Z.deleteKeybind(this.props.keybind.id);
            }),
            j(this, 'handleEnableDisable', () => {
                let { keybind: e } = this.props;
                u.Z.setKeybind({
                    ...this.props.keybind,
                    enabled: !e.enabled
                });
            });
    }
}
class y extends a.PureComponent {
    componentDidMount() {
        u.Z.enableAll(!1);
    }
    componentWillUnmount() {
        u.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let { overlaySupported: e, canGoLive: s, allowSoundboard: t, enableClips: n } = this.props,
            a = [
                {
                    value: D.kg4.UNASSIGNED,
                    label: L.Z.Messages.KEYBIND_UNASSIGNED
                },
                {
                    value: D.kg4.PUSH_TO_TALK,
                    label: L.Z.Messages.KEYBIND_PUSH_TO_TALK
                },
                {
                    value: D.kg4.PUSH_TO_TALK_PRIORITY,
                    label: L.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
                },
                {
                    value: D.kg4.PUSH_TO_MUTE,
                    label: L.Z.Messages.KEYBIND_PUSH_TO_MUTE
                },
                {
                    value: D.kg4.TOGGLE_MUTE,
                    label: L.Z.Messages.KEYBIND_TOGGLE_MUTE
                },
                {
                    value: D.kg4.TOGGLE_DEAFEN,
                    label: L.Z.Messages.KEYBIND_TOGGLE_DEAFEN
                },
                {
                    value: D.kg4.TOGGLE_VOICE_MODE,
                    label: L.Z.Messages.KEYBIND_TOGGLE_VOICE_MODE
                },
                {
                    value: D.kg4.TOGGLE_STREAMER_MODE,
                    label: L.Z.Messages.KEYBIND_TOGGLE_STREAM_MODE
                }
            ];
        return (
            e &&
                (a.push({
                    value: D.kg4.TOGGLE_OVERLAY,
                    label: L.Z.Messages.KEYBIND_TOGGLE_OVERLAY
                }),
                a.push({
                    value: D.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: L.Z.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
                }),
                a.push({
                    value: D.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: L.Z.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
                })),
            s &&
                (0, R.isWindows)() &&
                a.push({
                    value: D.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: L.Z.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
                }),
            (0, R.isDesktop)() &&
                (a.push(
                    {
                        value: D.kg4.NAVIGATE_BACK,
                        label: L.Z.Messages.KEYBIND_NAVIGATE_BACK
                    },
                    {
                        value: D.kg4.NAVIGATE_FORWARD,
                        label: L.Z.Messages.KEYBIND_NAVIGATE_FORWARD
                    },
                    {
                        value: D.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: L.Z.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
                    },
                    {
                        value: D.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: L.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
                    }
                ),
                t &&
                    a.push(
                        {
                            value: D.kg4.SOUNDBOARD,
                            label: L.Z.Messages.KEYBIND_SOUNDBOARD
                        },
                        {
                            value: D.kg4.SOUNDBOARD_HOLD,
                            label: L.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }
                    ),
                n &&
                    a.push({
                        value: D.kg4.SAVE_CLIP,
                        label: L.Z.Messages.CLIPS_SAVE
                    })),
            a
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: s, enableClips: t } = this.props,
            n = {
                [D.kg4.UNASSIGNED]: L.Z.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
                [D.kg4.PUSH_TO_MUTE]: L.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
                [D.kg4.PUSH_TO_TALK]: L.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
                [D.kg4.PUSH_TO_TALK_PRIORITY]: L.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
                [D.kg4.TOGGLE_MUTE]: L.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
                [D.kg4.TOGGLE_DEAFEN]: L.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
                [D.kg4.TOGGLE_VOICE_MODE]: L.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
                [D.kg4.TOGGLE_STREAMER_MODE]: L.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
            };
        return e && ((n[D.kg4.TOGGLE_OVERLAY] = L.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY), (n[D.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = L.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK)), s && (0, R.isWindows)() && (n[D.kg4.TOGGLE_GO_LIVE_STREAMING] = L.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, R.isDesktop)() && ((n[D.kg4.NAVIGATE_BACK] = L.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK), (n[D.kg4.NAVIGATE_FORWARD] = L.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD), (n[D.kg4.SOUNDBOARD] = (0, R.isWindows)() ? L.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : L.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD), (n[D.kg4.SOUNDBOARD_HOLD] = (0, R.isWindows)() ? L.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : L.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD), t && (n[D.kg4.SAVE_CLIP] = L.Z.Messages.CLIPS_KEYBIND_DESCRIPTION)), n;
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, n.jsx)(
                'div',
                {
                    className: b.row,
                    children: (0, n.jsx)(
                        F,
                        {
                            keybind: e,
                            keybindDescriptions: this.keybindDescriptions,
                            keybindActionTypes: this.keybindActionTypes
                        },
                        e.id
                    )
                },
                e.id
            )
        );
    }
    renderEmpty(e) {
        if (0 === e.length)
            return (0, n.jsx)(G, {
                className: v.marginTop60,
                children: (0, n.jsx)(_.EmptyStateImage, {
                    darkSrc: t(572279),
                    lightSrc: t(871803),
                    width: 320,
                    height: 170
                })
            });
    }
    render() {
        let e = this.props.enableClips,
            s = l()(this.props.keybinds)
                .reject((e) => e.managed && ![D.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, D.kg4.SAVE_CLIP].includes(e.action))
                .reject((s) => !e && s.action === D.kg4.SAVE_CLIP)
                .reject((e) => !this.props.allowSoundboard && (e.action === D.kg4.SOUNDBOARD || e.action === D.kg4.SOUNDBOARD_HOLD))
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(_.FormSection, {
                    tag: _.FormTitleTags.H1,
                    title: L.Z.Messages.KEYBINDS,
                    children: R.isPlatformEmbedded
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsxs)(C.Z, {
                                      justify: C.Z.Justify.BETWEEN,
                                      className: v.marginBottom20,
                                      children: [
                                          (0, n.jsx)(C.Z.Child, {
                                              grow: 0,
                                              children: (0, n.jsx)(_.HelpMessage, {
                                                  messageType: _.HelpMessageTypes.WARNING,
                                                  children: L.Z.Messages.ADD_KEYBIND_WARNING
                                              })
                                          }),
                                          (0, n.jsx)(C.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, n.jsx)(_.Button, {
                                                  size: _.ButtonSizes.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: L.Z.Messages.ADD_KEYBIND
                                              })
                                          })
                                      ]
                                  }),
                                  (0, n.jsx)(_.FormDivider, {}),
                                  (0, n.jsxs)(_.FormSection, {
                                      children: [this.renderKeybinds(s), this.renderEmpty(s)]
                                  })
                              ]
                          })
                        : (0, n.jsx)(_.HelpMessage, {
                              messageType: _.HelpMessageTypes.INFO,
                              textVariant: 'text-lg/medium',
                              className: b.browserNotice,
                              children: L.Z.Messages.KEYBIND_IN_BROSWER_NOTICE.format({ downloadLink: D.EYA.DOWNLOAD })
                          })
                }),
                (0, n.jsx)(_.FormDivider, {}),
                (0, n.jsxs)(_.FormSection, {
                    tag: _.FormTitleTags.H1,
                    title: L.Z.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
                    className: v.marginTop60,
                    children: [
                        (0, n.jsxs)('div', {
                            className: b.defaultKeybind,
                            children: [
                                (0, n.jsx)(_.Text, {
                                    variant: 'text-md/normal',
                                    children: L.Z.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
                                }),
                                (0, n.jsx)('div', {
                                    className: b.defaultKeybindShortcutGroup,
                                    children: (0, n.jsx)(_.KeyCombo, {
                                        shortcut: S._.binds['0'],
                                        className: b.__invalid_defaultKeybindShortcut
                                    })
                                })
                            ]
                        }),
                        (0, n.jsx)(_.FormDivider, {}),
                        (0, n.jsx)(B, {
                            children: (e) =>
                                (0, n.jsx)(n.Fragment, {
                                    children: e.map((e, s) => {
                                        let t = (0, I.UD)(e),
                                            i = (0, I.U6)(e),
                                            o = U[e];
                                        return (0, n.jsxs)(
                                            'div',
                                            {
                                                className: b.defaultKeybindGroup,
                                                children: [
                                                    (0, n.jsx)(_.Heading, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: r()(b.defaultKeybindGroupHeader, { [b.defaultKeybindGroupWithDescription]: null != i }),
                                                        children: t
                                                    }),
                                                    null != i &&
                                                        (0, n.jsx)(_.Text, {
                                                            color: 'header-secondary',
                                                            className: b.defaultKeybindGroupDescription,
                                                            variant: 'text-sm/normal',
                                                            children: i
                                                        }),
                                                    (0, n.jsx)(_.FormDivider, {}),
                                                    o.map((e) =>
                                                        (0, n.jsxs)(
                                                            a.Fragment,
                                                            {
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
                                                                                children: e.binds.map((e) => (0, n.jsx)(_.KeyCombo, { shortcut: e }, e))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, n.jsx)(_.FormDivider, {})
                                                                ]
                                                            },
                                                            e.description
                                                        )
                                                    )
                                                ]
                                            },
                                            s
                                        );
                                    })
                                })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            j(this, 'handleAddKeybind', () => {
                u.Z.addKeybind();
            });
    }
}
function V() {
    let e = (0, c.e7)([h.Z], () => h.Z.getState()),
        s = (0, c.e7)([g.Z], () => (0, A.Z)(g.Z)),
        t = (0, c.e7)([O.Z], () => O.Z.isSupported()),
        a = (0, m.Go)();
    return (0, n.jsx)(y, {
        keybinds: e,
        canGoLive: s,
        overlaySupported: t,
        allowSoundboard: (0, R.isWindows)(),
        enableClips: a
    });
}
