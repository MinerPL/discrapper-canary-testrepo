s.d(t, {
    Z: function () {
        return m;
    }
}), s(47120);
var n = s(735250), a = s(470079), i = s(442837), r = s(692547), o = s(481060), l = s(401430), c = s(921801), d = s(695103), _ = s(63063), E = s(998502), u = s(695346), T = s(399970), I = s(726985), S = s(981631), N = s(689938), C = s(805807);
function m() {
    let [e] = a.useState(() => E.ZP.getEnableHardwareAcceleration()), t = u.bm.useSetting(), s = u.Sb.useSetting(), m = u.xU.useSetting(), A = (0, i.e7)([d.Z], () => d.Z.testModeApplicationId), h = a.useCallback(e => {
            u.bm.updateSetting(!e);
        }, []), g = a.useCallback(e => {
            e ? (0, o.openModal)(e => (0, n.jsx)(T.Z, { ...e })) : l.mc();
        }, []), O = a.useCallback(e => {
            (0, o.openModal)(t => (0, n.jsx)(o.ConfirmModal, {
                header: N.Z.Messages.SWITCH_HARDWARE_ACCELERATION,
                confirmText: N.Z.Messages.OKAY,
                cancelText: N.Z.Messages.CANCEL,
                onConfirm: () => E.ZP.setEnableHardwareAcceleration(e),
                ...t,
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: N.Z.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
                })
            }));
        }, []), p = a.useCallback(e => {
            u.xU.updateSetting(!e);
        }, []);
    return (0, n.jsxs)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: N.Z.Messages.SETTINGS_ADVANCED,
        children: [
            (0, n.jsx)(c.F, {
                setting: I.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
                children: (0, n.jsx)(o.FormSwitch, {
                    value: s,
                    onChange: u.Sb.updateSetting,
                    note: N.Z.Messages.DEVELOPER_MODE_HELP_TEXT.format({ apiDocsUrl: S.EYA.API_DOCS }),
                    children: N.Z.Messages.DEVELOPER_MODE
                })
            }),
            (0, n.jsx)(c.F, {
                setting: I.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
                children: (0, n.jsx)(o.FormSwitch, {
                    value: e,
                    onChange: O,
                    note: N.Z.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
                    children: N.Z.Messages.HARDWARE_ACCELERATION
                })
            }),
            (0, n.jsx)(c.F, {
                setting: I.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
                children: (0, n.jsx)(o.FormSwitch, {
                    value: !t,
                    onChange: h,
                    note: N.Z.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
                    children: N.Z.Messages.USER_SETTINGS_SHOW_LIBRARY
                })
            }),
            (0, n.jsx)(c.F, {
                setting: I.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
                children: (0, n.jsx)(o.FormSwitch, {
                    value: null != A,
                    note: N.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
                    onChange: g,
                    children: N.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE
                })
            }),
            (0, n.jsx)(c.F, {
                setting: I.s6.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME,
                children: (0, n.jsx)(o.FormSwitch, {
                    value: !m,
                    note: N.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({ helpCenterLink: _.Z.getArticleURL(S.BhN.GUILD_HOME) }),
                    onChange: p,
                    children: (0, n.jsxs)('div', {
                        className: C.badgedItem,
                        children: [
                            N.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV,
                            (0, n.jsx)(o.TextBadge, {
                                text: N.Z.Messages.BETA,
                                color: r.Z.unsafe_rawColors.BRAND_500.css,
                                className: C.__invalid_betaTag
                            })
                        ]
                    })
                })
            })
        ]
    });
}
