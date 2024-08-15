n(47120);
var s = n(470079),
	a = n(392711),
	i = n.n(a),
	r = n(232473);
let l = (e) => {
	let t = {};
	for (let n of e) {
		let e = ''.concat(n.period_starting_at, ',').concat(n.status);
		null == t[e] &&
			(t[e] = {
				key: e,
				periodStartingAt: n.period_starting_at,
				ppgs: {},
				paymentsCount: 0,
				amount: 0
			});
		let s = t[e];
		(s.amount += n.amount), (s.paymentsCount += n.payments_count), (s.ppgs[n.grouping_id] = n);
	}
	return i().orderBy(Object.values(t), ['periodStartingAt'], ['desc']);
};
t.Z = (e, t) => {
	let { groupType: n, teamId: a } = t,
		[i, o] = s.useState(!0),
		[c, d] = s.useState([]),
		u = s.useCallback(async () => {
			if ((d([]), null == e)) {
				o(!1);
				return;
			}
			try {
				o(!0);
				let t = await r.C(e, { grouping_type: n });
				d(t);
			} catch {
			} finally {
				o(!1);
			}
		}, [e, n]);
	return (
		s.useEffect(() => {
			u();
		}, [u]),
		{
			payoutsByPeriod: s.useMemo(() => l(null != a ? c.filter((e) => e.user_id === a) : c), [c, a]),
			loading: i
		}
	);
};
