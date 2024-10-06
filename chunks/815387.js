n(411104);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(239091),
    o = n(904245),
    c = n(287734),
    d = n(872810),
    u = n(911969),
    _ = n(376484),
    E = n(362604),
    I = n(981772),
    m = n(710845),
    T = n(825829),
    N = n(623624),
    h = n(533694),
    C = n(182180),
    p = n(924301),
    f = n(225890),
    g = n(434404),
    A = n(507435),
    S = n(504733),
    M = n(563959),
    x = n(703656),
    O = n(471253),
    R = n(565799),
    v = n(590415),
    L = n(911560),
    Z = n(488131),
    P = n(814820),
    D = n(314897),
    b = n(523746),
    j = n(592125),
    U = n(430824),
    y = n(496675),
    B = n(158776),
    k = n(944486),
    G = n(594174),
    F = n(979651),
    w = n(585483),
    V = n(5192),
    H = n(960048),
    Y = n(709054),
    W = n(937889),
    K = n(15642),
    z = n(930282),
    X = n(818570),
    Q = n(942951),
    J = n(9423),
    q = n(789267),
    $ = n(262),
    ee = n(303135),
    et = n(673052),
    en = n(385063),
    ei = n(253118),
    ea = n(54817),
    es = n(502115),
    el = n(27103),
    er = n(396252),
    eo = n(522860),
    ec = n(600397),
    ed = n(582298),
    eu = n(73352),
    e_ = n(507962),
    eE = n(857640),
    eI = n(614972),
    em = n(701181),
    eT = n(29338),
    eN = n(461135),
    eh = n(296571),
    eC = n(587737),
    ep = n(482239),
    ef = n(328749),
    eg = n(4305),
    eA = n(910548),
    eS = n(981631),
    eM = n(70722),
    ex = n(689938),
    eO = n(437814);
function eR(e) {
    let { message: t, channel: n, compact: l } = e,
        { author: r } = t,
        { guild_id: o } = n,
        c = t.getChannelId(),
        d = (0, s.e7)([U.Z], () => U.Z.getGuild(o), [o]),
        u = a.useCallback(() => {
            if (null != d)
                (0, N.f)({
                    guildId: d.id,
                    location: {
                        section: eS.jXE.CHANNEL_TEXT_AREA,
                        object: eS.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [d]),
        _ = (0, Q.l)({
            user: r,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, i.jsx)(eA.ZP, {
        message: t,
        compact: l,
        guild: d,
        usernameHook: _,
        onClickMessage: u
    });
}
function ev(e) {
    let { message: t, compact: n, channel: a } = e,
        s = (0, Q.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(ea.Z, {
        message: t,
        compact: n,
        usernameHook: s
    });
}
let eL = Object.freeze({
    [eS.uaV.DEFAULT]: void 0,
    [eS.uaV.REPLY]: void 0,
    [eS.uaV.CHAT_INPUT_COMMAND]: void 0,
    [eS.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [eS.uaV.RECIPIENT_ADD]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            { author: l } = t,
            r = t.getChannelId(),
            o = (0, s.e7)([G.default], () => G.default.getUser(t.mentions[0]), [t]),
            c = V.ZP.getName(null, r, o),
            d = (0, Q.l)({
                user: l,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            }),
            u = (0, Q.l)({
                user: o,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread()
            ? (0, i.jsx)(eC.Z, {
                  message: t,
                  channel: n,
                  compact: a,
                  targetUser: o,
                  actorUsernameHook: d,
                  targetUsernameHook: u
              })
            : (0, i.jsx)(eu.Z, {
                  message: t,
                  compact: a,
                  otherUsername: c,
                  usernameHook: d,
                  otherUsernameHook: u
              });
    },
    [eS.uaV.RECIPIENT_REMOVE]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            { author: l } = t,
            r = t.getChannelId(),
            o = (0, s.e7)([G.default], () => G.default.getUser(t.mentions[0]), [t]),
            c = (0, Q.l)({
                user: l,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            }),
            d = (0, Q.l)({
                user: o,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread()
            ? (0, i.jsx)(ep.Z, {
                  message: t,
                  channel: n,
                  compact: a,
                  targetUser: o,
                  actorUsernameHook: c,
                  targetUsernameHook: d
              })
            : null != o && o.id !== l.id
              ? (0, i.jsx)(e_.Z, {
                    message: t,
                    channel: n,
                    compact: a,
                    usernameHook: c,
                    otherUser: o,
                    otherUsernameHook: d
                })
              : (0, i.jsx)(e_.Z, {
                    message: t,
                    channel: n,
                    usernameHook: c
                });
    },
    [eS.uaV.CALL]: function (e) {
        let { message: t, compact: n, channel: l } = e,
            { id: r, author: o } = t,
            d = D.default.getId(),
            u = t.getChannelId(),
            _ = (0, s.e7)([b.Z], () => b.Z.isCallActive(u, r), [u, r]),
            E = (0, s.e7)([F.Z], () => F.Z.getVoiceState(eS.ME, d)),
            I = !_ && null != t.call && !t.call.participants.includes(d),
            m = _ && (null == E || E.channelId !== u),
            T = a.useCallback(() => c.default.selectVoiceChannel(u), [u]),
            N = (0, Q.l)({
                user: o,
                channelId: u,
                guildId: l.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(q.Z, {
            compact: n,
            message: t,
            missed: I,
            joinable: m,
            usernameHook: N,
            onClickJoinCall: T
        });
    },
    [eS.uaV.CHANNEL_NAME_CHANGE]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            l = t.getChannelId(),
            r = (0, Q.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(en.Z, {
            compact: n,
            message: t,
            usernameHook: r,
            isForumPost: a.isForumPost()
        });
    },
    [eS.uaV.CHANNEL_ICON_CHANGE]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            l = t.getChannelId(),
            r = (0, Q.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ee.Z, {
            compact: n,
            message: t,
            usernameHook: r
        });
    },
    [eS.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
        let { message: t, compact: n, channel: s } = e,
            { author: l } = t,
            r = t.getChannelId(),
            o = a.useCallback(() => {
                if (k.Z.getChannelId() !== r) {
                    let e = j.Z.getChannel(r);
                    null != e && (0, x.XU)(e.guild_id, e.id);
                }
                setTimeout(() => w.S.dispatch(eS.CkL.TOGGLE_CHANNEL_PINS), 0);
            }, [r]),
            c = (0, Q.l)({
                user: l,
                channelId: r,
                guildId: s.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ei.Z, {
            message: t,
            compact: n,
            usernameHook: c,
            onClickPins: __OVERLAY__ ? null : o
        });
    },
    [eS.uaV.USER_JOIN]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            l = t.getChannelId(),
            r = (0, Q.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eg.Z, {
                    message: t,
                    guildId: a.guild_id,
                    compact: n,
                    usernameHook: r
                }),
                (0, i.jsx)(P.f, {
                    channel: a,
                    message: t
                })
            ]
        });
    },
    [eS.uaV.GUILD_BOOST]: eR,
    [eS.uaV.GUILD_BOOST_TIER_1]: eR,
    [eS.uaV.GUILD_BOOST_TIER_2]: eR,
    [eS.uaV.GUILD_BOOST_TIER_3]: eR,
    [eS.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            { author: s } = t,
            l = t.getChannelId(),
            r = (0, Q.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)($.Z, {
            message: t,
            compact: n,
            usernameHook: r
        });
    },
    [eS.uaV.GUILD_STREAM]: function (e) {
        let { message: t, compact: n, channel: l } = e,
            {
                author: r,
                author: { id: o },
                messageReference: c
            } = t,
            u = t.getChannelId(),
            _ = (0, s.e7)([B.Z], () => B.Z.findActivity(o, (e) => e.type === eS.IIU.PLAYING), [o]),
            E = (0, s.e7)([j.Z], () => (null != c ? j.Z.getChannel(c.channel_id) : null), [c]),
            I = null == c ? void 0 : c.guild_id,
            m = (0, Q.l)({
                user: r,
                channelId: u,
                guildId: l.guild_id,
                messageId: t.id
            }),
            T = a.useCallback(() => {
                if (null != E && null != I)
                    (0, d.iV)({
                        streamType: eM.lo.GUILD,
                        ownerId: o,
                        channelId: E.id,
                        guildId: I
                    });
            }, [o, E, I]);
        return null != c && null != E && null != c.guild_id
            ? (0, i.jsx)(eo.Z, {
                  message: t,
                  compact: n,
                  channel: E,
                  playingActivity: _,
                  onJoinStream: T,
                  usernameHook: m
              })
            : null;
    },
    [eS.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
        let { message: t, compact: n } = e,
            a = t.getChannelId(),
            l = (0, s.e7)([j.Z], () => j.Z.getChannel(a), [a]),
            r = null != l ? l.getGuildId() : null;
        return (0, i.jsx)(es.FJ, {
            message: t,
            compact: n,
            onClick: () => {
                null != r && g.Z.open(r, eS.pNK.DISCOVERY);
            }
        });
    },
    [eS.uaV.GUILD_DISCOVERY_REQUALIFIED]: es.xe,
    [eS.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: es.HL,
    [eS.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: es.Yc,
    [eS.uaV.THREAD_CREATED]: function (e) {
        let { message: t, channel: s, compact: o } = e,
            c = (0, Q.l)({
                user: t.author,
                channelId: t.channel_id,
                guildId: s.guild_id,
                messageId: t.id
            }),
            d = a.useCallback(
                async (e) => {
                    var n;
                    let i = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
                    if (null != i) {
                        await L.Z.loadThread(i);
                        let t = j.Z.getChannel(i);
                        null != t && (0, Z.ok)(t, e.shiftKey);
                    }
                },
                [t]
            ),
            u = a.useCallback(() => {
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('91315'), n.e('67471')]).then(n.bind(n, 223901));
                    return (t) =>
                        (0, i.jsx)(e, {
                            channel: s,
                            ...t
                        });
                });
            }, [s]),
            _ = a.useCallback(
                (e) => {
                    var a;
                    let s = j.Z.getChannel(null === (a = t.messageReference) || void 0 === a ? void 0 : a.channel_id);
                    null != s &&
                        (0, r.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('39285'), n.e('48800'), n.e('13154')]).then(n.bind(n, 422200));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: s
                                });
                        });
                },
                [t]
            );
        return (0, i.jsx)(eh.Z, {
            message: t,
            compact: o,
            usernameHook: c,
            onClickThread: d,
            onClickViewThreads: u,
            onContextMenuThread: _
        });
    },
    [eS.uaV.THREAD_STARTER_MESSAGE]: ef.Z,
    [eS.uaV.GUILD_INVITE_REMINDER]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            l = (0, s.e7)([G.default], () => G.default.getCurrentUser()),
            r = (0, s.e7)([U.Z], () => {
                var e, t;
                return null !== (t = null === (e = U.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(l)) && void 0 !== t && t;
            });
        return (0, i.jsx)(ed.Z, {
            message: t,
            compact: a,
            isOwner: r,
            channel: n
        });
    },
    [eS.uaV.AUTO_MODERATION_ACTION]: function (e) {
        let { message: t, compact: n, channel: a } = e;
        return (0, T.nY)(t)
            ? (0, i.jsx)(J.Z, {
                  message: t,
                  compact: n,
                  channel: a
              })
            : null;
    },
    [eS.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ev,
    [eS.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ev,
    [eS.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            s = (0, Q.l)({
                user: t.author,
                channelId: a.id,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(er.Z, {
            message: t,
            compact: n,
            channel: a,
            usernameHook: s
        });
    },
    [eS.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
        let { message: t, compact: n, channel: a } = e,
            s = (0, Q.l)({
                user: t.author,
                channelId: a.id,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(el.Z, {
            message: t,
            compact: n,
            channel: a,
            usernameHook: s
        });
    },
    [eS.uaV.ROLE_SUBSCRIPTION_PURCHASE]: C.Z,
    [eS.uaV.PURCHASE_NOTIFICATION]: function (e) {
        var t;
        let { message: n, channel: a, compact: s } = e;
        return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === u.Eh.GUILD_PRODUCT
            ? (0, i.jsx)(h.Z, {
                  message: n,
                  channel: a,
                  compact: s
              })
            : null;
    },
    [eS.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eS.uaV.STAGE_START]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            l = (0, Q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            }),
            r = (0, s.e7)([p.ZP], () => p.ZP.getActiveEventByChannel(n.id), [n.id]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eT.Z, {
                    message: t,
                    compact: a,
                    usernameHook: l
                }),
                null != r && r.name === t.content ? (0, i.jsx)(f.Z, { code: ''.concat(n.guild_id, '-').concat(r.id) }) : null
            ]
        });
    },
    [eS.uaV.STAGE_END]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            s = (0, Q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(eE.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [eS.uaV.STAGE_SPEAKER]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            s = (0, Q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(em.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [eS.uaV.STAGE_RAISE_HAND]: function (e) {
        var t, n;
        let { message: a, channel: r, compact: c } = e,
            d = (0, Q.l)({
                user: a.author,
                channelId: r.id,
                guildId: r.guild_id,
                messageId: a.id
            }),
            u = (0, s.e7)([y.Z], () => y.Z.can(eS.Plq.MUTE_MEMBERS, r)),
            _ = (0, s.e7)([R.Z], () => R.Z.getParticipant(r.id, a.author.id)),
            E = new Date(Y.default.extractTimestamp(a.id)).toISOString() === new Date(null !== (n = null == _ ? void 0 : null === (t = _.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(),
            I = u && (null == _ ? void 0 : _.rtsState) === v.xO.REQUESTED_TO_SPEAK && E;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eI.Z, {
                    message: a,
                    compact: c,
                    usernameHook: d
                }),
                I
                    ? (0, i.jsxs)(l.Button, {
                          wrapperClassName: eO.inviteToSpeakButtonWrapper,
                          innerClassName: eO.inviteToSpeakButtonInner,
                          look: l.Button.Looks.FILLED,
                          color: l.Button.Colors.PRIMARY,
                          onClick: () => {
                              (0, O.DT)(r, a.author.id, !1), o.Z.deleteMessage(r.id, a.id, !0);
                          },
                          children: [
                              (0, i.jsx)(l.MicrophoneArrowRightIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  height: 20,
                                  width: 20
                              }),
                              ex.Z.Messages.REQUEST_TO_SPEAK_ACCEPT
                          ]
                      })
                    : null
            ]
        });
    },
    [eS.uaV.STAGE_TOPIC]: function (e) {
        let { message: t, channel: n, compact: a } = e,
            s = (0, Q.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(eN.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [eS.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: S.Z,
    [eS.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: M.P,
    [eS.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: M.e,
    [eS.uaV.PREMIUM_REFERRAL]: void 0,
    [eS.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(E.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [eS.uaV.CUSTOM_GIFT]: void 0,
    [eS.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(_.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [eS.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [eS.uaV.POLL_RESULT]: A.Z,
    [eS.uaV.CHANGELOG]: void 0,
    [eS.uaV.NITRO_NOTIFICATION]: function (e) {
        let { message: t, channel: n } = e;
        return (0, i.jsx)(X.Z, {
            message: t,
            channel: n
        });
    },
    [eS.uaV.CHANNEL_LINKED_TO_LOBBY]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(et.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [eS.uaV.GIFTING_PROMPT]: function (e) {
        let { message: t, channel: n } = e,
            a = t.giftingPrompt,
            l = (0, s.e7)([G.default], () => G.default.getUser(null == a ? void 0 : a.recipientUserId));
        return null == a || null == l
            ? null
            : (0, i.jsx)(K.Z, {
                  giftIntentType: a.giftIntentType,
                  recipientUser: l,
                  channel: n,
                  showSecondaryCta: a.showSecondaryCta
              });
    },
    [eS.uaV.IN_GAME_MESSAGE_NUX]: function (e) {
        let { message: t, channel: n, compact: a } = e;
        return (0, i.jsx)(ec.Z, {
            message: t,
            channel: n,
            author: t.author,
            compact: a
        });
    },
    [eS.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: I.Cn,
    [eS.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: I.Ue,
    [eS.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: I.R6
});
t.Z = a.memo(function (e) {
    let { message: t, channel: n, compact: a, disableInteraction: s } = e,
        { type: l } = t,
        r = eL[l];
    if (null == r) {
        var o;
        return (o = Error('unknown message type '.concat(t.type))), H.Z.captureException(o), new m.Z('SystemMessage').error('', o), null;
    }
    return (0, i.jsx)(z.ZP, {
        message: t,
        content: (0, W.ZP)(t).content,
        children: (0, i.jsx)(r, {
            message: t,
            channel: n,
            compact: a,
            disableInteraction: s
        })
    });
});
