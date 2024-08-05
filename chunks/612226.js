t.d(n, {
  Q2: function() {
return i;
  },
  Rv: function() {
return W;
  },
  U6: function() {
return F;
  },
  UD: function() {
return V;
  },
  oT: function() {
return Y;
  }
}), t(411104), t(653041);
var i, l, o = t(346610),
  r = t(186070),
  E = t(185514),
  a = t(395878),
  u = t(321697),
  s = t(775774),
  d = t(570408),
  _ = t(438846),
  c = t(360038),
  C = t(175724),
  I = t(705371),
  A = t(138976),
  S = t(296805),
  T = t(561716),
  L = t(239748),
  N = t(337482),
  O = t(679080),
  h = t(777019),
  D = t(523147),
  g = t(400332),
  f = t(510761),
  R = t(189509),
  p = t(673553),
  P = t(280492),
  Z = t(746887),
  M = t(861007),
  G = t(300644),
  b = t(721383),
  U = t(207234),
  H = t(997292),
  m = t(743810),
  v = t(620212),
  k = t(188051),
  K = t(547420),
  y = t(981631),
  B = t(689938);

function V(e) {
  switch (e) {
case 'NAVIGATION':
  return B.Z.Messages.USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
case 'VOICE_AND_VIDEO':
  return B.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
case 'CHAT':
  return B.Z.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
case 'MISCELLANEOUS':
  return B.Z.Messages.USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
case 'MESSAGE':
  return B.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
case 'DND':
  return B.Z.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE;
  }
}

function F(e) {
  switch (e) {
case 'MESSAGE':
  return B.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
case 'DND':
  return B.Z.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
default:
  return null;
  }
}

function w() {
  for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
n[t] = arguments[t];
  return n.map(e => {
let n = Y[e];
if (null == n)
  throw Error('getBindsFor(...): No bind for '.concat(n));
return n.binds[0];
  });
}
(l = i || (i = {})).NAVIGATION = 'NAVIGATION', l.CHAT = 'CHAT', l.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO', l.MISCELLANEOUS = 'MISCELLANEOUS', l.MESSAGE = 'MESSAGE', l.DND = 'DND';
let Y = {
  [y.EkH.SERVER_NEXT]: f.nq,
  [y.EkH.SERVER_PREV]: f.X3,
  [y.EkH.CHANNEL_NEXT]: E.tQ,
  [y.EkH.CHANNEL_PREV]: E.x5,
  [y.EkH.NAVIGATE_BACK]: E.Nx,
  [y.EkH.NAVIGATE_FORWARD]: E.On,
  [y.EkH.UNREAD_NEXT]: m.pd,
  [y.EkH.UNREAD_PREV]: m.wk,
  [y.EkH.MENTION_CHANNEL_NEXT]: m.Nv,
  [y.EkH.MENTION_CHANNEL_PREV]: m.uX,
  [y.EkH.TOGGLE_PREVIOUS_GUILD]: E.$c,
  [y.EkH.JUMP_TO_GUILD]: c.u,
  [y.EkH.SUBMIT]: R.z,
  [y.EkH.TEXTAREA_FOCUS]: p.U,
  [y.EkH.MARK_CHANNEL_READ]: C.f,
  [y.EkH.MARK_SERVER_READ]: I.l,
  [y.EkH.TOGGLE_CHANNEL_PINS]: M.u,
  [y.EkH.TOGGLE_INBOX_UNREADS_TAB]: U.P,
  [y.EkH.MARK_TOP_INBOX_CHANNEL_READ]: U.M,
  [y.EkH.TOGGLE_USERS]: H.r,
  [y.EkH.TOGGLE_HELP]: G.O,
  [y.EkH.VIBE_WITH_WUMPUS]: k.w,
  [y.EkH.TOGGLE_MUTE]: P.iN,
  [y.EkH.TOGGLE_DEAFEN]: P.oV,
  [y.EkH.TOGGLE_CATEGORY_COLLAPSED]: Z.u,
  [y.EkH.SEARCH_SOUNDBOARD]: D.Z,
  [y.EkH.SCROLL_UP]: N.B2,
  [y.EkH.SCROLL_DOWN]: N.gN,
  [y.EkH.QUICKSWITCHER_SHOW]: T.$,
  [y.EkH.CREATE_DM_GROUP]: a.K,
  [y.EkH.SEARCH_EMOJIS]: O.S,
  [y.EkH.SEARCH_GIFS]: h.O,
  [y.EkH.SEARCH_STICKERS]: g.U,
  [y.EkH.TOGGLE_HOTKEYS]: b._,
  [y.EkH.JUMP_TO_FIRST_UNREAD]: A.O,
  [y.EkH.CREATE_GUILD]: u.r,
  [y.EkH.UPLOAD_FILE]: v.U,
  [y.EkH.RETURN_TO_AUDIO_CHANNEL]: L.F,
  [y.EkH.CALL_ACCEPT]: r.IL,
  [y.EkH.CALL_START]: r.FI,
  [y.EkH.FOCUS_SEARCH]: d.I,
  [y.EkH.JUMP_TO_CURRENT_CALL]: _.K,
  [y.EkH.ZOOM_IN]: K.UF,
  [y.EkH.ZOOM_OUT]: K.RC,
  [y.EkH.ZOOM_RESET]: K.MY,
  [y.EkH.OPEN_APP_DIRECTORY]: S.T,
  [y.EkH.BROWSER_DEVTOOLS]: s.p
};

function W() {
  let e = [{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
  binds: w(y.EkH.SERVER_PREV, y.EkH.SERVER_NEXT),
  group: 'NAVIGATION'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
  binds: w(y.EkH.CHANNEL_PREV, y.EkH.CHANNEL_NEXT),
  group: 'NAVIGATION'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
  binds: w(y.EkH.NAVIGATE_BACK, y.EkH.NAVIGATE_FORWARD),
  group: 'NAVIGATION'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
  binds: w(y.EkH.UNREAD_PREV, y.EkH.UNREAD_NEXT),
  group: 'NAVIGATION'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
  binds: w(y.EkH.MENTION_CHANNEL_PREV, y.EkH.MENTION_CHANNEL_NEXT),
  group: 'NAVIGATION'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
  binds: w(y.EkH.JUMP_TO_CURRENT_CALL),
  group: 'NAVIGATION'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
  binds: w(y.EkH.TOGGLE_PREVIOUS_GUILD),
  group: 'NAVIGATION'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
  binds: w(y.EkH.QUICKSWITCHER_SHOW),
  group: 'NAVIGATION'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
  binds: w(y.EkH.CREATE_GUILD),
  group: 'NAVIGATION',
  groupEnd: !0
},
{
  description: B.Z.Messages.DND_OPERATION_LABEL_START,
  binds: ['mod+d'],
  group: 'DND'
},
{
  description: B.Z.Messages.DND_OPERATION_LABEL_MOVE,
  binds: [
    'up',
    'down'
  ],
  group: 'DND'
},
{
  description: B.Z.Messages.DND_OPERATION_LABEL_DROP,
  binds: [
    'spacebar',
    'enter'
  ],
  group: 'DND'
},
{
  description: B.Z.Messages.DND_OPERATION_LABEL_CANCEL,
  binds: ['esc'],
  group: 'DND',
  groupEnd: !0
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
  binds: w(y.EkH.MARK_SERVER_READ),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
  binds: w(y.EkH.MARK_CHANNEL_READ),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
  binds: w(y.EkH.CREATE_DM_GROUP),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
  binds: w(y.EkH.TOGGLE_CHANNEL_PINS),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
  binds: w(y.EkH.TOGGLE_INBOX_UNREADS_TAB),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
  binds: w(y.EkH.MARK_TOP_INBOX_CHANNEL_READ),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
  binds: w(y.EkH.TOGGLE_USERS),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
  binds: w(y.EkH.SEARCH_EMOJIS),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
  binds: w(y.EkH.SEARCH_GIFS),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
  binds: w(y.EkH.SEARCH_STICKERS),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
  binds: w(y.EkH.SCROLL_UP, y.EkH.SCROLL_DOWN),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
  binds: w(y.EkH.JUMP_TO_FIRST_UNREAD),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
  binds: w(y.EkH.TEXTAREA_FOCUS),
  group: 'CHAT'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
  binds: w(y.EkH.UPLOAD_FILE),
  group: 'CHAT',
  groupEnd: !0
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
  binds: w(y.EkH.TOGGLE_MUTE),
  group: 'VOICE_AND_VIDEO'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
  binds: w(y.EkH.TOGGLE_DEAFEN),
  group: 'VOICE_AND_VIDEO'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
  binds: w(y.EkH.CALL_ACCEPT),
  group: 'VOICE_AND_VIDEO'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
  binds: w(y.EkH.MARK_CHANNEL_READ),
  group: 'VOICE_AND_VIDEO'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
  binds: w(y.EkH.CALL_START),
  group: 'VOICE_AND_VIDEO',
  groupEnd: !0
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_SOUNDBOARD,
  binds: w(y.EkH.SEARCH_SOUNDBOARD),
  group: 'VOICE_AND_VIDEO'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
  binds: w(y.EkH.TOGGLE_HELP),
  group: 'MISCELLANEOUS'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
  binds: w(y.EkH.FOCUS_SEARCH),
  group: 'MISCELLANEOUS'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
  binds: ['h+h+right+n+k'],
  group: 'MISCELLANEOUS',
  groupEnd: !0
},
{
  description: B.Z.Messages.EDIT_MESSAGE,
  binds: ['e'],
  group: 'MESSAGE'
},
{
  description: B.Z.Messages.DELETE_MESSAGE,
  binds: ['backspace'],
  group: 'MESSAGE'
},
{
  description: B.Z.Messages.PIN_MESSAGE,
  binds: ['p'],
  group: 'MESSAGE'
},
{
  description: B.Z.Messages.ADD_REACTION,
  binds: ['plus'],
  group: 'MESSAGE'
},
{
  description: B.Z.Messages.MESSAGE_ACTION_REPLY,
  binds: ['r'],
  group: 'MESSAGE'
},
{
  description: B.Z.Messages.COPY_TEXT,
  binds: ['mod+c'],
  group: 'MESSAGE'
},
{
  description: B.Z.Messages.MARK_UNREAD,
  binds: ['alt+enter'],
  group: 'MESSAGE'
},
{
  description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
  binds: ['escape'],
  group: 'MESSAGE',
  groupEnd: !0
},
{
  description: B.Z.Messages.USER_SETTINGS_KEYBIND_VIBE_WITH_WUMPUS_DESCRIPTION,
  binds: w(y.EkH.VIBE_WITH_WUMPUS),
  group: 'MISCELLANEOUS'
}
  ];
  return (0, o.WT)({
location: 'keybinds'
  }, {
autoTrackExposure: !1
  }).canForwardMessages && e.push({
description: B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FORWARD_MESSAGE,
binds: ['f'],
group: 'MESSAGE'
  }), e;
}
n.ZP = 12633 == t.j ? Y : null;