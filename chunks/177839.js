n(47120);
var s = n(735250), a = n(470079), r = n(120356), i = n.n(r), l = n(399606), o = n(481060), c = n(607070), d = n(100527), _ = n(906732), u = n(66595), E = n(535322), T = n(477734), I = n(626135), R = n(881100), C = n(981631), p = n(689938), g = n(318219);
let A = e => e ? p.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : p.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE, m = e => {
        let {
            isShowingAll: t,
            onClick: n
        } = e;
        return (0, s.jsxs)(o.Clickable, {
            onClick: n,
            className: g.customButton,
            children: [
                t ? p.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : p.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL,
                t ? (0, s.jsx)(o.ChevronSmallUpIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.arrow
                }) : (0, s.jsx)(o.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.arrow
                })
            ]
        });
    }, N = e => {
        let {
                title: t,
                description: n,
                className: a,
                imageSource: r,
                imageClassName: l,
                titleBadge: c,
                isNew: T = !1,
                isEarlyAccess: I = !1
            } = e, {analyticsLocations: R} = (0, _.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
        return (0, s.jsx)(_.Gt, {
            value: R,
            children: (0, s.jsxs)('div', {
                className: i()(g.perkCard, a),
                children: [
                    T ? (0, s.jsx)(E.Z, {
                        className: g.perkCardNewBadge,
                        shouldInheritBackgroundColor: !0,
                        shouldInheritTextColor: !0
                    }) : null,
                    I ? (0, s.jsx)(u.Z, { className: g.perkCardEarlyAccessBadge }) : null,
                    (0, s.jsx)('img', {
                        src: r,
                        alt: '',
                        className: i()(l, g.perksCardArt)
                    }),
                    (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsxs)(o.Heading, {
                                variant: 'heading-lg/extrabold',
                                className: g.perkCardHeading,
                                children: [
                                    t,
                                    ' ',
                                    c
                                ]
                            }),
                            (0, s.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                className: g.perkCardDescription,
                                children: 'function' == typeof n ? n(R) : n
                            })
                        ]
                    })
                ]
            })
        });
    };
t.Z = e => {
    let {
            className: t,
            isSubscriberNitroHome: n = !1
        } = e, [r, d] = a.useState(!1), u = (0, R.N)({ styles: g }), E = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), {analyticsLocations: p} = (0, _.ZP)(), f = (0, T._f)(), S = [
            u.emoji,
            u.streaming,
            u.upload,
            u.customAppIcons,
            u.soundboard,
            f ? u.remix : u.videoBackground,
            u.superReactions,
            u.stickersPerkDiscoverability,
            u.badgeAlt
        ];
    return (0, s.jsxs)('div', {
        className: i()(g.perksContainer, t, {
            [g.partiallyHidden]: n && !r,
            [g.subscriberNitroHome]: n,
            [g.reducedMotion]: E
        }),
        children: [
            (0, s.jsx)(o.Heading, {
                variant: 'heading-xxl/extrabold',
                className: i()(g.perksTitle),
                children: A(n)
            }),
            (0, s.jsx)('div', {
                className: i()(g.perkCardContainer, { [g.perkCardContainerExpanded]: r }),
                children: S.map(e => null != e && (0, s.jsx)(N, { ...e }, e.title))
            }),
            n && (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)('div', {
                        className: i()({
                            [g.sizeGizmo]: !r,
                            [g.sizeGizmoExpanded]: r
                        }),
                        children: (0, s.jsx)(m, {
                            onClick: () => {
                                I.default.track(C.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                    location_stack: p,
                                    was_expanded: r
                                }), d(!r);
                            },
                            isShowingAll: r
                        })
                    }),
                    (0, s.jsx)('div', { className: i()(g.cover, { [g.hidden]: r }) })
                ]
            })
        ]
    });
};
