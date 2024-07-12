n.d(t, {
  Vk: function() {
return d;
  },
  YK: function() {
return m;
  },
  ap: function() {
return I;
  },
  bv: function() {
return E;
  },
  gl: function() {
return f;
  },
  iP: function() {
return p;
  },
  n0: function() {
return _;
  },
  nc: function() {
return u;
  },
  wF: function() {
return T;
  }
});
var r, i, a, o, s, l, u, c, d, _, E, f, h = n(358085);
let p = h.isPlatformEmbedded && ((0, h.isWindows)() || !1);

function m(e) {
  switch (e) {
case 'News Nudge':
case 'Welcome Nudge':
case 'Go Live Nudge':
case 'Go Live Non Voice Nudge':
case 'Start Broadcast Notification':
  return 0;
case 'Text Chat':
  return 1;
case 'Activity User Join':
case 'Activity Invite':
  return 3;
case 'Incoming Call':
  return 2;
case 'Clips Reminder Notification':
case 'Clips Notification':
  return 4;
default:
  return 5;
  }
}
(r = u || (u = {}))[r.WELCOME = 0] = 'WELCOME', r[r.NEWS = 1] = 'NEWS', r[r.GO_LIVE_VOICE = 2] = 'GO_LIVE_VOICE', r[r.GO_LIVE_NON_VOICE = 3] = 'GO_LIVE_NON_VOICE', r[r.BROADCAST = 4] = 'BROADCAST', r[r.KEYBIND_INDICATORS = 5] = 'KEYBIND_INDICATORS', (i = c || (c = {})).PRIMARY = 'PRIMARY', i.BRAND = 'BRAND', i.DANGER = 'DANGER', (a = d || (d = {}))[a.Nudge = 0] = 'Nudge', a[a.TextChat = 1] = 'TextChat', a[a.VoiceCall = 2] = 'VoiceCall', a[a.Activity = 3] = 'Activity', a[a.Clips = 4] = 'Clips', a[a.Other = 5] = 'Other', (o = _ || (_ = {})).NewsNudge = 'News Nudge', o.WelcomeNudge = 'Welcome Nudge', o.TextChat = 'Text Chat', o.ActivityUserJoin = 'Activity User Join', o.ActivityInvite = 'Activity Invite', o.IncomingCall = 'Incoming Call', o.GoLiveNudge = 'Go Live Nudge', o.GoLiveNonVoiceNudge = 'Go Live Non Voice Nudge', o.OverlayCrashed = 'Overlay Crashed', o.StartBroadcastNotification = 'Start Broadcast Notification', o.ClipsReminderNotification = 'Clips Reminder Notification', o.ClipsNotification = 'Clips Notification', o.KeybindIndicatorsNotification = 'Keybind Indicators Notification', (s = E || (E = {}))[s.Viewed = 0] = 'Viewed', s[s.Clicked = 1] = 'Clicked';
let I = Object.freeze({
  LOW: 'background-opacity-low',
  MEDIUM: 'background-opacity-medium',
  HIGH: 'background-opacity-high',
  FULL: 'background-opacity-full',
  DISABLED: null
});
(l = f || (f = {}))[l.Disabled = 0] = 'Disabled', l[l.Hook = 1] = 'Hook', l[l.OutOfProcess = 2] = 'OutOfProcess';
let T = Object.freeze({
  BOTTOM: 0,
  LOWER: 0.25,
  UPPER: 0.75,
  TOP: 1
});