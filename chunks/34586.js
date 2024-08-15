E.d(_, {
	E: function () {
		return t;
	}
});
var s = E(442837),
	T = E(650774),
	I = E(206583),
	n = E(981631);
function t(e) {
	return (0, s.e7)([T.Z], () => {
		if (null == e) return;
		let _ = T.Z.getMemberCount(e.id),
			E = e.hasFeature(n.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
			s = e.hasFeature(n.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
			t = null != _ && _ < I.k4;
		return E || s ? E : t;
	});
}
