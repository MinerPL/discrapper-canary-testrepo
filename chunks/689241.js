s.d(t, {
	q: function () {
		return r;
	}
});
var a = s(544891),
	l = s(570140),
	n = s(173747),
	i = s(981631);
async function r(e, t, s, r) {
	if (!!n.Z.needsToFetchBuildSize(s)) {
		l.Z.dispatch({
			type: 'APPLICATION_BUILD_SIZE_FETCH_START',
			buildId: s
		});
		try {
			let n = await a.tn.post({
				url: i.ANM.APPLICATION_BUILD_SIZE(e, t, s),
				body: { manifest_ids: r },
				oldFormErrors: !0
			});
			l.Z.dispatch({
				type: 'APPLICATION_BUILD_SIZE_FETCH_SUCCESS',
				buildId: s,
				sizeKB: n.body.size_kb
			});
		} catch (e) {
			l.Z.dispatch({
				type: 'APPLICATION_BUILD_SIZE_FETCH_FAIL',
				buildId: s
			});
		}
	}
}
