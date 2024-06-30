n.d(t, {
    Ll: function () {
        return ep;
    },
    St: function () {
        return es;
    },
    WT: function () {
        return er;
    },
    jL: function () {
        return eh;
    },
    wG: function () {
        return ed;
    },
    yR: function () {
        return ei;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(512722), o = n.n(r);
n(699581);
var c = n(442837), u = n(704215), d = n(692547), h = n(481060), p = n(493683), m = n(475179), _ = n(287734), f = n(872810), E = n(607070), C = n(220779), g = n(201133), I = n(605236), x = n(543241), T = n(318374), N = n(258609), v = n(810568), S = n(774073), Z = n(382182), A = n(871118), M = n(359110), b = n(171368), R = n(12168), j = n(592125), L = n(430824), P = n(496675), O = n(699516), y = n(9156), D = n(979651), k = n(938475), U = n(346656), w = n(409216), B = n(368666), H = n(626135), G = n(768581), V = n(5192), F = n(26033), W = n(192918), z = n(22211), Y = n(571243), K = n(69259), q = n(206295), X = n(111386), Q = n(43205), J = n(469153), $ = n(206583), ee = n(981631), et = n(689938), en = n(208899);
function ei(e) {
    let {children: t} = e, n = a.useRef(null);
    return (0, h.useFocusLock)(n), (0, i.jsx)('div', {
        className: en.popout,
        ref: n,
        children: t
    });
}
function ea(e) {
    let {
            children: t,
            backgroundImgSrc: n,
            className: a,
            style: l = {}
        } = e, {
            primaryColor: r,
            secondaryColor: o
        } = (0, q.Z)(n);
    return (0, i.jsx)('div', {
        'data-disable-adaptive-theme': !0,
        className: s()(en.hero, 'theme-'.concat(ee.BRd.DARK), a),
        style: {
            background: 'linear-gradient(45deg, '.concat(r, ', ').concat(o, ')'),
            ...l
        },
        children: t
    });
}
let el = a.createContext(null);
function es(e) {
    let {children: t} = e, n = a.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: en.interactionsContainerHeader,
                ref: e => n.current = e
            }),
            (0, i.jsx)('div', {
                className: en.interactionsContainer,
                children: (0, i.jsx)(el.Provider, {
                    value: n.current,
                    children: t
                })
            })
        ]
    });
}
function er(e) {
    let {
            channel: t,
            user: n,
            generateReactionImage: l,
            reactionImageAltText: s,
            closePopout: r,
            entry: _,
            requestId: f,
            buttons: E = [],
            header: x
        } = e, [T, N] = a.useState(!1), [v, S] = a.useState(null), Z = (0, c.e7)([P.Z], () => P.Z.can(ee.Plq.SEND_MESSAGES, t)), A = (0, Y.a)({ location: 'PopoutReactor' }), [b, R] = a.useState(!1), [D, B] = a.useState(!1), {
            voiceBar: G,
            joinVoiceButton: F
        } = function (e) {
            let {
                    channel: t,
                    entry: n,
                    requestId: l
                } = e, {
                    streamPreviewUrl: s,
                    channel: r
                } = (0, z.Z)(n), o = (0, c.e7)([L.Z], () => null != r ? L.Z.getGuild(r.guild_id) : void 0), u = (0, c.Wu)([k.ZP], () => null != r ? k.ZP.getVoiceStatesForChannel(r) : [], [r]), p = a.useMemo(() => {
                    for (let e of u) {
                        let t = j.Z.getDMFromUserId(e.user.id), n = null != t && y.ZP.isChannelMuted(null, t), i = O.Z.isBlocked(e.user.id);
                        if (n || i)
                            return !0;
                    }
                    return !1;
                }, [u]);
            if (null == r || null == o)
                return {
                    voiceBar: void 0,
                    joinVoiceButton: void 0
                };
            let _ = null != s, f = () => {
                    m.Z.updateChatOpen(r.id, !0), (0, M.Kh)(r.id), (0, K.L)($.xP.VOICE_CHANNEL_PREVIEWED, {
                        entry: n,
                        channelId: t.id,
                        guildId: t.guild_id,
                        requestId: l,
                        destinationChannelId: r.id,
                        destinationGuildId: r.guild_id
                    });
                }, E = p ? et.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : et.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL, C = e => {
                    let {children: t} = e;
                    return (0, i.jsx)(h.Tooltip, {
                        'aria-label': E,
                        text: (0, i.jsxs)(i.Fragment, {
                            children: [
                                p && (0, i.jsx)(h.WarningIcon, {
                                    size: 'custom',
                                    width: 13,
                                    height: 13,
                                    className: en.popoutBlockedWarningIcon
                                }),
                                E
                            ]
                        }),
                        shouldShow: !0,
                        children: t
                    }, 'voice-preview');
                }, g = (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: en.voiceChannelPopoutReactorHeader,
                            children: [
                                (0, i.jsx)(C, {
                                    children: e => (0, i.jsxs)(h.Clickable, {
                                        ...e,
                                        'aria-label': et.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                                        onClick: f,
                                        className: en.voiceChannelPopoutReactorChannel,
                                        children: [
                                            (0, i.jsx)(U.Z, {
                                                guild: o,
                                                size: U.Z.Sizes.SMOL,
                                                className: en.voiceChannelGuildIcon,
                                                active: !0
                                            }),
                                            (0, i.jsx)(h.ChevronSmallRightIcon, {
                                                size: 'xxs',
                                                color: d.Z.colors.INTERACTIVE_NORMAL
                                            }),
                                            (0, i.jsx)(h.VoiceNormalIcon, {
                                                size: 'xs',
                                                color: d.Z.colors.TEXT_NORMAL
                                            }),
                                            (0, i.jsx)(h.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-normal',
                                                className: en.voiceChannelName,
                                                children: r.name
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(w.Z, {
                                    guildId: o.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, t) => (0, i.jsx)(h.Avatar, {
                                        src: e.user.getAvatarURL(o.id, 16),
                                        size: h.AvatarSizes.SIZE_16,
                                        'aria-label': 'avatar',
                                        className: t
                                    }),
                                    renderMoreUsers: e => (0, i.jsx)('div', {
                                        className: en.voiceChannelAdditionalParticipants,
                                        children: (0, i.jsx)(h.Text, {
                                            variant: 'text-xxs/semibold',
                                            color: 'text-normal',
                                            children: e
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: en.primaryActionPopoutDivider })
                    ]
                });
            return {
                voiceBar: g,
                joinVoiceButton: (0, i.jsx)(C, {
                    children: e => (0, i.jsx)(ep, {
                        ...e,
                        color: h.Button.Colors.GREEN,
                        onClick: f,
                        IconComponent: _ ? h.ScreenIcon : h.VoiceNormalIcon,
                        children: et.Z.Messages.PREVIEW
                    })
                })
            };
        }({
            channel: t,
            entry: _,
            requestId: f
        }), W = null != F && 0 === E.length ? [F] : E, q = W.length > 0, Q = W.length >= 2, [ei, ea] = a.useState(!q), el = '#'.concat(t.name), es = V.ZP.getName(t.guild_id, t.id, n), er = T ? et.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER : et.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL, ec = async e => {
            if (null != e) {
                if (H.default.track(ee.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: $.Kd.GUILD_MEMBER_LIST,
                        channel_id: t.id,
                        guild_id: t.guild_id
                    }), A) {
                    let a;
                    if ((0, I.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), R(!0), B(!1), T)
                        a = t;
                    else {
                        var i;
                        let e = await p.Z.getOrEnsurePrivateChannel(n.id);
                        a = null !== (i = j.Z.getChannel(e)) && void 0 !== i ? i : null;
                    }
                    return o()(null != a, 'Send channel must be defined'), ed({
                        reply: ':'.concat(e.name, ':'),
                        sendToChannel: a,
                        onComplete: () => {
                            B(!0), setTimeout(() => {
                                R(!1), r();
                            }, 600);
                        },
                        interactionType: $.xP.REACTION_EMOJI_REACT_SENT
                    });
                }
                ea(!0), null != v && (v.insertEmoji(e, !1, !1), v.focus());
            }
        }, eu = async e => {
            let i;
            if (A && (0, I.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), T)
                i = t;
            else {
                let e = await p.Z.openPrivateChannel(n.id, !1, !1), t = j.Z.getChannel(e);
                o()(null != t, 'DM channel must be defined'), i = t;
            }
            let a = i.type === ee.d4z.DM ? $.xP.DM_REACTION_MESSAGE_SENT : $.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return ed({
                reply: e,
                sendToChannel: i,
                onComplete: r,
                interactionType: a
            });
        }, ed = async e => {
            var n;
            let {
                reply: i,
                sendToChannel: a,
                onComplete: r,
                interactionType: c
            } = e;
            let u = await (n = l, async function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                    t[i] = arguments[i];
                try {
                    return await n(...t);
                } catch (e) {
                    throw e;
                }
            })(a.id);
            o()(null != u, 'Reaction image must be defined'), await (0, g.B)({
                file: u,
                channel: a,
                altText: s,
                reply: i
            }), (0, K.L)(c, {
                entry: _,
                channelId: t.id,
                guildId: t.guild_id,
                requestId: f,
                destinationChannelId: a.id,
                destinationGuildId: a.guild_id
            }), null == r || r();
        }, eh = null != x ? x : null != G ? G : void 0;
    return (0, i.jsxs)('div', {
        style: { pointerEvents: b ? 'none' : 'all' },
        children: [
            (0, i.jsx)(J.Z, {
                sent: D,
                shown: b,
                className: en.toastContainer
            }),
            null != eh ? eh : A ? (0, i.jsx)(X.Z, {
                children: (0, i.jsxs)('div', {
                    className: en.emojiHotrailShareToChannel,
                    children: [
                        (0, i.jsx)(eo, {
                            channel: t,
                            onClickSuggestion: ec
                        }),
                        (0, i.jsx)(C.dE, { onSelectEmoji: ec })
                    ]
                })
            }) : (0, i.jsx)('div', {
                className: en.emojiHotrailShareToChannel,
                children: (0, i.jsx)(eo, {
                    channel: t,
                    onClickSuggestion: ec
                })
            }),
            (0, i.jsxs)('div', {
                className: ei ? en.inputContainerShareToChannel : en.hiddenButRenderedInputField,
                children: [
                    q && (0, i.jsx)(h.Clickable, {
                        onClick: () => ea(!1),
                        className: en.primaryActionPopoutMessageCloseIcon,
                        children: (0, i.jsx)(h.CloseSmallIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: d.Z.colors.ICON_PRIMARY
                        })
                    }),
                    (0, i.jsx)(C.A7, {
                        placeholder: et.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: T ? el : '@'.concat(es) }),
                        onEnter: eu,
                        setEditorRef: e => S(e),
                        channel: T ? t : void 0,
                        showEmojiButton: null != eh,
                        renderAttachButton: Z ? () => (0, i.jsx)(h.Tooltip, {
                            text: er,
                            children: e => (0, i.jsx)(h.Clickable, {
                                ...e,
                                className: en.shareToChannelButton,
                                onClick: () => N(e => !e),
                                children: T ? (0, i.jsx)(h.TextIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20
                                }) : (0, i.jsx)(h.AtIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20
                                })
                            })
                        }) : void 0
                    })
                ]
            }),
            !1 === ei && (0, i.jsxs)('div', {
                className: en.primaryActionPopoutActionButtons,
                children: [
                    (0, i.jsxs)(h.Button, {
                        className: en.secondaryButton,
                        color: h.Button.Colors.CUSTOM,
                        onClick: () => ea(!0),
                        innerClassName: en.iconButton,
                        size: Q ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
                        children: [
                            (0, i.jsx)(h.ChatIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                colorClass: en.secondaryText
                            }),
                            !Q && (0, i.jsx)(h.Text, {
                                variant: 'text-md/semibold',
                                className: en.secondaryText,
                                children: et.Z.Messages.USER_POPOUT_MESSAGE
                            })
                        ]
                    }, 'toggleMessageMode'),
                    W
                ]
            })
        ]
    });
}
let eo = e => {
    let {
            channel: t,
            onClickSuggestion: n
        } = e, [l, s] = a.useState(!1);
    a.useEffect(() => {
        s(!0);
    }, []);
    let r = !!E.Z.keyboardModeEnabled && !l, o = (0, x.wC)(t.guild_id).slice(0, 5).map(e => null == e.id ? {
            emoji: e,
            url: e.url
        } : {
            emoji: e,
            url: (0, G.gT)({
                id: e.id,
                animated: e.animated,
                size: 58
            })
        });
    return (0, i.jsx)(i.Fragment, {
        children: o.map(e => {
            let {
                emoji: t,
                url: a
            } = e;
            return null != a ? (0, i.jsx)('div', {
                children: (0, i.jsx)(h.TooltipContainer, {
                    text: et.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
                    position: 'top',
                    'aria-label': et.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
                    color: h.Tooltip.Colors.PRIMARY,
                    shouldShow: !r && void 0,
                    children: (0, i.jsx)(R.u, {
                        emoji: t,
                        isDisabled: !l,
                        onClick: () => n(t),
                        className: en.emoji
                    })
                })
            }, t.name) : null;
        })
    });
};
function ec(e) {
    let {
            channel: t,
            userDescription: n,
            headerIcons: a,
            entry: l
        } = e, r = t.guild_id, {
            displayParticipants: o,
            participant1: c,
            participant2: u,
            numOtherParticipants: d
        } = (0, W.Z)(l, 3), p = [
            c,
            u
        ];
    return (0, i.jsxs)('div', {
        className: en.popoutContentHeader,
        children: [
            (0, i.jsxs)('div', {
                className: en.popoutUserContainer,
                children: [
                    (0, i.jsx)(T.Z, {
                        maxUsers: 3,
                        users: o,
                        size: h.AvatarSizes.SIZE_24,
                        avatarClassName: en.popoutStackedAvatar,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0
                    }),
                    (0, i.jsx)(h.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, i.jsx)(h.Heading, {
                        variant: 'heading-sm/normal',
                        className: en.popoutTextSecondary,
                        children: n.format({
                            user1: V.ZP.getName(r, t.id, p[0]),
                            user2: V.ZP.getName(r, t.id, p[1]),
                            countOthers: d,
                            nameHook: (e, t) => (0, i.jsx)(h.Clickable, {
                                tag: 'span',
                                onClick: () => (0, b.openUserProfileModal)({ userId: p[parseInt(t)].id }),
                                className: en.maybeClickable,
                                children: (0, i.jsx)(h.Text, {
                                    variant: 'text-sm/medium',
                                    className: s()(en.popoutUsername, en.popoutTextPrimary),
                                    children: e
                                }, t)
                            })
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: en.popoutHeaderIcons,
                children: a
            })
        ]
    });
}
function eu(e) {
    let {
        children: t,
        onClick: n
    } = e;
    return null == n ? (0, i.jsx)(i.Fragment, { children: t }) : (0, i.jsx)(h.Clickable, {
        className: en.maybeClickable,
        onClick: n,
        children: t
    });
}
function ed(e) {
    var t;
    let {
            thumbnailSrc: a,
            thumbnailFallbackSrc: l,
            thumbnailTitle: s,
            title: r,
            subtitle: o,
            badges: c,
            children: u,
            onClickThumbnail: d,
            onClickTitle: p,
            onClickSubtitle: m,
            ..._
        } = e, {entry: f} = _, E = (0, F.d)(f), C = (0, S.ZP)({
            location: 'ContentPopout',
            applicationId: E ? null === (t = f.extra) || void 0 === t ? void 0 : t.application_id : void 0
        }) && E ? () => {
            (0, h.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    n.e('7613'),
                    n.e('55799')
                ]).then(n.bind(n, 644941));
                return t => (0, i.jsx)(e, {
                    applicationId: f.extra.application_id,
                    source: v.m1.ActivityCard,
                    sourceUserId: f.author_id,
                    ...t
                });
            });
        } : void 0;
    return (0, i.jsxs)(ea, {
        backgroundImgSrc: a,
        children: [
            (0, i.jsx)(ec, { ..._ }),
            (0, i.jsxs)('div', {
                className: en.popoutContentBody,
                children: [
                    (0, i.jsx)('div', {
                        className: en.popoutThumbnailContainer,
                        children: (0, i.jsx)(eu, {
                            onClick: null != d ? d : C,
                            children: (0, i.jsx)(Q.f, {
                                size: 72,
                                alt: s,
                                src: a,
                                fallbackSrc: l,
                                className: en.contentImage
                            })
                        })
                    }),
                    (0, i.jsx)(h.Spacer, {
                        size: 16,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(eu, {
                                onClick: null != p ? p : C,
                                children: (0, i.jsx)(h.Heading, {
                                    variant: 'heading-md/medium',
                                    className: en.popoutTextPrimary,
                                    lineClamp: 3,
                                    children: r
                                })
                            }),
                            null != o ? (0, i.jsx)(eu, {
                                onClick: null != m ? m : C,
                                children: (0, i.jsx)(h.Text, {
                                    variant: 'text-md/normal',
                                    className: en.popoutTextSecondary,
                                    children: o
                                })
                            }) : null,
                            (0, i.jsx)(h.Spacer, { size: 8 }),
                            c
                        ]
                    })
                ]
            }),
            u
        ]
    });
}
function eh(e) {
    let {
            title: t,
            badges: n,
            stream: l,
            ...s
        } = e, r = (0, c.e7)([j.Z], () => j.Z.getChannel(null == l ? void 0 : l.channelId)), [o] = a.useMemo(() => (0, Z.p9)(r, D.Z, L.Z, P.Z, N.Z), [r]);
    return null == l ? null : (0, i.jsxs)(ea, {
        className: en.streamingPopoutHero,
        children: [
            (0, i.jsx)(ec, {
                ...s,
                headerIcons: (0, i.jsx)(B.ZP, { size: B.ZP.Sizes.SMALL })
            }),
            (0, i.jsx)(h.Spacer, { size: 16 }),
            (0, i.jsx)(eu, {
                onClick: o ? () => {
                    _.default.selectVoiceChannel(l.channelId), (0, f.iV)(l);
                } : void 0,
                children: (0, i.jsxs)('div', {
                    style: { position: 'relative' },
                    children: [
                        (0, i.jsx)(A.Z, {
                            className: en.streamingPopoutHero,
                            stream: l
                        }),
                        o && (0, i.jsx)('div', {
                            className: en.streamCTA,
                            children: (0, i.jsx)(h.Text, {
                                variant: 'text-md/normal',
                                children: et.Z.Messages.WATCH_STREAM
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(h.Spacer, { size: 16 }),
            (0, i.jsx)(h.Heading, {
                variant: 'heading-md/semibold',
                className: en.popoutTextPrimary,
                lineClamp: 3,
                children: t
            }),
            (0, i.jsx)(h.Spacer, { size: 8 }),
            n
        ]
    });
}
function ep(e) {
    let {
        IconComponent: t,
        children: n,
        className: a,
        ...l
    } = e;
    return (0, i.jsxs)(h.Button, {
        ...l,
        className: s()(a, en.primaryButton),
        innerClassName: null != t ? en.iconButton : void 0,
        size: h.Button.Sizes.LARGE,
        children: [
            null != t ? (0, i.jsx)(t, {
                size: 'custom',
                width: 20,
                height: 20,
                color: d.Z.colors.WHITE
            }) : null,
            (0, i.jsx)(h.Text, {
                variant: 'text-md/semibold',
                color: 'always-white',
                children: n
            })
        ]
    });
}
