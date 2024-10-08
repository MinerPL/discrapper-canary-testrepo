n.d(t, {
    Z: function () {
        return D;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(692547),
    u = n(780384),
    c = n(481060),
    d = n(353093),
    _ = n(979264),
    E = n(436774),
    f = n(623624),
    h = n(297700),
    p = n(210887),
    I = n(271383),
    m = n(594174),
    T = n(665786),
    S = n(697725),
    g = n(267642),
    A = n(284363),
    N = n(854218),
    O = n(981631),
    R = n(689938),
    v = n(435841);
let C = {
    [A.Q.STAFF]: {
        IconComponent: c.StaffBadgeIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [A.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: c.CheckmarkSmallIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [A.Q.VERIFIED]: {
        IconComponent: c.CheckmarkSmallIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [A.Q.PARTNERED]: {
        IconComponent: (0, c.makeIconCompat)(T.Z),
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
    },
    [A.Q.COMMUNITY]: {
        IconComponent: c.HomeIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: E.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [A.Q.DISCOVERABLE]: {
        IconComponent: c.GlobeEarthIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: E.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [A.Q.CLAN]: {},
    [A.Q.NONE]: {}
};
function L(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)('div', {
        className: v.tooltipPremiumFooterContainer,
        children: [
            (0, r.jsxs)('div', {
                className: s()(v.tooltipPremiumFooterSegment, v.tooltipPremiumFooterTierSegment),
                children: [
                    (0, r.jsx)(S.Z, {
                        width: 18,
                        height: 18,
                        className: v.gemIcon
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: g.nW(t.premiumTier)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: s()(v.tooltipPremiumFooterSegment),
                children: (0, r.jsx)(c.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: R.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({ count: t.premiumSubscriberCount })
                })
            })
        ]
    });
}
function y(e) {
    let { badgeType: t, guildTraits: n } = e,
        {
            tooltipTitle: i,
            tooltipSubtitle: a,
            tooltipDescription: s
        } = (function (e, t) {
            let n = t === N.PZ.PUBLIC ? R.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : R.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
            switch (e) {
                case A.Q.STAFF:
                    return {
                        tooltipTitle: R.Z.Messages.INTERNAL_EMPLOYEE_ONLY,
                        tooltipSubtitle: R.Z.Messages.INTERNAL_EMPLOYEE_ONLY,
                        tooltipDescription: R.Z.Messages.INTERNAL_EMPLOYEE_ONLY
                    };
                case A.Q.VERIFIED:
                    return {
                        tooltipTitle: R.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                        tooltipSubtitle: R.Z.Messages.GUILD_VERIFIED,
                        tooltipDescription: n
                    };
                case A.Q.PARTNERED:
                    return {
                        tooltipTitle: R.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                        tooltipSubtitle: R.Z.Messages.GUILD_PARTNERED,
                        tooltipDescription: n
                    };
                case A.Q.VERIFIED_AND_PARTNERED:
                    return {
                        tooltipTitle: R.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                        tooltipSubtitle: R.Z.Messages.GUILD_VERIFIED_AND_PARTNERED,
                        tooltipDescription: n
                    };
                case A.Q.COMMUNITY:
                    return {
                        tooltipTitle: R.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                        tooltipDescription: R.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                    };
                case A.Q.DISCOVERABLE:
                    return {
                        tooltipTitle: R.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                        tooltipDescription: R.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                    };
                case A.Q.CLAN:
                    return {
                        tooltipTitle: R.Z.Messages.SERVER_BADGE_TITLE_CLAN,
                        tooltipDescription: R.Z.Messages.SERVER_BADGE_DESCRIPTION_APPLICATION_REQUIRED
                    };
                default:
                    return { tooltipTitle: R.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN };
            }
        })(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: v.tooltipBodyContainer,
                children: [
                    (0, r.jsx)(c.Text, {
                        color: 'interactive-active',
                        variant: 'text-xs/bold',
                        children: i
                    }),
                    null != a
                        ? (0, r.jsx)(c.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: a
                          })
                        : null,
                    null != s
                        ? (0, r.jsx)(c.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: s
                          })
                        : null
                ]
            }),
            n.premium ? (0, r.jsx)(L, { guildTraits: n }) : null
        ]
    });
}
function D(e) {
    let t,
        n,
        { guild: a, tooltipColor: l = c.Tooltip.Colors.BRAND, tooltipPosition: E, className: T, flowerStarClassName: S, iconClassName: g, badgeStrokeColor: R, badgeColor: L, size: D = 16, disableBoostClick: b, 'aria-label': M = !1 } = e,
        P = (0, o.e7)([m.default, I.ZP], () => {
            let e = m.default.getCurrentUser();
            return I.ZP.isMember(null == a ? void 0 : a.id, null == e ? void 0 : e.id);
        }),
        U = (0, o.e7)([p.Z], () => p.Z.theme),
        w = (0, N.XX)(a),
        x = (0, A.i)(w),
        G = i.useCallback(
            (e) => {
                w.premium &&
                    P &&
                    !b &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, f.f)({
                        guildId: a.id,
                        location: {
                            section: O.jXE.GUILD_HEADER,
                            object: O.qAy.BOOST_GEM_ICON
                        }
                    }));
            },
            [w.premium, P, b, a.id]
        );
    if (x === A.Q.NONE) return null;
    if (x === A.Q.CLAN) {
        var k;
        let e = (0, d.ky)(a.id, null === (k = a.clan) || void 0 === k ? void 0 : k.badge, D);
        return null == e
            ? null
            : (0, r.jsx)(c.Tooltip, {
                  color: l,
                  position: E,
                  'aria-label': M,
                  text: (0, r.jsx)(y, {
                      badgeType: x,
                      guildTraits: w
                  }),
                  tooltipContentClassName: v.tooltipRemovePadding,
                  children: (t) =>
                      (0, r.jsx)(c.Clickable, {
                          ...t,
                          onClick: G,
                          className: s()(v.clanBadgeContainer, T),
                          children: (0, r.jsx)(_.KQ, {
                              src: e,
                              size: D
                          })
                      })
              });
    }
    let { IconComponent: B, backgroundDarkColor: F, backgroundLightColor: V, foregroundDarkColor: H, foregroundLightColor: Z, premiumBackgroundColor: Y, premiumForegroundColor: j, sizeAdjustment: W } = C[x];
    if (null == B) return null;
    w.premium && ((t = j), (n = Y));
    let K = (0, u.wj)(U) ? H : Z,
        z = (0, u.wj)(U) ? F : V;
    (t = null != t ? t : K), (n = null != n ? n : z);
    let q = Math.floor(0.75 * D) - (null != W ? W : 0);
    return (0, r.jsx)(c.Tooltip, {
        color: l,
        position: E,
        'aria-label': M,
        text: (0, r.jsx)(y, {
            badgeType: x,
            guildTraits: w
        }),
        tooltipContentClassName: v.tooltipRemovePadding,
        children: (e) =>
            (0, r.jsx)(c.Clickable, {
                onClick: G,
                children: (0, r.jsx)(h.Z, {
                    ...e,
                    className: T,
                    flowerStarClassName: S,
                    allowFullSizedIcon: !0,
                    color: null != n ? n : L,
                    stroke: R,
                    size: D,
                    children: (0, r.jsx)(B, {
                        size: 'custom',
                        width: q,
                        height: q,
                        className: g,
                        color: null != t ? t : 'currentColor'
                    })
                })
            })
    });
}
