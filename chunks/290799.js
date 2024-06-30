n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(63063), u = n(981631), c = n(689938), d = n(441915);
let _ = [
    {
        getQuestion: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_1,
        getAnswer: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_1
    },
    {
        getQuestion: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_2,
        getAnswer: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_2.format({ helpCenterUrl: l.Z.getArticleURL(u.BhN.GUILD_BOOSTING_FAQ) })
    },
    {
        getQuestion: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_3,
        getAnswer: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_3
    },
    {
        getQuestion: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_4,
        getAnswer: () => c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_4
    }
];
t.Z = function (e) {
    let {className: t} = e, [n, a] = i.useState(null);
    return (0, r.jsxs)('div', {
        className: o()(d.wrapper, t),
        children: [
            (0, r.jsx)(s.Heading, {
                className: d.heading,
                variant: 'heading-xxl/bold',
                children: c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_HEADING
            }),
            (0, r.jsx)('ul', {
                className: d.list,
                children: _.map((e, t) => {
                    let i = n === t;
                    return (0, r.jsxs)('div', {
                        className: d.listItem,
                        children: [
                            (0, r.jsxs)(s.Clickable, {
                                className: o()(d.questionWrapper, { [d.questionWrapperExpanded]: i }),
                                onClick: () => a(e => e === t ? null : t),
                                tag: 'li',
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        className: d.question,
                                        variant: 'text-lg/normal',
                                        children: e.getQuestion()
                                    }),
                                    i ? (0, r.jsx)(s.MinusIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: d.questionIcon
                                    }) : (0, r.jsx)(s.PlusSmallIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: d.questionIcon
                                    })
                                ]
                            }),
                            i && (0, r.jsx)(s.Text, {
                                className: d.answer,
                                color: 'text-normal',
                                variant: 'text-md/normal',
                                children: e.getAnswer()
                            })
                        ]
                    }, t);
                })
            })
        ]
    });
};
