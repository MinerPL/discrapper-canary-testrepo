n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(866442),
    i = n(442837),
    a = n(410030),
    s = n(607070),
    o = n(220082),
    l = n(44315),
    u = n(168631),
    c = n(981631);
function d(e) {
    var t, n, d;
    let { user: _, displayProfile: E, pendingThemeColors: f, pendingAvatar: h, isPreview: p } = e,
        I = (0, a.ZP)(),
        m = (0, i.e7)([s.Z], () => s.Z.syncProfileThemeWithUserTheme),
        T = null != h ? h : null == _ ? void 0 : _.getAvatarURL(null == E ? void 0 : E.guildId, 80),
        S = (0, l.Sl)(c.Ilk.PRIMARY_530).hex,
        [g, A] = (0, o.Cf)(T, S, !1);
    if (!(null == E ? void 0 : E.canEditThemes) && !p)
        return {
            theme: I,
            primaryColor: null,
            secondaryColor: null
        };
    let N = null == E ? void 0 : E.getPreviewThemeColors(f),
        O = null !== (t = null == N ? void 0 : N[0]) && void 0 !== t ? t : (0, r._i)(g),
        R = null !== (n = null == N ? void 0 : N[1]) && void 0 !== n ? n : (0, r._i)(A);
    return {
        theme: m ? I : null !== (d = (0, u.V3)(O)) && void 0 !== d ? d : I,
        primaryColor: O,
        secondaryColor: R
    };
}
