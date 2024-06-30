t.r(n), t.d(n, {
    INVITE_OPTIONS_100_TIMES: function () {
        return d;
    },
    INVITE_OPTIONS_10_TIMES: function () {
        return c;
    },
    INVITE_OPTIONS_12_HOURS: function () {
        return N;
    },
    INVITE_OPTIONS_1_DAY: function () {
        return T;
    },
    INVITE_OPTIONS_1_HOUR: function () {
        return f;
    },
    INVITE_OPTIONS_25_TIMES: function () {
        return s;
    },
    INVITE_OPTIONS_30_MINUTES: function () {
        return I;
    },
    INVITE_OPTIONS_50_TIMES: function () {
        return u;
    },
    INVITE_OPTIONS_5_TIMES: function () {
        return l;
    },
    INVITE_OPTIONS_6_HOURS: function () {
        return E;
    },
    INVITE_OPTIONS_7_DAYS: function () {
        return S;
    },
    INVITE_OPTIONS_FOREVER: function () {
        return m;
    },
    INVITE_OPTIONS_ONCE: function () {
        return o;
    },
    INVITE_OPTIONS_UNLIMITED: function () {
        return r;
    },
    MAX_AGE_OPTIONS: function () {
        return h;
    },
    MAX_USES_OPTIONS: function () {
        return _;
    }
});
var a = t(689938);
function i(e, n) {
    return {
        value: e,
        get label() {
            return n();
        }
    };
}
let r = i(0, () => a.Z.Messages.MAX_USES.format({ maxUses: 0 })), o = i(1, () => a.Z.Messages.MAX_USES.format({ maxUses: 1 })), l = i(5, () => a.Z.Messages.MAX_USES.format({ maxUses: 5 })), c = i(10, () => a.Z.Messages.MAX_USES.format({ maxUses: 10 })), s = i(25, () => a.Z.Messages.MAX_USES.format({ maxUses: 25 })), u = i(50, () => a.Z.Messages.MAX_USES.format({ maxUses: 50 })), d = i(100, () => a.Z.Messages.MAX_USES.format({ maxUses: 100 })), _ = [
        r,
        o,
        l,
        c,
        s,
        u,
        d
    ], I = i(1800, () => a.Z.Messages.DURATION_MINUTES.format({ minutes: 30 })), f = i(3600, () => a.Z.Messages.DURATION_HOURS.format({ hours: 1 })), E = i(21600, () => a.Z.Messages.DURATION_HOURS.format({ hours: 6 })), N = i(43200, () => a.Z.Messages.DURATION_HOURS.format({ hours: 12 })), T = i(86400, () => a.Z.Messages.DURATION_DAYS.format({ days: 1 })), S = i(604800, () => a.Z.Messages.DURATION_DAYS.format({ days: 7 })), m = i(0, () => a.Z.Messages.MAX_AGE_NEVER), h = [
        I,
        f,
        E,
        N,
        T,
        S,
        m
    ];
