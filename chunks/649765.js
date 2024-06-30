n.d(t, {
    E: function () {
        return _;
    }
});
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(481060), o = n(206180), c = n(119269), d = n(689938), u = n(616614);
let _ = e => {
    let {children: t} = e, n = (0, i.jsxs)('div', {
            className: u.coachTipContainer,
            children: [
                (0, i.jsx)('div', {
                    className: u.iconContainer,
                    children: (0, i.jsx)(c.Z, {
                        staticPercentage: 100,
                        iconClassName: u.icon,
                        showAnimations: !0,
                        progressCircleVariation: c.Q.NITRO_LOGO,
                        ellipseOpacity: 1,
                        customAnimationClassName: u.customCircleAnimation,
                        circleColor: 'url(#purple-gradient)'
                    })
                }),
                (0, i.jsxs)('div', {
                    className: u.coachtipContent,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-sm/bold',
                            children: d.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            children: d.Z.Messages.REFERRAL_PROGRAM_HOME_BADGE_SUBHEADER.format({ numReferrals: 3 })
                        })
                    ]
                })
            ]
        });
    return (0, i.jsx)(l.Tooltip, {
        text: n,
        position: 'right',
        'aria-label': d.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
        tooltipClassName: u.marketingBadgeTooltip,
        allowOverflow: !0,
        tooltipContentClassName: u.tooltipContent,
        children: e => (0, i.jsx)('div', {
            ...e,
            children: t
        })
    });
};
t.Z = e => {
    let {
        isSelected: t,
        onSelect: n
    } = e;
    return s.useEffect(() => {
        t && n();
    }, [
        t,
        n
    ]), (0, i.jsxs)('div', {
        className: u.badgeContainer,
        children: [
            (0, i.jsx)('div', {
                className: u.newBadge,
                children: d.Z.Messages.NEW
            }),
            (0, i.jsx)('span', {
                className: r()(u.star, u.starLeft),
                children: (0, i.jsx)(o.Z, {
                    width: 8,
                    height: 8
                })
            }),
            (0, i.jsx)('span', {
                className: r()(u.star, u.starRight),
                children: (0, i.jsx)(o.Z, {
                    width: 13,
                    height: 13
                })
            })
        ]
    });
};
