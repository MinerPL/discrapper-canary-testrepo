"use strict";
E.r(_), E.d(_, {
  CreateOrAddGuildSlideTypes: function() {
    return d
  },
  DirectoryEntryCategories: function() {
    return L
  },
  DirectoryEntryTypes: function() {
    return t
  },
  HubGuildTemplateId: function() {
    return l
  },
  getHubCategories: function() {
    return i
  },
  getHubGuildTemplatesMap: function() {
    return U
  }
});
var a, T, n, s, t, d, l, L, M = E("149765"),
  I = E("700785"),
  A = E("981631"),
  C = E("689938");
(a = t || (t = {}))[a.GUILD = 0] = "GUILD", a[a.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", (T = d || (d = {})).GUILD_TEMPLATES = "guild-templates", T.CUSTOMIZE_NEW_GUILD = "customize-new-guild", T.CHOOSE_GUILD = "choose-guild", T.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", T.CONFIRMATION = "confirmation", (n = l || (l = {})).CREATE = "CREATE", n.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", n.HUB_STUDY = "HUB_STUDY", n.HUB_CLASS = "HUB_CLASS", n.HUB_SOCIAL = "HUB_SOCIAL", n.HUB_MAJOR = "HUB_MAJOR", n.HUB_DORM = "HUB_DORM", (s = L || (L = {}))[s.ALL = -1] = "ALL", s[s.UNCATEGORIZED = 0] = "UNCATEGORIZED", s[s.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", s[s.CLASS = 2] = "CLASS", s[s.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", s[s.MISC = 5] = "MISC";

function i(e) {
  return "883060064561299456" === e ? [{
    value: 1,
    label: C.default.Messages.DIRECTORY_CATEGORY_INTERNAL_1
  }, {
    value: 2,
    label: C.default.Messages.DIRECTORY_CATEGORY_INTERNAL_2
  }, {
    value: 3,
    label: C.default.Messages.DIRECTORY_CATEGORY_INTERNAL_3
  }, {
    value: 5,
    label: C.default.Messages.DIRECTORY_CATEGORY_INTERNAL_5
  }] : [{
    value: 1,
    label: C.default.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
    idealSize: 100
  }, {
    value: 2,
    label: C.default.Messages.DIRECTORY_CATEGORY_CLASS
  }, {
    value: 3,
    label: C.default.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
    idealSize: 50
  }, {
    value: 5,
    label: C.default.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
  }]
}

function U() {
  return {
    CREATE: {
      id: "CREATE",
      code: "2TffvPucqHkN",
      label: C.default.Messages.GUILD_TEMPLATE_HEADER_CREATE,
      channels: [],
      system_channel_id: null
    },
    HUB_SCHOOL_CLUB: {
      id: "HUB_SCHOOL_CLUB",
      code: "UMUbvRpRZhS6",
      label: C.default.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
      channels: [{
        id: "00",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "03",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
        type: A.ChannelTypes.GUILD_VOICE
      }],
      roles: [{
        id: "00",
        name: "@everyone",
        permissions: I.DEFAULT
      }, {
        id: "01",
        name: "officers (example)",
        mentionable: !0,
        hoist: !0,
        permissions: M.combine(I.DEFAULT, A.Permissions.MANAGE_ROLES, A.Permissions.MANAGE_CHANNELS, A.Permissions.KICK_MEMBERS, A.Permissions.BAN_MEMBERS, A.Permissions.MANAGE_NICKNAMES, A.Permissions.MANAGE_GUILD_EXPRESSIONS, A.Permissions.MANAGE_MESSAGES, A.Permissions.SEND_TTS_MESSAGES),
        color: 3066993
      }],
      system_channel_id: "12"
    },
    HUB_STUDY: {
      id: "HUB_STUDY",
      code: "2JBhzzca2vfT",
      label: C.default.Messages.GUILD_TEMPLATE_HEADER_STUDY,
      channels: [{
        id: "00",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
          number: 1
        }),
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
          number: 2
        }),
        type: A.ChannelTypes.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_CLASS: {
      id: "HUB_CLASS",
      code: "r86WWBwTGspb",
      label: C.default.Messages.GUILD_TEMPLATE_HEADER_CLASS,
      channels: [{
        id: "00",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
          number: 1
        }),
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
          number: 2
        }),
        type: A.ChannelTypes.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_SOCIAL: {
      id: "HUB_SOCIAL",
      code: "AvvtXE3mfbCR",
      label: C.default.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
      channels: [{
        id: "00",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "03",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "04",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "12",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "13",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
        type: A.ChannelTypes.GUILD_VOICE
      }],
      system_channel_id: "02"
    },
    HUB_MAJOR: {
      id: "HUB_MAJOR",
      code: "FhmfDR6Arvsc",
      label: C.default.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
      channels: [{
        id: "00",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "02",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
          number: 1
        }),
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
          number: 2
        }),
        type: A.ChannelTypes.GUILD_VOICE
      }],
      system_channel_id: "12"
    },
    HUB_DORM: {
      id: "HUB_DORM",
      code: "fkq8xHfrGE58",
      label: C.default.Messages.GUILD_TEMPLATE_HEADER_DORM,
      channels: [{
        id: "00",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "01",
        parent_id: "00",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "10",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "11",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "12",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "13",
        parent_id: "10",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
        type: A.ChannelTypes.GUILD_TEXT
      }, {
        id: "20",
        parent_id: null,
        name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
        type: A.ChannelTypes.GUILD_CATEGORY
      }, {
        id: "21",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "22",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
        type: A.ChannelTypes.GUILD_VOICE
      }, {
        id: "23",
        parent_id: "20",
        name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
        type: A.ChannelTypes.GUILD_VOICE
      }],
      system_channel_id: "12"
    }
  }
}