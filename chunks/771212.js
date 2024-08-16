n.d(t, {
    Fv: function () {
        return o;
    },
    eA: function () {
        return c;
    }
});
var s = n(470079),
    a = n(818083),
    i = n(594174),
    r = n(981631);
let l = (0, a.B)({
    kind: 'guild',
    id: '2022-03_guild_access_rate_insight_experiment',
    label: 'Guild Access Rate Insight Experiment',
    defaultConfig: { showAccessRate: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show guild access rate in insights',
            config: { showAccessRate: !0 }
        }
    ]
});
function o(e) {
    var t;
    return (
        (null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) &&
        l.getCurrentConfig({
            guildId: e,
            location: '77b4b2_1'
        }).showAccessRate
    );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (
        s.useEffect(() => {
            !t &&
                null != e &&
                l.trackExposure({
                    guildId: e,
                    location: '77b4b2_2'
                });
        }, [e, t]),
        l.useExperiment(
            {
                guildId: null != e ? e : r.lds,
                location: '77b4b2_3'
            },
            {
                autoTrackExposure: !1,
                disable: t || null == e
            }
        )
    );
}
