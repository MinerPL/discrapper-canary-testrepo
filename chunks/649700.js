t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(588126),
    l = t(25990),
    c = t(921813),
    d = t(152651);
function _(e) {
    var s;
    let { user: _, disabledInputs: u, containerClassName: E } = e,
        { reducedMotion: T } = a.useContext(r.AccessibilityPreferencesContext),
        {
            pendingAvatar: S,
            pendingBanner: I,
            pendingThemeColors: N,
            pendingPronouns: m,
            pendingBio: C,
            tryItOutThemeColors: A,
            tryItOutAvatar: g,
            tryItOutBanner: h,
            tryItOutAvatarDecoration: O,
            tryItOutProfileEffectId: p
        } = (0, i.cj)([l.Z], () => {
            let e = l.Z.getAllPending(),
                s = l.Z.getAllTryItOut();
            return {
                ...e,
                ...s
            };
        }),
        R = (0, o.Z)(O);
    return (0, n.jsx)(c.Z, {
        containerClassName: E,
        user: _,
        pendingPronouns: m,
        pendingBio: C,
        pendingBanner: null !== (s = null != h ? h : I) && void 0 !== s ? s : t(466045),
        pendingAvatar: null != g ? g : S,
        pendingThemeColors: null != A ? A : N,
        pendingAvatarDecoration: R,
        pendingProfileEffectId: p,
        avatarClassName: null != g || null != S || T.enabled ? void 0 : d.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: u
    });
}
