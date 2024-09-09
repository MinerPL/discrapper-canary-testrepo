n.d(t, {
    Ll: function () {
        return ef;
    },
    St: function () {
        return em;
    },
    WT: function () {
        return ex;
    },
    jL: function () {
        return eT;
    },
    wG: function () {
        return ev;
    },
    yR: function () {
        return ec;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    s = n(512722),
    o = n.n(s);
n(699581);
var u = n(442837),
    c = n(704215),
    d = n(692547),
    h = n(481060),
    m = n(493683),
    x = n(475179),
    E = n(287734),
    _ = n(872810),
    p = n(607070),
    v = n(220779),
    T = n(201133),
    f = n(557135),
    g = n(194082),
    I = n(605236),
    C = n(543241),
    N = n(318374),
    P = n(258609),
    Z = n(810568),
    S = n(168524),
    M = n(382182),
    y = n(871118),
    A = n(565138),
    O = n(66999),
    R = n(790642),
    j = n(359110),
    w = n(12168),
    L = n(237583),
    b = n(592125),
    U = n(430824),
    D = n(496675),
    B = n(699516),
    k = n(9156),
    F = n(594174),
    G = n(979651),
    H = n(938475),
    V = n(626135),
    Y = n(768581),
    z = n(5192),
    W = n(379357),
    J = n(26033),
    q = n(91907),
    K = n(358696),
    X = n(656709),
    $ = n(192918),
    Q = n(22211),
    ee = n(561308),
    et = n(206295),
    en = n(111386),
    el = n(797342),
    ea = n(896449),
    ei = n(469153),
    er = n(206583),
    es = n(981631),
    eo = n(689938),
    eu = n(164384);
function ec(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (
        (0, h.useFocusLock)(n),
        (0, l.jsx)('div', {
            className: eu.popout,
            ref: n,
            children: t
        })
    );
}
function ed(e) {
    let { children: t, backgroundImgSrc: n, className: a, style: i = {} } = e,
        { primaryColor: s, secondaryColor: o } = (0, et.Z)(n);
    return (
        null != n && (i.background = 'linear-gradient(45deg, '.concat(s, ', ').concat(o, ')')),
        (0, l.jsx)(h.ThemeProvider, {
            theme: es.BRd.DARK,
            children: (e) =>
                (0, l.jsx)('div', {
                    'data-disable-adaptive-theme': !0,
                    className: r()(eu.hero, e, a),
                    style: i,
                    children: t
                })
        })
    );
}
let eh = a.createContext(null);
function em(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: eu.interactionsContainerHeader,
                ref: (e) => (n.current = e)
            }),
            (0, l.jsx)('div', {
                className: eu.interactionsContainer,
                children: (0, l.jsx)(eh.Provider, {
                    value: n.current,
                    children: t
                })
            })
        ]
    });
}
function ex(e) {
    let { channel: t, user: n, generateReactionImage: i, reactionImageAltText: r, onReaction: s, entry: E, buttons: _ = [], header: p, onVoiceChannelPreview: g } = e,
        [C, N] = a.useState(!1),
        [P, Z] = a.useState(null),
        S = (0, u.e7)([D.Z], () => null != t && D.Z.can(es.Plq.SEND_MESSAGES, t)),
        [M, y] = a.useState(!1),
        [w, F] = a.useState(!1),
        { voiceBar: Y, joinVoiceButton: W } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: s } = (0, Q.Z)(n),
                { isRich: o, appName: c } = (0, el.n)(n),
                { needSubscriptionToAccess: m } = (0, O.Z)(null == t ? void 0 : t.id),
                E = (0, u.e7)([U.Z], () => (null != s ? U.Z.getGuild(s.guild_id) : void 0)),
                _ = (0, u.Wu)([H.ZP], () => (null != s ? H.ZP.getVoiceStatesForChannel(s) : []), [s]),
                p = (0, u.e7)([G.Z], () => G.Z.isInChannel(null == s ? void 0 : s.id)),
                v = a.useMemo(() => {
                    for (let e of _) {
                        let t = b.Z.getDMFromUserId(e.user.id),
                            n = null != t && k.ZP.isChannelMuted(null, t),
                            l = B.Z.isBlocked(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [_]);
            if (null == s || null == E)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let T = null != r,
                g = () => {
                    x.Z.updateChatOpen(s.id, !0), (0, j.Kh)(s.id);
                    null == i || i(s, o ? c : void 0);
                },
                I = () => {
                    f.Z.handleVoiceConnect({
                        channel: s,
                        connected: p,
                        needSubscriptionToAccess: m,
                        routeDirectlyToChannel: !0
                    });
                },
                C = (e) => {
                    let { children: t, text: n, hasBlockedOrMutedVCParticipant: a } = e,
                        i = a
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      a &&
                                          (0, l.jsx)(h.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: eu.popoutBlockedWarningIcon
                                          }),
                                      eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
                                  ]
                              })
                            : n;
                    return (0, l.jsx)(
                        h.Tooltip,
                        {
                            'aria-label': a ? eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : null != n && n,
                            text: i,
                            shouldShow: !0,
                            children: t
                        },
                        'voice-preview'
                    );
                },
                N = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)('div', {
                            className: eu.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, l.jsx)(C, {
                                    text: eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                    hasBlockedOrMutedVCParticipant: v,
                                    children: (e) =>
                                        (0, l.jsxs)(h.Clickable, {
                                            ...e,
                                            'aria-label': eo.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                            onClick: g,
                                            className: eu.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, l.jsx)(A.Z, {
                                                    guild: E,
                                                    size: A.Z.Sizes.SMOL,
                                                    className: eu.voiceChannelGuildIcon,
                                                    active: !0
                                                }),
                                                (0, l.jsx)(h.ChevronSmallRightIcon, {
                                                    size: 'xxs',
                                                    color: d.Z.colors.INTERACTIVE_NORMAL
                                                }),
                                                (0, l.jsx)(h.VoiceNormalIcon, {
                                                    size: 'xs',
                                                    color: d.Z.colors.TEXT_NORMAL
                                                }),
                                                (0, l.jsx)(h.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-normal',
                                                    className: eu.voiceChannelName,
                                                    children: s.name
                                                })
                                            ]
                                        })
                                }),
                                (0, l.jsx)(L.Z, {
                                    guildId: E.id,
                                    users: _,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(h.Avatar, {
                                            src: e.user.getAvatarURL(E.id, 16),
                                            size: h.AvatarSizes.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: t
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)('div', {
                                            className: eu.voiceChannelAdditionalParticipants,
                                            children: (0, l.jsx)(h.Text, {
                                                variant: 'text-xxs/semibold',
                                                color: 'text-normal',
                                                children: e
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', { className: eu.primaryActionPopoutDivider })
                    ]
                });
            return {
                voiceBar: N,
                joinVoiceButton: p
                    ? null
                    : (0, l.jsx)(C, {
                          hasBlockedOrMutedVCParticipant: v,
                          children: (e) =>
                              (0, l.jsx)(ef, {
                                  ...e,
                                  color: h.Button.Colors.GREEN,
                                  onClick: I,
                                  IconComponent: T ? h.ScreenIcon : h.VoiceNormalIcon,
                                  children: T ? eo.Z.Messages.WATCH : eo.Z.Messages.JOIN
                              })
                      })
            };
        })({
            channel: t,
            entry: E,
            onVoiceChannelPreview: g
        }),
        J = null != W && 0 === _.length ? [W] : _,
        q = J.length > 0,
        K = J.length >= 2,
        [$, ee] = a.useState(!q),
        et = z.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        ea = null != t && C ? '#'.concat(t.name) : '@'.concat(et),
        ec = C ? eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
        ed = async (e) => {
            let l;
            if (null != e) {
                if (
                    (V.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: er.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, I.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    y(!0),
                    F(!1),
                    C)
                )
                    o()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
                else {
                    var a;
                    let e = await m.Z.getOrEnsurePrivateChannel(n.id);
                    l = null !== (a = b.Z.getChannel(e)) && void 0 !== a ? a : null;
                }
                return (
                    o()(null != l, 'Send channel must be defined'),
                    em({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: l,
                        onComplete: (e, t) => {
                            F(!0),
                                setTimeout(() => {
                                    y(!1), s(e, t);
                                }, 600);
                        },
                        interactionType: er.xP.REACTION_EMOJI_REACT_SENT
                    })
                );
            }
        },
        eh = async (e) => {
            let l;
            if (((0, I.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), C)) o()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
            else {
                let e = await m.Z.openPrivateChannel(n.id, !1, !1),
                    t = b.Z.getChannel(e);
                o()(null != t, 'DM channel must be defined'), (l = t);
            }
            let a = l.type === es.d4z.DM ? er.xP.DM_REACTION_MESSAGE_SENT : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return em({
                reply: e,
                sendToChannel: l,
                interactionType: a,
                onComplete: s
            });
        },
        em = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: l, interactionType: a } = e;
            if ((null == P || P.focus(), (0, R.Io)('ContentPopout Reactor')))
                await (0, X.p)({
                    channel: n,
                    content: t,
                    entry: E,
                    whenReady: !1
                });
            else {
                var s;
                let e = await ((s = i),
                async function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    try {
                        return await s(...t);
                    } catch (e) {
                        throw e;
                    }
                })(n.id);
                o()(null != e, 'Reaction image must be defined'),
                    await (0, T.B)({
                        file: e,
                        channel: n,
                        altText: r,
                        reply: t
                    });
            }
            null == l || l(a, n);
        },
        ex = null != p ? p : null != Y ? Y : void 0;
    return (
        a.useEffect(() => {
            $ && (null == P || P.focus());
        }, [P, C, $]),
        (0, l.jsxs)('div', {
            style: { pointerEvents: M ? 'none' : 'all' },
            children: [
                (0, l.jsx)(ei.Z, {
                    sent: w,
                    shown: M,
                    className: eu.toastContainer
                }),
                null != ex
                    ? ex
                    : (0, l.jsx)(en.Z, {
                          children: (0, l.jsxs)('div', {
                              className: eu.emojiHotrailShareToChannel,
                              children: [
                                  (0, l.jsx)(eE, {
                                      channel: t,
                                      onClickSuggestion: ed
                                  }),
                                  (0, l.jsx)(v.dE, { onSelectEmoji: ed })
                              ]
                          })
                      }),
                (0, l.jsxs)('div', {
                    className: $ ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
                    children: [
                        (0, l.jsx)(v.A7, {
                            placeholder: eo.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: ea }),
                            onEnter: eh,
                            setEditorRef: (e) => Z(e),
                            channel: C ? t : void 0,
                            showEmojiButton: null != ex,
                            renderAttachButton: S
                                ? () =>
                                      (0, l.jsx)(h.Tooltip, {
                                          text: ec,
                                          children: (e) =>
                                              (0, l.jsx)(h.Clickable, {
                                                  ...e,
                                                  className: eu.shareToChannelButton,
                                                  onClick: () => N((e) => !e),
                                                  children: C
                                                      ? (0, l.jsx)(h.TextIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                                      : (0, l.jsx)(h.AtIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                              })
                                      })
                                : void 0
                        }),
                        q &&
                            (0, l.jsx)(h.Clickable, {
                                onClick: () => ee(!1),
                                className: eu.primaryActionPopoutMessageCloseIcon,
                                children: (0, l.jsx)(h.XSmallIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === $ &&
                    (0, l.jsxs)('div', {
                        className: eu.primaryActionPopoutActionButtons,
                        children: [
                            (0, l.jsxs)(
                                h.Button,
                                {
                                    className: eu.secondaryButton,
                                    color: h.Button.Colors.CUSTOM,
                                    onClick: () => ee(!0),
                                    innerClassName: eu.iconButton,
                                    size: K ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
                                    children: [
                                        (0, l.jsx)(h.ChatIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            colorClass: eu.secondaryText
                                        }),
                                        !K &&
                                            (0, l.jsx)(h.Text, {
                                                variant: 'text-md/semibold',
                                                className: eu.secondaryText,
                                                children: eo.Z.Messages.USER_POPOUT_MESSAGE
                                            })
                                    ]
                                },
                                'toggleMessageMode'
                            ),
                            J
                        ]
                    })
            ]
        })
    );
}
let eE = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = a.useState(!1);
    a.useEffect(() => {
        r(!0);
    }, []);
    let s = !!p.Z.keyboardModeEnabled && !i,
        o = (0, C.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, Y.gT)({
                              id: e.id,
                              animated: e.animated,
                              size: 58
                          })
                      }
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: a } = e;
            return null != a
                ? (0, l.jsx)(
                      'div',
                      {
                          children: (0, l.jsx)(h.TooltipContainer, {
                              text: eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
                              position: 'top',
                              'aria-label': eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
                              color: h.Tooltip.Colors.PRIMARY,
                              shouldShow: !s && void 0,
                              children: (0, l.jsx)(w.u, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n(t),
                                  className: eu.emoji
                              })
                          })
                      },
                      t.name
                  )
                : null;
        })
    });
};
function e_(e) {
    let { channel: t, userDescription: n, entry: a, disableGameProfileLinks: i, onUserPopoutClosed: s } = e,
        o = null == t ? void 0 : t.guild_id,
        { displayParticipants: c, participant1: d, participant2: m, numOtherParticipants: x } = (0, $.Z)(a, 3),
        E = (0, u.e7)([F.default], () => F.default.getUser(a.author_id)),
        { streamPreviewUrl: _ } = (0, Q.Z)(a),
        p = [d, m];
    return (0, l.jsxs)('div', {
        className: eu.popoutContentHeader,
        children: [
            (0, l.jsxs)('div', {
                className: eu.popoutUserContainer,
                children: [
                    (0, l.jsx)(N.Z, {
                        maxUsers: 3,
                        users: c,
                        size: h.AvatarSizes.SIZE_24,
                        avatarClassName: eu.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutClosed: s
                    }),
                    (0, l.jsx)(h.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, l.jsx)(h.Heading, {
                        variant: 'heading-sm/normal',
                        className: eu.popoutTextSecondary,
                        children: n.format({
                            user0: z.ZP.getName(o, null == t ? void 0 : t.id, p[0]),
                            user1: z.ZP.getName(o, null == t ? void 0 : t.id, p[1]),
                            countOthers: x,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    h.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    q.Z,
                                    {
                                        textClassName: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: p[0],
                                        channel: t,
                                        onPopoutClosed: s
                                    },
                                    n
                                ),
                            name1Hook: (e, n) =>
                                (0, l.jsx)(
                                    q.Z,
                                    {
                                        textClassName: r()(eu.popoutUsername, eu.popoutTextPrimary),
                                        text: e,
                                        user: p[1],
                                        channel: t,
                                        onPopoutClosed: s
                                    },
                                    n
                                )
                        })
                    })
                ]
            }),
            null != _ && (0, l.jsx)(g.ZP, { size: g.ZP.Sizes.SMALL }),
            null != E &&
                (0, l.jsx)(ea.Z, {
                    user: E,
                    channel: t,
                    guildId: o,
                    entry: a,
                    disableGameProfileLinks: i
                })
        ]
    });
}
function ep(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, l.jsx)(l.Fragment, { children: t })
        : (0, l.jsx)(h.Clickable, {
              className: eu.maybeClickable,
              onClick: n,
              children: t
          });
}
function ev(e) {
    var t;
    let { title: n, subtitle: a, badges: i, children: s, onClickThumbnail: o, onClickTitle: u, onClickSubtitle: c, headerIcons: d, disableGameProfileLinks: m = !1, onUserPopoutClosed: x, ...E } = e,
        { entry: _ } = E,
        p = (0, J.dX)(_),
        v = (0, S.Z)({
            location: 'ContentPopout',
            applicationId: p && !m ? (null === (t = _.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: Z.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: _.author_id
        }),
        { largeImage: T, smallImage: f } = (0, W.rv)({ entry: _ }),
        g = p ? v : void 0;
    return (0, l.jsxs)('div', {
        className: eu.popoutContentWrapper,
        children: [
            (0, l.jsx)(e_, {
                disableGameProfileLinks: m,
                ...E,
                onUserPopoutClosed: x
            }),
            (0, l.jsxs)(ed, {
                backgroundImgSrc: null == T ? void 0 : T.src,
                children: [
                    (0, l.jsxs)('div', {
                        className: eu.popoutHeroInner,
                        children: [
                            (0, l.jsx)('div', {
                                className: eu.popoutThumbnailContainer,
                                children: (0, l.jsx)(K.E, {
                                    image: T,
                                    smallImage: f,
                                    onClick: null != o ? o : g,
                                    size: K.J.SIZE_72
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: eu.popoutHeroBody,
                                children: [
                                    (0, l.jsx)(ep, {
                                        onClick: null != u ? u : g,
                                        children: (0, l.jsx)(h.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(eu.popoutHeroTextPrimary, { [eu.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, l.jsx)(ep, {
                                              onClick: null != c ? c : g,
                                              children: (0, l.jsx)(h.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: eu.popoutHeroTextSecondary,
                                                  children: a
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(h.Spacer, { size: 8 }),
                                    i
                                ]
                            }),
                            (0, l.jsx)('div', {
                                className: eu.popoutHeaderIcons,
                                children: d
                            })
                        ]
                    }),
                    s
                ]
            })
        ]
    });
}
function eT(e) {
    var t;
    let { title: n, subtitle: i, badges: r, stream: s, onClickThumbnail: o, onClickTitle: c, onClickSubtitle: d, onUserPopoutClosed: m, ...x } = e,
        p = (0, u.e7)([b.Z], () => b.Z.getChannel(null == s ? void 0 : s.channelId)),
        [v] = a.useMemo(() => (0, M.p9)(p, G.Z, U.Z, D.Z, P.Z), [p]),
        { entry: T } = x,
        f = (0, J.dX)(T),
        g = (0, S.Z)({
            location: 'ContentPopout',
            applicationId: f ? (null === (t = T.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: Z.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: T.author_id
        }),
        I = f ? g : void 0,
        { activity: C, activityApplication: N, fallbackApplication: A } = (0, ee.qy)(T),
        { largeImage: O, smallImage: R } = (0, W.YC)(C, null != N ? N : A);
    return null == s
        ? null
        : (0, l.jsxs)('div', {
              className: eu.popoutContentWrapper,
              children: [
                  (0, l.jsx)(e_, {
                      ...x,
                      onUserPopoutClosed: m
                  }),
                  (0, l.jsxs)('div', {
                      className: eu.streamingPopoutHero,
                      children: [
                          (0, l.jsx)(ep, {
                              onClick: v
                                  ? () => {
                                        E.default.selectVoiceChannel(s.channelId), (0, _.iV)(s);
                                    }
                                  : void 0,
                              children: (0, l.jsxs)('div', {
                                  style: { position: 'relative' },
                                  children: [
                                      (0, l.jsx)(y.Z, {
                                          className: eu.streamingPopoutImg,
                                          stream: s
                                      }),
                                      v &&
                                          (0, l.jsx)('div', {
                                              className: eu.streamCTA,
                                              children: (0, l.jsx)(h.Text, {
                                                  variant: 'text-md/normal',
                                                  children: eo.Z.Messages.WATCH_STREAM
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, l.jsxs)('div', {
                              className: eu.streamingPopoutHeader,
                              children: [
                                  null != O &&
                                      (0, l.jsx)('div', {
                                          className: eu.popoutThumbnailContainer,
                                          children: (0, l.jsx)(K.E, {
                                              image: O,
                                              smallImage: R,
                                              onClick: null != o ? o : I,
                                              size: K.J.SIZE_72
                                          })
                                      }),
                                  (0, l.jsxs)('div', {
                                      className: eu.streamingPopoutHeaderText,
                                      children: [
                                          (0, l.jsx)(ep, {
                                              onClick: null != c ? c : I,
                                              children: (0, l.jsx)(h.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: eu.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: n
                                              })
                                          }),
                                          null != i
                                              ? (0, l.jsx)(ep, {
                                                    onClick: null != d ? d : I,
                                                    children: (0, l.jsx)(h.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: eu.popoutTextSecondary,
                                                        children: i
                                                    })
                                                })
                                              : null,
                                          (0, l.jsx)(h.Spacer, { size: 8 }),
                                          r
                                      ]
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
function ef(e) {
    let { IconComponent: t, children: n, className: a, ...i } = e;
    return (0, l.jsxs)(h.Button, {
        ...i,
        className: r()(a, eu.primaryButton),
        innerClassName: null != t ? eu.iconButton : void 0,
        size: h.Button.Sizes.LARGE,
        children: [
            null != t
                ? (0, l.jsx)(t, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: d.Z.colors.WHITE
                  })
                : null,
            (0, l.jsx)(h.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        ]
    });
}
