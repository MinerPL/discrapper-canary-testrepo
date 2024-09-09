t.d(n, {
    Z: function () {
        return b;
    }
});
var o = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    i = t(153867),
    c = t(857595),
    l = t(607070),
    u = t(906732),
    s = t(705262),
    d = t(540059),
    _ = t(210887),
    S = t(740492),
    g = t(695346),
    E = t(874893),
    m = t(981631),
    I = t(689938);
function b() {
    let e = g.jU.useSetting(),
        { analyticsLocations: n } = (0, u.ZP)(),
        {
            theme: t,
            useSystemTheme: b,
            useForcedColors: T
        } = (0, r.cj)([_.Z, S.ZP, l.Z], () => ({
            theme: _.Z.theme,
            useSystemTheme: S.ZP.useSystemTheme,
            useForcedColors: l.Z.useForcedColors
        })),
        f = (0, d.Q)('appearance_settings'),
        M = (e, r) =>
            (0, o.jsx)(a.MenuRadioItem, {
                id: e,
                group: 'input-modes',
                label: r,
                disabled: T,
                checked: b === E.K.ON ? 'system' === e : e === t,
                action: () => {
                    (0, s.Yk)({
                        isPersisted: !0,
                        analyticsLocations: n,
                        themeName: 'default '.concat(e)
                    }),
                        (0, i.ZI)({ theme: e });
                }
            });
    return [
        (0, o.jsxs)(
            a.MenuGroup,
            {
                children: [
                    M(m.BRd.DARK, I.Z.Messages.THEME_DARK),
                    M(m.BRd.LIGHT, I.Z.Messages.THEME_LIGHT),
                    f &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [M(m.BRd.DARKER, 'Darker'), M(m.BRd.MIDNIGHT, I.Z.Messages.THEME_MIDNIGHT)]
                        }),
                    M('system', I.Z.Messages.THEME_SYSTEM)
                ]
            },
            'theme-items'
        ),
        (0, o.jsx)(
            a.MenuGroup,
            {
                children: (0, o.jsx)(a.MenuItem, {
                    id: 'compact-mode',
                    label: e ? I.Z.Messages.SWITCH_TO_COZY_MODE : I.Z.Messages.SWITCH_TO_COMPACT_MODE,
                    action: () => {
                        g.jU.updateSetting(!e), (0, c.ZZ)();
                    }
                })
            },
            'compact-mode'
        )
    ];
}
