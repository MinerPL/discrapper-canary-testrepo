t.d(s, {
    Z: function () {
        return B;
    }
}),
    t(653041);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(846027),
    d = t(230711),
    _ = t(313201),
    E = t(921801),
    u = t(131951),
    I = t(663389),
    T = t(63063),
    S = t(894939),
    N = t(321499),
    C = t(710808),
    m = t(625205),
    A = t(325808),
    O = t(823087),
    g = t(546997),
    h = t(167540),
    p = t(803567),
    R = t(269876),
    x = t(976758),
    M = t(526761),
    f = t(726985),
    D = t(981631),
    P = t(65154),
    L = t(689938),
    b = t(224499);
let Z = (0, _.hQ)(),
    v = ''.concat(T.Z.getArticleURL(D.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function j(e, s, t) {
    (0, l.openModal)((a) =>
        (0, n.jsx)(l.ConfirmModal, {
            header: e,
            confirmText: L.Z.Messages.OKAY,
            cancelText: L.Z.Messages.CANCEL,
            onConfirm: t,
            ...a,
            children: (0, n.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: s
            })
        })
    );
}
function B() {
    let {
            inputMode: e,
            qosEnabled: s,
            attenuation: t,
            attenuateWhileSpeakingSelf: i,
            attenuateWhileSpeakingOthers: _,
            audioSubsystem: T,
            silenceWarning: D,
            legacyAudioSubsystemSupported: B,
            experimentalAudioSubsystemSupported: U
        } = (0, o.cj)([u.Z], () => ({
            inputMode: u.Z.getMode(),
            qosEnabled: u.Z.getQoS(),
            attenuation: u.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: u.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: u.Z.getAttenuateWhileSpeakingOthers(),
            audioSubsystem: u.Z.getAudioSubsystem(),
            silenceWarning: u.Z.getEnableSilenceWarning(),
            legacyAudioSubsystemSupported: u.Z.supports(P.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: u.Z.supports(P.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            qosSupported: u.Z.supports(P.AN.QOS),
            attenuationSupported: u.Z.supports(P.AN.ATTENUATION)
        })),
        G = (0, o.e7)([I.Z], () => I.Z.getSubsection()),
        F = a.createRef();
    return (
        a.useEffect(() => {
            if (G === M.GA) {
                var e;
                null == F || null === (e = F.current) || void 0 === e || e.scrollIntoView(), d.Z.clearSubsection();
            }
        }, [F, G]),
        (0, n.jsxs)(l.FormSection, {
            tag: l.FormTitleTags.H1,
            title: L.Z.Messages.VOICE_SETTINGS,
            children: [
                (0, n.jsx)(E.F, {
                    setting: f.s6.VOICE_AND_VIDEO_DEVICES,
                    children: (0, n.jsx)(m.Z, {})
                }),
                (0, n.jsx)(E.F, {
                    setting: f.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                    children: (0, n.jsx)(x.Z, {})
                }),
                (0, n.jsxs)(E.F, {
                    setting: f.s6.VOICE_AND_VIDEO_MIC_TEST,
                    children: [
                        (0, n.jsx)(O.Z, {}),
                        (0, n.jsx)(l.FormText, {
                            className: b.marginBottom20,
                            type: l.FormText.Types.DESCRIPTION,
                            children: L.Z.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_GUIDE.format({ guideURL: v })
                        }),
                        (0, n.jsx)(l.FormDivider, { className: r()(b.marginBottom20) })
                    ]
                }),
                (0, n.jsx)(E.F, {
                    setting: f.s6.VOICE_AND_VIDEO_INPUT_MODE,
                    children: (0, n.jsx)(A.Z, {})
                }),
                (0, n.jsxs)(E.F, {
                    setting: f.s6.VOICE_AND_VIDEO_SENSITIVITY,
                    children: [e === P.pM.VOICE_ACTIVITY && (0, n.jsx)(R.Z, {}), (0, n.jsx)(l.FormDivider, { className: b.marginBottom40 })]
                }),
                (0, n.jsx)(E.F, {
                    setting: f.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                    children: (0, n.jsx)('div', {
                        style: { scrollMarginTop: '48px' },
                        ref: F
                    })
                }),
                (0, n.jsx)(E.F, {
                    setting: f.s6.VOICE_AND_VIDEO_SOUNDS,
                    children: (0, n.jsx)(S.Z, {})
                }),
                (0, n.jsx)(E.F, {
                    setting: f.s6.VOICE_AND_VIDEO_VIDEO,
                    children: (0, n.jsx)(h.Z, {})
                }),
                (0, n.jsx)(E.F, {
                    setting: f.s6.VOICE_AND_VIDEO_ADVANCED,
                    children: (0, n.jsxs)(l.HeadingLevel, {
                        component: (0, n.jsx)(l.FormTitle, {
                            tag: l.FormTitleTags.H1,
                            className: b.marginBottom20,
                            children: L.Z.Messages.SETTINGS_ADVANCED
                        }),
                        children: [
                            (0, n.jsx)(N.Z, {}),
                            (0, n.jsx)(E.F, {
                                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                                children: (0, n.jsx)(p.Z, {})
                            }),
                            (0, n.jsx)(E.F, {
                                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
                                children: (0, n.jsx)(l.FormSection, {
                                    className: b.marginBottom20,
                                    title: L.Z.Messages.FORM_LABEL_QOS,
                                    children: (0, n.jsx)(l.FormSwitch, {
                                        value: s,
                                        onChange: (e) => c.Z.setQoS(e),
                                        note: L.Z.Messages.FORM_HELP_QOS,
                                        children: L.Z.Messages.FORM_CHECKBOX_QOS
                                    })
                                })
                            }),
                            (0, n.jsx)(E.F, {
                                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
                                children: (0, n.jsxs)(l.FormSection, {
                                    className: b.marginBottom20,
                                    children: [
                                        (0, n.jsx)(l.FormTitle, {
                                            id: Z,
                                            tag: l.FormTitleTags.H5,
                                            className: b.marginBottom8,
                                            children: L.Z.Messages.FORM_LABEL_ATTENUATION
                                        }),
                                        (0, n.jsx)(l.Slider, {
                                            initialValue: t,
                                            onValueChange: (e) => {
                                                c.Z.setAttenuation(e, i, _);
                                            },
                                            'aria-labelledby': Z
                                        }),
                                        (0, n.jsx)(l.FormText, {
                                            className: b.marginBottom20,
                                            type: l.FormText.Types.DESCRIPTION,
                                            children: L.Z.Messages.FORM_HELP_ATTENUATION
                                        }),
                                        (0, n.jsx)(l.FormDivider, { className: b.marginBottom20 }),
                                        (0, n.jsx)(l.FormSwitch, {
                                            value: i,
                                            onChange: (e) => c.Z.setAttenuation(t, e, _),
                                            children: L.Z.Messages.ATTENUATE_WHILE_SPEAKING_SELF
                                        }),
                                        (0, n.jsx)(l.FormSwitch, {
                                            value: _,
                                            onChange: (e) => c.Z.setAttenuation(t, i, e),
                                            children: L.Z.Messages.ATTENUATE_WHILE_SPEAKING_OTHERS
                                        })
                                    ]
                                })
                            }),
                            (0, n.jsx)(E.F, {
                                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
                                children: (0, n.jsxs)(l.FormSection, {
                                    className: b.marginBottom20,
                                    title: L.Z.Messages.FORM_LABEL_SUBSYSTEM,
                                    children: [
                                        (0, n.jsx)(l.SingleSelect, {
                                            className: b.marginBottom20,
                                            value: T,
                                            options: (function (e, s) {
                                                let t = [
                                                    {
                                                        value: P.iA.STANDARD,
                                                        label: 'Standard'
                                                    }
                                                ];
                                                return (
                                                    e &&
                                                        t.push({
                                                            value: P.iA.LEGACY,
                                                            label: 'Legacy'
                                                        }),
                                                    s &&
                                                        t.push({
                                                            value: P.iA.EXPERIMENTAL,
                                                            label: 'Experimental'
                                                        }),
                                                    t
                                                );
                                            })(B, U),
                                            onChange: (e) => {
                                                j(L.Z.Messages.SWITCH_SUBSYSTEM, L.Z.Messages.SWITCH_SUBSYSTEM_BODY, () => c.Z.setAudioSubsystem(e));
                                            }
                                        }),
                                        (0, n.jsx)(l.FormDivider, { className: b.marginBottom20 })
                                    ]
                                })
                            }),
                            (0, n.jsxs)(E.F, {
                                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
                                children: [
                                    (0, n.jsx)(g.Z, {}),
                                    (0, n.jsx)(l.FormSection, {
                                        className: b.marginBottom20,
                                        title: L.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
                                        children: (0, n.jsx)(l.FormSwitch, {
                                            value: D,
                                            onChange: (e) => c.Z.setSilenceWarning(e),
                                            children: L.Z.Messages.DISPLAY_SILENCE_WARNING
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsx)(E.F, {
                                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                                children: (0, n.jsx)(C.Z, {})
                            }),
                            (0, n.jsx)(E.F, {
                                setting: f.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                                children: (0, n.jsx)(l.FormItem, {
                                    children: (0, n.jsx)(l.Button, {
                                        look: l.Button.Looks.OUTLINED,
                                        color: l.Button.Colors.RED,
                                        onClick: () => {
                                            j(L.Z.Messages.RESET_VOICE_SETTINGS, L.Z.Messages.RESET_VOICE_SETTINGS_BODY, c.Z.reset);
                                        },
                                        size: l.Button.Sizes.SMALL,
                                        children: L.Z.Messages.RESET_VOICE_SETTINGS
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    );
}
