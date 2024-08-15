n.d(t, {
	x: function () {
		return o;
	}
}),
	n(789020);
var r = n(271383),
	i = n(630388),
	a = n(549817),
	s = n(372897);
function o(e) {
	return new Promise((t) => {
		r.ZP.addConditionalChangeListener(() => {
			var n;
			let o = r.ZP.getSelfMember(e);
			return (
				!(0, i.yE)(null !== (n = null == o ? void 0 : o.flags) && void 0 !== n ? n : 0, s.q.COMPLETED_ONBOARDING) ||
				(a.Z.finishOnboarding(e), t(), !1)
			);
		});
	});
}
