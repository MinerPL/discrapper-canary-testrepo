n.d(t, {
    Z: function () {
        return v;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(239091), l = n(79712), u = n(91159), c = n(496675), d = n(306680), _ = n(446183), E = n(677281), f = n(880080), h = n(709054), p = n(765104), m = n(477291), I = n(478758), T = n(789707), g = n(981631), S = n(531578), A = n(735840);
function N(e) {
    let {
            summary: t,
            channel: d,
            members: T,
            guildId: N,
            unread: v,
            onClick: O
        } = e, [R, C] = i.useState(!1), y = (0, u.Ye)(h.default.extractTimestamp(t.startId)), D = (0, a.e7)([p.Z], () => p.Z.summaryFeedback(t)), L = (e, n) => {
            e.stopPropagation(), (0, m.Z)({
                summary: t,
                channel: d,
                rating: n
            });
        }, b = c.Z.can(g.Plq.MANAGE_MESSAGES, d);
    return (0, r.jsxs)(o.Clickable, {
        className: A.container,
        onClick: O,
        onContextMenu: e => {
            b && (0, s.jW)(e, async () => {
                let {default: e} = await n.e('12891').then(n.bind(n, 519620));
                return n => (0, r.jsx)(e, {
                    ...n,
                    summary: t
                });
            });
        },
        onMouseEnter: () => C(!0),
        onMouseLeave: () => C(!1),
        children: [
            (0, r.jsx)(f.Z, {
                hovered: R,
                unread: v,
                className: A.unreadPill
            }),
            (0, r.jsx)('div', {
                className: A.rowHeader,
                children: (0, r.jsxs)('div', {
                    className: A.rowHeaderLeft,
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: A.timestamp,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: y
                        }),
                        (0, r.jsx)(l.Z, {
                            height: 4,
                            width: 4,
                            'aria-hidden': 'true',
                            className: A.dot
                        }),
                        (0, r.jsx)(o.ChatIcon, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: A.icon
                        }),
                        (0, r.jsx)(o.Text, {
                            className: A.count,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: t.count
                        }),
                        T.length > 0 && (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.Z, {
                                    height: 4,
                                    width: 4,
                                    'aria-hidden': 'true',
                                    className: A.dot
                                }),
                                (0, r.jsx)(I.Z, {
                                    partySize: {
                                        knownSize: T.length,
                                        totalSize: T.length
                                    },
                                    maxAvatarsShown: 3,
                                    members: T,
                                    guildId: N
                                })
                            ]
                        })
                    ]
                })
            }),
            R && !D && (0, r.jsxs)('div', {
                className: A.feedbackContainer,
                children: [
                    (0, r.jsx)(o.Clickable, {
                        onClick: e => L(e, S.aZ.GOOD),
                        children: (0, r.jsx)(E.Z, {
                            className: A.thumbIcon,
                            width: 12,
                            height: 12
                        })
                    }),
                    (0, r.jsx)(o.Clickable, {
                        onClick: e => L(e, S.aZ.BAD),
                        children: (0, r.jsx)(_.Z, {
                            className: A.thumbIcon,
                            width: 12,
                            height: 12
                        })
                    })
                ]
            }),
            (0, r.jsx)(o.Text, {
                color: 'header-primary',
                variant: 'text-sm/semibold',
                className: A.title,
                children: t.topic
            }),
            (0, r.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: A.subtitle,
                children: t.summShort
            })
        ]
    });
}
function v(e) {
    let {
            summaries: t,
            summariesMembers: n,
            channel: o,
            selectTopic: s,
            setOpen: l
        } = e, u = (0, a.e7)([d.ZP], () => d.ZP.getOldestUnreadMessageId(o.id)), c = i.useCallback(e => {
            s(e), l(!1);
        }, [
            s,
            l
        ]);
    return t.length < 1 ? (0, r.jsx)(T.Z, {}) : (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) => {
            var i;
            let a = null !== (i = n[t]) && void 0 !== i ? i : [];
            return (0, r.jsx)(N, {
                summary: e,
                channel: o,
                members: a,
                guildId: o.guild_id,
                unread: null != u && h.default.compare(e.endId, u) > 0,
                onClick: () => c(t)
            }, t);
        })
    });
}
