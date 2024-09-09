n.d(t, {
    Z: function () {
        return O;
    },
    _: function () {
        return A;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(951394),
    u = n(907040),
    c = n(210887),
    d = n(314897),
    _ = n(823379),
    E = n(51144),
    f = n(785717),
    h = n(837411),
    p = n(448197),
    I = n(698305),
    m = n(228168),
    T = n(185923),
    S = n(689938),
    g = n(951768);
let A = 1800,
    N = (e) => {
        let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
            a = ':'.concat(t.name, ':');
        switch (r) {
            case m.n_.ACTIVITY:
                let s = S.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
                return '> -# *'.concat(s, '*\n').concat(a);
            case m.n_.AVATAR:
                let o = S.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
                return '> -# *'.concat(o, '*\n').concat(a);
            case m.n_.STATUS:
                let l = S.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n });
                return null != i ? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a) : '> -# *'.concat(l, '*\n').concat(a);
            default:
                (0, _.vE)(r);
        }
    };
function O(e) {
    let { user: t, channel: n, sourceType: i, sourceDetails: _, isVisible: O, isExpandable: R, onInteraction: v, setInteractionToastShown: C, setInteractionSent: y, setIsReplyInteraction: L, onClose: D } = e,
        { trackUserProfileAction: b } = (0, f.KZ)(),
        M = (0, s.e7)([c.Z], () => c.Z.theme),
        { sendReact: P, pressReact: U, pressReply: w } = (0, p.Q)(i),
        x = (0, s.e7)([d.default], () => d.default.getId() === t.id),
        G = (0, h.Z)(t.id);
    if (t.bot || x || !G) return null;
    let k = async (e) => {
        if (null == e) return;
        b({ action: P });
        let n = N({
            emoji: e,
            username: E.ZP.getName(t),
            sourceType: i,
            sourceDetails: _
        });
        L(!1), y(!1), C(!0);
        try {
            await (0, I.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactReplyBar',
                openChannel: !1,
                whenReady: !1
            });
        } catch (e) {}
        y(!0),
            setTimeout(() => {
                C(!1);
            }, A);
    };
    return (0, r.jsxs)(l.ZP, {
        className: a()(g.popover, {
            [g.visible]: O,
            [g.expandable]: R,
            [g.statusPopover]: i === m.n_.STATUS,
            [g.avatarPopover]: i === m.n_.AVATAR
        }),
        children: [
            (0, r.jsx)(o.TooltipContainer, {
                text: S.Z.Messages.USER_PROFILE_SEND_REACTION,
                shouldShow: O,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(o.Popout, {
                    onRequestClose: () => {
                        null == v ||
                            v({
                                interactionType: null,
                                interactionSourceType: null
                            });
                    },
                    onRequestOpen: () => {
                        null == v ||
                            v({
                                interactionType: m.P.REACT,
                                interactionSourceType: i
                            });
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(o.ThemeProvider, {
                            theme: M,
                            children: (e) =>
                                (0, r.jsx)(u.Z, {
                                    guildId: null == n ? void 0 : n.guild_id,
                                    closePopout: t,
                                    onSelectEmoji: async (e, n) => {
                                        await k(e), n && (t(), null == D || D());
                                    },
                                    pickerIntention: T.Hz.PROFILE,
                                    channel: n,
                                    className: e,
                                    headerClassName: e,
                                    listHeaderClassName: e,
                                    categoryListClassName: e
                                })
                        });
                    },
                    position: 'left',
                    animation: o.Popout.Animation.NONE,
                    align: 'top',
                    children: (e) =>
                        (0, r.jsx)(l.zx, {
                            ...e,
                            onClick: (t) => {
                                b({ action: U }), e.onClick(t);
                            },
                            className: a()(g.button, g.left),
                            'aria-label': S.Z.Messages.USER_PROFILE_SEND_REACTION,
                            children: (0, r.jsx)(o.ReactionIcon, {
                                size: 'xs',
                                className: g.icon
                            })
                        })
                })
            }),
            (0, r.jsx)(o.TooltipContainer, {
                text: S.Z.Messages.USER_PROFILE_REPLY,
                shouldShow: O,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(l.zx, {
                    onClick: () => {
                        b({ action: w }),
                            null == v ||
                                v({
                                    interactionType: m.P.REPLY,
                                    interactionSourceType: i
                                });
                    },
                    className: a()(g.button, g.right),
                    'aria-label': S.Z.Messages.USER_PROFILE_REPLY,
                    children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
                        size: 'xs',
                        className: g.icon
                    })
                })
            })
        ]
    });
}
