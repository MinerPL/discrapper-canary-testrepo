n.d(t, {
    Z: function () {
        return v;
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
    c = n(314897),
    d = n(699516),
    _ = n(823379),
    E = n(51144),
    f = n(785717),
    h = n(505737),
    p = n(790286),
    m = n(485216),
    I = n(228168),
    T = n(185923),
    g = n(689938),
    S = n(951768);
let A = 600,
    N = (e) => {
        let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
            a = ':'.concat(t.name, ':');
        switch (r) {
            case I.n_.ACTIVITY:
                let s = g.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
                return '> -# *'.concat(s, '*\n').concat(a);
            case I.n_.AVATAR:
                let o = g.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
                return '> -# *'.concat(o, '*\n').concat(a);
            case I.n_.STATUS:
                let l = g.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n });
                return null != i ? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a) : '> -# *'.concat(l, '*\n').concat(a);
            default:
                (0, _.vE)(r);
        }
    };
function v(e) {
    let { user: t, channel: n, sourceType: i, sourceDetails: _, isVisible: v, isExpandable: O, onInteraction: R, setInteractionToastShown: C, setInteractionSent: y, setIsReplyInteraction: D, onClose: L } = e,
        { trackUserProfileAction: b } = (0, f.KZ)(),
        { sendReact: M, pressReact: P, pressReply: U } = (0, p.Q)(i),
        w = (0, s.e7)([c.default], () => c.default.getId() === t.id),
        x = (0, h.Z)(t.id);
    if (t.bot || w || !x) return null;
    let G = async (e) => {
        var n;
        if (null == e) return;
        b({ action: M });
        let r = N({
            emoji: e,
            username: null !== (n = d.Z.getNickname(t.id)) && void 0 !== n ? n : E.ZP.getName(t),
            sourceType: i,
            sourceDetails: _
        });
        D(!1),
            y(!1),
            C(!0),
            await (0, m.Z)({
                userId: t.id,
                content: r,
                location: 'UserProfileReactReplyBar',
                openChannel: !1,
                whenReady: !1
            }),
            y(!0),
            setTimeout(() => {
                C(!1);
            }, A);
    };
    return (0, r.jsxs)(l.ZP, {
        className: a()(S.popover, {
            [S.visible]: v,
            [S.expandable]: O,
            [S.statusPopover]: i === I.n_.STATUS,
            [S.avatarPopover]: i === I.n_.AVATAR
        }),
        children: [
            (0, r.jsx)(o.TooltipContainer, {
                text: g.Z.Messages.USER_PROFILE_SEND_REACTION,
                shouldShow: v,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(o.Popout, {
                    onRequestClose: () => {
                        null == R ||
                            R({
                                interactionType: null,
                                interactionSourceType: null
                            });
                    },
                    onRequestOpen: () => {
                        null == R ||
                            R({
                                interactionType: I.P.REACT,
                                interactionSourceType: i
                            });
                    },
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(u.Z, {
                            guildId: null == n ? void 0 : n.guild_id,
                            closePopout: t,
                            onSelectEmoji: (e, n) => {
                                G(e), n && (t(), null == L || L());
                            },
                            pickerIntention: T.Hz.PROFILE,
                            channel: n
                        });
                    },
                    position: 'left',
                    animation: o.Popout.Animation.NONE,
                    align: 'top',
                    children: (e) =>
                        (0, r.jsx)(l.zx, {
                            ...e,
                            onClick: (t) => {
                                b({ action: P }), e.onClick(t);
                            },
                            className: a()(S.button, S.left),
                            'aria-label': g.Z.Messages.USER_PROFILE_SEND_REACTION,
                            children: (0, r.jsx)(o.ReactionIcon, {
                                size: 'xs',
                                className: S.icon
                            })
                        })
                })
            }),
            (0, r.jsx)(o.TooltipContainer, {
                text: g.Z.Messages.USER_PROFILE_REPLY,
                shouldShow: v,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(l.zx, {
                    onClick: () => {
                        b({ action: U }),
                            null == R ||
                                R({
                                    interactionType: I.P.REPLY,
                                    interactionSourceType: i
                                });
                    },
                    className: a()(S.button, S.right),
                    'aria-label': g.Z.Messages.USER_PROFILE_REPLY,
                    children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
                        size: 'xs',
                        className: S.icon
                    })
                })
            })
        ]
    });
}
