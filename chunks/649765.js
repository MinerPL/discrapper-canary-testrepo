n.d(t, {
    A7: function () {
        return C;
    },
    Em: function () {
        return f;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(704215),
    r = n(481060),
    l = n(605236),
    o = n(765585),
    c = n(703656),
    d = n(119269),
    u = n(938736),
    _ = n(227140),
    E = n(981631),
    h = n(921944),
    m = n(689938),
    I = n(256345);
let g = 'url(#dark-purple-gradient)',
    p = () =>
        (0, i.jsxs)('div', {
            className: I.coachtipContent,
            children: [
                (0, i.jsx)(r.Heading, {
                    variant: 'heading-sm/bold',
                    children: m.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS
                }),
                (0, i.jsx)(r.Text, {
                    variant: 'text-xs/normal',
                    children: m.Z.Messages.REFERRAL_PROGRAM_HOME_BADGE_SUBHEADER.format({ numReferrals: 3 })
                })
            ]
        }),
    T = () =>
        (0, i.jsx)('svg', {
            width: '15',
            height: '15',
            viewBox: '0 0 15 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, i.jsx)('path', {
                d: 'M10.8079 11.6918C11.052 11.9359 11.4477 11.9359 11.6918 11.6918C11.9359 11.4477 11.9359 11.052 11.6918 10.8079L8.38384 7.49996L11.6918 4.19201C11.9359 3.94793 11.9359 3.5522 11.6918 3.30813C11.4477 3.06405 11.052 3.06405 10.8079 3.30813L7.49996 6.61607L4.19194 3.30806C3.94786 3.06398 3.55214 3.06398 3.30806 3.30806C3.06398 3.55214 3.06398 3.94786 3.30806 4.19194L6.61608 7.49996L3.30806 10.808C3.06398 11.0521 3.06398 11.4478 3.30806 11.6919C3.55214 11.9359 3.94786 11.9359 4.19194 11.6919L7.49996 8.38384L10.8079 11.6918Z',
                fill: 'white'
            })
        }),
    S = () => (0, l.EW)(s.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: h.L.TAKE_ACTION }),
    C = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(r.Popout, {
            shouldShow: !0,
            renderPopout: () =>
                (0, i.jsx)(o.Z, {
                    artClassName: I.coachmarkArt,
                    dismissIconClassName: I.exitIcon,
                    onDismissIconClick: S,
                    dismissIcon: (0, i.jsx)(T, {}),
                    headerClassName: I.incentiveCoachtipContent,
                    contentClassName: I.incentiveCoachtipContainer,
                    pointerClassName: I.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, c.uL)(E.Z5c.NITRO_HOME), S();
                    },
                    art: (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(d.Z, {
                            staticPercentage: 100,
                            iconClassName: I.incentiveIcon,
                            showAnimations: !1,
                            progressCircleVariation: d.Q.NITRO_LOGO,
                            ellipseOpacity: 1,
                            circleColor: g,
                            circleStroke: g,
                            progressCircleStrokeSize: 4
                        })
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: m.Z.Messages.CHECK_IT_OUT,
                    header: m.Z.Messages.REFERRAL_INCENTIVE_SHARE_NITRO_GET_DISCOUNT.format({ discountRate: u.Nq }),
                    hideDismissButton: !0,
                    body: m.Z.Messages.REFERRAL_INCENTIVE_GET_DISCOUNT_OFF_YOUR_NEXT_MONTH.format({ discountRate: u.Nq }),
                    dismissibleContent: s.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    f = (e) => {
        let { children: t } = e,
            n = (0, i.jsxs)('div', {
                className: I.coachTipContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: I.iconContainer,
                        children: (0, i.jsx)(d.Z, {
                            staticPercentage: 100,
                            iconClassName: I.icon,
                            showAnimations: !0,
                            progressCircleVariation: d.Q.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: I.customCircleAnimation,
                            circleColor: 'url(#purple-gradient)'
                        })
                    }),
                    (0, i.jsx)(p, {})
                ]
            });
        return (0, i.jsx)(r.Tooltip, {
            text: n,
            position: 'right',
            'aria-label': m.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
            tooltipClassName: I.marketingBadgeTooltip,
            allowOverflow: !0,
            tooltipContentClassName: I.tooltipContent,
            children: (e) =>
                (0, i.jsx)('div', {
                    ...e,
                    children: t
                })
        });
    };
t.ZP = (e) => {
    let { isSelected: t, onSelect: n } = e;
    return (
        a.useEffect(() => {
            t && n();
        }, [t, n]),
        (0, i.jsx)(_.Z, { copy: m.Z.Messages.NEW })
    );
};
