t.d(s, {
    Z: function () {
        return E;
    }
}), t(47120);
var n = t(735250), o = t(470079), a = t(120356), i = t.n(a), r = t(831209), l = t(481060), d = t(367907), c = t(177862), _ = t(981631), x = t(689938), C = t(325369);
function E(e) {
    let {
            guildId: s,
            transitionState: t,
            onClose: a
        } = e, [E, I] = o.useState([]), [u, N] = o.useState(), D = [
            {
                text: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
                value: c.C2.DM_SPAM
            },
            {
                text: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
                value: c.C2.MENTION_SPAM
            },
            {
                text: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
                value: c.C2.CHANNEL_SPAM
            },
            {
                text: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
                value: c.C2.SUS_NEW_MEMBERS
            },
            {
                text: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
                value: c.C2.CHANGING_SETTINGS
            },
            {
                text: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
                value: c.C2.OTHER
            }
        ];
    function h(e) {
        E.includes(e) ? I(s => s.filter(s => s !== e)) : I(s => [
            ...s,
            e
        ]);
    }
    return null == s ? (a(), null) : (0, n.jsxs)(l.ModalRoot, {
        transitionState: t,
        size: l.ModalSize.MEDIUM,
        children: [
            (0, n.jsx)(l.ModalHeader, {
                separator: !0,
                children: (0, n.jsxs)('div', {
                    className: C.headerContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: C.headerText,
                            children: [
                                (0, n.jsx)(l.LockIcon, {
                                    size: 'xs',
                                    color: r.Z.INTERACTIVE_NORMAL
                                }),
                                (0, n.jsx)(l.Heading, {
                                    color: 'header-primary',
                                    variant: 'heading-md/semibold',
                                    children: x.Z.Messages.GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION
                                })
                            ]
                        }),
                        (0, n.jsx)(l.Clickable, {
                            onClick: a,
                            children: (0, n.jsx)(l.CloseSmallIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: C.closeIcon
                            })
                        })
                    ]
                })
            }),
            (0, n.jsx)(l.ModalContent, {
                children: (0, n.jsx)('div', {
                    className: C.options,
                    children: D.map(e => {
                        let {
                            text: s,
                            value: t
                        } = e;
                        return (0, n.jsxs)('div', {
                            className: i()(C.optionContainer, { [C.optionContainerOther]: t === c.C2.OTHER }),
                            children: [
                                (0, n.jsxs)(l.Clickable, {
                                    className: C.optionText,
                                    onClick: () => h(t),
                                    children: [
                                        (0, n.jsx)('div', {
                                            children: (0, n.jsx)(l.Checkbox, {
                                                type: l.Checkbox.Types.INVERTED,
                                                size: 20,
                                                value: E.includes(t),
                                                onChange: () => h(t)
                                            })
                                        }),
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-md/medium',
                                            color: E.includes(t) ? 'interactive-active' : 'interactive-normal',
                                            children: s
                                        })
                                    ]
                                }),
                                t === c.C2.OTHER && E.includes(c.C2.OTHER) && (0, n.jsx)('div', {
                                    className: C.textboxContainer,
                                    children: (0, n.jsx)(l.TextArea, {
                                        className: C.serverLockdownReasonText,
                                        placeholder: x.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                        onChange: e => N(e),
                                        value: u,
                                        rows: 2,
                                        autoFocus: !0,
                                        flex: !0
                                    })
                                })
                            ]
                        }, t);
                    })
                })
            }),
            (0, n.jsx)(l.ModalFooter, {
                children: (0, n.jsx)(l.Button, {
                    onClick: function () {
                        (0, d.yw)(_.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                            raid_lockdown_feedback_type: E,
                            raid_lockdown_feedback_other_reason: u,
                            guild_id: s
                        }), a();
                    },
                    color: l.Button.Colors.BRAND,
                    look: l.Button.Looks.FILLED,
                    submitting: !1,
                    children: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT
                })
            })
        ]
    });
}
