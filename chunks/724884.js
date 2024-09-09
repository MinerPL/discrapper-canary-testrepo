var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(689938),
    l = n(269838),
    u = n(247844);
function c(e) {
    let { className: t, icon: n, children: i } = e;
    return (0, r.jsxs)('li', {
        className: a()(l.card, t),
        children: [
            (0, r.jsx)(n, { className: l.icon }),
            (0, r.jsx)(s.Text, {
                className: l.__invalid_description,
                variant: 'text-sm/medium',
                children: i
            })
        ]
    });
}
t.Z = function (e) {
    let { cardClassName: t } = e;
    return (0, r.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, r.jsxs)('div', {
                className: l.content,
                children: [
                    (0, r.jsx)(s.Heading, {
                        className: l.heading,
                        color: 'always-white',
                        variant: 'heading-xxl/bold',
                        children: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_HEADING
                    }),
                    (0, r.jsxs)('ul', {
                        className: l.cards,
                        children: [
                            (0, r.jsx)(c, {
                                className: t,
                                icon: s.BoostTier2SimpleIcon,
                                children: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_MEMBER_LIST_ICON
                            }),
                            (0, r.jsx)(c, {
                                className: t,
                                icon: (e) =>
                                    (0, r.jsx)('img', {
                                        className: a()(e.className, l.iconImage),
                                        src: u,
                                        alt: ''
                                    }),
                                children: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_PROFILE_BADGE
                            }),
                            (0, r.jsx)(c, {
                                className: t,
                                icon: s.ShieldUserIcon,
                                children: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_BOOSTER_ROLE
                            }),
                            (0, r.jsx)(c, {
                                className: t,
                                icon: s.HeartIcon,
                                children: o.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_COMMUNITY_SUPPORT
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', { className: l.backgroundImages })
        ]
    });
};
