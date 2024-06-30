var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(91192), o = n(442837), c = n(481060), u = n(493683), d = n(239091), h = n(569471), p = n(488131), _ = n(592125), f = n(306680), m = n(979651), g = n(938475), C = n(514342), I = n(714794), E = n(135724), N = n(25601), x = n(207055), S = n(981631), Z = n(124368), v = n(689938), T = n(47705), L = n(359123), A = n(205546);
function b(e) {
    let {
        style: t,
        withGuildIcon: n
    } = e;
    return (0, i.jsx)('svg', {
        className: a()(A.spine, { [A.spineWithGuildIcon]: n }),
        width: '12',
        height: '11',
        viewBox: '0 0 12 11',
        fill: 'none',
        'aria-hidden': !0,
        style: t,
        children: (0, i.jsx)('path', {
            d: 'M11 9H4C2.89543 9 2 8.10457 2 7V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V7C0 9.20914 1.79086 11 4 11H11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9Z',
            fill: 'currentColor'
        })
    });
}
t.Z = l.memo(function (e) {
    let {
            thread: t,
            isSelectedChannel: r,
            isSelectedVoice: A,
            isLast: M,
            withGuildIcon: R
        } = e, y = (0, o.e7)([g.ZP], () => g.ZP.getVoiceStatesForChannel(t), [t]), O = (0, o.e7)([m.Z], () => m.Z.hasVideo(t.id)), {
            unread: P,
            mentionCount: j
        } = (0, o.cj)([f.ZP], () => ({
            unread: f.ZP.hasUnread(t.id),
            mentionCount: f.ZP.getMentionCount(t.id)
        })), D = (0, o.e7)([h.Z], () => h.Z.isMuted(t.id)), U = l.useCallback(e => {
            (0, p.ok)(t, !e.shiftKey, Z.on.CHANNEL_LIST);
        }, [t]), G = l.useCallback(() => {
            u.Z.preload(t.guild_id, t.id);
        }, [
            t.guild_id,
            t.id
        ]), w = l.useCallback(e => {
            let l = _.Z.getChannel(t.id);
            null != l && (0, d.jW)(e, async () => {
                let {default: e} = await n.e('40157').then(n.bind(n, 422200));
                return t => (0, i.jsx)(e, {
                    ...t,
                    channel: l
                });
            });
        }, [t.id]), k = null == y ? 0 : y.length, {
            role: B,
            ...V
        } = (0, s.JA)(t.id), H = l.useRef(null), F = j > 0 ? v.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS.format({
            channelName: t.name,
            mentionCount: j
        }) : P ? v.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS.format({ channelName: t.name }) : v.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL.format({ channelName: t.name });
    return (0, i.jsxs)('li', {
        role: B,
        className: a()(T.containerDefault, { [T.selected]: r }),
        children: [
            (0, i.jsx)(b, { withGuildIcon: R }),
            M ? null : (0, i.jsx)(b, {
                withGuildIcon: R,
                style: { transform: 'rotateX(180deg) translateY(-9px)' }
            }),
            (0, i.jsx)(c.FocusRing, {
                focusTarget: H,
                ringTarget: H,
                offset: {
                    top: 2,
                    bottom: 2,
                    right: 4
                },
                children: (0, i.jsxs)('div', {
                    className: a()(T.iconVisibility, L.wrapper, L.typeThread, {
                        [L.modeSelected]: r,
                        [L.modeMuted]: !r && D,
                        [L.modeUnreadImportant]: !D && !r && P,
                        [L.withGuildIcon]: R
                    }),
                    onMouseDown: G,
                    onContextMenu: w,
                    children: [
                        !P || D || r ? null : (0, i.jsx)('div', { className: a()(L.unread, L.unreadImportant) }),
                        (0, i.jsx)(c.Clickable, {
                            ...V,
                            innerRef: H,
                            className: L.link,
                            onClick: U,
                            'aria-label': F,
                            focusProps: { enabled: !1 },
                            children: (0, i.jsxs)('div', {
                                className: a()(L.linkTop, L.__invalid_threadMainContent),
                                children: [
                                    (0, i.jsx)(C.Z, {
                                        className: L.name,
                                        'aria-hidden': !0,
                                        children: t.name
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: L.children,
                                        children: [
                                            k > 0 && t.userLimit > 0 ? (0, i.jsx)(E.Z, {
                                                userCount: k,
                                                video: O,
                                                channel: t
                                            }) : null,
                                            (0, I.Z)(j) ? (0, i.jsx)(N.Z, { mentionsCount: j }) : null
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(x.Z, {
                channel: t,
                collapsed: !A,
                collapsedMax: 6,
                voiceStates: y,
                location: S.Sbl.GUILD_CHANNEL_LIST
            })
        ]
    });
});
