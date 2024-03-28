"use strict";
a.r(t), a.d(t, {
  useUsernameSuggestion: function() {
    return r
  }
}), a("47120"), a("773603");
var s = a("470079"),
  i = a("399606"),
  n = a("570140"),
  l = a("986197"),
  o = a("135200");
let r = e => {
  let [t, a] = (0, i.useStateFromStoresArray)([o.default], () => [o.default.usernameSuggestion(), o.default.usernameSuggestionLoading()]);
  return s.useEffect(() => (o.default.wasSuggestionsFetched() ? n.default.dispatch({
    type: "POMELO_SUGGESTIONS_FETCH",
    usernameSuggestionLoading: !1
  }) : l.default.fetchSuggestions(e).finally(() => {
    n.default.dispatch({
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