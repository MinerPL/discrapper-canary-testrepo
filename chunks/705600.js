n.d(t, {
    Z: function () {
        return L;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(692547), u = n(780384), c = n(481060), d = n(353093), _ = n(979264), E = n(284363), f = n(854218), h = n(623624), p = n(210887), m = n(271383), I = n(594174), T = n(267642), g = n(797717), S = n(672752), A = n(665786), N = n(697725), v = n(981631), O = n(689938), R = n(325026);
let C = {
    [E.Q.STAFF]: {
        IconComponent: c.StaffBadgeIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [E.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: c.CheckmarkSmallIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [E.Q.VERIFIED]: {
        IconComponent: c.CheckmarkSmallIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [E.Q.PARTNERED]: {
        IconComponent: (0, c.makeIconCompat)(A.Z),
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
    },
    [E.Q.COMMUNITY]: {
        IconComponent: c.HomeIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: S.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
    },
    [E.Q.DISCOVERABLE]: {
        IconComponent: c.GlobeEarthIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: S.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
    },
    [E.Q.CLAN]: {},
    [E.Q.NONE]: {}
};
function y(e) {
    let {guildTraits: t} = e;
    return (0, r.jsxs)('div', {
        className: R.tooltipPremiumFooterContainer,
        children: [
            (0, r.jsxs)('div', {
                className: o()(R.tooltipPremiumFooterSegment, R.tooltipPremiumFooterTierSegment),
                children: [
                    (0, r.jsx)(N.Z, {
                        width: 18,
                        height: 18,
                        className: R.gemIcon
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: T.nW(t.premiumTier)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: o()(R.tooltipPremiumFooterSegment),
                children: (0, r.jsx)(c.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: O.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({ count: t.premiumSubscriberCount })
                })
            })
        ]
    });
}
function D(e) {
    let {
            badgeType: t,
            guildTraits: n
        } = e, {
            tooltipTitle: i,
            tooltipSubtitle: a,
            tooltipDescription: o
        } = function (e, t) {
            let n = t === f.PZ.PUBLIC ? O.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : O.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
            switch (e) {
            case E.Q.STAFF:
                return {
                    tooltipTitle: O.Z.Messages.INTERNAL_EMPLOYEE_ONLY,
                    tooltipSubtitle: O.Z.Messages.INTERNAL_EMPLOYEE_ONLY,
                    tooltipDescription: O.Z.Messages.INTERNAL_EMPLOYEE_ONLY
                };
            case E.Q.VERIFIED:
                return {
                    tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                    tooltipSubtitle: O.Z.Messages.GUILD_VERIFIED,
                    tooltipDescription: n
                };
            case E.Q.PARTNERED:
                return {
                    tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                    tooltipSubtitle: O.Z.Messages.GUILD_PARTNERED,
                    tooltipDescription: n
                };
            case E.Q.VERIFIED_AND_PARTNERED:
                return {
                    tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                    tooltipSubtitle: O.Z.Messages.GUILD_VERIFIED_AND_PARTNERED,
                    tooltipDescription: n
                };
            case E.Q.COMMUNITY:
                return {
                    tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                    tooltipDescription: O.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                };
            case E.Q.DISCOVERABLE:
                return {
                    tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                    tooltipDescription: O.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                };
            case E.Q.CLAN:
                return {
                    tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_CLAN,
                    tooltipDescription: O.Z.Messages.SERVER_BADGE_DESCRIPTION_APPLICATION_REQUIRED
                };
            default:
                return { tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN };
            }
        }(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: R.tooltipBodyContainer,
                children: [
                    (0, r.jsx)(c.Text, {
                        color: 'interactive-active',
                        variant: 'text-xs/bold',
                        children: i
                    }),
                    null != a ? (0, r.jsx)(c.Text, {
                        color: 'text-muted',
                        variant: 'text-xs/medium',
                        children: a
                    }) : null,
                    null != o ? (0, r.jsx)(c.Text, {
                        color: 'text-muted',
                        variant: 'text-xs/medium',
                        children: o
                    }) : null
                ]
            }),
            n.premium ? (0, r.jsx)(y, { guildTraits: n }) : null
        ]
    });
}
function L(e) {
    let t, n, {
            guild: a,
            tooltipColor: l = c.Tooltip.Colors.BRAND,
            tooltipPosition: T,
            className: S,
            flowerStarClassName: A,
            iconClassName: N,
            badgeStrokeColor: O,
            badgeColor: y,
            size: L = 16,
            disableBoostClick: b,
            'aria-label': M = !1
        } = e, P = (0, s.e7)([
            I.default,
            m.ZP
        ], () => {
            let e = I.default.getCurrentUser();
            return m.ZP.isMember(null == a ? void 0 : a.id, null == e ? void 0 : e.id);
        }), U = (0, s.e7)([p.Z], () => p.Z.theme), w = (0, f.XX)(a), x = (0, E.i)(w), G = i.useCallback(e => {
            w.premium && P && !b && (e.stopPropagation(), e.preventDefault(), (0, h.f)({
                guildId: a.id,
                location: {
                    section: v.jXE.GUILD_HEADER,
                    object: v.qAy.BOOST_GEM_ICON
                }
            }));
        }, [
            w.premium,
            P,
            b,
            a.id
        ]);
    if (x === E.Q.NONE)
        return null;
    if (x === E.Q.CLAN) {
        var k;
        let e = (0, d.ky)(a.id, null === (k = a.clan) || void 0 === k ? void 0 : k.badge, L);
        return (0, r.jsx)(c.Tooltip, {
            color: l,
            position: T,
            'aria-label': M,
            text: (0, r.jsx)(D, {
                badgeType: x,
                guildTraits: w
            }),
            tooltipContentClassName: R.tooltipRemovePadding,
            children: t => (0, r.jsx)(c.Clickable, {
                ...t,
                onClick: G,
                className: o()(R.clanBadgeContainer, S),
                children: (0, r.jsx)(_.KQ, {
                    src: e,
                    size: L
                })
            })
        });
    }
    let {
        IconComponent: B,
        backgroundDarkColor: F,
        backgroundLightColor: V,
        foregroundDarkColor: H,
        foregroundLightColor: Z,
        premiumBackgroundColor: Y,
        premiumForegroundColor: j
    } = C[x];
    if (null == B)
        return null;
    w.premium && (t = j, n = Y);
    let W = (0, u.wj)(U) ? H : Z, K = (0, u.wj)(U) ? F : V;
    return t = null != t ? t : W, n = null != n ? n : K, (0, r.jsx)(c.Tooltip, {
        color: l,
        position: T,
        'aria-label': M,
        text: (0, r.jsx)(D, {
            badgeType: x,
            guildTraits: w
        }),
        tooltipContentClassName: R.tooltipRemovePadding,
        children: e => (0, r.jsx)(c.Clickable, {
            onClick: G,
            children: (0, r.jsx)(g.Z, {
                ...e,
                className: S,
                flowerStarClassName: A,
                color: null != n ? n : y,
                stroke: O,
                size: L,
                children: (0, r.jsx)(B, {
                    className: N,
                    color: null != t ? t : 'currentColor'
                })
            })
        })
    });
}
