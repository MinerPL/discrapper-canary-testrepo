a.d(t, {
	G: function () {
		return l;
	}
}),
	a(47120),
	a(773603);
var n = a(470079),
	s = a(399606),
	i = a(570140),
	r = a(986197),
	o = a(135200);
let l = (e) => {
	let [t, a] = (0, s.Wu)([o.Z], () => [o.Z.usernameSuggestion(), o.Z.usernameSuggestionLoading()]);
	return (
		n.useEffect(
			() => (
				o.Z.wasSuggestionsFetched()
					? i.Z.dispatch({
							type: 'POMELO_SUGGESTIONS_FETCH',
							usernameSuggestionLoading: !1
						})
					: r.Z.fetchSuggestions(e).finally(() => {
							i.Z.dispatch({
								type: 'POMELO_SUGGESTIONS_FETCH',
								usernameSuggestionLoading: !1
							});
						}),
				() => {
					r.Z.resetSuggestions();
				}
			),
			[]
		),
		{
			usernameSuggestion: t,
			usernameSuggestionLoading: a
		}
	);
};
