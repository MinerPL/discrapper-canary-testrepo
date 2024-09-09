var s = n(735250);
n(470079);
var a = n(442837),
    r = n(481060),
    i = n(100527),
    l = n(906732),
    o = n(963249),
    c = n(78839),
    d = n(823188),
    _ = n(474936),
    u = n(981631),
    E = n(689938),
    T = n(653875);
t.Z = () => {
    let e = (0, a.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        t = (null == e ? void 0 : e.trialId) === _.dO ? '1' : '2',
        n = (0, l.ZP)([i.Z.PREMIUM_MARKETING_REVERSE_TRIAL_BANNER]);
    return (0, s.jsxs)('div', {
        className: T.banner,
        children: [
            (0, s.jsx)(d.Cy, {
                text: E.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                className: T.trialPill,
                colorOptions: d.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, s.jsx)('div', {
                className: T.body,
                children: (0, s.jsx)(r.Text, {
                    color: 'always-white',
                    variant: 'text-md/medium',
                    children: E.Z.Messages.REVERSE_TRIAL_NITRO_HOME_HEADER_BODY_NEW.format({ weeks: t })
                })
            }),
            (0, s.jsx)(r.Button, {
                onClick: () => {
                    (0, o.Z)({
                        initialPlanId: _.Xh.PREMIUM_MONTH_TIER_2,
                        analyticsLocations: n.analyticsLocations,
                        analyticsObject: { object: u.qAy.BUTTON_CTA }
                    });
                },
                look: r.ButtonLooks.OUTLINED,
                color: r.ButtonColors.WHITE,
                children: E.Z.Messages.REVERSE_TRIAL_NITRO_HOME_HEADER_BUTTON_LABEL
            })
        ]
    });
};
