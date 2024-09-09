n.d(t, {
    VY: function () {
        return s;
    },
    _$: function () {
        return o;
    },
    wt: function () {
        return u;
    }
}),
    n(411104);
var r = n(149765),
    i = n(981631),
    a = n(689938);
let s = [i.Plq.ADMINISTRATOR, i.Plq.MANAGE_GUILD, i.Plq.MANAGE_ROLES, i.Plq.MANAGE_CHANNELS, i.Plq.KICK_MEMBERS, i.Plq.BAN_MEMBERS, i.Plq.CREATE_INSTANT_INVITE, i.Plq.MANAGE_NICKNAMES, i.Plq.CHANGE_NICKNAME, i.Plq.MANAGE_GUILD_EXPRESSIONS, i.Plq.CREATE_GUILD_EXPRESSIONS, i.Plq.MANAGE_WEBHOOKS, i.Plq.VIEW_AUDIT_LOG, i.Plq.VIEW_CHANNEL, i.Plq.MANAGE_EVENTS, i.Plq.CREATE_EVENTS, i.Plq.MODERATE_MEMBERS, i.Plq.VIEW_GUILD_ANALYTICS, i.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS, i.Plq.USE_EXTERNAL_APPS, i.Plq.SEND_MESSAGES, i.Plq.SEND_MESSAGES_IN_THREADS, i.Plq.CREATE_PUBLIC_THREADS, i.Plq.CREATE_PRIVATE_THREADS, i.Plq.SEND_TTS_MESSAGES, i.Plq.MANAGE_MESSAGES, i.Plq.MANAGE_THREADS, i.Plq.EMBED_LINKS, i.Plq.ATTACH_FILES, i.Plq.READ_MESSAGE_HISTORY, i.Plq.MENTION_EVERYONE, i.Plq.ADD_REACTIONS, i.Plq.USE_EXTERNAL_EMOJIS, i.Plq.USE_EXTERNAL_STICKERS, i.Plq.USE_APPLICATION_COMMANDS, i.Plq.SEND_VOICE_MESSAGES, i.Plq.USE_CLYDE_AI, i.Plq.SEND_POLLS, i.Plq.CONNECT, i.Plq.SPEAK, i.Plq.MUTE_MEMBERS, i.Plq.DEAFEN_MEMBERS, i.Plq.MOVE_MEMBERS, i.Plq.USE_VAD, i.Plq.PRIORITY_SPEAKER, i.Plq.REQUEST_TO_SPEAK, i.Plq.STREAM, i.Plq.USE_EMBEDDED_ACTIVITIES, i.Plq.USE_SOUNDBOARD, i.Plq.USE_EXTERNAL_SOUNDS, i.Plq.SET_VOICE_CHANNEL_STATUS];
function o(e) {
    return Object.values(i.Plq).some((t) => r.e$(e, t) && !s.includes(t));
}
let l = {
    [i.Plq.ADMINISTRATOR.toString()]: () => a.Z.Messages.ADMINISTRATOR,
    [i.Plq.MANAGE_GUILD.toString()]: () => a.Z.Messages.MANAGE_SERVER,
    [i.Plq.MANAGE_ROLES.toString()]: () => a.Z.Messages.MANAGE_ROLES,
    [i.Plq.MANAGE_CHANNELS.toString()]: () => a.Z.Messages.MANAGE_CHANNELS,
    [i.Plq.KICK_MEMBERS.toString()]: () => a.Z.Messages.KICK_MEMBERS,
    [i.Plq.BAN_MEMBERS.toString()]: () => a.Z.Messages.BAN_MEMBERS,
    [i.Plq.CREATE_INSTANT_INVITE.toString()]: () => a.Z.Messages.CREATE_INSTANT_INVITE,
    [i.Plq.MANAGE_NICKNAMES.toString()]: () => a.Z.Messages.MANAGE_NICKNAMES,
    [i.Plq.CHANGE_NICKNAME.toString()]: () => a.Z.Messages.CHANGE_NICKNAME,
    [i.Plq.MANAGE_GUILD_EXPRESSIONS.toString()]: () => a.Z.Messages.MANAGE_EXPRESSIONS,
    [i.Plq.CREATE_GUILD_EXPRESSIONS.toString()]: () => a.Z.Messages.CREATE_EXPRESSIONS,
    [i.Plq.MANAGE_WEBHOOKS.toString()]: () => a.Z.Messages.MANAGE_WEBHOOKS,
    [i.Plq.VIEW_AUDIT_LOG.toString()]: () => a.Z.Messages.VIEW_AUDIT_LOG,
    [i.Plq.VIEW_CHANNEL.toString()]: () => a.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL,
    [i.Plq.SEND_MESSAGES.toString()]: () => a.Z.Messages.SEND_MESSAGES,
    [i.Plq.SEND_TTS_MESSAGES.toString()]: () => a.Z.Messages.SEND_TTS_MESSAGES,
    [i.Plq.MANAGE_MESSAGES.toString()]: () => a.Z.Messages.MANAGE_MESSAGES,
    [i.Plq.EMBED_LINKS.toString()]: () => a.Z.Messages.EMBED_LINKS,
    [i.Plq.ATTACH_FILES.toString()]: () => a.Z.Messages.ATTACH_FILES,
    [i.Plq.READ_MESSAGE_HISTORY.toString()]: () => a.Z.Messages.READ_MESSAGE_HISTORY,
    [i.Plq.MENTION_EVERYONE.toString()]: () => a.Z.Messages.MENTION_EVERYONE,
    [i.Plq.ADD_REACTIONS.toString()]: () => a.Z.Messages.ADD_REACTIONS,
    [i.Plq.USE_EXTERNAL_EMOJIS.toString()]: () => a.Z.Messages.USE_EXTERNAL_EMOJIS,
    [i.Plq.USE_EXTERNAL_STICKERS.toString()]: () => a.Z.Messages.USE_EXTERNAL_STICKERS,
    [i.Plq.USE_APPLICATION_COMMANDS.toString()]: () => a.Z.Messages.USE_APPLICATION_COMMANDS,
    [i.Plq.SEND_VOICE_MESSAGES.toString()]: () => a.Z.Messages.SEND_VOICE_MESSAGE,
    [i.Plq.CONNECT.toString()]: () => a.Z.Messages.CONNECT,
    [i.Plq.SPEAK.toString()]: () => a.Z.Messages.SPEAK,
    [i.Plq.MUTE_MEMBERS.toString()]: () => a.Z.Messages.MUTE_MEMBERS,
    [i.Plq.DEAFEN_MEMBERS.toString()]: () => a.Z.Messages.DEAFEN_MEMBERS,
    [i.Plq.MOVE_MEMBERS.toString()]: () => a.Z.Messages.MOVE_MEMBERS,
    [i.Plq.USE_VAD.toString()]: () => a.Z.Messages.USE_VAD,
    [i.Plq.PRIORITY_SPEAKER.toString()]: () => a.Z.Messages.PRIORITY_SPEAKER,
    [i.Plq.CREATE_PUBLIC_THREADS.toString()]: () => a.Z.Messages.CREATE_PUBLIC_THREADS,
    [i.Plq.CREATE_PRIVATE_THREADS.toString()]: () => a.Z.Messages.CREATE_PRIVATE_THREADS,
    [i.Plq.SEND_MESSAGES_IN_THREADS.toString()]: () => a.Z.Messages.SEND_MESSAGES_IN_THREADS,
    [i.Plq.MANAGE_THREADS.toString()]: () => a.Z.Messages.MANAGE_THREADS,
    [i.Plq.MANAGE_EVENTS.toString()]: () => a.Z.Messages.MANAGE_EVENTS,
    [i.Plq.CREATE_EVENTS.toString()]: () => a.Z.Messages.CREATE_EVENTS,
    [i.Plq.MODERATE_MEMBERS.toString()]: () => a.Z.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
    [i.Plq.REQUEST_TO_SPEAK.toString()]: () => a.Z.Messages.REQUEST_TO_SPEAK,
    [i.Plq.VIEW_GUILD_ANALYTICS.toString()]: () => a.Z.Messages.VIEW_GUILD_ANALYTICS,
    [i.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => a.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
    [i.Plq.STREAM.toString()]: () => a.Z.Messages.VIDEO,
    [i.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: () => a.Z.Messages.USE_EMBEDDED_ACTIVITIES,
    [i.Plq.USE_SOUNDBOARD.toString()]: () => a.Z.Messages.USE_SOUNDBOARD,
    [i.Plq.USE_EXTERNAL_SOUNDS.toString()]: () => a.Z.Messages.USE_EXTERNAL_SOUNDS,
    [i.Plq.USE_CLYDE_AI.toString()]: () => a.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
    [i.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: () => a.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
    [i.Plq.SEND_POLLS.toString()]: () => a.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS,
    [i.Plq.USE_EXTERNAL_APPS.toString()]: () => a.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS
};
function u(e) {
    let t = l[e.toString()];
    if (null == t) throw Error('Unknown permission. Did you provide a _single_ bit flag? Perm: '.concat(e));
    return t();
}
