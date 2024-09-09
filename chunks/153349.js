n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i,
    s,
    a = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(512722),
    u = n.n(c),
    d = n(442837),
    h = n(481060),
    m = n(239091),
    p = n(99690),
    _ = n(58540),
    f = n(665149),
    E = n(484459),
    g = n(347475),
    C = n(271383),
    I = n(496675),
    x = n(158776),
    T = n(471253),
    v = n(431328),
    S = n(145834),
    N = n(590415),
    A = n(614173),
    Z = n(618896),
    M = n(231338),
    b = n(689938),
    R = n(470407);
let L = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            i = (0, a.jsx)(f.ZP.Icon, {
                icon: h.XSmallIcon,
                tooltip: b.Z.Messages.CLOSE,
                onClick: t
            });
        return (0, a.jsxs)(f.ZP, {
            toolbar: i,
            className: o()(R.headerContainer, { [R.chatOpen]: n }),
            children: [
                (0, a.jsx)(f.ZP.Icon, {
                    icon: h.HandRequestSpeakIcon,
                    disabled: !0,
                    'aria-label': b.Z.Messages.REQUEST_TO_SPEAK_AREA_TITLE
                }),
                (0, a.jsx)(f.ZP.Title, { children: b.Z.Messages.REQUEST_TO_SPEAK_AREA_TITLE })
            ]
        });
    }),
    j = l.memo(function (e) {
        let { channel: t, participant: i, tempDisableOnInit: s = !1 } = e,
            [r, c] = l.useState(s);
        l.useEffect(() => {
            if (!r) return;
            let e = setTimeout(() => c(!1), 1000);
            return () => clearTimeout(e);
        }, []);
        let f = t.getGuildId();
        u()(null != f, 'Channel cannot be guildless');
        let { isMobile: I, status: v } = (0, d.cj)([x.Z], () => ({
                isMobile: x.Z.isMobileOnline(i.user.id),
                status: x.Z.getStatus(i.user.id, f)
            })),
            A = (0, d.e7)([C.ZP], () => C.ZP.getMember(f, i.user.id)),
            Z = l.useMemo(() => ({ [f]: [i.user.id] }), [f, i.user.id]);
        (0, _.$)(Z);
        let M = i.rtsState === N.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function L() {
            (0, T.DT)(t, i.user.id, !1);
        }
        function j() {
            (0, T.DT)(t, i.user.id, !0);
        }
        let P = (e) => {
            (0, m.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('90286'), n.e('12435'), n.e('46563')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        user: i.user,
                        guildId: f,
                        channel: t,
                        showMediaItems: !0
                    });
            });
        };
        return (0, a.jsxs)('div', {
            className: R.participantRowContainer,
            children: [
                (0, a.jsx)(h.Popout, {
                    preload: () =>
                        (0, E.Z)(i.user.id, i.user.getAvatarURL(t.guild_id, 80), {
                            guildId: t.guild_id,
                            channelId: t.id
                        }),
                    renderPopout: (e) =>
                        (0, a.jsx)(g.Z, {
                            ...e,
                            userId: i.user.id,
                            guildId: f,
                            channelId: t.id
                        }),
                    position: 'left',
                    spacing: 16,
                    children: (e) => {
                        var t;
                        return (0, a.jsxs)(h.Clickable, {
                            className: R.participantMemberContainer,
                            onContextMenu: P,
                            ...e,
                            children: [
                                (0, a.jsx)(p.Z, {
                                    size: h.AvatarSizes.SIZE_40,
                                    className: R.participantAvatar,
                                    user: i.user,
                                    isMobile: I,
                                    status: v
                                }),
                                (0, a.jsxs)('div', {
                                    className: R.participantTextContainer,
                                    children: [
                                        (0, a.jsx)(h.NameWithRole, {
                                            name: i.userNick,
                                            color: null !== (t = null == A ? void 0 : A.colorString) && void 0 !== t ? t : void 0,
                                            className: R.participantName
                                        }),
                                        (0, a.jsx)(h.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-secondary',
                                            children: (0, S.$)(i)
                                        })
                                    ]
                                })
                            ]
                        });
                    }
                }),
                (0, a.jsx)(h.Tooltip, {
                    text: M ? b.Z.Messages.REQUEST_TO_SPEAK_INVITATION_SEND : b.Z.Messages.REQUEST_TO_SPEAK_ACCEPT,
                    children: (e) =>
                        (0, a.jsx)(h.Button, {
                            ...e,
                            innerClassName: R.buttonContainer,
                            look: h.Button.Looks.BLANK,
                            size: h.Button.Sizes.NONE,
                            onClick: L,
                            disabled: M || r,
                            children: (0, a.jsx)(h.MicrophoneArrowRightIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                }),
                (0, a.jsx)(h.Tooltip, {
                    text: b.Z.Messages.REQUEST_TO_SPEAK_DECLINE,
                    children: (e) =>
                        (0, a.jsx)(h.Button, {
                            ...e,
                            innerClassName: o()(R.buttonContainer, R.buttonMargin),
                            look: h.Button.Looks.BLANK,
                            size: h.Button.Sizes.NONE,
                            onClick: j,
                            children: (0, a.jsx)(h.XSmallIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                })
            ]
        });
    }),
    P = l.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, A.h)(t.id);
        return (0, a.jsx)(h.FormSwitch, {
            className: R.toggle,
            onChange: i,
            value: n,
            children: b.Z.Messages.MODERATOR_ALLOW_EVERYONE_RAISE_HAND
        });
    }),
    O = l.memo(function () {
        return (0, a.jsxs)('div', {
            className: R.emptyStateContainer,
            children: [
                (0, a.jsx)(Z.Z, {}),
                (0, a.jsx)(h.Text, {
                    className: R.emptyStateTitle,
                    variant: 'text-lg/semibold',
                    color: 'header-primary',
                    children: b.Z.Messages.REQUEST_TO_SPEAK_EMPTY_LIST_TITLE
                }),
                (0, a.jsx)(h.Text, {
                    className: R.emptyStateBody,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: b.Z.Messages.REQUEST_TO_SPEAK_EMPTY_LIST_BODY
                })
            ]
        });
    });
function y(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        s = (0, v.Fd)(t.id),
        l = [(0, d.e7)([I.Z], () => I.Z.can(M.Pl.MANAGE_CHANNELS, t) || I.Z.can(M.Pl.MANAGE_ROLES, t)) ? 1 : 0, Math.max(1, s.length)];
    return (0, a.jsxs)('div', {
        className: o()(R.container, { [R.chatOpen]: i }),
        children: [
            (0, a.jsx)(L, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i
            }),
            (0, a.jsx)(h.List, {
                className: R.contentContainer,
                sections: l,
                sectionHeight: function (e) {
                    if (1 === e) return 40;
                    return 0;
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === s.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: n, row: i } = e;
                    switch (n) {
                        case 0:
                            return (0, a.jsx)(P, { channel: t }, 'rts-toggle');
                        case 1: {
                            if (0 === s.length) return (0, a.jsx)(O, {}, 'participants-empty');
                            let e = s[i];
                            return (0, a.jsx)(
                                j,
                                {
                                    channel: t,
                                    participant: e,
                                    tempDisableOnInit: !0
                                },
                                e.id
                            );
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let { section: t } = e;
                    if (1 === t)
                        return (0, a.jsx)(
                            h.Text,
                            {
                                className: R.listTitle,
                                variant: 'text-xs/bold',
                                color: 'header-secondary',
                                children: s.length > 0 ? b.Z.Messages.REQUEST_TO_SPEAK_LIST_TITLE.format({ numHands: s.length }) : b.Z.Messages.REQUEST_TO_SPEAK_AREA_TITLE
                            },
                            'participants-section'
                        );
                    return null;
                }
            })
        ]
    });
}
((s = i || (i = {}))[(s.TOGGLE_REQUEST_TO_SPEAK = 0)] = 'TOGGLE_REQUEST_TO_SPEAK'), (s[(s.PARTICIPANTS = 1)] = 'PARTICIPANTS');
