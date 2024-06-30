s.d(t, {
    Z: function () {
        return C;
    }
});
var n = s(735250);
s(470079);
var a = s(120356), i = s.n(a), r = s(498607), o = s.n(r), l = s(692547), c = s(481060), d = s(220082), _ = s(318661), E = s(721987), u = s(74538), T = s(193528), I = s(993413), S = s(689938), N = s(983138);
function C(e) {
    let {
            user: t,
            pendingAvatar: s,
            pendingColors: a,
            onThemeColorsChange: r,
            preventDisabled: C,
            guildId: m,
            className: A,
            showPremiumIcon: h = !0,
            showResetThemeButton: g = !1,
            forcedDivider: O
        } = e, p = (0, _.ZP)(t.id, m), {
            primaryColor: R,
            secondaryColor: x
        } = (0, E.Z)({
            user: t,
            displayProfile: p,
            pendingThemeColors: a,
            isPreview: !0
        }), M = u.ZP.canUsePremiumProfileCustomization(t), D = null != s ? s : t.getAvatarURL(m, 80), f = (0, c.useToken)(l.Z.unsafe_rawColors.PRIMARY_530).hex(), P = (0, d.Cf)(D, f, !1);
    if (null == R || null == x)
        return null;
    let L = e => {
        r(o()(e, null == p ? void 0 : p.themeColors) ? void 0 : e);
    };
    return (0, n.jsx)(I.Z, {
        title: S.Z.Messages.USER_SETTINGS_PROFILE_THEME,
        disabled: !M && !C,
        className: i()(N.__invalid_profileThemesSection, A),
        showPremiumIcon: h,
        forcedDivider: O,
        children: (0, n.jsxs)('div', {
            className: N.sectionContainer,
            children: [
                (0, n.jsx)('div', {
                    className: N.sparkleContainer,
                    children: (0, n.jsx)(T.Z, {
                        onChange: e => L([
                            e,
                            x
                        ]),
                        color: R,
                        suggestedColors: P,
                        showEyeDropper: !0,
                        label: (0, n.jsx)(c.Text, {
                            className: N.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: S.Z.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                        })
                    })
                }),
                (0, n.jsx)('div', {
                    className: N.sparkleContainer,
                    children: (0, n.jsx)(T.Z, {
                        onChange: e => L([
                            R,
                            e
                        ]),
                        color: x,
                        suggestedColors: P,
                        showEyeDropper: !0,
                        label: (0, n.jsx)(c.Text, {
                            className: N.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: S.Z.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                        })
                    })
                }),
                g && null != m && (0, n.jsx)(c.Button, {
                    className: N.resetButton,
                    color: c.Button.Colors.PRIMARY,
                    look: c.Button.Looks.LINK,
                    size: c.Button.Sizes.SMALL,
                    onClick: () => L([
                        null,
                        null
                    ]),
                    children: S.Z.Messages.USER_SETTINGS_RESET_PROFILE_THEME
                })
            ]
        })
    });
}
