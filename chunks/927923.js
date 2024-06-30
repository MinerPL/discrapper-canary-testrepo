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
}), n(610138), n(216116), n(78328), n(815648), n(47120);
var r, i, a, o, s = n(243814), l = n(981631);
let u = 'xbox://communitylinking/donut/audio', c = 'https://www.xbox.com/en-US/apps/xbox-app-for-mobile', d = 'https://login.live.com', _ = [
        s.x.VOICE,
        s.x.DM_CHANNELS_READ,
        s.x.GUILDS,
        s.x.GUILDS_MEMBERS_READ,
        s.x.IDENTIFY,
        s.x.CONNECTIONS,
        s.x.ACTIVITIES_READ
    ], E = [
        s.x.VOICE,
        s.x.DM_CHANNELS_READ,
        s.x.GUILDS,
        s.x.GUILDS_MEMBERS_READ,
        s.x.IDENTIFY,
        s.x.CONNECTIONS
    ], f = 'https://my.account.sony.com', h = e => {
        let {
                guildId: t,
                channelName: n,
                guildName: r,
                channelId: i,
                muted: a,
                deafened: o,
                nonce: s
            } = e, l = {
                channelid: i,
                guildid: t,
                channelname: n,
                guildname: r,
                muted: String(a),
                deafened: String(o)
            };
        return null != s && (l.nonce = s), new URLSearchParams(l);
    };
(a = r || (r = {})).PLAYSTATION = 'playstation', a.XBOX = 'xbox';
let p = new Set([
    'xbox',
    'playstation'
]);
l.M7m.XBOX, l.M7m.PS5, (o = i || (i = {}))[o.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 270000] = 'CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED', o[o.CONSOLE_DEVICE_UNAVAILABLE = 270001] = 'CONSOLE_DEVICE_UNAVAILABLE', o[o.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = 'CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS', o[o.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = 'CONSOLE_DEVICE_COMMUNICATION_RESTRICTED', o[o.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = 'CONSOLE_DEVICE_INVALID_POWER_MODE', o[o.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = 'CONSOLE_DEVICE_ACCOUNT_LINK_ERROR', o[o.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = 'CONSOLE_DEVICE_MAX_MEMBERS_REACHED', o[o.CONSOLE_DEVICE_BAD_COMMAND = 270007] = 'CONSOLE_DEVICE_BAD_COMMAND';
let m = new Set([270000]), I = 'console error alert';
