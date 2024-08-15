t.d(s, {
	g: function () {
		return c;
	}
}),
	t(411104),
	t(47120);
var n = t(512722),
	a = t.n(n),
	i = t(509545),
	r = t(74538),
	o = t(474936),
	l = t(981631);
function c(e, s) {
	let t = i.Z.get(e.planId);
	a()(null != t, 'missing premium subscription plan');
	let n = i.Z.getForSkuAndInterval((0, r.Wz)(o.Si.GUILD), t.interval, t.intervalCount);
	a()(null != n, 'missing premium guild plan');
	let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
		d = (e.status === l.O0b.CANCELED ? 0 : (0, r.uV)(c)) + s,
		_ = c.filter((e) => e.planId !== n.id);
	if (d < 0) throw Error('Invalid adjustment');
	return 0 === d
		? _
		: [
				..._,
				{
					planId: n.id,
					quantity: d
				}
			];
}
