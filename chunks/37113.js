n.d(t, {
    L9: function () {
        return E;
    },
    LY: function () {
        return r;
    },
    ND: function () {
        return h;
    },
    WC: function () {
        return m;
    },
    aW: function () {
        return _;
    },
    af: function () {
        return A;
    },
    k0: function () {
        return S;
    },
    km: function () {
        return g;
    },
    no: function () {
        return f;
    },
    o6: function () {
        return T;
    },
    tI: function () {
        return a;
    },
    ws: function () {
        return i;
    },
    z8: function () {
        return I;
    }
}),
    n(411104);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(981631),
    c = n(474936),
    d = n(689938);
function _(e) {
    switch (e) {
        case 480:
            return 480;
        case 720:
            return 720;
        case 1080:
            return 1080;
        case 1440:
            return 1440;
        case 0:
            return 0;
        default:
            throw Error('Unknown resolution: '.concat(e));
    }
}
function E(e) {
    switch (e) {
        case 5:
            return 5;
        case 15:
            return 15;
        case 30:
            return 30;
        case 60:
            return 60;
        default:
            throw Error('Unknown frame rate: '.concat(e));
    }
}
((s = r || (r = {}))[(s.RESOLUTION_480 = 480)] = 'RESOLUTION_480'), (s[(s.RESOLUTION_720 = 720)] = 'RESOLUTION_720'), (s[(s.RESOLUTION_1080 = 1080)] = 'RESOLUTION_1080'), (s[(s.RESOLUTION_1440 = 1440)] = 'RESOLUTION_1440'), (s[(s.RESOLUTION_SOURCE = 0)] = 'RESOLUTION_SOURCE'), ((o = i || (i = {}))[(o.FPS_5 = 5)] = 'FPS_5'), (o[(o.FPS_15 = 15)] = 'FPS_15'), (o[(o.FPS_30 = 30)] = 'FPS_30'), (o[(o.FPS_60 = 60)] = 'FPS_60'), ((l = a || (a = {}))[(l.PRESET_VIDEO = 1)] = 'PRESET_VIDEO'), (l[(l.PRESET_DOCUMENTS = 2)] = 'PRESET_DOCUMENTS'), (l[(l.PRESET_CUSTOM = 3)] = 'PRESET_CUSTOM');
let f = {
        2: [
            {
                resolution: 0,
                fps: 15
            },
            {
                resolution: 0,
                fps: 5
            }
        ],
        1: [
            {
                resolution: 1440,
                fps: 60
            },
            {
                resolution: 1080,
                fps: 60
            },
            {
                resolution: 720,
                fps: 60
            },
            {
                resolution: 720,
                fps: 30
            }
        ],
        3: []
    },
    h = [
        {
            resolution: 0,
            fps: 60,
            quality: c.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 30,
            quality: c.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 15,
            quality: c.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 5,
            preset: 2
        },
        {
            resolution: 1440,
            fps: 60,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1440,
            fps: 30,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1440,
            fps: 15,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 60,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 30,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 15,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 720,
            fps: 60,
            guildPremiumTier: u.Eu4.TIER_1,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 720,
            fps: 30
        },
        {
            resolution: 720,
            fps: 15
        },
        {
            resolution: 720,
            fps: 5
        },
        {
            resolution: 480,
            fps: 60,
            guildPremiumTier: u.Eu4.TIER_1,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 480,
            fps: 30
        },
        {
            resolution: 480,
            fps: 15
        },
        {
            resolution: 480,
            fps: 5
        }
    ];
function p(e, t) {
    return {
        value: e,
        get label() {
            return null != t ? t() : e;
        }
    };
}
let m = [p(720), p(1080), p(1440), p(0, () => d.Z.Messages.SCREENSHARE_SOURCE)],
    I = [p(720), p(1080), p(1440)],
    T = (e) => (0 === e ? d.Z.Messages.SCREENSHARE_SOURCE : d.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: e })),
    g = [p(480, () => T(480)), p(720, () => T(720)), p(1080, () => T(1080)), p(1440, () => T(1440)), p(0, () => T(0))],
    S = [p(15), p(30), p(60)],
    A = [p(15, () => d.Z.Messages.STREAM_FPS_OPTION.format({ value: 15 })), p(30, () => d.Z.Messages.STREAM_FPS_OPTION.format({ value: 30 })), p(60, () => d.Z.Messages.STREAM_FPS_OPTION.format({ value: 60 }))];
