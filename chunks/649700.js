t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(588126),
    l = t(31590),
    c = t(25990),
    d = t(921813),
    _ = t(293859);
function u(e) {
    var s;
    let { user: u, disabledInputs: E, containerClassName: T } = e,
        { reducedMotion: S } = a.useContext(r.AccessibilityPreferencesContext),
        {
            pendingAvatar: I,
            pendingBanner: N,
            pendingThemeColors: A,
            pendingPronouns: C,
            pendingBio: m,
            tryItOutThemeColors: g,
            tryItOutAvatar: h,
            tryItOutBanner: O,
            tryItOutAvatarDecoration: p,
            tryItOutProfileEffectId: R
        } = (0, i.cj)([c.Z], () => {
            let e = c.Z.getAllPending(),
                s = c.Z.getAllTryItOut();
            return {
                ...e,
                ...s
            };
        }),
        { enabled: x } = l.Z.useExperiment({ location: 'TryItOutPreview' }, { autoTrackExposure: !1 }),
        M = (0, o.Z)(p, !x);
    return (0, n.jsx)(d.Z, {
        containerClassName: T,
        user: u,
        pendingPronouns: C,
        pendingBio: m,
        pendingBanner: null !== (s = null != O ? O : N) && void 0 !== s ? s : t(466045),
        pendingAvatar: null != h ? h : I,
        pendingThemeColors: null != g ? g : A,
        pendingAvatarDecoration: M,
        pendingProfileEffectId: R,
        avatarClassName: null != h || null != I || S.enabled ? void 0 : _.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: E
    });
}
