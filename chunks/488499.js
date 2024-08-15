n.d(i, {
	Z: function () {
		return l;
	}
});
var o = n(735250);
n(470079);
var t = n(180781),
	r = n(321867),
	a = n(486324);
function l(e) {
	let { type: i, analyticsPage: n, analyticsSection: l, isGIF: s, banner: c } = e;
	return [a.pC.BANNER, a.pC.AVATAR].includes(i) && s
		? (0, o.jsx)(r.Z, {
				analyticsSection: l,
				type: i
			})
		: i === a.pC.GUILD_BANNER
			? (0, o.jsx)(t.Z, {
					analyticsSection: l,
					analyticsPage: n,
					isGIF: s,
					banner: c
				})
			: null;
}
