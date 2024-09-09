n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(470079),
    i = n(120356),
    a = n.n(i),
    s = n(866442),
    o = n(442837),
    l = n(780384),
    u = n(481060),
    c = n(607070),
    d = n(629935),
    _ = n(168551),
    E = n(168631);
let f = Object.freeze({
    '--profile-gradient-primary-color': 'var(--background-secondary-alt)',
    '--profile-gradient-secondary-color': 'var(--background-secondary-alt)',
    '--profile-gradient-overlay-color': 'rgba(0, 0, 0, 0)',
    '--profile-gradient-button-color': 'var(--button-secondary-background)',
    '--profile-avatar-border-color': 'var(--background-secondary-alt)',
    '--profile-body-background-color': 'var(--background-floating)',
    '--profile-body-background-hover': 'var(--background-modifier-hover)',
    '--profile-body-divider-color': 'var(--background-modifier-accent)',
    '--profile-body-border-color': 'var(--border-faint)',
    '--profile-message-input-border-color': 'var(--background-modifier-accent)',
    '--profile-note-background-color': 'var(--background-tertiary)',
    '--profile-role-pill-background-color': 'var(--background-secondary-alt)',
    '--profile-role-pill-border-color': 'var(--interactive-normal)'
});
function h(e) {
    let { theme: t, primaryColor: n, secondaryColor: i } = e,
        [h, p] = (0, o.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.syncProfileThemeWithUserTheme]),
        I = (0, E.fq)(t),
        m = (0, E.wu)(t, n, p),
        T = (0, E.lM)(t, n),
        S = (0, E.e4)(t, i),
        g = p ? (null == I ? void 0 : I.overlaySyncedWithUserTheme) : null == I ? void 0 : I.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == n || null == i || null == I || null == m || null == T || null == S || null == g) return f;
            let e = (e, t) => (0, s.ho)(e, h, null, t);
            return {
                '--profile-gradient-primary-color': e(n),
                '--profile-gradient-secondary-color': e(i),
                '--profile-gradient-overlay-color': g,
                '--profile-gradient-button-color': e((0, E.ZB)(n)),
                '--profile-avatar-border-color': e(m),
                '--profile-body-background-color': I.sectionBox,
                '--profile-body-background-hover': I.profileBodyBackgroundHover,
                '--profile-body-divider-color': e(T, I.dividerOpacity),
                '--profile-body-border-color': e(T, 0.12),
                '--profile-message-input-border-color': e(S),
                '--profile-note-background-color': I.noteBackgroundColor,
                '--profile-role-pill-background-color': I.rolePillBackgroundColor,
                '--profile-role-pill-border-color': I.rolePillBorderColor,
                ...(0, d.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: i,
                    isDarkTheme: (0, l.wj)(t),
                    textMixAmount: 25
                })
            };
        }, [n, i, I, m, T, S, g, t, h]),
        profileThemeClassName: a()((0, u.getThemeClass)(t), {
            [_.e3]: null != n,
            'custom-profile-theme': null != n
        })
    };
}
