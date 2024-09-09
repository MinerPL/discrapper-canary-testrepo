n.r(t),
    n.d(t, {
        INVITE_OPTIONS_100_TIMES: function () {
            return o;
        },
        INVITE_OPTIONS_10_TIMES: function () {
            return a;
        },
        INVITE_OPTIONS_12_HOURS: function () {
            return f;
        },
        INVITE_OPTIONS_1_DAY: function () {
            return T;
        },
        INVITE_OPTIONS_1_HOUR: function () {
            return N;
        },
        INVITE_OPTIONS_25_TIMES: function () {
            return _;
        },
        INVITE_OPTIONS_30_MINUTES: function () {
            return S;
        },
        INVITE_OPTIONS_50_TIMES: function () {
            return l;
        },
        INVITE_OPTIONS_5_TIMES: function () {
            return u;
        },
        INVITE_OPTIONS_6_HOURS: function () {
            return O;
        },
        INVITE_OPTIONS_7_DAYS: function () {
            return c;
        },
        INVITE_OPTIONS_FOREVER: function () {
            return d;
        },
        INVITE_OPTIONS_ONCE: function () {
            return I;
        },
        INVITE_OPTIONS_UNLIMITED: function () {
            return s;
        },
        MAX_AGE_OPTIONS: function () {
            return m;
        },
        MAX_USES_OPTIONS: function () {
            return E;
        }
    });
var r = n(689938);
function i(e, t) {
    return {
        value: e,
        get label() {
            return t();
        }
    };
}
let s = i(0, () => r.Z.Messages.MAX_USES.format({ maxUses: 0 })),
    I = i(1, () => r.Z.Messages.MAX_USES.format({ maxUses: 1 })),
    u = i(5, () => r.Z.Messages.MAX_USES.format({ maxUses: 5 })),
    a = i(10, () => r.Z.Messages.MAX_USES.format({ maxUses: 10 })),
    _ = i(25, () => r.Z.Messages.MAX_USES.format({ maxUses: 25 })),
    l = i(50, () => r.Z.Messages.MAX_USES.format({ maxUses: 50 })),
    o = i(100, () => r.Z.Messages.MAX_USES.format({ maxUses: 100 })),
    E = [s, I, u, a, _, l, o],
    S = i(1800, () => r.Z.Messages.DURATION_MINUTES.format({ minutes: 30 })),
    N = i(3600, () => r.Z.Messages.DURATION_HOURS.format({ hours: 1 })),
    O = i(21600, () => r.Z.Messages.DURATION_HOURS.format({ hours: 6 })),
    f = i(43200, () => r.Z.Messages.DURATION_HOURS.format({ hours: 12 })),
    T = i(86400, () => r.Z.Messages.DURATION_DAYS.format({ days: 1 })),
    c = i(604800, () => r.Z.Messages.DURATION_DAYS.format({ days: 7 })),
    d = i(0, () => r.Z.Messages.MAX_AGE_NEVER),
    m = [S, N, O, f, T, c, d];
