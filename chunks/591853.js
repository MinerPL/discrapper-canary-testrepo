n.d(t, {
    Ll: function () {
        return eI;
    },
    St: function () {
        return ex;
    },
    WT: function () {
        return eh;
    },
    jL: function () {
        return ef;
    },
    wG: function () {
        return eg;
    },
    yR: function () {
        return eu;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    o = n(512722),
    s = n.n(o);
n(995295);
var c = n(442837),
    u = n(704215),
    d = n(692547),
    m = n(481060),
    x = n(493683),
    h = n(475179),
    p = n(287734),
    C = n(872810),
    v = n(607070),
    g = n(220779),
    f = n(201133),
    I = n(557135),
    j = n(194082),
    Z = n(605236),
    P = n(543241),
    L = n(318374),
    T = n(258609),
    y = n(810568),
    N = n(168524),
    _ = n(102172),
    E = n(871118),
    S = n(565138),
    A = n(66999),
    M = n(790642),
    k = n(359110),
    w = n(12168),
    R = n(237583),
    b = n(131704),
    H = n(592125),
    O = n(430824),
    V = n(496675),
    B = n(699516),
    U = n(9156),
    D = n(594174),
    G = n(979651),
    z = n(938475),
    q = n(626135),
    W = n(768581),
    Y = n(5192),
    F = n(379357),
    J = n(26033),
    K = n(91907),
    X = n(358696),
    $ = n(656709),
    Q = n(192918),
    ee = n(22211),
    et = n(561308),
    en = n(206295),
    el = n(111386),
    ea = n(896449),
    ei = n(469153),
    er = n(206583),
    eo = n(981631),
    es = n(388032),
    ec = n(738127);
function eu(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (
        (0, m.useFocusLock)(n),
        (0, l.jsx)('div', {
            className: ec.popout,
            ref: n,
            children: t
        })
    );
}
function ed(e) {
    let { children: t, backgroundImgSrc: n, className: a, style: i = {} } = e,
        { primaryColor: o, secondaryColor: s } = (0, en.Z)(n);
    return (
        null != n && (i.background = 'linear-gradient(45deg, '.concat(o, ', ').concat(s, ')')),
        (0, l.jsx)(m.ThemeProvider, {
            theme: eo.BRd.DARK,
            children: (e) =>
                (0, l.jsx)('div', {
                    'data-disable-adaptive-theme': !0,
                    className: r()(ec.hero, e, a),
                    style: i,
                    children: t
                })
        })
    );
}
let em = a.createContext(null);
function ex(e) {
    let { children: t } = e,
        n = a.useRef(null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: ec.interactionsContainerHeader,
                ref: (e) => (n.current = e)
            }),
            (0, l.jsx)('div', {
                className: ec.interactionsContainer,
                children: (0, l.jsx)(em.Provider, {
                    value: n.current,
                    children: t
                })
            })
        ]
    });
}
function eh(e) {
    let { channel: t, user: n, generateReactionImage: i, reactionImageAltText: r, onReaction: o, entry: p, buttons: C = [], header: v, onVoiceChannelPreview: j } = e,
        [P, L] = a.useState(!1),
        [T, y] = a.useState(null),
        N = (0, c.e7)([V.Z], () => null != t && eo.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && V.Z.can(eo.Plq.SEND_MESSAGES, t)),
        [_, E] = a.useState(!1),
        [w, W] = a.useState(!1),
        { voiceBar: F, joinVoiceButton: J } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: o } = (0, ee.Z)(n),
                { needSubscriptionToAccess: s } = (0, A.Z)(null == t ? void 0 : t.id),
                u = (0, c.e7)([O.Z], () => (null != o ? O.Z.getGuild(o.guild_id) : void 0)),
                x = (0, c.Wu)([z.ZP], () => (null != o ? z.ZP.getVoiceStatesForChannel(o) : []), [o]),
                p = (0, c.e7)([G.Z], () => G.Z.isInChannel(null == o ? void 0 : o.id)),
                C = a.useMemo(() => {
                    for (let e of x) {
                        let t = H.Z.getDMFromUserId(e.user.id),
                            n = null != t && U.ZP.isChannelMuted(null, t),
                            l = B.Z.isBlocked(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [x]);
            if (null == o || null == u)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let v = null != r,
                g = () => {
                    h.Z.updateChatOpen(o.id, !0), (0, k.Kh)(o.id), null == i || i(o);
                },
                f = () => {
                    I.Z.handleVoiceConnect({
                        channel: o,
                        connected: p,
                        needSubscriptionToAccess: s,
                        routeDirectlyToChannel: !0
                    });
                },
                j = (e) => {
                    let { children: t, text: n, hasBlockedOrMutedVCParticipant: a } = e,
                        i = a
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      a &&
                                          (0, l.jsx)(m.WarningIcon, {
                                              size: 'custom',
                                              width: 13,
                                              height: 13,
                                              className: ec.popoutBlockedWarningIcon
                                          }),
                                      es.intl.string(es.t.d6DpXF)
                                  ]
                              })
                            : n;
                    return (0, l.jsx)(
                        m.Tooltip,
                        {
                            'aria-label': a ? es.intl.string(es.t.d6DpXF) : null != n && n,
                            text: i,
                            shouldShow: !0,
                            children: t
                        },
                        'voice-preview'
                    );
                },
                Z = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)('div', {
                            className: ec.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, l.jsx)(j, {
                                    text: es.intl.string(es.t.WIVYqK),
                                    hasBlockedOrMutedVCParticipant: C,
                                    children: (e) =>
                                        (0, l.jsxs)(m.Clickable, {
                                            ...e,
                                            'aria-label': es.intl.string(es.t.WIVYqK),
                                            onClick: g,
                                            className: ec.voiceChannelPopoutReactorChannel,
                                            children: [
                                                (0, l.jsx)(S.Z, {
                                                    guild: u,
                                                    size: S.Z.Sizes.SMOL,
                                                    className: ec.voiceChannelGuildIcon,
                                                    active: !0
                                                }),
                                                (0, l.jsx)(m.ChevronSmallRightIcon, {
                                                    size: 'xxs',
                                                    color: d.Z.colors.INTERACTIVE_NORMAL
                                                }),
                                                (0, l.jsx)(m.VoiceNormalIcon, {
                                                    size: 'xs',
                                                    color: d.Z.colors.TEXT_NORMAL
                                                }),
                                                (0, l.jsx)(m.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-normal',
                                                    className: ec.voiceChannelName,
                                                    children: o.name
                                                })
                                            ]
                                        })
                                }),
                                (0, l.jsx)(R.Z, {
                                    guildId: u.id,
                                    users: x,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(m.Avatar, {
                                            src: e.user.getAvatarURL(u.id, 16),
                                            size: m.AvatarSizes.SIZE_16,
                                            'aria-label': 'avatar',
                                            className: t
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)('div', {
                                            className: ec.voiceChannelAdditionalParticipants,
                                            children: (0, l.jsx)(m.Text, {
                                                variant: 'text-xxs/semibold',
                                                color: 'text-normal',
                                                children: e
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', { className: ec.primaryActionPopoutDivider })
                    ]
                });
            return {
                voiceBar: Z,
                joinVoiceButton: p
                    ? null
                    : (0, l.jsx)(j, {
                          hasBlockedOrMutedVCParticipant: C,
                          children: (e) =>
                              (0, l.jsx)(eI, {
                                  ...e,
                                  color: m.Button.Colors.GREEN,
                                  onClick: f,
                                  IconComponent: v ? m.ScreenIcon : m.VoiceNormalIcon,
                                  children: v ? es.intl.string(es.t['I6JG4+']) : es.intl.string(es.t.VJlc0d)
                              })
                      })
            };
        })({
            channel: t,
            entry: p,
            onVoiceChannelPreview: j
        }),
        { embeddedActivity: K } = (0, et.qy)(p),
        X = (function (e) {
            let t = (0, c.e7)([O.Z], () => O.Z.getGuild(null == e ? void 0 : e.guildId)),
                n = (0, c.e7)([H.Z], () => H.Z.getChannel(null == e ? void 0 : e.channelId)),
                a = (0, c.Wu)([D.default], () => {
                    var t, n;
                    return null !== (n = null == e ? void 0 : null === (t = e.participants) || void 0 === t ? void 0 : t.map((e) => D.default.getUser(e.userId))) && void 0 !== n ? n : [];
                });
            return null != e && null != t && null != n && b.sR.has(n.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: ec.voiceChannelPopoutReactorHeader,
                              children: [
                                  (0, l.jsxs)(m.Clickable, {
                                      'aria-label': es.intl.string(es.t['W/A4Qk']),
                                      onClick: () => (0, k.Kh)(n.id),
                                      className: ec.voiceChannelPopoutReactorChannel,
                                      children: [
                                          (0, l.jsx)(S.Z, {
                                              guild: t,
                                              size: S.Z.Sizes.SMOL,
                                              className: ec.voiceChannelGuildIcon,
                                              active: !0
                                          }),
                                          (0, l.jsx)(m.ChevronSmallRightIcon, {
                                              size: 'xxs',
                                              color: d.Z.colors.INTERACTIVE_NORMAL
                                          }),
                                          (0, l.jsx)(m.TextIcon, {
                                              size: 'xs',
                                              color: d.Z.colors.TEXT_NORMAL
                                          }),
                                          (0, l.jsx)(m.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'text-normal',
                                              className: ec.voiceChannelName,
                                              children: null == n ? void 0 : n.name
                                          })
                                      ]
                                  }),
                                  (0, l.jsx)(R.Z, {
                                      guildId: t.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(m.Avatar, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: m.AvatarSizes.SIZE_16,
                                              'aria-label': 'avatar',
                                              className: n
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)('div', {
                                              className: ec.voiceChannelAdditionalParticipants,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-normal',
                                                  children: e
                                              })
                                          })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', { className: ec.primaryActionPopoutDivider })
                      ]
                  })
                : null;
        })(K),
        Q = null != J && 0 === C.length ? [J] : C,
        en = Q.length > 0,
        ea = Q.length >= 2,
        [eu, ed] = a.useState(!en),
        em = Y.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        ex = null != t && P ? '#'.concat(t.name) : '@'.concat(em),
        eh = P ? es.intl.string(es.t.Z2CUgo) : es.intl.string(es.t.XLGiTE),
        eC = async (e) => {
            let l;
            if (null != e) {
                if (
                    (q.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: er.Kd.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id
                    }),
                    (0, Z.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    E(!0),
                    W(!1),
                    P)
                )
                    s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
                else {
                    var a;
                    let e = await x.Z.getOrEnsurePrivateChannel(n.id);
                    l = null !== (a = H.Z.getChannel(e)) && void 0 !== a ? a : null;
                }
                return (
                    s()(null != l, 'Send channel must be defined'),
                    eg({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: l,
                        onComplete: (e, t) => {
                            W(!0),
                                setTimeout(() => {
                                    E(!1), o(e, t);
                                }, 600);
                        },
                        interactionType: er.xP.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1
                    })
                );
            }
        },
        ev = async (e) => {
            let l;
            if (((0, Z.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), P)) s()(null != t, 'shareToChannelMode should only be true if a valid channel is passed'), (l = t);
            else {
                let e = await x.Z.openPrivateChannel(n.id, !1, !1),
                    t = H.Z.getChannel(e);
                s()(null != t, 'DM channel must be defined'), (l = t);
            }
            let a = l.type === eo.d4z.DM ? er.xP.DM_REACTION_MESSAGE_SENT : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return eg({
                reply: e,
                sendToChannel: l,
                interactionType: a,
                onComplete: o,
                requiresChannelReadiness: !0
            });
        },
        eg = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: l, interactionType: a, requiresChannelReadiness: o } = e;
            if ((null == T || T.focus(), (0, M.Io)('ContentPopout Reactor')))
                await (0, $.p)({
                    channel: n,
                    content: t,
                    entry: p,
                    whenReady: o
                });
            else {
                var c;
                let e = await ((c = i),
                async function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    try {
                        return await c(...t);
                    } catch (e) {
                        throw e;
                    }
                })(n.id);
                s()(null != e, 'Reaction image must be defined'),
                    await (0, f.B)({
                        file: e,
                        channel: n,
                        altText: r,
                        reply: t
                    });
            }
            null == l || l(a, n);
        },
        ef = null != v ? v : null != F ? F : null != X ? X : void 0;
    return (
        a.useEffect(() => {
            eu && (null == T || T.focus());
        }, [T, P, eu]),
        (0, l.jsxs)('div', {
            style: { pointerEvents: _ ? 'none' : 'all' },
            children: [
                (0, l.jsx)(ei.Z, {
                    sent: w,
                    shown: _,
                    className: ec.toastContainer
                }),
                null != ef
                    ? ef
                    : (0, l.jsx)(el.Z, {
                          children: (0, l.jsxs)('div', {
                              className: ec.emojiHotrailShareToChannel,
                              children: [
                                  (0, l.jsx)(ep, {
                                      channel: t,
                                      onClickSuggestion: eC
                                  }),
                                  (0, l.jsx)(g.dE, { onSelectEmoji: eC })
                              ]
                          })
                      }),
                (0, l.jsxs)('div', {
                    className: eu ? ec.inputContainerShareToChannel : ec.hiddenButRenderedInputField,
                    children: [
                        (0, l.jsx)(g.A7, {
                            placeholder: es.intl.formatToPlainString(es.t['8lzR/f'], { channel: ex }),
                            onEnter: ev,
                            setEditorRef: (e) => y(e),
                            channel: P ? t : void 0,
                            showEmojiButton: null != ef,
                            renderAttachButton: N
                                ? () =>
                                      (0, l.jsx)(m.Tooltip, {
                                          text: eh,
                                          children: (e) =>
                                              (0, l.jsx)(m.Clickable, {
                                                  ...e,
                                                  className: ec.shareToChannelButton,
                                                  onClick: () => L((e) => !e),
                                                  children: P
                                                      ? (0, l.jsx)(m.TextIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                                      : (0, l.jsx)(m.AtIcon, {
                                                            size: 'custom',
                                                            width: 20,
                                                            height: 20
                                                        })
                                              })
                                      })
                                : void 0
                        }),
                        en &&
                            (0, l.jsx)(m.Clickable, {
                                onClick: () => ed(!1),
                                className: ec.primaryActionPopoutMessageCloseIcon,
                                children: (0, l.jsx)(m.XSmallIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    color: d.Z.colors.ICON_PRIMARY
                                })
                            })
                    ]
                }),
                !1 === eu &&
                    (0, l.jsxs)('div', {
                        className: ec.primaryActionPopoutActionButtons,
                        children: [
                            (0, l.jsxs)(
                                m.Button,
                                {
                                    className: ec.secondaryButton,
                                    color: m.Button.Colors.CUSTOM,
                                    onClick: () => ed(!0),
                                    innerClassName: ec.iconButton,
                                    size: ea ? m.Button.Sizes.MIN : m.Button.Sizes.LARGE,
                                    children: [
                                        (0, l.jsx)(m.ChatIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            colorClass: ec.secondaryText
                                        }),
                                        !ea &&
                                            (0, l.jsx)(m.Text, {
                                                variant: 'text-md/semibold',
                                                className: ec.secondaryText,
                                                children: es.intl.string(es.t.OAJQlJ)
                                            })
                                    ]
                                },
                                'toggleMessageMode'
                            ),
                            Q
                        ]
                    })
            ]
        })
    );
}
let ep = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = a.useState(!1);
    a.useEffect(() => {
        r(!0);
    }, []);
    let o = !!v.Z.keyboardModeEnabled && !i,
        s = (0, P.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url
                      }
                    : {
                          emoji: e,
                          url: (0, W.gT)({
                              id: e.id,
                              animated: e.animated,
                              size: 58
                          })
                      }
            );
    return (0, l.jsx)(l.Fragment, {
        children: s.map((e) => {
            let { emoji: t, url: a } = e;
            return null != a
                ? (0, l.jsx)(
                      'div',
                      {
                          children: (0, l.jsx)(m.TooltipContainer, {
                              text: es.intl.formatToPlainString(es.t.kilW3t, { emojiName: t.name }),
                              position: 'top',
                              'aria-label': es.intl.formatToPlainString(es.t.kilW3t, { emojiName: t.name }),
                              color: m.Tooltip.Colors.PRIMARY,
                              shouldShow: !o && void 0,
                              children: (0, l.jsx)(w.u, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n(t),
                                  className: ec.emoji
                              })
                          })
                      },
                      t.name
                  )
                : null;
        })
    });
};
function eC(e) {
    let { channel: t, userDescription: n, entry: a, disableGameProfileLinks: i, onUserPopoutClosed: o } = e,
        s = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: x, numOtherParticipants: h } = (0, Q.Z)(a, 3),
        p = (0, c.e7)([D.default], () => D.default.getUser(a.author_id)),
        { streamPreviewUrl: C } = (0, ee.Z)(a),
        v = [d, x];
    return (0, l.jsxs)('div', {
        className: ec.popoutContentHeader,
        children: [
            (0, l.jsxs)('div', {
                className: ec.popoutUserContainer,
                children: [
                    (0, l.jsx)(L.Z, {
                        maxUsers: 3,
                        users: u,
                        size: m.AvatarSizes.SIZE_24,
                        avatarClassName: ec.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutClosed: o
                    }),
                    (0, l.jsx)(m.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, l.jsx)(m.Heading, {
                        variant: 'heading-sm/normal',
                        className: ec.popoutTextSecondary,
                        children: es.intl.format(n, {
                            user0: Y.ZP.getName(s, null == t ? void 0 : t.id, v[0]),
                            user1: Y.ZP.getName(s, null == t ? void 0 : t.id, v[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    m.Text,
                                    {
                                        variant: 'text-sm/medium',
                                        className: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        children: e
                                    },
                                    t
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        text: e,
                                        user: v[0],
                                        channel: t,
                                        onPopoutClosed: o
                                    },
                                    n
                                ),
                            name1Hook: (e, n) =>
                                (0, l.jsx)(
                                    K.Z,
                                    {
                                        textClassName: r()(ec.popoutUsername, ec.popoutTextPrimary),
                                        text: e,
                                        user: v[1],
                                        channel: t,
                                        onPopoutClosed: o
                                    },
                                    n
                                )
                        })
                    })
                ]
            }),
            null != C && (0, l.jsx)(j.ZP, { size: j.ZP.Sizes.SMALL }),
            null != p &&
                (0, l.jsx)(ea.Z, {
                    user: p,
                    channel: t,
                    guildId: s,
                    entry: a,
                    disableGameProfileLinks: i
                })
        ]
    });
}
function ev(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, l.jsx)(l.Fragment, { children: t })
        : (0, l.jsx)(m.Clickable, {
              className: ec.maybeClickable,
              onClick: n,
              children: t
          });
}
function eg(e) {
    var t;
    let { title: n, subtitle: a, badges: i, children: o, onClickThumbnail: s, onClickTitle: c, onClickSubtitle: u, headerIcons: d, disableGameProfileLinks: x = !1, onUserPopoutClosed: h, trackRankingItemInteraction: p, ...C } = e,
        { entry: v } = C,
        g = (0, J.dX)(v),
        f = (0, N.Z)(
            {
                location: 'ContentPopout',
                applicationId: g && !x ? (null === (t = v.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: y.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: v.author_id
            },
            { onOpened: () => (null == p ? void 0 : p(er.xP.OPENED_GAME_PROFILE)) }
        ),
        { largeImage: I, smallImage: j } = (0, F.rv)({ entry: v }),
        Z = g ? f : void 0;
    return (0, l.jsxs)('div', {
        className: ec.popoutContentWrapper,
        children: [
            (0, l.jsx)(eC, {
                disableGameProfileLinks: x,
                ...C,
                onUserPopoutClosed: h
            }),
            (0, l.jsxs)(ed, {
                backgroundImgSrc: null == I ? void 0 : I.src,
                children: [
                    (0, l.jsxs)('div', {
                        className: ec.popoutHeroInner,
                        children: [
                            (0, l.jsx)('div', {
                                className: ec.popoutThumbnailContainer,
                                children: (0, l.jsx)(X.E, {
                                    image: I,
                                    smallImage: j,
                                    onClick: null != s ? s : Z,
                                    size: X.J.SIZE_72
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: ec.popoutHeroBody,
                                children: [
                                    (0, l.jsx)(ev, {
                                        onClick: null != c ? c : Z,
                                        children: (0, l.jsx)(m.Heading, {
                                            variant: 'heading-md/medium',
                                            className: r()(ec.popoutHeroTextPrimary, { [ec.popoutHeroTextPrimaryShort]: null != d }),
                                            lineClamp: 3,
                                            children: n
                                        })
                                    }),
                                    null != a
                                        ? (0, l.jsx)(ev, {
                                              onClick: null != u ? u : Z,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: ec.popoutHeroTextSecondary,
                                                  children: a
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(m.Spacer, { size: 8 }),
                                    i
                                ]
                            }),
                            (0, l.jsx)('div', {
                                className: ec.popoutHeaderIcons,
                                children: d
                            })
                        ]
                    }),
                    o
                ]
            })
        ]
    });
}
function ef(e) {
    var t;
    let { title: n, subtitle: i, badges: r, stream: o, onClickThumbnail: s, onClickTitle: u, onClickSubtitle: d, onUserPopoutClosed: x, trackRankingItemInteraction: h, ...v } = e,
        g = (0, c.e7)([H.Z], () => H.Z.getChannel(null == o ? void 0 : o.channelId)),
        [f] = a.useMemo(() => (0, _.p9)(g, G.Z, O.Z, V.Z, T.Z), [g]),
        { entry: I } = v,
        j = (0, J.dX)(I),
        Z = (0, N.Z)(
            {
                location: 'ContentPopout',
                applicationId: j ? (null === (t = I.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
                source: y.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: I.author_id
            },
            { onOpened: () => (null == h ? void 0 : h(er.xP.OPENED_GAME_PROFILE)) }
        ),
        P = j ? Z : void 0,
        { activity: L, activityApplication: S, fallbackApplication: A } = (0, et.qy)(I),
        { largeImage: M, smallImage: k } = (0, F.YC)(L, null != S ? S : A);
    return null == o
        ? null
        : (0, l.jsxs)('div', {
              className: ec.popoutContentWrapper,
              children: [
                  (0, l.jsx)(eC, {
                      ...v,
                      onUserPopoutClosed: x
                  }),
                  (0, l.jsxs)('div', {
                      className: ec.streamingPopoutHero,
                      children: [
                          (0, l.jsx)(ev, {
                              onClick: f
                                  ? () => {
                                        p.default.selectVoiceChannel(o.channelId), (0, C.iV)(o);
                                    }
                                  : void 0,
                              children: (0, l.jsxs)('div', {
                                  className: ec.streamingPopoutPreviewContainer,
                                  children: [
                                      (0, l.jsx)(E.Z, {
                                          className: ec.streamingPopoutImg,
                                          stream: o
                                      }),
                                      f &&
                                          (0, l.jsx)('div', {
                                              className: ec.streamCTA,
                                              children: (0, l.jsx)(m.Text, {
                                                  variant: 'text-md/normal',
                                                  children: es.intl.string(es.t['7Xq/nZ'])
                                              })
                                          })
                                  ]
                              })
                          }),
                          (0, l.jsxs)('div', {
                              className: ec.streamingPopoutHeader,
                              children: [
                                  null != M &&
                                      (0, l.jsx)('div', {
                                          className: ec.popoutThumbnailContainer,
                                          children: (0, l.jsx)(X.E, {
                                              image: M,
                                              smallImage: k,
                                              onClick: null != s ? s : P,
                                              size: X.J.SIZE_72
                                          })
                                      }),
                                  (0, l.jsxs)('div', {
                                      className: ec.streamingPopoutHeaderText,
                                      children: [
                                          (0, l.jsx)(ev, {
                                              onClick: null != u ? u : P,
                                              children: (0, l.jsx)(m.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  className: ec.popoutTextPrimary,
                                                  lineClamp: 3,
                                                  children: n
                                              })
                                          }),
                                          null != i
                                              ? (0, l.jsx)(ev, {
                                                    onClick: null != d ? d : P,
                                                    children: (0, l.jsx)(m.Text, {
                                                        variant: 'text-sm/normal',
                                                        className: ec.popoutTextSecondary,
                                                        children: i
                                                    })
                                                })
                                              : null,
                                          (0, l.jsx)(m.Spacer, { size: 8 }),
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
function eI(e) {
    let { IconComponent: t, children: n, className: a, ...i } = e;
    return (0, l.jsxs)(m.Button, {
        ...i,
        className: r()(a, ec.primaryButton),
        innerClassName: null != t ? ec.iconButton : void 0,
        size: m.Button.Sizes.LARGE,
        children: [
            null != t
                ? (0, l.jsx)(t, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: d.Z.colors.WHITE
                  })
                : null,
            (0, l.jsx)(m.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        ]
    });
}
