n.d(t, {
	h: function () {
		return s;
	}
});
var r = n(544891),
	i = n(570140),
	a = n(981631);
function s(e, t, n) {
	return (
		i.Z.dispatch({
			type: 'LIBRARY_APPLICATION_FLAGS_UPDATE_START',
			applicationId: e,
			branchId: t,
			flags: n
		}),
		r.tn
			.patch({
				url: a.ANM.LIBRARY_APPLICATION_BRANCH(e, t),
				body: { flags: n },
				oldFormErrors: !0
			})
			.then((e) => {
				i.Z.dispatch({
					type: 'LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS',
					libraryApplication: e.body
				});
			})
	);
}
