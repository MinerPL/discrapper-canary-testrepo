n.d(t, {
  Z: function() {
return p;
  },
  r: function() {
return i;
  }
}), n(653041);
var i, a, l = n(481060),
  s = n(620662),
  r = n(933557),
  o = n(377171),
  c = n(699516),
  d = n(594174),
  u = n(981631),
  h = n(689938);

function p(e) {
  let {
canAttachFiles: t,
canStartThreads: n,
useSlate: i,
canUseApplicationCommands: a,
hasClips: p,
channel: m,
activities: _,
newClipsCount: f,
canPostPolls: E,
canLaunchActivities: C,
appContext: g
  } = e, I = [];
  return t && (I.push({
type: 'UPLOAD_A_FILE',
icon: l.FileUpIcon,
display: h.Z.Messages.CHAT_ATTACH_UPLOAD_A_FILE
  }), I.push({
type: 'UPLOAD_TEXT_AS_FILE',
icon: l.FileUpIcon,
display: h.Z.Messages.CHAT_ATTACH_UPLOAD_TEXT_AS_FILE
  })), p && t && g !== u.IlC.POPOUT && I.push({
type: 'CLIPS',
icon: l.ClipsIcon,
display: h.Z.Messages.CLIPS_SHARE_A_CLIP,
badgeVal: f,
badgeColor: o.Z.BG_BRAND
  }), n && I.push({
type: 'CREATE_THREAD',
icon: l.ThreadPlusIcon,
display: h.Z.Messages.CREATE_THREAD
  }), E && I.push({
type: 'POLL',
icon: l.PollsIcon,
display: h.Z.Messages.CREATE_POLL
  }), i && a && I.push({
type: 'SLASH_COMMAND',
icon: l.AppsIcon,
display: h.Z.Messages.CHAT_ATTACH_USE_SLASH_COMMAND
  }), C && I.push({
type: 'ACTIVITY',
icon: l.ActivitiesIcon,
display: h.Z.Messages.EMBEDDED_ACTIVITIES_START_ACTIVITY_LABEL
  }), _.forEach(e => {
if (!(0, s.Z)(e, u.xjy.EMBEDDED))
  e.type === u.IIU.PLAYING && (0, s.Z)(e, u.xjy.JOIN) && I.push({
    type: 'INVITE_TO_GAME',
    icon: l.DpadIcon,
    display: h.Z.Messages.CHAT_ATTACH_INVITE_TO_PLAY_GAME.format({
      channel: (0, r.F6)(m, d.default, c.Z, !0),
      game: null != e ? e.name : ''
    }),
    activity: e
  }), e.type === u.IIU.LISTENING && (0, s.Z)(e, u.xjy.SYNC) && I.push({
    type: 'INVITE_TO_LISTEN',
    icon: l.UserPlayIcon,
    display: h.Z.Messages.CHAT_ATTACH_INVITE_TO_LISTEN.format({
      channel: (0, r.F6)(m, d.default, c.Z, !0),
      name: null != e ? e.name : ''
    }),
    activity: e
  }), e.type === u.IIU.WATCHING && (0, s.Z)(e, u.xjy.SYNC) && I.push({
    type: 'INVITE_TO_WATCH',
    icon: l.EyeIcon,
    display: h.Z.Messages.CHAT_ATTACH_INVITE_TO_WATCH.format({
      channel: (0, r.F6)(m, d.default, c.Z, !0),
      name: null != e ? e.name : ''
    }),
    activity: e
  });
  }), I;
}
(a = i || (i = {})).UPLOAD_A_FILE = 'UPLOAD_A_FILE', a.UPLOAD_TEXT_AS_FILE = 'UPLOAD_TEXT_AS_FILE', a.INVITE_TO_PLAY_GAME = 'INVITE_TO_GAME', a.INVITE_TO_LISTEN = 'INVITE_TO_LISTEN', a.INVITE_TO_WATCH = 'INVITE_TO_WATCH', a.CREATE_THREAD = 'CREATE_THREAD', a.SLASH_COMMAND = 'SLASH_COMMAND', a.CLIPS = 'CLIPS', a.POLL = 'POLL', a.ACTIVITY = 'ACTIVITY';