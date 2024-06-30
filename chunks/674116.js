s.d(t, {
    Z: function () {
        return B;
    }
}), s(653041);
var n = s(735250), a = s(470079), i = s(120356), r = s.n(i), o = s(442837), l = s(481060), c = s(846027), d = s(230711), _ = s(921801), E = s(131951), u = s(663389), T = s(153124), I = s(63063), S = s(894939), N = s(321499), C = s(710808), m = s(625205), A = s(325808), h = s(823087), g = s(546997), O = s(167540), p = s(803567), R = s(269876), x = s(976758), M = s(526761), D = s(726985), f = s(981631), P = s(65154), L = s(689938), Z = s(331651);
let b = (0, T.hQ)(), v = ''.concat(I.Z.getArticleURL(f.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function j(e, t, s) {
    (0, l.openModal)(a => (0, n.jsx)(l.ConfirmModal, {
        header: e,
        confirmText: L.Z.Messages.OKAY,
        cancelText: L.Z.Messages.CANCEL,
        onConfirm: s,
        ...a,
        children: (0, n.jsx)(l.Text, {
            variant: 'text-md/normal',
            children: t
        })
    }));
}
function B() {
    let {
            inputMode: e,
            qosEnabled: t,
            attenuation: s,
            attenuateWhileSpeakingSelf: i,
            attenuateWhileSpeakingOthers: T,
            audioSubsystem: I,
            silenceWarning: f,
            legacyAudioSubsystemSupported: B,
            experimentalAudioSubsystemSupported: U
        } = (0, o.cj)([E.Z], () => ({
            inputMode: E.Z.getMode(),
            qosEnabled: E.Z.getQoS(),
            attenuation: E.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: E.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: E.Z.getAttenuateWhileSpeakingOthers(),
            audioSubsystem: E.Z.getAudioSubsystem(),
            silenceWarning: E.Z.getEnableSilenceWarning(),
            legacyAudioSubsystemSupported: E.Z.supports(P.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: E.Z.supports(P.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            qosSupported: E.Z.supports(P.AN.QOS),
            attenuationSupported: E.Z.supports(P.AN.ATTENUATION)
        })), G = (0, o.e7)([u.Z], () => u.Z.getSubsection()), F = a.createRef();
    return a.useEffect(() => {
        if (G === M.GA) {
            var e;
            null == F || null === (e = F.current) || void 0 === e || e.scrollIntoView(), d.Z.clearSubsection();
        }
    }, [
        F,
        G
    ]), (0, n.jsxs)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: L.Z.Messages.VOICE_SETTINGS,
        children: [
            (0, n.jsx)(_.F, {
                setting: D.s6.VOICE_AND_VIDEO_DEVICES,
                children: (0, n.jsx)(m.Z, {})
            }),
            (0, n.jsx)(_.F, {
                setting: D.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                children: (0, n.jsx)(x.Z, {})
            }),
            (0, n.jsxs)(_.F, {
                setting: D.s6.VOICE_AND_VIDEO_MIC_TEST,
                children: [
                    (0, n.jsx)(h.Z, {}),
                    (0, n.jsx)(l.FormText, {
                        className: Z.marginBottom20,
                        type: l.FormText.Types.DESCRIPTION,
                        children: L.Z.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_GUIDE.format({ guideURL: v })
                    }),
                    (0, n.jsx)(l.FormDivider, { className: r()(Z.marginBottom20) })
                ]
            }),
            (0, n.jsx)(_.F, {
                setting: D.s6.VOICE_AND_VIDEO_INPUT_MODE,
                children: (0, n.jsx)(A.Z, {})
            }),
            (0, n.jsxs)(_.F, {
                setting: D.s6.VOICE_AND_VIDEO_SENSITIVITY,
                children: [
                    e === P.pM.VOICE_ACTIVITY && (0, n.jsx)(R.Z, {}),
                    (0, n.jsx)(l.FormDivider, { className: Z.marginBottom40 })
                ]
            }),
            (0, n.jsx)(_.F, {
                setting: D.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, n.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: F
                })
            }),
            (0, n.jsx)(_.F, {
                setting: D.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, n.jsx)(S.Z, {})
            }),
            (0, n.jsx)(_.F, {
                setting: D.s6.VOICE_AND_VIDEO_VIDEO,
                children: (0, n.jsx)(O.Z, {})
            }),
            (0, n.jsx)(_.F, {
                setting: D.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, n.jsxs)(l.HeadingLevel, {
                    component: (0, n.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H1,
                        className: Z.marginBottom20,
                        children: L.Z.Messages.SETTINGS_ADVANCED
                    }),
                    children: [
                        (0, n.jsx)(N.Z, {}),
                        (0, n.jsx)(_.F, {
                            setting: D.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, n.jsx)(p.Z, {})
                        }),
                        (0, n.jsx)(_.F, {
                            setting: D.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
                            children: (0, n.jsx)(l.FormSection, {
                                className: Z.marginBottom20,
                                title: L.Z.Messages.FORM_LABEL_QOS,
                                children: (0, n.jsx)(l.FormSwitch, {
                                    value: t,
                                    onChange: e => c.Z.setQoS(e),
                                    note: L.Z.Messages.FORM_HELP_QOS,
                                    children: L.Z.Messages.FORM_CHECKBOX_QOS
                                })
                            })
                        }),
                        (0, n.jsx)(_.F, {
                            setting: D.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
                            children: (0, n.jsxs)(l.FormSection, {
                                className: Z.marginBottom20,
                                children: [
                                    (0, n.jsx)(l.FormTitle, {
                                        id: b,
                                        tag: l.FormTitleTags.H5,
                                        className: Z.marginBottom8,
                                        children: L.Z.Messages.FORM_LABEL_ATTENUATION
                                    }),
                                    (0, n.jsx)(l.Slider, {
                                        initialValue: s,
                                        onValueChange: e => {
                                            c.Z.setAttenuation(e, i, T);
                                        },
                                        'aria-labelledby': b
                                    }),
                                    (0, n.jsx)(l.FormText, {
                                        className: Z.marginBottom20,
                                        type: l.FormText.Types.DESCRIPTION,
                                        children: L.Z.Messages.FORM_HELP_ATTENUATION
                                    }),
                                    (0, n.jsx)(l.FormDivider, { className: Z.marginBottom20 }),
                                    (0, n.jsx)(l.FormSwitch, {
                                        value: i,
                                        onChange: e => c.Z.setAttenuation(s, e, T),
                                        children: L.Z.Messages.ATTENUATE_WHILE_SPEAKING_SELF
                                    }),
                                    (0, n.jsx)(l.FormSwitch, {
                                        value: T,
                                        onChange: e => c.Z.setAttenuation(s, i, e),
                                        children: L.Z.Messages.ATTENUATE_WHILE_SPEAKING_OTHERS
                                    })
                                ]
                            })
                        }),
                        (0, n.jsx)(_.F, {
                            setting: D.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
                            children: (0, n.jsxs)(l.FormSection, {
                                className: Z.marginBottom20,
                                title: L.Z.Messages.FORM_LABEL_SUBSYSTEM,
                                children: [
                                    (0, n.jsx)(l.SingleSelect, {
                                        className: Z.marginBottom20,
                                        value: I,
                                        options: function (e, t) {
                                            let s = [{
                                                    value: P.iA.STANDARD,
                                                    label: 'Standard'
                                                }];
                                            return e && s.push({
                                                value: P.iA.LEGACY,
                                                label: 'Legacy'
                                            }), t && s.push({
                                                value: P.iA.EXPERIMENTAL,
                                                label: 'Experimental'
                                            }), s;
                                        }(B, U),
                                        onChange: e => {
                                            j(L.Z.Messages.SWITCH_SUBSYSTEM, L.Z.Messages.SWITCH_SUBSYSTEM_BODY, () => c.Z.setAudioSubsystem(e));
                                        }
                                    }),
                                    (0, n.jsx)(l.FormDivider, { className: Z.marginBottom20 })
                                ]
                            })
                        }),
                        (0, n.jsxs)(_.F, {
                            setting: D.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
                            children: [
                                (0, n.jsx)(g.Z, {}),
                                (0, n.jsx)(l.FormSection, {
                                    className: Z.marginBottom20,
                                    title: L.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
                                    children: (0, n.jsx)(l.FormSwitch, {
                                        value: f,
                                        onChange: e => c.Z.setSilenceWarning(e),
                                        children: L.Z.Messages.DISPLAY_SILENCE_WARNING
                                    })
                                })
                            ]
                        }),
                        (0, n.jsx)(_.F, {
                            setting: D.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, n.jsx)(C.Z, {})
                        }),
                        (0, n.jsx)(_.F, {
                            setting: D.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
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
    });
}
