n.d(t, {
  AX: function() {
return u;
  },
  M3: function() {
return d;
  },
  RN: function() {
return p;
  },
  SX: function() {
return i;
  },
  dg: function() {
return E;
  },
  fZ: function() {
return m;
  },
  iN: function() {
return f;
  },
  on: function() {
return r;
  },
  vw: function() {
return c;
  },
  yX: function() {
return _;
  },
  zb: function() {
return h;
  }
}), n(47120);
var r, i, a, o, s = n(981631),
  l = n(689938);
let u = 4320,
  c = 50,
  d = 100000,
  _ = 50,
  E = 25,
  f = {
HAS_INTERACTED: 1,
ALL_MESSAGES: 2,
ONLY_MENTIONS: 4,
NO_MESSAGES: 8
  };

function h() {
  return [{
  setting: f.ALL_MESSAGES,
  label: l.Z.Messages.FORM_LABEL_ALL_MESSAGES
},
{
  setting: f.ONLY_MENTIONS,
  label: l.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
},
{
  setting: f.NO_MESSAGES,
  label: l.Z.Messages.FORM_LABEL_NOTHING
}
  ];
}
(a = r || (r = {})).EMBED = 'Embed', a.BROWSER = 'Thread Browser', a.POPOUT = 'Active Threads Popout', a.CHANNEL_LIST = 'Channel List', a.GUILD_ACTIVE_THREADS_MODAL = 'Guild Active Threads Modal', a.INBOX = 'Inbox', a.FORUM = 'Forum', a.VOICE_AUTO_OPEN = 'Voice Auto Open', (o = i || (i = {})).LATEST_ACTIVITY = 'Last Message', o.CREATION_DATE = 'Creation';
let p = new Set([
s.evJ.TOO_MANY_ATTACHMENTS,
s.evJ.EXPLICIT_CONTENT,
s.evJ.ENTITY_TOO_LARGE,
s.evJ.EXPLICIT_CONTENT
  ]),
  m = new Set([
s.evJ.AUTOMOD_MESSAGE_BLOCKED,
s.evJ.AUTOMOD_TITLE_BLOCKED
  ]);