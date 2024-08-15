n.d(t, {
	Z: function () {
		return r;
	}
}),
	n(47120);
var i = n(442837),
	a = n(430824),
	s = n(981631);
function r() {
	return (0, i.e7)([a.Z], () =>
		Object.entries(a.Z.getGuilds())
			.filter((e) => {
				let [t, n] = e;
				return n.hasFeature(s.oNc.HUB);
			})
			.map((e) => {
				let [t, n] = e;
				return n;
			})
	);
}
