n.d(t, {
    Z: function () {
        return O;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(660216),
    u = n(13245),
    m = n(825209),
    h = n(887278),
    g = n(630699),
    p = n(212632),
    x = n(658785),
    S = n(568963),
    T = n(556296),
    C = n(808506),
    _ = n(237997),
    E = n(626135);
n(63063);
var f = n(13140),
    I = n(981631),
    N = n(388032),
    A = n(301942);
let b = v(null);
function v(e) {
    var t;
    let n = _.Z.getNotificationPositionMode(),
        i = n !== I._vf.DISABLED,
        s = T.Z.getOverlayKeybind(),
        r = T.Z.getOverlayChatKeybind();
    return {
        enabled: C.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: _.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, f.BB)(s.shortcut) : null,
        text_activation_hotkey: null != r ? (0, f.BB)(r.shortcut) : null,
        text_opacity_slider: _.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : C.Z.enabled
    };
}
function j(e) {
    let { children: t, title: n } = e;
    return (0, i.jsx)(c.FormItem, {
        title: n,
        className: A.userSettingsOverlayField,
        children: t
    });
}
function O(e) {
    let { className: t, showHeader: n = !0 } = e,
        { enabled: s, legacyEnabled: l } = (0, o.cj)([C.Z], () => ({
            enabled: C.Z.enabled,
            legacyEnabled: C.Z.legacyEnabled
        })),
        {
            avatarSizeMode: f,
            displayNameMode: O,
            displayUserMode: R,
            notificationPositionMode: P,
            textChatNotificationMode: D,
            shouldShowKeybindIndicators: y
        } = (0, o.cj)([_.Z], () => ({
            avatarSizeMode: _.Z.getAvatarSizeMode(),
            displayNameMode: _.Z.getDisplayNameMode(),
            displayUserMode: _.Z.getDisplayUserMode(),
            notificationPositionMode: _.Z.getNotificationPositionMode(),
            textChatNotificationMode: _.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: _.Z.showKeybindIndicators
        })),
        B = (0, o.e7)([T.Z], () => T.Z.getOverlayKeybind()),
        { showKeybindIndicators: L } = x.Z.useExperiment({ location: 'overlay_user_settings' }),
        Z = (0, h.$1)(),
        { useOverlayV3: F } = S.Z.useExperiment({ location: 'overlay_user_settings' });
    function M(e) {
        u.Z.setEnabled(e, l, !1),
            E.default.track(I.rMx.OVERLAY_TOGGLED, {
                enabled: e,
                setting_type: 'overlay toggled - global'
            });
    }
    function k(e) {
        u.Z.setEnabled(s, e, !1),
            E.default.track(I.rMx.OVERLAY_TOGGLED, {
                enabled: e,
                setting_type: 'overlay toggled - legacy'
            });
    }
    return (
        !(function () {
            let e = v(b);
            !a().isEqual(e, b) && (E.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, e), (b = e));
        })(),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.FormSection, {
                    className: t,
                    tag: c.FormTitleTags.H1,
                    title: n ? N.intl.string(N.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, i.jsxs)('div', {
                            className: A.enableOverlaySection,
                            children: [
                                (0, g.H)()
                                    ? (0, i.jsxs)(c.FormItem, {
                                          title: N.intl.string(N.t.XkaTrq),
                                          className: A.enableOverlayItem,
                                          children: [
                                              (0, i.jsx)(c.FormSwitch, {
                                                  className: A.enableSwitch,
                                                  value: s,
                                                  hideBorder: !0,
                                                  onChange: M,
                                                  children: N.intl.string(N.t.vSP6c3)
                                              }),
                                              (0, i.jsx)(c.FormSwitch, {
                                                  className: A.enableSwitch,
                                                  value: l,
                                                  disabled: Z || !s,
                                                  note: Z ? N.intl.string(N.t.Eb0lnJ) : null,
                                                  hideBorder: !0,
                                                  onChange: k,
                                                  children: N.intl.string(N.t.znUpRE)
                                              })
                                          ]
                                      })
                                    : (0, i.jsx)(c.FormItem, {
                                          title: N.intl.string(N.t.XkaTrq),
                                          className: A.enableOverlayItem,
                                          children: (0, i.jsx)(c.FormSwitch, {
                                              className: A.enableSwitch,
                                              value: s,
                                              disabled: Z,
                                              note: Z ? N.intl.string(N.t.Eb0lnJ) : null,
                                              hideBorder: !0,
                                              onChange: M,
                                              children: N.intl.string(N.t.vSP6c3)
                                          })
                                      }),
                                (0, i.jsx)(c.FormItem, {
                                    title: N.intl.string(N.t.VsAZcH),
                                    className: A.enableOverlayItem,
                                    children: (0, i.jsx)(m.Z, {
                                        disabled: !s,
                                        defaultValue: null != B ? B.shortcut : [],
                                        onChange: function (e) {
                                            r()(null != B, 'Keybind should never be undefined'),
                                                d.Z.setKeybind({
                                                    ...B,
                                                    shortcut: e
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(j, {
                            title: N.intl.string(N.t.dnvZSk),
                            children: (0, i.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: N.intl.string(N.t.YcOxtr),
                                        value: I.ipw.LARGE
                                    },
                                    {
                                        name: N.intl.string(N.t.BKIKq6),
                                        value: I.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setAvatarSizeMode(t);
                                },
                                value: f
                            })
                        }),
                        (0, i.jsx)(j, {
                            title: N.intl.string(N.t.J0dpcH),
                            children: (0, i.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: N.intl.string(N.t.nBmDra),
                                        value: I.wC$.ALWAYS
                                    },
                                    {
                                        name: N.intl.string(N.t['2OvIZW']),
                                        value: I.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: N.intl.string(N.t.ekjlPD),
                                        value: I.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: O
                            })
                        }),
                        (0, i.jsx)(j, {
                            title: N.intl.string(N.t.swsWWF),
                            children: (0, i.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: N.intl.string(N.t.nBmDra),
                                        value: I.OYC.ALWAYS
                                    },
                                    {
                                        name: N.intl.string(N.t['2OvIZW']),
                                        value: I.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayUserMode(t);
                                },
                                value: R
                            })
                        }),
                        L &&
                            (0, i.jsx)(j, {
                                children: (0, i.jsx)(c.FormSwitch, {
                                    value: y,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: N.intl.string(N.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(c.FormSection, {
                    tag: c.FormTitleTags.H1,
                    title: N.intl.string(N.t['3GMnLi']),
                    className: A.notificationSection,
                    children: [
                        F
                            ? null
                            : (0, i.jsx)(j, {
                                  title: N.intl.string(N.t.IQv8Eh),
                                  children: (0, i.jsx)('div', {
                                      className: A.notificationSettings,
                                      children: (0, i.jsx)(p.Z, {
                                          position: P,
                                          onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                      })
                                  })
                              }),
                        (0, i.jsx)(j, {
                            children: (0, i.jsx)(c.FormSwitch, {
                                value: P !== I._vf.DISABLED && D === I.Ypu.ENABLED,
                                disabled: P === I._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: t } = I.Ypu;
                                    u.Z.setTextChatNotificationMode(D === e ? t : e);
                                },
                                hideBorder: !0,
                                children: N.intl.string(N.t.Fy5kPj)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
