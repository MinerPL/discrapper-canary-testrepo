n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(735250), a = n(470079), l = n(442837), s = n(974674), r = n(481060), o = n(420660), c = n(100527), u = n(906732), d = n(233440), h = n(199902), p = n(158776), m = n(998502), _ = n(785717), f = n(204197), E = n(78675), C = n(438163), g = n(652853), I = n(228168), x = n(981631), T = n(775784);
let N = m.ZP.getEnableHardwareAcceleration() ? s.Xo : s.qE, v = r.AvatarSizes.SIZE_80;
function S(e) {
    let {
            user: t,
            displayProfile: n,
            channel: s,
            isHovering: m,
            onOpenProfile: S
        } = e, {theme: Z} = (0, g.z)(), {analyticsLocations: A} = (0, u.ZP)(c.Z.AVATAR), {trackUserProfileAction: M} = (0, _.KZ)(), b = null == n ? void 0 : n.canUsePremiumProfileCustomization, {
            avatarSrc: R,
            eventHandlers: j,
            avatarDecorationSrc: L
        } = (0, f.Z)({
            user: t,
            size: v,
            animateOnHover: !m
        }), P = a.useMemo(() => (0, d.W)(t, s.id), [
            t,
            s.id
        ]), {
            status: O,
            isMobileOnline: y
        } = (0, l.cj)([
            h.Z,
            p.Z
        ], () => {
            let e = null != h.Z.getAnyStreamForUser(t.id), n = p.Z.findActivity(t.id, t => {
                    let {type: n} = t;
                    return e ? n === x.IIU.PLAYING : n !== x.IIU.CUSTOM_STATUS;
                });
            return {
                status: (0, o.Z)(n) ? r.StatusTypes.STREAMING : p.Z.getStatus(t.id),
                isMobileOnline: p.Z.isMobileOnline(t.id)
            };
        });
    return (0, i.jsxs)('header', {
        className: T.header,
        children: [
            (0, i.jsx)(E.Z, {
                user: t,
                displayProfile: n,
                profileType: I.y0.PANEL,
                animateOnHover: !m
            }),
            (0, i.jsx)(r.Clickable, {
                ...j,
                className: T.clickable,
                onClick: () => {
                    M({
                        action: 'PRESS_VIEW_PROFILE',
                        analyticsLocations: A
                    }), null == S || S();
                },
                children: (0, i.jsx)(N, {
                    src: R,
                    avatarDecoration: L,
                    size: v,
                    imageClassName: T.overlay,
                    status: P || t.isNonUserBot() ? r.StatusTypes.UNKNOWN : O,
                    statusBackdropColor: b && !P ? (0, r.getStatusBackdropColor)(Z) : void 0,
                    'aria-label': t.username,
                    isMobile: y,
                    statusTooltip: !0,
                    statusTooltipDelay: I.vB
                })
            }),
            (0, i.jsx)(C.Z, {
                user: t,
                profileType: I.y0.PANEL
            })
        ]
    });
}
