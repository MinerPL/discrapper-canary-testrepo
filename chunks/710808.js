t.d(s, {
    Z: function () {
        return R;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(846027),
    l = t(179658),
    c = t(304680),
    d = t(579806),
    _ = t(600164),
    u = t(729345),
    E = t(921801),
    T = t(857192),
    S = t(131951),
    I = t(226961),
    N = t(12647),
    m = t(726985),
    C = t(981631),
    A = t(65154),
    g = t(689938),
    h = t(224499);
async function O() {
    let e = await d.Z.fileManager.getModulePath(),
        s = d.Z.fileManager.join(e, 'discord_voice');
    d.Z.fileManager.showItemInFolder(s);
}
function p(e) {
    (0, r.openModal)((s) =>
        (0, n.jsx)(r.ConfirmModal, {
            header: g.Z.Messages.SET_DEBUG_LOGGING,
            confirmText: g.Z.Messages.OKAY,
            cancelText: g.Z.Messages.CANCEL,
            onCancel: s.onClose,
            onConfirm: () => o.Z.setDebugLogging(e),
            ...s,
            children: (0, n.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: g.Z.Messages.SET_DEBUG_LOGGING_BODY
            })
        })
    );
}
function R() {
    let [e, s] = a.useState(!1),
        { debugLogging: t, aecDumpEnabled: d } = (0, i.cj)([S.Z], () => ({
            aecDumpSupported: S.Z.isAecDumpSupported(),
            debugLogging: S.Z.getDebugLogging(),
            aecDumpEnabled: S.Z.getAecDump(),
            supportsConnectionReplay: S.Z.supports(A.AN.CONNECTION_REPLAY)
        })),
        R = (0, i.e7)([T.default], () => T.default.isStreamInfoOverlayEnabled),
        x = (0, i.e7)([I.ZP], () => I.ZP.shouldRecordNextConnection());
    async function f() {
        s(!0);
        try {
            await S.Z.getMediaEngine().writeAudioDebugState(),
                await N.Z.submitLiveCrashReport({ message: { message: 'User Live Dump' } }),
                await (0, u.E)(C.GU0.RTC),
                !(function () {
                    let e = g.Z.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
                        s = g.Z.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
                    (0, r.openModal)((t) =>
                        (0, n.jsx)(r.ConfirmModal, {
                            header: e,
                            confirmButtonColor: r.Button.Colors.BRAND,
                            confirmText: g.Z.Messages.OKAY,
                            ...t,
                            children: (0, n.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: s
                            })
                        })
                    );
                })();
        } catch (e) {
            !(function (e) {
                let s = g.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
                    t = null != e ? e : g.Z.Messages.UPLOAD_DEBUG_LOG_FAILURE;
                (0, r.openModal)((e) =>
                    (0, n.jsx)(r.ConfirmModal, {
                        header: s,
                        confirmButtonColor: r.Button.Colors.BRAND,
                        confirmText: g.Z.Messages.OKAY,
                        ...e,
                        children: (0, n.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: t
                        })
                    })
                );
            })(e.displayMessage);
        }
    }
    return (0, n.jsxs)(r.FormSection, {
        className: h.marginBottom40,
        title: g.Z.Messages.FORM_LABEL_DEBUG,
        children: [
            (0, n.jsx)(E.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: R,
                    onChange: (e) => (0, l.y)({ isStreamInfoOverlayEnabled: e }),
                    note: g.Z.Messages.FORM_HELP_STREAM_INFO_OVERLAY,
                    children: g.Z.Messages.FORM_LABEL_STREAM_INFO_OVERLAY
                })
            }),
            (0, n.jsx)(E.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: d,
                    onChange: (e) => o.Z.setAecDump(e),
                    note: g.Z.Messages.FORM_HELP_AEC_DUMP,
                    children: g.Z.Messages.FORM_CHECKBOX_AEC_DUMP
                })
            }),
            (0, n.jsxs)(E.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
                children: [
                    (0, n.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: x,
                        onChange: (e) => c.TC(e),
                        note: g.Z.Messages.FORM_HELP_CONNECTION_LOG,
                        children: g.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG
                    }),
                    (0, n.jsx)(r.FormItem, {
                        children: (0, n.jsx)(_.Z, {
                            className: h.marginBottom20,
                            children: (0, n.jsx)(_.Z.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, n.jsx)(r.Button, {
                                    size: r.Button.Sizes.SMALL,
                                    onClick: () => c.z4(),
                                    children: g.Z.Messages.OPEN_CONNECTION_REPLAY
                                })
                            })
                        })
                    }),
                    (0, n.jsx)(r.FormDivider, { className: h.marginBottom20 })
                ]
            }),
            (0, n.jsxs)(E.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
                children: [
                    (0, n.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: t,
                        onChange: p,
                        note: g.Z.Messages.FORM_HELP_DEBUG_LOGGING,
                        children: g.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING
                    }),
                    (0, n.jsx)(r.FormItem, {
                        children: (0, n.jsxs)(_.Z, {
                            children: [
                                (0, n.jsx)(_.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: (0, n.jsx)(r.Button, {
                                        disabled: e,
                                        size: r.Button.Sizes.SMALL,
                                        onClick: f,
                                        children: g.Z.Messages.UPLOAD
                                    })
                                }),
                                (0, n.jsx)(_.Z.Child, {
                                    grow: 0,
                                    shrink: 0,
                                    children: (0, n.jsx)(r.Button, {
                                        size: r.Button.Sizes.SMALL,
                                        onClick: O,
                                        children: g.Z.Messages.SHOW_FOLDER
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
