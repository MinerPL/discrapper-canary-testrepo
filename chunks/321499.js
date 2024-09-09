t.d(s, {
    Z: function () {
        return O;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(780384),
    c = t(481060),
    d = t(846027),
    _ = t(600164),
    u = t(921801),
    E = t(131951),
    T = t(210887),
    S = t(996073),
    I = t(526761),
    N = t(726985),
    m = t(689938),
    C = t(224499);
let A = t(651714),
    g = t(297166);
function h() {
    let { experimentalEncoders: e } = (0, o.cj)([E.Z], () => ({ experimentalEncoders: E.Z.getExperimentalEncoders() }));
    return (0, n.jsx)(u.F, {
        setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, n.jsx)(c.FormSwitch, {
            className: r()(C.marginTop8, C.marginBottom20),
            value: e,
            onChange: (e) => d.Z.setExperimentalEncoders(e),
            disabled: !1,
            children: m.Z.Messages.EXPERIMENTAL_ENCODERS
        })
    });
}
function O() {
    let e = (0, o.e7)([T.Z], () => T.Z.theme),
        { openH264: s, hardwareEncoding: t } = (0, o.cj)([E.Z], () => ({
            openH264: E.Z.getOpenH264(),
            hardwareEncoding: E.Z.getHardwareEncoding()
        })),
        i = a.useRef(null);
    return (
        (0, S.Z)(i, I.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(u.F, {
                    setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO,
                    children: (0, n.jsx)(c.FormSection, {
                        className: C.marginBottom20,
                        title: m.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE,
                        children: (0, n.jsx)(c.FormNotice, {
                            className: C.marginBottom20,
                            type: c.FormNoticeTypes.PRIMARY,
                            imageData: {
                                src: (0, l.ap)(e) ? A : g,
                                width: 70,
                                height: 40
                            },
                            align: _.Z.Align.CENTER,
                            body: m.Z.Messages.USER_SETTINGS_VOICE_CODEC_DESCRIPTION
                        })
                    })
                }),
                (0, n.jsx)(u.F, {
                    setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                    children: (0, n.jsxs)(c.FormSection, {
                        className: C.marginBottom20,
                        title: m.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
                        children: [
                            (0, n.jsx)(u.F, {
                                setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                                children: (0, n.jsx)(c.FormSwitch, {
                                    className: r()(C.marginTop8, C.marginBottom20),
                                    value: s,
                                    onChange: (e) => d.Z.setOpenH264(e),
                                    disabled: !1,
                                    children: m.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264
                                })
                            }),
                            (0, n.jsx)('div', {
                                style: { scrollMarginTop: '48px' },
                                ref: i
                            }),
                            (0, n.jsx)(u.F, {
                                setting: N.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                                children: (0, n.jsx)(c.FormSwitch, {
                                    className: r()(C.marginTop8, C.marginBottom20),
                                    value: t,
                                    onChange: (e) => d.Z.setHardwareEncoding(e),
                                    note: m.Z.Messages.FORM_HELP_HARDWARE_ENCODING,
                                    children: m.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING
                                })
                            }),
                            (0, n.jsx)(h, {})
                        ]
                    })
                })
            ]
        })
    );
}
