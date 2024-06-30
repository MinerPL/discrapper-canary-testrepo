n.d(t, {
    Z: function () {
        return I;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(481060), r = n(467319), l = n(456677), o = n(55889), c = n(300453), d = n(620436), u = n(273504), _ = n(689938), E = n(631675);
function I(e) {
    var t, n;
    let {
            rule: I,
            onChangeRule: T
        } = e, [m, N] = a.useState(null === (t = I.triggerMetadata) || void 0 === t ? void 0 : t.mentionTotalLimit), S = (0, r.a)(I.guildId, !1);
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: E.cardContentsContainer,
            children: [
                (0, s.jsxs)(c.Z, {
                    step: 1,
                    header: _.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_HEADER,
                    children: [
                        (0, s.jsxs)('div', {
                            className: E.mentionLimitContainer,
                            children: [
                                (0, s.jsx)('div', {
                                    className: E.mentionLimitIconContainer,
                                    children: (0, s.jsx)(i.AtIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: E.mentionLimitIcon
                                    })
                                }),
                                (0, s.jsxs)('div', {
                                    className: E.mentionLimitTextContainer,
                                    children: [
                                        (0, s.jsx)(i.Heading, {
                                            variant: 'heading-sm/semibold',
                                            children: _.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION
                                        }),
                                        (0, s.jsx)(i.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-xs/medium',
                                            className: E.descriptionHint,
                                            children: _.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION_HINT
                                        })
                                    ]
                                }),
                                (0, s.jsx)('div', {
                                    className: E.stepperContainer,
                                    children: (0, s.jsx)(i.NumberInputStepper, {
                                        value: m,
                                        onChange: e => {
                                            N(e), T({
                                                ...I,
                                                triggerMetadata: {
                                                    ...I.triggerMetadata,
                                                    mentionTotalLimit: e
                                                }
                                            });
                                        },
                                        minValue: u.Vg,
                                        maxValue: u.Lg,
                                        className: E.stepper
                                    })
                                })
                            ]
                        }),
                        S ? (0, s.jsxs)('div', {
                            className: E.mentionLimitContainer,
                            children: [
                                (0, s.jsx)('div', {
                                    className: E.mentionLimitIconContainer,
                                    children: (0, s.jsx)(i.ShieldAtIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: E.mentionLimitIcon
                                    })
                                }),
                                (0, s.jsxs)('div', {
                                    className: E.mentionLimitTextContainer,
                                    children: [
                                        (0, s.jsx)(i.Heading, {
                                            variant: 'heading-sm/semibold',
                                            children: _.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION
                                        }),
                                        (0, s.jsx)(i.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-xs/medium',
                                            className: E.descriptionHint,
                                            children: _.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION_HINT
                                        })
                                    ]
                                }),
                                (0, s.jsx)('div', {
                                    children: (0, s.jsx)(i.Checkbox, {
                                        type: i.Checkbox.Types.INVERTED,
                                        value: null === (n = I.triggerMetadata) || void 0 === n ? void 0 : n.mentionRaidProtectionEnabled,
                                        onChange: (e, t) => {
                                            T({
                                                ...I,
                                                triggerMetadata: {
                                                    ...I.triggerMetadata,
                                                    mentionRaidProtectionEnabled: t
                                                }
                                            });
                                        },
                                        className: E.__invalid_actionCheckbox
                                    })
                                })
                            ]
                        }) : null
                    ]
                }),
                (0, s.jsx)(d.Z, { type: d.Z.Type.ARROW_DOWN }),
                (0, s.jsx)(c.Z, {
                    step: 2,
                    header: _.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
                    children: (0, s.jsx)(l.Z, {
                        rule: I,
                        onChangeRule: T
                    })
                }),
                (0, s.jsx)(d.Z, { type: d.Z.Type.CROSS }),
                (0, s.jsx)(c.Z, {
                    step: 3,
                    header: _.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
                    children: (0, s.jsx)(o.Z, {
                        rule: I,
                        onChangeRule: T
                    })
                })
            ]
        })
    });
}
