var s = n(735250);
n(470079);
var a = n(481060),
    r = n(626135),
    i = n(391110),
    l = n(981631),
    o = n(689938),
    c = n(396001);
t.Z = (e) => {
    let { setIsAllPerksVisible: t, previousComponent: n } = e;
    return (0, s.jsx)(a.ShinyButton, {
        color: a.ButtonColors.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: a.ShineSizes.SMALL,
        className: c.seeAllPerksButton,
        onClick: () => {
            t(!0),
                r.default.track(l.rMx.NITRO_HOME_NAVIGATION, {
                    current_component: n,
                    next_component: i.MQ.SEE_ALL,
                    interaction_component: 'See All Button'
                });
        },
        children: (0, s.jsxs)('div', {
            className: c.seeAllPerksButtonContent,
            children: [o.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, (0, s.jsx)(a.ChevronSmallRightIcon, { color: 'currentColor' })]
        })
    });
};
