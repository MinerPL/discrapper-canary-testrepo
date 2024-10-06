n.d(t, {
    Z: function () {
        return R;
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
    E = n(158776),
    f = n(74538),
    h = n(998502),
    p = n(785717),
    I = n(369566),
    m = n(518950),
    T = n(652853),
    S = n(228168),
    g = n(981631),
    A = n(474936),
    N = n(8621);
let O = h.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function R(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: h, profileType: R, animateOnHover: v, onOpenProfile: C, className: L } = e,
        { theme: y } = (0, T.z)(),
        { analyticsLocations: D } = (0, d.ZP)(c.Z.AVATAR),
        { trackUserProfileAction: b } = (0, p.KZ)(),
        M = f.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, A.p9.TIER_2),
        P = i.useMemo(() => t.isNonUserBot() || (0, _.W)(t, h), [t, h]),
        { live: U } = (0, I.Z)(t.id),
        [w] = U,
        { status: x, isMobileOnline: G } = (0, o.cj)([E.Z], () => ({
            status: (0, u.Z)(w) ? g.Skl.STREAMING : E.Z.getStatus(t.id),
            isMobileOnline: E.Z.isMobileOnline(t.id)
        })),
        k = R === S.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80,
        B = s()(
            N.avatar,
            {
                [N.biteSize]: R === S.y0.BITE_SIZE,
                [N.fullSize]: R === S.y0.FULL_SIZE,
                [N.panel]: R === S.y0.PANEL
            },
            L
        ),
        {
            avatarDecorationSrc: F,
            avatarSrc: V,
            eventHandlers: H
        } = (0, m.Z)({
            user: t,
            guildId: null != n ? n.guildId : a,
            size: k,
            animateOnHover: v
        }),
        Z = (0, r.jsx)(O, {
            src: V,
            avatarDecoration: F,
            size: k,
            'aria-label': t.username,
            imageClassName: null != C ? N.overlay : void 0,
            status: P ? g.Skl.UNKNOWN : x,
            statusBackdropColor: M && !P ? (0, l.getStatusBackdropColor)(y) : void 0,
            isMobile: G,
            statusTooltip: !0,
            statusTooltipDelay: S.vB
        });
    return null == C
        ? (0, r.jsx)('div', {
              ...H,
              className: B,
              children: Z
          })
        : (0, r.jsx)(l.Clickable, {
              ...H,
              className: s()(B, N.clickable),
              focusProps: { ringClassName: N.focusRing },
              onClick: () => {
                  b({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: D
                  }),
                      null == C || C();
              },
              children: Z
          });
}
