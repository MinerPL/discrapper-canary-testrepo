n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(367907),
    c = n(739566),
    d = n(623292),
    _ = n(703656),
    E = n(665906),
    f = n(488131),
    h = n(375954),
    p = n(962293),
    m = n(981631),
    I = n(689938),
    T = n(325379);
function g(e) {
    let { channel: t, message: n, replyChainLength: a } = e;
    return (
        i.useEffect(() => {
            (0, u.yw)(m.rMx.THREAD_NUDGE_SHOWN, {
                type: 'Reply Chain ('.concat(3, ')'),
                reply_chain_length: a + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            });
        }, [t]),
        (0, r.jsxs)(l.Clickable, {
            onClick: function () {
                (0, d.A6)(t.id), (0, f.R6)(t, n, 'Reply Chain Nudge');
            },
            className: T.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [
                (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: T.text,
                    variant: 'text-sm/normal',
                    children: I.Z.Messages.THREAD_REPLY_SUGGESTION.format({ count: Math.min(10, a + 1) })
                }),
                (0, r.jsx)(l.Text, {
                    color: 'text-link',
                    className: T.createThreadButton,
                    variant: 'text-sm/semibold',
                    children: I.Z.Messages.CREATE_THREAD
                })
            ]
        })
    );
}
function S(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: a, shouldMention: u, showMentionToggle: f } = t,
        { nick: S, colorString: A, colorRoleName: N } = (0, c.ZP)(a),
        v = (function (e, t) {
            let n = e.id,
                r = t.id;
            return (0, o.e7)(
                [h.Z],
                () => {
                    let e = r;
                    for (let t = 0; t < 10; t++) {
                        let r = h.Z.getMessage(n, e);
                        if ((null == r ? void 0 : r.type) !== m.uaV.REPLY || null == r.messageReference) return t;
                        e = r.messageReference.message_id;
                    }
                    return 10;
                },
                [n, r]
            );
        })(i, a),
        O = (0, E.NE)(i, a),
        R = n.showThreadPromptOnReply && v >= 2 && O;
    function C(e) {
        e.stopPropagation(), (0, d.qx)(i.id, !u);
    }
    return (0, r.jsx)('div', {
        className: T.clipContainer,
        children: (0, r.jsxs)('div', {
            className: T.container,
            children: [
                (0, r.jsxs)('div', {
                    className: T.replyBar,
                    children: [
                        (0, r.jsx)(l.Clickable, {
                            onClick: () => (0, _.uL)(m.Z5c.CHANNEL(i.getGuildId(), i.id, a.id)),
                            focusProps: {
                                offset: {
                                    top: -8,
                                    right: -4,
                                    bottom: -8,
                                    left: -4
                                }
                            },
                            children: (0, r.jsx)(l.Text, {
                                color: 'header-secondary',
                                className: s()(T.text, T.replyLabel),
                                variant: 'text-sm/normal',
                                children: I.Z.Messages.REPLYING_TO.format({
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            l.NameWithRole,
                                            {
                                                className: T.name,
                                                name: S,
                                                color: A,
                                                roleName: N
                                            },
                                            t
                                        )
                                })
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: T.actions,
                            children: [
                                f &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.Tooltip, {
                                                text: u ? I.Z.Messages.REPLY_MENTION_ON_TOOLTIP : I.Z.Messages.REPLY_MENTION_OFF_TOOLTIP,
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n, onFocus: i, onBlur: a } = e;
                                                    return (0, r.jsx)(l.Clickable, {
                                                        role: 'switch',
                                                        'aria-checked': u,
                                                        onClick: C,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        onFocus: i,
                                                        onBlur: a,
                                                        children: (0, r.jsxs)(l.Text, {
                                                            variant: 'text-sm/bold',
                                                            color: u ? 'text-link' : 'text-muted',
                                                            className: T.mentionButton,
                                                            children: [
                                                                (0, r.jsx)(l.AtIcon, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    'aria-label': I.Z.Messages.MENTION,
                                                                    className: T.mentionIcon
                                                                }),
                                                                u ? I.Z.Messages.REPLY_MENTION_ON : I.Z.Messages.REPLY_MENTION_OFF
                                                            ]
                                                        })
                                                    });
                                                }
                                            }),
                                            (0, r.jsx)('div', {
                                                className: T.separator,
                                                'aria-hidden': !0
                                            })
                                        ]
                                    }),
                                (0, r.jsx)(p.B, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, d.A6)(i.id);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                R &&
                    (0, r.jsx)(g, {
                        channel: i,
                        message: a,
                        replyChainLength: v
                    })
            ]
        })
    });
}
