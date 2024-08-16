t.d(s, {
    Z: function () {
        return S;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(401430),
    l = t(921801),
    c = t(695103),
    d = t(998502),
    _ = t(695346),
    E = t(399970),
    u = t(726985),
    I = t(981631),
    T = t(689938);
function S() {
    let [e] = a.useState(() => d.ZP.getEnableHardwareAcceleration()),
        s = _.bm.useSetting(),
        t = _.Sb.useSetting(),
        S = (0, i.e7)([c.Z], () => c.Z.testModeApplicationId),
        N = a.useCallback((e) => {
            _.bm.updateSetting(!e);
        }, []),
        C = a.useCallback((e) => {
            e ? (0, r.openModal)((e) => (0, n.jsx)(E.Z, { ...e })) : o.mc();
        }, []),
        m = a.useCallback((e) => {
            (0, r.openModal)((s) =>
                (0, n.jsx)(r.ConfirmModal, {
                    header: T.Z.Messages.SWITCH_HARDWARE_ACCELERATION,
                    confirmText: T.Z.Messages.OKAY,
                    cancelText: T.Z.Messages.CANCEL,
                    onConfirm: () => d.ZP.setEnableHardwareAcceleration(e),
                    ...s,
                    children: (0, n.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        children: T.Z.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
                    })
                })
            );
        }, []);
    return (0, n.jsxs)(r.FormSection, {
        tag: r.FormTitleTags.H1,
        title: T.Z.Messages.SETTINGS_ADVANCED,
        children: [
            (0, n.jsx)(l.F, {
                setting: u.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: t,
                    onChange: _.Sb.updateSetting,
                    note: T.Z.Messages.DEVELOPER_MODE_HELP_TEXT.format({ apiDocsUrl: I.EYA.API_DOCS }),
                    children: T.Z.Messages.DEVELOPER_MODE
                })
            }),
            (0, n.jsx)(l.F, {
                setting: u.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: e,
                    onChange: m,
                    note: T.Z.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
                    children: T.Z.Messages.HARDWARE_ACCELERATION
                })
            }),
            (0, n.jsx)(l.F, {
                setting: u.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: !s,
                    onChange: N,
                    note: T.Z.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
                    children: T.Z.Messages.USER_SETTINGS_SHOW_LIBRARY
                })
            }),
            (0, n.jsx)(l.F, {
                setting: u.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, n.jsx)(r.FormSwitch, {
                    value: null != S,
                    note: T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
                    onChange: C,
                    children: T.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE
                })
            })
        ]
    });
}
