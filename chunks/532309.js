t.d(n, {
	Z: function () {
		return s;
	}
});
var i = t(990547),
	a = t(442837),
	l = t(213609),
	o = t(541099),
	r = t(312871);
function s(e) {
	let { applicationId: n, commandId: t, searchResultsPosition: s, query: c } = e,
		d = (0, a.e7)([o.Z], () => o.Z.entrypoint());
	return {
		trackSearchResultsItemImpressionRef: (0, r.Z)({
			onVisible: () => {
				(0, l.h)({
					type: i.ImpressionTypes.VIEW,
					name: i.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
					properties: {
						application_id: n,
						command_id: t,
						search_results_position: s,
						query: c,
						source: d
					}
				});
			},
			threshold: 1
		})
	};
}
