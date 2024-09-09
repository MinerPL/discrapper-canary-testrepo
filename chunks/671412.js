n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(420660),
    c = n(100527),
    d = n(906732),
    _ = n(233440),
    E = n(199902),
    f = n(158776),
    h = n(74538),
    p = n(998502),
    I = n(785717),
    m = n(518950),
    T = n(825801),
    S = n(215105),
    g = n(652853),
    A = n(429974),
    N = n(228168),
    O = n(981631),
    R = n(474936),
    v = n(689938),
    C = n(234328);
let y = p.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function L(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: p, profileType: L, animateOnHover: D, onOpenProfile: b, isInteractionSource: M, onInteraction: P, showReplyPopout: U = !1, setInteractionToastShown: w, setInteractionSent: x, setIsReplyInteraction: G } = e,
        { theme: k } = (0, g.z)(),
        { analyticsLocations: B } = (0, d.ZP)(c.Z.AVATAR),
        { trackUserProfileAction: F } = (0, I.KZ)(),
        V = L === N.y0.FULL_SIZE ? (0, A.z)(t.id, null == n ? void 0 : n.guildId) : void 0,
        H = h.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, R.p9.TIER_2),
        Z = i.useMemo(() => t.isNonUserBot() || (0, _.W)(t, p), [t, p]),
        [Y, j] = i.useState(!1),
        W = () => {
            j(!0);
        },
        K = () => {
            j(!1);
        },
        { status: z, isMobileOnline: q } = (0, o.cj)([E.Z, f.Z], () => {
            let e = null != E.Z.getAnyStreamForUser(t.id),
                n = f.Z.findActivity(t.id, (t) => {
                    let { type: n } = t;
                    return e ? n === O.IIU.PLAYING : n !== O.IIU.CUSTOM_STATUS;
                });
            return {
                status: (0, u.Z)(n) ? O.Skl.STREAMING : f.Z.getStatus(t.id),
                isMobileOnline: f.Z.isMobileOnline(t.id)
            };
        }),
        Q = L === N.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80,
        X = s()(C.avatar, {
            [C.hoisted]: M,
            [C.biteSize]: L === N.y0.BITE_SIZE,
            [C.fullSize]: L === N.y0.FULL_SIZE,
            [C.panel]: L === N.y0.PANEL
        }),
        {
            avatarDecorationSrc: $,
            avatarSrc: J,
            eventHandlers: ee
        } = (0, m.Z)({
            user: t,
            guildId: null != n ? n.guildId : a,
            size: Q,
            animateOnHover: D
        }),
        et = (0, r.jsx)(y, {
            src: J,
            avatarDecoration: $,
            size: Q,
            'aria-label': t.username,
            imageClassName: null != b ? C.overlay : void 0,
            status: Z ? O.Skl.UNKNOWN : z,
            statusBackdropColor: H && !Z ? (0, l.getStatusBackdropColor)(k) : void 0,
            isMobile: q,
            statusTooltip: !0,
            statusTooltipDelay: N.vB
        }),
        en = () =>
            null == b
                ? (0, r.jsx)('div', {
                      ...ee,
                      children: et
                  })
                : (0, r.jsx)(l.Clickable, {
                      ...ee,
                      onClick: () => {
                          F({
                              action: 'PRESS_VIEW_PROFILE',
                              analyticsLocations: B
                          }),
                              null == b || b();
                      },
                      className: C.clickable,
                      focusProps: { ringClassName: C.focusRing },
                      children: et
                  });
    return (0, r.jsxs)(l.ClickableContainer, {
        className: X,
        onFocus: W,
        onBlur: K,
        onMouseOver: W,
        onMouseLeave: K,
        onClick: W,
        'aria-label': v.Z.Messages.USER_SETTINGS_AVATAR,
        children: [
            (0, r.jsx)(l.Popout, {
                renderPopout: (e) => {
                    let { setPopoutRef: n } = e;
                    return (0, r.jsx)(S.Z, {
                        user: t,
                        guildId: a,
                        channelId: p,
                        profileType: L,
                        sourceType: N.n_.AVATAR,
                        modalKey: V,
                        setPopoutRef: n,
                        onInteraction: P,
                        setInteractionToastShown: w,
                        setInteractionSent: x,
                        setIsReplyInteraction: G,
                        onClose: () => {
                            j(!1);
                        }
                    });
                },
                animationPosition: 'top',
                position: 'bottom',
                align: L === N.y0.FULL_SIZE ? 'center' : 'left',
                shouldShow: U,
                children: () => en()
            }),
            !U &&
                (0, r.jsx)(T.Z, {
                    user: t,
                    sourceType: N.n_.AVATAR,
                    isVisible: Y,
                    isExpandable: !1,
                    onInteraction: P,
                    setInteractionToastShown: w,
                    setInteractionSent: x,
                    setIsReplyInteraction: G,
                    onClose: () => j(!1)
                })
        ]
    });
}
