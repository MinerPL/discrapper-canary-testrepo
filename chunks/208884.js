_.d(S, {
    FX: function () {
        return l;
    },
    Ny: function () {
        return A;
    },
    WV: function () {
        return t;
    },
    WW: function () {
        return R;
    },
    _u: function () {
        return a;
    },
    aW: function () {
        return T;
    },
    kv: function () {
        return n;
    },
    s4: function () {
        return M;
    },
    uu: function () {
        return r;
    },
    vq: function () {
        return P;
    },
    xU: function () {
        return i;
    },
    zO: function () {
        return O;
    }
}),
    _(653041);
var s = _(231338),
    I = _(689938);
function e(E) {
    let S = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (
        !S &&
            (E.permissions = E.permissions.filter((E) => {
                let { isExperimental: S } = E;
                return !S;
            })),
        E
    );
}
function N(E, S) {
    return E.map((E) => S[E.toString()]);
}
function R(E) {
    var S, _;
    return {
        [s.Pl.VIEW_CHANNEL.toString()]: {
            title: I.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL,
            description: I.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
            flag: s.Pl.VIEW_CHANNEL
        },
        [s.Pl.MANAGE_CHANNELS.toString()]: {
            title: I.Z.Messages.MANAGE_CHANNELS,
            description: I.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
            flag: s.Pl.MANAGE_CHANNELS
        },
        [s.Pl.MANAGE_ROLES.toString()]: {
            title: I.Z.Messages.MANAGE_ROLES,
            description: I.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
            flag: s.Pl.MANAGE_ROLES
        },
        [s.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: I.Z.Messages.MANAGE_EXPRESSIONS,
            description: I.Z.Messages.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
            flag: s.Pl.MANAGE_GUILD_EXPRESSIONS
        },
        [s.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: I.Z.Messages.CREATE_EXPRESSIONS,
            description: I.Z.Messages.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
            flag: s.Pl.CREATE_GUILD_EXPRESSIONS
        },
        [s.Pl.VIEW_AUDIT_LOG.toString()]: {
            title: I.Z.Messages.VIEW_AUDIT_LOG,
            description: I.Z.Messages.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
            flag: s.Pl.VIEW_AUDIT_LOG
        },
        [s.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
            title: I.Z.Messages.VIEW_GUILD_ANALYTICS,
            description: I.Z.Messages.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
            flag: s.Pl.VIEW_GUILD_ANALYTICS
        },
        [s.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: I.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
            description: I.Z.Messages.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
            flag: s.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS
        },
        [s.Pl.MANAGE_WEBHOOKS.toString()]: {
            title: I.Z.Messages.MANAGE_WEBHOOKS,
            description: I.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
            flag: s.Pl.MANAGE_WEBHOOKS
        },
        [s.Pl.MANAGE_GUILD.toString()]: {
            title: I.Z.Messages.MANAGE_SERVER,
            description: I.Z.Messages.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
            flag: s.Pl.MANAGE_GUILD
        },
        [s.Pl.CREATE_INSTANT_INVITE.toString()]: {
            title: I.Z.Messages.CREATE_INSTANT_INVITE,
            description: I.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
            flag: s.Pl.CREATE_INSTANT_INVITE
        },
        [s.Pl.CHANGE_NICKNAME.toString()]: {
            title: I.Z.Messages.CHANGE_NICKNAME,
            description: I.Z.Messages.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
            flag: s.Pl.CHANGE_NICKNAME
        },
        [s.Pl.MANAGE_NICKNAMES.toString()]: {
            title: I.Z.Messages.MANAGE_NICKNAMES,
            description: I.Z.Messages.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
            flag: s.Pl.MANAGE_NICKNAMES
        },
        [s.Pl.KICK_MEMBERS.toString()]: {
            title: E.showMembershipManualApprovalPermissions ? I.Z.Messages.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : I.Z.Messages.KICK_MEMBERS,
            description: E.showMembershipManualApprovalPermissions ? I.Z.Messages.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : I.Z.Messages.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
            flag: s.Pl.KICK_MEMBERS
        },
        [s.Pl.BAN_MEMBERS.toString()]: {
            title: I.Z.Messages.BAN_MEMBERS,
            description: I.Z.Messages.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
            flag: s.Pl.BAN_MEMBERS
        },
        [s.Pl.MODERATE_MEMBERS.toString()]: {
            title: I.Z.Messages.MODERATE_MEMBER,
            description: I.Z.Messages.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
            flag: s.Pl.MODERATE_MEMBERS
        },
        [s.Pl.SEND_MESSAGES.toString()]: {
            title: E.showForumPermissions ? I.Z.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : I.Z.Messages.SEND_MESSAGES,
            description: E.showForumPermissions ? I.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : I.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
            flag: s.Pl.SEND_MESSAGES
        },
        [s.Pl.EMBED_LINKS.toString()]: {
            title: I.Z.Messages.EMBED_LINKS,
            description: I.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
            flag: s.Pl.EMBED_LINKS
        },
        [s.Pl.ATTACH_FILES.toString()]: {
            title: I.Z.Messages.ATTACH_FILES,
            description: I.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
            flag: s.Pl.ATTACH_FILES
        },
        [s.Pl.ADD_REACTIONS.toString()]: {
            title: I.Z.Messages.ADD_REACTIONS,
            description: I.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
            flag: s.Pl.ADD_REACTIONS
        },
        [s.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
            title: I.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
            description: I.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
            flag: s.Pl.USE_EXTERNAL_EMOJIS
        },
        [s.Pl.USE_EXTERNAL_STICKERS.toString()]: {
            title: I.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
            description: I.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
            flag: s.Pl.USE_EXTERNAL_STICKERS
        },
        [s.Pl.MENTION_EVERYONE.toString()]: {
            title: I.Z.Messages.MENTION_EVERYONE,
            description: I.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
            flag: s.Pl.MENTION_EVERYONE
        },
        [s.Pl.MANAGE_MESSAGES.toString()]: {
            title: I.Z.Messages.MANAGE_MESSAGES,
            description: I.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
            flag: s.Pl.MANAGE_MESSAGES
        },
        [s.Pl.READ_MESSAGE_HISTORY.toString()]: {
            title: I.Z.Messages.READ_MESSAGE_HISTORY,
            description: I.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
            flag: s.Pl.READ_MESSAGE_HISTORY
        },
        [s.Pl.SEND_TTS_MESSAGES.toString()]: {
            title: I.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
            description: I.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
            flag: s.Pl.SEND_TTS_MESSAGES
        },
        [s.Pl.USE_APPLICATION_COMMANDS.toString()]: {
            title: I.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
            description: I.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
            flag: s.Pl.USE_APPLICATION_COMMANDS
        },
        [s.Pl.USE_EXTERNAL_APPS.toString()]: {
            title: I.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS,
            description: E.externalAppsEnabled ? I.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION : ''.concat(I.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION, ' ').concat(I.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION_NOT_ENABLED_YET),
            flag: s.Pl.USE_EXTERNAL_APPS
        },
        [s.Pl.SEND_VOICE_MESSAGES.toString()]: {
            title: I.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
            description: I.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
            flag: s.Pl.SEND_VOICE_MESSAGES
        },
        [s.Pl.USE_CLYDE_AI.toString()]: {
            title: I.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
            description: I.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
            flag: s.Pl.USE_CLYDE_AI
        },
        [s.Pl.SEND_POLLS.toString()]: {
            title: I.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS,
            description: I.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_GUILD,
            flag: s.Pl.SEND_POLLS
        },
        [s.Pl.CONNECT.toString()]: {
            title: I.Z.Messages.CONNECT,
            description: I.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
            flag: s.Pl.CONNECT
        },
        [s.Pl.SPEAK.toString()]: {
            title: I.Z.Messages.SPEAK,
            description: I.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
            flag: s.Pl.SPEAK
        },
        [s.Pl.STREAM.toString()]: {
            title: I.Z.Messages.VIDEO,
            description: I.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
            flag: s.Pl.STREAM
        },
        [s.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: I.Z.Messages.USE_EMBEDDED_ACTIVITIES,
            description: I.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
            flag: s.Pl.USE_EMBEDDED_ACTIVITIES
        },
        [s.Pl.USE_SOUNDBOARD.toString()]: {
            title: I.Z.Messages.USE_SOUNDBOARD,
            description: null !== (S = null == E ? void 0 : E.SOUNDBOARD_DESCRIPTION) && void 0 !== S ? S : I.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
            flag: s.Pl.USE_SOUNDBOARD
        },
        [s.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
            title: I.Z.Messages.USE_EXTERNAL_SOUNDS,
            description: I.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
            flag: s.Pl.USE_EXTERNAL_SOUNDS
        },
        [s.Pl.USE_VAD.toString()]: {
            title: I.Z.Messages.USE_VAD,
            description: I.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
            flag: s.Pl.USE_VAD
        },
        [s.Pl.PRIORITY_SPEAKER.toString()]: {
            title: I.Z.Messages.PRIORITY_SPEAKER,
            description: null !== (_ = null == E ? void 0 : E.PRIORITY_SPEAKER_DESCRIPTION) && void 0 !== _ ? _ : I.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
            flag: s.Pl.PRIORITY_SPEAKER
        },
        [s.Pl.MUTE_MEMBERS.toString()]: {
            title: I.Z.Messages.MUTE_MEMBERS,
            description: I.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
            flag: s.Pl.MUTE_MEMBERS
        },
        [s.Pl.DEAFEN_MEMBERS.toString()]: {
            title: I.Z.Messages.DEAFEN_MEMBERS,
            description: I.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
            flag: s.Pl.DEAFEN_MEMBERS
        },
        [s.Pl.MOVE_MEMBERS.toString()]: {
            title: I.Z.Messages.MOVE_MEMBERS,
            description: I.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
            flag: s.Pl.MOVE_MEMBERS
        },
        [s.Pl.REQUEST_TO_SPEAK.toString()]: {
            title: I.Z.Messages.REQUEST_TO_SPEAK,
            description: I.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
            flag: s.Pl.REQUEST_TO_SPEAK,
            isExperimental: !0
        },
        [s.Pl.ADMINISTRATOR.toString()]: {
            title: I.Z.Messages.ADMINISTRATOR,
            description: 'string' == typeof I.Z.Messages.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? I.Z.Messages.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : I.Z.Messages.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
            flag: s.Pl.ADMINISTRATOR
        },
        [s.Pl.MANAGE_EVENTS.toString()]: {
            title: I.Z.Messages.MANAGE_EVENTS,
            description: I.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
            flag: s.Pl.MANAGE_EVENTS
        },
        [s.Pl.CREATE_EVENTS.toString()]: {
            title: I.Z.Messages.CREATE_EVENTS,
            description: I.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
            flag: s.Pl.CREATE_EVENTS
        },
        [s.Pl.MANAGE_THREADS.toString()]: {
            title: E.showForumPermissions ? I.Z.Messages.MANAGE_THREADS_AND_FORUM_POSTS : I.Z.Messages.MANAGE_THREADS,
            description: E.showForumPermissions ? I.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : I.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
            flag: s.Pl.MANAGE_THREADS
        },
        [s.Pl.CREATE_PUBLIC_THREADS.toString()]: {
            title: I.Z.Messages.CREATE_PUBLIC_THREADS,
            description: I.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
            flag: s.Pl.CREATE_PUBLIC_THREADS
        },
        [s.Pl.CREATE_PRIVATE_THREADS.toString()]: {
            title: I.Z.Messages.CREATE_PRIVATE_THREADS,
            description: I.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
            flag: s.Pl.CREATE_PRIVATE_THREADS
        },
        [s.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: E.showForumPermissions ? I.Z.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : I.Z.Messages.SEND_MESSAGES_IN_THREADS,
            description: E.showForumPermissions ? I.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : I.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
            flag: s.Pl.SEND_MESSAGES_IN_THREADS
        },
        [s.Pl.USE_CLYDE_AI.toString()]: {
            title: I.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
            description: I.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
            flag: s.Pl.USE_CLYDE_AI
        },
        [s.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: I.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
            description: I.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
            flag: s.Pl.SET_VOICE_CHANNEL_STATUS
        }
    };
}
function M(E) {
    var S, _, M, O, A, P, t;
    let T,
        i = R(E);
    let l = [
        (function (E, S) {
            let _ = [s.Pl.VIEW_CHANNEL, s.Pl.MANAGE_CHANNELS, s.Pl.MANAGE_ROLES, s.Pl.CREATE_GUILD_EXPRESSIONS, s.Pl.MANAGE_GUILD_EXPRESSIONS, s.Pl.VIEW_AUDIT_LOG, s.Pl.VIEW_GUILD_ANALYTICS];
            return (
                S.showCreatorMonetizationAnalyticsPermission && _.push(s.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS),
                _.push(s.Pl.MANAGE_WEBHOOKS),
                _.push(s.Pl.MANAGE_GUILD),
                e({
                    title: I.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
                    permissions: N(_, E)
                })
            );
        })(i, E),
        (function (E) {
            let S = [s.Pl.CREATE_INSTANT_INVITE, s.Pl.CHANGE_NICKNAME, s.Pl.MANAGE_NICKNAMES, s.Pl.KICK_MEMBERS, s.Pl.BAN_MEMBERS, s.Pl.MODERATE_MEMBERS];
            return e({
                title: I.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
                permissions: N(S, E)
            });
        })(i),
        ((S = i),
        (_ = E),
        (T = [s.Pl.SEND_MESSAGES, s.Pl.SEND_MESSAGES_IN_THREADS, s.Pl.CREATE_PUBLIC_THREADS, s.Pl.CREATE_PRIVATE_THREADS, s.Pl.EMBED_LINKS, s.Pl.ATTACH_FILES, s.Pl.ADD_REACTIONS, s.Pl.USE_EXTERNAL_EMOJIS, s.Pl.USE_EXTERNAL_STICKERS, s.Pl.MENTION_EVERYONE, s.Pl.MANAGE_MESSAGES, s.Pl.MANAGE_THREADS, s.Pl.READ_MESSAGE_HISTORY, s.Pl.SEND_TTS_MESSAGES, s.Pl.SEND_VOICE_MESSAGES, s.Pl.USE_CLYDE_AI, s.Pl.SEND_POLLS]),
        !_.showClydeAIPermissions && (T = T.filter((E) => E !== s.Pl.USE_CLYDE_AI)),
        e({
            title: I.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT,
            permissions: N(T, S)
        })),
        (function (E, S) {
            let _ = [s.Pl.CONNECT, s.Pl.SPEAK, s.Pl.STREAM, s.Pl.USE_SOUNDBOARD, s.Pl.USE_EXTERNAL_SOUNDS, s.Pl.USE_VAD, s.Pl.PRIORITY_SPEAKER, s.Pl.MUTE_MEMBERS, s.Pl.DEAFEN_MEMBERS, s.Pl.MOVE_MEMBERS, s.Pl.SET_VOICE_CHANNEL_STATUS];
            return e({
                title: I.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE,
                permissions: N(_, E)
            });
        })(i, 0),
        (function (E) {
            let S = [s.Pl.USE_APPLICATION_COMMANDS, s.Pl.USE_EMBEDDED_ACTIVITIES, s.Pl.USE_EXTERNAL_APPS];
            return e({
                title: I.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS,
                permissions: N(S, E)
            });
        })(i)
    ];
    if (E.showStageChannelPermissions) {
        l.push(
            ((M = i),
            (O = E),
            e(
                {
                    title: I.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE,
                    permissions: N([s.Pl.REQUEST_TO_SPEAK], M)
                },
                O.showExperimental
            ))
        );
    }
    return (
        l.push(
            ((A = i),
            (P = E),
            e(
                {
                    title: I.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
                    permissions: N([s.Pl.CREATE_EVENTS, s.Pl.MANAGE_EVENTS], A)
                },
                P.showExperimental
            ))
        ),
        l.push(
            ((t = i),
            e({
                title: I.Z.Messages.ROLE_PERMISSIONS_SECTION_ADVANCED,
                permissions: N([s.Pl.ADMINISTRATOR], t)
            }))
        ),
        l
    );
}
function O(E, S) {
    let _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { showManageWebhooks: !0 };
    return {
        title: S,
        permissions: N((null == _ ? void 0 : _.showManageWebhooks) ? [s.Pl.VIEW_CHANNEL, s.Pl.MANAGE_CHANNELS, s.Pl.MANAGE_ROLES, s.Pl.MANAGE_WEBHOOKS] : [s.Pl.VIEW_CHANNEL, s.Pl.MANAGE_CHANNELS, s.Pl.MANAGE_ROLES], E)
    };
}
function A(E, S) {
    return {
        title: S,
        permissions: N([s.Pl.CREATE_INSTANT_INVITE], E)
    };
}
function P(E, S, _) {
    let I = [s.Pl.SEND_MESSAGES, s.Pl.SEND_MESSAGES_IN_THREADS, s.Pl.CREATE_PUBLIC_THREADS, s.Pl.CREATE_PRIVATE_THREADS, s.Pl.EMBED_LINKS, s.Pl.ATTACH_FILES, s.Pl.ADD_REACTIONS, s.Pl.USE_EXTERNAL_EMOJIS, s.Pl.USE_EXTERNAL_STICKERS, s.Pl.MENTION_EVERYONE, s.Pl.MANAGE_MESSAGES, s.Pl.MANAGE_THREADS, s.Pl.READ_MESSAGE_HISTORY, s.Pl.SEND_TTS_MESSAGES, s.Pl.SEND_VOICE_MESSAGES, s.Pl.USE_CLYDE_AI, s.Pl.SEND_POLLS];
    return (
        (!_.showPrivateThreads || !_.showCreateThreads) && (I = I.filter((E) => E !== s.Pl.CREATE_PRIVATE_THREADS)),
        !_.showCreateThreads && (I = I.filter((E) => E !== s.Pl.CREATE_PUBLIC_THREADS)),
        !_.showClydeAIPermissions && (I = I.filter((E) => E !== s.Pl.USE_CLYDE_AI)),
        {
            title: S,
            description: _.sectionDescription,
            permissions: N(I, E)
        }
    );
}
function t(E, S) {
    return {
        title: S,
        permissions: N([s.Pl.CONNECT, s.Pl.SPEAK, s.Pl.STREAM, s.Pl.USE_SOUNDBOARD, s.Pl.USE_EXTERNAL_SOUNDS, s.Pl.USE_VAD, s.Pl.PRIORITY_SPEAKER, s.Pl.MUTE_MEMBERS, s.Pl.DEAFEN_MEMBERS, s.Pl.MOVE_MEMBERS, s.Pl.SET_VOICE_CHANNEL_STATUS], E)
    };
}
function T(E, S, _) {
    let I = [s.Pl.SEND_MESSAGES, s.Pl.EMBED_LINKS, s.Pl.ATTACH_FILES, s.Pl.ADD_REACTIONS, s.Pl.USE_EXTERNAL_EMOJIS, s.Pl.USE_EXTERNAL_STICKERS, s.Pl.MENTION_EVERYONE, s.Pl.MANAGE_MESSAGES, s.Pl.READ_MESSAGE_HISTORY, s.Pl.SEND_TTS_MESSAGES, s.Pl.USE_APPLICATION_COMMANDS, s.Pl.SEND_VOICE_MESSAGES, s.Pl.SEND_POLLS];
    return {
        title: S,
        description: _.sectionDescription,
        permissions: N(I, E)
    };
}
function i(E, S) {
    return {
        title: S,
        permissions: N([s.Pl.USE_APPLICATION_COMMANDS, s.Pl.USE_EMBEDDED_ACTIVITIES, s.Pl.USE_EXTERNAL_APPS], E)
    };
}
function l(E, S, _) {
    return {
        title: S,
        permissions: N(_ ? [s.Pl.CONNECT, s.Pl.STREAM, s.Pl.MUTE_MEMBERS, s.Pl.MOVE_MEMBERS] : [s.Pl.CONNECT, s.Pl.MUTE_MEMBERS, s.Pl.MOVE_MEMBERS], E)
    };
}
function n(E, S) {
    return {
        title: S,
        permissions: N([s.Pl.REQUEST_TO_SPEAK, s.Pl.MENTION_EVERYONE], E)
    };
}
function r(E, S) {
    return {
        title: S,
        permissions: N([s.Pl.CREATE_EVENTS, s.Pl.MANAGE_EVENTS], E)
    };
}
function a(E) {
    return null == E ? E : 'string' == typeof E ? E.trim() : 'function' == typeof E.format ? E.format() : E;
}
