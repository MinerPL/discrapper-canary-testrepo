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
    N = n(234328);
let O = h.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function R(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: h, profileType: R, animateOnHover: v, onOpenProfile: C } = e,
        { theme: y } = (0, T.z)(),
        { analyticsLocations: L } = (0, d.ZP)(c.Z.AVATAR),
        { trackUserProfileAction: D } = (0, p.KZ)(),
        b = f.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, A.p9.TIER_2),
        M = i.useMemo(() => t.isNonUserBot() || (0, _.W)(t, h), [t, h]),
        { live: P } = (0, I.Z)(t.id),
        [U] = P,
        { status: w, isMobileOnline: x } = (0, o.cj)([E.Z], () => ({
            status: (0, u.Z)(U) ? g.Skl.STREAMING : E.Z.getStatus(t.id),
            isMobileOnline: E.Z.isMobileOnline(t.id)
        })),
        G = R === S.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80,
        k = s()(N.avatar, {
            [N.biteSize]: R === S.y0.BITE_SIZE,
            [N.fullSize]: R === S.y0.FULL_SIZE,
            [N.panel]: R === S.y0.PANEL
        }),
        {
            avatarDecorationSrc: B,
            avatarSrc: F,
            eventHandlers: V
        } = (0, m.Z)({
            user: t,
            guildId: null != n ? n.guildId : a,
            size: G,
            animateOnHover: v
        }),
        H = (0, r.jsx)(O, {
            src: F,
            avatarDecoration: B,
            size: G,
            'aria-label': t.username,
            imageClassName: null != C ? N.overlay : void 0,
            status: M ? g.Skl.UNKNOWN : w,
            statusBackdropColor: b && !M ? (0, l.getStatusBackdropColor)(y) : void 0,
            isMobile: x,
            statusTooltip: !0,
            statusTooltipDelay: S.vB
        });
    return null == C
        ? (0, r.jsx)('div', {
              ...V,
              className: k,
              children: H
          })
        : (0, r.jsx)(l.Clickable, {
              ...V,
              className: s()(k, N.clickable),
              focusProps: { ringClassName: N.focusRing },
              onClick: () => {
                  D({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: L
                  }),
                      null == C || C();
              },
              children: H
          });
}
