n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(735250);
n(470079);
var s = n(481060),
    i = n(680295),
    l = n(481046),
    a = n(318661),
    o = n(721987),
    c = n(438163),
    d = n(502762),
    u = n(204197),
    f = n(654904),
    m = n(450734),
    E = n(225089),
    p = n(853726),
    _ = n(165747),
    h = n(981631),
    g = n(228168),
    I = n(60638);
function v(e) {
    let { user: t, guild: n, canUsePremiumCustomization: v, onUpsellClick: C, pendingBanner: x, pendingBio: P, pendingPronouns: A, pendingAvatar: Z, pendingAvatarDecoration: T, pendingNickname: N, pendingGlobalName: S, pendingThemeColors: j, pendingProfileEffectId: R, avatarClassName: M, isTryItOutFlow: O = !1, disabledInputs: L = !1, hideCustomStatus: y = !1, hideBioSection: b = !1, hideMessageInput: B = !0, hideExampleButton: D = !1 } = e,
        U = (0, a.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: k, avatarDecorationSrc: w } = (0, u.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: T,
            avatarOverride: Z,
            size: s.AvatarSizes.SIZE_80,
            showPending: !0
        }),
        G = (0, f.ZT)({
            pendingProfileEffectId: R,
            displayProfile: U
        }),
        { theme: F, primaryColor: H } = (0, o.Z)({
            user: t,
            displayProfile: U,
            pendingThemeColors: j,
            isPreview: v
        }),
        { accountPopoutStatusEditEnabled: z, profileStatusEditEnabled: W } = (0, l.K)({
            location: 'ProfileCustomizationPreview',
            autoTrackExposure: !y
        });
    return (0, r.jsxs)(d.Z, {
        user: t,
        displayProfile: U,
        profileType: g.y0.BITE_SIZE,
        pendingThemeColors: j,
        pendingProfileEffectId: G,
        className: I.container,
        forceShowPremium: v,
        children: [
            (0, r.jsxs)('header', {
                className: I.header,
                children: [
                    (0, r.jsx)(E.Z, {
                        user: t,
                        displayProfile: U,
                        guildId: null == n ? void 0 : n.id,
                        canUsePremiumCustomization: v,
                        pendingBanner: x,
                        hasProfileEffect: null != G,
                        isTryItOutFlow: O,
                        disabledInputs: L,
                        onUpsellClick: () => (null == C ? void 0 : C({ object: h.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, r.jsx)(m.Z, {
                        user: t,
                        guild: n,
                        displayProfile: U,
                        canUsePremiumCustomization: v,
                        previewAvatar: k,
                        previewAvatarDecoration: w,
                        previewTheme: F,
                        previewPrimaryColor: H,
                        className: M,
                        disabledInputs: L,
                        isTryItOutFlow: O,
                        onUpsellClick: () => (null == C ? void 0 : C({ object: h.qAy.AVATAR }))
                    }),
                    !y &&
                        (0, r.jsx)(c.Z, {
                            user: t,
                            profileType: g.y0.BITE_SIZE,
                            editEnabled: z || W
                        })
                ]
            }),
            (0, r.jsx)(p.Z, {
                user: t,
                displayProfile: U,
                guild: n,
                pendingAvatar: Z,
                pendingNickname: N,
                pendingGlobalName: S,
                pendingBio: P,
                pendingPronouns: A,
                isTryItOutFlow: O,
                hideBioSection: b
            }),
            (0, r.jsx)(_.Z, {
                user: t,
                hideMessageInput: B,
                hideExampleButton: D
            }),
            null != G && (0, r.jsx)(i.Z, { profileEffectId: G })
        ]
    });
}
