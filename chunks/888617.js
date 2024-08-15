t.d(n, {
	Z: function () {
		return o;
	}
});
var i = t(990547),
	a = t(213609),
	l = t(312871);
function o(e) {
	let { sectionName: n, numItems: t, numVisibleItems: o } = e;
	return {
		trackSectionImpressionRef: (0, l.Z)({
			onVisible: () => {
				(0, a.h)({
					type: i.ImpressionTypes.VIEW,
					name: i.ImpressionNames.APP_LAUNCHER_SECTION,
					properties: {
						section_name: n,
						num_items: t,
						num_visible_items: o
					}
				});
			},
			threshold: 1
		})
	};
}
