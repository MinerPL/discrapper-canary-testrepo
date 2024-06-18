"use strict";
n.d(t, {
  EQ: function() {
    return S
  },
  IG: function() {
    return N
  },
  aC: function() {
    return a
  },
  kf: function() {
    return f
  },
  m$: function() {
    return l
  }
});
var i, r, s, o, a, l, u, _, d = n(230711),
  c = n(197062),
  E = n(727866),
  I = n(63063),
  T = n(981631),
  h = n(689938);
(i = a || (a = {}))[i.EMPTY_STATE = 0] = "EMPTY_STATE", i[i.ADMINISTRATOR = 1] = "ADMINISTRATOR", i[i.ROLE = 2] = "ROLE", i[i.OWNER = 3] = "OWNER", i[i.MEMBER = 4] = "MEMBER", i[i.USER = 5] = "USER", i[i.GUILD = 6] = "GUILD", (r = l || (l = {}))[r.ROLES = 0] = "ROLES", r[r.MEMBERS = 1] = "MEMBERS", r[r.USERS = 2] = "USERS", r[r.GUILDS = 3] = "GUILDS";
let S = 20,
  f = "channelPermissionSettingsAdvancedModeOn";

function N(e, t, n, i) {
  let r = e.type;
  return {
    [T.Plq.VIEW_CHANNEL.toString()]: {
      title: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : h.Z.Messages.VIEW_CHANNEL,
      description: (() => {
        if (t) switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
          case T.d4z.GUILD_VOICE:
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
        }
        return r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
      })(),
      flag: T.Plq.VIEW_CHANNEL
    },
    [T.Plq.MANAGE_CHANNELS.toString()]: {
      title: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.MANAGE_CHANNELS : h.Z.Messages.MANAGE_CHANNEL,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
        }
      })(),
      flag: T.Plq.MANAGE_CHANNELS
    },
    [T.Plq.MANAGE_ROLES.toString()]: {
      title: h.Z.Messages.MANAGE_PERMISSIONS,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
        }
      })(),
      flag: T.Plq.MANAGE_ROLES
    },
    [T.Plq.MANAGE_WEBHOOKS.toString()]: {
      title: h.Z.Messages.MANAGE_WEBHOOKS,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
      flag: T.Plq.MANAGE_WEBHOOKS
    },
    [T.Plq.CREATE_INSTANT_INVITE.toString()]: {
      title: h.Z.Messages.CREATE_INSTANT_INVITE,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_VOICE:
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
        }
      })(),
      flag: T.Plq.CREATE_INSTANT_INVITE
    },
    [T.Plq.SEND_MESSAGES.toString()]: {
      title: T.TPd.GUILD_THREADS_ONLY.has(r) ? h.Z.Messages.CREATE_FORUM_POSTS : n && r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : h.Z.Messages.SEND_MESSAGES,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return n ? h.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_FORUM:
            return (null == i ? void 0 : i.createPostsDisabled) && !e.isMediaChannel() ? c.Z.getForumChannelPermissionText() : h.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
          case T.d4z.GUILD_ANNOUNCEMENT:
            return h.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
              articleURL: I.Z.getArticleURL(T.BhN.ANNOUNCEMENT_CHANNELS)
            });
          case T.d4z.GUILD_VOICE:
            return E.Z.getTextInVoiceSendMessageChannelPermissionText(null == i ? void 0 : i.sendMessagesDisabled);
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
        }
      })(),
      flag: T.Plq.SEND_MESSAGES
    },
    [T.Plq.EMBED_LINKS.toString()]: {
      title: h.Z.Messages.EMBED_LINKS,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
      flag: T.Plq.EMBED_LINKS
    },
    [T.Plq.ATTACH_FILES.toString()]: {
      title: h.Z.Messages.ATTACH_FILES,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
      flag: T.Plq.ATTACH_FILES
    },
    [T.Plq.ADD_REACTIONS.toString()]: {
      title: h.Z.Messages.ADD_REACTIONS,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
        }
      })(),
      flag: T.Plq.ADD_REACTIONS
    },
    [T.Plq.USE_EXTERNAL_EMOJIS.toString()]: {
      title: h.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
      flag: T.Plq.USE_EXTERNAL_EMOJIS
    },
    [T.Plq.USE_EXTERNAL_STICKERS.toString()]: {
      title: h.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
      flag: T.Plq.USE_EXTERNAL_STICKERS
    },
    [T.Plq.MENTION_EVERYONE.toString()]: {
      title: r === T.d4z.GUILD_STAGE_VOICE ? h.Z.Messages.MENTION_EVERYONE_STAGE : h.Z.Messages.MENTION_EVERYONE,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : r === T.d4z.GUILD_STAGE_VOICE ? h.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : h.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
      flag: T.Plq.MENTION_EVERYONE
    },
    [T.Plq.MANAGE_MESSAGES.toString()]: {
      title: h.Z.Messages.MANAGE_MESSAGES,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_ANNOUNCEMENT:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
              articleURL: I.Z.getArticleURL(T.BhN.ANNOUNCEMENT_CHANNELS)
            });
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
        }
      })(),
      flag: T.Plq.MANAGE_MESSAGES
    },
    [T.Plq.READ_MESSAGE_HISTORY.toString()]: {
      title: T.TPd.GUILD_THREADS_ONLY.has(r) ? h.Z.Messages.READ_POST_HISTORY : h.Z.Messages.READ_MESSAGE_HISTORY,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_VOICE:
            return E.Z.getTextInVoiceReadMessageHistoryChannelPermissionText(null == i ? void 0 : i.readMessageHistoryDisabled);
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
        }
      })(),
      flag: T.Plq.READ_MESSAGE_HISTORY
    },
    [T.Plq.SEND_TTS_MESSAGES.toString()]: {
      title: h.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
      flag: T.Plq.SEND_TTS_MESSAGES
    },
    [T.Plq.USE_APPLICATION_COMMANDS.toString()]: {
      title: h.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
      flag: T.Plq.USE_APPLICATION_COMMANDS
    },
    [T.Plq.SEND_VOICE_MESSAGES.toString()]: {
      title: h.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
      flag: T.Plq.SEND_VOICE_MESSAGES
    },
    [T.Plq.SEND_POLLS.toString()]: {
      title: h.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_TEXT,
      flag: T.Plq.SEND_POLLS
    },
    [T.Plq.USE_CLYDE_AI.toString()]: {
      title: h.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : h.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
      flag: T.Plq.USE_CLYDE_AI
    },
    [T.Plq.CONNECT.toString()]: {
      title: h.Z.Messages.CONNECT,
      description: (() => {
        if (t) switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
          case T.d4z.GUILD_TEXT:
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
        }
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
          case T.d4z.GUILD_TEXT:
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
        }
      })(),
      flag: T.Plq.CONNECT
    },
    [T.Plq.SPEAK.toString()]: {
      title: h.Z.Messages.SPEAK,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
          case T.d4z.GUILD_TEXT:
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
        }
      })(),
      flag: T.Plq.SPEAK
    },
    [T.Plq.STREAM.toString()]: {
      title: h.Z.Messages.VIDEO,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_TEXT:
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
        }
      })(),
      flag: T.Plq.STREAM
    },
    [T.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: {
      title: h.Z.Messages.USE_EMBEDDED_ACTIVITIES,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
        }
      })(),
      flag: T.Plq.USE_EMBEDDED_ACTIVITIES
    },
    [T.Plq.USE_EXTERNAL_APPS.toString()]: {
      title: h.Z.Messages.USE_EXTERNAL_APPS,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_DESCRIPTION_THREADS;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_DESCRIPTION_CHANNEL
        }
      })(),
      flag: T.Plq.USE_EXTERNAL_APPS
    },
    [T.Plq.USE_SOUNDBOARD.toString()]: {
      title: h.Z.Messages.USE_SOUNDBOARD,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
              helpCenterArticle: I.Z.getArticleURL(T.BhN.SOUNDBOARD)
            });
          case T.d4z.GUILD_TEXT:
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
              helpCenterArticle: I.Z.getArticleURL(T.BhN.SOUNDBOARD)
            });
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
              helpCenterArticle: I.Z.getArticleURL(T.BhN.SOUNDBOARD)
            })
        }
      })(),
      flag: T.Plq.USE_SOUNDBOARD
    },
    [T.Plq.USE_EXTERNAL_SOUNDS.toString()]: {
      title: h.Z.Messages.USE_EXTERNAL_SOUNDS,
      description: h.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
      flag: T.Plq.USE_EXTERNAL_SOUNDS
    },
    [T.Plq.USE_VAD.toString()]: {
      title: h.Z.Messages.USE_VAD,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
          case T.d4z.GUILD_TEXT:
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
        }
      })(),
      flag: T.Plq.USE_VAD
    },
    [T.Plq.PRIORITY_SPEAKER.toString()]: {
      title: h.Z.Messages.PRIORITY_SPEAKER,
      description: (() => {
        let e = {
          keybind: h.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
          onClick: () => {
            d.Z.open(T.oAB.KEYBINDS)
          }
        };
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(e);
          case T.d4z.GUILD_TEXT:
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(e);
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(e)
        }
      })(),
      flag: T.Plq.PRIORITY_SPEAKER
    },
    [T.Plq.MUTE_MEMBERS.toString()]: {
      title: h.Z.Messages.MUTE_MEMBERS,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
          case T.d4z.GUILD_TEXT:
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
        }
      })(),
      flag: T.Plq.MUTE_MEMBERS
    },
    [T.Plq.DEAFEN_MEMBERS.toString()]: {
      title: h.Z.Messages.DEAFEN_MEMBERS,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_TEXT:
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
        }
      })(),
      flag: T.Plq.DEAFEN_MEMBERS
    },
    [T.Plq.MOVE_MEMBERS.toString()]: {
      title: h.Z.Messages.MOVE_MEMBERS,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return h.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_STAGE_VOICE:
            return h.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
          case T.d4z.GUILD_TEXT:
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
        }
      })(),
      flag: T.Plq.MOVE_MEMBERS
    },
    [T.Plq.REQUEST_TO_SPEAK.toString()]: {
      title: h.Z.Messages.REQUEST_TO_SPEAK,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
      flag: T.Plq.REQUEST_TO_SPEAK
    },
    [T.Plq.MANAGE_THREADS.toString()]: {
      title: T.TPd.GUILD_THREADS_ONLY.has(r) ? h.Z.Messages.MANAGE_FORUM_POSTS : n && r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.MANAGE_THREADS_AND_FORUM_POSTS : h.Z.Messages.MANAGE_THREADS,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return n ? h.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
        }
      })(),
      flag: T.Plq.MANAGE_THREADS
    },
    [T.Plq.CREATE_PUBLIC_THREADS.toString()]: {
      title: h.Z.Messages.CREATE_PUBLIC_THREADS,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
      flag: T.Plq.CREATE_PUBLIC_THREADS
    },
    [T.Plq.CREATE_PRIVATE_THREADS.toString()]: {
      title: h.Z.Messages.CREATE_PRIVATE_THREADS,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
      flag: T.Plq.CREATE_PRIVATE_THREADS
    },
    [T.Plq.SEND_MESSAGES_IN_THREADS.toString()]: {
      title: T.TPd.GUILD_THREADS_ONLY.has(r) ? h.Z.Messages.SEND_MESSAGES_IN_FORUM_POSTS : n && r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : h.Z.Messages.SEND_MESSAGES_IN_THREADS,
      description: (() => {
        switch (r) {
          case T.d4z.GUILD_CATEGORY:
            return n ? h.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
          case T.d4z.GUILD_FORUM:
          case T.d4z.GUILD_MEDIA:
            return h.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
          default:
            return h.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
        }
      })(),
      flag: T.Plq.SEND_MESSAGES_IN_THREADS
    },
    [T.Plq.MANAGE_EVENTS.toString()]: {
      title: h.Z.Messages.MANAGE_EVENTS,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
      flag: T.Plq.MANAGE_EVENTS
    },
    [T.Plq.CREATE_EVENTS.toString()]: {
      title: h.Z.Messages.CREATE_EVENTS,
      description: r === T.d4z.GUILD_CATEGORY ? h.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : h.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
      flag: T.Plq.CREATE_EVENTS
    },
    [T.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: {
      title: h.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
      description: h.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
      flag: T.Plq.SET_VOICE_CHANNEL_STATUS
    }
  }
}(s = u || (u = {})).SETTINGS_PAGE = "settings-page", s.MEMBERS_LIST = "members-list", s.EMPTY_STATE = "empty-state", s.CREATE_CHANNEL = "create-channel", (o = _ || (_ = {})).BASIC = "basic", o.ADVANCED = "advanced"