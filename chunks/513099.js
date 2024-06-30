n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(420660), c = n(100527), d = n(906732), _ = n(233440), E = n(199902), f = n(158776), h = n(74538), p = n(998502), m = n(785717), I = n(204197), T = n(652853), g = n(228168), S = n(981631), A = n(474936), N = n(148443);
let v = l.AvatarSizes.SIZE_80, O = p.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function R(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            channelId: p,
            animateOnHover: R,
            onOpenProfile: C
        } = e, {theme: y} = (0, T.z)(), {analyticsLocations: D} = (0, d.ZP)(c.Z.AVATAR), {trackUserProfileAction: L} = (0, m.KZ)(), b = h.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, A.p9.TIER_2), M = i.useMemo(() => (0, _.W)(t, p), [
            t,
            p
        ]), {
            status: P,
            isMobileOnline: U
        } = (0, s.cj)([
            E.Z,
            f.Z
        ], () => {
            let e = null != E.Z.getAnyStreamForUser(t.id), n = f.Z.findActivity(t.id, t => {
                    let {type: n} = t;
                    return e ? n === S.IIU.PLAYING : n !== S.IIU.CUSTOM_STATUS;
                });
            return {
                status: (0, u.Z)(n) ? S.Skl.STREAMING : f.Z.getStatus(t.id),
                isMobileOnline: f.Z.isMobileOnline(t.id)
            };
        }), {
            avatarDecorationSrc: w,
            avatarSrc: x,
            eventHandlers: G
        } = (0, I.Z)({
            user: t,
            guildId: a,
            size: v,
            animateOnHover: R
        }), k = (0, r.jsx)(O, {
            src: x,
            avatarDecoration: w,
            size: v,
            'aria-label': t.username,
            imageClassName: null != C ? N.overlay : void 0,
            status: M ? S.Skl.UNKNOWN : P,
            statusBackdropColor: b && !M ? (0, l.getStatusBackdropColor)(y) : void 0,
            isMobile: U,
            statusTooltip: !0,
            statusTooltipDelay: g.vB
        });
    return null == C ? (0, r.jsx)('div', {
        ...G,
        className: N.avatar,
        children: k
    }) : (0, r.jsx)(l.Clickable, {
        ...G,
        className: o()(N.avatar, N.clickable),
        onClick: () => {
            L({
                action: 'PRESS_VIEW_PROFILE',
                analyticsLocations: D
            }), null == C || C();
        },
        children: k
    });
}
