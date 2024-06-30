n.d(t, {
    Z: function () {
        return y;
    }
}), n(47120);
var i, a, l = n(735250), s = n(470079), r = n(120356), o = n.n(r), c = n(512722), u = n.n(c), d = n(442837), h = n(481060), p = n(239091), m = n(99690), _ = n(58540), f = n(484459), E = n(103575), C = n(271383), g = n(496675), I = n(158776), x = n(502568), T = n(471253), N = n(431328), v = n(145834), S = n(590415), Z = n(614173), A = n(618896), M = n(231338), b = n(689938), R = n(944759);
let j = s.memo(function (e) {
        let {
                toggleRequestToSpeakSidebar: t,
                chatOpen: n
            } = e, i = (0, l.jsx)(x.ZP.Icon, {
                icon: h.CloseSmallIcon,
                tooltip: b.Z.Messages.CLOSE,
                onClick: t
            });
        return (0, l.jsxs)(x.ZP, {
            toolbar: i,
            className: o()(R.headerContainer, { [R.chatOpen]: n }),
            children: [
                (0, l.jsx)(x.ZP.Icon, {
                    icon: h.HandRequestSpeakIcon,
                    disabled: !0,
                    'aria-label': b.Z.Messages.REQUEST_TO_SPEAK_AREA_TITLE
                }),
                (0, l.jsx)(x.ZP.Title, { children: b.Z.Messages.REQUEST_TO_SPEAK_AREA_TITLE })
            ]
        });
    }), L = s.memo(function (e) {
        let {
                channel: t,
                participant: i,
                tempDisableOnInit: a = !1
            } = e, [r, c] = s.useState(a);
        s.useEffect(() => {
            if (!r)
                return;
            let e = setTimeout(() => c(!1), 1000);
            return () => clearTimeout(e);
        }, []);
        let g = t.getGuildId();
        u()(null != g, 'Channel cannot be guildless');
        let {
                isMobile: x,
                status: N
            } = (0, d.cj)([I.Z], () => ({
                isMobile: I.Z.isMobileOnline(i.user.id),
                status: I.Z.getStatus(i.user.id, g)
            })), Z = (0, d.e7)([C.ZP], () => C.ZP.getMember(g, i.user.id)), A = s.useMemo(() => ({ [g]: [i.user.id] }), [
                g,
                i.user.id
            ]);
        (0, _.$)(A);
        let M = i.rtsState === S.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function j() {
            (0, T.DT)(t, i.user.id, !1);
        }
        function L() {
            (0, T.DT)(t, i.user.id, !0);
        }
        let P = e => {
            (0, p.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('17400'),
                    n.e('12435'),
                    n.e('47195')
                ]).then(n.bind(n, 757387));
                return n => (0, l.jsx)(e, {
                    ...n,
                    user: i.user,
                    guildId: g,
                    channel: t,
                    showMediaItems: !0
                });
            });
        };
        return (0, l.jsxs)('div', {
            className: R.participantRowContainer,
            children: [
                (0, l.jsx)(h.Popout, {
                    preload: () => (0, f.Z)(i.user.id, i.user.getAvatarURL(t.guild_id, 80), {
                        guildId: t.guild_id,
                        channelId: t.id
                    }),
                    renderPopout: e => (0, l.jsx)(E.Z, {
                        ...e,
                        location: 'RequestToSpeakSidebar',
                        userId: i.user.id,
                        guildId: g,
                        channelId: t.id
                    }),
                    position: 'left',
                    spacing: 16,
                    children: e => {
                        var t;
                        return (0, l.jsxs)(h.Clickable, {
                            className: R.participantMemberContainer,
                            onContextMenu: P,
                            ...e,
                            children: [
                                (0, l.jsx)(m.Z, {
                                    size: h.AvatarSizes.SIZE_40,
                                    className: R.participantAvatar,
                                    user: i.user,
                                    isMobile: x,
                                    status: N
                                }),
                                (0, l.jsxs)('div', {
                                    className: R.participantTextContainer,
                                    children: [
                                        (0, l.jsx)(h.NameWithRole, {
                                            name: i.userNick,
                                            color: null !== (t = null == Z ? void 0 : Z.colorString) && void 0 !== t ? t : void 0,
                                            className: R.participantName
                                        }),
                                        (0, l.jsx)(h.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-secondary',
                                            children: (0, v.$)(i)
                                        })
                                    ]
                                })
                            ]
                        });
                    }
                }),
                (0, l.jsx)(h.Tooltip, {
                    text: M ? b.Z.Messages.REQUEST_TO_SPEAK_INVITATION_SEND : b.Z.Messages.REQUEST_TO_SPEAK_ACCEPT,
                    children: e => (0, l.jsx)(h.Button, {
                        ...e,
                        innerClassName: R.buttonContainer,
                        look: h.Button.Looks.BLANK,
                        size: h.Button.Sizes.NONE,
                        onClick: j,
                        disabled: M || r,
                        children: (0, l.jsx)(h.MicrophoneArrowRightIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                }),
                (0, l.jsx)(h.Tooltip, {
                    text: b.Z.Messages.REQUEST_TO_SPEAK_DECLINE,
                    children: e => (0, l.jsx)(h.Button, {
                        ...e,
                        innerClassName: o()(R.buttonContainer, R.buttonMargin),
                        look: h.Button.Looks.BLANK,
                        size: h.Button.Sizes.NONE,
                        onClick: L,
                        children: (0, l.jsx)(h.CloseSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                })
            ]
        });
    }), P = s.memo(function (e) {
        let {channel: t} = e, [n, i] = (0, Z.h)(t.id);
        return (0, l.jsx)(h.FormSwitch, {
            className: R.toggle,
            onChange: i,
            value: n,
            children: b.Z.Messages.MODERATOR_ALLOW_EVERYONE_RAISE_HAND
        });
    }), O = s.memo(function () {
        return (0, l.jsxs)('div', {
            className: R.emptyStateContainer,
            children: [
                (0, l.jsx)(A.Z, {}),
                (0, l.jsx)(h.Text, {
                    className: R.emptyStateTitle,
                    variant: 'text-lg/semibold',
                    color: 'header-primary',
                    children: b.Z.Messages.REQUEST_TO_SPEAK_EMPTY_LIST_TITLE
                }),
                (0, l.jsx)(h.Text, {
                    className: R.emptyStateBody,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: b.Z.Messages.REQUEST_TO_SPEAK_EMPTY_LIST_BODY
                })
            ]
        });
    });
function y(e) {
    let {
            channel: t,
            toggleRequestToSpeakSidebar: n,
            chatOpen: i
        } = e, a = (0, N.Fd)(t.id), s = [
            (0, d.e7)([g.Z], () => g.Z.can(M.Pl.MANAGE_CHANNELS, t) || g.Z.can(M.Pl.MANAGE_ROLES, t)) ? 1 : 0,
            Math.max(1, a.length)
        ];
    return (0, l.jsxs)('div', {
        className: o()(R.container, { [R.chatOpen]: i }),
        children: [
            (0, l.jsx)(j, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i
            }),
            (0, l.jsx)(h.List, {
                className: R.contentContainer,
                sections: s,
                sectionHeight: function (e) {
                    if (1 === e)
                        return 40;
                    return 0;
                },
                rowHeight: function (e) {
                    switch (e) {
                    case 0:
                        return 66;
                    case 1:
                        if (0 === a.length)
                            return 178;
                        return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let {
                        section: n,
                        row: i
                    } = e;
                    switch (n) {
                    case 0:
                        return (0, l.jsx)(P, { channel: t }, 'rts-toggle');
                    case 1: {
                            if (0 === a.length)
                                return (0, l.jsx)(O, {}, 'participants-empty');
                            let e = a[i];
                            return (0, l.jsx)(L, {
                                channel: t,
                                participant: e,
                                tempDisableOnInit: !0
                            }, e.id);
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let {section: t} = e;
                    if (1 === t)
                        return (0, l.jsx)(h.Text, {
                            className: R.listTitle,
                            variant: 'text-xs/bold',
                            color: 'header-secondary',
                            children: a.length > 0 ? b.Z.Messages.REQUEST_TO_SPEAK_LIST_TITLE.format({ numHands: a.length }) : b.Z.Messages.REQUEST_TO_SPEAK_AREA_TITLE
                        }, 'participants-section');
                    return null;
                }
            })
        ]
    });
}
(a = i || (i = {}))[a.TOGGLE_REQUEST_TO_SPEAK = 0] = 'TOGGLE_REQUEST_TO_SPEAK', a[a.PARTICIPANTS = 1] = 'PARTICIPANTS';
