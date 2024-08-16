n.d(t, {
    Z: function () {
        return y;
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
    m = n(785717),
    I = n(204197),
    T = n(825801),
    g = n(215105),
    S = n(652853),
    A = n(429974),
    N = n(228168),
    v = n(981631),
    O = n(474936),
    R = n(234328);
let C = p.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function y(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: p, profileType: y, animateOnHover: D, onOpenProfile: L, isInteractionSource: b, onInteraction: M, showReplyPopout: P = !1, setInteractionToastShown: U, setInteractionSent: w, setIsReplyInteraction: x } = e,
        { theme: G } = (0, S.z)(),
        { analyticsLocations: k } = (0, d.ZP)(c.Z.AVATAR),
        { trackUserProfileAction: B } = (0, m.KZ)(),
        F = y === N.y0.FULL_SIZE ? (0, A.z)(t.id, null == n ? void 0 : n.guildId) : void 0,
        V = h.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, O.p9.TIER_2),
        H = i.useMemo(() => t.isNonUserBot() || (0, _.W)(t, p), [t, p]),
        [Z, Y] = i.useState(!1),
        j = () => {
            Y(!0);
        },
        W = () => {
            Y(!1);
        },
        { status: K, isMobileOnline: z } = (0, o.cj)([E.Z, f.Z], () => {
            let e = null != E.Z.getAnyStreamForUser(t.id),
                n = f.Z.findActivity(t.id, (t) => {
                    let { type: n } = t;
                    return e ? n === v.IIU.PLAYING : n !== v.IIU.CUSTOM_STATUS;
                });
            return {
                status: (0, u.Z)(n) ? v.Skl.STREAMING : f.Z.getStatus(t.id),
                isMobileOnline: f.Z.isMobileOnline(t.id)
            };
        }),
        q = y === N.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80,
        Q = s()(R.avatar, {
            [R.hoisted]: b,
            [R.biteSize]: y === N.y0.BITE_SIZE,
            [R.fullSize]: y === N.y0.FULL_SIZE,
            [R.panel]: y === N.y0.PANEL
        }),
        {
            avatarDecorationSrc: X,
            avatarSrc: $,
            eventHandlers: J
        } = (0, I.Z)({
            user: t,
            guildId: null != n ? n.guildId : a,
            size: q,
            animateOnHover: D
        }),
        ee = (0, r.jsx)(C, {
            src: $,
            avatarDecoration: X,
            size: q,
            'aria-label': t.username,
            imageClassName: null != L ? R.overlay : void 0,
            status: H ? v.Skl.UNKNOWN : K,
            statusBackdropColor: V && !H ? (0, l.getStatusBackdropColor)(G) : void 0,
            isMobile: z,
            statusTooltip: !0,
            statusTooltipDelay: N.vB
        }),
        et = () =>
            null == L
                ? (0, r.jsx)('div', {
                      ...J,
                      children: ee
                  })
                : (0, r.jsx)(l.Clickable, {
                      ...J,
                      onClick: () => {
                          B({
                              action: 'PRESS_VIEW_PROFILE',
                              analyticsLocations: k
                          }),
                              null == L || L();
                      },
                      className: R.clickable,
                      children: ee
                  });
    return (0, r.jsxs)('div', {
        className: Q,
        onFocus: j,
        onBlur: W,
        onMouseOver: j,
        onMouseLeave: W,
        children: [
            (0, r.jsx)(l.Popout, {
                renderPopout: (e) => {
                    let { setPopoutRef: n } = e;
                    return (0, r.jsx)(g.Z, {
                        user: t,
                        guildId: a,
                        channelId: p,
                        profileType: y,
                        sourceType: N.n_.AVATAR,
                        modalKey: F,
                        setPopoutRef: n,
                        onInteraction: M,
                        setInteractionToastShown: U,
                        setInteractionSent: w,
                        setIsReplyInteraction: x
                    });
                },
                animationPosition: 'top',
                position: 'bottom',
                align: 'center',
                shouldShow: P,
                children: () => et()
            }),
            (0, r.jsx)(T.Z, {
                user: t,
                sourceType: N.n_.AVATAR,
                isVisible: Z,
                isExpandable: !1,
                onInteraction: M,
                setInteractionToastShown: U,
                setInteractionSent: w,
                setIsReplyInteraction: x
            })
        ]
    });
}
