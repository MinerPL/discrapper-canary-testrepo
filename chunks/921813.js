a.d(n, {
    Z: function () {
        return C;
    }
});
var i = a(735250);
a(470079);
var r = a(120356),
    s = a.n(r),
    o = a(481060),
    l = a(680295),
    t = a(687158),
    u = a(576635),
    c = a(518950),
    d = a(438163),
    A = a(502762),
    E = a(654904),
    _ = a(450734),
    I = a(225089),
    P = a(853726),
    p = a(165747),
    v = a(981631),
    N = a(228168),
    m = a(60638);
function C(e) {
    let { user: n, guild: a, canUsePremiumCustomization: r, onUpsellClick: C, pendingBanner: L, pendingBio: T, pendingPronouns: R, pendingAvatar: f, pendingAvatarDecoration: M, pendingNickname: S, pendingGlobalName: Z, pendingThemeColors: g, pendingProfileEffectId: h, avatarClassName: U, containerClassName: x, isTryItOutFlow: y = !1, disabledInputs: j = !1, hideCustomStatus: O = !1, hideBioSection: B = !1, hideMessageInput: b = !0, hideExampleButton: w = !1 } = e,
        D = (0, t.ZP)(n.id, null == a ? void 0 : a.id),
        { avatarSrc: k, avatarDecorationSrc: F } = (0, c.Z)({
            user: n,
            guildId: null == a ? void 0 : a.id,
            avatarDecorationOverride: M,
            avatarOverride: f,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0
        }),
        V = (0, E.ZT)({
            pendingProfileEffectId: h,
            displayProfile: D
        }),
        { theme: z, primaryColor: G } = (0, u.Z)({
            user: n,
            displayProfile: D,
            pendingThemeColors: g,
            isPreview: r
        });
    return (0, i.jsxs)(A.Z, {
        user: n,
        displayProfile: D,
        profileType: N.y0.BITE_SIZE,
        pendingThemeColors: g,
        pendingProfileEffectId: V,
        className: s()(m.container, x),
        forceShowPremium: r,
        children: [
            (0, i.jsxs)('header', {
                className: m.header,
                children: [
                    (0, i.jsx)(I.Z, {
                        user: n,
                        displayProfile: D,
                        guildId: null == a ? void 0 : a.id,
                        canUsePremiumCustomization: r,
                        pendingBanner: L,
                        isTryItOutFlow: y,
                        disabledInputs: j,
                        onUpsellClick: () => (null == C ? void 0 : C({ object: v.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, i.jsx)(_.Z, {
                        user: n,
                        guild: a,
                        displayProfile: D,
                        canUsePremiumCustomization: r,
                        previewAvatar: k,
                        previewAvatarDecoration: F,
                        previewTheme: z,
                        previewPrimaryColor: G,
                        className: U,
                        disabledInputs: j,
                        isTryItOutFlow: y,
                        onUpsellClick: () => (null == C ? void 0 : C({ object: v.qAy.AVATAR }))
                    }),
                    !O &&
                        (0, i.jsx)(d.Z, {
                            user: n,
                            profileType: N.y0.BITE_SIZE
                        })
                ]
            }),
            (0, i.jsx)(P.Z, {
                user: n,
                displayProfile: D,
                guild: a,
                pendingAvatar: f,
                pendingNickname: S,
                pendingGlobalName: Z,
                pendingBio: T,
                pendingPronouns: R,
                isTryItOutFlow: y,
                hideBioSection: B
            }),
            (0, i.jsx)(p.Z, {
                user: n,
                hideMessageInput: b,
                hideExampleButton: w
            }),
            null != V && (0, i.jsx)(l.Z, { profileEffectId: V })
        ]
    });
}
