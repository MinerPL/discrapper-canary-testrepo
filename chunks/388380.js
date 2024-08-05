var i = n(544891),
  a = n(570140),
  s = n(981631);
t.Z = {
  async fetch() {
try {
  let e = await i.tn.get({
    url: s.ANM.FRIEND_SUGGESTIONS
  });
  a.Z.dispatch({
    type: 'LOAD_FRIEND_SUGGESTIONS_SUCCESS',
    suggestions: e.body
  });
} catch (e) {
  a.Z.dispatch({
    type: 'LOAD_FRIEND_SUGGESTIONS_FAILURE'
  });
}
  },
  ignore(e) {
i.tn.del(s.ANM.FRIEND_SUGGESTION(e));
  }
};