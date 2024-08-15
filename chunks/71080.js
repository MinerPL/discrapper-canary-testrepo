n.d(t, {
	EQ: function () {
		return I;
	},
	IG: function () {
		return T;
	},
	aC: function () {
		return o;
	},
	kf: function () {
		return m;
	},
	m$: function () {
		return l;
	}
});
var r,
	i,
	a,
	s,
	o,
	l,
	u,
	c,
	d = n(230711),
	_ = n(197062),
	E = n(727866),
	f = n(63063),
	h = n(981631),
	p = n(689938);
((r = o || (o = {}))[(r.EMPTY_STATE = 0)] = 'EMPTY_STATE'),
	(r[(r.ADMINISTRATOR = 1)] = 'ADMINISTRATOR'),
	(r[(r.ROLE = 2)] = 'ROLE'),
	(r[(r.OWNER = 3)] = 'OWNER'),
	(r[(r.MEMBER = 4)] = 'MEMBER'),
	(r[(r.USER = 5)] = 'USER'),
	(r[(r.GUILD = 6)] = 'GUILD'),
	((i = l || (l = {}))[(i.ROLES = 0)] = 'ROLES'),
	(i[(i.MEMBERS = 1)] = 'MEMBERS'),
	(i[(i.USERS = 2)] = 'USERS'),
	(i[(i.GUILDS = 3)] = 'GUILDS');
let I = 20,
	m = 'channelPermissionSettingsAdvancedModeOn';
function T(e, t, n, r) {
	let i = e.type;
	return {
		[h.Plq.VIEW_CHANNEL.toString()]: {
			title: i === h.d4z.GUILD_CATEGORY ? p.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : p.Z.Messages.VIEW_CHANNEL,
			description: (() => {
				if (t)
					switch (i) {
						case h.d4z.GUILD_CATEGORY:
							return p.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
						case h.d4z.GUILD_VOICE:
						case h.d4z.GUILD_STAGE_VOICE:
							return p.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
						default:
							return p.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE;
					}
				return i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL;
			})(),
			flag: h.Plq.VIEW_CHANNEL
		},
		[h.Plq.MANAGE_CHANNELS.toString()]: {
			title: i === h.d4z.GUILD_CATEGORY ? p.Z.Messages.MANAGE_CHANNELS : p.Z.Messages.MANAGE_CHANNEL,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
					case h.d4z.GUILD_STAGE_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT;
				}
			})(),
			flag: h.Plq.MANAGE_CHANNELS
		},
		[h.Plq.MANAGE_ROLES.toString()]: {
			title: p.Z.Messages.MANAGE_PERMISSIONS,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_STAGE_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL;
				}
			})(),
			flag: h.Plq.MANAGE_ROLES
		},
		[h.Plq.MANAGE_WEBHOOKS.toString()]: {
			title: p.Z.Messages.MANAGE_WEBHOOKS,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
			flag: h.Plq.MANAGE_WEBHOOKS
		},
		[h.Plq.CREATE_INSTANT_INVITE.toString()]: {
			title: p.Z.Messages.CREATE_INSTANT_INVITE,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_VOICE:
					case h.d4z.GUILD_STAGE_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT;
				}
			})(),
			flag: h.Plq.CREATE_INSTANT_INVITE
		},
		[h.Plq.SEND_MESSAGES.toString()]: {
			title: h.TPd.GUILD_THREADS_ONLY.has(i)
				? p.Z.Messages.CREATE_FORUM_POSTS
				: n && i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS
					: p.Z.Messages.SEND_MESSAGES,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return n
							? p.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY
							: p.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_FORUM:
						return (null == r ? void 0 : r.createPostsDisabled) && !e.isMediaChannel()
							? _.Z.getForumChannelPermissionText()
							: p.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
					case h.d4z.GUILD_ANNOUNCEMENT:
						return p.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
							articleURL: f.Z.getArticleURL(h.BhN.ANNOUNCEMENT_CHANNELS)
						});
					case h.d4z.GUILD_VOICE:
						return E.Z.getTextInVoiceSendMessageChannelPermissionText(null == r ? void 0 : r.sendMessagesDisabled);
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT;
				}
			})(),
			flag: h.Plq.SEND_MESSAGES
		},
		[h.Plq.EMBED_LINKS.toString()]: {
			title: p.Z.Messages.EMBED_LINKS,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
			flag: h.Plq.EMBED_LINKS
		},
		[h.Plq.ATTACH_FILES.toString()]: {
			title: p.Z.Messages.ATTACH_FILES,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
			flag: h.Plq.ATTACH_FILES
		},
		[h.Plq.ADD_REACTIONS.toString()]: {
			title: p.Z.Messages.ADD_REACTIONS,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT;
				}
			})(),
			flag: h.Plq.ADD_REACTIONS
		},
		[h.Plq.USE_EXTERNAL_EMOJIS.toString()]: {
			title: p.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
			flag: h.Plq.USE_EXTERNAL_EMOJIS
		},
		[h.Plq.USE_EXTERNAL_STICKERS.toString()]: {
			title: p.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
			flag: h.Plq.USE_EXTERNAL_STICKERS
		},
		[h.Plq.MENTION_EVERYONE.toString()]: {
			title: i === h.d4z.GUILD_STAGE_VOICE ? p.Z.Messages.MENTION_EVERYONE_STAGE : p.Z.Messages.MENTION_EVERYONE,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY
					: i === h.d4z.GUILD_STAGE_VOICE
						? p.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE
						: p.Z.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
			flag: h.Plq.MENTION_EVERYONE
		},
		[h.Plq.MANAGE_MESSAGES.toString()]: {
			title: p.Z.Messages.MANAGE_MESSAGES,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_ANNOUNCEMENT:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
							articleURL: f.Z.getArticleURL(h.BhN.ANNOUNCEMENT_CHANNELS)
						});
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT;
				}
			})(),
			flag: h.Plq.MANAGE_MESSAGES
		},
		[h.Plq.READ_MESSAGE_HISTORY.toString()]: {
			title: h.TPd.GUILD_THREADS_ONLY.has(i) ? p.Z.Messages.READ_POST_HISTORY : p.Z.Messages.READ_MESSAGE_HISTORY,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_VOICE:
						return E.Z.getTextInVoiceReadMessageHistoryChannelPermissionText(
							null == r ? void 0 : r.readMessageHistoryDisabled
						);
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT;
				}
			})(),
			flag: h.Plq.READ_MESSAGE_HISTORY
		},
		[h.Plq.SEND_TTS_MESSAGES.toString()]: {
			title: p.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
			flag: h.Plq.SEND_TTS_MESSAGES
		},
		[h.Plq.USE_APPLICATION_COMMANDS.toString()]: {
			title: p.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
			flag: h.Plq.USE_APPLICATION_COMMANDS
		},
		[h.Plq.SEND_VOICE_MESSAGES.toString()]: {
			title: p.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
			flag: h.Plq.SEND_VOICE_MESSAGES
		},
		[h.Plq.SEND_POLLS.toString()]: {
			title: p.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_TEXT,
			flag: h.Plq.SEND_POLLS
		},
		[h.Plq.USE_CLYDE_AI.toString()]: {
			title: p.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION
					: p.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
			flag: h.Plq.USE_CLYDE_AI
		},
		[h.Plq.CONNECT.toString()]: {
			title: p.Z.Messages.CONNECT,
			description: (() => {
				if (t)
					switch (i) {
						case h.d4z.GUILD_CATEGORY:
							return p.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
						case h.d4z.GUILD_STAGE_VOICE:
							return p.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
						case h.d4z.GUILD_TEXT:
						case h.d4z.GUILD_FORUM:
						case h.d4z.GUILD_MEDIA:
							return p.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
						default:
							return p.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE;
					}
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_STAGE_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
					case h.d4z.GUILD_TEXT:
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE;
				}
			})(),
			flag: h.Plq.CONNECT
		},
		[h.Plq.SPEAK.toString()]: {
			title: p.Z.Messages.SPEAK,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_STAGE_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
					case h.d4z.GUILD_TEXT:
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE;
				}
			})(),
			flag: h.Plq.SPEAK
		},
		[h.Plq.STREAM.toString()]: {
			title: p.Z.Messages.VIDEO,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_TEXT:
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
					case h.d4z.GUILD_STAGE_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE;
				}
			})(),
			flag: h.Plq.STREAM
		},
		[h.Plq.USE_EMBEDDED_ACTIVITIES.toString()]: {
			title: p.Z.Messages.USE_EMBEDDED_ACTIVITIES,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL;
				}
			})(),
			flag: h.Plq.USE_EMBEDDED_ACTIVITIES
		},
		[h.Plq.USE_EXTERNAL_APPS.toString()]: {
			title: p.Z.Messages.USE_EXTERNAL_APPS,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_DESCRIPTION_THREADS;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_DESCRIPTION_CHANNEL;
				}
			})(),
			flag: h.Plq.USE_EXTERNAL_APPS
		},
		[h.Plq.USE_SOUNDBOARD.toString()]: {
			title: p.Z.Messages.USE_SOUNDBOARD,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
							helpCenterArticle: f.Z.getArticleURL(h.BhN.SOUNDBOARD)
						});
					case h.d4z.GUILD_TEXT:
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
							helpCenterArticle: f.Z.getArticleURL(h.BhN.SOUNDBOARD)
						});
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
							helpCenterArticle: f.Z.getArticleURL(h.BhN.SOUNDBOARD)
						});
				}
			})(),
			flag: h.Plq.USE_SOUNDBOARD
		},
		[h.Plq.USE_EXTERNAL_SOUNDS.toString()]: {
			title: p.Z.Messages.USE_EXTERNAL_SOUNDS,
			description: p.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
			flag: h.Plq.USE_EXTERNAL_SOUNDS
		},
		[h.Plq.USE_VAD.toString()]: {
			title: p.Z.Messages.USE_VAD,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_STAGE_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
					case h.d4z.GUILD_TEXT:
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE;
				}
			})(),
			flag: h.Plq.USE_VAD
		},
		[h.Plq.PRIORITY_SPEAKER.toString()]: {
			title: p.Z.Messages.PRIORITY_SPEAKER,
			description: (() => {
				let e = {
					keybind: p.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
					onClick: () => {
						d.Z.open(h.oAB.KEYBINDS);
					}
				};
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(e);
					case h.d4z.GUILD_TEXT:
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(e);
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(e);
				}
			})(),
			flag: h.Plq.PRIORITY_SPEAKER
		},
		[h.Plq.MUTE_MEMBERS.toString()]: {
			title: p.Z.Messages.MUTE_MEMBERS,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_STAGE_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
					case h.d4z.GUILD_TEXT:
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE;
				}
			})(),
			flag: h.Plq.MUTE_MEMBERS
		},
		[h.Plq.DEAFEN_MEMBERS.toString()]: {
			title: p.Z.Messages.DEAFEN_MEMBERS,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_TEXT:
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE;
				}
			})(),
			flag: h.Plq.DEAFEN_MEMBERS
		},
		[h.Plq.MOVE_MEMBERS.toString()]: {
			title: p.Z.Messages.MOVE_MEMBERS,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return p.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_STAGE_VOICE:
						return p.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
					case h.d4z.GUILD_TEXT:
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE;
				}
			})(),
			flag: h.Plq.MOVE_MEMBERS
		},
		[h.Plq.REQUEST_TO_SPEAK.toString()]: {
			title: p.Z.Messages.REQUEST_TO_SPEAK,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
			flag: h.Plq.REQUEST_TO_SPEAK
		},
		[h.Plq.MANAGE_THREADS.toString()]: {
			title: h.TPd.GUILD_THREADS_ONLY.has(i)
				? p.Z.Messages.MANAGE_FORUM_POSTS
				: n && i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.MANAGE_THREADS_AND_FORUM_POSTS
					: p.Z.Messages.MANAGE_THREADS,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return n
							? p.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY
							: p.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT;
				}
			})(),
			flag: h.Plq.MANAGE_THREADS
		},
		[h.Plq.CREATE_PUBLIC_THREADS.toString()]: {
			title: p.Z.Messages.CREATE_PUBLIC_THREADS,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
			flag: h.Plq.CREATE_PUBLIC_THREADS
		},
		[h.Plq.CREATE_PRIVATE_THREADS.toString()]: {
			title: p.Z.Messages.CREATE_PRIVATE_THREADS,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
			flag: h.Plq.CREATE_PRIVATE_THREADS
		},
		[h.Plq.SEND_MESSAGES_IN_THREADS.toString()]: {
			title: h.TPd.GUILD_THREADS_ONLY.has(i)
				? p.Z.Messages.SEND_MESSAGES_IN_FORUM_POSTS
				: n && i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS
					: p.Z.Messages.SEND_MESSAGES_IN_THREADS,
			description: (() => {
				switch (i) {
					case h.d4z.GUILD_CATEGORY:
						return n
							? p.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY
							: p.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
					case h.d4z.GUILD_FORUM:
					case h.d4z.GUILD_MEDIA:
						return p.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
					default:
						return p.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT;
				}
			})(),
			flag: h.Plq.SEND_MESSAGES_IN_THREADS
		},
		[h.Plq.MANAGE_EVENTS.toString()]: {
			title: p.Z.Messages.MANAGE_EVENTS,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
			flag: h.Plq.MANAGE_EVENTS
		},
		[h.Plq.CREATE_EVENTS.toString()]: {
			title: p.Z.Messages.CREATE_EVENTS,
			description:
				i === h.d4z.GUILD_CATEGORY
					? p.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY
					: p.Z.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
			flag: h.Plq.CREATE_EVENTS
		},
		[h.Plq.SET_VOICE_CHANNEL_STATUS.toString()]: {
			title: p.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
			description: p.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
			flag: h.Plq.SET_VOICE_CHANNEL_STATUS
		}
	};
}
((a = u || (u = {})).SETTINGS_PAGE = 'settings-page'),
	(a.MEMBERS_LIST = 'members-list'),
	(a.EMPTY_STATE = 'empty-state'),
	(a.CREATE_CHANNEL = 'create-channel'),
	((s = c || (c = {})).BASIC = 'basic'),
	(s.ADVANCED = 'advanced');
