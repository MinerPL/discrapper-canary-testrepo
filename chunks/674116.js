t.d(s, {
    Z: function () {
        return F;
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
    u = t(111672),
    E = t(921801),
    T = t(131951),
    S = t(663389),
    I = t(63063),
    N = t(358085),
    m = t(894939),
    C = t(321499),
    A = t(710808),
    g = t(625205),
    h = t(325808),
    O = t(823087),
    p = t(546997),
    R = t(520384),
    x = t(167540),
    f = t(803567),
    M = t(269876),
    D = t(976758),
    P = t(526761),
    L = t(726985),
    b = t(981631),
    Z = t(65154),
    v = t(689938),
    j = t(224499);
let B = (0, _.hQ)(),
    U = ''.concat(I.Z.getArticleURL(b.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function G(e, s, t) {
    (0, l.openModal)((a) =>
        (0, n.jsx)(l.ConfirmModal, {
            header: e,
            confirmText: v.Z.Messages.OKAY,
            cancelText: v.Z.Messages.CANCEL,
            onConfirm: t,
            ...a,
            children: (0, n.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: s
            })
        })
    );
}
function F() {
    let {
            inputMode: e,
            qosEnabled: s,
            attenuation: t,
            attenuateWhileSpeakingSelf: i,
            attenuateWhileSpeakingOthers: _,
            audioSubsystem: I,
            silenceWarning: b,
            legacyAudioSubsystemSupported: F,
            experimentalAudioSubsystemSupported: y,
            sidechainEnabled: V,
            sidechainStrength: Y
        } = (0, o.cj)([T.Z], () => ({
            inputMode: T.Z.getMode(),
            qosEnabled: T.Z.getQoS(),
            attenuation: T.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: T.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: T.Z.getAttenuateWhileSpeakingOthers(),
            audioSubsystem: T.Z.getAudioSubsystem(),
            silenceWarning: T.Z.getEnableSilenceWarning(),
            legacyAudioSubsystemSupported: T.Z.supports(Z.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: T.Z.supports(Z.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            sidechainEnabled: T.Z.getSidechainCompression(),
            sidechainStrength: T.Z.getSidechainCompressionStrength()
        })),
        w = (0, o.e7)([S.Z], () => S.Z.getSubsection()),
        k = a.createRef();
    a.useEffect(() => {
        if (w === P.GA) {
            var e;
            null == k || null === (e = k.current) || void 0 === e || e.scrollIntoView(), d.Z.clearSubsection();
        }
    }, [k, w]);
    let H = u.Z.getCurrentConfig({ location: 'UserSettingsVoiceProcessing' }).sidechainAvailable && !(0, N.isWeb)();
    return (0, n.jsxs)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: v.Z.Messages.VOICE_SETTINGS,
        children: [
            (0, n.jsx)(E.F, {
                setting: L.s6.VOICE_AND_VIDEO_DEVICES,
                children: (0, n.jsx)(g.Z, {})
            }),
            (0, n.jsx)(E.F, {
                setting: L.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                children: (0, n.jsx)(D.Z, {})
            }),
            (0, n.jsxs)(E.F, {
                setting: L.s6.VOICE_AND_VIDEO_MIC_TEST,
                children: [
                    (0, n.jsx)(O.Z, {}),
                    (0, n.jsx)(l.FormText, {
                        className: j.marginBottom20,
                        type: l.FormText.Types.DESCRIPTION,
                        children: v.Z.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_GUIDE.format({ guideURL: U })
                    }),
                    (0, n.jsx)(l.FormDivider, { className: r()(j.marginBottom20) })
                ]
            }),
            (0, n.jsx)(E.F, {
                setting: L.s6.VOICE_AND_VIDEO_INPUT_MODE,
                children: (0, n.jsx)(h.Z, {})
            }),
            (0, n.jsxs)(E.F, {
                setting: L.s6.VOICE_AND_VIDEO_SENSITIVITY,
                children: [e === Z.pM.VOICE_ACTIVITY && (0, n.jsx)(M.Z, {}), (0, n.jsx)(l.FormDivider, { className: j.marginBottom40 })]
            }),
            (0, n.jsx)(E.F, {
                setting: L.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, n.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: k
                })
            }),
            (0, n.jsx)(E.F, {
                setting: L.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, n.jsx)(m.Z, {})
            }),
            (0, n.jsx)(E.F, {
                setting: L.s6.VOICE_AND_VIDEO_VIDEO,
                children: (0, n.jsx)(x.Z, {})
            }),
            (0, n.jsx)(E.F, {
                setting: L.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, n.jsxs)(l.HeadingLevel, {
                    component: (0, n.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H1,
                        className: j.marginBottom20,
                        children: v.Z.Messages.SETTINGS_ADVANCED
                    }),
                    children: [
                        (0, n.jsx)(C.Z, {}),
                        (0, n.jsx)(E.F, {
                            setting: L.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, n.jsx)(f.Z, {})
                        }),
                        (0, n.jsx)(R.Z, {}),
                        (0, n.jsx)(E.F, {
                            setting: L.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
                            children: (0, n.jsx)(l.FormSection, {
                                className: j.marginBottom20,
                                title: v.Z.Messages.FORM_LABEL_QOS,
                                children: (0, n.jsx)(l.FormSwitch, {
                                    value: s,
                                    onChange: (e) => c.Z.setQoS(e),
                                    note: v.Z.Messages.FORM_HELP_QOS,
                                    children: v.Z.Messages.FORM_CHECKBOX_QOS
                                })
                            })
                        }),
                        (0, n.jsx)(E.F, {
                            setting: L.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
                            children: (0, n.jsxs)(l.FormSection, {
                                className: j.marginBottom20,
                                children: [
                                    (0, n.jsx)(l.FormTitle, {
                                        id: B,
                                        tag: l.FormTitleTags.H5,
                                        className: j.marginBottom8,
                                        children: v.Z.Messages.FORM_LABEL_ATTENUATION
                                    }),
                                    (0, n.jsx)(l.Slider, {
                                        initialValue: t,
                                        onValueChange: (e) => {
                                            c.Z.setAttenuation(e, i, _);
                                        },
                                        'aria-labelledby': B
                                    }),
                                    (0, n.jsx)(l.FormText, {
                                        className: j.marginBottom20,
                                        type: l.FormText.Types.DESCRIPTION,
                                        children: v.Z.Messages.FORM_HELP_ATTENUATION
                                    }),
                                    (0, n.jsx)(l.FormDivider, { className: j.marginBottom20 }),
                                    (0, n.jsx)(l.FormSwitch, {
                                        value: i,
                                        onChange: (e) => c.Z.setAttenuation(t, e, _),
                                        children: v.Z.Messages.ATTENUATE_WHILE_SPEAKING_SELF
                                    }),
                                    (0, n.jsx)(l.FormSwitch, {
                                        value: _,
                                        onChange: (e) => c.Z.setAttenuation(t, i, e),
                                        children: v.Z.Messages.ATTENUATE_WHILE_SPEAKING_OTHERS
                                    })
                                ]
                            })
                        }),
                        H &&
                            (0, n.jsx)(E.F, {
                                setting: L.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
                                children: (0, n.jsxs)(l.FormSection, {
                                    className: j.marginBottom20,
                                    children: [
                                        (0, n.jsx)(l.FormSwitch, {
                                            className: r()(j.marginTop8, j.marginBottom20),
                                            value: V,
                                            onChange: (e) => c.Z.setSidechainCompression(e),
                                            note: v.Z.Messages.USER_SETTINGS_SIDECHAIN_COMPRESSION,
                                            children: v.Z.Messages.SIDECHAIN_COMPRESSION
                                        }),
                                        (0, n.jsx)(l.FormTitle, {
                                            tag: l.FormTitleTags.H5,
                                            className: j.marginBottom8,
                                            children: v.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH
                                        }),
                                        (0, n.jsx)(l.Slider, {
                                            initialValue: Y,
                                            minValue: 1,
                                            onValueChange: (e) => c.Z.setSidechainCompressionStrength(e)
                                        })
                                    ]
                                })
                            }),
                        (0, n.jsx)(E.F, {
                            setting: L.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
                            children: (0, n.jsxs)(l.FormSection, {
                                className: j.marginBottom20,
                                title: v.Z.Messages.FORM_LABEL_SUBSYSTEM,
                                children: [
                                    (0, n.jsx)(l.SingleSelect, {
                                        className: j.marginBottom20,
                                        value: I,
                                        options: (function (e, s) {
                                            let t = [
                                                {
                                                    value: Z.iA.STANDARD,
                                                    label: 'Standard'
                                                }
                                            ];
                                            return (
                                                e &&
                                                    t.push({
                                                        value: Z.iA.LEGACY,
                                                        label: 'Legacy'
                                                    }),
                                                s &&
                                                    t.push({
                                                        value: Z.iA.EXPERIMENTAL,
                                                        label: 'Experimental'
                                                    }),
                                                t
                                            );
                                        })(F, y),
                                        onChange: (e) => {
                                            G(v.Z.Messages.SWITCH_SUBSYSTEM, v.Z.Messages.SWITCH_SUBSYSTEM_BODY, () => c.Z.setAudioSubsystem(e));
                                        }
                                    }),
                                    (0, n.jsx)(l.FormDivider, { className: j.marginBottom20 })
                                ]
                            })
                        }),
                        (0, n.jsxs)(E.F, {
                            setting: L.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
                            children: [
                                (0, n.jsx)(p.Z, {}),
                                (0, n.jsx)(l.FormSection, {
                                    className: j.marginBottom20,
                                    title: v.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
                                    children: (0, n.jsx)(l.FormSwitch, {
                                        value: b,
                                        onChange: (e) => c.Z.setSilenceWarning(e),
                                        children: v.Z.Messages.DISPLAY_SILENCE_WARNING
                                    })
                                })
                            ]
                        }),
                        (0, n.jsx)(E.F, {
                            setting: L.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, n.jsx)(A.Z, {})
                        }),
                        (0, n.jsx)(E.F, {
                            setting: L.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, n.jsx)(l.FormItem, {
                                children: (0, n.jsx)(l.Button, {
                                    look: l.Button.Looks.OUTLINED,
                                    color: l.Button.Colors.RED,
                                    onClick: () => {
                                        G(v.Z.Messages.RESET_VOICE_SETTINGS, v.Z.Messages.RESET_VOICE_SETTINGS_BODY, c.Z.reset);
                                    },
                                    size: l.Button.Sizes.SMALL,
                                    children: v.Z.Messages.RESET_VOICE_SETTINGS
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
