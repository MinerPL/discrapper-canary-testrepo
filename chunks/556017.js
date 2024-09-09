n.d(t, {
    I: function () {
        return l;
    },
    N: function () {
        return r;
    }
});
var i = n(470079),
    a = n(818083),
    s = n(695346);
let r = (0, a.B)({
    kind: 'user',
    id: '2022-01_discovery_iar',
    label: 'Ability to report servers in Server Discovery',
    defaultConfig: { canSeeInAppReportingButtons: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show IAR buttons in Server Discovery',
            config: { canSeeInAppReportingButtons: !0 }
        }
    ]
});
function l() {
    let { canSeeInAppReportingButtons: e } = r.useExperiment({ location: '7a11e2_1' }, { autoTrackExposure: !1 }),
        t = s.Sb.useSetting();
    return (
        i.useEffect(() => {
            r.trackExposure({ location: '7a11e2_2' });
        }, []),
        e || t
    );
}
