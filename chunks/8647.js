var s = n(735250);
n(470079);
var a = n(120356), r = n.n(a), i = n(399606), l = n(481060), o = n(78839), c = n(63063), d = n(276800), _ = n(248042), u = n(409100), E = n(725727), T = n(474936), I = n(981631), R = n(689938), C = n(280881);
t.Z = function (e) {
    let {
            isFullscreen: t,
            buttonClassName: n
        } = e, {promotion: a} = (0, E.mq)(), p = (0, i.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
    if (!(0, _.Vi)())
        return null;
    let g = new Date(a.endDate);
    return (0, s.jsx)('div', {
        className: r()(C.banner, { [C.bannerFullscreen]: t }),
        children: (0, s.jsxs)('div', {
            className: C.bannerContent,
            children: [
                (0, s.jsxs)('div', {
                    children: [
                        (0, s.jsx)(l.Heading, {
                            variant: 'display-sm',
                            color: 'always-white',
                            children: null == p ? R.Z.Messages.BOGO_BUY_HEADLINE : R.Z.Messages.BOGO_UPGRADE_HEADLINE
                        }),
                        (0, s.jsx)(l.Text, {
                            className: C.countdown,
                            variant: 'text-sm/medium',
                            children: (0, s.jsx)(d.Z, { endDate: g })
                        }),
                        (0, s.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: null == p ? R.Z.Messages.BOGO_PERKS_SUBTITLE_NON_SUB_FORMATTED.format({ helpCenterLink: c.Z.getArticleURL(I.BhN.SUMMER_2023_BOGO) }) : R.Z.Messages.BOGO_PERKS_SUBTITLE_SUB_FORMATTED.format({ helpCenterLink: c.Z.getArticleURL(I.BhN.SUMMER_2023_BOGO) })
                        })
                    ]
                }),
                (0, s.jsx)(u.Z, {
                    buttonText: R.Z.Messages.BOGO_CLAIM_OFFER,
                    buttonTextClassName: C.subscribeButtonText,
                    subscriptionTier: T.Si.TIER_2,
                    className: null != n ? n : C.subscribeButton,
                    forceInverted: !0
                })
            ]
        })
    });
};
