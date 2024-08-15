n.d(t, {
	B: function () {
		return c;
	}
});
var s = n(470079),
	o = n(918701),
	a = n(988303),
	r = n(658590),
	l = n(448018),
	i = n(46140);
let c = (e, t) => {
	let n = (0, o.zK)(e, i.S7.QUEST_BAR_V2),
		c = (0, r.a)(e),
		{ primaryVariant: d, progressVariant: u } = a.u.useExperiment({ location: i.dr.QUESTS_BAR }, { autoTrackExposure: t && n });
	return s.useMemo(() => (c ? (0, l.v)(e, a.P.V2, a.P.V2) : n ? (0, l.v)(e, d, u) : (0, l.v)(e, a.P.V1, a.P.V1)), [c, d, u, e, n]);
};
