n.d(t, {
	s: function () {
		return s;
	}
});
var r = n(688619),
	i = n.n(r);
function a(e, t, n) {
	if (!i().valid(t)) return e.map(() => '#000000');
	let r = i()(t),
		a = r.luminance();
	return e.map((e, t) => r.luminance((e * n[t].base + a * n[t].tint) / (n[t].base + n[t].tint)).hex());
}
function s(e) {
	let { primaryBaseColors: t, primaryTintColor: n, primaryTintLuminances: r, primaryLuminanceWeights: i, secondaryBaseColors: s, secondaryTintColor: o, secondaryTintLuminances: l, secondaryLuminanceWeights: u } = e,
		c = null != n ? a(r, n, i) : t,
		d = [];
	return (
		null != s && null != l && null != u && (d = null != o ? a(l, o, u) : s),
		{
			primaryColorsTransformed: c,
			secondaryColorsTransformed: d
		}
	);
}
