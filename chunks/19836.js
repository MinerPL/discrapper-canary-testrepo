n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(442837), s = n(481060), l = n(2052), u = n(580552), c = n(594174), d = n(346656), _ = n(74538), E = n(588822), f = n(659101), h = n(981631), p = n(689938), m = n(820499), I = n(546136);
function T(e) {
    let {guildName: t} = e;
    return (0, r.jsxs)('div', {
        className: m.guildMemberProfileTooltip,
        children: [
            (0, r.jsx)(s.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: m.guildMemberProfileTooltipNitroWheel
            }),
            p.Z.Messages.GUILD_IDENTITY_BIO_TOAST.format({ guildName: t })
        ]
    });
}
function g(e) {
    let {
            guild: t,
            bio: i,
            hidePersonalInformation: g,
            isUsingGuildBio: S,
            lastSection: A = !1,
            animateOnHover: N = !1,
            isHovering: v = !1,
            lineClamp: O,
            userId: R
        } = e, {location: C} = (0, l.O)(), y = (0, o.e7)([c.default], () => c.default.getCurrentUser()), D = _.ZP.canUsePremiumGuildMemberProfile(y), L = (0, u.Z)(R);
    return (g || null == i || '' === i) && !L ? null : (0, r.jsxs)(f.Z, {
        lastSection: A,
        children: [
            (0, r.jsxs)(s.Heading, {
                variant: 'eyebrow',
                className: I.title,
                children: [
                    p.Z.Messages.USER_POPOUT_ABOUT_ME,
                    null != t && S && (0, r.jsx)(s.Tooltip, {
                        color: s.Tooltip.Colors.NESTED,
                        tooltipClassName: m.aboutMeGuildIconTooltip,
                        'aria-label': p.Z.Messages.GUILD_IDENTITY_BIO_TOAST.format({ guildName: t.name }),
                        text: (0, r.jsx)(T, { guildName: t.name }),
                        children: e => (0, r.jsx)(d.Z, {
                            ...e,
                            onClick: () => {
                                var t;
                                null == (t = e.onClick) || t(), null != y && !D && (0, s.openModalLazy)(async () => {
                                    let {default: e} = await n.e('84509').then(n.bind(n, 933696));
                                    return t => (0, r.jsx)(e, {
                                        ...t,
                                        source: {
                                            ...C,
                                            object: h.qAy.GUILD_ICON
                                        }
                                    });
                                });
                            },
                            guild: t,
                            size: d.Z.Sizes.SMOL,
                            className: a()(m.aboutMeGuildIcon, { [m.nonPremiumHoverState]: !D })
                        })
                    })
                ]
            }),
            (0, r.jsx)(E.Z, {
                userBio: i,
                animateOnHover: N,
                isHovering: v,
                lineClamp: O,
                userId: R
            })
        ]
    });
}
