n.d(t, {
    J_: function () {
        return l;
    },
    R6: function () {
        return a;
    }
});
var i = n(818083), s = n(987338);
let a = (0, i.B)({
        kind: 'user',
        id: s.fL,
        label: 'Trigger Debugging User AA Experiment',
        defaultConfig: { inUse: !1 },
        treatments: [{
                id: 1,
                label: 'On',
                config: { inUse: !0 }
            }]
    }), r = (0, i.B)({
        kind: 'guild',
        id: s.nz,
        label: 'Trigger Debugging Guild AA Experiment',
        defaultConfig: { inUse: !1 },
        treatments: [{
                id: 1,
                label: 'On',
                config: { inUse: !0 }
            }]
    }), l = e => {
        let t = 'guild trigger debug', n = 'user trigger debug';
        r.useExperiment({
            location: t,
            guildId: e
        }, { autoTrackExposure: !1 }), r.trackExposure({
            location: t,
            guildId: e
        }), a.useExperiment({ location: n }, { autoTrackExposure: !1 }), a.trackExposure({ location: n });
    };
