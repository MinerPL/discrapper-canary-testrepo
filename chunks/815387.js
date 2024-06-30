n(411104);
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(239091), o = n(904245), c = n(287734), d = n(872810), u = n(911969), _ = n(376484), E = n(362604), m = n(710845), I = n(825829), T = n(623624), h = n(533694), N = n(182180), f = n(924301), p = n(225890), C = n(434404), g = n(507435), S = n(504733), A = n(563959), x = n(703656), O = n(471253), R = n(565799), M = n(590415), v = n(911560), L = n(488131), Z = n(814820), P = n(314897), b = n(523746), D = n(592125), j = n(430824), U = n(496675), y = n(158776), B = n(944486), k = n(594174), G = n(979651), F = n(113039), w = n(755090), V = n(136036), H = n(676751), Y = n(662147), W = n(900316), z = n(493829), K = n(65667), Q = n(36664), q = n(645092), X = n(464139), J = n(497481), $ = n(705116), ee = n(808641), et = n(318175), en = n(75601), ei = n(595162), ea = n(407818), es = n(24971), el = n(314061), er = n(501217), eo = n(908648), ec = n(774200), ed = n(690249), eu = n(658975), e_ = n(147507), eE = n(585483), em = n(5192), eI = n(960048), eT = n(709054), eh = n(937889), eN = n(818570), ef = n(942951), ep = n(981631), eC = n(70722), eg = n(689938), eS = n(518171);
function eA(e) {
    let {
            message: t,
            channel: n,
            compact: l
        } = e, {author: r} = t, {guild_id: o} = n, c = t.getChannelId(), d = (0, s.e7)([j.Z], () => j.Z.getGuild(o), [o]), u = a.useCallback(() => {
            if (null != d)
                (0, T.f)({
                    guildId: d.id,
                    location: {
                        section: ep.jXE.CHANNEL_TEXT_AREA,
                        object: ep.qAy.BOOST_ANNOUNCEMENT_UPSELL
                    }
                });
        }, [d]), _ = (0, ef.l)({
            user: r,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0
        });
    return (0, i.jsx)(e_.ZP, {
        message: t,
        compact: l,
        guild: d,
        usernameHook: _,
        onClickMessage: u
    });
}
function ex(e) {
    let {
            message: t,
            compact: n,
            channel: a
        } = e, s = (0, ef.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(K.Z, {
        message: t,
        compact: n,
        usernameHook: s
    });
}
let eO = Object.freeze({
    [ep.uaV.DEFAULT]: void 0,
    [ep.uaV.REPLY]: void 0,
    [ep.uaV.CHAT_INPUT_COMMAND]: void 0,
    [ep.uaV.CONTEXT_MENU_COMMAND]: void 0,
    [ep.uaV.RECIPIENT_ADD]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, {author: l} = t, r = t.getChannelId(), o = (0, s.e7)([k.default], () => k.default.getUser(t.mentions[0]), [t]), c = em.ZP.getName(null, r, o), d = (0, ef.l)({
                user: l,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            }), u = (0, ef.l)({
                user: o,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread() ? (0, i.jsx)(eo.Z, {
            message: t,
            channel: n,
            compact: a,
            targetUser: o,
            actorUsernameHook: d,
            targetUsernameHook: u
        }) : (0, i.jsx)(ee.Z, {
            message: t,
            compact: a,
            otherUsername: c,
            usernameHook: d,
            otherUsernameHook: u
        });
    },
    [ep.uaV.RECIPIENT_REMOVE]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, {author: l} = t, r = t.getChannelId(), o = (0, s.e7)([k.default], () => k.default.getUser(t.mentions[0]), [t]), c = (0, ef.l)({
                user: l,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            }), d = (0, ef.l)({
                user: o,
                channelId: r,
                guildId: n.guild_id,
                messageId: t.id
            });
        return n.isThread() ? (0, i.jsx)(ec.Z, {
            message: t,
            channel: n,
            compact: a,
            targetUser: o,
            actorUsernameHook: c,
            targetUsernameHook: d
        }) : null != o && o.id !== l.id ? (0, i.jsx)(et.Z, {
            message: t,
            channel: n,
            compact: a,
            usernameHook: c,
            otherUser: o,
            otherUsernameHook: d
        }) : (0, i.jsx)(et.Z, {
            message: t,
            channel: n,
            usernameHook: c
        });
    },
    [ep.uaV.CALL]: function (e) {
        let {
                message: t,
                compact: n,
                channel: l
            } = e, {
                id: r,
                author: o
            } = t, d = P.default.getId(), u = t.getChannelId(), _ = (0, s.e7)([b.Z], () => b.Z.isCallActive(u, r), [
                u,
                r
            ]), E = (0, s.e7)([G.Z], () => G.Z.getVoiceState(ep.ME, d)), m = !_ && null != t.call && !t.call.participants.includes(d), I = _ && (null == E || E.channelId !== u), T = a.useCallback(() => c.default.selectVoiceChannel(u), [u]), h = (0, ef.l)({
                user: o,
                channelId: u,
                guildId: l.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(V.Z, {
            compact: n,
            message: t,
            missed: m,
            joinable: I,
            usernameHook: h,
            onClickJoinCall: T
        });
    },
    [ep.uaV.CHANNEL_NAME_CHANGE]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, {author: s} = t, l = t.getChannelId(), r = (0, ef.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(W.Z, {
            compact: n,
            message: t,
            usernameHook: r,
            isForumPost: a.isForumPost()
        });
    },
    [ep.uaV.CHANNEL_ICON_CHANGE]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, {author: s} = t, l = t.getChannelId(), r = (0, ef.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(Y.Z, {
            compact: n,
            message: t,
            usernameHook: r
        });
    },
    [ep.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
        let {
                message: t,
                compact: n,
                channel: s
            } = e, {author: l} = t, r = t.getChannelId(), o = a.useCallback(() => {
                if (B.Z.getChannelId() !== r) {
                    let e = D.Z.getChannel(r);
                    null != e && (0, x.XU)(e.guild_id, e.id);
                }
                setTimeout(() => eE.S.dispatch(ep.CkL.TOGGLE_CHANNEL_PINS), 0);
            }, [r]), c = (0, ef.l)({
                user: l,
                channelId: r,
                guildId: s.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(z.Z, {
            message: t,
            compact: n,
            usernameHook: c,
            onClickPins: __OVERLAY__ ? null : o
        });
    },
    [ep.uaV.USER_JOIN]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, {author: s} = t, l = t.getChannelId(), r = (0, ef.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eu.Z, {
                    message: t,
                    guildId: a.guild_id,
                    compact: n,
                    usernameHook: r
                }),
                (0, i.jsx)(Z.f, {
                    channel: a,
                    message: t
                })
            ]
        });
    },
    [ep.uaV.GUILD_BOOST]: eA,
    [ep.uaV.GUILD_BOOST_TIER_1]: eA,
    [ep.uaV.GUILD_BOOST_TIER_2]: eA,
    [ep.uaV.GUILD_BOOST_TIER_3]: eA,
    [ep.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, {author: s} = t, l = t.getChannelId(), r = (0, ef.l)({
                user: s,
                channelId: l,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(H.Z, {
            message: t,
            compact: n,
            usernameHook: r
        });
    },
    [ep.uaV.GUILD_STREAM]: function (e) {
        let {
                message: t,
                compact: n,
                channel: l
            } = e, {
                author: r,
                author: {id: o},
                messageReference: c
            } = t, u = t.getChannelId(), _ = (0, s.e7)([y.Z], () => y.Z.findActivity(o, e => e.type === ep.IIU.PLAYING), [o]), E = (0, s.e7)([D.Z], () => null != c ? D.Z.getChannel(c.channel_id) : null, [c]), m = null == c ? void 0 : c.guild_id, I = (0, ef.l)({
                user: r,
                channelId: u,
                guildId: l.guild_id,
                messageId: t.id
            }), T = a.useCallback(() => {
                if (null != E && null != m)
                    (0, d.iV)({
                        streamType: eC.lo.GUILD,
                        ownerId: o,
                        channelId: E.id,
                        guildId: m
                    });
            }, [
                o,
                E,
                m
            ]);
        return null != c && null != E && null != c.guild_id ? (0, i.jsx)(J.Z, {
            message: t,
            compact: n,
            channel: E,
            playingActivity: _,
            onJoinStream: T,
            usernameHook: I
        }) : null;
    },
    [ep.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
        let {
                message: t,
                compact: n
            } = e, a = t.getChannelId(), l = (0, s.e7)([D.Z], () => D.Z.getChannel(a), [a]), r = null != l ? l.getGuildId() : null;
        return (0, i.jsx)(Q.IF, {
            message: t,
            compact: n,
            onClick: () => {
                null != r && C.Z.open(r, ep.pNK.DISCOVERY);
            }
        });
    },
    [ep.uaV.GUILD_DISCOVERY_REQUALIFIED]: Q.Ci,
    [ep.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: Q.s0,
    [ep.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: Q.k$,
    [ep.uaV.THREAD_CREATED]: function (e) {
        let {
                message: t,
                channel: s,
                compact: o
            } = e, c = (0, ef.l)({
                user: t.author,
                channelId: t.channel_id,
                guildId: s.guild_id,
                messageId: t.id
            }), d = a.useCallback(async e => {
                var n;
                let i = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
                if (null != i) {
                    await v.Z.loadThread(i);
                    let t = D.Z.getChannel(i);
                    null != t && (0, L.ok)(t, e.shiftKey);
                }
            }, [t]), u = a.useCallback(() => {
                (0, l.openModalLazy)(async () => {
                    let {default: e} = await Promise.all([
                        n.e('91315'),
                        n.e('32627')
                    ]).then(n.bind(n, 223901));
                    return t => (0, i.jsx)(e, {
                        channel: s,
                        ...t
                    });
                });
            }, [s]), _ = a.useCallback(e => {
                var a;
                let s = D.Z.getChannel(null === (a = t.messageReference) || void 0 === a ? void 0 : a.channel_id);
                null != s && (0, r.jW)(e, async () => {
                    let {default: e} = await Promise.all([
                        n.e('39285'),
                        n.e('48800'),
                        n.e('31288')
                    ]).then(n.bind(n, 422200));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        channel: s
                    });
                });
            }, [t]);
        return (0, i.jsx)(er.Z, {
            message: t,
            compact: o,
            usernameHook: c,
            onClickThread: d,
            onClickViewThreads: u,
            onContextMenuThread: _
        });
    },
    [ep.uaV.THREAD_STARTER_MESSAGE]: ed.Z,
    [ep.uaV.GUILD_INVITE_REMINDER]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, l = (0, s.e7)([k.default], () => k.default.getCurrentUser()), r = (0, s.e7)([j.Z], () => {
                var e, t;
                return null !== (t = null === (e = j.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(l)) && void 0 !== t && t;
            });
        return (0, i.jsx)($.Z, {
            message: t,
            compact: a,
            isOwner: r,
            channel: n
        });
    },
    [ep.uaV.AUTO_MODERATION_ACTION]: function (e) {
        let {
            message: t,
            compact: n,
            channel: a
        } = e;
        return (0, I.nY)(t) ? (0, i.jsx)(w.Z, {
            message: t,
            compact: n,
            channel: a
        }) : null;
    },
    [ep.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ex,
    [ep.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ex,
    [ep.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, s = (0, ef.l)({
                user: t.author,
                channelId: a.id,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(X.Z, {
            message: t,
            compact: n,
            channel: a,
            usernameHook: s
        });
    },
    [ep.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
        let {
                message: t,
                compact: n,
                channel: a
            } = e, s = (0, ef.l)({
                user: t.author,
                channelId: a.id,
                guildId: a.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(q.Z, {
            message: t,
            compact: n,
            channel: a,
            usernameHook: s
        });
    },
    [ep.uaV.ROLE_SUBSCRIPTION_PURCHASE]: N.Z,
    [ep.uaV.PURCHASE_NOTIFICATION]: function (e) {
        var t;
        let {
            message: n,
            channel: a,
            compact: s
        } = e;
        return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === u.Eh.GUILD_PRODUCT ? (0, i.jsx)(h.Z, {
            message: n,
            channel: a,
            compact: s
        }) : null;
    },
    [ep.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
    [ep.uaV.STAGE_START]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, l = (0, ef.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            }), r = (0, s.e7)([f.ZP], () => f.ZP.getActiveEventByChannel(n.id), [n.id]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(es.Z, {
                    message: t,
                    compact: a,
                    usernameHook: l
                }),
                null != r && r.name === t.content ? (0, i.jsx)(p.Z, { code: ''.concat(n.guild_id, '-').concat(r.id) }) : null
            ]
        });
    },
    [ep.uaV.STAGE_END]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, s = (0, ef.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(en.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [ep.uaV.STAGE_SPEAKER]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, s = (0, ef.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(ea.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [ep.uaV.STAGE_RAISE_HAND]: function (e) {
        var t, n;
        let {
                message: a,
                channel: r,
                compact: c
            } = e, d = (0, ef.l)({
                user: a.author,
                channelId: r.id,
                guildId: r.guild_id,
                messageId: a.id
            }), u = (0, s.e7)([U.Z], () => U.Z.can(ep.Plq.MUTE_MEMBERS, r)), _ = (0, s.e7)([R.Z], () => R.Z.getParticipant(r.id, a.author.id)), E = new Date(eT.default.extractTimestamp(a.id)).toISOString() === new Date(null !== (n = null == _ ? void 0 : null === (t = _.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(), m = u && (null == _ ? void 0 : _.rtsState) === M.xO.REQUESTED_TO_SPEAK && E;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ei.Z, {
                    message: a,
                    compact: c,
                    usernameHook: d
                }),
                m ? (0, i.jsxs)(l.Button, {
                    wrapperClassName: eS.inviteToSpeakButtonWrapper,
                    innerClassName: eS.inviteToSpeakButtonInner,
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
                        eg.Z.Messages.REQUEST_TO_SPEAK_ACCEPT
                    ]
                }) : null
            ]
        });
    },
    [ep.uaV.STAGE_TOPIC]: function (e) {
        let {
                message: t,
                channel: n,
                compact: a
            } = e, s = (0, ef.l)({
                user: t.author,
                channelId: n.id,
                guildId: n.guild_id,
                messageId: t.id
            });
        return (0, i.jsx)(el.Z, {
            message: t,
            compact: a,
            usernameHook: s
        });
    },
    [ep.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: S.Z,
    [ep.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: A.P,
    [ep.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: A.e,
    [ep.uaV.PREMIUM_REFERRAL]: void 0,
    [ep.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
        let {
            message: t,
            channel: n,
            compact: a
        } = e;
        return (0, i.jsx)(E.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [ep.uaV.CUSTOM_GIFT]: void 0,
    [ep.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
        let {
            message: t,
            channel: n,
            compact: a
        } = e;
        return (0, i.jsx)(_.Z, {
            message: t,
            channel: n,
            compact: a
        });
    },
    [ep.uaV.VOICE_HANGOUT_INVITE]: void 0,
    [ep.uaV.POLL_RESULT]: g.Z,
    [ep.uaV.CHANGELOG]: void 0,
    [ep.uaV.NITRO_NOTIFICATION]: function (e) {
        let {
            message: t,
            channel: n
        } = e;
        return (0, i.jsx)(eN.Z, {
            message: t,
            channel: n
        });
    }
});
t.Z = a.memo(function (e) {
    let {
            message: t,
            channel: n,
            compact: a,
            disableInteraction: s
        } = e, {type: l} = t, r = eO[l];
    if (null == r) {
        var o;
        return o = Error('unknown message type '.concat(t.type)), eI.Z.captureException(o), new m.Z('SystemMessage').error('', o), null;
    }
    return (0, i.jsx)(F.ZP, {
        message: t,
        content: (0, eh.ZP)(t).content,
        children: (0, i.jsx)(r, {
            message: t,
            channel: n,
            compact: a,
            disableInteraction: s
        })
    });
});
