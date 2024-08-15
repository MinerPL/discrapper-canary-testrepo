n.d(t, {
	HI: function () {
		return u;
	},
	gG: function () {
		return l;
	},
	hb: function () {
		return c;
	}
});
var r = n(470079),
	i = n(392711),
	a = n.n(i),
	s = n(516373);
let o = {};
function l() {
	var e, t;
	return null !== (t = null === (e = (0, s.D)().favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t
		? t
		: o;
}
function u() {
	let e = l();
	return r.useMemo(
		() =>
			a()(e)
				.map((e, t) => ({
					...e,
					url: t
				}))
				.sortBy('order')
				.reverse()
				.value(),
		[e]
	);
}
function c(e) {
	return null != l()[e];
}
