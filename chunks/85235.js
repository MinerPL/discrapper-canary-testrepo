var r = n(544891),
	i = n(570140),
	a = n(718745),
	s = n(981631);
t.Z = {
	search(e, t) {
		if (null == a.Z.getResults(e, t))
			i.Z.dispatch({
				type: 'INTEGRATION_QUERY',
				integration: e,
				query: t
			}),
				r.tn
					.get({
						url: s.ANM.INTEGRATION_SEARCH('tenor'),
						query: { q: t },
						oldFormErrors: !0
					})
					.then(
						(n) => {
							i.Z.dispatch({
								type: 'INTEGRATION_QUERY_SUCCESS',
								integration: e,
								query: t,
								results: n.body
							});
						},
						() =>
							i.Z.dispatch({
								type: 'INTEGRATION_QUERY_FAILURE',
								integration: e,
								query: t
							})
					);
	}
};
