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
    o = n(481060),
    l = n(315263),
    u = n(100527),
    c = n(906732),
    d = n(617136),
    _ = n(497505),
    E = n(626135),
    f = n(291175),
    h = n(785717),
    p = n(221292),
    I = n(485341),
    m = n(797321),
    T = n(228168),
    S = n(981631),
    g = n(474936),
    A = n(689938),
    N = n(36548);
let O = (e) => {
    if (null != e)
        switch (e) {
            case g.VU.PREMIUM_TENURE_1_MONTH:
                return N.tieredTenureBadgeBronzeGlow;
            case g.VU.PREMIUM_TENURE_3_MONTH:
                return N.tieredTenureBadgeSilverGlow;
            case g.VU.PREMIUM_TENURE_6_MONTH:
                return N.tieredTenureBadgeGoldGlow;
            case g.VU.PREMIUM_TENURE_12_MONTH:
                return N.tieredTenureBadgePlatinumGlow;
            case g.VU.PREMIUM_TENURE_24_MONTH:
                return N.tieredTenureBadgeDiamondGlow;
            case g.VU.PREMIUM_TENURE_36_MONTH:
                return N.tieredTenureBadgeEmeraldGlow;
            case g.VU.PREMIUM_TENURE_60_MONTH:
                return N.tieredTenureBadgeRubyGlow;
            case g.VU.PREMIUM_TENURE_72_MONTH:
                return N.tieredTenureBadgeFireGlow;
            default:
                return;
        }
};
function R(e) {
    let { badges: t, className: n, badgeClassName: a, onClose: g } = e,
        { analyticsLocations: R } = (0, c.ZP)(u.Z.BADGE),
        { context: v, trackUserProfileAction: C } = (0, h.KZ)(),
        [y, L] = i.useState(!1);
    return (0, r.jsx)('div', {
        className: s()(N.container, n),
        'aria-label': A.Z.Messages.PROFILE_USER_BADGES,
        role: 'group',
        children: t.map((e) => {
            let t = (0, f.gn)(e.id),
                n = O(t),
                i = null != t && y;
            return (0, r.jsx)(
                o.TooltipContainer,
                {
                    text: e.description,
                    delay: T.vB,
                    tooltipClassName: n,
                    onTooltipShow: () => L(null != t),
                    onTooltipHide: () => L(!1),
                    children: (0, r.jsxs)(o.Anchor, {
                        onClick: (t) => {
                            C({ action: 'PRESS_BADGE' }),
                                (0, p.NE)({
                                    badge: e.id,
                                    analyticsLocations: R,
                                    ...v
                                });
                            let n = null != e.link ? (0, l.default)(e.link, { analyticsLocations: R }) : null;
                            if (null != n) return null == g || g(), n(t);
                        },
                        onMouseEnter: () => {
                            e.id === I.i && E.default.track(S.rMx.QUEST_CONTENT_VIEWED, { ...(0, d.mH)(_.jn.QUEST_BADGE) }),
                                C({ action: 'HOVER_BADGE' }),
                                (0, p.Qf)({
                                    badge: e.id,
                                    analyticsLocations: R,
                                    ...v
                                });
                        },
                        href: e.link,
                        children: [
                            (0, r.jsx)('img', {
                                alt: ' ',
                                'aria-hidden': !0,
                                src: (0, T.jC)(e.icon),
                                className: s()(N.badge, a)
                            }),
                            i &&
                                (0, r.jsxs)('div', {
                                    className: N.starContainer,
                                    children: [(0, r.jsx)(m.Z, { className: N.topLeftStar }), (0, r.jsx)(m.Z, { className: N.bottomRightStar })]
                                })
                        ]
                    })
                },
                e.id
            );
        })
    });
}
