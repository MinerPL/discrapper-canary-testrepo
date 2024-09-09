n.d(t, {
    J_: function () {
        return l;
    },
    R6: function () {
        return s;
    }
});
var i = n(818083),
    a = n(987338);
let s = (0, i.B)({
        kind: 'user',
        id: a.fL,
        label: 'Trigger Debugging User AA Experiment',
        defaultConfig: { inUse: !1 },
        treatments: [
            {
                id: 1,
                label: 'On',
                config: { inUse: !0 }
            }
        ]
    }),
    r = (0, i.B)({
        kind: 'guild',
        id: a.nz,
        label: 'Trigger Debugging Guild AA Experiment',
        defaultConfig: { inUse: !1 },
        treatments: [
            {
                id: 1,
                label: 'On',
                config: { inUse: !0 }
            }
        ]
    }),
    l = (e) => {
        let t = 'guild trigger debug',
            n = 'user trigger debug';
        r.useExperiment(
            {
                location: t,
                guildId: e
            },
            { autoTrackExposure: !1 }
        ),
            r.trackExposure({
                location: t,
                guildId: e
            }),
            s.useExperiment({ location: n }, { autoTrackExposure: !1 }),
            s.trackExposure({ location: n });
    };
