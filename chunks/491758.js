t.d(s, {
    Z: function () {
        return L;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(512722),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(660216),
    d = t(230711),
    _ = t(825209),
    u = t(706454),
    E = t(494620),
    T = t(131951),
    S = t(556296),
    I = t(924557),
    N = t(435064),
    A = t(894694),
    C = t(779618),
    m = t(39604),
    g = t(442334),
    h = t(356659),
    O = t(981631),
    p = t(37113),
    R = t(526761),
    x = t(689938),
    M = t(703353),
    f = t(595362),
    D = t(113207);
function L() {
    let e = (0, o.e7)([T.Z], () => T.Z.getHardwareEncoding()),
        { clipsEnabled: s, remindersEnabled: t, decoupledClipsEnabled: i, clipsLength: L, clipsQuality: P } = (0, o.cj)([N.Z], () => N.Z.getSettings()),
        b = (0, o.e7)([N.Z], () => N.Z.getHardwareClassification()),
        Z = (0, o.e7)([S.Z], () => S.Z.getKeybindForAction(O.kg4.SAVE_CLIP, !0)),
        v = N.Z.isDecoupledGameClippingEnabled(),
        j = (0, C.Z)(T.Z),
        { showClipsHeaderEntrypoint: B } = I.NV.useExperiment({ location: 'clips_recording_settings' }, { autoTrackExposure: !1 });
    r()(null != Z, 'Save clip keybind unset');
    let U = (0, o.e7)([u.default], () => u.default.locale),
        G = a.useMemo(
            () => [
                {
                    value: h.OT.SECONDS_30,
                    label: x.Z.Messages.CLIPS_LENGTH_SECONDS.format({ count: 30 })
                },
                {
                    value: h.OT.MINUTES_1,
                    label: x.Z.Messages.CLIPS_LENGTH_MINUTES.format({ count: 1 })
                },
                {
                    value: h.OT.MINUTES_2,
                    label: x.Z.Messages.CLIPS_LENGTH_MINUTES.format({ count: 2 })
                }
            ],
            [U]
        ),
        F = a.useMemo(
            () => [
                {
                    value: p.LY.RESOLUTION_480,
                    label: x.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: p.LY.RESOLUTION_480 })
                },
                {
                    value: p.LY.RESOLUTION_720,
                    label: x.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: p.LY.RESOLUTION_720 })
                },
                {
                    value: p.LY.RESOLUTION_1080,
                    label: x.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: p.LY.RESOLUTION_1080 })
                },
                {
                    value: p.LY.RESOLUTION_1440,
                    label: x.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: p.LY.RESOLUTION_1440 })
                },
                {
                    value: p.LY.RESOLUTION_SOURCE,
                    label: x.Z.Messages.SCREENSHARE_SOURCE
                }
            ],
            [U]
        ),
        y = a.useMemo(
            () => [
                {
                    value: p.ws.FPS_15,
                    label: x.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({ fps: p.ws.FPS_15 })
                },
                {
                    value: p.ws.FPS_30,
                    label: x.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({ fps: p.ws.FPS_30 })
                },
                {
                    value: p.ws.FPS_60,
                    label: x.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({ fps: p.ws.FPS_60 })
                }
            ],
            [U]
        ),
        V = a.useCallback(
            (e) => {
                c.Z.setKeybind({
                    ...Z,
                    shortcut: e
                });
            },
            [Z]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.FormSection, {
                disabled: !e,
                children: [
                    !e &&
                        (0, n.jsx)(E.Z, {
                            look: E.z.WARNING,
                            className: f.formItem,
                            children: x.Z.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({ onClick: () => d.Z.open(O.oAB.VOICE, null, { scrollPosition: R.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION }) })
                        }),
                    b === A.x.BELOW_MINIMUM
                        ? (0, n.jsx)(E.Z, {
                              look: E.z.WARNING,
                              className: f.formItem,
                              children: x.Z.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
                          })
                        : null,
                    (0, n.jsx)(l.FormSwitch, {
                        hideBorder: !0,
                        disabled: !e,
                        className: f.formItem,
                        value: s,
                        note: x.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
                        onChange: (e) =>
                            m.em({
                                clipsEnabled: e,
                                trackAnalytics: !0
                            }),
                        children: x.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
                    }),
                    e &&
                        (0, n.jsx)(E.Z, {
                            className: f.formItem,
                            children: x.Z.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
                        })
                ]
            }),
            v &&
                j &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.FormDivider, {}),
                        (0, n.jsx)(l.FormSection, {
                            className: D.marginTop20,
                            disabled: !e,
                            children: (0, n.jsx)(l.FormSwitch, {
                                hideBorder: !0,
                                disabled: !e,
                                className: f.formItem,
                                value: i,
                                note: x.Z.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS_HELP,
                                onChange: (e) =>
                                    m._Q({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: x.Z.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS
                            })
                        })
                    ]
                }),
            B &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.FormDivider, {}),
                        (0, n.jsx)(l.FormSection, {
                            className: D.marginTop20,
                            children: (0, n.jsx)(l.FormSwitch, {
                                hideBorder: !0,
                                className: f.formItem,
                                value: t,
                                note: x.Z.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS_HELP,
                                onChange: (e) => m.N0(e),
                                children: x.Z.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS
                            })
                        })
                    ]
                }),
            (0, n.jsx)(l.FormDivider, {}),
            (0, n.jsxs)(l.FormSection, {
                className: D.marginTop20,
                children: [
                    (0, n.jsx)(g.Q, {
                        className: f.formItem,
                        select: m.eU,
                        title: x.Z.Messages.CLIPS_SETTINGS_LENGTH,
                        note: x.Z.Messages.CLIPS_SETTINGS_LENGTH_HELP,
                        value: L,
                        options: G
                    }),
                    (0, n.jsx)(g.Q, {
                        className: f.formItem,
                        select: (e) =>
                            m.yi({
                                resolution: e,
                                frameRate: P.frameRate
                            }),
                        title: x.Z.Messages.CLIPS_SETTINGS_RESOLUTION,
                        note: x.Z.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
                        value: P.resolution,
                        options: F
                    }),
                    (0, n.jsx)(g.Q, {
                        className: f.formItem,
                        select: (e) =>
                            m.yi({
                                resolution: P.resolution,
                                frameRate: e
                            }),
                        title: x.Z.Messages.CLIPS_SETTINGS_FRAMERATE,
                        note: x.Z.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
                        value: P.frameRate,
                        options: y
                    }),
                    (0, n.jsx)(g.O, {
                        className: f.formItem,
                        title: x.Z.Messages.CLIPS_SETTINGS_KEYBIND,
                        note: x.Z.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
                        children: (0, n.jsx)('div', {
                            className: M.keyRecorder,
                            children: (0, n.jsx)(_.Z, {
                                defaultValue: Z.shortcut,
                                onChange: V
                            })
                        })
                    })
                ]
            })
        ]
    });
}
