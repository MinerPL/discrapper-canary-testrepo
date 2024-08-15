n.d(t, {
	Vk: function () {
		return d;
	},
	YK: function () {
		return I;
	},
	ap: function () {
		return m;
	},
	bv: function () {
		return E;
	},
	gl: function () {
		return f;
	},
	iP: function () {
		return p;
	},
	n0: function () {
		return _;
	},
	nc: function () {
		return u;
	},
	wF: function () {
		return T;
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
	d,
	_,
	E,
	f,
	h = n(358085);
let p = h.isPlatformEmbedded && ((0, h.isWindows)() || !1);
function I(e) {
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
((r = u || (u = {}))[(r.WELCOME = 0)] = 'WELCOME'),
	(r[(r.NEWS = 1)] = 'NEWS'),
	(r[(r.GO_LIVE_VOICE = 2)] = 'GO_LIVE_VOICE'),
	(r[(r.GO_LIVE_NON_VOICE = 3)] = 'GO_LIVE_NON_VOICE'),
	(r[(r.BROADCAST = 4)] = 'BROADCAST'),
	(r[(r.KEYBIND_INDICATORS = 5)] = 'KEYBIND_INDICATORS'),
	((i = c || (c = {})).PRIMARY = 'PRIMARY'),
	(i.BRAND = 'BRAND'),
	(i.DANGER = 'DANGER'),
	((a = d || (d = {}))[(a.Nudge = 0)] = 'Nudge'),
	(a[(a.TextChat = 1)] = 'TextChat'),
	(a[(a.VoiceCall = 2)] = 'VoiceCall'),
	(a[(a.Activity = 3)] = 'Activity'),
	(a[(a.Clips = 4)] = 'Clips'),
	(a[(a.Other = 5)] = 'Other'),
	((s = _ || (_ = {})).NewsNudge = 'News Nudge'),
	(s.WelcomeNudge = 'Welcome Nudge'),
	(s.TextChat = 'Text Chat'),
	(s.ActivityUserJoin = 'Activity User Join'),
	(s.ActivityInvite = 'Activity Invite'),
	(s.IncomingCall = 'Incoming Call'),
	(s.GoLiveNudge = 'Go Live Nudge'),
	(s.GoLiveNonVoiceNudge = 'Go Live Non Voice Nudge'),
	(s.OverlayCrashed = 'Overlay Crashed'),
	(s.StartBroadcastNotification = 'Start Broadcast Notification'),
	(s.ClipsReminderNotification = 'Clips Reminder Notification'),
	(s.ClipsNotification = 'Clips Notification'),
	(s.KeybindIndicatorsNotification = 'Keybind Indicators Notification'),
	((o = E || (E = {}))[(o.Viewed = 0)] = 'Viewed'),
	(o[(o.Clicked = 1)] = 'Clicked');
let m = Object.freeze({
	LOW: 'background-opacity-low',
	MEDIUM: 'background-opacity-medium',
	HIGH: 'background-opacity-high',
	FULL: 'background-opacity-full',
	DISABLED: null
});
((l = f || (f = {}))[(l.Disabled = 0)] = 'Disabled'),
	(l[(l.Hook = 1)] = 'Hook'),
	(l[(l.OutOfProcess = 2)] = 'OutOfProcess');
let T = Object.freeze({
	BOTTOM: 0,
	LOWER: 0.25,
	UPPER: 0.75,
	TOP: 1
});
