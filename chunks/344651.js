n.d(t, {
    Z: function () {
        return F;
    }
}),
    n(653041),
    n(47120),
    n(789020),
    n(411104);
var r = n(392711),
    i = n.n(r);
n(724522);
var a = n(442837),
    s = n(570140),
    o = n(749210),
    l = n(821849),
    u = n(232567),
    c = n(864106),
    d = n(710845),
    _ = n(292419),
    E = n(566006),
    f = n(686478),
    h = n(952537),
    p = n(218543),
    m = n(48481),
    I = n(131704),
    T = n(209747),
    g = n(598077),
    S = n(592125),
    A = n(271383),
    N = n(819640),
    v = n(594174),
    O = n(979651),
    R = n(509545),
    C = n(78839),
    y = n(936101),
    D = n(868158),
    L = n(483012),
    b = n(955132);
let M = new d.Z('ConnectionStore'),
    P = new L.Z(
        b.Wb,
        (e, t) => {
            var n;
            e =
                null != e
                    ? e
                    : {
                          type: 'CHANNEL_UPDATES',
                          channels: []
                      };
            let r = (0, I.q_)(t),
                i = S.Z.getChannel(t.id),
                a =
                    null == i
                        ? void 0
                        : i.merge({
                              ...r,
                              recipients: i.recipients,
                              bitrate: null !== (n = r.bitrate) && void 0 !== n ? n : i.bitrate
                          });
            return e.channels.push(null != a ? a : r), e;
        },
        (e) => 'CHANNEL_UPDATE' !== e
    ),
    U = new L.Z(
        b.Wb,
        (e, t) => (
            (e =
                null == e
                    ? {
                          type: 'SOUNDBOARD_SOUNDS_RECEIVED',
                          updates: []
                      }
                    : e).updates.push({
                guildId: t.guild_id,
                sounds: t.soundboard_sounds.map((e) => ({
                    name: e.name,
                    soundId: e.sound_id,
                    emojiName: e.emoji_name,
                    emojiId: e.emoji_id,
                    userId: e.user_id,
                    volume: e.volume,
                    available: e.available,
                    guildId: t.guild_id
                }))
            }),
            e
        ),
        (e) => 'SOUNDBOARD_SOUNDS' !== e
    ),
    w = new L.Z(
        b.Wb,
        (e, t) => (
            (e =
                null != e
                    ? e
                    : {
                          type: 'GUILD_MEMBERS_CHUNK_BATCH',
                          chunks: []
                      }).chunks.push(t),
            e
        ),
        (e) => 'GUILD_MEMBERS_CHUNK' !== e
    ),
    x = new L.Z(
        b.Wb,
        (e, t) => (
            (e =
                null == e
                    ? {
                          type: 'PRESENCE_UPDATES',
                          updates: []
                      }
                    : e).updates.push(t),
            e
        ),
        (e) => 'PRESENCE_UPDATE' !== e && 'GUILD_MEMBERS_CHUNK' !== e
    ),
    G = {};
function k(e, t) {
    for (let n of e)
        G[n] = {
            preload: () => null,
            dispatch: t
        };
}
function B(e, t, n) {
    for (let r of e)
        G[r] = {
            preload: t,
            dispatch: n
        };
}
function F(e) {
    return G[e];
}
function V(e) {
    s.Z.dispatch(e).catch((t) =>
        b.Wb.resetSocketOnDispatchError({
            error: t,
            action: e.type
        })
    );
}
function H(e, t, n) {
    var r;
    let { roles: a, nick: s, avatar: o, avatar_decoration_data: l, flags: u, premium_since: d, pending: _, joined_at: E, communication_disabled_until: f, unusual_dm_activity_until: h } = n,
        p = A.ZP.getMember(e, t.id);
    if (!(null != p && p.nick === s && p.avatar === o && i().isEqual(p.roles, a) && (0, c.sr)(p.avatarDecoration, l)) || p.premiumSince !== d || p.isPending !== _ || p.joinedAt !== E || p.communicationDisabledUntil !== f || p.flags !== u || (null !== (r = p.unusualDMActivityUntil) && void 0 !== r ? r : null) !== (null != h ? h : null))
        V({
            type: 'GUILD_MEMBER_ADD',
            guildId: e,
            user: t,
            roles: a,
            nick: s,
            avatar: o,
            avatarDecoration: l,
            premiumSince: d,
            isPending: _,
            joinedAt: E,
            communicationDisabledUntil: f,
            unusualDMActivityUntil: h,
            flags: u
        });
}
function Z(e) {
    let { member: t, mentions: n, author: r, guild_id: i } = e;
    null != t && null != i && H(i, r, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != i) {
                    let { member: t } = e;
                    delete e.member, H(i, e, t);
                }
            });
}
function Y(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: e.activities,
        active: !!e.active,
        clientInfo: e.client_info,
        broadcast: e.broadcast
    }));
}
function j(e) {
    let { guildId: t, user: n, status: r, activities: i, clientStatus: a, broadcast: s } = e;
    x.add({
        guildId: t,
        user: n,
        status: r,
        clientStatus: a,
        activities: i,
        broadcast: s
    });
}
B(
    ['INITIAL_GUILD'],
    (e) => ('full' === e.data_mode ? null : S.o.loadGuildIds([e.id])),
    (e) => {
        p.Z.initialGuild.measure(() => {
            a.ZP.Emitter.batched(() => {
                let t = D.Fx(e, b.Wb.identifyStartTime);
                null != v.default.getCurrentUser() &&
                    (V({
                        type: 'GUILD_CREATE',
                        guild: t
                    }),
                    V({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: t.voice_states.map((e) => {
                            var n;
                            return {
                                userId: e.user_id,
                                guildId: t.id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf,
                                selfVideo: e.self_video || !1,
                                suppress: e.suppress,
                                selfStream: e.self_stream || !1,
                                requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null
                            };
                        })
                    }),
                    M.log('Dispatched INITIAL_GUILD '.concat(e.id)));
            });
        });
    }
),
    k(['READY_SUPPLEMENTAL'], (e) => {
        p.Z.readySupplemental.measure(() => {
            a.ZP.Emitter.batched(() => {
                var t, n;
                e = p.Z.hydrateReadySupplemental.measure(() => D.r$(e, b.Wb.identifyStartTime));
                let r = (e) =>
                        e.map((e) => ({
                            user: e.user,
                            status: e.status,
                            clientStatus: e.client_status,
                            activities: e.activities,
                            broadcast: e.broadcast
                        })),
                    i = e.guilds.filter((e) => !0 !== e.unavailable);
                i.forEach((e) => {
                    e.presences = r(e.presences || []);
                });
                let a = e.presences ? r(e.presences) : [],
                    s = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map((e) => (0, I.q_)(e)),
                    o = null !== (n = e.game_invites) && void 0 !== n ? n : [];
                p.Z.dispatchReadySupplemental.measure(() => {
                    V({
                        type: 'CONNECTION_OPEN_SUPPLEMENTAL',
                        guilds: i,
                        presences: a,
                        lazyPrivateChannels: s,
                        gameInvites: o
                    });
                });
                let l = [];
                i.forEach((e) => {
                    e.voice_states.forEach((t) => {
                        var n;
                        l.push({
                            userId: t.user_id,
                            guildId: e.id,
                            sessionId: t.session_id,
                            channelId: t.channel_id,
                            mute: t.mute,
                            deaf: t.deaf,
                            selfMute: t.self_mute,
                            selfDeaf: t.self_deaf,
                            selfVideo: t.self_video || !1,
                            suppress: t.suppress,
                            selfStream: t.self_stream || !1,
                            requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null
                        });
                    });
                }),
                    V({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: l,
                        initial: !0
                    }),
                    b.GC.update();
            });
        }),
            setTimeout(() => V({ type: 'POST_CONNECTION_OPEN' }), 2000);
    }),
    B(
        ['READY'],
        (e) => {
            var t;
            let n = D.Eb(),
                r = e.guilds
                    .filter((e) => {
                        var t, n;
                        return !e.unavailable && 'partial' === e.data_mode && (!!((null !== (t = e.partial_updates.channels) && void 0 !== t ? t : []).length > 0) || !!((null !== (n = e.partial_updates.deleted_channel_ids) && void 0 !== n ? n : []).length > 0) || void 0);
                    })
                    .map((e) => e.id);
            return Promise.all([n, null !== (t = S.o.loadGuildIds(r)) && void 0 !== t ? t : Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            if (e.user.bot) {
                V({ type: 'LOGOUT' });
                return;
            }
            p.Z.ready.measure(() => {
                a.ZP.Emitter.batched(() => {
                    let t = (e = p.Z.hydrateReady.measure(() => D.IM(e, b.Wb.identifyStartTime, n))).private_channels.map((e) => (0, I.q_)(e)),
                        r = e.guilds.filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted).map((e) => e.id),
                        i = e.guilds.filter((e) => !0 !== e.unavailable),
                        a = e.guilds.filter((e) => !0 === e.geo_restricted);
                    i.forEach((e) => {
                        e.presences = [];
                    });
                    let s = null == e.user_settings_proto ? void 0 : (0, m.ac)(e.user_settings_proto);
                    p.Z.dispatchReady.measure(() => {
                        var n;
                        V({
                            type: 'CONNECTION_OPEN',
                            sessionId: e.session_id,
                            authSessionIdHash: e.auth_session_id_hash,
                            staticAuthSessionId: e.static_client_session_id,
                            user: e.user,
                            users: e.users,
                            guilds: i,
                            initialPrivateChannels: t,
                            unavailableGuilds: r,
                            readState: e.read_state,
                            userGuildSettings: e.user_guild_settings,
                            tutorial: e.tutorial,
                            relationships: e.relationships,
                            friendSuggestionCount: e.friend_suggestion_count,
                            presences: e.presences,
                            analyticsToken: e.analytics_token,
                            experiments: e.experiments,
                            connectedAccounts: e.connected_accounts,
                            guildExperiments: e.guild_experiments,
                            requiredAction: e.required_action,
                            consents: e.consents,
                            sessions: Y(e.sessions || []),
                            pendingPayments: e.pending_payments,
                            countryCode: null !== (n = e.country_code) && void 0 !== n ? n : void 0,
                            guildJoinRequests: e.guild_join_requests || [],
                            userSettingsProto: s,
                            apiCodeVersion: e.api_code_version,
                            auth: e.auth,
                            notificationSettings: { flags: e.notification_settings.flags },
                            geoRestrictedGuilds: a,
                            explicitContentScanVersion: e.explicit_content_scan_version
                        });
                    }),
                        null != e.auth_token &&
                            V({
                                type: 'UPDATE_TOKEN',
                                token: e.auth_token,
                                userId: e.user.id
                            }),
                        b.RR.update(),
                        b.GC.update();
                });
            });
        }
    ),
    k(['RESUMED'], () => {
        b.RR.forceUpdate(), b.GC.forceUpdate(), V({ type: 'CONNECTION_RESUMED' });
    }),
    k(['TYPING_START'], (e) => {
        null != e.member && H(e.guild_id, e.member.user, e.member),
            V({
                type: 'TYPING_START',
                channelId: e.channel_id,
                userId: e.user_id
            });
    }),
    k(['ACTIVITY_START'], (e) => {
        V({
            type: 'ACTIVITY_START',
            userId: e.user_id,
            activity: e.activity
        });
    }),
    k(['ACTIVITY_USER_ACTION'], (e) => {
        V({
            type: 'ACTIVITY_USER_ACTION',
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id
        });
    }),
    B(
        ['MESSAGE_CREATE'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            Z(e),
                null != e.author &&
                    V({
                        type: 'MESSAGE_CREATE',
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1
                    });
        }
    ),
    B(
        ['MESSAGE_UPDATE'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            Z(e),
                V({
                    type: 'MESSAGE_UPDATE',
                    guildId: e.guild_id,
                    message: e
                });
        }
    ),
    B(
        ['MESSAGE_DELETE'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            V({
                type: 'MESSAGE_DELETE',
                guildId: e.guild_id,
                id: e.id,
                channelId: e.channel_id
            });
        }
    ),
    B(
        ['MESSAGE_DELETE_BULK'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            V({
                type: 'MESSAGE_DELETE_BULK',
                guildId: e.guild_id,
                ids: e.ids,
                channelId: e.channel_id
            });
        }
    ),
    B(
        ['MESSAGE_ACK'],
        (e) => S.o.loadGuildFromChannelId(e.channel_id),
        (e) => {
            V({
                type: 'MESSAGE_ACK',
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version
            });
        }
    ),
    k(['GUILD_FEATURE_ACK'], (e) => {
        V({
            type: 'GUILD_FEATURE_ACK',
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id
        });
    }),
    k(['USER_NON_CHANNEL_ACK'], (e) => {
        V({
            type: 'USER_NON_CHANNEL_ACK',
            ackType: e.ack_type,
            ackedId: e.entity_id
        });
    }),
    B(
        ['CHANNEL_PINS_ACK'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            V({
                type: 'CHANNEL_PINS_ACK',
                channelId: e.channel_id,
                timestamp: e.timestamp,
                version: e.version
            });
        }
    ),
    B(
        ['CHANNEL_PINS_UPDATE'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            V({
                type: 'CHANNEL_PINS_UPDATE',
                channelId: e.channel_id,
                lastPinTimestamp: e.last_pin_timestamp
            });
        }
    ),
    B(
        ['CHANNEL_CREATE', 'CHANNEL_DELETE'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            V({
                type: t,
                channel: (0, I.q_)(e)
            });
        }
    ),
    k(['VOICE_CHANNEL_STATUS_UPDATE'], (e, t) => {
        V({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status
        });
    }),
    k(['CHANNEL_STATUSES'], (e, t) => {
        V({
            type: t,
            guildId: e.guild_id,
            channels: e.channels
        });
    }),
    B(
        ['CHANNEL_UPDATE'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            P.add(e);
        }
    ),
    B(
        ['THREAD_CREATE', 'THREAD_UPDATE', 'THREAD_DELETE'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...r } = e;
            V({
                type: t,
                isNewlyCreated: n,
                channel: (0, I.q_)(r)
            });
        }
    ),
    B(
        ['THREAD_LIST_SYNC'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            V({
                type: 'THREAD_LIST_SYNC',
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = S.Z.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, I.q_)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? i().map(e.members, h.Z) : void 0,
                channelIds: e.channel_ids
            });
        }
    ),
    k(['THREAD_MEMBER_UPDATE'], (e) => {
        V({
            type: 'THREAD_MEMBER_UPDATE',
            id: e.id,
            guildId: e.guild_id,
            userId: e.user_id,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.mute_config,
            joinTimestamp: e.join_timestamp
        });
    }),
    k(['THREAD_MEMBERS_UPDATE'], (e) => {
        var t;
        V({
            type: 'THREAD_MEMBERS_UPDATE',
            id: e.id,
            guildId: e.guild_id,
            memberCount: e.member_count,
            addedMembers:
                null === (t = e.added_members) || void 0 === t
                    ? void 0
                    : t.map((t) => ({
                          id: t.id,
                          guildId: e.guild_id,
                          userId: t.user_id,
                          flags: t.flags,
                          joinTimestamp: t.join_timestamp
                      })),
            removedMemberIds: e.removed_member_ids,
            memberIdsPreview: e.member_ids_preview
        });
    }),
    k(['FORUM_UNREADS'], (e) => {
        !e.permission_denied &&
            V({
                type: 'FORUM_UNREADS',
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({
                    threadId: e.thread_id,
                    missing: e.missing,
                    count: e.count
                }))
            });
    }),
    k(['SOUNDBOARD_SOUNDS'], (e) => {
        U.add(e);
    }),
    k(['CHANNEL_RECIPIENT_ADD', 'CHANNEL_RECIPIENT_REMOVE'], (e, t) => {
        let n = S.Z.getBasicChannel(e.channel_id);
        V({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n
        });
    }),
    B(
        ['GUILD_CREATE'],
        (e) => ('full' === e.data_mode ? null : S.o.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable)
                V({
                    type: 'GUILD_UNAVAILABLE',
                    guildId: e.id
                });
            else {
                let t = D.J2(e);
                o.Z.createGuild(t),
                    V({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: t.voice_states.map((e) => {
                            var n;
                            return {
                                userId: e.user_id,
                                guildId: t.id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf,
                                selfVideo: e.self_video || !1,
                                suppress: e.suppress,
                                selfStream: e.self_stream || !1,
                                requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null
                            };
                        })
                    });
            }
        }
    ),
    k(['GUILD_UPDATE'], (e) => {
        V({
            type: 'GUILD_UPDATE',
            guild: e
        }),
            e.unavailable &&
                V({
                    type: 'GUILD_UNAVAILABLE',
                    guildId: e.id
                });
    }),
    k(['GUILD_DELETE'], (e) => {
        V({
            type: 'GUILD_DELETE',
            guild: e
        }),
            e.geo_restricted
                ? V({
                      type: 'GUILD_GEO_RESTRICTED',
                      guildId: e.id,
                      icon: e.icon,
                      name: e.name
                  })
                : e.unavailable &&
                  V({
                      type: 'GUILD_UNAVAILABLE',
                      guildId: e.id
                  });
    }),
    k(['GUILD_MEMBERS_CHUNK'], (e) => {
        a.ZP.Emitter.batched(() => {
            w.add({
                guildId: e.guild_id,
                members: e.members,
                notFound: e.not_found
            }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let { user: n, status: r, client_status: i, activities: a, broadcast: s } = t;
                        return j({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: a,
                            clientStatus: i,
                            broadcast: s
                        });
                    }),
                L.Z.flush('GUILD_MEMBERS_CHUNK');
        });
    }),
    k(['THREAD_MEMBER_LIST_UPDATE'], (e) => {
        a.ZP.Emitter.batched(() => {
            V({
                type: 'THREAD_MEMBER_LIST_UPDATE',
                guildId: e.guild_id,
                threadId: e.thread_id,
                members: e.members
            }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let { user: n, status: r, client_status: i, activities: a, broadcast: s } = t;
                        return j({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: a,
                            clientStatus: i,
                            broadcast: s
                        });
                    }),
                L.Z.flush();
        });
    }),
    k(['GUILD_BAN_ADD', 'GUILD_BAN_REMOVE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE'], (e, t) => {
        V({
            type: t,
            guildId: e.guild_id,
            user: e.user,
            avatar: e.avatar,
            avatarDecoration: e.avatar_decoration_data,
            roles: e.roles,
            nick: e.nick,
            premiumSince: e.premium_since,
            isPending: e.pending,
            joinedAt: e.joined_at,
            communicationDisabledUntil: e.communication_disabled_until,
            unusualDMActivityUntil: e.unusual_dm_activity_until,
            flags: e.flags
        });
    }),
    B(
        ['GUILD_ROLE_CREATE', 'GUILD_ROLE_UPDATE'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            V({
                type: t,
                guildId: e.guild_id,
                role: e.role
            });
        }
    ),
    B(
        ['GUILD_ROLE_DELETE'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            V({
                type: 'GUILD_ROLE_DELETE',
                guildId: e.guild_id,
                roleId: e.role_id,
                version: e.version
            });
        }
    ),
    k(['GUILD_EMOJIS_UPDATE'], (e) => {
        V({
            type: 'GUILD_EMOJIS_UPDATE',
            guildId: e.guild_id,
            emojis: e.emojis
        });
    }),
    k(['GUILD_STICKERS_UPDATE'], (e) => {
        V({
            type: 'GUILD_STICKERS_UPDATE',
            guildId: e.guild_id,
            stickers: e.stickers
        });
    }),
    k(['GUILD_INTEGRATIONS_UPDATE'], (e) => {
        V({
            type: 'GUILD_INTEGRATIONS_UPDATE',
            guildId: e.guild_id
        });
    }),
    k(['INTEGRATION_CREATE'], (e) => {
        V({
            type: 'INTEGRATION_CREATE',
            application: e.application,
            guildId: e.guild_id
        });
    }),
    k(['INTEGRATION_DELETE'], (e) => {
        V({
            type: 'INTEGRATION_DELETE',
            applicationId: e.application_id,
            guildId: e.guild_id
        });
    }),
    k(['USER_UPDATE'], (e) => {
        V({
            type: 'CURRENT_USER_UPDATE',
            user: e
        });
    }),
    k(['USER_SETTINGS_PROTO_UPDATE'], (e) => {
        let t = (0, m.kI)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ('string' == typeof t)
                throw (
                    (console.error('Invalid proto: |'.concat(t, '| |').concat(e.settings.proto, '|')),
                    console.error({
                        parsed: t,
                        wire: e.settings.proto,
                        type: e.settings.type
                    }),
                    Error('UserSettingsProto must not be a string'))
                );
            V({
                type: 'USER_SETTINGS_PROTO_UPDATE',
                settings: {
                    proto: t,
                    type: e.settings.type
                },
                partial: e.partial
            });
        }
    }),
    k(['USER_GUILD_SETTINGS_UPDATE'], (e) => {
        V({
            type: 'USER_GUILD_SETTINGS_FULL_UPDATE',
            userGuildSettings: [e]
        });
    }),
    k(['USER_CONNECTIONS_UPDATE'], () => {
        V({ type: 'USER_CONNECTIONS_UPDATE' });
    }),
    k(['USER_REQUIRED_ACTION_UPDATE'], (e) => {
        V({
            type: 'USER_REQUIRED_ACTION_UPDATE',
            requiredAction: e.required_action
        });
    }),
    k(['USER_NOTE_UPDATE'], (e) => {
        V({
            type: 'USER_NOTE_UPDATE',
            ...e
        });
    }),
    k(['RELATIONSHIP_ADD'], (e) => {
        V({
            type: 'RELATIONSHIP_ADD',
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                since: e.since,
                nickname: e.nickname
            },
            shouldNotify: !0 === e.should_notify
        });
    }),
    k(['RELATIONSHIP_REMOVE'], (e) => {
        V({
            type: 'RELATIONSHIP_REMOVE',
            relationship: e
        });
    }),
    k(['RELATIONSHIP_UPDATE'], (e) => {
        V({
            type: 'RELATIONSHIP_UPDATE',
            relationship: e
        });
    }),
    k(['PRESENCE_UPDATE'], (e) => {
        j({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            clientStatus: e.client_status,
            broadcast: e.broadcast
        });
    }),
    k(['PRESENCES_REPLACE'], (e) => {
        V({
            type: 'PRESENCES_REPLACE',
            presences: e
        });
    }),
    k(['SESSIONS_REPLACE'], (e) => {
        V({
            type: 'SESSIONS_REPLACE',
            sessions: Y(e)
        });
    }),
    k(['VOICE_STATE_UPDATE'], (e) => {
        var t;
        null != e.member && H(e.guild_id, e.member.user, e.member),
            V({
                type: 'VOICE_STATE_UPDATES',
                voiceStates: [
                    {
                        userId: e.user_id,
                        guildId: e.guild_id,
                        sessionId: e.session_id,
                        channelId: e.channel_id,
                        mute: e.mute,
                        deaf: e.deaf,
                        selfMute: e.self_mute,
                        selfDeaf: e.self_deaf,
                        selfVideo: e.self_video || !1,
                        suppress: e.suppress,
                        selfStream: e.self_stream || !1,
                        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                        oldChannelId: O.Z.getUserVoiceChannelId(e.guild_id, e.user_id)
                    }
                ]
            });
    }),
    k(['VOICE_SERVER_UPDATE'], (e) => {
        V({
            type: 'VOICE_SERVER_UPDATE',
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token
        });
    }),
    k(['CALL_CREATE'], (e) => {
        V({
            type: 'CALL_CREATE',
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        });
        let t = e.voice_states;
        null != t &&
            V({
                type: 'VOICE_STATE_UPDATES',
                voiceStates: t.map((e) => {
                    var t;
                    return {
                        userId: e.user_id,
                        guildId: null,
                        sessionId: e.session_id,
                        channelId: e.channel_id,
                        mute: e.mute,
                        deaf: e.deaf,
                        selfMute: e.self_mute,
                        selfDeaf: e.self_deaf,
                        selfVideo: e.self_video || !1,
                        suppress: e.suppress,
                        selfStream: e.self_stream || !1,
                        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null
                    };
                })
            });
    }),
    k(['CALL_UPDATE'], (e) => {
        V({
            type: 'CALL_UPDATE',
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        });
    }),
    k(['CALL_DELETE'], (e) => {
        V({
            type: 'CALL_DELETE',
            channelId: e.channel_id,
            unavailable: e.unavailable
        });
    }),
    k(['OAUTH2_TOKEN_REVOKE'], (e) => {
        V({
            type: 'OAUTH2_TOKEN_REVOKE',
            accessToken: e.access_token
        });
    }),
    k(['RECENT_MENTION_DELETE'], (e) => {
        V({
            type: 'RECENT_MENTION_DELETE',
            id: e.message_id
        });
    }),
    k(['SAVED_MESSAGE_CREATE'], (e) => {
        V({
            type: 'SAVED_MESSAGE_CREATE',
            savedMessage: (0, f.jk)(e)
        });
    }),
    k(['SAVED_MESSAGE_DELETE'], (e) => {
        V({
            type: 'SAVED_MESSAGE_DELETE',
            savedMessageData: (0, f.$_)(e)
        });
    }),
    k(['FRIEND_SUGGESTION_CREATE'], (e) => {
        V({
            type: 'FRIEND_SUGGESTION_CREATE',
            suggestion: e
        });
    }),
    k(['FRIEND_SUGGESTION_DELETE'], (e) => {
        V({
            type: 'FRIEND_SUGGESTION_DELETE',
            suggestedUserId: e.suggested_user_id
        });
    }),
    k(['WEBHOOKS_UPDATE'], (e) => {
        V({
            type: 'WEBHOOKS_UPDATE',
            guildId: e.guild_id,
            channelId: e.channel_id
        });
    }),
    k(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'], (e, t) => {
        V({
            type: t,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type
        });
    }),
    k(['MESSAGE_POLL_VOTE_ADD', 'MESSAGE_POLL_VOTE_REMOVE'], (e, t) => {
        V({
            type: 'MESSAGE_POLL_VOTE_ADD' === t ? 'MESSAGE_REACTION_ADD' : 'MESSAGE_REACTION_REMOVE',
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: {
                id: e.answer_id,
                name: ''
            },
            reactionType: E.O.VOTE
        });
    }),
    k(['MESSAGE_REACTION_REMOVE_ALL'], (e) => {
        V({
            type: 'MESSAGE_REACTION_REMOVE_ALL',
            channelId: e.channel_id,
            messageId: e.message_id
        });
    }),
    k(['MESSAGE_REACTION_REMOVE_EMOJI'], (e) => {
        V({
            type: 'MESSAGE_REACTION_REMOVE_EMOJI',
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji
        });
    }),
    k(['MESSAGE_REACTION_ADD_MANY'], (e) => {
        V({
            type: 'MESSAGE_REACTION_ADD_MANY',
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions
        });
    }),
    k(['PAYMENT_UPDATE'], (e) => {
        V({
            type: 'PAYMENT_UPDATE',
            payment: e
        });
    }),
    k(['ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE'], (e, t) => {
        V({
            type: t,
            entitlement: e
        });
    }),
    k(['USER_PAYMENT_SOURCES_UPDATE'], () => {
        N.Z.hasLayers() && (n(355467).tZ(), l.Gn(R.Z.getFetchedSKUIDs()));
    }),
    k(['USER_SUBSCRIPTIONS_UPDATE'], () => {
        u.k(), N.Z.hasLayers() && n(355467).jg();
    }),
    k(['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE'], (e) => {
        V({
            type: 'GUILD_BOOST_SLOT_CREATE',
            guildBoostSlot: T.Z.createFromServer(e, C.ZP.getSubscriptionById(e.subscription_id))
        });
    }),
    k(['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE'], (e) => {
        V({
            type: 'GUILD_BOOST_SLOT_UPDATE',
            guildBoostSlot: T.Z.createFromServer(e, C.ZP.getSubscriptionById(e.subscription_id))
        });
    }),
    k(['BILLING_POPUP_BRIDGE_CALLBACK'], (e) => {
        V({
            type: 'BILLING_POPUP_BRIDGE_CALLBACK',
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query
        });
    }),
    k(['USER_PAYMENT_BROWSER_CHECKOUT_DONE'], (e) => {
        V({
            type: 'USER_PAYMENT_BROWSER_CHECKOUT_DONE',
            loadId: e.load_id
        });
    }),
    k(['USER_PAYMENT_CLIENT_ADD'], (e) => {
        (0, y.L)().then((t) => {
            let n = e.purchase_token_hash;
            n === t &&
                V({
                    type: 'USER_PAYMENT_CLIENT_ADD',
                    purchaseTokenHash: n,
                    expiresAt: e.expires_at
                });
        });
    }),
    k(['GUILD_MEMBER_LIST_UPDATE'], (e) => {
        a.ZP.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((H(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: r } = n;
                j({
                    guildId: e.guild_id,
                    user: r.user,
                    status: r.status,
                    activities: r.activities,
                    clientStatus: r.client_status,
                    broadcast: r.broadcast
                });
            };
            e.ops.forEach((e) => {
                let { op: n, items: r, item: i } = e;
                switch (n) {
                    case 'SYNC':
                        r.forEach(t);
                        break;
                    case 'UPDATE':
                    case 'INSERT':
                        t(i);
                }
            }),
                L.Z.flush(),
                V({
                    type: 'GUILD_MEMBER_LIST_UPDATE',
                    guildId: e.guild_id,
                    id: e.id,
                    ops: e.ops,
                    groups: e.groups,
                    memberCount: e.member_count,
                    onlineCount: e.online_count
                });
        });
    }),
    k(['GIFT_CODE_UPDATE'], (e) => {
        V({
            type: 'GIFT_CODE_UPDATE',
            uses: e.uses,
            code: e.code
        });
    }),
    k(['GIFT_CODE_CREATE'], (e) => {
        V({
            type: 'GIFT_CODE_CREATE',
            giftCode: e
        });
    }),
    k(['USER_ACHIEVEMENT_UPDATE'], (e) => {
        V({
            type: 'USER_ACHIEVEMENT_UPDATE',
            userAchievement: e
        });
    }),
    k(['LIBRARY_APPLICATION_UPDATE'], (e) => {
        V({
            type: 'LIBRARY_APPLICATION_UPDATE',
            libraryApplication: e
        });
    }),
    k(['STREAM_CREATE'], (e) => {
        V({
            type: 'STREAM_CREATE',
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        });
    }),
    k(['STREAM_SERVER_UPDATE'], (e) => {
        V({
            type: 'STREAM_SERVER_UPDATE',
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        });
    }),
    k(['STREAM_UPDATE'], (e) => {
        V({
            type: 'STREAM_UPDATE',
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        });
    }),
    k(['STREAM_DELETE'], (e) => {
        V({
            type: 'STREAM_DELETE',
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        });
    }),
    k(['GENERIC_PUSH_NOTIFICATION_SENT'], (e) => {
        V({
            type: 'GENERIC_PUSH_NOTIFICATION_SENT',
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag
        });
    }),
    k(['NOTIFICATION_CENTER_ITEM_CREATE'], (e) => {
        V({
            type: 'NOTIFICATION_CENTER_ITEM_CREATE',
            item: e
        });
    }),
    k(['NOTIFICATION_CENTER_ITEM_DELETE'], (e) => {
        V({
            type: 'NOTIFICATION_CENTER_ITEM_DELETE',
            id: e.id
        });
    }),
    k(['NOTIFICATION_CENTER_ITEMS_ACK'], (e) => {
        V({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK',
            ids: [e.id],
            optimistic: !1
        });
    }),
    k(['NOTIFICATION_CENTER_ITEM_COMPLETED'], (e) => {
        V({
            type: 'NOTIFICATION_CENTER_ITEM_COMPLETED',
            item_enum: e.item_enum
        });
    }),
    k(['QUESTS_USER_STATUS_UPDATE'], (e) => {
        V({
            type: 'QUESTS_USER_STATUS_UPDATE',
            user_status: e.user_status
        });
    }),
    k(['APPLICATION_COMMAND_PERMISSIONS_UPDATE'], (e, t) => {
        V({
            type: t,
            guildId: e.guild_id
        });
    }),
    k(['GUILD_APPLICATION_COMMAND_INDEX_UPDATE'], (e) => {
        V({
            type: 'GUILD_APPLICATION_COMMAND_INDEX_UPDATE',
            guildId: e.guild_id,
            version: e.version
        });
    }),
    k(['GUILD_JOIN_REQUEST_CREATE'], (e) => {
        V({
            type: 'GUILD_JOIN_REQUEST_CREATE',
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        });
    }),
    k(['GUILD_JOIN_REQUEST_UPDATE'], (e) => {
        V({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        });
    }),
    k(['GUILD_JOIN_REQUEST_DELETE'], (e) => {
        V({
            type: 'GUILD_JOIN_REQUEST_DELETE',
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id
        });
    }),
    k(['INTERACTION_CREATE'], (e) => {
        V({
            type: 'INTERACTION_CREATE',
            interactionId: e.id,
            nonce: e.nonce
        });
    }),
    k(['INTERACTION_SUCCESS'], (e) => {
        V({
            type: 'INTERACTION_SUCCESS',
            interactionId: e.id,
            nonce: e.nonce
        });
    }),
    k(['INTERACTION_FAILURE'], (e) => {
        V({
            type: 'INTERACTION_FAILURE',
            nonce: e.nonce
        });
    }),
    k(['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'], (e) => {
        V({
            type: 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE',
            choices: e.choices,
            nonce: e.nonce
        });
    }),
    k(['INTERACTION_MODAL_CREATE'], (e) => {
        V({
            type: 'INTERACTION_MODAL_CREATE',
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, _.uZ)(e.components),
            nonce: e.nonce
        });
    }),
    k(['INTERACTION_IFRAME_MODAL_CREATE'], (e) => {
        V({
            type: 'INTERACTION_IFRAME_MODAL_CREATE',
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            iframePath: e.iframe_path,
            modalSize: e.modal_size,
            nonce: e.nonce
        });
    }),
    k(['STAGE_INSTANCE_CREATE'], (e) => {
        V({
            type: 'STAGE_INSTANCE_CREATE',
            instance: e
        });
    }),
    k(['STAGE_INSTANCE_UPDATE'], (e) => {
        V({
            type: 'STAGE_INSTANCE_UPDATE',
            instance: e
        });
    }),
    k(['STAGE_INSTANCE_DELETE'], (e) => {
        V({
            type: 'STAGE_INSTANCE_DELETE',
            instance: e
        });
    }),
    k(['GUILD_SCHEDULED_EVENT_CREATE'], (e) => {
        V({
            type: 'GUILD_SCHEDULED_EVENT_CREATE',
            guildScheduledEvent: e
        });
    }),
    k(['GUILD_SCHEDULED_EVENT_UPDATE'], (e) => {
        V({
            type: 'GUILD_SCHEDULED_EVENT_UPDATE',
            guildScheduledEvent: e
        });
    }),
    k(['GUILD_SCHEDULED_EVENT_DELETE'], (e) => {
        V({
            type: 'GUILD_SCHEDULED_EVENT_DELETE',
            guildScheduledEvent: e
        });
    }),
    k(['GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE'], (e) => {
        V({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE',
            eventException: e
        });
    }),
    k(['GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE'], (e) => {
        V({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE',
            eventException: e
        });
    }),
    k(['GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE'], (e) => {
        V({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE',
            eventException: e
        });
    }),
    k(['GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE'], (e) => {
        V({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE',
            eventId: e.event_id
        });
    }),
    k(['GUILD_SCHEDULED_EVENT_USER_ADD'], (e) => {
        V({
            type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        });
    }),
    k(['GUILD_SCHEDULED_EVENT_USER_REMOVE'], (e) => {
        V({
            type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        });
    }),
    k(['GUILD_DIRECTORY_ENTRY_CREATE'], (e) => {
        V({
            type: 'GUILD_DIRECTORY_ENTRY_CREATE',
            channelId: e.directory_channel_id,
            entry: e
        });
    }),
    k(['GUILD_DIRECTORY_ENTRY_UPDATE'], (e) => {
        V({
            type: 'GUILD_DIRECTORY_ENTRY_UPDATE',
            channelId: e.directory_channel_id,
            entry: e
        });
    }),
    k(['GUILD_DIRECTORY_ENTRY_DELETE'], (e) => {
        V({
            type: 'GUILD_DIRECTORY_ENTRY_DELETE',
            channelId: e.directory_channel_id,
            guildId: e.entity_id
        });
    }),
    k(['AUTO_MODERATION_MENTION_RAID_DETECTION'], (e) => {
        V({
            type: 'AUTO_MODERATION_MENTION_RAID_DETECTION',
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
        });
    }),
    k(['VOICE_CHANNEL_EFFECT_SEND'], (e) => {
        V({
            type: 'VOICE_CHANNEL_EFFECT_SEND',
            emoji: e.emoji,
            channelId: e.channel_id,
            userId: e.user_id,
            animationType: e.animation_type,
            animationId: e.animation_id,
            soundId: e.sound_id,
            soundVolume: e.sound_volume,
            points: e.points,
            streamerId: e.streamer_id,
            lineId: e.line_id,
            emojiHose: e.emoji_hose
        });
    }),
    k(['GUILD_SOUNDBOARD_SOUND_CREATE'], (e) => {
        V({
            type: 'GUILD_SOUNDBOARD_SOUND_CREATE',
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new g.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        });
    }),
    k(['GUILD_SOUNDBOARD_SOUND_UPDATE'], (e) => {
        V({
            type: 'GUILD_SOUNDBOARD_SOUND_UPDATE',
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new g.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        });
    }),
    k(['GUILD_SOUNDBOARD_SOUND_DELETE'], (e) => {
        V({
            type: 'GUILD_SOUNDBOARD_SOUND_DELETE',
            guildId: e.guild_id,
            soundId: e.sound_id
        });
    }),
    k(['GUILD_SOUNDBOARD_SOUNDS_UPDATE'], (e) => {
        V({
            type: 'GUILD_SOUNDBOARD_SOUNDS_UPDATE',
            guildId: e.guild_id,
            soundboardSounds: e.soundboard_sounds.map((t) => ({
                name: t.name,
                soundId: t.sound_id,
                emojiName: t.emoji_name,
                emojiId: t.emoji_id,
                userId: t.user_id,
                volume: t.volume,
                available: t.available,
                guildId: e.guild_id
            }))
        });
    }),
    B(
        ['EMBEDDED_ACTIVITY_UPDATE_V2'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            V({
                type: 'EMBEDDED_ACTIVITY_UPDATE_V2',
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants
            });
        }
    ),
    k(['AUTH_SESSION_CHANGE'], (e) => {
        V({
            type: 'AUTH_SESSION_CHANGE',
            authSessionIdHash: e.auth_session_id_hash
        });
    }),
    k(['USER_CONNECTIONS_LINK_CALLBACK'], (e) => {
        V({
            type: 'USER_CONNECTIONS_LINK_CALLBACK',
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state
        });
    }),
    k(['DELETED_ENTITY_IDS'], (e) => {
        V({
            type: 'DELETED_ENTITY_IDS',
            ...e
        });
    }),
    k(['CONSOLE_COMMAND_UPDATE'], (e) => {
        V({
            type: 'CONSOLE_COMMAND_UPDATE',
            id: e.id,
            result: e.result,
            error: e.error
        });
    }),
    B(
        ['PASSIVE_UPDATE_V2'],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            V({
                type: 'PASSIVE_UPDATE_V2',
                guildId: e.guild_id,
                members: e.updated_members,
                channels: e.updated_channels.map((e) => ({
                    id: e.id,
                    lastMessageId: e.last_message_id,
                    lastPinTimestamp: e.last_pin_timestamp
                })),
                voiceStates: e.updated_voice_states.map((e) => {
                    var t;
                    return {
                        channelId: e.channel_id,
                        deaf: e.deaf || !1,
                        mute: e.mute || !1,
                        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                        selfDeaf: e.self_deaf || !1,
                        selfMute: e.self_mute || !1,
                        selfStream: e.self_stream || !1,
                        selfVideo: e.self_video || !1,
                        sessionId: e.session_id,
                        suppress: e.suppress,
                        userId: e.user_id
                    };
                }),
                removedVoiceStateUsers: e.removed_voice_states
            });
        }
    ),
    k(['PRIVATE_CHANNEL_INTEGRATION_CREATE'], (e) => {
        V({
            type: 'PRIVATE_CHANNEL_INTEGRATION_CREATE',
            integration: e
        });
    }),
    k(['PRIVATE_CHANNEL_INTEGRATION_UPDATE'], (e) => {
        V({
            type: 'PRIVATE_CHANNEL_INTEGRATION_UPDATE',
            integration: e
        });
    }),
    k(['PRIVATE_CHANNEL_INTEGRATION_DELETE'], (e) => {
        V({
            type: 'PRIVATE_CHANNEL_INTEGRATION_DELETE',
            channelId: e.channel_id,
            applicationId: e.application_id
        });
    }),
    k(['CREATOR_MONETIZATION_RESTRICTIONS_UPDATE'], (e) => {
        V({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS',
            guildId: e.guild_id,
            restrictions: e.restrictions
        });
    }),
    k(['BILLING_REFERRAL_TRIAL_OFFER_UPDATE'], (e) => {
        V({
            type: 'BILLING_REFERRAL_TRIAL_OFFER_UPDATE',
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id
        });
    }),
    k(['LAST_MESSAGES'], (e) => {
        V({
            type: 'MESSAGE_PREVIEWS_LOADED',
            guildId: e.guild_id,
            messages: e.messages
        });
    }),
    k(['AUTHENTICATOR_UPDATE'], (e) => {
        V({
            type: 'AUTHENTICATOR_UPDATE',
            credential: e
        });
    }),
    k(['AUTHENTICATOR_CREATE'], (e) => {
        V({
            type: 'AUTHENTICATOR_CREATE',
            credential: e
        });
    }),
    k(['AUTHENTICATOR_DELETE'], (e) => {
        V({
            type: 'AUTHENTICATOR_DELETE',
            credential: e
        });
    }),
    k(['NOTIFICATION_SETTINGS_UPDATE'], (e) => {
        V({
            type: 'NOTIFICATION_SETTINGS_UPDATE',
            settings: { flags: e.flags }
        });
    }),
    k(['GAME_INVITE_CREATE'], (e) => {
        V({
            type: 'GAME_INVITE_CREATE',
            gameInvite: e
        });
    }),
    k(['GAME_INVITE_DELETE'], (e) => {
        V({
            type: 'GAME_INVITE_DELETE',
            inviteId: e.invite_id
        });
    }),
    k(['GAME_INVITE_DELETE_MANY'], (e) => {
        V({
            type: 'GAME_INVITE_DELETE_MANY',
            inviteIds: e.invite_ids
        });
    }),
    k(['CONVERSATION_SUMMARY_UPDATE'], (e) => {
        V({
            type: 'CONVERSATION_SUMMARY_UPDATE',
            ...e
        });
    }),
    k(['PREMIUM_MARKETING_PREVIEW'], (e) => {
        V({
            type: 'PREMIUM_MARKETING_PREVIEW',
            properties: e.properties
        });
    }),
    k(['USER_APPLICATION_UPDATE'], (e) => {
        V({
            type: 'USER_APPLICATION_UPDATE',
            applicationId: e.application_id
        });
    }),
    k(['USER_APPLICATION_REMOVE'], (e) => {
        V({
            type: 'USER_APPLICATION_REMOVE',
            applicationId: e.application_id
        });
    }),
    k(['DM_SETTINGS_UPSELL_SHOW'], (e) => {
        V({
            type: 'DM_SETTINGS_UPSELL_SHOW',
            guildId: e.guild_id
        });
    }),
    k(['CONTENT_INVENTORY_INBOX_STALE'], (e) => {
        V({
            type: 'CONTENT_INVENTORY_INBOX_STALE',
            refreshAfterMs: e.refresh_after_ms
        });
    });
