"use strict";
a.r(t), a.d(t, {
  useUsernameSuggestion: function() {
    return o
  }
}), a("222007"), a("506083");
var s = a("884691"),
  n = a("65597"),
  i = a("913144"),
  l = a("255403"),
  r = a("2581");
let o = e => {
  let [t, a] = (0, n.useStateFromStoresArray)([r.default], () => [r.default.usernameSuggestion(), r.default.usernameSuggestionLoading()]);
  return s.useEffect(() => (r.default.wasSuggestionsFetched() ? i.default.dispatch({
    type: "POMELO_SUGGESTIONS_FETCH",
    usernameSuggestionLoading: !1
  }) : l.default.fetchSuggestions(e).finally(() => {
    i.default.dispatch({
      type: "POMELO_SUGGESTIONS_FETCH",
      usernameSuggestionLoading: !1
    })
  }), () => {
    l.default.resetSuggestions()
  }), []), {
    usernameSuggestion: t,
    usernameSuggestionLoading: a
  }
}