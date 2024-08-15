n.d(t, {
	Z: function () {
		return c;
	}
});
var s = n(470079),
	a = n(766434),
	i = n(310291),
	r = n(730647),
	l = n(495298),
	o = n(198139);
function c(e, t) {
	let n = null == t ? void 0 : t.team,
		{ payoutsByPeriod: c, loading: d } = (0, i.Z)(null == t ? void 0 : t.id, {
			groupType: o.uw.SERVER_ROLE_SUBSCRIPTION,
			teamId: null == n ? void 0 : n.id
		}),
		u = (0, r.f)('useEarningMetrics'),
		_ = (0, l.Z)(e),
		{
			currentPeriod: I,
			previousPeriods: E,
			metrics: T
		} = s.useMemo(() => {
			let { currentPeriod: e, previousPeriods: t } = (0, a.Br)(c),
				n = (0, a.Uj)(e, t[0]);
			return {
				currentPeriod: e,
				previousPeriods: t,
				metrics: {
					...n,
					subscribers: _,
					subscriberChange: n.paymentsCountChange
				}
			};
		}, [c, _]);
	return {
		loading: d || !u,
		team: n,
		currentPeriod: I,
		previousPeriods: E,
		allPeriods: c,
		metrics: T
	};
}
