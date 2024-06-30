n.d(t, {
    E: function () {
        return f;
    }
}), n(47120);
var i = n(470079), l = n(442837), o = n(835473), u = n(594174), a = n(695103), r = n(823379), d = n(358085), c = n(317381), p = n(761122);
function f(e) {
    let t = (0, l.e7)([u.default], u.default.getCurrentUser), n = (0, l.Wu)([c.ZP], () => c.ZP.getShelfActivities(e)), f = (0, l.e7)([a.Z], () => a.Z.testModeEmbeddedApplicationId), s = n.map(e => e.application_id), v = null != f ? [
            f,
            ...s
        ] : s, Z = (0, o.Z)(v), g = i.useMemo(() => Z.filter(r.lm), [Z]), m = i.useMemo(() => null != f && g.length > 0 && g[0].id === f && null != g[0].embeddedActivityConfig ? [{
                activity: g[0].embeddedActivityConfig,
                application: g[0]
            }] : [], [
            g,
            f
        ]), h = i.useMemo(() => n.map(e => {
            let t = g.find(t => t.id === e.application_id);
            return null == t ? null : {
                activity: e,
                application: t
            };
        }).filter(r.lm), [
            n,
            g
        ]);
    return i.useMemo(() => [
        ...m,
        ...h
    ].filter(e => {
        var t;
        let {activity: n} = e;
        return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, p.Z)((0, d.getOS)()));
    }).filter(e => {
        let {activity: n} = e;
        return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null;
    }), [
        null == t ? void 0 : t.nsfwAllowed,
        h,
        m
    ]);
}
