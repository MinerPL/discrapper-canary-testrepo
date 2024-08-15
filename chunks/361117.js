s.d(t, {
  G: function() {
return o;
  }
}), s(47120), s(773603);
var n = s(470079),
  i = s(399606),
  a = s(570140),
  r = s(986197),
  l = s(135200);
let o = e => {
  let [t, s] = (0, i.Wu)([l.Z], () => [
l.Z.usernameSuggestion(),
l.Z.usernameSuggestionLoading()
  ]);
  return n.useEffect(() => (l.Z.wasSuggestionsFetched() ? a.Z.dispatch({
type: 'POMELO_SUGGESTIONS_FETCH',
usernameSuggestionLoading: !1
  }) : r.Z.fetchSuggestions(e).finally(() => {
a.Z.dispatch({
  type: 'POMELO_SUGGESTIONS_FETCH',
  usernameSuggestionLoading: !1
});
  }), () => {
r.Z.resetSuggestions();
  }), []), {
usernameSuggestion: t,
usernameSuggestionLoading: s
  };
};