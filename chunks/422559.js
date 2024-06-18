"use strict";
n.d(t, {
  VY: function() {
    return o
  },
  _$: function() {
    return a
  },
  wt: function() {
    return u
  }
}), n(411104);
var i = n(149765),
  r = n(981631),
  s = n(689938);
let o = [r.Plq.ADMINISTRATOR, r.Plq.MANAGE_GUILD, r.Plq.MANAGE_ROLES, r.Plq.MANAGE_CHANNELS, r.Plq.KICK_MEMBERS, r.Plq.BAN_MEMBERS, r.Plq.CREATE_INSTANT_INVITE, r.Plq.MANAGE_NICKNAMES, r.Plq.CHANGE_NICKNAME, r.Plq.MANAGE_GUILD_EXPRESSIONS, r.Plq.CREATE_GUILD_EXPRESSIONS, r.Plq.MANAGE_WEBHOOKS, r.Plq.VIEW_AUDIT_LOG, r.Plq.VIEW_CHANNEL, r.Plq.MANAGE_EVENTS, r.Plq.CREATE_EVENTS, r.Plq.MODERATE_MEMBERS, r.Plq.VIEW_GUILD_ANALYTICS, r.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS, r.Plq.USE_EXTERNAL_APPS, r.Plq.SEND_MESSAGES, r.Plq.SEND_MESSAGES_IN_THREADS, r.Plq.CREATE_PUBLIC_THREADS, r.Plq.CREATE_PRIVATE_THREADS, r.Plq.SEND_TTS_MESSAGES, r.Plq.MANAGE_MESSAGES, r.Plq.MANAGE_THREADS, r.Plq.EMBED_LINKS, r.Plq.ATTACH_FILES, r.Plq.READ_MESSAGE_HISTORY, r.Plq.MENTION_EVERYONE, r.Plq.ADD_REACTIONS, r.Plq.USE_EXTERNAL_EMOJIS, r.Plq.USE_EXTERNAL_STICKERS, r.Plq.USE_APPLICATION_COMMANDS, r.Plq.SEND_VOICE_MESSAGES, r.Plq.USE_CLYDE_AI, r.Plq.SEND_POLLS, r.Plq.CONNECT, r.Plq.SPEAK, r.Plq.MUTE_MEMBERS, r.Plq.DEAFEN_MEMBERS, r.Plq.MOVE_MEMBERS, r.Plq.USE_VAD, r.Plq.PRIORITY_SPEAKER, r.Plq.REQUEST_TO_SPEAK, r.Plq.STREAM, r.Plq.USE_EMBEDDED_ACTIVITIES, r.Plq.USE_SOUNDBOARD, r.Plq.USE_EXTERNAL_SOUNDS, r.Plq.SET_VOICE_CHANNEL_STATUS];

function a(e) {
  return Object.values(r.Plq).some(t => i.e$(e, t) && !o.includes(t))
}
let l = {
  [r.Plq.ADMINISTRATOR.toString()]: () => s.Z.Messages.ADMINISTRATOR,
  [r.Plq.MANAGE_GUILD.toString()]: () => s.Z.Messages.MANAGE_SERVER,
  [r.Plq.MANAGE_ROLES.toString()]: () => s.Z.Messages.MANAGE_ROLES,
  [r.Plq.MANAGE_CHANNELS.toString()]: () => s.Z.Messages.MANAGE_CHANNELS,
  [r.Plq.KICK_MEMBERS.toString()]: () => s.Z.Messages.KICK_MEMBERS,
  [r.Plq.BAN_MEMBERS.toString()]: () => s.Z.Messages.BAN_MEMBERS,
  [r.Plq.CREATE_INSTANT_INVITE.toString()]: () => s.Z.Messages.CREATE_INSTANT_INVITE,
  [r.Plq.MANAGE_NICKNAMES.toString()]: () => s.Z.Messages.MANAGE_NICKNAMES,
  [r.Plq.CHANGE_NICKNAME.toString()]: () => s.Z.Messages.CHANGE_NICKNAME,
  [r.Plq.MANAGE_GUILD_EXPRESSIONS.toString()]: () => s.Z.Messages.MANAGE_EXPRESSIONS,
  [r.Plq.CREATE_GUILD_EXPRESSIONS.toString()]: () => s.Z.Messages.CREATE_EXPRESSIONS,
  [r.Plq.MANAGE_WEBHOOKS.toString()]: () => s.Z.Messages.MANAGE_WEBHOOKS,
  [r.Plq.VIEW_AUDIT_LOG.toString()]: () => s.Z.Messages.VIEW_AUDIT_LOG,
  [r.Plq.VIEW_CHANNEL.toString()]: () => s.Z.Messages.READ_MESSAGES,
  [r.Plq.SEND_MESSAGES.toString()]: () => s.Z.Messages.SEND_MESSAGES,
  [r.Plq.SEND_TTS_MESSAGES.toString()]: () => s.Z.Messages.SEND_TTS_MESSAGES,
  [r.Plq.MANAGE_MESSAGES.toString()]: () => s.Z.Messages.MANAGE_MESSAGES,
  [r.Plq.EMBED_LINKS.toString()]: () => s.Z.Messages.EMBED_LINKS,
  [r.Plq.ATTACH_FILES.toString()]: () => s.Z.Messages.ATTACH_FILES,
  [r.Plq.READ_MESSAGE_HISTORY.toString()]: () => s.Z.Messages.READ_MESSAGE_HISTORY,
  [r.Plq.MENTION_EVERYONE.toString()]: () => s.Z.Messages.MENTION_EVERYONE,
  [r.Plq.ADD_REACTIONS.toString()]: () => s.Z.Messages.ADD_REACTIONS,
  [r.Plq.USE_EXTERNAL_EMOJIS.toString()]: () => s.Z.Messages.USE_EXTERNAL_EMOJIS,
  [r.Plq.USE_EXTERNAL_STICKERS.toString()]: () => s.Z.Messages.USE_EXTERNAL_STICKERS,
  [r.Plq.USE_APPLICATION_COMMANDS.toString()]: () => s.Z.Messages.USE_APPLICATION_COMMANDS,
  [r.Plq.SEND_VOICE_MESSAGES.toString()]: () => s.Z.Messages.SEND_VOICE_MESSAGE,
  [r.Plq.CONNECT.toString()]: () => s.Z.Messages.CONNECT,
  [r.Plq.SPEAK.toString()]: () => s.Z.Messages.SPEAK,
  [r.Plq.MUTE_MEMBERS.toString()]: () => s.Z.Messages.MUTE_MEMBERS,
  [r.Plq.DEAFEN_MEMBERS.toString()]: () => s.Z.Messages.DEAFEN_MEMBERS,
  [r.Plq.MOVE_MEMBERS.toString()]: () => s.Z.Messages.MOVE_MEMBERS,
  [r.Plq.USE_VAD.toString()]: () => s.Z.Messages.USE_VAD,
  [r.Plq.PRIORITY_SPEAKER.toString()]: () => s.Z.Messages.PRIORITY_SPEAKER,
  [r.Plq.CREATE_PUBLIC_THREADS.toString()]: () => s.Z.Messages.CREATE_PUBLIC_THREADS,
  [r.Plq.CREATE_PRIVATE_THREADS.toString()]: () => s.Z.Messages.CREATE_PRIVATE_THREADS,
  [r.Plq.SEND_MESSAGES_IN_THREADS.toString()]: () => s.Z.Messages.SEND_MESSAGES_IN_THREADS,
  [r.Plq.MANAGE_THREADS.toString()]: () => s.Z.Messages.MANAGE_THREADS,
  [r.Plq.MANAGE_EVENTS.toString()]: () => s.Z.Messages.MANAGE_EVENTS,
  [r.Plq.CREATE_EVENTS.toString()]: () => s.Z.Messages.CREATE_EVENTS,
  [r.Plq.MODERATE_MEMBERS.toString()]: () => s.Z.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
  [r.Plq.REQUEST_TO_SPEAK.toString()]: () => s.Z.Messages.REQUEST_TO_SPEAK,
  [r.Plq.VIEW_GUILD_ANALYTICS.toString()]: () => s.Z.Messages.VIEW_GUILD_ANALYTICS,
  [r.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => s.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
  [r.Plq.STREAM.toString()]: () => s.Z.Messages.VIDEO,
  [r.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: () => s.Z.Messages.USE_EMBEDDED_ACTIVITIES,
  [r.Plq.USE_SOUNDBOARD.toString()]: () => s.Z.Messages.USE_SOUNDBOARD,
  [r.Plq.USE_EXTERNAL_SOUNDS.toString()]: () => s.Z.Messages.USE_EXTERNAL_SOUNDS,
  [r.Plq.USE_CLYDE_AI.toString()]: () => s.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
  [r.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: () => s.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
  [r.Plq.SEND_POLLS.toString()]: () => s.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS,
  [r.Plq.USE_EXTERNAL_APPS.toString()]: () => s.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS
};

function u(e) {
  let t = l[e.toString()];
  if (null == t) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
  return t()
}