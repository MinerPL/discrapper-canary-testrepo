t.d(s, {
	Z: function () {
		return l;
	}
});
var n = t(470079),
	a = t(913527),
	i = t.n(a),
	r = t(55935);
let o = i().duration(30, 'days');
function l(e, s) {
	return n.useMemo(
		() =>
			(0, r.vc)(
				s
					? null != e.outboundRedemptionEndDate
						? i()(e.outboundRedemptionEndDate)
						: i()(e.endDate).add(o)
					: i()(e.endDate),
				'LL'
			),
		[e, s]
	);
}
