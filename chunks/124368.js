"use strict";
n.d(t, {
  AX: function() {
    return u
  },
  M3: function() {
    return d
  },
  RN: function() {
    return h
  },
  SX: function() {
    return r
  },
  dg: function() {
    return E
  },
  fZ: function() {
    return S
  },
  iN: function() {
    return I
  },
  on: function() {
    return i
  },
  vw: function() {
    return _
  },
  yX: function() {
    return c
  },
  zb: function() {
    return T
  }
}), n(47120);
var i, r, s, o, a = n(981631),
  l = n(689938);
let u = 4320,
  _ = 50,
  d = 1e5,
  c = 50,
  E = 25,
  I = {
    HAS_INTERACTED: 1,
    ALL_MESSAGES: 2,
    ONLY_MENTIONS: 4,
    NO_MESSAGES: 8
  };

function T() {
  return [{
    setting: I.ALL_MESSAGES,
    label: l.Z.Messages.FORM_LABEL_ALL_MESSAGES
  }, {
    setting: I.ONLY_MENTIONS,
    label: l.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
  }, {
    setting: I.NO_MESSAGES,
    label: l.Z.Messages.FORM_LABEL_NOTHING
  }]
}(s = i || (i = {})).EMBED = "Embed", s.BROWSER = "Thread Browser", s.POPOUT = "Active Threads Popout", s.CHANNEL_LIST = "Channel List", s.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal", s.INBOX = "Inbox", s.FORUM = "Forum", s.VOICE_AUTO_OPEN = "Voice Auto Open", (o = r || (r = {})).LATEST_ACTIVITY = "Last Message", o.CREATION_DATE = "Creation";
let h = new Set([a.evJ.TOO_MANY_ATTACHMENTS, a.evJ.EXPLICIT_CONTENT, a.evJ.ENTITY_TOO_LARGE, a.evJ.EXPLICIT_CONTENT]),
  S = new Set([a.evJ.AUTOMOD_MESSAGE_BLOCKED, a.evJ.AUTOMOD_TITLE_BLOCKED])