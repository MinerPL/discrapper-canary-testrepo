n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(735250);
n(470079);
var s = n(481060), i = n(680295), l = n(318661), o = n(721987), a = n(438163), c = n(502762), d = n(204197), u = n(654904), f = n(450734), m = n(225089), E = n(853726), p = n(165747), _ = n(981631), h = n(228168), I = n(592971);
function g(e) {
    let {
            user: t,
            guild: n,
            canUsePremiumCustomization: g,
            onUpsellClick: v,
            pendingBanner: C,
            pendingBio: x,
            pendingPronouns: Z,
            pendingAvatar: P,
            pendingAvatarDecoration: A,
            pendingNickname: N,
            pendingGlobalName: T,
            pendingThemeColors: S,
            pendingProfileEffectId: j,
            avatarClassName: R,
            isTryItOutFlow: M = !1,
            disabledInputs: O = !1,
            hideCustomStatus: b = !1,
            hideBioSection: y = !1,
            hideMessageInput: B = !0,
            hideExampleButton: L = !1
        } = e, U = (0, l.ZP)(t.id, null == n ? void 0 : n.id), {
            avatarSrc: D,
            avatarDecorationSrc: k
        } = (0, d.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: A,
            avatarOverride: P,
            size: s.AvatarSizes.SIZE_80,
            showPending: !0
        }), w = (0, u.ZT)({
            pendingProfileEffectId: j,
            displayProfile: U
        }), {
            theme: G,
            primaryColor: F
        } = (0, o.Z)({
            user: t,
            displayProfile: U,
            pendingThemeColors: S,
            isPreview: g
        });
    return (0, r.jsxs)(c.Z, {
        user: t,
        displayProfile: U,
        profileType: h.y0.BITE_SIZE,
        pendingThemeColors: S,
        pendingProfileEffectId: w,
        className: I.container,
        forceShowPremium: g,
        children: [
            (0, r.jsxs)('header', {
                className: I.header,
                children: [
                    (0, r.jsx)(m.Z, {
                        user: t,
                        displayProfile: U,
                        guildId: null == n ? void 0 : n.id,
                        canUsePremiumCustomization: g,
                        pendingBanner: C,
                        hasProfileEffect: null != w,
                        isTryItOutFlow: M,
                        disabledInputs: O,
                        onUpsellClick: () => null == v ? void 0 : v({ object: _.qAy.EDIT_PROFILE_BANNER })
                    }),
                    (0, r.jsx)(f.Z, {
                        user: t,
                        guild: n,
                        displayProfile: U,
                        canUsePremiumCustomization: g,
                        previewAvatar: D,
                        previewAvatarDecoration: k,
                        previewTheme: G,
                        previewPrimaryColor: F,
                        className: R,
                        disabledInputs: O,
                        isTryItOutFlow: M,
                        onUpsellClick: () => null == v ? void 0 : v({ object: _.qAy.AVATAR })
                    }),
                    !b && (0, r.jsx)(a.Z, {
                        user: t,
                        profileType: h.y0.BITE_SIZE
                    })
                ]
            }),
            (0, r.jsx)(E.Z, {
                user: t,
                displayProfile: U,
                guild: n,
                pendingAvatar: P,
                pendingNickname: N,
                pendingGlobalName: T,
                pendingBio: x,
                pendingPronouns: Z,
                isTryItOutFlow: M,
                hideBioSection: y
            }),
            (0, r.jsx)(p.Z, {
                user: t,
                hideMessageInput: B,
                hideExampleButton: L
            }),
            null != w && (0, r.jsx)(i.Z, { profileEffectId: w })
        ]
    });
}
