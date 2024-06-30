var s = n(735250);
n(470079);
var o = n(120356), r = n.n(o), a = n(920906), i = n(481060), l = n(113434), c = n(497505), d = n(685613), u = n(340100), p = n(644646), x = n(898170), m = n(689938), g = n(51582);
t.Z = function (e) {
    var t;
    let {
            className: n,
            expansionSpring: o,
            isExpanded: C,
            isExpansionAnimationComplete: f,
            quest: h,
            useReducedMotion: _
        } = e, E = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, {percentComplete: S} = (0, l.Rf)(h);
    return (0, s.jsxs)(a.animated.div, {
        'aria-hidden': C && f,
        className: r()(n, g.contentCollapsed, {
            [g.contentCollapsedExpanded]: C,
            [g.contentCollapsedAccepted]: E
        }),
        style: {
            opacity: o.to({
                range: [
                    0,
                    1
                ],
                output: [
                    1,
                    0
                ]
            })
        },
        children: [
            (0, s.jsx)(x.Z, {
                quest: h,
                useReducedMotion: _
            }),
            (0, s.jsx)('div', {
                className: g.contentCollapsedWrapper,
                children: E ? (0, s.jsxs)('div', {
                    className: g.questProgressWrapper,
                    children: [
                        (0, s.jsx)(p.Z, {
                            className: g.questProgressRewardTile,
                            quest: h,
                            questContent: c.jn.QUEST_BAR,
                            autoplay: !1
                        }),
                        S > 0 ? (0, s.jsx)(u.Z, {
                            className: g.questProgressBar,
                            quest: h
                        }) : (0, s.jsx)(i.Text, {
                            className: g.questProgressHint,
                            color: 'always-white',
                            variant: 'text-sm/semibold',
                            children: m.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
                        })
                    ]
                }) : (0, s.jsxs)('div', {
                    className: g.brandingWrapper,
                    children: [
                        (0, s.jsx)(d.Z, {
                            className: g.partnerBranding,
                            quest: h
                        }),
                        (0, s.jsx)(i.Heading, {
                            color: 'always-white',
                            variant: 'heading-sm/medium',
                            className: g.questName,
                            children: m.Z.Messages.QUEST.format({ questName: h.config.messages.questName })
                        })
                    ]
                })
            })
        ]
    });
};
