n(47120);
var s,
    a,
    i = n(735250),
    r = n(470079),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(596454),
    u = n(524329),
    _ = n(823379),
    I = n(999382),
    E = n(413584),
    T = n(689938),
    m = n(466032),
    N = n(39406);
((a = s || (s = {}))[(a.LOADING = 0)] = 'LOADING'), (a[(a.INTRO = 1)] = 'INTRO'), (a[(a.SETTINGS = 2)] = 'SETTINGS');
let S = (e) => {
    let { setWelcomeView: t, setShowCreateModal: s } = e,
        a = [
            {
                emoji: '\uD83D\uDCAC',
                description: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_1,
                name: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_1
            },
            {
                emoji: '\uD83C\uDFF9',
                description: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_2,
                name: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_2
            },
            {
                emoji: '\uD83D\uDDDE',
                description: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_3,
                name: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_3
            }
        ];
    return (0, i.jsxs)(o.FormSection, {
        title: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
        tag: 'h1',
        children: [
            (0, i.jsxs)('div', {
                className: m.welcomeDescription,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INTRO_TEXT.format()
                    }),
                    (0, i.jsx)(o.Button, {
                        onClick: () => {
                            s(!0), t(2);
                        },
                        children: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INTRO_BUTTON
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: m.exampleContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: m.exampleWumpus,
                        children: [
                            (0, i.jsx)('img', {
                                className: m.wumpus,
                                alt: '',
                                src: n(663346)
                            }),
                            (0, i.jsx)('div', { className: m.tooltipPointer }),
                            (0, i.jsx)('div', {
                                className: m.tooltip,
                                children: T.Z.Messages.GUILD_SETTINGS_EXAMPLE_TOOLTIP
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: m.exampleModal,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                className: N.guildIcon,
                                src: n(691466),
                                width: 64,
                                height: 64
                            }),
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                className: m.header,
                                children: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_TITLE.format()
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                className: N.guildDescription,
                                children: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_DESCRIPTION
                            }),
                            (0, i.jsx)(o.FormTitle, {
                                className: N.choiceHeader,
                                children: T.Z.Messages.WELCOME_SCREEN_CHOICE_HEADER
                            }),
                            (0, i.jsx)('div', {
                                className: N.options,
                                children: a.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: m.optionContainer,
                                            children: [
                                                (0, i.jsx)(d.Z, {
                                                    emojiName: e.emoji,
                                                    className: N.optionEmoji
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: N.optionTextContainer,
                                                    children: [
                                                        (0, i.jsx)(o.Text, {
                                                            variant: 'text-md/semibold',
                                                            className: N.channelDescription,
                                                            children: e.description
                                                        }),
                                                        (0, i.jsx)(o.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-secondary',
                                                            children: '#'.concat(e.name)
                                                        })
                                                    ]
                                                })
                                            ]
                                        },
                                        e.name
                                    )
                                )
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
t.Z = () => {
    let { guild: e } = (0, l.e7)([I.Z], () => I.Z.getProps()),
        [t, n] = r.useState(0),
        [s, a] = r.useState(!1);
    switch (
        (r.useEffect(() => {
            null != e &&
                c.Z.wait(() => {
                    (0, u.RM)(e.id).then((e) => {
                        n(null == e ? 1 : 2);
                    });
                });
        }, [e]),
        t)
    ) {
        case 0:
            return (0, i.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE });
        case 1:
            return (0, i.jsx)(S, {
                setWelcomeView: n,
                setShowCreateModal: a
            });
        case 2:
            return (0, i.jsx)(E.Z, {
                guild: e,
                showCreateModal: s
            });
        default:
            return (0, _.vE)(t);
    }
};
