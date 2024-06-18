"use strict";
n.d(t, {
  Vk: function() {
    return d
  },
  YK: function() {
    return S
  },
  ap: function() {
    return f
  },
  bv: function() {
    return E
  },
  gl: function() {
    return I
  },
  iP: function() {
    return h
  },
  n0: function() {
    return c
  },
  nc: function() {
    return u
  },
  wF: function() {
    return N
  }
});
var i, r, s, o, a, l, u, _, d, c, E, I, T = n(358085);
let h = T.isPlatformEmbedded && ((0, T.isWindows)() || !1);

function S(e) {
  switch (e) {
    case "News Nudge":
    case "Welcome Nudge":
    case "Go Live Nudge":
    case "Go Live Non Voice Nudge":
    case "Start Broadcast Notification":
      return 0;
    case "Text Chat":
      return 1;
    case "Activity User Join":
    case "Activity Invite":
      return 3;
    case "Incoming Call":
      return 2;
    case "Clips Reminder Notification":
    case "Clips Notification":
      return 4;
    default:
      return 5
  }
}(i = u || (u = {}))[i.WELCOME = 0] = "WELCOME", i[i.NEWS = 1] = "NEWS", i[i.GO_LIVE_VOICE = 2] = "GO_LIVE_VOICE", i[i.GO_LIVE_NON_VOICE = 3] = "GO_LIVE_NON_VOICE", i[i.BROADCAST = 4] = "BROADCAST", i[i.KEYBIND_INDICATORS = 5] = "KEYBIND_INDICATORS", (r = _ || (_ = {})).PRIMARY = "PRIMARY", r.BRAND = "BRAND", r.DANGER = "DANGER", (s = d || (d = {}))[s.Nudge = 0] = "Nudge", s[s.TextChat = 1] = "TextChat", s[s.VoiceCall = 2] = "VoiceCall", s[s.Activity = 3] = "Activity", s[s.Clips = 4] = "Clips", s[s.Other = 5] = "Other", (o = c || (c = {})).NewsNudge = "News Nudge", o.WelcomeNudge = "Welcome Nudge", o.TextChat = "Text Chat", o.ActivityUserJoin = "Activity User Join", o.ActivityInvite = "Activity Invite", o.IncomingCall = "Incoming Call", o.GoLiveNudge = "Go Live Nudge", o.GoLiveNonVoiceNudge = "Go Live Non Voice Nudge", o.OverlayCrashed = "Overlay Crashed", o.StartBroadcastNotification = "Start Broadcast Notification", o.ClipsReminderNotification = "Clips Reminder Notification", o.ClipsNotification = "Clips Notification", o.KeybindIndicatorsNotification = "Keybind Indicators Notification", (a = E || (E = {}))[a.Viewed = 0] = "Viewed", a[a.Clicked = 1] = "Clicked";
let f = Object.freeze({
  LOW: "background-opacity-low",
  MEDIUM: "background-opacity-medium",
  HIGH: "background-opacity-high",
  FULL: "background-opacity-full",
  DISABLED: null
});
(l = I || (I = {}))[l.Disabled = 0] = "Disabled", l[l.Hook = 1] = "Hook", l[l.OutOfProcess = 2] = "OutOfProcess";
let N = Object.freeze({
  BOTTOM: 0,
  LOWER: .25,
  UPPER: .75,
  TOP: 1
})