n.d(t, {
    A7: function () {
        return y;
    },
    CI: function () {
        return L;
    },
    dX: function () {
        return j;
    },
    j$: function () {
        return r;
    },
    lH: function () {
        return R;
    }
});
var i,
    r,
    a = n(200651),
    l = n(192379),
    s = n(704215),
    o = n(481060),
    c = n(774078),
    d = n(605236),
    u = n(765585),
    h = n(703656),
    m = n(706454),
    p = n(74538),
    g = n(924540),
    f = n(119269),
    _ = n(938736),
    E = n(227140),
    I = n(981631),
    C = n(921944),
    v = n(388032),
    S = n(938923),
    N = n(203302);
let T = 'url(#dark-purple-gradient)';
function x(e) {
    return e.toLocaleString(m.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
((i = r || (r = {})).REFERRAL_PROGRAM = 'referral_program'), (i.TRIAL_FOR_ALL = 'trial_for_all');
let b = () =>
        (0, a.jsxs)('div', {
            className: S.coachtipContent,
            children: [
                (0, a.jsx)(o.Heading, {
                    variant: 'heading-sm/bold',
                    children: v.intl.string(v.t.USo4s7)
                }),
                (0, a.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children: v.intl.format(v.t.AGKQq6, { numReferrals: 3 })
                })
            ]
        }),
    A = () =>
        (0, a.jsx)('svg', {
            width: '15',
            height: '15',
            viewBox: '0 0 15 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, a.jsx)('path', {
                d: 'M10.8079 11.6918C11.052 11.9359 11.4477 11.9359 11.6918 11.6918C11.9359 11.4477 11.9359 11.052 11.6918 10.8079L8.38384 7.49996L11.6918 4.19201C11.9359 3.94793 11.9359 3.5522 11.6918 3.30813C11.4477 3.06405 11.052 3.06405 10.8079 3.30813L7.49996 6.61607L4.19194 3.30806C3.94786 3.06398 3.55214 3.06398 3.30806 3.30806C3.06398 3.55214 3.06398 3.94786 3.30806 4.19194L6.61608 7.49996L3.30806 10.808C3.06398 11.0521 3.06398 11.4478 3.30806 11.6919C3.55214 11.9359 3.94786 11.9359 4.19194 11.6919L7.49996 8.38384L10.8079 11.6918Z',
                fill: 'white'
            })
        }),
    Z = () => (0, d.EW)(s.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: C.L.TAKE_ACTION }),
    y = (e) => {
        let { children: t } = e;
        return (0, a.jsx)(o.Popout, {
            shouldShow: !0,
            renderPopout: () =>
                (0, a.jsx)(u.Z, {
                    artClassName: S.coachmarkArt,
                    dismissIconClassName: S.exitIcon,
                    onDismissIconClick: Z,
                    dismissIcon: (0, a.jsx)(A, {}),
                    headerClassName: S.incentiveCoachtipContent,
                    contentClassName: S.incentiveCoachtipContainer,
                    pointerClassName: S.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, h.uL)(I.Z5c.NITRO_HOME), Z();
                    },
                    art: (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(f.Z, {
                            staticPercentage: 100,
                            iconClassName: S.incentiveIcon,
                            showAnimations: !1,
                            progressCircleVariation: f.Q.NITRO_LOGO,
                            ellipseOpacity: 1,
                            circleColor: T,
                            circleStroke: T,
                            progressCircleStrokeSize: 4
                        })
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: v.intl.string(v.t.RzWDqa),
                    header: v.intl.formatToPlainString(v.t.md2GU1, { discountRate: _.Nq }),
                    hideDismissButton: !0,
                    body: v.intl.formatToPlainString(v.t.mxPPxc, { discountRate: _.Nq }),
                    dismissibleContent: s.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    L = (e) => {
        let t,
            { children: n, variant: i, trialOffer: r } = e,
            l = 'referral_program' === i;
        return (
            (t = l
                ? (0, a.jsxs)('div', {
                      className: S.coachTipContainer,
                      children: [
                          (0, a.jsx)('div', {
                              className: S.iconContainer,
                              children: (0, a.jsx)(f.Z, {
                                  staticPercentage: 100,
                                  iconClassName: S.icon,
                                  showAnimations: !0,
                                  progressCircleVariation: f.Q.NITRO_LOGO,
                                  ellipseOpacity: 1,
                                  customAnimationClassName: S.customCircleAnimation,
                                  circleColor: 'url(#purple-gradient)'
                              })
                          }),
                          (0, a.jsx)(b, {})
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: S.t4ACoachTipContainer,
                      children: [
                          (0, a.jsx)('div', {
                              className: S.t4ACoachtipArtOuterContainer,
                              children: (0, a.jsx)(P, {})
                          }),
                          (null == r ? void 0 : r.expires_at) != null && (0, a.jsx)(O, { trialExpiration: Date.parse(r.expires_at) })
                      ]
                  })),
            (0, a.jsx)(o.Tooltip, {
                text: t,
                position: 'right',
                'aria-label': l ? v.intl.string(v.t.USo4s7) : v.intl.string(v.t.Kkcmj4),
                tooltipClassName: l ? S.marketingBadgeTooltip : S.t4AMarketingBadgeTooltip,
                allowOverflow: !0,
                tooltipContentClassName: S.tooltipContent,
                children: (e) =>
                    (0, a.jsx)('div', {
                        ...e,
                        children: n
                    })
            })
        );
    },
    R = (e) => {
        let { isSelected: t, onSelect: n } = e;
        return (
            l.useEffect(() => {
                t && n();
            }, [t, n]),
            (0, a.jsx)(E.Z, { copy: v.intl.string(v.t.y2b7CA) })
        );
    },
    P = () =>
        (0, a.jsx)('div', {
            className: S.t4ACoachtipArtInnerContainer,
            children: (0, a.jsx)('img', {
                src: N,
                alt: ''
            })
        }),
    O = (e) => {
        let { trialExpiration: t } = e,
            n = (0, c.Z)(t, 1000);
        return (0, a.jsxs)('div', {
            children: [
                (0, a.jsx)(o.Heading, {
                    variant: 'heading-sm/bold',
                    children: v.intl.string(v.t.Kkcmj4)
                }),
                (0, a.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children:
                        n.days > 0
                            ? v.intl.formatToPlainString(v.t.G1Ldn5, { days: n.days })
                            : v.intl.formatToPlainString(v.t.h982oq, {
                                  hours: x(n.hours),
                                  minutes: x(n.minutes),
                                  seconds: x(n.seconds)
                              })
                })
            ]
        });
    },
    j = (e) => {
        var t, n;
        let { isSelected: i, trialOffer: r, q4MarketingEnabled: o } = e,
            c = (0, d.wE)(s.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE),
            u = (0, p.a5)({
                intervalType: null === (t = r.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null === (n = r.subscription_trial) || void 0 === n ? void 0 : n.interval_count
            });
        return (
            l.useEffect(() => {
                i && !c && (0, d.EW)(s.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE, { dismissAction: C.L.TAKE_ACTION });
            }, [i, c]),
            (0, a.jsx)(g._y, {
                ackedClassName: S.trialAckedBadge,
                className: S.trialBadgeBackground,
                isTabSelected: i,
                badgeCopy: o ? v.intl.string(v.t.OS9KPj) : u,
                offerExpiresAt: c ? r.expires_at : void 0
            })
        );
    };
