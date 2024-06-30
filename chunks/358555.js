n.d(i, {
    Z: function () {
        return R;
    }
});
var o = n(735250);
n(470079);
var t = n(120356), r = n.n(t), a = n(442837), l = n(481060), s = n(666188), c = n(623624), d = n(290034), u = n(271383), _ = n(594174), g = n(940627), E = n(705600), f = n(267642), T = n(981631), N = n(689938), I = n(556903);
function h(e) {
    let {
            guild: i,
            isBannerVisible: n,
            disableBoostClick: t
        } = e, r = (0, a.e7)([
            _.default,
            u.ZP
        ], () => {
            let e = _.default.getCurrentUser();
            return u.ZP.isMember(i.id, null == e ? void 0 : e.id);
        }), {
            premiumTier: s,
            premiumSubscriberCount: g
        } = i;
    if (0 === g && s === T.Eu4.NONE)
        return null;
    let E = e => {
            e.stopPropagation(), e.preventDefault(), r && !t && (0, c.f)({
                guildId: i.id,
                location: {
                    section: T.jXE.GUILD_HEADER,
                    object: T.qAy.BOOST_GEM_ICON
                }
            });
        }, h = s === T.Eu4.NONE ? N.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : f.nW(s), p = (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)('div', {
                    className: I.tierTooltipTitle,
                    children: h
                }),
                (0, o.jsx)('div', { children: N.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({ subscriberCount: g }) })
            ]
        });
    return (0, o.jsx)('div', {
        className: I.guildIconContainer,
        children: (0, o.jsx)(l.Tooltip, {
            text: p,
            position: 'bottom',
            'aria-label': null != h ? h : '',
            children: e => (0, o.jsx)(l.Clickable, {
                ...e,
                className: I.__invalid_premiumGuildIcon,
                onClick: E,
                children: (0, o.jsx)(d.Z, {
                    premiumTier: s,
                    iconBackgroundClassName: n ? I.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                    iconClassName: n && s !== T.Eu4.TIER_3 ? I.boostedGuildTierMutedIconWithVisibleBanner : null
                })
            })
        })
    });
}
function p(e) {
    let {
        guild: i,
        disableColor: n,
        disableBoostClick: t
    } = e;
    return (0, s.Z)(i) ? (0, o.jsx)('div', {
        className: I.guildIconV2Container,
        children: (0, o.jsx)(E.Z, {
            guild: i,
            tooltipPosition: 'bottom',
            tooltipColor: l.Tooltip.Colors.PRIMARY,
            className: r()(I.guildBadge, { [I.disableColor]: n }),
            disableBoostClick: t
        })
    }) : (0, o.jsx)('div', {
        className: I.guildIconContainer,
        children: (0, o.jsx)(g.Z, {
            guild: i,
            tooltipPosition: 'bottom',
            tooltipColor: l.Tooltip.Colors.PRIMARY,
            className: r()(I.guildBadge, { [I.disableColor]: n })
        })
    });
}
function R(e) {
    let {
        guild: i,
        isBannerVisible: n,
        disableBoostClick: t
    } = e;
    return (0, s.Z)(i) ? (0, o.jsx)(p, {
        guild: i,
        disableColor: !1,
        disableBoostClick: t
    }) : i.hasFeature(T.oNc.VERIFIED) || i.hasFeature(T.oNc.PARTNERED) ? (0, o.jsx)(p, {
        guild: i,
        disableColor: !n
    }) : (0, o.jsx)(h, {
        guild: i,
        isBannerVisible: n,
        disableBoostClick: t
    });
}
