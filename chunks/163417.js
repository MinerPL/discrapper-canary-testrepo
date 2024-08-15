n.d(t, {
	Z: function () {
		return l;
	}
});
var i = n(735250);
n(470079);
var a = n(145641),
	s = n(322701),
	r = n(617015);
function l(e) {
	let {
		relationshipCount: t,
		statusSections: n,
		renderRow: l,
		searchQuery: o,
		sectionFilter: c,
		useReducedMotion: d
	} = e;
	return t >= r.nG
		? (0, i.jsx)(a.Z, {
				statusSections: n,
				renderRow: l,
				searchQuery: o
			})
		: (0, i.jsx)(s.Z, {
				statusSections: n,
				renderRow: l,
				sectionFilter: c,
				searchQuery: o,
				useReducedMotion: d
			});
}
