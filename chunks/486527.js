E.d(e, {
  AR: function() {
return I;
  },
  C2: function() {
return d;
  },
  Pp: function() {
return O;
  },
  VX: function() {
return M;
  },
  b7: function() {
return i;
  },
  sE: function() {
return n;
  }
});
var T, s, a, L, d, M, n, I, A = E(149765),
  U = E(700785),
  t = E(981631),
  G = E(689938);
(T = d || (d = {}))[T.GUILD = 0] = 'GUILD', T[T.GUILD_SCHEDULED_EVENT = 1] = 'GUILD_SCHEDULED_EVENT', (s = M || (M = {})).GUILD_TEMPLATES = 'guild-templates', s.CUSTOMIZE_NEW_GUILD = 'customize-new-guild', s.CHOOSE_GUILD = 'choose-guild', s.CUSTOMIZE_EXISTING_GUILD = 'customize-existing-guild', s.CONFIRMATION = 'confirmation', (a = n || (n = {})).CREATE = 'CREATE', a.HUB_SCHOOL_CLUB = 'HUB_SCHOOL_CLUB', a.HUB_STUDY = 'HUB_STUDY', a.HUB_CLASS = 'HUB_CLASS', a.HUB_SOCIAL = 'HUB_SOCIAL', a.HUB_MAJOR = 'HUB_MAJOR', a.HUB_DORM = 'HUB_DORM', (L = I || (I = {}))[L.ALL = -1] = 'ALL', L[L.UNCATEGORIZED = 0] = 'UNCATEGORIZED', L[L.SCHOOL_CLUB = 1] = 'SCHOOL_CLUB', L[L.CLASS = 2] = 'CLASS', L[L.STUDY_SOCIAL = 3] = 'STUDY_SOCIAL', L[L.MISC = 5] = 'MISC';

function i(_) {
  return '883060064561299456' === _ ? [{
  value: 1,
  label: G.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_1
},
{
  value: 2,
  label: G.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_2
},
{
  value: 3,
  label: G.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_3
},
{
  value: 5,
  label: G.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_5
}
  ] : [{
  value: 1,
  label: G.Z.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
  idealSize: 100
},
{
  value: 2,
  label: G.Z.Messages.DIRECTORY_CATEGORY_CLASS
},
{
  value: 3,
  label: G.Z.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
  idealSize: 50
},
{
  value: 5,
  label: G.Z.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
}
  ];
}

function O() {
  return {
CREATE: {
  id: 'CREATE',
  code: '2TffvPucqHkN',
  label: G.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,
  channels: [],
  system_channel_id: null
},
HUB_SCHOOL_CLUB: {
  id: 'HUB_SCHOOL_CLUB',
  code: 'UMUbvRpRZhS6',
  label: G.Z.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
  channels: [{
      id: '00',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '01',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '02',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '03',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '10',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '11',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '12',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '13',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '20',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '21',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '22',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '22',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
      type: t.d4z.GUILD_VOICE
    }
  ],
  roles: [{
      id: '00',
      name: '@everyone',
      permissions: U.TP
    },
    {
      id: '01',
      name: 'officers (example)',
      mentionable: !0,
      hoist: !0,
      permissions: A.$e(U.TP, t.Plq.MANAGE_ROLES, t.Plq.MANAGE_CHANNELS, t.Plq.KICK_MEMBERS, t.Plq.BAN_MEMBERS, t.Plq.MANAGE_NICKNAMES, t.Plq.MANAGE_GUILD_EXPRESSIONS, t.Plq.MANAGE_MESSAGES, t.Plq.SEND_TTS_MESSAGES),
      color: 3066993
    }
  ],
  system_channel_id: '12'
},
HUB_STUDY: {
  id: 'HUB_STUDY',
  code: '2JBhzzca2vfT',
  label: G.Z.Messages.GUILD_TEMPLATE_HEADER_STUDY,
  channels: [{
      id: '00',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '01',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '02',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '10',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '11',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '12',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '12',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '20',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '21',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '22',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
        number: 1
      }),
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '23',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
        number: 2
      }),
      type: t.d4z.GUILD_VOICE
    }
  ],
  system_channel_id: '12'
},
HUB_CLASS: {
  id: 'HUB_CLASS',
  code: 'r86WWBwTGspb',
  label: G.Z.Messages.GUILD_TEMPLATE_HEADER_CLASS,
  channels: [{
      id: '00',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '01',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '02',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '10',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '11',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '12',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '13',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '20',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '21',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '22',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
        number: 1
      }),
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '23',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
        number: 2
      }),
      type: t.d4z.GUILD_VOICE
    }
  ],
  system_channel_id: '12'
},
HUB_SOCIAL: {
  id: 'HUB_SOCIAL',
  code: 'AvvtXE3mfbCR',
  label: G.Z.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
  channels: [{
      id: '00',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '01',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '02',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '03',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '04',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '10',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '11',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '12',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '13',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
      type: t.d4z.GUILD_VOICE
    }
  ],
  system_channel_id: '02'
},
HUB_MAJOR: {
  id: 'HUB_MAJOR',
  code: 'FhmfDR6Arvsc',
  label: G.Z.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
  channels: [{
      id: '00',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '01',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '02',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '10',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '11',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '12',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '13',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '20',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '21',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '22',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
        number: 1
      }),
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '23',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
        number: 2
      }),
      type: t.d4z.GUILD_VOICE
    }
  ],
  system_channel_id: '12'
},
HUB_DORM: {
  id: 'HUB_DORM',
  code: 'fkq8xHfrGE58',
  label: G.Z.Messages.GUILD_TEMPLATE_HEADER_DORM,
  channels: [{
      id: '00',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '01',
      parent_id: '00',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '10',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '11',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '12',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '13',
      parent_id: '10',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
      type: t.d4z.GUILD_TEXT
    },
    {
      id: '20',
      parent_id: null,
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
      type: t.d4z.GUILD_CATEGORY
    },
    {
      id: '21',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '22',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
      type: t.d4z.GUILD_VOICE
    },
    {
      id: '23',
      parent_id: '20',
      name: G.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
      type: t.d4z.GUILD_VOICE
    }
  ],
  system_channel_id: '12'
}
  };
}