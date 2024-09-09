t.d(s, {
    Z: function () {
        return P;
    }
}),
    t(653041);
var n,
    a,
    i = t(735250);
t(470079);
var r = t(120356),
    o = t.n(r),
    l = t(442837),
    c = t(780384),
    d = t(481060),
    _ = t(846027),
    u = t(600164),
    E = t(313201),
    T = t(921801),
    S = t(463395),
    I = t(131951),
    N = t(626135),
    m = t(63063),
    C = t(210887),
    A = t(726985),
    g = t(981631),
    h = t(689938),
    O = t(224499);
let p = t(775322),
    R = t(853453),
    x = (0, E.hQ)();
((a = n || (n = {}))[(a.NONE = 0)] = 'NONE'), (a[(a.STANDARD = 1)] = 'STANDARD'), (a[(a.KRISP = 2)] = 'KRISP');
let f = {
    page: g.ZY5.USER_SETTINGS,
    section: g.jXE.SETTINGS_VOICE_AND_VIDEO
};
function M(e) {
    let s = e.currentTarget;
    N.default.track(g.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: s.text,
        href: s.href,
        location: {
            page: g.ZY5.USER_SETTINGS,
            section: g.jXE.SETTINGS_VOICE_AND_VIDEO
        }
    });
}
function D() {
    let e = (0, l.e7)([C.Z], () => C.Z.theme),
        {
            noiseCancellation: s,
            noiseSuppression: t,
            noiseSuppressionSupported: n,
            noiseCancellationSupported: a
        } = (0, l.cj)([I.Z], () => ({
            noiseCancellation: I.Z.getNoiseCancellation(),
            noiseSuppression: I.Z.getNoiseSuppression(),
            noiseSuppressionSupported: I.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: I.Z.isNoiseCancellationSupported()
        }));
    if (!n && !a) return null;
    let r = [];
    return (
        a &&
            r.push({
                name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_KRISP,
                value: 2
            }),
        n &&
            r.push({
                name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_STANDARD,
                value: 1
            }),
        r.push({
            name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DISABLED,
            value: 0
        }),
        (0, i.jsxs)(d.FormSection, {
            className: O.marginBottom20,
            children: [
                (0, i.jsx)(d.FormTitle, {
                    id: x,
                    tag: d.FormTitleTags.H3,
                    className: O.marginBottom8,
                    children: h.Z.Messages.NOISE_SUPPRESSION
                }),
                (0, i.jsx)(d.FormText, {
                    type: d.FormText.Types.DESCRIPTION,
                    className: O.marginBottom8,
                    children: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DESCRIPTION
                }),
                (0, i.jsx)(d.RadioGroup, {
                    options: r,
                    onChange: (e) => {
                        _.Z.setNoiseCancellation(2 === e.value, f), _.Z.setNoiseSuppression(1 === e.value, f);
                    },
                    value: s ? 2 : t ? 1 : 0
                }),
                a &&
                    (0, i.jsx)(d.FormNotice, {
                        className: O.marginBottom8,
                        type: d.FormNoticeTypes.PRIMARY,
                        imageData: {
                            src: (0, c.ap)(e) ? p : R,
                            width: 70,
                            height: 40
                        },
                        align: u.Z.Align.CENTER,
                        body: (0, i.jsx)(d.Anchor, {
                            href: m.Z.getArticleURL(g.BhN.NOISE_SUPPRESSION),
                            onClick: M,
                            children: h.Z.Messages.LEARN_MORE
                        })
                    }),
                (0, i.jsx)(d.FormDivider, {})
            ]
        })
    );
}
function P() {
    let {
            inputMode: e,
            inputDeviceId: s,
            echoCancellation: t,
            automaticGainControl: n,
            vadAutoThreshold: a,
            vadUseKrisp: r
        } = (0, l.cj)([I.Z], () => ({
            inputMode: I.Z.getMode(),
            inputDeviceId: I.Z.getInputDeviceId(),
            echoCancellation: I.Z.getEchoCancellation(),
            automaticGainControl: I.Z.getAutomaticGainControl(),
            vadAutoThreshold: I.Z.getModeOptions().autoThreshold,
            vadUseKrisp: I.Z.getModeOptions().vadUseKrisp
        })),
        {
            hasEchoCancellation: c,
            hasNoiseSuppression: u,
            hasAutomaticGainControl: E
        } = (0, l.cj)(
            [S.Z],
            () => ({
                hasEchoCancellation: S.Z.hasEchoCancellation(s),
                hasNoiseSuppression: S.Z.hasNoiseSuppression(s),
                hasAutomaticGainControl: S.Z.hasAutomaticGainControl(s)
            }),
            [s]
        ),
        N = c || u || E,
        m = e === g.pM4.VOICE_ACTIVITY && a;
    return (0, i.jsxs)(d.FormSection, {
        className: O.marginBottom20,
        title: h.Z.Messages.FORM_LABEL_VOICE_PROCESSING,
        children: [
            N &&
                (0, i.jsx)(d.FormText, {
                    className: O.marginBottom20,
                    type: d.FormText.Types.DESCRIPTION,
                    children: h.Z.Messages.FORM_HELP_CERTIFIED_VOICE_PROCESSING
                }),
            (0, i.jsx)(T.F, {
                setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, i.jsx)(d.FormSwitch, {
                    className: o()(O.marginTop8, O.marginBottom20),
                    value: t,
                    onChange: (e) =>
                        _.Z.setEchoCancellation(e, {
                            page: g.ZY5.USER_SETTINGS,
                            section: g.jXE.SETTINGS_VOICE_AND_VIDEO
                        }),
                    disabled: c,
                    children: h.Z.Messages.ECHO_CANCELLATION
                })
            }),
            (0, i.jsx)(T.F, {
                setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, i.jsx)(D, {})
            }),
            (0, i.jsx)(T.F, {
                setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, i.jsx)(d.FormSwitch, {
                    value: r,
                    onChange: (s) => _.Z.setMode(e, { vadUseKrisp: s }),
                    note: h.Z.Messages.USER_SETTINGS_DISABLE_ADVANCED_VOICE_ACTIVITY,
                    disabled: !m,
                    children: h.Z.Messages.ADVANCED_VOICE_ACTIVITY
                })
            }),
            (0, i.jsx)(T.F, {
                setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, i.jsx)(d.FormSwitch, {
                    className: '',
                    value: n,
                    onChange: (e) =>
                        _.Z.setAutomaticGainControl(e, {
                            page: g.ZY5.USER_SETTINGS,
                            section: g.jXE.SETTINGS_VOICE_AND_VIDEO
                        }),
                    note: h.Z.Messages.USER_SETTINGS_AUTOMATIC_GAIN_CONTROL,
                    disabled: E,
                    children: h.Z.Messages.AUTOMATIC_GAIN_CONTROL
                })
            })
        ]
    });
}
