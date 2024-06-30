s.d(t, {
    Z: function () {
        return m;
    }
});
var n = s(735250), a = s(470079), i = s(120356), r = s.n(i), o = s(481060), l = s(906732), c = s(642619), d = s(626135), _ = s(74538), E = s(150039), u = s(993413), T = s(504983), I = s(981631), S = s(474936), N = s(689938), C = s(912768);
function m(e) {
    let {
            user: t,
            guild: s,
            className: i,
            sectionTitle: m,
            forcedDivider: A = !1,
            withTutorial: h = !1,
            showBorder: g = !1,
            isTryItOutFlow: O = !1,
            initialSelectedEffectId: p
        } = e, R = (0, E.Kg)(t, s), x = _.ZP.canUsePremiumProfileCustomization(t), {analyticsLocations: M} = (0, l.ZP)(), {
            pendingProfileEffectId: D,
            errors: f
        } = (0, E.bd)(s), P = a.useCallback(() => (0, c.H)({
            analyticsLocations: M,
            initialSelectedEffectId: p,
            guild: s
        }), [
            M,
            p,
            s
        ]);
    a.useEffect(() => {
        x && d.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
            type: S.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
            location_stack: M
        });
    }, [
        x,
        M
    ]);
    let L = null != s, Z = O || void 0 !== D ? null != D : null != R, b = h ? o.ShinyButton : o.Button;
    return (0, n.jsx)(u.Z, {
        forcedDivider: A,
        borderType: T.Y.PREMIUM,
        hasBackground: !0,
        title: m,
        showBorder: g,
        errors: f,
        className: i,
        children: (0, n.jsxs)('div', {
            className: C.buttonsContainer,
            children: [
                (0, n.jsx)(b, {
                    size: o.Button.Sizes.SMALL,
                    onClick: P,
                    className: r()({ [C.buttonHighlighted]: h }),
                    children: N.Z.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
                }),
                Z && (0, n.jsx)(o.Button, {
                    className: C.removeButton,
                    color: o.Button.Colors.PRIMARY,
                    look: o.Button.Looks.LINK,
                    size: o.Button.Sizes.SMALL,
                    onClick: function () {
                        (0, E.s6)(null, R, s);
                    },
                    children: L ? N.Z.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : N.Z.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
                })
            ]
        })
    });
}
