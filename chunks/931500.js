t.d(s, {
	_: function () {
		return l;
	}
}),
	t(47120);
var n = t(470079),
	a = t(392711),
	i = t.n(a),
	r = t(442837),
	o = t(651941);
function l(e) {
	let s = (0, r.e7)([o.Z], () => o.Z.getUserVerifiedKeys(e));
	return n.useMemo(
		() =>
			i()(s)
				.entries()
				.map((e) => {
					let [s, t] = e;
					return {
						verifiedKey: s,
						timestamp: t
					};
				})
				.sortBy((e) => -1 * e.timestamp)
				.value(),
		[s]
	);
}
