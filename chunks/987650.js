n.d(t, {
    Vk: function () {
        return u;
    },
    YK: function () {
        return p;
    },
    ap: function () {
        return m;
    },
    bv: function () {
        return d;
    },
    gl: function () {
        return f;
    },
    iP: function () {
        return h;
    },
    n0: function () {
        return c;
    },
    nc: function () {
        return l;
    },
    wF: function () {
        return g;
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
    f,
    _ = n(358085);
let h = _.isPlatformEmbedded && ((0, _.isWindows)() || !1);
function p(e) {
    switch (e) {
        case 'News Nudge':
        case 'Welcome Nudge':
        case 'Go Live Nudge':
        case 'Go Live Non Voice Nudge':
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
((r = l || (l = {}))[(r.WELCOME = 0)] = 'WELCOME'), (r[(r.NEWS = 1)] = 'NEWS'), (r[(r.GO_LIVE_VOICE = 2)] = 'GO_LIVE_VOICE'), (r[(r.GO_LIVE_NON_VOICE = 3)] = 'GO_LIVE_NON_VOICE'), (r[(r.KEYBIND_INDICATORS = 4)] = 'KEYBIND_INDICATORS'), ((i = u || (u = {}))[(i.Nudge = 0)] = 'Nudge'), (i[(i.TextChat = 1)] = 'TextChat'), (i[(i.VoiceCall = 2)] = 'VoiceCall'), (i[(i.Activity = 3)] = 'Activity'), (i[(i.Clips = 4)] = 'Clips'), (i[(i.Other = 5)] = 'Other'), ((a = c || (c = {})).NewsNudge = 'News Nudge'), (a.WelcomeNudge = 'Welcome Nudge'), (a.TextChat = 'Text Chat'), (a.ActivityUserJoin = 'Activity User Join'), (a.ActivityInvite = 'Activity Invite'), (a.IncomingCall = 'Incoming Call'), (a.GoLiveNudge = 'Go Live Nudge'), (a.GoLiveNonVoiceNudge = 'Go Live Non Voice Nudge'), (a.OverlayCrashed = 'Overlay Crashed'), (a.ClipsReminderNotification = 'Clips Reminder Notification'), (a.ClipsNotification = 'Clips Notification'), (a.KeybindIndicatorsNotification = 'Keybind Indicators Notification'), (a.SendGameInvitesNotification = 'Send Game Invites Notification'), ((s = d || (d = {}))[(s.Viewed = 0)] = 'Viewed'), (s[(s.Clicked = 1)] = 'Clicked');
let m = Object.freeze({
    LOW: 'background-opacity-low',
    MEDIUM: 'background-opacity-medium',
    HIGH: 'background-opacity-high',
    FULL: 'background-opacity-full',
    DISABLED: null
});
((o = f || (f = {}))[(o.Disabled = 0)] = 'Disabled'), (o[(o.Hook = 1)] = 'Hook'), (o[(o.OutOfProcess = 2)] = 'OutOfProcess');
let g = Object.freeze({
    BOTTOM: 0,
    LOWER: 0.25,
    UPPER: 0.75,
    TOP: 1
});
