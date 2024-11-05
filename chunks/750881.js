n.d(t, {
    $W: function () {
        return d;
    },
    NR: function () {
        return h;
    },
    R4: function () {
        return f;
    },
    bA: function () {
        return c;
    },
    h9: function () {
        return i;
    },
    p7: function () {
        return _;
    },
    sb: function () {
        return u;
    }
});
var r,
    i,
    a = n(818083),
    s = n(987338);
((r = i || (i = {}))[(r.SHOW = 0)] = 'SHOW'), (r[(r.HIDE = 1)] = 'HIDE'), (r[(r.DERANK = 2)] = 'DERANK');
let o = (0, a.B)({
        kind: 'user',
        id: '2024-08_blocking_voice_states',
        label: 'Blocking Voice States (Blocker)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: s.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    enabled: !1,
                    analyticsEligible: !0
                }
            },
            {
                id: 1,
                label: 'Enabled',
                config: {
                    enabled: !0,
                    analyticsEligible: !0
                }
            }
        ]
    }),
    l = (0, a.B)({
        kind: 'user',
        id: '2024-09_blocking_voice_states_blockee',
        label: 'Blocking Voice States (Blockee)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: s.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    enabled: !1,
                    analyticsEligible: !0
                }
            },
            {
                id: 1,
                label: 'Enabled',
                config: {
                    enabled: !0,
                    analyticsEligible: !0
                }
            }
        ]
    });
function u(e) {
    let { enabled: t } = o.getCurrentConfig({ location: e });
    return t;
}
function c(e) {
    return o.useExperiment({ location: e });
}
function d(e) {
    let { enabled: t } = l.getCurrentConfig({ location: e });
    return t;
}
function f(e) {
    return l.useExperiment({ location: e });
}
function _(e) {
    let { enabled: t, analyticsEligible: n } = l.getCurrentConfig({ location: e }),
        { enabled: r, analyticsEligible: i } = o.getCurrentConfig({ location: e });
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: r,
        analyticsEligible: n || i
    };
}
function h(e) {
    let { enabled: t, analyticsEligible: n } = l.useExperiment({ location: e }),
        { enabled: r, analyticsEligible: i } = o.useExperiment({ location: e });
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: r,
        analyticsEligible: n || i
    };
}
