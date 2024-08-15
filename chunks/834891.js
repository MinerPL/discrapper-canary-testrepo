a.d(s, {
	E: function () {
		return d;
	},
	l: function () {
		return E;
	}
});
var n,
	E,
	t = a(149765),
	_ = a(700785),
	l = a(981631),
	i = a(689938);
function d() {
	return {
		CREATE: {
			id: 'CREATE',
			code: '2TffvPucqHkN',
			label: i.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,
			channels: [],
			system_channel_id: null
		},
		GAMING: {
			id: 'GAMING',
			code: 'hvtBQMfw6uSJ',
			label: i.Z.Messages.GUILD_TEMPLATE_HEADER_GAMING,
			channels: [
				{
					id: '00',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '01',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '02',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CLIPS_AND_HIGHLIGHTS,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '10',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '11',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOBBY,
					type: l.d4z.GUILD_VOICE
				},
				{
					id: '12',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_GAMING,
					type: l.d4z.GUILD_VOICE
				}
			],
			system_channel_id: '01'
		},
		FRIENDS: {
			id: 'FRIENDS',
			code: 'hgM48av5Q69A',
			label: i.Z.Messages.GUILD_TEMPLATE_HEADER_FRIEND,
			channels: [
				{
					id: '00',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '01',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '02',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_GAME,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '03',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_MUSIC,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '10',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '11',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
					type: l.d4z.GUILD_VOICE
				},
				{
					id: '12',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STREAM_ROOM,
					type: l.d4z.GUILD_VOICE
				}
			],
			system_channel_id: '01'
		},
		STUDY: {
			id: 'STUDY',
			code: 'FbwUwRp4j8Es',
			label: i.Z.Messages.GUILD_TEMPLATE_HEADER_STUDY,
			channels: [
				{
					id: '00',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '01',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '02',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '10',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '11',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '12',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_HOMEWORK_HELP,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '13',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_SESSION_PLANNING,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '14',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '20',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '21',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
					type: l.d4z.GUILD_VOICE
				},
				{
					id: '22',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({ number: 1 }),
					type: l.d4z.GUILD_VOICE
				},
				{
					id: '23',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({ number: 2 }),
					type: l.d4z.GUILD_VOICE
				}
			],
			system_channel_id: '11'
		},
		CLUBS: {
			id: 'CLUBS',
			code: 's4WNnBxTDPsY',
			label: i.Z.Messages.GUILD_TEMPLATE_HEADER_CLUBS,
			channels: [
				{
					id: '00',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '01',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '02',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '10',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '11',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '12',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_MEETING_PLANS,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '20',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '21',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
					type: l.d4z.GUILD_VOICE
				},
				{
					id: '22',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM,
					type: l.d4z.GUILD_VOICE
				}
			],
			system_channel_id: '11'
		},
		CREATORS: {
			id: 'CREATORS',
			code: '6exdzMgjZgah',
			label: i.Z.Messages.GUILD_TEMPLATE_HEADER_CREATOR,
			channels: [
				{
					id: '00',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '01',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '02',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '10',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '11',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '12',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_EVENTS,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '13',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_IDEAS_AND_FEEDBACK,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '20',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '21',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
					type: l.d4z.GUILD_VOICE
				},
				{
					id: '22',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COMMUNITY_HANGOUT,
					type: l.d4z.GUILD_VOICE
				},
				{
					id: '23',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STREAM_ROOM,
					type: l.d4z.GUILD_VOICE
				}
			],
			system_channel_id: '11'
		},
		LOCAL_COMMUNITY: {
			id: 'LOCAL_COMMUNITY',
			code: '64UDvRNCC52Y',
			label: i.Z.Messages.GUILD_TEMPLATE_HEADER_COMMUNITY,
			channels: [
				{
					id: '00',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '01',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '02',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '03',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '10',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '11',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '12',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_MEETING_PLANS,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '13',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '20',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '21',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
					type: l.d4z.GUILD_VOICE
				},
				{
					id: '22',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM,
					type: l.d4z.GUILD_VOICE
				}
			],
			system_channel_id: '11'
		},
		SCHOOL_CLUB: {
			id: 'SCHOOL_CLUB',
			code: 'Ctg7PUHcQmZu',
			label: i.Z.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
			channels: [
				{
					id: '00',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '01',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '02',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '03',
					parent_id: '00',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '10',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '11',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '12',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_MEETING_PLANS,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '13',
					parent_id: '10',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
					type: l.d4z.GUILD_TEXT
				},
				{
					id: '20',
					parent_id: null,
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
					type: l.d4z.GUILD_CATEGORY
				},
				{
					id: '21',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
					type: l.d4z.GUILD_VOICE
				},
				{
					id: '22',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
					type: l.d4z.GUILD_VOICE
				},
				{
					id: '22',
					parent_id: '20',
					name: i.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
					type: l.d4z.GUILD_VOICE
				}
			],
			roles: [
				{
					id: '00',
					name: '@everyone',
					permissions: _.TP
				},
				{
					id: '01',
					name: 'officers (example)',
					mentionable: !0,
					hoist: !0,
					permissions: t.$e(
						_.TP,
						l.Plq.MANAGE_ROLES,
						l.Plq.MANAGE_CHANNELS,
						l.Plq.KICK_MEMBERS,
						l.Plq.BAN_MEMBERS,
						l.Plq.MANAGE_NICKNAMES,
						l.Plq.MANAGE_GUILD_EXPRESSIONS,
						l.Plq.MANAGE_MESSAGES,
						l.Plq.SEND_TTS_MESSAGES
					),
					color: 3066993
				}
			],
			system_channel_id: '11'
		}
	};
}
((n = E || (E = {})).CREATE = 'CREATE'),
	(n.GAMING = 'GAMING'),
	(n.FRIENDS = 'FRIENDS'),
	(n.STUDY = 'STUDY'),
	(n.CLUBS = 'CLUBS'),
	(n.CREATORS = 'CREATORS'),
	(n.LOCAL_COMMUNITY = 'LOCAL_COMMUNITY'),
	(n.SCHOOL_CLUB = 'SCHOOL_CLUB');
