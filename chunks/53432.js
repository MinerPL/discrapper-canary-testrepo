t.d(n, {
    Z: function () {
        return g;
    }
});
var o = t(735250);
t(470079);
var r = t(442837), a = t(481060), c = t(153867), i = t(857595), l = t(607070), s = t(906732), u = t(705262), d = t(540059), _ = t(210887), S = t(740492), E = t(695346), m = t(874893), T = t(981631), I = t(689938);
function g() {
    let e = E.jU.useSetting(), {analyticsLocations: n} = (0, s.ZP)(), {
            theme: t,
            useSystemTheme: g,
            useForcedColors: b
        } = (0, r.cj)([
            _.Z,
            S.ZP,
            l.Z
        ], () => ({
            theme: _.Z.theme,
            useSystemTheme: S.ZP.useSystemTheme,
            useForcedColors: l.Z.useForcedColors
        })), M = (0, d.Q)('appearance_settings'), f = (e, r) => (0, o.jsx)(a.MenuRadioItem, {
            id: e,
            group: 'input-modes',
            label: r,
            disabled: b,
            checked: g === m.K.ON ? 'system' === e : e === t,
            action: () => {
                (0, u.Yk)({
                    isPersisted: !0,
                    analyticsLocations: n,
                    themeName: 'default '.concat(e)
                }), (0, c.ZI)({ theme: e });
            }
        });
    return [
        (0, o.jsxs)(a.MenuGroup, {
            children: [
                f(T.BRd.DARK, I.Z.Messages.THEME_DARK),
                f(T.BRd.LIGHT, I.Z.Messages.THEME_LIGHT),
                M && (0, o.jsxs)(o.Fragment, {
                    children: [
                        f(T.BRd.DARKER, 'Darker'),
                        f(T.BRd.MIDNIGHT, I.Z.Messages.THEME_MIDNIGHT)
                    ]
                }),
                f('system', I.Z.Messages.THEME_SYSTEM)
            ]
        }, 'theme-items'),
        (0, o.jsx)(a.MenuGroup, {
            children: (0, o.jsx)(a.MenuItem, {
                id: 'compact-mode',
                label: e ? I.Z.Messages.SWITCH_TO_COZY_MODE : I.Z.Messages.SWITCH_TO_COMPACT_MODE,
                action: () => {
                    E.jU.updateSetting(!e), (0, i.ZZ)();
                }
            })
        }, 'compact-mode')
    ];
}
