n.d(t, {
    KL: function () {
        return E;
    },
    Lc: function () {
        return h;
    },
    Lw: function () {
        return I;
    },
    Ry: function () {
        return i;
    },
    X3: function () {
        return c;
    },
    YE: function () {
        return r;
    },
    al: function () {
        return p;
    },
    bJ: function () {
        return u;
    },
    e8: function () {
        return m;
    },
    tA: function () {
        return _;
    },
    uu: function () {
        return f;
    },
    zM: function () {
        return d;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(243814),
    l = n(981631);
let u = 'xbox://communitylinking/donut/audio',
    c = 'https://www.xbox.com/en-US/apps/xbox-app-for-mobile',
    d = 'https://login.live.com',
    _ = [o.x.VOICE, o.x.DM_CHANNELS_READ, o.x.GUILDS, o.x.GUILDS_MEMBERS_READ, o.x.IDENTIFY, o.x.CONNECTIONS, o.x.ACTIVITIES_READ],
    E = [o.x.VOICE, o.x.DM_CHANNELS_READ, o.x.GUILDS, o.x.GUILDS_MEMBERS_READ, o.x.IDENTIFY, o.x.CONNECTIONS],
    f = 'https://my.account.sony.com',
    h = (e) => {
        let { guildId: t, channelName: n, guildName: r, channelId: i, muted: a, deafened: s, nonce: o } = e,
            l = {
                channelid: i,
                guildid: t,
                channelname: n,
                guildname: r,
                muted: String(a),
                deafened: String(s)
            };
        return null != o && (l.nonce = o), new URLSearchParams(l);
    };
((a = r || (r = {})).PLAYSTATION = 'playstation'), (a.XBOX = 'xbox');
let p = new Set(['xbox', 'playstation']);
l.M7m.XBOX, l.M7m.PS5, ((s = i || (i = {}))[(s.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 270000)] = 'CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED'), (s[(s.CONSOLE_DEVICE_UNAVAILABLE = 270001)] = 'CONSOLE_DEVICE_UNAVAILABLE'), (s[(s.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002)] = 'CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS'), (s[(s.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003)] = 'CONSOLE_DEVICE_COMMUNICATION_RESTRICTED'), (s[(s.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004)] = 'CONSOLE_DEVICE_INVALID_POWER_MODE'), (s[(s.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005)] = 'CONSOLE_DEVICE_ACCOUNT_LINK_ERROR'), (s[(s.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006)] = 'CONSOLE_DEVICE_MAX_MEMBERS_REACHED'), (s[(s.CONSOLE_DEVICE_BAD_COMMAND = 270007)] = 'CONSOLE_DEVICE_BAD_COMMAND');
let m = new Set([270000]),
    I = 'console error alert';
