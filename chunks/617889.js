n.d(t, {
    B: function () {
        return c;
    }
});
var s = n(470079), o = n(918701), r = n(988303), a = n(658590), i = n(448018), l = n(46140);
let c = (e, t) => {
    let n = (0, o.zK)(e, l.S7.QUEST_BAR_V2), c = (0, a.a)(e), {
            primaryVariant: d,
            progressVariant: u
        } = r.u.useExperiment({ location: l.dr.QUESTS_BAR }, { autoTrackExposure: t && n });
    return s.useMemo(() => c ? (0, i.v)(e, r.P.V2, r.P.V2) : n ? (0, i.v)(e, d, u) : (0, i.v)(e, r.P.V1, r.P.V1), [
        c,
        d,
        u,
        e,
        n
    ]);
};
