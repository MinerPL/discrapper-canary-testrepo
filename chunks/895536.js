n.d(t, {
    NR: function () {
        return a;
    },
    Ob: function () {
        return l;
    },
    ZI: function () {
        return o;
    },
    m1: function () {
        return u;
    },
    uc: function () {
        return s;
    }
});
var r = n(987170), i = n(987338);
let a = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_voice_call_vanilla',
        label: 'CTP voice call - A/A test - Vanilla',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.VOICE_CALL,
        treatments: [{
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }]
    }), o = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_voice_call_filters',
        label: 'CTP voice call - A/A test - Filters',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.VOICE_CALL,
        treatments: [{
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }]
    }), s = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_voice_call_multiple_buckets',
        label: 'CTP voice call - A/A test - Multiple buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.VOICE_CALL,
        treatments: [
            {
                id: 1,
                label: 'Treatment 1',
                config: { doSomething: !0 }
            },
            {
                id: 2,
                label: 'Treatment 2',
                config: { doSomething: !0 }
            }
        ]
    }), l = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_voice_call_everyone',
        label: 'CTP voice call - A/A test - Everyone',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.VOICE_CALL,
        treatments: [{
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }]
    }), u = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_voice_call_uneven_buckets',
        label: 'CTP voice call - A/A test - Uneven buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.VOICE_CALL,
        treatments: [{
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }]
    });
